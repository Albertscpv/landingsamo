import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="flex items-center justify-between p-4 border-b border-gray-800 font-inter">
        <div className="flex items-center gap-2 ">
          <span className="text-gray-400">/</span>
          <span>Samo D</span>
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          <Link  href="#contacto">
            <button className="px-4 py-2 bg-white text-black rounded-lg transition-all duration-900 hover:bg-[var(--background)] hover:text-white">
              Contactanos
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
