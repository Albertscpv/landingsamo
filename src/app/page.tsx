import Image from "next/image";
import {
  Palette,
  Globe,
  Code2,
  Megaphone,
  Camera,
  PartyPopper,
  GraduationCap,
  Brush,
  Gamepad2,
  Box,
} from "lucide-react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CodeComponent from "./components/CodeComponent";
import Portafolio from "./components/Portafolio";

const services = [
  { icon: Palette, title: "Diseño Gráfico", text: "Flyers y recursos para tu negocio." },
  { icon: Globe, title: "Diseño Web", text: "Para que te adentres en el mundo digital de una mejor manera." },
  { icon: Code2, title: "Desarrollo de Software", text: "¿Tienes una idea para solucionar algo? Te ayudamos a crearla." },
  { icon: Megaphone, title: "Marketing Digital", text: "Impulsa tu negocio en redes." },
];

const extras = [
  { icon: Camera, text: "Fotografía: me estoy especializando, próximamente tendrán a Tkyo F." },
  { icon: PartyPopper, text: "Eventos especiales, para hacer tus fechas inolvidables." },
  { icon: GraduationCap, text: "Charlas de aprendizaje, el Dev se encargará de ello." },
  { icon: Brush, text: "Arte, pinturas o dibujos para plasmar recuerdos de una forma preciosa." },
  { icon: Gamepad2, text: "¿Eres gamer y haces streams? Moderadores e interfaces diseñadas." },
  { icon: Box, text: "Figuras y diseño 3D, en algo podrían ser de utilidad." },
];

const purpose = [
  "Ayudar a todos los emprendedores y pequeños negocios a hacerse ver en el mundo digital.",
  "Ayudar, compartir y enseñar a todos sobre el futuro y el mundo digital.",
  "Conocer el mundo y las cosas increíbles que esconde.",
  "Ser una de las empresas más grandes ayudando a las personas a ser personas.",
];

export default function WelcomePage() {
  return (
    <div className="min-h-screen text-white font-inter">
      <Header />
      <Banner />

      <main className="mx-auto max-w-6xl px-6 py-12 space-y-20">
        {/* Intro */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold mb-6">
            Bienvenidos a Tkyo
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Tkyo es un emprendimiento que busca ayudar a las personas y a los negocios a
            integrarse al mundo digital, además de ofrecer otros servicios que harán de tus
            proyectos y actividades algo especial.
          </p>
        </section>

        {/* Código + imagen */}
        <section className="grid md:grid-cols-2 gap-8 items-start">
          <CodeComponent />
          <div className="relative h-[420px] rounded-2xl overflow-hidden border border-[var(--border)]">
            <Image src="/mainImages/Arte.jpeg" alt="Arte" fill className="object-cover" />
          </div>
        </section>

        {/* Propósito */}
        <section>
          <h2 className="section-title">Mi propósito</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {purpose.map((p, i) => (
              <div key={p} className="card p-6 flex gap-4">
                <span className="font-mono text-[var(--accent)] text-xl">0{i + 1}</span>
                <p className="text-gray-300">{p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Servicios */}
        <section>
          <h2 className="section-title">¿Qué soy capaz de hacer?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl">
            Fui creado con el fin de ayudar a todas las personas que lo requieran. Entre las cosas
            que puedo hacer están:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card p-6">
                <Icon className="h-7 w-7 text-[var(--accent)] mb-4" />
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Extras */}
        <section>
          <h2 className="section-title">Otras cosas en las que puedo ayudarte</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {extras.map(({ icon: Icon, text }) => (
              <li key={text} className="card p-5 flex gap-4 items-start">
                <Icon className="h-5 w-5 shrink-0 mt-0.5 text-[var(--accent)]" />
                <span className="text-sm text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Equipo */}
        <section>
          <h2 className="section-title">Nuestro equipo</h2>
          <p className="text-gray-400 mb-8">
            Realmente somos un equipo pequeño, que con el tiempo irá creciendo. ¿Te gustaría formar
            parte?
          </p>
          <div className="card grid md:grid-cols-2 overflow-hidden max-w-3xl">
            <div className="relative h-72 md:h-full min-h-[18rem]">
              <Image
                src="/mainImages/CharlaCTPE.webp"
                alt="Christopher Monge"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <h3 className="font-mono font-bold text-xl">Christopher Monge</h3>
              <p className="text-[var(--accent)] text-sm mb-3">el Dev</p>
              <p className="text-gray-400">
                Me considero una persona proactiva, que ama conversar y buscarle soluciones a
                problemas algo difíciles.
              </p>
            </div>
          </div>
        </section>

        <Portafolio />
      </main>
    </div>
  );
}
