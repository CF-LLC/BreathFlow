"use client"

import { motion } from "framer-motion"

interface BreathingAnimationProps {
  isActive: boolean
  currentPhase: "inhale" | "hold" | "exhale" | "holdAfterExhale"
  secondsLeft: number
  pattern: {
    inhale: number
    hold: number
    exhale: number
    holdAfterExhale?: number
    color: string
  }
}

export default function BreathingAnimation({ isActive, currentPhase, secondsLeft, pattern }: BreathingAnimationProps) {
  // Calculate the size based on the current phase
  const getSize = () => {
    if (!isActive) return 200

    if (currentPhase === "inhale") {
      // Gradually increase size during inhale
      const progress = 1 - secondsLeft / pattern.inhale
      return 200 + progress * 100
    } else if (currentPhase === "exhale") {
      // Gradually decrease size during exhale
      const progress = 1 - secondsLeft / pattern.exhale
      return 300 - progress * 100
    }

    // Hold phases maintain the size
    return currentPhase === "hold" ? 300 : 200
  }

  // Get instruction text based on current phase
  const getInstructionText = () => {
    if (!isActive) return "Press start to begin"

    switch (currentPhase) {
      case "inhale":
        return "Inhale slowly..."
      case "hold":
        return "Hold your breath..."
      case "exhale":
        return "Exhale slowly..."
      case "holdAfterExhale":
        return "Hold after exhale..."
    }
  }

  // Get the next phase
  const getNextPhase = () => {
    if (!isActive) return null

    switch (currentPhase) {
      case "inhale":
        return pattern.hold > 0
          ? { phase: "hold", duration: pattern.hold }
          : { phase: "exhale", duration: pattern.exhale }
      case "hold":
        return { phase: "exhale", duration: pattern.exhale }
      case "exhale":
        return pattern.holdAfterExhale && pattern.holdAfterExhale > 0
          ? { phase: "holdAfterExhale", duration: pattern.holdAfterExhale }
          : { phase: "inhale", duration: pattern.inhale }
      case "holdAfterExhale":
        return { phase: "inhale", duration: pattern.inhale }
    }
  }

  // Get the previous phase
  const getPreviousPhase = () => {
    if (!isActive) return null

    switch (currentPhase) {
      case "inhale":
        return pattern.holdAfterExhale && pattern.holdAfterExhale > 0
          ? { phase: "holdAfterExhale", duration: pattern.holdAfterExhale }
          : { phase: "exhale", duration: pattern.exhale }
      case "hold":
        return { phase: "inhale", duration: pattern.inhale }
      case "exhale":
        return pattern.hold > 0
          ? { phase: "hold", duration: pattern.hold }
          : { phase: "inhale", duration: pattern.inhale }
      case "holdAfterExhale":
        return { phase: "exhale", duration: pattern.exhale }
    }
  }

  // Format phase name for display
  const formatPhaseName = (phase: string) => {
    switch (phase) {
      case "inhale":
        return "Inhale"
      case "hold":
        return "Hold"
      case "exhale":
        return "Exhale"
      case "holdAfterExhale":
        return "Hold"
    }
  }

  const nextPhase = getNextPhase()
  const previousPhase = getPreviousPhase()

  return (
    <div className="flex flex-col items-center justify-center py-8">
      {/* Phase timeline */}
      {isActive && (
        <div className="flex items-center justify-center space-x-6 mb-6 text-white">
          {previousPhase && (
            <div className="flex flex-col items-center opacity-60">
              <span className="text-sm">Previous</span>
              <span className="font-medium">{formatPhaseName(previousPhase.phase)}</span>
              <span className="text-xs">{previousPhase.duration}s</span>
            </div>
          )}

          <div className="flex flex-col items-center">
            <span className="text-sm">Current</span>
            <span className="font-bold text-lg">{formatPhaseName(currentPhase)}</span>
            <span className="font-medium">{secondsLeft}s</span>
          </div>

          {nextPhase && (
            <div className="flex flex-col items-center opacity-60">
              <span className="text-sm">Next</span>
              <span className="font-medium">{formatPhaseName(nextPhase.phase)}</span>
              <span className="text-xs">{nextPhase.duration}s</span>
            </div>
          )}
        </div>
      )}

      <div className="relative mb-8">
        <motion.div
          animate={{
            width: getSize(),
            height: getSize(),
            opacity: isActive ? 1 : 0.7,
          }}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 20,
          }}
          className={`rounded-full bg-gradient-to-br ${pattern.color} opacity-20 flex items-center justify-center`}
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: currentPhase === "inhale" ? [1, 1.05, 1] : currentPhase === "exhale" ? [1, 0.95, 1] : 1,
          }}
          transition={{
            duration: 1,
            repeat: isActive ? Number.POSITIVE_INFINITY : 0,
            repeatType: "reverse",
          }}
        >
          <div className="text-white text-6xl font-bold">{secondsLeft}</div>
        </motion.div>
      </div>

      <motion.div
        animate={{
          opacity: isActive ? 1 : 0.7,
        }}
        className="text-white text-2xl font-medium text-center"
      >
        {getInstructionText()}
      </motion.div>
    </div>
  )
}
