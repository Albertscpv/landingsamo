// src/components/NavBar.tsx
import Link from 'next/link'; // Importa el componente Link de Next.js

const NavBar = () => {
    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'About Us', path: '/about' },
        { title: 'Services', path: '/services' },
        { title: 'Contact', path: '/contacto' },
    ];

    return (
        <div className='fixed top-0 left-0 w-full bg-[#0A0A0A]/30 shadow-md z-50 backdrop-blur-sm'
        
        >
        <div className="flex flex-row p-4 font-geistS">
            <ul className="flex text-[#888] gap-4 flex-grow">
                {navLinks.map((navLink) => (
                    <li key={navLink.path}>
                        <Link href={navLink.path} className="hover:text-white transition duration-600">
                            {navLink.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex gap-2 text-white font-bold text-2xl cursor-pointer">
                    Samo D
            </div>
        </div>
        </div>
    );
};

export default NavBar;
