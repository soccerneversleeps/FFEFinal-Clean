"use client"

import Link from "next/link"
import { ArrowLeft, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function CommercialProgramsPage() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Programs</h1>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl">
          Discover our comprehensive suite of energy efficiency programs designed specifically for California businesses.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Incentive Optimization Consultation */}
          <div className="bg-navy-dark p-8 rounded-xl transition-all duration-300 hover:shadow-glow-blue group">
            <div className="bg-blue/20 p-4 rounded-xl mb-6">
              <h2 className="text-2xl font-bold text-blue">Incentive Optimization Consultation</h2>
            </div>
            <p className="text-xl font-medium text-white mb-4">Maximize Rebates. Modernize Your Facility.</p>
            <p className="text-gray-300 mb-6">
              Most commercial businesses miss out on tens of thousands in available incentives simply because they don't know where to look or who to ask. That's where we come in.
            </p>
            <p className="text-gray-300 mb-6">
              Our Incentive Optimization Consultation is designed to help you uncover and claim the energy efficiency rebates and upgrade programs your business qualifies for—before they expire.
            </p>
            <ul className="space-y-3 mb-8 text-gray-300">
              <li className="flex items-start gap-2">
                • On-site evaluation of your existing equipment and systems
              </li>
              <li className="flex items-start gap-2">
                • Identification of the most valuable incentive and rebate programs across over 50 active utility offerings
              </li>
              <li className="flex items-start gap-2">
                • Personalized recommendations aligned with your facility's needs and energy goals
              </li>
              <li className="flex items-start gap-2">
                • Expert guidance from a licensed energy efficiency contractor and consultant
              </li>
              <li className="flex items-start gap-2">
                • Ongoing support to build long-term savings strategies
              </li>
            </ul>
            <div className="mt-auto">
              <Button className="w-full bg-blue hover:bg-blue/90 text-white py-6 text-lg transition-all duration-300">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Consultation to Start Saving
              </Button>
            </div>
          </div>

          {/* Retrofit Assistance Program */}
          <div className="bg-navy-dark p-8 rounded-xl transition-all duration-300 hover:shadow-glow-orange group">
            <div className="bg-orange/20 p-4 rounded-xl mb-6">
              <h2 className="text-2xl font-bold text-orange">Retrofit Assistance Program</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Get support throughout your entire retrofit project, from initial planning to implementation and 
              verification. We help you navigate available incentives and rebates while ensuring maximum ROI.
            </p>
            <ul className="space-y-3 mb-8 text-gray-300">
              <li className="flex items-start gap-2">
                • Project planning and management
              </li>
              <li className="flex items-start gap-2">
                • Incentive and rebate application assistance
              </li>
              <li className="flex items-start gap-2">
                • Contractor coordination
              </li>
              <li className="flex items-start gap-2">
                • Post-installation verification
              </li>
            </ul>
            <div className="mt-auto">
              <Button className="w-full bg-orange hover:bg-orange/90 text-white py-6 text-lg transition-all duration-300">
                Explore Retrofit Assistance
              </Button>
              <p className="text-sm text-orange/70 mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                Typical payback period: 1-3 years
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 