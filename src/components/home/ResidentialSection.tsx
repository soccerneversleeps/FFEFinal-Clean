import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, CheckCircle, ArrowRight } from 'lucide-react'
import Link from "next/link"

export default function ResidentialSection() {
  return (
    <section id="residential" className="container mx-auto px-4 py-20 md:py-32">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 relative h-[400px] w-full rounded-xl overflow-hidden group">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-09%2020.50.08%20-%20A%20realistic%20image%20of%20a%20suburban%20residential%20neighborhood%20with%20modern%20tract%20homes.%20The%20houses%20have%20clean%20front%20yards%2C%20driveways%2C%20and%20sidewalks%20lined%20wi-fhH4VQTz9m1b9qPyLX4dVnO5qpbGNm.webp"
            alt="Modern energy-efficient residential neighborhood with well-maintained homes"
            fill
            className="object-cover rounded-xl transition-all duration-500 group-hover:scale-95"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
        </div>
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6 text-orange" />
            <h2 className="text-3xl md:text-4xl font-bold">Residential Solutions</h2>
          </div>
          <p className="text-lg text-gray-300">
            We help California homeowners access utility programs that reduce energy costs and increase comfort
            while contributing to a greener future.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green mt-1 flex-shrink-0" />
              <span>Home energy assessments and personalized efficiency plans</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green mt-1 flex-shrink-0" />
              <span>Rebate and incentive program navigation</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green mt-1 flex-shrink-0" />
              <span>Smart home technology integration</span>
            </li>
          </ul>
          <Button 
            className="bg-orange hover:bg-orange/90 text-white transition-all duration-300 transform hover:scale-105 mt-4 group"
            asChild
          >
            <Link href="/residential-programs">
              Explore Residential Programs
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 