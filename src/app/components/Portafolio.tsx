"use client";
import Image from "next/image";
import GitHubProjects from "@/app/components/apiComponents/GitHubProjects";

const fotos = [1, 2, 3, 4];

const Portafolio = () => {
  return (
    <section>
      <h2 className="section-title">Nuestros proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {fotos.map((n) => (
          <div
            key={n}
            className="relative h-[300px] sm:h-[350px] rounded-2xl overflow-hidden border border-[var(--border)]"
          >
            <Image
              src={`/portafolio/Soda506/Soda506P${n}.jpg`}
              alt={`Soda 506, imagen ${n}`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
      <h3 className="font-mono text-lg font-bold mb-4">Algunas aplicaciones en las que trabajamos</h3>
      <GitHubProjects />
    </section>
  );
};
export default Portafolio;
