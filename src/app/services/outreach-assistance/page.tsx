"use client"

import Link from "next/link"
import { ArrowLeft, Users, PhoneCall, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OutreachAssistancePage() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Outreach Assistance</h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Family First Energy creates custom outreach strategies that drive real results for utilities, 
            implementers, and contractors. With over 30 years of experience, we know what works.
          </p>
          
          <div className="bg-navy-dark border border-gray-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-blue">Why Our Outreach Services Stand Out</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-blue/10 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-blue" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Targeted Engagement</h3>
                  <p className="text-gray-300">We identify and reach the right customers for your program, increasing participation rates.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue/10 p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-blue" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Measurable Results</h3>
                  <p className="text-gray-300">Our data-driven approach ensures you can track progress and see real ROI.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Comprehensive Outreach Solutions</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-navy-dark border border-gray-800 rounded-lg p-5">
                <h3 className="font-bold text-xl mb-2">In-House Outreach Team</h3>
                <p className="text-gray-300">
                  Our dedicated in-house specialists deliver personalized outreach with deep program knowledge, ensuring consistent messaging and quality customer interactions that drive enrollment.
                </p>
              </div>
              
              <div className="bg-navy-dark border border-gray-800 rounded-lg p-5">
                <h3 className="font-bold text-xl mb-2">Statewide Contractor Network</h3>
                <p className="text-gray-300">
                  Access our extensive network of independent outreach representatives throughout California, allowing your program to achieve broad geographic coverage while maintaining local expertise.
                </p>
              </div>
              
              <div className="bg-navy-dark border border-gray-800 rounded-lg p-5">
                <h3 className="font-bold text-xl mb-2">Telemarketing Excellence</h3>
                <p className="text-gray-300">
                  Our professional telemarketing team uses proven scripts and techniques to engage potential customers, pre-qualify leads, and schedule appointments that convert to program participation.
                </p>
              </div>
              
              <div className="bg-navy-dark border border-gray-800 rounded-lg p-5">
                <h3 className="font-bold text-xl mb-2">Event Planning & Execution</h3>
                <p className="text-gray-300">
                  From custom marketing materials to experienced on-site representatives, we create and manage high-impact events that maximize engagement and generate quality leads for your program.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue/20 to-navy-dark border border-blue/30 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Boost Your Program Participation?</h2>
            <p className="text-gray-300 mb-6">
              Contact us today to discuss how we can create a custom outreach strategy for your needs.
            </p>
            <Button 
              className="bg-orange hover:bg-orange/90 text-white py-6 px-8 text-lg transition-all duration-300"
              asChild
            >
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 