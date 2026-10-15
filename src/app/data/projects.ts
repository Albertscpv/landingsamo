export type Project = {
  name: string;
  blurb: string;
  stack: string[];
  status: "Publicado" | "En desarrollo" | "Código abierto";
  demo?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    name: "El Jardín de Pan",
    blurb:
      "Un jardín virtual en pixel art 3D sobre islas flotantes. Siembras, cosechas y cuidas animales, y todo sigue creciendo con el reloj real aunque cierres la pestaña.",
    stack: ["Three.js", "React", "TypeScript"],
    status: "Publicado",
    demo: "https://el-jardin-ashy.vercel.app",
    repo: "https://github.com/Albertscpv/el-jardin",
  },
  {
    name: "Portafolio personal",
    blurb:
      "Un sitio personal pensado como panel de instrumentos espacial: campo de estrellas en vivo y tres materiales visuales (neumorfismo, vidrio y líquido) usados con intención.",
    stack: ["React", "Vite", "Tailwind", "Motion"],
    status: "Publicado",
    demo: "https://chris-monge-dev.vercel.app",
    repo: "https://github.com/Albertscpv/portafolio",
  },
  {
    name: "Reserve Seat",
    blurb:
      "Aplicación de reservas de asientos con roles de administrador y usuario, y gestión de salones y paquetes. Pensada para negocios que organizan eventos.",
    stack: ["React", "TypeScript", "Firebase"],
    status: "Código abierto",
    repo: "https://github.com/Albertscpv/reserve-seat-beta",
  },
  {
    name: "Encriptador de texto",
    blurb:
      "Herramienta sencilla para cifrar y descifrar mensajes directo en el navegador, sin registro ni servidores de por medio.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Publicado",
    demo: "https://encriptador-de-texto-topaz.vercel.app",
    repo: "https://github.com/Albertscpv/EncriptadordeTexto",
  },
  {
    name: "Clon de Spotify",
    blurb:
      "Réplica de la interfaz de Spotify para practicar arquitectura de componentes y rendimiento con islas de interactividad.",
    stack: ["Astro", "Svelte", "TypeScript", "Tailwind"],
    status: "Código abierto",
    repo: "https://github.com/Albertscpv/astro-spotify",
  },
  {
    name: "Hex App",
    blurb:
      "Una aplicación de notas para hacer más simple algo que suele ser complicado. Todavía en construcción.",
    stack: ["Next.js", "TypeScript", "Firebase"],
    status: "En desarrollo",
    repo: "https://github.com/SamoSpace/Hex-App",
  },
];

export const soda506 = {
  name: "Soda 506",
  blurb:
    "Material gráfico para redes sociales de una soda en San Antonio de Escazú: promociones, combos y menú con una identidad retro, colorida y fácil de reconocer.",
  images: [1, 2, 3, 4, 5, 6, 7].map((n) => ({
    src: `/portafolio/Soda506/Soda506P${n}.${n >= 6 ? "png" : "jpg"}`,
    alt: `Diseño de Soda 506, pieza ${n}`,
  })),
};
