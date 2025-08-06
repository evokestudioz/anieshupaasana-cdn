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
          {/* ...repeat Card for each review as in your original code... */}
        </div>
      </div>
    </section>
  )
}