"use client"

import { ArrowRight, Award, Users, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Us</h1>
          
          <div className="bg-navy-dark border border-gray-800 rounded-xl p-8 mb-10">
            <p className="text-xl text-gray-300 leading-relaxed">
              At Family First Energy, we are dedicated to helping utilities meet their energy efficiency goals
              while directly improving the lives of families in our communities. We understand that utilities play
              a crucial role in providing reliable energy, and we take pride in being a trusted partner in ensuring
              that customers—especially those in need—have access to cost-saving, energy-efficient
              solutions.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue">Our Experience</h2>
            <div className="bg-navy-dark border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                With over 35 years of combined experience, our team has been at the forefront of energy efficiency
                outreach, installations, and program support. We specialize in implementing and supporting a wide range of
                utility-funded energy programs, from lighting upgrades and weatherization to HVAC systems, envelope
                enhancements, energy-efficient appliances, water conservation measures, and beyond.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-blue/20 flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 text-blue" />
                  </div>
                  <h3 className="font-bold mb-2">Energy Expertise</h3>
                  <p className="text-gray-400">Specialized knowledge in energy efficiency programs and technologies</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-orange/20 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-orange" />
                  </div>
                  <h3 className="font-bold mb-2">Community Focus</h3>
                  <p className="text-gray-400">Dedicated to serving disadvantaged communities and hard-to-reach zones</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-green/20 flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-green" />
                  </div>
                  <h3 className="font-bold mb-2">Proven Results</h3>
                  <p className="text-gray-400">Track record of maximizing program participation and energy savings</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center text-orange">What Sets Us Apart?</h2>
            <div className="bg-navy-dark border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed">
                We don't just implement programs—we build trust. Our outreach efforts go beyond surface-level
                engagement; we establish real connections with customers, ensuring that they understand and take full
                advantage of the energy-saving programs available to them. When you partner with Family First Energy,
                you're not just hiring a contractor—you're gaining a committed ally that works tirelessly to maximize program
                participation, optimize energy savings, and drive measurable results.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue/20 to-navy-dark border border-blue/30 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Let's Collaborate</h2>
            <p className="text-gray-300 text-center mb-8">
              Let's collaborate to empower California families, reduce energy waste, and achieve your program goals.
              Whether you need installations, customer outreach, program management, or all of the above, we're ready to
              bring our expertise to the table.
            </p>
            <p className="text-gray-300 text-center mb-8">
              Together, we can help families save energy, lower costs, and create a more sustainable future—one home at
              a time.
            </p>
            <div className="flex justify-center">
              <Button 
                className="bg-orange hover:bg-orange/90 text-white py-6 px-8 text-lg transition-all duration-300"
                asChild
              >
                <Link href="/contact" className="inline-flex items-center">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 