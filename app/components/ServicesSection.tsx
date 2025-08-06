import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ServicesSection() {
  return (
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
  )
}