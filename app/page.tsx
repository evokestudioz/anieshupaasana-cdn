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
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import StudioInfoSection from "./components/StudioInfoSection"
import PhotoGallerySection from "./components/PhotoGallerySection"
import VideoGallerySection from "./components/VideoGallerySection"
import ServicesSection from "./components/ServicesSection"
import ReviewsSection from "./components/ReviewsSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import Lightbox from "./components/Lightbox"

export default function UpaasanaStudio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState("")
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const portfolioImages = [
    "/mohanlal.jpg",
    "/mohanlal-2.jpg",
    "/mohanlal-3.jpg",
     "/aniesh.jpg",
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
    <div>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrollToSection={scrollToSection} />
      <HeroSection />
      <AboutSection />
      <StudioInfoSection />
      <PhotoGallerySection portfolioImages={portfolioImages} openLightbox={openLightbox} />
      <VideoGallerySection />
      <ServicesSection />
      <ReviewsSection />
      <ContactSection />
      <Footer scrollToSection={scrollToSection} />
      <Lightbox
        lightboxOpen={lightboxOpen}
        closeLightbox={closeLightbox}
        prevImage={prevImage}
        nextImage={nextImage}
        lightboxImage={lightboxImage}
        lightboxIndex={lightboxIndex}
        portfolioImages={portfolioImages}
      />
    </div>
  )
}
