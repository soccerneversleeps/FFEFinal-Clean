"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Upload } from 'lucide-react'
import { Button } from "@/components/ui/button"

const openPositions = [
  "Outreach Specialist",
  "HVAC Service Technician",
  "Weatherization Specialist",
  "Administrative Assistant"
]

export default function CareersPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    resume: null as File | null,
    coverLetter: '',
    availability: '',
    certified: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: checked }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files?.[0] }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const formDataToSend = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          formDataToSend.append(key, value)
        } else {
          formDataToSend.append(key, String(value))
        }
      })

      // In a real implementation, you'd send this to your API
      // For now, we'll simulate an email being sent
      console.log('Form submitted:', formData)
      
      // Show success message
      setIsSubmitted(true)
      
      // Clear form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        resume: null,
        coverLetter: '',
        availability: '',
        certified: false
      })

    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-navy text-white">
        <div className="container mx-auto px-4 py-12">
          <Link href="/careers" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Careers
          </Link>
          
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-green mb-6">Application Submitted!</h1>
            <p className="text-lg text-gray-300 mb-8">
              Thank you for your interest in joining Family First Energy. Our HR team typically responds 
              within 24-48 hours to review your application.
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
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg text-gray-300 mb-8">
            Help us make a difference in California's energy future while building a rewarding career.
          </p>

          <div className="bg-navy-dark p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold text-blue mb-6">Energy Efficiency Specialist</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    name="fullName"
                    className="w-full bg-navy border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    className="w-full bg-navy border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  name="phone"
                  className="w-full bg-navy border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Position *
                </label>
                <select
                  required
                  value={formData.position}
                  onChange={handleChange}
                  name="position"
                  className="w-full bg-navy border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue"
                >
                  <option value="" disabled>Select a position</option>
                  {openPositions.map(position => (
                    <option key={position} value={position}>
                      {position}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Resume *
                </label>
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById('resume-upload')?.click()}
                    className="border-blue text-blue hover:bg-blue/10"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Resume
                  </Button>
                  <input
                    id="resume-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  {formData.resume && (
                    <span className="text-sm text-gray-300">
                      {formData.resume.name}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Cover Letter
                </label>
                <textarea
                  rows={4}
                  value={formData.coverLetter}
                  onChange={handleChange}
                  name="coverLetter"
                  className="w-full bg-navy border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue"
                  placeholder="Tell us why you'd be a great fit..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Availability to Start *
                </label>
                <input
                  required
                  type="text"
                  value={formData.availability}
                  onChange={handleChange}
                  name="availability"
                  className="w-full bg-navy border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue"
                  placeholder="e.g., Immediately, 2 weeks notice required, etc."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  required
                  type="checkbox"
                  id="certified"
                  checked={formData.certified}
                  onChange={handleCheckboxChange}
                  name="certified"
                  className="mt-1"
                />
                <label htmlFor="certified" className="text-sm text-gray-300">
                  I certify that all information provided is true and complete to the best of my knowledge. 
                  I understand that any false information or omission may disqualify me from further consideration 
                  for employment. *
                </label>
              </div>

              <Button 
                type="submit"
                className="w-full bg-orange hover:bg-orange/90 text-white py-6 text-lg transition-all duration-300"
              >
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 