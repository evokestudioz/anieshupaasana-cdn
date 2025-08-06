import { Card, CardContent } from "@/components/ui/card"
import { Camera, Video, Users } from "lucide-react"

export default function StudioInfoSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
            <span className="font-medium">ANEESH UPAASANA</span> STUDIO
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
  )
}