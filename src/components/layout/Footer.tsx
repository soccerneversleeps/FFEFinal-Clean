import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white py-12">
      <div className="container mx-auto px-4">
        {/* Center the grid with max-width and auto margins */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Column */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4">Company</h3>
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
                  <Link href="/active-partners" className="text-gray-400 hover:text-white transition-colors">
                    Active Partners
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Services Column */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/partners" className="text-gray-400 hover:text-white transition-colors">
                    Outreach Assistance
                  </Link>
                </li>
                <li>
                  <Link href="/#direct-install" className="text-gray-400 hover:text-white transition-colors">
                    Direct Install
                  </Link>
                </li>
                <li>
                  <Link href="/#direct-install" className="text-gray-400 hover:text-white transition-colors">
                    Program Design
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400">
                    Retail Services
                  </span>
                </li>
              </ul>
            </div>
            
            {/* Contact Column */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <address className="not-italic text-gray-400">
                <p>5501 Ripple Cove Way</p>
                <p>Bakersfield, CA 93313</p>
                <p className="mt-4">
                  Phone: <a 
                    href="tel:+16617515010" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    (661) 751-5010
                  </a>
                </p>
              </address>
              
              {/* Center social media icons */}
              <div className="flex justify-center md:justify-start space-x-4 mt-6">
                <a 
                  href="https://www.linkedin.com/company/103027211" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://www.facebook.com/profile.php?id=61561829835874" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                
                {/* Email Icon */}
                <a 
                  href="mailto:familyfirstenergy@outlook.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Family First Energy. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 