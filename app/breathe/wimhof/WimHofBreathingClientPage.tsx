"use client"

import { useEffect, useState } from "react"
import { SparklesCore } from "@/components/sparkles"
import Navbar from "@/components/navbar"
import BreathingAnimation from "@/components/breathing-animation"
import BreathingControls from "@/components/breathing-controls"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Pause, Play } from "lucide-react"
import { getBasePath } from "@/lib/get-base-path"

// Define breathing pattern for Wim Hof method
const wimHofPattern = {
  name: "Wim Hof Breathing Method",
  description: "30-40 deep breaths, followed by breath retention and recovery breath",
  inhale: 1.5,
  hold: 0, // No hold phase for Wim Hof rapid breathing
  exhale: 1.5,
  color: "from-cyan-500 to-blue-600",
  textColor: "text-cyan-400",
}

export default function WimHofBreathingClientPage() {
  const [isActive, setIsActive] = useState(false)
  const [currentPhase, setCurrentPhase] = useState<"inhale" | "hold" | "exhale" | "holdAfterExhale">("inhale")
  const [secondsLeft, setSecondsLeft] = useState(wimHofPattern.inhale)
  const [totalCycles, setTotalCycles] = useState(0)
  const [breathCount, setBreathCount] = useState(0)
  const [isHoldingBreath, setIsHoldingBreath] = useState(false)
  const [holdTime, setHoldTime] = useState(0)
  const basePath = typeof window !== "undefined" ? getBasePath() : ""

  // Handle the breathing timer
  useEffect(() => {
    if (!isActive) return

    // Special logic for Wim Hof method
    const timer = setInterval(() => {
      if (isHoldingBreath) {
        setHoldTime((prev) => prev + 1)
        return
      }

      setSecondsLeft((prev) => {
        if (prev <= 1) {
          // Move to the next phase
          if (currentPhase === "inhale") {
            setCurrentPhase("exhale")
            return wimHofPattern.exhale
          } else {
            setCurrentPhase("inhale")
            setBreathCount((prev) => prev + 1)

            // After 30 breaths, start breath retention
            if (breathCount >= 29) {
              setIsHoldingBreath(true)
              setBreathCount(0)
              return 0
            }

            return wimHofPattern.inhale
          }
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isActive, currentPhase, breathCount, isHoldingBreath])

  // Toggle the breathing exercise
  const toggleBreathing = () => {
    if (isActive) {
      setIsActive(false)
    } else {
      setIsActive(true)
      setCurrentPhase("inhale")
      setSecondsLeft(wimHofPattern.inhale)
      if (isHoldingBreath) {
        setIsHoldingBreath(false)
        setHoldTime(0)
      }
    }
  }

  // End breath retention
  const endBreathHold = () => {
    setIsHoldingBreath(false)
    setCurrentPhase("inhale")
    setSecondsLeft(wimHofPattern.inhale)
    setTotalCycles((prev) => prev + 1)
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
            <h1 className={`text-3xl md:text-4xl font-bold ${wimHofPattern.textColor} mb-2`}>{wimHofPattern.name}</h1>
            <p className="text-gray-400">{wimHofPattern.description}</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            {isHoldingBreath ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="relative mb-8">
                  <div className="rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 opacity-20 w-[300px] h-[300px] flex items-center justify-center" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold">{holdTime}</div>
                  </div>
                </div>
                <div className="text-white text-2xl font-medium text-center mb-8">
                  Hold your breath as long as comfortable
                </div>
                <div className="flex items-center space-x-4">
                  <Button
                    onClick={endBreathHold}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-xl font-medium"
                  >
                    Take Recovery Breath
                  </Button>
                  <Button
                    onClick={toggleBreathing}
                    className={`${
                      isActive ? "bg-red-600 hover:bg-red-700" : "bg-cyan-600 hover:bg-cyan-700"
                    } text-white rounded-full w-16 h-16 flex items-center justify-center transition-colors duration-300`}
                  >
                    {isActive ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="text-white text-xl mb-4">Breath {breathCount}/30</div>
                <BreathingAnimation
                  isActive={isActive}
                  currentPhase={currentPhase}
                  secondsLeft={secondsLeft}
                  pattern={wimHofPattern}
                />
              </>
            )}

            {!isHoldingBreath && (
              <BreathingControls isActive={isActive} onToggle={toggleBreathing} totalCycles={totalCycles} />
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
