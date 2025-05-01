"use client"

import { useEffect } from "react"
import { getBasePath } from "@/lib/get-base-path"

export default function NotFound() {
  const basePath = typeof window !== "undefined" ? getBasePath() : "/BreathFlow"

  useEffect(() => {
    // Check if we're at a lowercase version of a valid path
    const currentPath = window.location.pathname

    // If the path contains /breathe/ but doesn't have the correct repository name
    if (currentPath.includes("/breathe/") && !currentPath.includes("/BreathFlow/")) {
      // Fix the path by replacing the incorrect repository name with the correct one
      const correctedPath = currentPath.replace(/^\/[^/]+\//, "/BreathFlow/")
      window.location.href = correctedPath
      return
    }

    // Default redirect to home page after 3 seconds
    const timer = setTimeout(() => {
      window.location.href = `${basePath}/`
    }, 3000)

    return () => clearTimeout(timer)
  }, [basePath])

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-xl mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <p className="mb-8">Redirecting to home page in 3 seconds...</p>
      <a href="/BreathFlow/" className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-md">
        Go Home Now
      </a>
    </div>
  )
}
