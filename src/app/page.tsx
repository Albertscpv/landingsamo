import Image from "next/image"
import { MicroscopeIcon } from "lucide-react"
import Header from "./components/Header"
import Banner from "./components/Banner"
import CodeComponent from "./components/CodeComponent"


export default function WelcomePage() {
  return (
    <div className="min-h-screen text-white font-inter">
      {/* Header */}
          <Header/>
      {/* Banner */}
      <Banner/>

      {/* Main Content */}
      <main className="p-8 font-mono">
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
              src="/rocket.jpg"
              alt="Rocket launch trail"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="relative h-[500px]">
            <Image
              src="/Arte.jpeg"
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
              <h2 className="text-2xl font-bold mb-4">What we do?</h2>
            <hr className="mb-4"/>
              <p>I’m am a very diverse company that seeks to meet many needs of entrepreneurs.</p>
              <ul className="list-disc space-y-2 pl-6 m-4">
                <li>Graphic Desing</li>
                <li>Web Design</li>
                <li>Software Development</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="my-4">
            <h2 className="text-2xl font-bold mb-4">Some services that we offer: </h2>
          <hr className="mb-6"/>
          </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <hr className="mb-6"/>
          <p>Well, big things need big minds</p>
        <div className="grid md:grid-cols-2 gap-8 my-6">
            <div className="flex flex-col gap-4">
              <Image
                src="/CharlaCTPE.webp"
                alt="Rocket launch trail"
                width={600}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
              <h2 className="pl-4 font-monoBold">Christopher Monge</h2>
            </div>
            <div className="flex flex-col gap-4"> 
              <Image
                src="/SunFlowers.webp"
                alt="Rocket launch trail"
                width={600}
                height={500}
                className="w-full h-full min-w-[50%] object-cover rounded-lg"
              />
              <h2 className="pl-4 font-monoBold">Susana Porras</h2>
            </div>
        </div>
        </div>
      </main>
    </div>
  )
}

