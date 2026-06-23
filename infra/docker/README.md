# Entorno local

Este compose levanta únicamente PostgreSQL y Redis para desarrollo. No ejecuta seeds ni inserta datos de negocio.

```powershell
docker compose -f infra/docker/compose.yaml up -d
```

Para detener y eliminar también los volúmenes locales:

```powershell
docker compose -f infra/docker/compose.yaml down --volumes
```
