"use client"

import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        {/* Centered header with animation */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Partnership Opportunities
          </h1>
          <div className="w-20 h-1 bg-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8">
          {/* Intro Section - Full Width with hover effect */}
          <div className="bg-navy-dark p-8 rounded-xl border border-gray-800 transition-all duration-300 hover:border-blue/50 hover:shadow-lg">
            <p className="text-lg text-gray-300 leading-relaxed">
              At Family First Energy, we believe in the power of collaboration. We're actively seeking trade contractors 
              to join our growing network of partners. Whether you're a specialized contractor or an established business, 
              we create opportunities that benefit everyone. Together with our partners, we deliver exceptional service 
              and drive energy efficiency across California.
            </p>
          </div>

          {/* Partnership Types - Enhanced hover effects */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-navy-dark p-8 rounded-xl border border-gray-800 flex flex-col justify-between transition-all duration-300 hover:border-blue hover:shadow-[0_0_30px_rgba(0,149,255,0.15)] hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-blue mb-4">Contractors</h2>
              <p className="text-gray-300 mb-4">
                Join our exclusive network of trade professionals. We provide consistent work opportunities, 
                competitive rates, and dedicated support. Our contractor partners benefit from direct access 
                to utility programs and a steady stream of pre-qualified projects.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Trade Contractors</li>
                <li>• Engineering Contractors</li>
                <li>• Hazard Abatement Contractors</li>
              </ul>
            </div>
            <div className="bg-navy-dark p-8 rounded-xl border border-gray-800 flex flex-col justify-between transition-all duration-300 hover:border-orange hover:shadow-[0_0_30px_rgba(255,92,0,0.15)] hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-orange mb-4">Outreach Contractors</h2>
              <p className="text-gray-300 mb-4">
                We partner with dynamic outreach teams of all sizes who understand utility programs 
                and share our commitment to results. Whether you're an established outreach firm or 
                an independent contractor with a proven track record, we offer the resources and 
                support to help you exceed program goals.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Independent Contractors</li>
                <li>• Outreach Contractors</li>
                <li>• Experienced Sales Reps</li>
              </ul>
            </div>
            <div className="bg-navy-dark p-8 rounded-xl border border-gray-800 flex flex-col justify-between transition-all duration-300 hover:border-green hover:shadow-[0_0_30px_rgba(126,211,33,0.15)] hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-green mb-4">Vendors</h2>
              <p className="text-gray-300 mb-4">
                Suppliers of energy-efficient products and solutions. Partner with us to provide 
                high-quality equipment and materials to our customers.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Equipment Manufacturers</li>
                <li>• Material Suppliers</li>
                <li>• Technology Providers</li>
              </ul>
            </div>
          </div>

          {/* Benefits Section - Adjusted Layout */}
          <div className="bg-navy-dark p-8 rounded-xl border border-gray-800 transition-all duration-300 hover:border-blue/50">
            <h2 className="text-2xl font-bold text-blue text-center mb-12">
              Why Partner With Us?
            </h2>
            
            {/* Added pl-12 for left padding and adjusted max-width */}
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl mx-auto pl-12">
              <div className="flex items-center space-x-4">
                <span className="text-green text-xl">✓</span>
                <p className="text-gray-300">Consistent project pipeline</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-green text-xl">✓</span>
                <p className="text-gray-300">Long-term growth potential</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-green text-xl">✓</span>
                <p className="text-gray-300">Competitive compensation</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-green text-xl">✓</span>
                <p className="text-gray-300">Support from our experienced team</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-green text-xl">✓</span>
                <p className="text-gray-300">Professional development opportunities</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-green text-xl">✓</span>
                <p className="text-gray-300">Access to utility program resources</p>
              </div>
            </div>
          </div>

          {/* CTA Section - Enhanced */}
          <div className="text-center bg-navy-dark p-8 rounded-xl border border-gray-800 transition-all duration-300 hover:border-orange/50">
            <h2 className="text-2xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-gray-300 mb-6">
              Contact us today to discuss partnership opportunities and learn more about how we can 
              grow together.
            </p>
            <Button 
              className="bg-orange hover:bg-orange/90 text-white px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,92,0,0.3)]"
              asChild
            >
              <Link href="/contact">
                Start the Conversation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 