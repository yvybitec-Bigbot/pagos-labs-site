# Pagos Labs — sitio corporativo

Sitio estático de Pagos Labs, listo para GitHub Pages.

Vista previa: https://yvybitec-bigbot.github.io/pagos-labs-site/

Dominio previsto (aún no apuntado): `pagos.yvyresearch.link`

Esta versión **no** incluye un archivo `CNAME`. El dominio se añadirá cuando Carlos elija entre `pagos.yvyresearch.link` y el dominio principal.

## Cómo verlo en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Cómo generar la carpeta que sirve GitHub Pages

```bash
npm run build:pages
```

Eso deja el sitio en `docs/`, con las rutas preparadas para:

`https://yvybitec-bigbot.github.io/pagos-labs-site/`

GitHub Pages está configurado en la rama `main`, carpeta `/docs`.

Cuando el sitio pase a un dominio propio, hay que quitar el `basePath` (`/pagos-labs-site`) en `next.config.ts` y en el script `build:pages`, y entonces sí añadir un archivo `CNAME` con el dominio elegido.

## Registro DNS en IONOS (cuando Carlos lo pida)

En **Adjust DNS settings** de `yvyresearch.link`:

| Tipo  | Host  | Apunta a / valor              | TTL (el que ofrezca IONOS) |
|-------|-------|-------------------------------|----------------------------|
| CNAME | pagos | yvybitec-bigbot.github.io     | predeter.                  |

Host: `pagos`  
Valor: `yvybitec-bigbot.github.io`

No añadir todavía el archivo `CNAME` en este repositorio.

## Notas

- La web está en español. El eslogan, en inglés, es la única excepción: *We Build Private Blockchain Infrastructure.*
- No usa cookies ni rastreadores.
- El formulario de contacto valida en el navegador y permite copiar la consulta. El envío a un buzón aún no está conectado (no se ha publicado un correo de Pagos Labs).
- En public copy se usa «intercambiar», nunca «venta/vender».
