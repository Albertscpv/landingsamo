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
  { icon: Palette, title: "Diseño gráfico", text: "Flyers, menús, publicaciones y todo lo que tu negocio necesita para verse profesional." },
  { icon: Globe, title: "Diseño web", text: "Sitios claros, rápidos y hechos a la medida, para que tus clientes te encuentren." },
  { icon: Code2, title: "Desarrollo de software", text: "¿Tienes una idea o un proceso que automatizar? Lo convertimos en una aplicación." },
  { icon: Megaphone, title: "Marketing digital", text: "Contenido y estrategia para que tu negocio se mueva en redes." },
];

const extras = [
  { icon: Camera, text: "Fotografía de producto y de eventos. Próximamente, Tkyo F." },
  { icon: PartyPopper, text: "Eventos especiales, con todo organizado para que solo disfrutes." },
  { icon: GraduationCap, text: "Charlas y talleres para aprender el mundo digital sin tecnicismos." },
  { icon: Brush, text: "Arte, pintura y dibujo para guardar tus recuerdos de forma única." },
  { icon: Gamepad2, text: "Gamers y streamers: interfaces diseñadas y apoyo con moderación." },
  { icon: Box, text: "Figuras y diseño 3D para ideas que necesitan forma." },
];

const purpose = [
  "Que cada emprendedor y pequeño negocio tenga un lugar digno en el mundo digital.",
  "Compartir lo que sabemos y enseñar a otros sobre tecnología, sin barreras.",
  "Seguir curiosos: explorar el mundo y las cosas increíbles que esconde.",
  "Crecer ayudando a las personas a lograr lo que se proponen.",
];

const steps = [
  { title: "Escuchamos", text: "Entendemos cómo funciona tu negocio y qué te quita tiempo antes de proponer nada." },
  { title: "Proponemos", text: "Te decimos qué hacer primero, cuánto cuesta y cuánto tarda, sin letra pequeña." },
  { title: "Construimos", text: "Entregamos por etapas para que veas avances reales y puedas opinar en el camino." },
  { title: "Acompañamos", text: "Te enseñamos a usarlo y seguimos disponibles cuando tu negocio crezca." },
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
            Somos un estudio pequeño que ayuda a emprendedores y negocios locales a dar el salto
            al mundo digital: diseño, desarrollo y estrategia, con trato cercano y sin
            complicaciones.
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
          <h2 className="section-title">Nuestro propósito</h2>
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
          <h2 className="section-title">¿Qué hacemos?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl">
            Nacimos para ayudar a quien lo necesite. Estos son los servicios con los que
            podemos acompañarte:
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
          <h2 className="section-title">También podemos ayudarte con</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {extras.map(({ icon: Icon, text }) => (
              <li key={text} className="card p-5 flex gap-4 items-start">
                <Icon className="h-5 w-5 shrink-0 mt-0.5 text-[var(--accent)]" />
                <span className="text-sm text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Proceso */}
        <section>
          <h2 className="section-title">Cómo trabajamos</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <li key={step.title} className="card p-6">
                <span className="font-mono text-[var(--accent)]">0{i + 1}</span>
                <h3 className="font-bold mt-2 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Equipo */}
        <section>
          <h2 className="section-title">Nuestro equipo</h2>
          <p className="text-gray-400 mb-8">
            Somos un equipo pequeño y vamos creciendo poco a poco. ¿Te gustaría sumarte o trabajar
            con nosotros?
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
              <p className="text-[var(--accent)] text-sm mb-3">Desarrollador y contador</p>
              <p className="text-gray-400">
                Desarrollo full stack con formación contable: leo un negocio como leo un código. Me gusta entender bien el problema de cada cliente y buscarle
                una solución que funcione de verdad.
              </p>
            </div>
          </div>
        </section>

        <Portafolio />
      </main>
    </div>
  );
}
