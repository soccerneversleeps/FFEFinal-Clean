"use client"

import Link from "next/link"
import { ArrowLeft, Zap, Shield, Wrench, Building, Snowflake } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DirectInstallPage() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Direct Install Services</h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Family First Energy delivers expert installation of energy efficiency measures with 
            General B, C36, and C20 licenses. With over 20 years of experience, we handle everything 
            from start to finish.
          </p>
          
          <div className="bg-navy-dark border border-gray-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-blue">The Family First Energy Advantage</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-blue/10 p-3 rounded-full mr-4">
                  <Zap className="h-6 w-6 text-blue" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Certified Expertise</h3>
                  <p className="text-gray-300">Our team holds General B, C36, and C20 licenses, ensuring we're qualified for all installations.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue/10 p-3 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-blue" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Quality Assurance</h3>
                  <p className="text-gray-300">Every installation undergoes rigorous quality checks to ensure optimal performance.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Installation Services</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-navy-dark border border-gray-800 rounded-lg p-5">
                <h3 className="font-bold text-xl mb-2">HVAC Systems</h3>
                <p className="text-gray-300">
                  Expert installation of energy-efficient heating, ventilation, and air conditioning systems.
                </p>
              </div>
              
              <div className="bg-navy-dark border border-gray-800 rounded-lg p-5">
                <h3 className="font-bold text-xl mb-2">Plumbing Solutions</h3>
                <p className="text-gray-300">
                  With our C36 license, we provide professional installation of water-saving fixtures and efficient hot water systems that reduce energy and water consumption.
                </p>
              </div>
              
              <div className="bg-navy-dark border border-gray-800 rounded-lg p-5">
                <h3 className="font-bold text-xl mb-2">General Contracting</h3>
                <p className="text-gray-300">
                  Our General B license allows us to either install directly or partner with specialized contractors to ensure your project's success from start to finish.
                </p>
              </div>
              
              <div className="bg-navy-dark border border-gray-800 rounded-lg p-5">
                <h3 className="font-bold text-xl mb-2">Refrigeration Systems</h3>
                <p className="text-gray-300">
                  Upgrade to energy-efficient refrigeration systems that significantly reduce electricity costs while maintaining optimal performance for your business.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue/20 to-navy-dark border border-blue/30 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Ready for High-Quality Installations?</h2>
            <p className="text-gray-300 mb-6">
              Our experienced team is ready to deliver energy efficiency measures that meet every requirement.
            </p>
            <Button 
              className="bg-orange hover:bg-orange/90 text-white py-6 px-8 text-lg transition-all duration-300"
              asChild
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 