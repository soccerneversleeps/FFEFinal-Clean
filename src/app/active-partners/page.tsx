"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

// Updated partner data with enhanced descriptions
const partners = [
  {
    id: 1,
    name: "Resource Innovations",
    logo: "/images/partners/resource-innovations-logo.png",
    description: "Industry leaders in designing and implementing innovative energy efficiency programs with exceptional results and customer satisfaction.",
    website: "https://www.resource-innovations.com/",
    partnerSince: "2020",
    category: "Program Implementer"
  },
  {
    id: 2,
    name: "RHA Inc.",
    logo: "/images/partners/rha-logo.png",
    description: "Experts in residential energy efficiency with a proven track record of delivering high-quality weatherization and energy-saving solutions.",
    website: "https://www.rhainc.com/",
    partnerSince: "2021",
    category: "Program Implementer"
  },
  {
    id: 3,
    name: "Reliable Energy",
    logo: "/images/partners/reliable-energy-logo.avif",
    description: "Trusted provider of dependable energy solutions with a commitment to excellence, sustainability, and customer-focused service.",
    website: "https://www.relenergy.com/",
    partnerSince: "2021",
    category: "Contractor"
  },
  {
    id: 4,
    name: "Willdan Group",
    logo: "/images/partners/willdan-logo.jpg",
    description: "Industry-leading technical and engineering experts delivering innovative, cost-effective solutions for energy efficiency and sustainability.",
    website: "https://www.willdan.com/index.aspx",
    partnerSince: "2022",
    category: "Program Implementer"
  },
  {
    id: 5,
    name: "Tech Clean CA",
    logo: "/images/partners/tech-logo.webp",
    description: "Pioneering clean energy technologies and cutting-edge solutions that are transforming California's approach to energy efficiency.",
    website: "https://techcleanca.com/",
    partnerSince: "2022",
    category: "Program"
  },
  {
    id: 6,
    name: "SoCal Gas ESA",
    logo: "/images/partners/scg-esa-logo.png",
    description: "Premier energy assistance program providing vital energy-saving services to income-qualified customers with outstanding care and attention.",
    website: "https://www.socalgas.com/billing-payment/assistance-programs/energy-savings-assistance-program",
    partnerSince: "2023",
    category: "Utility Program"
  },
  {
    id: 7,
    name: "SoCal Edison ESA",
    logo: "/images/partners/sce-esa-logo.png",
    description: "Excellence in energy assistance, delivering comprehensive energy-efficient appliances and services to eligible customers with exceptional quality.",
    website: "https://www.sce.com/residential/assistance/energy-saving-program",
    partnerSince: "2023",
    category: "Utility Program"
  },
  {
    id: 8,
    name: "GoGreen Financing",
    logo: "/images/partners/ggf-logo.webp",
    description: "California's premier financing platform connecting businesses and homeowners with affordable funding options for energy efficiency upgrades and sustainable improvements.",
    website: "https://www.gogreenfinancing.com/energy-efficiency-business-loans-california/find-a-contractor/?_search_by_name=family+first+energy",
    partnerSince: "2023",
    category: "Financing Program"
  }
]

export default function ActivePartnersPage() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Active Partners</h1>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl">
            We're proud to collaborate with leading utilities, government agencies, and energy efficiency 
            programs across California to deliver exceptional results for our communities.
          </p>

          {/* Partner Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map(partner => (
              <div 
                key={partner.id} 
                className="bg-navy-dark border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue"
              >
                <div className="p-8">
                  <div className="h-24 flex items-center justify-center mb-6 bg-white rounded-lg p-4">
                    {(partner.name === "SoCal Edison ESA" || partner.name === "SoCal Gas ESA") ? (
                      <div className="w-full h-full flex items-center justify-center overflow-hidden">
                        <div style={{ 
                          transform: 'scale(0.76)',
                          maxWidth: '100%', 
                          maxHeight: '100%',
                          marginTop: '-10px'
                        }}>
                          <Image 
                            src={partner.logo} 
                            alt={`${partner.name} logo`}
                            width={200}
                            height={60}
                            style={{ 
                              width: 'auto',
                              height: 'auto',
                              objectFit: 'contain',
                              objectPosition: 'center',
                            }}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full h-full">
                        <Image 
                          src={partner.logo} 
                          alt={`${partner.name} logo`}
                          fill
                          style={{ 
                            objectFit: 'contain',
                            maxWidth: "100%",
                            margin: "0 auto"
                          }}
                        />
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-blue">{partner.name}</h3>
                  
                  <div className="flex gap-4 mb-4">
                    <span className="inline-block bg-navy px-3 py-1 text-sm rounded-full border border-gray-700">
                      {partner.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    {partner.description}
                  </p>
                  
                  <a 
                    href={partner.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block text-blue hover:text-blue-light transition-colors"
                  >
                    Visit Website →
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in Becoming a Partner?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our network of energy efficiency professionals and help make a difference in California's energy future.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-orange hover:bg-orange/90 text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 