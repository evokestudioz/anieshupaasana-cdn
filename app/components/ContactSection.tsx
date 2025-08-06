import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
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
  )
}