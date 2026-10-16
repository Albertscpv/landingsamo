# Ideas para ampliar el portafolio de Tkyo

Criterio: proyectos pequeños, que se construyen en 1 a 2 semanas, que reutilizan
lo que ya existe y que un negocio local entiende de inmediato. Cada uno sirve
como demo publicada y también como oferta de servicio.

| # | Proyecto | Blurb para la web | Qué reutiliza | Quién lo compraría |
|---|----------|-------------------|---------------|--------------------|
| 1 | **Menú digital con QR** | Tu menú siempre actualizado, a un escaneo de distancia. Cambia precios y platos en segundos. | Diseño de Soda 506 + Next.js | Sodas, cafeterías, food trucks |
| 2 | **Pedidos por WhatsApp** | Catálogo en línea con carrito que envía el pedido ya armado a tu WhatsApp. | Next.js + Tailwind | Emprendimientos de comida y productos |
| 3 | **Reservas para negocios** | Calendario de citas o mesas con confirmación automática y panel de administración. | `reserve-seat-beta` (roles admin/usuario, Firebase) | Salones, barberías, consultorios |
| 4 | **Link en bio profesional** | Una sola página con todos tus enlaces, tu catálogo y tu contacto. | Astro/Next + Tailwind | Creadores y emprendedores en redes |
| 5 | **Landing de evento** | Página de invitación con cuenta regresiva, ubicación y confirmación de asistencia. | Landing actual + formulario | Cumpleaños, bodas, talleres |
| 6 | **Kit de marca para redes** | Logo, paleta y 10 plantillas editables para que publiques con identidad propia. | Trabajo de Soda 506 | Cualquier negocio nuevo |
| 7 | **Panel de ventas simple** | Registra ventas del día y mira tus números sin Excel. | Hex App + Firebase | Negocios pequeños con caja manual |

## Ya construido

- **Menú digital con pedido por WhatsApp**: demo en `/demos/menu` con el menú real de Soda 506.
- **Control de ventas y gastos** (versión mínima del panel de ventas): demo en `/demos/caja`.

## Orden sugerido

1. **Menú digital con QR** y **Pedidos por WhatsApp**: el mercado más cercano
   (sodas y emprendimientos de comida, como Soda 506) y los más rápidos de hacer.
2. **Reservas**: casi está hecho, solo falta pulirlo y desplegarlo (la demo de
   `reserve-seat-beta` hoy devuelve 404).
3. **Kit de marca**: se arma con el material que ya existe.

## Pendientes del portafolio actual

- Redesplegar `reserve-seat-beta` y agregar su enlace de demo.
- Terminar Hex App (el home hoy dice "ahorita lo hago") antes de promoverla.
- Agregar capturas de pantalla de cada proyecto a las tarjetas.
- Pedir permiso a Soda 506 para citarlos como cliente.
- Considerar registrar el dominio propio de Tkyo y migrar desde `homesamod.vercel.app`.
