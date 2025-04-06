'use client'

import Link from "next/link"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import PowerSaveToggle from "@/components/shared/PowerSaveToggle"
import { Menu, X } from 'lucide-react'

interface NavItem {
  name: string
  href: string
  tip?: string
  children?: NavItem[]
}

export default function MainNav() {
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  
  const navItems: NavItem[] = [
    { 
      name: 'Residential', 
      href: '#residential',
      tip: 'Smart thermostats can save up to 10% on heating costs'
    },
    { 
      name: 'Commercial', 
      href: '#commercial',
      tip: 'LED lighting upgrades can reduce lighting energy use by 75%'
    },
    { 
      name: 'About Us', 
      href: '/about'
    },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      if (pathname !== '/') {
        // If we're not on the home page, first navigate to home
        router.push('/')
        // Wait for navigation to complete then scroll
        setTimeout(() => {
          const element = document.querySelector(href)
          element?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        // If we're already on home page, just scroll
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    // Close mobile menu after clicking
    setMobileMenuOpen(false)
  }

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between bg-navy-dark rounded-lg overflow-hidden h-14">
        <div className="flex items-center">
          <div className="px-4">
            <PowerSaveToggle />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative nav-group">
                <Link 
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-gray-300 hover:text-white transition-colors ${
                    activeItem === item.name ? 'text-white' : ''
                  }`}
                >
                  {item.name}
                </Link>
                
                {item.children && (
                  <div className="nav-dropdown">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={(e) => handleNavClick(e, child.href)}
                        className="text-sm"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
                
                {item.tip && (
                  <div className="absolute hidden nav-group-hover:block top-full mt-2 p-2 bg-navy-dark rounded text-xs whitespace-nowrap">
                    {item.tip}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className="px-4">
          <Link 
            href="/contact"
            className="bg-orange hover:bg-orange/90 text-white px-4 py-2 rounded-md transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center justify-between bg-navy-dark rounded-lg h-14 px-4">
        <div className="flex items-center">
          <PowerSaveToggle />
        </div>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white p-2"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-navy-dark z-50 rounded-b-lg shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-white py-2 px-4 hover:bg-navy-light rounded-md transition-colors block"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </Link>
                
                {/* Display children for Services */}
                {item.name === 'Services' && item.children && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-700 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="text-gray-400 hover:text-white py-1 px-2 hover:bg-navy-light rounded-md transition-colors block text-sm"
                        onClick={(e) => handleNavClick(e, child.href)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link 
              href="/contact"
              className="bg-orange hover:bg-orange/90 text-white py-2 px-4 rounded-md transition-colors text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  )
} 