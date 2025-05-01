import CardiacBreathingClient from "./CardiacBreathingClient"

// Add generateStaticParams function for static export
export function generateStaticParams() {
  return [{ technique: "cardiac" }]
}

export default function CardiacBreathingPage() {
  return <CardiacBreathingClient />
}
