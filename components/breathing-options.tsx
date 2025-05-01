"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Moon, Brain, Wind } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Get the base path from environment or default to empty string
const basePath = process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}` : ""

export default function BreathingOptions() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Breathe
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Better</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          Select a guided breathing technique to improve your wellbeing
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <BreathingCard
          title="Sleep Better"
          description="Calm your mind and prepare for restful sleep with 4-7-8 breathing"
          icon={<Moon className="h-12 w-12 text-blue-400" />}
          color="from-blue-500 to-indigo-600"
          path={`${basePath}/breathe/sleep`}
        />

        <BreathingCard
          title="Digestive Relief"
          description="Ease tension and promote healthy digestion with diaphragmatic breathing"
          icon={<Wind className="h-12 w-12 text-green-400" />}
          color="from-green-500 to-emerald-600"
          path={`${basePath}/breathe/digestive`}
        />

        <BreathingCard
          title="Focus & Clarity"
          description="Sharpen your mind and improve concentration with box breathing"
          icon={<Brain className="h-12 w-12 text-purple-400" />}
          color="from-purple-500 to-pink-600"
          path={`${basePath}/breathe/focus`}
        />
      </div>

      <div className="mt-12 text-center">
        <a
          href={`${basePath}/techniques`}
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium text-base px-8 py-6 rounded-md inline-block"
        >
          Explore All 6 Breathing Techniques
        </a>
      </div>
    </div>
  )
}

interface BreathingCardProps {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  path: string
}

function BreathingCard({ title, description, icon, color, path }: BreathingCardProps) {
  return (
    <a href={path} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="cursor-pointer"
      >
        <Card className="bg-black/50 backdrop-blur-sm border border-white/10 overflow-hidden group h-full hover:border-white/30 transition-all">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
          />

          <CardHeader className="text-center pt-8">
            <div className="mx-auto mb-4">{icon}</div>
            <CardTitle className="text-white text-2xl">{title}</CardTitle>
            <CardDescription className="text-gray-400">{description}</CardDescription>
          </CardHeader>

          <CardContent className="flex justify-center pb-4">
            <div
              className={`bg-gradient-to-r ${color} hover:opacity-90 text-white font-medium text-base px-6 py-2 w-full text-center rounded-md`}
            >
              Start Breathing
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </a>
  )
}
