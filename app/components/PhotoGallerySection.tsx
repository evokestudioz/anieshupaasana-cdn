import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function PhotoGallerySection({ portfolioImages, openLightbox }: any) {
  return (
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
          {portfolioImages.map((image: string, index: number) => (
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
  )
}