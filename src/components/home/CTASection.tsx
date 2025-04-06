"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-navy-dark to-navy py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Energy Efficiency Programs?</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Partner with Family First Energy to connect with California residents and businesses for successful energy
          efficiency initiatives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button className="bg-orange hover:bg-orange/90 text-white px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-glow-orange">
              Contact Our Team
            </Button>
          </Link>
          <Button
            variant="outline"
            className="border-blue text-blue hover:bg-blue/10 px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              // This will be replaced with the Calendly link when provided
              window.open("YOUR_CALENDLY_LINK_HERE", "_blank");
            }}
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
} 