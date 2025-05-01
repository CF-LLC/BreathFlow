"use client"

import { useEffect } from "react"

export default function DebugHelper() {
  useEffect(() => {
    // Add click event listener to all anchor tags
    const anchors = document.querySelectorAll("a")
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        console.log("Clicked link:", anchor.href)
      })
    })

    // Add click event listener to all buttons
    const buttons = document.querySelectorAll("button")
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        console.log("Clicked button:", button.textContent)
      })
    })

    return () => {
      // Clean up event listeners
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", () => {})
      })
      buttons.forEach((button) => {
        button.removeEventListener("click", () => {})
      })
    }
  }, [])

  return null
}
