# Pagos Labs — sitio corporativo

Sitio estático de Pagos Labs, servido en GitHub Pages.

Sitio: https://pagos.yvyresearch.link

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

Eso deja el sitio en `docs/`, sin `basePath`, listo para el dominio `pagos.yvyresearch.link` (`docs/CNAME`).

GitHub Pages está configurado en la rama `main`, carpeta `/docs`.

## Registro DNS en IONOS

En **Adjust DNS settings** de `yvyresearch.link`:

| Tipo  | Host  | Apunta a / valor              | TTL (el que ofrezca IONOS) |
|-------|-------|-------------------------------|----------------------------|
| CNAME | pagos | yvybitec-bigbot.github.io     | predeter.                  |

Host: `pagos`  
Valor: `yvybitec-bigbot.github.io`

## Notas

- La web está en español. El eslogan, en inglés, es la única excepción: *We Build Private Blockchain Infrastructure.*
- No usa cookies ni rastreadores.
- El formulario de contacto valida en el navegador y envía la consulta por correo. Si el envío falla, se puede copiar el texto.
- En public copy se usa «intercambiar», nunca «venta/vender».
