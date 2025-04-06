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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* All cards with fixed heights for content sections */}
          <div className="bg-navy-dark p-8 rounded-xl transition-all duration-300 hover:shadow-glow-blue group flex flex-col h-full">
            {/* Header - fixed height */}
            <div className="bg-blue/20 p-4 rounded-xl mb-6 h-20 flex items-center">
              <h2 className="text-2xl font-bold text-blue">Incentive Optimization Consultation</h2>
            </div>
            
            {/* Title - fixed height */}
            <div className="h-12 mb-4">
              <p className="text-xl font-medium text-white">Maximize Rebates. Modernize Your Facility.</p>
            </div>
            
            {/* Description - fixed height */}
            <div className="h-24 mb-6">
              <p className="text-gray-300">
                Most businesses miss thousands in available incentives. We help you uncover and claim energy efficiency rebates before they expire.
              </p>
            </div>
            
            {/* Features grid - fixed height */}
            <div className="grid grid-cols-2 gap-4 mb-8 h-48">
              <div className="bg-blue/10 p-3 rounded-lg text-gray-300 text-sm">
                • On-site equipment evaluation
              </div>
              <div className="bg-blue/10 p-3 rounded-lg text-gray-300 text-sm">
                • Access to 50+ utility programs
              </div>
              <div className="bg-blue/10 p-3 rounded-lg text-gray-300 text-sm">
                • Personalized recommendations
              </div>
              <div className="bg-blue/10 p-3 rounded-lg text-gray-300 text-sm">
                • Expert efficiency guidance
              </div>
            </div>
            
            {/* Empty space to match the "funds limited" text in the middle card */}
            <div className="h-6"></div>
            
            {/* Button */}
            <div className="mt-auto">
              <Link href="/contact" className="block">
                <button className="w-full bg-blue hover:bg-blue/90 text-white py-3 px-6 rounded-md font-medium">
                  Secure Your Rebates
                </button>
              </Link>
            </div>
          </div>

          {/* Second card with same fixed heights */}
          <div className="bg-navy-dark p-8 rounded-xl transition-all duration-300 hover:shadow-glow-orange group flex flex-col h-full">
            {/* Header - fixed height */}
            <div className="bg-orange/20 p-4 rounded-xl mb-6 h-20 flex items-center">
              <h2 className="text-2xl font-bold text-orange">Heat Pump Water Heater Program</h2>
            </div>
            
            {/* Title - fixed height */}
            <div className="h-12 mb-4">
              <p className="text-xl font-medium text-white">Upgrade Facilities at $0 Cost.</p>
            </div>
            
            {/* Description - fixed height */}
            <div className="h-24 mb-6">
              <p className="text-gray-300">
                Replace natural gas water heaters with efficient heat pump technology. Ideal for hotels, grocery stores, hospitals, and more.
              </p>
            </div>
            
            {/* Features grid - fixed height */}
            <div className="grid grid-cols-2 gap-4 mb-8 h-48">
              <div className="bg-orange/10 p-3 rounded-lg text-gray-300 text-sm">
                • 70+ gallon capacity units
              </div>
              <div className="bg-orange/10 p-3 rounded-lg text-gray-300 text-sm">
                • Zero-emission technology
              </div>
              <div className="bg-orange/10 p-3 rounded-lg text-gray-300 text-sm">
                • Full installation support
              </div>
              <div className="bg-orange/10 p-3 rounded-lg text-gray-300 text-sm">
                • Rebate documentation help
              </div>
            </div>
            
            {/* Funds limited text - fixed height */}
            <div className="h-6">
              <p className="text-sm text-orange/70 text-center">
                Funds limited - first-come first served
              </p>
            </div>
            
            {/* Button */}
            <div className="mt-auto">
              <Link href="/contact" className="block">
                <button className="w-full bg-orange hover:bg-orange/90 text-white py-3 px-6 rounded-md font-medium">
                  Secure Your Rebates
                </button>
              </Link>
            </div>
          </div>

          {/* Third card with same fixed heights */}
          <div className="bg-navy-dark p-8 rounded-xl transition-all duration-300 hover:shadow-glow-teal group flex flex-col h-full">
            {/* Header - fixed height */}
            <div className="bg-teal/20 p-4 rounded-xl mb-6 h-20 flex items-center">
              <h2 className="text-2xl font-bold text-teal">Energy Efficiency Survey</h2>
            </div>
            
            {/* Title - fixed height */}
            <div className="h-12 mb-4">
              <p className="text-xl font-medium text-white">Free Assessment. Tailored Savings.</p>
            </div>
            
            {/* Description - fixed height */}
            <div className="h-24 mb-6">
              <p className="text-gray-300">
                Get a no-cost inventory of your natural gas equipment with customized efficiency recommendations that align with your financial goals.
              </p>
            </div>
            
            {/* Features grid - fixed height */}
            <div className="grid grid-cols-2 gap-4 mb-8 h-48">
              <div className="bg-teal/10 p-3 rounded-lg text-gray-300 text-sm">
                • Equipment inventory analysis
              </div>
              <div className="bg-teal/10 p-3 rounded-lg text-gray-300 text-sm">
                • Estimated cost savings
              </div>
              <div className="bg-teal/10 p-3 rounded-lg text-gray-300 text-sm">
                • Eligible rebate identification
              </div>
              <div className="bg-teal/10 p-3 rounded-lg text-gray-300 text-sm">
                • Financing options guidance
              </div>
            </div>
            
            {/* Empty space to match the "funds limited" text in the middle card */}
            <div className="h-6"></div>
            
            {/* Button */}
            <div className="mt-auto">
              <Link href="/contact" className="block">
                <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-md font-medium">
                  Secure Your Rebates
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 