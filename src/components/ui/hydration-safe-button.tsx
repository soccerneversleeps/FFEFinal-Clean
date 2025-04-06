"use client"

import { useState, useEffect } from "react"
import { Button, ButtonProps } from "./button"

export function HydrationSafeButton(props: ButtonProps) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return <div className="opacity-0" style={{ height: props.size === 'icon' ? '40px' : '40px', width: props.size === 'icon' ? '40px' : 'auto' }} />
  }
  
  return <Button {...props} />
} 