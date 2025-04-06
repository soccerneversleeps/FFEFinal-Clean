"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function PartnersPage() {
  const partners = [
    {
      name: "Resource Innovations",
      logo: "/images/partners/resource-innovations-logo.png",
      role: "Program Implementer",
      description: "Industry leaders in designing and implementing innovative energy efficiency programs with exceptional results and customer satisfaction.",
      website: "https://resource-innovations.com"
    },
    {
      name: "RHA Inc.",
      logo: "/images/partners/rha-logo.png",
      role: "Program Implementer",
      description: "Experts in residential energy efficiency with a proven track record of delivering high-quality weatherization and energy-saving solutions.",
      website: "https://www.rha-inc.org"
    },
    {
      name: "Reliable Energy",
      logo: "/images/partners/reliable-energy-logo.avif",
      role: "Contractor",
      description: "Trusted provider of dependable energy solutions with a commitment to excellence, sustainability, and customer-focused service.",
      website: "https://reliableenergy.com"
    },
    {
      name: "Willdan Group",
      logo: "/images/partners/willdan-logo.jpg",
      role: "Program Implementer",
      description: "Industry-leading technical and engineering experts delivering innovative, cost-effective solutions for energy efficiency and sustainability.",
      website: "https://www.willdan.com"
    }
  ]

  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our Partners</h1>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          We collaborate with industry-leading organizations to deliver exceptional energy efficiency programs and services.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {partners.map((partner) => (
            <div key={partner.name} className="bg-navy-dark border border-gray-800 rounded-xl overflow-hidden">
              <div className="h-48 bg-white flex items-center justify-center p-6">
                <Image 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  width={300} 
                  height={150}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue mb-2">{partner.name}</h2>
                <span className="inline-block bg-navy-light text-sm px-3 py-1 rounded-full mb-4">
                  {partner.role}
                </span>
                <p className="text-gray-300 mb-6">
                  {partner.description}
                </p>
                <Link 
                  href={partner.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue hover:text-blue-400 inline-flex items-center transition-colors"
                >
                  Visit Website <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 