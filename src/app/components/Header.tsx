const Header = () => {
  return (
    <div>
      <header className="flex items-center justify-between p-4 border-b border-gray-800 font-inter">
        <div className="flex items-center gap-2 ">
          <a href="#" className="text-orange-400">Samo D HQ</a>
          <span className="text-gray-400">/</span>
          <span>Welcome to Samo</span>
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          {/* <span>Última edición: Hace 1 m</span>
          <button>Compartir</button>
          <button>💬</button>
          <button>🕒</button>
          <button>⭐</button>
          <button>⋯</button> */}
        </div>
      </header>
    </div>
  );
};

export default Header;
