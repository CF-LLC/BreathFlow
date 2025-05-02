import BreathingExercisePageClient from "./BreathingExercisePageClient"

// Add generateStaticParams function to pre-generate all possible paths
export function generateStaticParams() {
  return [
    { technique: "sleep" },
    { technique: "digestive" },
    { technique: "focus" },
    { technique: "cardiac" },
    { technique: "wimhof" },
    { technique: "fire" },
  ]
}

export default function BreathingExercisePage({ params }: { params: { technique: string } }) {
  return <BreathingExercisePageClient params={params} />
}
