import { z } from 'zod';

const environmentSchema = z.object({
  API_URL: z.url().default('http://localhost:4000'),
  APP_URL: z.url().default('http://localhost:1500'),
  ADMIN_URL: z.url().default('http://localhost:3001'),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().min(1).max(65_535).default(4000),
});

export type Environment = z.infer<typeof environmentSchema>;

export function readEnvironment(input: NodeJS.ProcessEnv): Environment {
  return environmentSchema.parse(input);
}
