import Link from "next/link";
import { AtSign, FileCode } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="w-full mt-20 border-t border-[var(--border)] bg-[var(--surface)] text-white py-16 px-6"
    >
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="section-title">¡Hablemos!</h2>
          <p className="text-gray-400 max-w-md">
            ¡Contáctanos para que empecemos con la creación de una identidad digital maravillosa!
          </p>
        </div>

        <form action="https://formspree.io/f/xkndqpjd" method="post">
          <div className="space-y-4 flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="tu@correo.com"
              className="bg-[var(--background)] border border-[var(--border)] focus:border-[var(--accent)] outline-none p-4 rounded-lg text-white"
            />
            <textarea
              name="message"
              rows={4}
              className="bg-[var(--background)] border border-[var(--border)] focus:border-[var(--accent)] outline-none p-4 rounded-lg text-white"
              placeholder="tu mensaje"
            />
            <button
              className="p-4 bg-[var(--accent)] text-white font-semibold rounded-lg hover:brightness-110 transition-all"
              type="submit"
            >
              ¡Da inicio al Big Bang de tu negocio!
            </button>
          </div>
        </form>
      </div>

      <div className="mx-auto max-w-6xl mt-12 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-sm text-gray-400 font-mono">© 2024 tkyo</span>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-gray-400 hover:text-[var(--accent)]">
            <FileCode className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-[var(--accent)]">
            <AtSign className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
