export type Project = {
  name: string;
  /** Qué problema resuelve, en una frase. */
  problem: string;
  blurb: string;
  stack: string[];
  status: "Demo funcional" | "Publicado" | "Código abierto";
  /** Ruta interna (empieza con "/") o URL externa. */
  demo?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    name: "Menú digital con pedido por WhatsApp",
    problem: "Menús en PDF o fotos que se desactualizan y pedidos que se pierden en el chat.",
    blurb:
      "Un menú que se ve bien en el celular, con carrito y un botón que arma el pedido completo y lo envía por WhatsApp. Probado con el menú real de Soda 506.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    status: "Demo funcional",
    demo: "/demos/menu",
  },
  {
    name: "Control de ventas y gastos",
    problem: "Negocios que llevan las cuentas en cuadernos o en Excel y no saben cuánto ganan de verdad.",
    blurb:
      "Registra ventas y gastos, y ve la utilidad y el margen del mes al instante. Exporta a CSV para tu contador. Nace de mirar el negocio con ojos de contador.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    status: "Demo funcional",
    demo: "/demos/caja",
  },
  {
    name: "Reserve Seat",
    problem: "Eventos y salones que gestionan sus reservas por mensajes y llamadas.",
    blurb:
      "Reservas con roles de administrador y usuario, y paneles para gestionar salones y paquetes. Es la base de nuestro sistema de citas y reservas.",
    stack: ["React", "TypeScript", "Firebase"],
    status: "Código abierto",
    repo: "https://github.com/Albertscpv/reserve-seat-beta",
  },
  {
    name: "El Jardín de Pan",
    problem: "Demostrar hasta dónde llega nuestro nivel técnico y de diseño.",
    blurb:
      "Un jardín virtual en pixel art 3D sobre islas flotantes que sigue creciendo con el reloj real aunque cierres la pestaña. Todo el arte se genera desde código.",
    stack: ["Three.js", "React", "TypeScript"],
    status: "Publicado",
    demo: "https://el-jardin-ashy.vercel.app",
    repo: "https://github.com/Albertscpv/el-jardin",
  },
];

export const soda506 = {
  name: "Soda 506",
  blurb:
    "Diseño gráfico para una soda de San Antonio de Escazú: promociones, combos y menú con una identidad retro y fácil de reconocer. Los precios y platos de estas piezas alimentan la demo de menú digital.",
  images: [1, 2, 3, 4, 5, 6, 7].map((n) => ({
    src: `/portafolio/Soda506/Soda506P${n}.${n >= 6 ? "png" : "jpg"}`,
    alt: `Diseño de Soda 506, pieza ${n}`,
  })),
};
