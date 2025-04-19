"use client"

import Link from "next/link"
import { ArrowLeft, Leaf, Zap, Users, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProgramDesignPage() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Program Design</h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Family First Energy partners with utilities and implementers to develop programs 
            that address today's most critical energy challenges. No matter where you are on your 
            efficiency journey, we'll help you create cost-effective programs that deliver results 
            for all communities you serve.
          </p>
          
          <div className="bg-navy-dark border border-gray-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-blue">Addressing Your Key Priorities</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-blue/10 p-3 rounded-full mr-4">
                  <Leaf className="h-6 w-6 text-blue" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Decarbonization</h3>
                  <p className="text-gray-300">We design programs that significantly reduce carbon emissions while maintaining reliability and affordability.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue/10 p-3 rounded-full mr-4">
                  <Zap className="h-6 w-6 text-blue" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Electrification</h3>
                  <p className="text-gray-300">Our electrification strategies help transition customers from fossil fuels to clean electric alternatives.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue/10 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-blue" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Equity-Focused</h3>
                  <p className="text-gray-300">We specialize in programs that effectively serve Hard-to-Reach and Disadvantaged Communities throughout California.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue/10 p-3 rounded-full mr-4">
                  <ShieldCheck className="h-6 w-6 text-blue" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Health & Safety</h3>
                  <p className="text-gray-300">Our programs integrate health and safety measures that protect customers while improving energy efficiency.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Collaborative Approach</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-navy-dark border border-gray-800 rounded-lg p-5">
                <h3 className="font-bold text-xl mb-2">Needs Assessment</h3>
                <p className="text-gray-300">
                  We begin by understanding your specific goals, regulatory requirements, and the unique needs of your service territory.
                </p>
              </div>
              
              <div className="bg-navy-dark border border-gray-800 rounded-lg p-5">
                <h3 className="font-bold text-xl mb-2">Cost-Effective Design</h3>
                <p className="text-gray-300">
                  Our team develops programs that maximize benefits for your ratepayers while ensuring efficient use of program funds.
                </p>
              </div>
              
              <div className="bg-navy-dark border border-gray-800 rounded-lg p-5">
                <h3 className="font-bold text-xl mb-2">Implementation Planning</h3>
                <p className="text-gray-300">
                  We create detailed roadmaps for successful program deployment, including outreach strategies and measurement protocols.
                </p>
              </div>
              
              <div className="bg-navy-dark border border-gray-800 rounded-lg p-5">
                <h3 className="font-bold text-xl mb-2">Continuous Improvement</h3>
                <p className="text-gray-300">
                  Our data-driven approach allows for ongoing program refinement to maximize participation and energy savings.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue/20 to-navy-dark border border-blue/30 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Design Your Next Energy Program?</h2>
            <p className="text-gray-300 mb-6">
              Whether you're launching a new initiative or enhancing existing programs, our team is ready to help you create solutions that work for all communities you serve.
            </p>
            <Button 
              className="bg-orange hover:bg-orange/90 text-white py-6 px-8 text-lg transition-all duration-300"
              asChild
            >
              <a href="https://calendar.app.google/QqjdNVMvsbCMAw6m7" target="_blank" rel="noopener noreferrer">
                Schedule a Strategy Session
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 