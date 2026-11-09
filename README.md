# BEATSTORE — tu catálogo

## Publicar en GitHub Pages
1. Creá un repositorio en GitHub (por ejemplo `beatstore`) y subí todos los archivos de esta carpeta.
2. En el repositorio: **Settings → Pages → Build and deployment → Deploy from a branch**; elegí `main` y `/ (root)`, guardá.
3. Esperá unos minutos y abrí la URL que GitHub Pages te muestra.

## Editar el catálogo
Abrí `app.js`. Cambiá `email`, `spotify`, `youtube` y agregá objetos dentro de `beats`, por ejemplo:
```js
{title:"Mi Beat", description:"Trap melódico · 145 BPM · C#m", price:12000, type:"WAV + FLP", cover:"covers/mi-beat.jpg", audio:"audio/mi-beat.mp3", free:false, link:"https://tu-link-de-pago"}
```
Subí la portada a `covers/` y el preview de audio a `audio/`. Para cambiar precio/descripción, editá esos campos y volvé a subir `app.js`.
`audio` se reserva para previews; no se publica el archivo WAV/FLP completo directamente en el catálogo.

## Importante: cobros y entregas
Esta versión es un **catálogo estático**: no puede detectar transferencias a un CVU, verificar pagos automáticamente, guardar pedidos ni enviar archivos por email. No pongas el RAR/WAV privado en el repositorio público.
Para cobro automático y entrega instantánea necesitás integrar un checkout de Mercado Pago (preferentemente Checkout Pro con backend/servidor y notificaciones webhook) o un servicio de tienda digital. El CVU por sí solo no permite verificar de forma segura quién pagó ni qué compra corresponde. Nunca muestres “pago verificado” por una captura o por una URL manipulable.
