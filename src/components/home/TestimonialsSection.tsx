import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-navy-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Partners Say</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Utility Partner Testimonial */}
          <div className="bg-navy p-8 rounded-xl border border-gray-800">
            <p className="text-lg italic mb-6">
              "Family First Energy has been instrumental in helping us reach our energy efficiency goals. 
              Their outreach efforts have significantly increased customer participation."
            </p>
            <div className="flex items-center">
              <div>
                <h4 className="font-semibold">David Reyes</h4>
                <p className="text-gray-400 text-sm">CEO, Reliable Energy</p>
              </div>
            </div>
          </div>

          {/* Contractor Partner Testimonial */}
          <div className="bg-navy p-8 rounded-xl border border-gray-800">
            <p className="text-lg italic mb-6">
              "The team at Family First Energy understands the unique challenges of utility outreach. 
              They've helped us connect with hard-to-reach communities with impressive results."
            </p>
            <div className="flex items-center">
              <div>
                <h4 className="font-semibold">Gabriel Peredo</h4>
                <p className="text-gray-400 text-sm">Senior Director, RHA Inc.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Join Our Network of Partners</h3>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center">
              <span className="text-blue mr-2">•</span>
              <span>Contractors</span>
            </div>
            <div className="flex items-center">
              <span className="text-orange mr-2">•</span>
              <span>Sales Representatives</span>
            </div>
            <div className="flex items-center">
              <span className="text-green mr-2">•</span>
              <span>Vendors</span>
            </div>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            We're always looking for qualified partners who share our commitment to energy efficiency 
            and exceptional service. Join our growing network of energy professionals.
          </p>
          <Link 
            href="/partners"
            className="inline-flex items-center bg-orange hover:bg-orange/90 text-white px-6 py-3 rounded-md transition-all duration-300"
          >
            Explore Partnership Opportunities
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
} 