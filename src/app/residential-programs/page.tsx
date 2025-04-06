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

        <div className="grid md:grid-cols-2 gap-8">
          {/* Home Energy Assessment Program */}
          <div className="bg-navy-dark p-8 rounded-xl transition-all duration-300 hover:shadow-glow-orange group">
            <div className="bg-orange/20 p-4 rounded-xl mb-6">
              <h2 className="text-2xl font-bold text-orange">Home Energy Assessment</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Get a comprehensive evaluation of your home's energy usage and receive personalized recommendations 
              for improvements that will maximize your energy savings.
            </p>
            <ul className="space-y-3 mb-8 text-gray-300">
              <li className="flex items-start gap-2">
                • Detailed home energy analysis
              </li>
              <li className="flex items-start gap-2">
                • Thermal imaging inspection
              </li>
              <li className="flex items-start gap-2">
                • Air leak detection
              </li>
              <li className="flex items-start gap-2">
                • Appliance efficiency evaluation
              </li>
            </ul>
            <div className="mt-auto">
              <Button className="w-full bg-orange hover:bg-orange/90 text-white py-6 text-lg transition-all duration-300">
                Schedule an Assessment
              </Button>
              <p className="text-sm text-orange/70 mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                Average identified savings: $500/year
              </p>
            </div>
          </div>

          {/* Smart Home Program */}
          <div className="bg-navy-dark p-8 rounded-xl transition-all duration-300 hover:shadow-glow-green group">
            <div className="bg-green/20 p-4 rounded-xl mb-6">
              <h2 className="text-2xl font-bold text-green">Smart Home Program</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Transform your home with smart technology that automatically optimizes your energy usage while 
              maintaining comfort. Includes rebates on smart thermostats and other energy-saving devices.
            </p>
            <ul className="space-y-3 mb-8 text-gray-300">
              <li className="flex items-start gap-2">
                • Smart thermostat installation
              </li>
              <li className="flex items-start gap-2">
                • LED lighting upgrades
              </li>
              <li className="flex items-start gap-2">
                • Energy monitoring system
              </li>
              <li className="flex items-start gap-2">
                • Mobile app energy controls
              </li>
            </ul>
            <div className="mt-auto">
              <Button className="w-full bg-green hover:bg-green/90 text-white py-6 text-lg transition-all duration-300">
                Explore Smart Home Options
              </Button>
              <p className="text-sm text-green/70 mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                Up to 15% reduction in energy costs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 