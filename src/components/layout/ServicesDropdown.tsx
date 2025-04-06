"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

export default function ServicesDropdown() {
  const router = useRouter()
  const pathname = usePathname()
  
  const serviceItems = [
    { name: 'Outreach Assistance', href: '#services' },
    { name: 'Direct Install', href: '#services' },
    { name: 'Program Design', href: '#services' },
    { name: 'Retail Services', href: '#services' }
  ]
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      if (pathname !== '/') {
        router.push('/')
        setTimeout(() => {
          const element = document.querySelector(href)
          element?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
  
  return (
    <div className="bg-navy-dark border-t border-gray-800 py-2">
      <div className="container mx-auto px-4">
        <h3 className="text-orange font-semibold mb-2">Services</h3>
        <div className="space-y-2">
          {serviceItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block text-gray-300 hover:text-white transition-colors py-1"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 