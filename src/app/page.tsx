import Image from "next/image"
import { MicroscopeIcon } from "lucide-react"
import Header from "./components/Header"
import Banner from "./components/Banner"
import CodeComponent from "./components/CodeComponent"
import Portafolio from "./components/Portafolio"


export default function WelcomePage() {
  return (
    <div className="min-h-screen text-white font-inter">
      {/* Header */}
          <Header/>
      {/* Banner */}
      <Banner/>

      {/* Main Content */}
      <main className="p-8 font-inter">
        <div className="mb-8 flex justify-center">
          <MicroscopeIcon className="w-12 h-12 text-gray-400" />
        </div>
        <h1 className="text-4xl font-mono font-bold mb-8 text-center">Bienvenidos a Samo</h1>
        <hr className="mb-4"/>
        <p className="my-4">
          Soy un emprendimiento formado por una pareja de emprendedores que buscan ayudar a las personas a poder ingresar en el mundo digital, 
          además de otros servicios que estoy seguro les serviran a muchos.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Code Section */}
            <CodeComponent/>
          {/* Image Section */}
          <div className="relative h-[400px]">
            <Image
              src="/mainImages/rocket.jpg"
              alt="Rocket launch trail"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="relative h-[500px]">
            <Image
              src="/mainImages/Arte.jpeg"
              alt="Rocket launch trail"
              width={600}
              height={500}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Mi propósito: </h2>
            <hr className="mb-4"/>
            <ul className="list-disc space-y-2 pl-6 mb-4">
              <li>Ayudar a todos los emprendedores y pequeños negocios a hacerse ver en el mundo digital.</li>
              <li>Help, share and teach everyone about the future and the digital world.</li>
              <li>Knowing the world and the amazing things it hides.</li>
              <li>Being one of the largest companies helping people to be people.</li>
            </ul>
          </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Qué soy capaz de hacer?</h2>
            <hr className="mb-4"/>
              <p>Fui creado con el fin de ayudar a todas las personas que lo requieran. Entre 
                las cosas que puedo hacer están: 
              </p>
              <ul className="list-disc space-y-2 pl-6 m-4">
                <li><b>Diseño Gráfico</b>, por si quieres flyers o recursos para tu negocio.</li>
                <li><b>Diseño Web</b>, para que te adentres en el mundo digital de una mejor manera.</li>
                <li><b>Desarrollo de Software</b>, ¿Tienes una idea para solucionar algo y quieres ayuda para crearla?</li>
                <li><b>Marketing Digital</b>, por si lo tuyo es impulsar tu negocio en redes.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="my-4">
            <h2 className="text-2xl font-bold mb-4">Otras cosas en las que puedo ayudarte: </h2>
          <hr className="mb-6"/>
          <ul className="list-disc space-y-2 pl-6 m-4">
            <li>Fotografia, me estoy especializando, próximamente tendrán a Samo F.</li>
            <li>Eventos especiales, para hacer tus fechas inolvidables</li>
            <li>Charlas de aprendizaje, el <b><i>Dev</i></b> se encargará de ello.</li>
            <li>Arte, pinturas o dibujos. Para plasmar recuerdos de una forma preciosa.</li>
            <li>¿Eres gamer y te gusta hacer streams? Podemos ayudarte con moderadores e interfaces diseñadas.</li>
          </ul>
          </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <hr className="mb-6"/>
          <p>Realmente somos un equipo pequeño, que con el tiempo irá creciendo. ¿Te gustaría formar parte?</p>
        <div className="grid md:grid-cols-2 gap-8 my-6">
            <div className="flex flex-col gap-4">
              <Image
                src="/mainImages/CharlaCTPE.webp"
                alt="Rocket launch trail"
                width={600}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
              <h2 className="pl-4 font-inter font-bold">Christopher Monge, el Dev</h2>
              <p>Me considero una persona proactiva, que ama conversar y buscarle soluciones a problemas, algo difíciles.</p>
            </div>
            <div className="flex flex-col gap-4"> 
              <Image
                src="/mainImages/SunFlowers.webp"
                alt="Rocket launch trail"
                width={600}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
              <h2 className="pl-4 font-inter font-bold">Susana Porras, la Artista</h2>
              <p></p>
            </div>
          </div>
        <Portafolio/>
        </div>
      </main>
    </div>
  )
}

