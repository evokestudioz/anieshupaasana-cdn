import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Youtube, MapPin } from "lucide-react"

export default function Footer({ scrollToSection }: any) {
  return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/logo.jpg"
                alt="UPAASANA STUDIO"
                width={180}
                height={60}
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400">
                Professional photography and videography services that capture life's most precious moments with
                artistic excellence.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Quick Links</h4>
              <nav className="space-y-2">
                <button
                  onClick={() => scrollToSection("studio")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About Studio
                </button>
                <button
                  onClick={() => scrollToSection("photo-gallery")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Photo Gallery
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </nav>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <Link href="#" className="text-gray-400 hover:text-yellow-600 transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-yellow-600 transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-yellow-600 transition-colors">
                  <Youtube className="h-6 w-6" />
                </Link>
              </div>
              <p className="text-gray-400 text-sm">Follow us for the latest updates and behind-the-scenes content.</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} UPAASANA STUDIO by Aniesh Upasana. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}