"use client"

import { Button } from "@/components/ui/button"
import { useRef } from "react"

export default function NewsletterForm() {
  const emailRef = useRef<HTMLInputElement>(null)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    const email = emailRef.current?.value
    console.log("Subscribing email:", email)
    // Reset form
    if (emailRef.current) {
      emailRef.current.value = ""
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex gap-2">
        <input
          type="email"
          ref={emailRef}
          placeholder="Your email"
          className="bg-navy border border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange"
          required
        />
        <Button type="submit" className="bg-orange hover:bg-orange/90 text-white transition-all duration-300">
          Subscribe
        </Button>
      </div>
    </form>
  )
} 