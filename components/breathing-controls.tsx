"use client"

import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"

interface BreathingControlsProps {
  isActive: boolean
  onToggle: () => void
  totalCycles: number
}

export default function BreathingControls({ isActive, onToggle, totalCycles }: BreathingControlsProps) {
  return (
    <div className="flex flex-col items-center space-y-6 mt-8">
      <Button
        onClick={onToggle}
        className={`${
          isActive ? "bg-red-600 hover:bg-red-700" : "bg-purple-600 hover:bg-purple-700"
        } text-white rounded-full w-16 h-16 flex items-center justify-center transition-colors duration-300`}
        aria-label={isActive ? "Pause breathing exercise" : "Start breathing exercise"}
      >
        {isActive ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
      </Button>

      <div className="text-gray-300 text-sm font-medium">
        Completed cycles: <span className="text-white font-medium">{totalCycles}</span>
      </div>

      <div className="text-gray-400 text-sm max-w-md text-center mt-8">
        For best results, find a comfortable position, close your eyes, and focus on your breath. Try to complete at
        least 5 cycles for optimal benefits.
      </div>
    </div>
  )
}
