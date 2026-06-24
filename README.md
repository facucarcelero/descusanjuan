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
