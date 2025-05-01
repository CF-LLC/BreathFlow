import WimHofBreathingClientPage from "./WimHofBreathingClientPage"

// Add generateStaticParams function for static export
export function generateStaticParams() {
  return [{ technique: "wimhof" }]
}

export default function WimHofBreathingPage() {
  return <WimHofBreathingClientPage />
}
