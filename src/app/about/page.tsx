"use client"

import { ArrowRight, Award, Users, Shield, Zap, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const testimonials = [
    {
      quote: "Family First Energy has been instrumental in helping us reach our energy efficiency goals. Their outreach efforts have significantly increased customer participation.",
      name: "David Reyes",
      title: "CEO, Reliable Energy"
    }
  ];

  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">About Us</h1>
        
        <div className="bg-navy-dark border border-gray-800 rounded-xl p-8 mb-12 max-w-4xl mx-auto">
          <p className="text-xl leading-relaxed">
            At Family First Energy, we are dedicated to helping utilities meet their energy efficiency
            goals while directly improving the lives of families in our communities. We understand
            that utilities play a crucial role in providing reliable energy, and we take pride in being a
            trusted partner in ensuring that customers—especially those in need—have access to
            cost-saving, energy-efficient solutions.
          </p>
        </div>
        
        <h2 className="text-3xl font-bold text-center text-blue mb-12">Our Experience</h2>
        
        <div className="bg-navy-dark border border-gray-800 rounded-xl p-8 mb-12 max-w-4xl mx-auto">
          <p className="text-xl leading-relaxed mb-12">
            With over 35 years of combined experience, our team has been at the forefront of energy efficiency
            outreach, installations, and program support. We specialize in implementing and supporting a wide range of
            utility-funded energy programs, from lighting upgrades and weatherization to HVAC systems, envelope
            enhancements, energy-efficient appliances, water conservation measures, and beyond.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Energy Expertise</h3>
              <p className="text-gray-300">
                Specialized knowledge in energy efficiency programs and technologies
              </p>
            </div>
            
            <div>
              <div className="bg-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Focus</h3>
              <p className="text-gray-300">
                Dedicated to serving disadvantaged communities and hard-to-reach zones
              </p>
            </div>
            
            <div>
              <div className="bg-green-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Results</h3>
              <p className="text-gray-300">
                Track record of maximizing program participation and energy savings
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center text-blue mb-8">What Our Partners Say</h2>
          
          <div className="grid gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-navy-dark border border-gray-800 rounded-xl p-6">
                <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
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
  )
} 