"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function PowerSaveToggle() {
  // Use null as initial state to indicate "not yet determined"
  const [powerSave, setPowerSave] = useState<boolean | null>(null)

  // Initialize state on client-side only
  useEffect(() => {
    setPowerSave(false)
  }, [])

  // Apply effects only after component has mounted
  useEffect(() => {
    // Skip if powerSave is null (initial state)
    if (powerSave === null) return
    
    if (powerSave) {
      document.documentElement.style.filter = "brightness(0.8)"
      document.documentElement.classList.add("power-save")
    } else {
      document.documentElement.style.filter = "brightness(1)"
      document.documentElement.classList.remove("power-save")
    }
  }, [powerSave])

  // Render a placeholder during server-side rendering
  if (powerSave === null) {
    return <div className="w-5 h-5" />
  }

  return (
    <Button variant="ghost" size="icon" onClick={() => setPowerSave(!powerSave)} className="relative group text-yellow-400 hover:text-yellow-300">
      {powerSave ? (
        <Moon className="h-5 w-5 text-green transition-colors" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-400 transition-colors" />
      )}
      <span className="sr-only">Toggle power save mode</span>
      <div className="absolute hidden group-hover:block top-full mt-2 p-2 bg-navy-dark rounded text-xs whitespace-nowrap">
        {powerSave ? "Currently saving ~20W" : "Enable power save mode"}
      </div>
    </Button>
  )
} 