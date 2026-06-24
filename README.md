# descusanjuan

Monorepo de la plataforma Descu San Juan.

## Requisitos

- Node.js 22+
- npm 10+

## Desarrollo local

```bash
npm install
cp .env.example .env
npm run dev
```

`npm run dev` libera automáticamente los puertos 1500, 3001 y 4000 antes de arrancar. Si necesitás detener el servidor manualmente, usá `npm run dev:stop`.

| Servicio | URL |
|----------|-----|
| Web | http://localhost:1500 |
| Admin | http://localhost:3001 |
| API | http://localhost:4000 |
| Swagger | http://localhost:4000/api/docs |

## Scripts

- `npm run dev` — levanta web, admin y API en paralelo
- `npm run build` — build de producción
- `npm run test` — tests
- `npm run typecheck` — verificación de tipos
- `npm run lint` — lint y formato
