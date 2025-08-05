"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Play,
  Star,
  Camera,
  Video,
  Users,
  Award,
} from "lucide-react"

export default function UpaasanaStudio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState("")
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const portfolioImages = [
    "/placeholder.svg?height=600&width=400",
    "/placeholder.svg?height=600&width=400",
    "/placeholder.svg?height=600&width=400",
    "/placeholder.svg?height=600&width=400",
    "/placeholder.svg?height=600&width=400",
    "/placeholder.svg?height=600&width=400",
    "/placeholder.svg?height=600&width=400",
    "/placeholder.svg?height=600&width=400",
  ]

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === "Escape") {
          closeLightbox()
        } else if (e.key === "ArrowLeft") {
          prevImage()
        } else if (e.key === "ArrowRight") {
          nextImage()
        }
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [lightboxOpen, lightboxIndex])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const openLightbox = (image: string, index: number) => {
    setLightboxImage(image)
    setLightboxIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxImage("")
    document.body.style.overflow = "unset"
  }

  const nextImage = () => {
    const nextIndex = lightboxIndex === portfolioImages.length - 1 ? 0 : lightboxIndex + 1
    setLightboxIndex(nextIndex)
    setLightboxImage(portfolioImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = lightboxIndex === 0 ? portfolioImages.length - 1 : lightboxIndex - 1
    setLightboxIndex(prevIndex)
    setLightboxImage(portfolioImages[prevIndex])
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo.jpg" alt="UPAASANA STUDIO" width={180} height={60} className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("studio")}
              className="text-sm font-medium hover:text-yellow-600 transition-colors"
            >
              Studio
            </button>
            <button
              onClick={() => scrollToSection("photo-gallery")}
              className="text-sm font-medium hover:text-yellow-600 transition-colors"
            >
              Photo Gallery
            </button>
            <button
              onClick={() => scrollToSection("video-gallery")}
              className="text-sm font-medium hover:text-yellow-600 transition-colors"
            >
              Video Gallery
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium hover:text-yellow-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-yellow-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Social Media Links */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">
              <Youtube className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <nav className="container mx-auto px-6 lg:px-8 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("studio")}
                className="block text-lg font-medium hover:text-yellow-600 transition-colors"
              >
                Studio
              </button>
              <button
                onClick={() => scrollToSection("photo-gallery")}
                className="block text-lg font-medium hover:text-yellow-600 transition-colors"
              >
                Photo Gallery
              </button>
              <button
                onClick={() => scrollToSection("video-gallery")}
                className="block text-lg font-medium hover:text-yellow-600 transition-colors"
              >
                Video Gallery
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-lg font-medium hover:text-yellow-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-lg font-medium hover:text-yellow-600 transition-colors"
              >
                Contact
              </button>
              <div className="flex items-center space-x-4 pt-4">
                <Link href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/placeholder.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Aneesh Upasana Photography"
              fill
              className="object-cover"
              priority
            />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-white max-w-2xl mx-auto px-6 lg:px-8 pb-20 w-full">
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 leading-tight">
              Capturing Life's
              <br />
              <span className="font-medium">Precious Moments</span>
            </h1>
            <p className="text-xl md:text-2xl font-light">Professional Photography & Videography by Aneesh Upasana</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="studio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
                About <span className="font-medium">Aneesh Upasana</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With over a decade of experience in professional photography and videography, Aneesh Upasana has
                established himself as one of the most sought-after visual storytellers in the industry. His work spans
                from intimate portraits to grand commercial productions, always maintaining an artistic vision that
                captures the essence of his subjects.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Having worked with renowned personalities including Mohanlal and other celebrities, Aneesh brings a
                unique perspective to every project. His philosophy centers on creating timeless imagery that tells
                compelling stories and evokes genuine emotions.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-serif font-medium text-yellow-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif font-medium text-yellow-600 mb-2">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Aneesh Upasana"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-600 text-black p-6 rounded-lg">
                <Award className="h-8 w-8 mb-2" />
                <div className="font-medium">Award Winning</div>
                <div className="text-sm">Photographer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Information */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
              <span className="font-medium">UPAASANA</span> Studio
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our state-of-the-art studio is equipped with professional lighting, backdrops, and the latest photography
              equipment to ensure every shoot meets the highest standards of quality and creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Camera className="h-12 w-12 mx-auto mb-4 text-yellow-600" />
                <h3 className="text-xl font-medium mb-3">Professional Equipment</h3>
                <p className="text-gray-600">Latest cameras, lenses, and lighting equipment for exceptional results</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Video className="h-12 w-12 mx-auto mb-4 text-yellow-600" />
                <h3 className="text-xl font-medium mb-3">Video Production</h3>
                <p className="text-gray-600">Complete videography services from concept to final production</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-yellow-600" />
                <h3 className="text-xl font-medium mb-3">Expert Team</h3>
                <p className="text-gray-600">Skilled professionals dedicated to bringing your vision to life</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="photo-gallery" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
              Photo <span className="font-medium">Gallery</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A curated selection of our finest photographic works, showcasing the artistry and technical excellence
              that defines UPAASANA Studio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
                onClick={() => openLightbox(image, index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Portfolio ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              View Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section id="video-gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
              Video <span className="font-medium">Gallery</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Cinematic storytelling through motion, capturing moments that photographs alone cannot convey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((video, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-video bg-black">
                <Image
                  src={`/placeholder.svg?height=400&width=600&query=video thumbnail ${video} cinematic`}
                  alt={`Video ${video}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-yellow-600 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-black fill-current" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
              Our <span className="font-medium">Services</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive photography and videography services tailored to meet your unique needs and vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-3">Portrait Photography</h3>
                <p className="text-gray-600 mb-4">
                  Professional headshots, family portraits, and personal branding photography
                </p>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  Starting from ₹5,000
                </Badge>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-3">Wedding Photography</h3>
                <p className="text-gray-600 mb-4">Complete wedding coverage from pre-wedding to reception ceremonies</p>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  Custom Packages
                </Badge>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-3">Commercial Photography</h3>
                <p className="text-gray-600 mb-4">Product photography, corporate events, and brand campaigns</p>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  Quote on Request
                </Badge>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-3">Event Videography</h3>
                <p className="text-gray-600 mb-4">
                  Professional video coverage for weddings, corporate events, and celebrations
                </p>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  Starting from ₹15,000
                </Badge>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-3">Fashion Photography</h3>
                <p className="text-gray-600 mb-4">Editorial shoots, lookbooks, and fashion campaigns</p>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  Custom Rates
                </Badge>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-3">Post-Production</h3>
                <p className="text-gray-600 mb-4">Professional editing, color grading, and retouching services</p>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  Per Project
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
              Client <span className="font-medium">Reviews</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              What our clients say about their experience with UPAASANA Studio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Aneesh captured our wedding beautifully. His attention to detail and artistic vision exceeded our
                  expectations. Highly recommended!"
                </p>
                <div className="font-medium">Priya & Rajesh</div>
                <div className="text-sm text-gray-600">Wedding Photography</div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Professional, creative, and delivered exceptional results for our corporate campaign. Will definitely
                  work with them again."
                </p>
                <div className="font-medium">Arjun Menon</div>
                <div className="text-sm text-gray-600">Commercial Photography</div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "The portrait session was comfortable and fun. Aneesh has a great eye for capturing personality and
                  emotion in every shot."
                </p>
                <div className="font-medium">Meera Nair</div>
                <div className="text-sm text-gray-600">Portrait Photography</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
              Get In <span className="font-medium">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to create something beautiful together? Let's discuss your vision and bring it to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-medium mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-yellow-600" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-300">info@upaasanastudio.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-yellow-600" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-gray-300">+91 98765 43210</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-yellow-600" />
                  <div>
                    <div className="font-medium">Studio Address</div>
                    <div className="text-gray-300">
                      123 Photography Lane
                      <br />
                      Kochi, Kerala 682001
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-600 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-600 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-600 transition-colors">
                    <Youtube className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-6">Send us a Message</h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                </div>

                <Input placeholder="Subject" className="bg-gray-800 border-gray-700 text-white placeholder-gray-400" />

                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />

                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-medium">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-yellow-600" />
              <h4 className="text-xl font-medium mb-2">Visit Our Studio</h4>
              <p className="text-gray-300">
                Schedule an appointment to visit our studio and discuss your project in person.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            >
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            >
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Main Image */}
            <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
              <Image
                src={lightboxImage || "/placeholder.svg"}
                alt={`Portfolio ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white text-sm">
                {lightboxIndex + 1} / {portfolioImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
