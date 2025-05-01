"use client"

import { useEffect, useState } from "react"
import { SparklesCore } from "@/components/sparkles"
import Navbar from "@/components/navbar"
import BreathingAnimation from "@/components/breathing-animation"
import BreathingControls from "@/components/breathing-controls"
import { ArrowLeft } from "lucide-react"
import { getBasePath } from "@/lib/get-base-path"

// Define breathing pattern for cardiac coherence
const cardiacPattern = {
  name: "Cardiac Coherence Breathing",
  description: "Inhale for 5 seconds, exhale for 5 seconds to synchronize with your heart rate",
  inhale: 5,
  hold: 0, // No hold phase for cardiac coherence
  exhale: 5,
  color: "from-red-500 to-pink-600",
  textColor: "text-red-400",
}

export default function CardiacBreathingClient() {
  const [isActive, setIsActive] = useState(false)
  const [currentPhase, setCurrentPhase] = useState<"inhale" | "hold" | "exhale" | "holdAfterExhale">("inhale")
  const [secondsLeft, setSecondsLeft] = useState(cardiacPattern.inhale)
  const [totalCycles, setTotalCycles] = useState(0)
  const basePath = typeof window !== "undefined" ? getBasePath() : ""

  // Handle the breathing timer
  useEffect(() => {
    if (!isActive) return

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          // Move to the next phase - for cardiac coherence, we skip the hold phase
          if (currentPhase === "inhale") {
            setCurrentPhase("exhale")
            return cardiacPattern.exhale
          } else {
            setCurrentPhase("inhale")
            setTotalCycles((prev) => prev + 1)
            return cardiacPattern.inhale
          }
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isActive, currentPhase])

  // Toggle the breathing exercise
  const toggleBreathing = () => {
    if (isActive) {
      setIsActive(false)
    } else {
      setIsActive(true)
      setCurrentPhase("inhale")
      setSecondsLeft(cardiacPattern.inhale)
    }
  }

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
            href={`${basePath}/techniques`}
            className="bg-purple-600 hover:bg-purple-700 text-white mb-8 flex items-center px-4 py-2 rounded-md inline-block"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Techniques
          </a>

          <div className="text-center mb-8">
            <h1 className={`text-3xl md:text-4xl font-bold text-red-400 mb-2`}>Cardiac Coherence Breathing</h1>
            <p className="text-gray-400">
              Inhale for 5 seconds, exhale for 5 seconds to synchronize with your heart rate
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <BreathingAnimation
              isActive={isActive}
              currentPhase={currentPhase}
              secondsLeft={secondsLeft}
              pattern={{
                name: "Cardiac Coherence Breathing",
                description: "Inhale for 5 seconds, exhale for 5 seconds to synchronize with your heart rate",
                inhale: 5,
                hold: 0, // No hold phase for cardiac coherence
                exhale: 5,
                color: "from-red-500 to-pink-600",
                textColor: "text-red-400",
              }}
            />

            <BreathingControls isActive={isActive} onToggle={toggleBreathing} totalCycles={totalCycles} />
          </div>
        </div>
      </div>
    </main>
  )
}
