import { Zap, Lightbulb, Battery, BarChart3 } from 'lucide-react'
import EnergyTip from "@/components/shared/EnergyTip"
import Link from "next/link"
import styles from './FeaturesSection.module.css'

export default function FeaturesSection() {
  return (
    <section id="services" className="bg-navy-light py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          How We Help California Utilities
          <EnergyTip>Together, we've reduced CO2 emissions by 50,000 tons</EnergyTip>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/services/outreach-assistance" className="block h-full">
            <div className="bg-navy-dark p-8 rounded-xl border border-gray-800 transition-all duration-300 hover:bg-navy-dark/80 hover:border-blue hover:shadow-[0_0_30px_rgba(0,149,255,0.3)] group h-full flex flex-col">
              <div className="h-12 w-12 rounded-full bg-blue/20 flex items-center justify-center mb-6 group-hover:bg-blue/40">
                <Zap className="h-6 w-6 text-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Outreach Assistance</h3>
              <p className="text-gray-300">
                Family First Energy creates custom outreach strategies to help utilities, implementers, and contractors meet their contractual goals. With over 30 years of experience in utility program outreach, we drive engagement, increase participation, and ensure compliance. Partner with us to enhance your reach and maximize program success.
              </p>
            </div>
          </Link>
          
          <Link href="/services/direct-install" className="block h-full">
            <div className="bg-navy-dark p-8 rounded-xl border border-gray-800 transition-all duration-300 hover:bg-navy-dark/80 hover:border-orange hover:shadow-[0_0_30px_rgba(255,92,0,0.3)] group h-full flex flex-col">
              <div className="h-12 w-12 rounded-full bg-orange/20 flex items-center justify-center mb-6 group-hover:bg-orange/40">
                <Lightbulb className="h-6 w-6 text-orange" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Direct Install</h3>
              <p className="text-gray-300">
                Family First Energy delivers expert installation of energy efficiency measures with General B, C36, and C20 licenses. With over 20 years of experience, we handle everything from start to finish—staying ahead of new technologies, ensuring full compliance, and training our team to the highest standards. Partner with us for seamless, high-quality installations that meet every requirement.
              </p>
            </div>
          </Link>
          
          <Link href="/services/program-design" className="block h-full">
            <div className={`bg-navy-dark p-8 rounded-xl border border-gray-800 transition-all duration-300 hover:bg-navy-dark/80 group h-full flex flex-col ${styles.programDesignBox}`}>
              <div className="h-12 w-12 rounded-full bg-green/20 flex items-center justify-center mb-6 group-hover:bg-green/40">
                <BarChart3 className="h-6 w-6 text-green" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Program Design</h3>
              <p className="text-gray-300">
                Family First Energy partners with utilities and implementers to develop high-impact, cost-effective programs that meet both energy and equity goals. We specialize in creating strategies for disadvantaged communities and hard-to-reach zones throughout California. Our expertise helps you design measurable programs that maximize efficiency while ensuring no community is left behind.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  impact: string
  color: 'blue' | 'orange' | 'green'
}

function FeatureCard({ icon, title, description, impact, color }: FeatureCardProps) {
  return (
    <div className={`bg-navy-dark p-8 rounded-xl transition-all duration-300 hover:shadow-glow-${color} hover:translate-y-[-8px] group`}>
      <div className={`bg-${color}/20 p-4 rounded-full w-fit mb-6 group-hover:animate-pulse`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
      <div className={`mt-4 text-xs text-${color}/70 opacity-0 group-hover:opacity-100 transition-opacity`}>
        {impact}
      </div>
    </div>
  )
}

<style jsx>{`
  .program-design-link:hover > div {
    border-color: rgb(34, 197, 94) !important;
    box-shadow: 0 0 30px rgba(34, 197, 94, 0.3) !important;
  }
`}</style> 