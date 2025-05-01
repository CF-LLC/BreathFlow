"use client"

import type React from "react"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Heart, TreesIcon as Lungs, Moon, Smile, Zap } from "lucide-react"

export default function BenefitsPage() {
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
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Benefits
              </span>{" "}
              of Breathwork
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Discover how conscious breathing can transform your physical and mental wellbeing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              title="Reduced Stress & Anxiety"
              icon={<Brain className="h-12 w-12 text-purple-400" />}
              color="from-purple-500 to-pink-600"
            >
              <p className="text-gray-300">
                Controlled breathing activates your parasympathetic nervous system, reducing cortisol levels and
                promoting a state of calm. Regular practice can significantly lower anxiety and help manage stress
                responses.
              </p>
            </BenefitCard>

            <BenefitCard
              title="Improved Heart Health"
              icon={<Heart className="h-12 w-12 text-red-400" />}
              color="from-red-500 to-pink-600"
            >
              <p className="text-gray-300">
                Breathing exercises can lower blood pressure, improve heart rate variability, and reduce strain on your
                cardiovascular system. Studies show regular breathwork can contribute to better heart health over time.
              </p>
            </BenefitCard>

            <BenefitCard
              title="Enhanced Lung Function"
              icon={<Lungs className="h-12 w-12 text-blue-400" />}
              color="from-blue-500 to-indigo-600"
            >
              <p className="text-gray-300">
                Deep breathing exercises strengthen respiratory muscles, increase lung capacity, and improve oxygen
                exchange. This can be particularly beneficial for those with respiratory conditions.
              </p>
            </BenefitCard>

            <BenefitCard
              title="Better Sleep Quality"
              icon={<Moon className="h-12 w-12 text-indigo-400" />}
              color="from-indigo-500 to-blue-600"
            >
              <p className="text-gray-300">
                Specific breathing techniques help calm the mind and prepare the body for sleep. Regular practice can
                reduce insomnia, improve sleep quality, and help you wake feeling more refreshed.
              </p>
            </BenefitCard>

            <BenefitCard
              title="Increased Energy"
              icon={<Zap className="h-12 w-12 text-amber-400" />}
              color="from-amber-500 to-orange-600"
            >
              <p className="text-gray-300">
                Energizing breathing techniques can increase oxygen flow, stimulate the nervous system, and boost
                alertness without caffeine. Just a few minutes of practice can provide a natural energy boost.
              </p>
            </BenefitCard>

            <BenefitCard
              title="Improved Emotional Wellbeing"
              icon={<Smile className="h-12 w-12 text-green-400" />}
              color="from-green-500 to-emerald-600"
            >
              <p className="text-gray-300">
                Breathwork helps regulate emotions by activating the body's relaxation response. Regular practice can
                improve mood, increase emotional resilience, and provide tools for managing difficult feelings.
              </p>
            </BenefitCard>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our guided breathing exercises are designed to help you experience these benefits and more. Start your
              journey to better wellbeing today with just a few minutes of daily practice.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

interface BenefitCardProps {
  title: string
  icon: React.ReactNode
  color: string
  children: React.ReactNode
}

function BenefitCard({ title, icon, color, children }: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="bg-black/50 backdrop-blur-sm border border-white/10 overflow-hidden group h-full">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        />

        <CardHeader>
          <div className="mb-4">{icon}</div>
          <CardTitle className="text-white text-xl">{title}</CardTitle>
        </CardHeader>

        <CardContent>{children}</CardContent>
      </Card>
    </motion.div>
  )
}
