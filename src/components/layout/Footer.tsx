import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-green">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-400 hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-gray-400 hover:text-white">Outreach Assistance</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white">Direct Install</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white">Program Design</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white">Retail Services</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-blue">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">LinkedIn</Link></li>
              <li><Link href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">Twitter</Link></li>
              <li><Link href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">Facebook</Link></li>
              <li><Link href="mailto:info@familyfirstenergy.com" className="text-gray-400 hover:text-white transition-colors">Email Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Family First Energy. All rights reserved.</p>
          <p className="mt-2">ONE FAMILY, ONE MISSION</p>
        </div>
      </div>
    </footer>
  )
} 