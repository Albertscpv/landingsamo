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
  <main className="p-4 sm:p-12 font-mono">
    {/* Icon Section */}
  <div className="mb-6 sm:mb-8 flex justify-center">
    <MicroscopeIcon className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" />
  </div>

  {/* Title Section */}
  <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">Welcome to Samo</h1>
  <hr className="mb-4 sm:mb-6" />

  {/* Content Grid */}
  <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
    {/* Code Section */}
    <CodeComponent />

    {/* Image Section */}
    <div className="relative h-[300px] sm:h-[400px]">
      <Image
        src="/rocket.jpg"
        alt="Rocket launch trail"
        width={600}
        height={400}
        className="w-[100%] h-[100%] object-cover rounded-lg"
      />
    </div>
    <div className="relative h-[300px] sm:h-[400px]">
      <Image
        src="/Arte.jpeg"
        alt="Rocket launch trail"
        width={600}
        height={400}
        className="w-[100%] h-[100%] object-cover rounded-lg"
      />
    </div>

    {/* Goals Section */}
    <div>
      <h2 className="text-xl sm:text-2xl font-bold mb-4">My Goals:</h2>
      <hr className="mb-4" />
      <ul className="list-disc space-y-2 pl-4 sm:pl-6">
        <li>I want to be a place of trust for all entrepreneurs who want to emerge.</li>
        <li>Help, share and teach everyone about the future and the digital world.</li>
        <li>Knowing the world and the amazing things it hides.</li>
        <li>Being one of the largest companies helping people to be people.</li>
      </ul>
    </div>

    {/* What We Do Section */}
    <div>
      <h2 className="text-xl sm:text-2xl font-bold mb-4">What we do?</h2>
      <hr className="mb-4" />
      <p className="mb-4">
        I’m a very diverse company that seeks to meet many needs of entrepreneurs.
      </p>
      <ul className="list-disc space-y-2 pl-4 sm:pl-6">
        <li>Graphic Design</li>
        <li>Web Design</li>
        <li>Software Development</li>
        <li>Digital Marketing</li>
      </ul>
    </div>

    {/* Services Section */}
    <div className="my-4 sm:my-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Some services that we offer:</h2>
    </div>
  </div>

  {/* Team Section */}
  <div className="mt-8">
    <h2 className="text-xl sm:text-2xl font-bold mb-4">Our Team</h2>
    <hr className="mb-6" />
    <p>Well, big things need big minds</p>
    <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 my-6">
      <div>
        <Image
          src="/CharlaCTPE.webp"
          alt="Rocket launch trail"
          width={600}
          height={500}
          className="w-[100%] h-[100%] object-cover rounded-lg"
        />
        <h3 className="mt-4 font-semibold">Christopher Monge, Albert</h3>
      </div>
      <div>
        <Image
          src="/SunFlowers.webp"
          alt="Rocket launch trail"
          width={600}
          height={500}
          className="w-[100%] h-[100%] object-cover rounded-lg"
        />
        <h3 className="mt-4 font-semibold">Susana Porras, Sunny</h3>
      </div>
    </div>
  </div>
</main>

    </div>
  )
}

