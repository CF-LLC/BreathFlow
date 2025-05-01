"use client"

import { useEffect, useState } from "react"
import { SparklesCore } from "@/components/sparkles"
import Navbar from "@/components/navbar"
import BreathingAnimation from "@/components/breathing-animation"
import BreathingControls from "@/components/breathing-controls"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

// Define breathing pattern for Breath of Fire
const firePattern = {
  name: "Breath of Fire",
  description: "Rapid breathing through the nose with forceful exhales to energize the body",
  inhale: 1,
  hold: 0, // No hold phase for Breath of Fire
  exhale: 1,
  color: "from-amber-500 to-orange-600",
  textColor: "text-amber-400",
}

export default function FireBreathingPage() {
  const [isActive, setIsActive] = useState(false)
  const [currentPhase, setCurrentPhase] = useState<"inhale" | "hold" | "exhale" | "holdAfterExhale">("inhale")
  const [secondsLeft, setSecondsLeft] = useState(firePattern.inhale)
  const [totalCycles, setTotalCycles] = useState(0)
  const [timer, setTimer] = useState(60) // 1 minute timer for Breath of Fire

  // Handle the breathing timer
  useEffect(() => {
    if (!isActive) return

    const breathTimer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 0.5) {
          // Move to the next phase - for Breath of Fire, we skip the hold phase
          if (currentPhase === "inhale") {
            setCurrentPhase("exhale")
            return firePattern.exhale
          } else {
            setCurrentPhase("inhale")
            setTotalCycles((prev) => prev + 1)
            return firePattern.inhale
          }
        }
        return prev - 0.5
      })
    }, 500) // Faster interval for rapid breathing

    const countdownTimer = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          // End the session when timer reaches 0
          setIsActive(false)
          clearInterval(breathTimer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      clearInterval(breathTimer)
      clearInterval(countdownTimer)
    }
  }, [isActive, currentPhase])

  // Toggle the breathing exercise
  const toggleBreathing = () => {
    if (isActive) {
      setIsActive(false)
    } else {
      setIsActive(true)
      setCurrentPhase("inhale")
      setSecondsLeft(firePattern.inhale)
      if (timer === 0) {
        setTimer(60) // Reset timer if it reached 0
      }
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
          <Link
            href="/techniques"
            className="bg-purple-600 hover:bg-purple-700 text-white mb-8 flex items-center px-4 py-2 rounded-md inline-block"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Techniques
          </Link>

          <div className="text-center mb-8">
            <h1 className={`text-3xl md:text-4xl font-bold ${firePattern.textColor} mb-2`}>{firePattern.name}</h1>
            <p className="text-gray-400">{firePattern.description}</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="text-white text-2xl mb-4">Time remaining: {timer}s</div>

            <BreathingAnimation
              isActive={isActive}
              currentPhase={currentPhase}
              secondsLeft={secondsLeft}
              pattern={firePattern}
            />

            <BreathingControls isActive={isActive} onToggle={toggleBreathing} totalCycles={totalCycles} />

            <div className="text-gray-400 text-sm max-w-md text-center mt-8">
              Breath of Fire is an energizing technique. If you feel lightheaded, please stop and return to normal
              breathing.
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
