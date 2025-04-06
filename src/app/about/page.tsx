"use client"

import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Us</h1>

        <div className="grid gap-8 max-w-4xl">
          {/* Mission Statement */}
          <div className="bg-navy-dark p-8 rounded-xl border border-gray-800">
            <p className="text-lg text-gray-300 leading-relaxed">
              At Family First Energy, we are dedicated to helping utilities meet their energy efficiency goals 
              while directly improving the lives of families in our communities. We understand that utilities 
              play a crucial role in providing reliable energy, and we take pride in being a trusted partner 
              in ensuring that customers—especially those in need—have access to cost-saving, energy-efficient solutions.
            </p>
          </div>

          {/* Experience Section */}
          <div className="bg-navy-dark p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold text-blue mb-4">Our Experience</h2>
            <p className="text-gray-300 leading-relaxed">
              With over 35 years of combined experience, our team has been at the forefront of energy 
              efficiency outreach, installations, and program support. We specialize in implementing and 
              supporting a wide range of utility-funded energy programs, from lighting upgrades and 
              weatherization to HVAC systems, envelope enhancements, energy-efficient appliances, water 
              conservation measures, and beyond.
            </p>
          </div>

          {/* What Sets Us Apart */}
          <div className="bg-navy-dark p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold text-orange mb-4">What Sets Us Apart?</h2>
            <p className="text-gray-300 leading-relaxed">
              We don't just implement programs—we build trust. Our outreach efforts go beyond surface-level 
              engagement; we establish real connections with customers, ensuring that they understand and 
              take full advantage of the energy-saving programs available to them. When you partner with 
              Family First Energy, you're not just hiring a contractor—you're gaining a committed ally that 
              works tirelessly to maximize program participation, optimize energy savings, and drive measurable results.
            </p>
          </div>

          {/* Collaboration Section */}
          <div className="bg-navy-dark p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold text-green mb-4">Let's Collaborate</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Let's collaborate to empower California families, reduce energy waste, and achieve your program 
              goals. Whether you need installations, customer outreach, program management, or all of the above, 
              we're ready to bring our expertise to the table.
            </p>
            <p className="text-gray-300 leading-relaxed font-medium">
              Together, we can help families save energy, lower costs, and create a more sustainable future—one 
              home at a time.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8">
            <p className="text-blue text-lg mb-6">
              🔹 Contact us today to discuss how we can support your energy efficiency initiatives!
            </p>
            <Button 
              className="bg-orange hover:bg-orange/90 text-white px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-glow-orange"
              asChild
            >
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 