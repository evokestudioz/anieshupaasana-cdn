import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function ReviewsSection() {
  return (
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
  )
}