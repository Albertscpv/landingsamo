
import Link from "next/link"
import { DogIcon as Mastodon, AtSign, FileCode } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full custom-shadow text-white py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Newsletter Section */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">¡Hablemos!</h2>
            <p className="text-gray-400 mb-4">
              ¡Contáctanos para que empezemos con la creación de una identidad digital maravillosa!
            </p>
        <form 
            action="https://formspree.io/f/xkndqpjd"
            method="post"
            >
            <div className="space-y-4 flex flex-col">
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-white/80 p-4 rounded-lg text-black border-gray-800"
              />
                <textarea 
                    name="message"
                    className="bg-white/80 p-4 rounded-lg text-black border-gray-800"
                    placeholder="your message"
                />
              <button className="p-4 bg-white text-black rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-1000">
                Da inicio al Big Bang de tu negocio!
              </button>
            </div>
        </form>

          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Docs</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Themes</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Showcase</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Integrations</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Starter templates</Link></li>
            </ul>
          </div>

          {/* Ecosystem Column */}
          <div className="space-y-4">
            <h3 className="font-semibold">Ecosystem</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Studio</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Community</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Contributing</Link></li>
            </ul>
          </div>

          {/* About Column */}
          <div className="space-y-4">
            <h3 className="font-semibold">About</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Press</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Telemetry</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Partner with us</Link></li>
            </ul>
          </div>

          {/* More & Legal Column */}
          <div className="space-y-4">
            <h3 className="font-semibold">More</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Wallpapers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Swag Shop</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>©2024</span>
            <Link href="#" className="hover:text-white">Samo Digital</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              {/* <DiscordLogoIcon className="h-5 w-5" /> */}
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              {/* <Twitter className="h-5 w-5" /> */}
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              {/* <Github className="h-5 w-5" /> */}
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <FileCode className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <AtSign className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Mastodon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

