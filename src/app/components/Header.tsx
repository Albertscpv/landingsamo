import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur font-inter">
      <Link href="#" className="flex items-center gap-2 font-mono">
        <span className="text-[var(--accent)]">~/</span>
        <span className="font-bold tracking-wide">tkyo</span>
      </Link>
      <Link
        href="#contacto"
        className="px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-sm font-semibold transition-all hover:brightness-110"
      >
        Contáctanos
      </Link>
    </header>
  );
};

export default Header;
