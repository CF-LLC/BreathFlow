"use client"

import type React from "react"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Moon, Brain, Wind, Heart, Shield, Zap } from "lucide-react"
import { getBasePath } from "@/lib/get-base-path"

export default function TechniquesPage() {
  // Get the base path for GitHub Pages
  const basePath = getBasePath()

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

        <div className="container mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Breathing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Techniques
              </span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Discover our collection of scientifically-backed breathing exercises for every need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TechniqueCard
              title="4-7-8 Breathing"
              description="The perfect technique to calm your nervous system and prepare for sleep"
              icon={<Moon className="h-10 w-10 text-blue-400" />}
              color="from-blue-500 to-indigo-600"
              path={`${basePath}/breathe/sleep`}
              benefits={["Improves sleep quality", "Reduces anxiety", "Lowers stress hormones"]}
            />

            <TechniqueCard
              title="Diaphragmatic Breathing"
              description="Deep belly breathing to aid digestion and relieve tension"
              icon={<Wind className="h-10 w-10 text-green-400" />}
              color="from-green-500 to-emerald-600"
              path={`${basePath}/breathe/digestive`}
              benefits={["Improves digestion", "Reduces bloating", "Calms the gut-brain axis"]}
            />

            <TechniqueCard
              title="Box Breathing"
              description="Equal-timed breathing pattern to improve focus and mental clarity"
              icon={<Brain className="h-10 w-10 text-purple-400" />}
              color="from-purple-500 to-pink-600"
              path={`${basePath}/breathe/focus`}
              benefits={["Enhances concentration", "Reduces stress", "Improves cognitive function"]}
            />

            <TechniqueCard
              title="Cardiac Coherence"
              description="Synchronize your breathing with your heart rate for optimal health"
              icon={<Heart className="h-10 w-10 text-red-400" />}
              color="from-red-500 to-pink-600"
              path={`${basePath}/breathe/cardiac`}
              benefits={["Regulates heart rate", "Lowers blood pressure", "Improves HRV"]}
            />

            <TechniqueCard
              title="Wim Hof Method"
              description="Controlled hyperventilation followed by breath retention to boost immunity"
              icon={<Shield className="h-10 w-10 text-cyan-400" />}
              color="from-cyan-500 to-blue-600"
              path={`${basePath}/breathe/wimhof`}
              benefits={["Strengthens immune system", "Increases energy", "Improves cold tolerance"]}
            />

            <TechniqueCard
              title="Breath of Fire"
              description="Rapid breathing technique to energize the body and mind"
              icon={<Zap className="h-10 w-10 text-amber-400" />}
              color="from-amber-500 to-orange-600"
              path={`${basePath}/breathe/fire`}
              benefits={["Boosts energy", "Increases alertness", "Strengthens core muscles"]}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

interface TechniqueCardProps {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  path: string
  benefits: string[]
}

function TechniqueCard({ title, description, icon, color, path, benefits }: TechniqueCardProps) {
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

          <CardHeader>
            <div className="mb-4">{icon}</div>
            <CardTitle className="text-white text-xl">{title}</CardTitle>
            <CardDescription className="text-gray-400">{description}</CardDescription>
          </CardHeader>

          <CardContent>
            <ul className="space-y-2 mb-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="text-gray-300 text-sm flex items-center">
                  <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${color} mr-2`}></span>
                  {benefit}
                </li>
              ))}
            </ul>

            <div
              className={`bg-gradient-to-r ${color} hover:opacity-90 text-white w-full font-medium text-base py-2 px-4 rounded-md text-center`}
            >
              Try This Technique
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </a>
  )
}
