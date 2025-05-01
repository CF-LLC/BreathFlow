import FireBreathingClientPage from "./FireBreathingClientPage"

// Add generateStaticParams function for static export
export function generateStaticParams() {
  return [{ technique: "fire" }]
}

export default function FireBreathingPage() {
  return <FireBreathingClientPage />
}
