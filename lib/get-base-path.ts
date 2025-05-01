// Utility function to get the base path for GitHub Pages
export function getBasePath(): string {
    if (typeof window !== "undefined") {
      // Client-side: extract from window.location
      const pathSegments = window.location.pathname.split("/")
      if (pathSegments.length > 1) {
        return `/${pathSegments[1]}`
      }
    }
  
    // Server-side or fallback
    return process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}` : ""
  }
  