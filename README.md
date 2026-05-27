# FactuX Public Site

Sitio publico de FactuX construido con Next.js, TypeScript y Tailwind.

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
NEXT_PUBLIC_APP_LOGIN_URL=https://tu-app-admin.onrender.com/login
```

## Deploy en Render

Este proyecto incluye `render.yaml`.

Configuracion principal:

- Runtime: `Node`
- Build Command: `npm install && npm run build`
- Start Command: `npm run start`
- Health Check Path: `/`

### Opcion 1: Repo dedicado

Si subes `factux-public-site` como repositorio independiente, Render detecta `render.yaml` en la raiz y solo debes definir:

- `NEXT_PUBLIC_APP_LOGIN_URL`

### Opcion 2: Monorepo

Si este proyecto vive dentro de un repositorio mas grande, en Render define el `Root Directory` como:

```text
factux-public-site
```

Y luego agrega la variable:

```env
NEXT_PUBLIC_APP_LOGIN_URL=https://tu-app-admin.onrender.com/login
```

## Nota importante

`NEXT_PUBLIC_APP_LOGIN_URL` es publica por definicion, porque Next.js la expone al frontend. No pongas secretos usando prefijo `NEXT_PUBLIC_`.
