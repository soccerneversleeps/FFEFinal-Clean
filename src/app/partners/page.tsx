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
            <div className="bg-navy-dark p-8 rounded-xl border border-gray-800 flex flex-col justify-between transition-all duration-300 hover:border-teal hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-teal mb-4">Vendors</h2>
              
              <p className="text-gray-300 mb-6">
                Suppliers of energy-efficient products and solutions. Partner with us to provide high-quality equipment and materials to our customers.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <span className="text-teal mr-2">•</span> Equipment Manufacturers
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-teal mr-2">•</span> Material Suppliers
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-teal mr-2">•</span> Technology Providers
                </li>
              </ul>
            </div>
          </div>

          {/* Benefits Section - Enhanced with more visual appeal */}
          <div className="bg-navy-dark p-10 rounded-xl border-2 border-blue/30 transition-all duration-300 hover:border-blue/70 shadow-lg">
            <h2 className="text-3xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue to-teal bg-clip-text text-transparent">
              Why Partner With Us?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl mx-auto">
              <div className="bg-navy/60 p-5 rounded-lg border border-blue/20 transform transition-all duration-300 hover:scale-105 hover:border-blue/50">
                <div className="flex items-center space-x-4">
                  <span className="text-blue text-2xl">✓</span>
                  <p className="text-white font-semibold text-lg">Consistent project pipeline</p>
                </div>
              </div>
              
              <div className="bg-navy/60 p-5 rounded-lg border border-blue/20 transform transition-all duration-300 hover:scale-105 hover:border-blue/50">
                <div className="flex items-center space-x-4">
                  <span className="text-blue text-2xl">✓</span>
                  <p className="text-white font-semibold text-lg">Long-term growth potential</p>
                </div>
              </div>
              
              <div className="bg-navy/60 p-5 rounded-lg border border-blue/20 transform transition-all duration-300 hover:scale-105 hover:border-blue/50">
                <div className="flex items-center space-x-4">
                  <span className="text-blue text-2xl">✓</span>
                  <p className="text-white font-semibold text-lg">Competitive compensation</p>
                </div>
              </div>
              
              <div className="bg-navy/60 p-5 rounded-lg border border-blue/20 transform transition-all duration-300 hover:scale-105 hover:border-blue/50">
                <div className="flex items-center space-x-4">
                  <span className="text-blue text-2xl">✓</span>
                  <p className="text-white font-semibold text-lg">Support from our experienced team</p>
                </div>
              </div>
              
              <div className="bg-navy/60 p-5 rounded-lg border border-blue/20 transform transition-all duration-300 hover:scale-105 hover:border-blue/50">
                <div className="flex items-center space-x-4">
                  <span className="text-blue text-2xl">✓</span>
                  <p className="text-white font-semibold text-lg">Professional development opportunities</p>
                </div>
              </div>
              
              <div className="bg-navy/60 p-5 rounded-lg border border-blue/20 transform transition-all duration-300 hover:scale-105 hover:border-blue/50">
                <div className="flex items-center space-x-4">
                  <span className="text-blue text-2xl">✓</span>
                  <p className="text-white font-semibold text-lg">Access to utility program resources</p>
                </div>
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