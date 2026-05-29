# FactuX Public Site

Sitio publico de FactuX construido con `React`, `Vite`, `TypeScript` y `Tailwind`.

## Desarrollo local

1. Instala dependencias:

```bash
npm install
```

2. Crea tu archivo de entorno desde `.env.example`.

3. Inicia el servidor:

```bash
npm run dev
```

## Variable de entorno

La URL del boton `Iniciar sesion` se controla con:

```env
VITE_APP_LOGIN_URL=https://tu-app-admin.onrender.com/login
```

## Deploy en Render

Este proyecto esta configurado para `Static Site`.

Configuracion principal:

- Type: `Static Site`
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`
- Rewrite SPA: `/* -> /index.html`

### Repo dedicado

Si subes `factux-public-site` como repositorio independiente, Render detecta `render.yaml` en la raiz y solo debes definir:

- `VITE_APP_LOGIN_URL`

### Monorepo

Si este proyecto vive dentro de un repositorio mas grande, en Render define el `Root Directory` como:

```text
factux-public-site
```

Y luego agrega la variable:

```env
VITE_APP_LOGIN_URL=https://tu-app-admin.onrender.com/login
```

## Nota importante

`VITE_APP_LOGIN_URL` es publica por definicion porque queda embebida en el frontend compilado. No uses este prefijo para secretos.
