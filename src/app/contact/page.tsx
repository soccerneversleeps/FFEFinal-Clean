"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    utilityName: "",
    programType: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    // In a real implementation, you would send this data to your server
  }

  const programTypes = [
    "Residential Direct Install",
    "Commercial Incentive Programs",
    "Outreach & Education",
    "Program Design & Implementation",
    "Other"
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-navy text-white">
        <div className="container mx-auto px-4 py-12">
          <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-green mb-6">Message Sent!</h1>
            <p className="text-lg text-gray-300 mb-8">
              Thank you for reaching out to Family First Energy. We've received your message and will be in touch within 24 hours to discuss partnership opportunities.
            </p>
            <Button asChild className="bg-blue hover:bg-blue/90">
              <Link href="/">
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <div className="md:w-[65%] bg-navy-dark p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Organization Partnership Inquiry</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-navy border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Utility/Organization</label>
                <input
                  type="text"
                  name="utilityName"
                  value={formData.utilityName}
                  onChange={handleChange}
                  required
                  className="w-full bg-navy border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue"
                  placeholder="e.g., Pacific Gas & Electric, SoCal Edison"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-navy border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-navy border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Program Type of Interest</label>
                <select
                  name="programType"
                  value={formData.programType}
                  onChange={handleChange}
                  required
                  className="w-full bg-navy border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue"
                >
                  <option value="" disabled>Select a program type</option>
                  {programTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Tell us about your needs</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full bg-navy border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue"
                  placeholder="Please share details about your program goals, target audience, timeline, and any specific requirements. We're interested in learning how we can help you meet your energy efficiency targets."
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-orange hover:bg-orange/90 text-white py-3 transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="md:w-[35%] bg-navy-dark p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Our Office</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-400">5501 Ripple Cove Way</p>
                  <p className="text-gray-400">Bakersfield, CA 93313</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Hours of Operation</h3>
                  <p className="text-gray-400">Monday - Saturday: 8:00AM - 6:00PM PST</p>
                  <p className="text-gray-400">Sunday: Closed</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-400">Office: (661) 751-5010</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-400">familyfirstenergy@outlook.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 