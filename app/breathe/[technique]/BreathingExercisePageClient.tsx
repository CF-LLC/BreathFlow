"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { SparklesCore } from "@/components/sparkles"
import Navbar from "@/components/navbar"
import BreathingAnimation from "@/components/breathing-animation"
import BreathingControls from "@/components/breathing-controls"
import { ArrowLeft } from "lucide-react"

// Define breathing patterns for different techniques
const breathingPatterns = {
  sleep: {
    name: "4-7-8 Breathing for Sleep",
    description: "Inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds",
    inhale: 4,
    hold: 7,
    exhale: 8,
    color: "from-blue-500 to-indigo-600",
    textColor: "text-blue-400",
  },
  digestive: {
    name: "Diaphragmatic Breathing for Digestion",
    description: "Deep inhale for 4 seconds, hold for 2 seconds, long exhale for 6 seconds",
    inhale: 4,
    hold: 2,
    exhale: 6,
    color: "from-green-500 to-emerald-600",
    textColor: "text-green-400",
  },
  focus: {
    name: "Box Breathing for Focus",
    description: "Inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, hold for 4 seconds",
    inhale: 4,
    hold: 4,
    exhale: 4,
    holdAfterExhale: 4,
    color: "from-purple-500 to-pink-600",
    textColor: "text-purple-400",
  },
}

export default function BreathingExercisePageClient({ params }: { params: { technique: string } }) {
  const router = useRouter()
  const technique = params.technique as string

  const [isActive, setIsActive] = useState(false)
  const [currentPhase, setCurrentPhase] = useState<"inhale" | "hold" | "exhale" | "holdAfterExhale">("inhale")
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [totalCycles, setTotalCycles] = useState(0)

  // Get the breathing pattern based on the technique
  const pattern = breathingPatterns[technique as keyof typeof breathingPatterns]

  // If pattern doesn't exist, redirect to home
  useEffect(() => {
    if (!pattern) {
      console.log("Pattern not found for technique:", technique)
      router.push("/techniques")
    } else {
      // Initialize with the correct starting values
      setSecondsLeft(pattern.inhale)
    }
  }, [pattern, router, technique])

  // Handle the breathing timer
  useEffect(() => {
    if (!isActive || !pattern) return

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          // Move to the next phase
          if (currentPhase === "inhale") {
            setCurrentPhase("hold")
            return pattern.hold
          } else if (currentPhase === "hold") {
            setCurrentPhase("exhale")
            return pattern.exhale
          } else if (currentPhase === "exhale") {
            if ("holdAfterExhale" in pattern && pattern.holdAfterExhale) {
              setCurrentPhase("holdAfterExhale")
              return pattern.holdAfterExhale
            } else {
              setCurrentPhase("inhale")
              setTotalCycles((prev) => prev + 1)
              return pattern.inhale
            }
          } else {
            // holdAfterExhale
            setCurrentPhase("inhale")
            setTotalCycles((prev) => prev + 1)
            return pattern.inhale
          }
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isActive, currentPhase, pattern])

  // Toggle the breathing exercise
  const toggleBreathing = () => {
    if (isActive) {
      setIsActive(false)
    } else {
      setIsActive(true)
      setCurrentPhase("inhale")
      setSecondsLeft(pattern?.inhale || 4)
    }
  }

  if (!pattern) return null

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Ambient background with moving particles */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="container mx-auto px-6 py-8">
          <a
            href="/techniques"
            className="bg-purple-600 hover:bg-purple-700 text-white mb-8 flex items-center px-4 py-2 rounded-md inline-block"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Techniques
          </a>

          <div className="text-center mb-8">
            <h1 className={`text-3xl md:text-4xl font-bold ${pattern.textColor} mb-2`}>{pattern.name}</h1>
            <p className="text-gray-400">{pattern.description}</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <BreathingAnimation
              isActive={isActive}
              currentPhase={currentPhase}
              secondsLeft={secondsLeft}
              pattern={pattern}
            />

            <BreathingControls isActive={isActive} onToggle={toggleBreathing} totalCycles={totalCycles} />
          </div>
        </div>
      </div>
    </main>
  )
}
