"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Family First Energy - SMS Privacy Policy</h1>
          
          <div className="space-y-8 text-gray-300">
            <div className="mb-6">
              <p className="text-lg"><strong>Effective Date: August 21, 2025</strong></p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Mobile SMS Privacy Statement</h2>
              <p className="mb-4">
                Mobile information will not be shared with third parties for marketing/promotional purposes.
              </p>
              <p>
                When you provide your phone number to Family First Energy, you consent to receive SMS messages about the California American Water Conservation Program including appointment scheduling and service updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Use</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We use your phone number solely for water conservation program communications</li>
                <li>Your information is never sold or shared with third parties for marketing</li>
                <li>We maintain strict confidentiality of all customer information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Opt-Out</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reply STOP to any message to unsubscribe</li>
                <li>Reply HELP for assistance</li>
                <li>Call 661-751-5010 with questions</li>
              </ul>
              <p className="mt-4">
                Message and data rates may apply based on your mobile carrier.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <div className="space-y-2">
                <p><strong>Family First Energy</strong></p>
                <p>Phone: 661-751-5010</p>
                <p>Email: memo@familyfirstenergy.com</p>
              </div>
            </section>

            <section className="border-t border-gray-800 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4">Related Legal Documents</h2>
              <p>
                For additional terms regarding our services and SMS communications, please also review our{" "}
                <Link href="/terms" className="text-orange hover:text-orange/90 transition-colors underline">
                  Terms & Conditions
                </Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 