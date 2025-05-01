// Utility function to get the base path for GitHub Pages
export function getBasePath(): string {
    if (typeof window !== "undefined") {
      // Client-side: get the exact repository name with correct case
      const pathParts = window.location.pathname.split("/")
      if (pathParts.length > 1 && pathParts[1]) {
        // Return the exact repository name with its original case
        return `/${pathParts[1]}`
      }
    }
  
    // Server-side or fallback
    // Use the exact repository name from environment variable if available
    return process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}` : "/BreathFlow" // Hardcode the correct case as fallback
  }
  