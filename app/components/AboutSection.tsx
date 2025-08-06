import Image from "next/image"
import { Award } from "lucide-react"

export default function AboutSection() {
  return (
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
              src="/mohanlal-3.jpg"
              alt="Aneesh Upasana"
              width={500}
              height={600}
              className="rounded-lg shadow-2xl"
            />
            {/* <div className="absolute -bottom-6 -right-6 bg-yellow-600 text-black p-6 rounded-lg">
              <Award className="h-8 w-8 mb-2" />
              <div className="font-medium">Award Winning</div>
              <div className="text-sm">Photographer</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}