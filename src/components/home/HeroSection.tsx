import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Gauge } from 'lucide-react'
import Logo from "@/components/shared/Logo"
import EnergyTip from "@/components/shared/EnergyTip"

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 pt-4 pb-20 md:py-20 flex flex-col md:flex-row items-center gap-12">
      <div className="w-full flex justify-center mb-12 md:hidden">
        <Logo />
      </div>
      <div className="flex-1 space-y-6">
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Powering California's <span className="text-orange">Energy Efficiency</span> Future
          </h1>
        </div>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          We help California utilities connect with residential and commercial customers to implement
          energy-efficient solutions that save money and protect our environment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button 
            className="bg-orange hover:bg-orange/90 text-white transition-all duration-300 transform hover:scale-105 group"
            asChild
          >
            <Link href="/contact">
              Partner with Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button 
            variant="outline" 
            className="border-blue text-blue hover:bg-blue/10 transition-all duration-300"
            asChild
          >
            <Link href="/active-partners">
              Active Partners
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex-1 relative h-[400px] w-full rounded-xl overflow-hidden group">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/powerlines-RkWoMH3yTRU3JssKOa1le1yP8qcnXg.webp"
          alt="Power lines against a starry night sky with golden energy streams"
          fill
          className="object-cover rounded-xl transition-all duration-500 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
        <div className="absolute bottom-4 right-4 bg-navy-dark/80 rounded-full p-3 backdrop-blur-sm">
          <Gauge className="h-6 w-6 text-orange animate-pulse" />
          <span className="sr-only">Energy efficiency meter</span>
        </div>
      </div>
    </section>
  )
} 