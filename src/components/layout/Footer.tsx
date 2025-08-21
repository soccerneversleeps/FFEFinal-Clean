import Link from "next/link"
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Family First Energy</h3>
            <p className="text-gray-400 mb-6">
              Dedicated to helping California families and businesses live comfortably while reducing energy costs through innovative solutions.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/outreach-assistance" className="text-gray-400 hover:text-white transition-colors">
                  Outreach Assistance
                </Link>
              </li>
              <li>
                <Link href="/services/direct-install" className="text-gray-400 hover:text-white transition-colors">
                  Direct Install
                </Link>
              </li>
              <li>
                <Link href="/services/program-design" className="text-gray-400 hover:text-white transition-colors">
                  Program Design
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-400 hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <MapPin className="text-blue mr-2 flex-shrink-0" size={18} />
                <p className="text-gray-400">
                  5501 Ripple Cove Way<br />
                  Bakersfield, CA 93313
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="text-blue mr-2 flex-shrink-0" size={18} />
                <a href="tel:+16617515010" className="text-gray-400 hover:text-white transition-colors">
                  (661) 751-5010
                </a>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="text-blue mr-2 flex-shrink-0" size={18} />
                <a href="mailto:connect@familyfirstenergy.com" className="text-gray-400 hover:text-white transition-colors">
                  connect@familyfirstenergy.com
                </a>
              </div>
              <div className="flex space-x-4 justify-center mt-4">
                <a href="https://www.facebook.com/profile.php?id=61561829835874" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  <Facebook size={20} />
                </a>
                <a href="https://www.linkedin.com/company/103027211/" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Family First Energy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 