import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Building2, CheckCircle, ArrowRight } from 'lucide-react'
import Link from "next/link"

export default function CommercialSection() {
  return (
    <section id="commercial" className="bg-navy-light py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1 relative h-[400px] w-full rounded-xl overflow-hidden group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-daniel-narinian-11471596.jpg-6xhhxZP9lMO0TOLSpBRRUC1OdSf6x2.jpeg"
              alt="City skyline at night showing commercial energy usage"
              fill
              className="object-cover rounded-xl transition-all duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-blue" />
              <h2 className="text-3xl md:text-4xl font-bold">Commercial Solutions</h2>
            </div>
            <p className="text-lg text-gray-300">
              We partner with businesses across California to maximize utility program incentives and implement cost-effective energy solutions. From small retail to large industrial facilities, our team identifies and secures all available funding opportunities to improve your bottom line while advancing sustainability goals.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green mt-1 flex-shrink-0" />
                <span>Comprehensive facility assessments with ROI-driven recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green mt-1 flex-shrink-0" />
                <span>Zero out-of-pocket program options and maximum incentive capture</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green mt-1 flex-shrink-0" />
                <span>End-to-end project management and utility program coordination</span>
              </li>
            </ul>
            <Button 
              className="bg-blue hover:bg-blue/90 text-white transition-all duration-300 transform hover:scale-105 mt-4 group"
              asChild
            >
              <Link href="/commercial-programs">
                Explore Commercial Programs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 