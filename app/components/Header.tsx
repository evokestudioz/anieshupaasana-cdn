import Image from "next/image"
import Link from "next/link"
import { Menu, X, Instagram, Facebook, Youtube } from "lucide-react"

export default function Header({ isMenuOpen, setIsMenuOpen, scrollToSection }: any) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/logo.jpg" alt="UPAASANA STUDIO" width={180} height={60} className="h-20 w-auto" />
        </div>
        <nav className="hidden lg:flex items-center space-x-8">
          <button onClick={() => scrollToSection("studio")} className="text-sm font-medium hover:text-yellow-600 transition-colors">Studio</button>
          <button onClick={() => scrollToSection("photo-gallery")} className="text-sm font-medium hover:text-yellow-600 transition-colors">Photo Gallery</button>
          <button onClick={() => scrollToSection("video-gallery")} className="text-sm font-medium hover:text-yellow-600 transition-colors">Video Gallery</button>
          <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-yellow-600 transition-colors">Services</button>
          <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-yellow-600 transition-colors">Contact</button>
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="#" className="text-gray-600 hover:text-yellow-600 transition-colors"><Instagram className="h-5 w-5" /></Link>
          <Link href="#" className="text-gray-600 hover:text-yellow-600 transition-colors"><Facebook className="h-5 w-5" /></Link>
          <Link href="#" className="text-gray-600 hover:text-yellow-600 transition-colors"><Youtube className="h-5 w-5" /></Link>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="container mx-auto px-6 lg:px-8 py-6 space-y-4">
            <button onClick={() => scrollToSection("studio")} className="block text-lg font-medium hover:text-yellow-600 transition-colors">Studio</button>
            <button onClick={() => scrollToSection("photo-gallery")} className="block text-lg font-medium hover:text-yellow-600 transition-colors">Photo Gallery</button>
            <button onClick={() => scrollToSection("video-gallery")} className="block text-lg font-medium hover:text-yellow-600 transition-colors">Video Gallery</button>
            <button onClick={() => scrollToSection("services")} className="block text-lg font-medium hover:text-yellow-600 transition-colors">Services</button>
            <button onClick={() => scrollToSection("contact")} className="block text-lg font-medium hover:text-yellow-600 transition-colors">Contact</button>
            <div className="flex items-center space-x-4 pt-4">
              <Link href="#" className="text-gray-600 hover:text-yellow-600 transition-colors"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="text-gray-600 hover:text-yellow-600 transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="text-gray-600 hover:text-yellow-600 transition-colors"><Youtube className="h-5 w-5" /></Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}