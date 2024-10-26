import Link from "next/link"

export default function Home() {

  return (
    <div className="min-h-screen">
        <div id="main-container" className="relative h-screen p-2">
          <div className="[grid-area:main] p-12 place-content-center text-center">
              <h2 className="font-bold text-6xl font-geistS text-white  animate-fade-in">Bienvenidos a <b className="[color:var(--marked-text)]">Samo D</b></h2>
              <span className="block text-xl my-2">
                  <b className="[color:var(--marked-text)]">Innovación</b> en soluciones, <b className="[color:var(--marked-text)]">Eficiencia</b> en resultados.
                </span>
              <Link href="/about">
                <button className="p-4 bg-[#ededed] text-black my-6 border hover:bg-black hover:text-white active:bg-[var(--marked-text)] active:text-black transition duration-600 hover:border animate-fade-in-right">
                  Get Started
                </button>
              </Link>
          </div>
        </div>
    </div>
  );
}
