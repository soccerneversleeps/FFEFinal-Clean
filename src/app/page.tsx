"use client"

import HeroSection from "@/components/home/HeroSection"
import FeaturesSection from "@/components/home/FeaturesSection"
import ResidentialSection from "@/components/home/ResidentialSection"
import CommercialSection from "@/components/home/CommercialSection"
import TestimonialsSection from "@/components/home/TestimonialsSection"
import CTASection from "@/components/home/CTASection"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <main>
        <HeroSection />
        <FeaturesSection />
        <ResidentialSection />
        <CommercialSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </div>
  )
} 