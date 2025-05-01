"use client"

import type React from "react"

interface NavigationButtonProps {
  path: string
  className?: string
  children: React.ReactNode
}

export default function NavigationButton({ path, className, children }: NavigationButtonProps) {
  // Function to handle navigation
  const handleNavigation = () => {
    console.log("NavigationButton: Navigating to", path)

    // Try multiple navigation methods
    try {
      // Method 1: window.location.href
      window.location.href = path

      // Method 2: window.location.assign
      // setTimeout(() => {
      //   window.location.assign(path)
      // }, 100)

      // Method 3: window.open
      // setTimeout(() => {
      //   window.open(path, "_self")
      // }, 200)
    } catch (error) {
      console.error("Navigation error:", error)
    }
  }

  return (
    <button onClick={handleNavigation} className={className} style={{ cursor: "pointer" }}>
      {children}
    </button>
  )
}
