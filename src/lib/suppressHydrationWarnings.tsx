"use client"

import { useEffect } from "react"

export function SuppressHydrationWarnings() {
  useEffect(() => {
    // This will run after hydration and remove any fdprocessedid attributes
    const removeProcessedIds = () => {
      document.querySelectorAll('[fdprocessedid]').forEach(el => {
        el.removeAttribute('fdprocessedid')
      })
    }
    
    // Run immediately and also set up a MutationObserver to catch any new elements
    removeProcessedIds()
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'fdprocessedid') {
          const el = mutation.target as HTMLElement
          el.removeAttribute('fdprocessedid')
        }
      })
    })
    
    observer.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ['fdprocessedid']
    })
    
    return () => observer.disconnect()
  }, [])
  
  return null
} 