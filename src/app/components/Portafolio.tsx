import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, soda506 } from "@/app/data/projects";

const Portafolio = () => {
  return (
    <section id="proyectos">
      <h2 className="section-title">Nuestros proyectos</h2>

      {/* Trabajo con clientes */}
      <div className="mb-12">
        <h3 className="font-mono text-lg font-bold">{soda506.name}</h3>
        <p className="text-gray-400 mt-1 mb-4 max-w-2xl">{soda506.blurb}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {soda506.images.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border)]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desarrollo */}
      <h3 className="font-mono text-lg font-bold mb-4">Herramientas para tu negocio</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <article key={p.name} className="card p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <h4 className="font-bold text-lg">{p.name}</h4>
              <span className="shrink-0 rounded-full border border-[var(--border)] px-3 py-1 text-xs text-gray-400">
                {p.status}
              </span>
            </div>
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Problema: <span className="normal-case tracking-normal text-gray-400">{p.problem}</span>
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">{p.blurb}</p>
            <ul className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="font-mono text-xs px-2 py-1 rounded bg-[var(--background)] text-[var(--accent)]"
                >
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex gap-4 text-sm">
              {p.demo &&
                (p.demo.startsWith("/") ? (
                  <Link
                    href={p.demo}
                    className="inline-flex items-center gap-1 hover:text-[var(--accent)]"
                  >
                    Probar demo <ArrowUpRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[var(--accent)]"
                  >
                    Ver sitio <ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gray-400 hover:text-[var(--accent)]"
                >
                  <Github className="h-4 w-4" /> Código
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Portafolio;
