"use client"

import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ResidentialProgramsPage() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Residential Programs</h1>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl">
          Discover how our residential energy efficiency programs can help you save money while making your home more comfortable and environmentally friendly.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Home Energy Assessment Card */}
          <div className="bg-navy-dark p-8 rounded-xl transition-all duration-300 hover:shadow-glow-blue group flex flex-col h-full">
            {/* Header - fixed height */}
            <div className="bg-blue/20 p-4 rounded-xl mb-6 h-20 flex items-center">
              <h2 className="text-2xl font-bold text-blue">Home Energy Assessment</h2>
            </div>
            
            {/* Title - fixed height */}
            <div className="h-12 mb-4">
              <p className="text-xl font-medium text-white">Personalized Energy Savings Plan.</p>
            </div>
            
            {/* Description - fixed height */}
            <div className="h-24 mb-6">
              <p className="text-gray-300">
                Get a comprehensive evaluation of your home's energy usage and receive personalized recommendations for improvements that will maximize your energy savings.
              </p>
            </div>
            
            {/* Features grid - fixed height */}
            <div className="grid grid-cols-2 gap-4 mb-8 h-48">
              <div className="bg-blue/10 p-3 rounded-lg text-gray-300 text-sm">
                • Detailed home energy analysis
              </div>
              <div className="bg-blue/10 p-3 rounded-lg text-gray-300 text-sm">
                • Thermal imaging inspection
              </div>
              <div className="bg-blue/10 p-3 rounded-lg text-gray-300 text-sm">
                • Air leak detection
              </div>
              <div className="bg-blue/10 p-3 rounded-lg text-gray-300 text-sm">
                • Appliance efficiency evaluation
              </div>
            </div>
            
            {/* Empty space for alignment */}
            <div className="h-6"></div>
            
            {/* Button */}
            <div className="mt-auto">
              <Link href="/contact" className="block">
                <button className="w-full bg-blue hover:bg-blue/90 text-white py-3 px-6 rounded-md font-medium">
                  Schedule an Assessment
                </button>
              </Link>
            </div>
          </div>

          {/* Smart Home Program Card */}
          <div className="bg-navy-dark p-8 rounded-xl transition-all duration-300 hover:shadow-glow-orange group flex flex-col h-full">
            {/* Header - fixed height */}
            <div className="bg-orange/20 p-4 rounded-xl mb-6 h-20 flex items-center">
              <h2 className="text-2xl font-bold text-orange">Smart Home Program</h2>
            </div>
            
            {/* Title - fixed height */}
            <div className="h-12 mb-4">
              <p className="text-xl font-medium text-white">Automate Your Energy Savings.</p>
            </div>
            
            {/* Description - fixed height */}
            <div className="h-24 mb-6">
              <p className="text-gray-300">
                Transform your home with smart technology that automatically optimizes your energy usage while maintaining comfort. Includes rebates on smart thermostats and other energy-saving devices.
              </p>
            </div>
            
            {/* Features grid - fixed height */}
            <div className="grid grid-cols-2 gap-4 mb-8 h-48">
              <div className="bg-orange/10 p-3 rounded-lg text-gray-300 text-sm">
                • Smart thermostat installation
              </div>
              <div className="bg-orange/10 p-3 rounded-lg text-gray-300 text-sm">
                • LED Lighting Controls
              </div>
              <div className="bg-orange/10 p-3 rounded-lg text-gray-300 text-sm">
                • Energy monitoring system
              </div>
              <div className="bg-orange/10 p-3 rounded-lg text-gray-300 text-sm">
                • Mobile app energy controls
              </div>
            </div>
            
            {/* Empty space for alignment */}
            <div className="h-6"></div>
            
            {/* Button */}
            <div className="mt-auto">
              <Link href="/contact" className="block">
                <button className="w-full bg-orange hover:bg-orange/90 text-white py-3 px-6 rounded-md font-medium">
                  Explore Smart Home Options
                </button>
              </Link>
            </div>
          </div>

          {/* Multi Family Incentives Card - Updated with CoMFI program details */}
          <div className="bg-navy-dark p-8 rounded-xl transition-all duration-300 hover:shadow-glow-teal group flex flex-col h-full">
            {/* Header - fixed height */}
            <div className="bg-teal/20 p-4 rounded-xl mb-6 h-20 flex items-center">
              <h2 className="text-2xl font-bold text-teal">Multifamily Incentive Program</h2>
            </div>
            
            {/* Title - fixed height */}
            <div className="h-12 mb-4">
              <p className="text-xl font-medium text-white">Comprehensive Property Upgrades.</p>
            </div>
            
            {/* Description - fixed height */}
            <div className="h-24 mb-6">
              <p className="text-gray-300">
                Our representatives guide you through the entire process, from enrollment to project completion. Access no-cost assessments and significant incentives for your multifamily property.
              </p>
            </div>
            
            {/* Features grid - fixed height */}
            <div className="grid grid-cols-2 gap-4 mb-8 h-48">
              <div className="bg-teal/10 p-3 rounded-lg text-gray-300 text-sm">
                • No-cost energy assessment
              </div>
              <div className="bg-teal/10 p-3 rounded-lg text-gray-300 text-sm">
                • Qualified installation contractors
              </div>
              <div className="bg-teal/10 p-3 rounded-lg text-gray-300 text-sm">
                • Energy efficiency incentives
              </div>
              <div className="bg-teal/10 p-3 rounded-lg text-gray-300 text-sm">
                • Complete project support
              </div>
            </div>
            
            {/* Funds limited text */}
            <div className="h-6">
              <p className="text-sm text-teal/70 text-center">
                First-come, first-served basis while funds available
              </p>
            </div>
            
            {/* Button */}
            <div className="mt-auto">
              <Link href="/contact" className="block">
                <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-md font-medium">
                  Apply For ComFI Program
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 