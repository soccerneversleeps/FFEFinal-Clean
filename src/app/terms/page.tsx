"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms and Conditions</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">SMS Communication Terms</h2>
              <div className="space-y-4">
                <p>
                  By providing your phone number and consent to receive text messages, you agree to the following terms:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You authorize Family First Energy (FFE) to send text messages regarding your inquiry, including but not limited to appointment confirmations, updates, and follow-ups.</li>
                  <li>Message frequency varies based on your interaction with our services.</li>
                  <li>Message and data rates may apply as charged by your mobile carrier.</li>
                  <li>Consent to receive text messages is not required to work with FFE or purchase any services.</li>
                  <li>You can opt-out at any time by replying STOP to any message.</li>
                  <li>Reply HELP for assistance with text messaging.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Form Submission</h2>
              <div className="space-y-4">
                <p>When you submit our contact form:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You agree to be contacted by FFE representatives via email, phone, or text message regarding your inquiry.</li>
                  <li>Your information will be used solely for the purpose of responding to your inquiry and will not be shared with third parties.</li>
                  <li>We aim to respond to all inquiries within 24 business hours.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Privacy & Data Protection</h2>
              <div className="space-y-4">
                <p>We are committed to protecting your privacy:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your personal information is collected and stored securely.</li>
                  <li>We do not sell or share your information with third parties.</li>
                  <li>Your data is used only for communication regarding your inquiry and related services.</li>
                  <li>You can request deletion of your information at any time.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Updates to Terms</h2>
              <p>
                FFE reserves the right to modify these terms at any time. Changes will be effective immediately upon posting
                to our website. Your continued use of our services after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className="border-t border-gray-800 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4">Related Legal Documents</h2>
              <p>
                For more information about how we handle your data, please also review our{" "}
                <Link href="/privacy" className="text-orange hover:text-orange/90 transition-colors underline">
                  Privacy Policy
                </Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 