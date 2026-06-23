import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { FastifyAdapter, type NestFastifyApplication } from '@nestjs/platform-fastify';
import helmet from '@fastify/helmet';

import { AppModule } from './app.module.js';
import { readEnvironment } from './environment.js';

async function bootstrap(): Promise<void> {
  const environment = readEnvironment(process.env);
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: environment.NODE_ENV === 'development' }),
  );

  await app.register(helmet, { contentSecurityPolicy: environment.NODE_ENV === 'production' });
  app.enableCors({
    credentials: true,
    origin: [environment.APP_URL, environment.ADMIN_URL],
  });
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      transform: true,
      whitelist: true,
    }),
  );

  const document = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('Descu San Juan API')
      .setDescription('Contrato versionado de la plataforma de beneficios.')
      .setVersion('1.0')
      .build(),
  );
  SwaggerModule.setup('api/docs', app, document);

  await app.listen({ host: '0.0.0.0', port: environment.PORT });
  Logger.log(`API listening on ${environment.API_URL}`, 'Bootstrap');
}

void bootstrap();
