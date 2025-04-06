"use client"

import { useState } from "react"
import { Lightbulb } from 'lucide-react'

interface EnergyTipProps {
  children: React.ReactNode
}

export default function EnergyTip({ children }: EnergyTipProps) {
  const [visible, setVisible] = useState(false)

  return (
    <div className="relative inline-block" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      <Lightbulb className="h-4 w-4 inline-block text-orange/50 hover:text-orange transition-colors" />
      {visible && (
        <div className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-navy-dark rounded text-xs max-w-[200px] text-center">
          {children}
        </div>
      )}
    </div>
  )
} 