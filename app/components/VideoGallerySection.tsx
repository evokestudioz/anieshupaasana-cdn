import Image from "next/image"
import { Play } from "lucide-react"

export default function VideoGallerySection() {
  return (
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
  )
}