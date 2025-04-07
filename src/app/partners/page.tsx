"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Users, Building, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PartnersPage() {
  const partnerTypes = [
    {
      title: "Contractors",
      icon: <Building className="h-8 w-8 text-blue" />,
      description: "Join our network of qualified contractors to access new business opportunities through our utility programs. We provide consistent work and streamlined processes.",
      benefits: [
        "Access to utility program projects",
        "Consistent workflow opportunities",
        "Simplified administrative processes",
        "Training and certification support"
      ],
      iconBgColor: "bg-blue/10",
      iconColor: "text-blue"
    },
    {
      title: "Sales Representatives",
      icon: <Briefcase className="h-8 w-8 text-orange" />,
      description: "Represent our energy efficiency programs to potential customers. We're looking for motivated sales professionals with strong communication skills.",
      benefits: [
        "Competitive commission structure",
        "Comprehensive product training",
        "Marketing and lead generation support",
        "Flexible scheduling options"
      ],
      iconBgColor: "bg-orange/10",
      iconColor: "text-orange"
    },
    {
      title: "Vendors",
      icon: <Users className="h-8 w-8 text-green" />,
      description: "Supply energy-efficient products and technologies for our programs. We partner with vendors who provide reliable, high-quality solutions.",
      benefits: [
        "Expanded distribution channels",
        "Volume purchasing opportunities",
        "Co-marketing possibilities",
        "Long-term partnership potential"
      ],
      iconBgColor: "bg-green/10",
      iconColor: "text-green"
    }
  ]

  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Join Our Network of Partners</h1>
          
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            We're always looking for qualified partners who share our commitment to energy efficiency 
            and exceptional service. Join our growing network of energy professionals.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {partnerTypes.map((type, index) => (
              <div 
                key={index} 
                className="bg-navy-dark border border-gray-800 rounded-xl overflow-hidden h-full transition-all duration-300 hover:border-blue/50 hover:shadow-glow-blue hover:transform hover:scale-105"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${type.iconBgColor} p-3 rounded-full transition-all duration-300 group-hover:scale-110`}>
                      {type.icon}
                    </div>
                    <h2 className={`text-xl font-bold ${type.iconColor}`}>{type.title}</h2>
                  </div>
                  
                  <p className="text-gray-300 mb-4 flex-grow">
                    {type.description}
                  </p>
                  
                  <div>
                    <h3 className="font-bold mb-2">Benefits:</h3>
                    <ul className="grid gap-1">
                      {type.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span className="text-green mr-2">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-blue/20 to-navy-dark border border-blue/30 rounded-xl p-8 text-center max-w-4xl mx-auto transition-all duration-300 hover:border-blue/50 hover:shadow-glow-blue">
            <h2 className="text-2xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-gray-300 mb-6">
              Contact our team today to discuss partnership opportunities and how we can work together to advance energy efficiency in California.
            </p>
            <Button 
              className="bg-orange hover:bg-orange/90 text-white py-6 px-8 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-glow-orange"
              asChild
            >
              <Link href="/contact" className="inline-flex items-center">
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 