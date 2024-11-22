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
        <div className="mb-8">
          <MicroscopeIcon className="w-12 h-12 text-gray-400" />
        </div>
        <h1 className="text-4xl font-mono mb-8">Welcome to Samo</h1>
        <hr className="mb-4"/>
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
            <h2 className="text-2xl mb-4">My Goals: </h2>
            <hr className="mb-4"/>
            <ul className="list-disc space-y-2 pl-6 mb-4">
              <li>I want to be a place of trust for all entrepreneurs who want to emerge. </li>
              <li>Help, share and teach everyone about the future and the digital world.</li>
              <li>Knowing the world and the amazing things it hides.</li>
              <li>Being one of the largest companies helping people to be people.</li>
            </ul>
          </div>
            <div>
              <h2 className="text-2xl mb-4">What we do?</h2>
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
          <div>
            <h2>Some services that we offer: </h2>
          </div>
        </div>
      </main>
    </div>
  )
}

