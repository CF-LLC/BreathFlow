"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { getBasePath } from "@/lib/get-base-path"

export default function SciencePage() {
  // Get the base path for GitHub Pages
  const basePath = typeof window !== "undefined" ? getBasePath() : ""

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
                Science
              </span>{" "}
              Behind Breathing
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Understanding how breathwork affects your body and mind
            </p>
          </motion.div>

          <Tabs defaultValue="nervous-system" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-1 sm:grid-cols-3 bg-black/50 backdrop-blur-sm border border-white/10 p-1 mb-8">
              <TabsTrigger
                value="nervous-system"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-300 font-medium"
              >
                Nervous System
              </TabsTrigger>
              <TabsTrigger
                value="brain-function"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-300 font-medium"
              >
                Brain Function
              </TabsTrigger>
              <TabsTrigger
                value="research"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-300 font-medium"
              >
                Research Studies
              </TabsTrigger>
            </TabsList>

            <TabsContent value="nervous-system">
              <Card className="bg-black/50 backdrop-blur-sm border border-white/10">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-4">The Autonomic Nervous System</h3>
                      <p className="text-gray-300 mb-4">
                        Your autonomic nervous system has two main branches: the sympathetic ("fight or flight") and
                        parasympathetic ("rest and digest") systems. Breathing is one of the few autonomic functions you
                        can consciously control.
                      </p>
                      <p className="text-gray-300 mb-4">
                        Slow, deep breathing activates the vagus nerve, which is the main component of the
                        parasympathetic nervous system. This activation helps reduce stress hormones like cortisol and
                        adrenaline while increasing relaxation hormones.
                      </p>
                      <p className="text-gray-300">
                        Different breathing patterns can either stimulate or calm your nervous system, giving you a
                        powerful tool to regulate your physiological state at will.
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      {/* Fix image path with basePath */}
                      <img
                        src={`${basePath}/nervous-system-breathing.png`}
                        alt="Nervous System Diagram"
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="brain-function">
              <Card className="bg-black/50 backdrop-blur-sm border border-white/10">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-center justify-center">
                      {/* Fix image path with basePath */}
                      <img
                        src={`${basePath}/brain-scan-deep-breathing.png`}
                        alt="Brain Function Diagram"
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-4">Impact on Brain Function</h3>
                      <p className="text-gray-300 mb-4">
                        Controlled breathing practices have been shown to affect brain wave patterns, increasing alpha
                        and theta waves associated with relaxation and creativity.
                      </p>
                      <p className="text-gray-300 mb-4">
                        Neuroimaging studies have demonstrated that regular breathwork practice can increase gray matter
                        density in areas of the brain associated with attention, emotional regulation, and
                        self-awareness.
                      </p>
                      <p className="text-gray-300">
                        The increased oxygenation from proper breathing also improves cognitive function, memory, and
                        decision-making abilities by ensuring optimal brain metabolism.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research">
              <Card className="bg-black/50 backdrop-blur-sm border border-white/10">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold text-white mb-6">Key Research Findings</h3>

                  <div className="space-y-6">
                    <div className="border-l-2 border-purple-500 pl-4">
                      <h4 className="text-white text-lg font-medium mb-2">Journal of Neurophysiology, 2018</h4>
                      <p className="text-gray-300">
                        Research found that controlled breathing at specific rhythms can synchronize neural oscillations
                        across brain regions, improving information processing and emotional regulation.
                      </p>
                    </div>

                    <div className="border-l-2 border-blue-500 pl-4">
                      <h4 className="text-white text-lg font-medium mb-2">Frontiers in Human Neuroscience, 2020</h4>
                      <p className="text-gray-300">
                        A study demonstrated that just 15 minutes of slow breathing practice daily for 8 weeks resulted
                        in significant reductions in anxiety and improvements in attention span.
                      </p>
                    </div>

                    <div className="border-l-2 border-green-500 pl-4">
                      <h4 className="text-white text-lg font-medium mb-2">
                        Journal of Alternative and Complementary Medicine, 2019
                      </h4>
                      <p className="text-gray-300">
                        Research on diaphragmatic breathing showed significant improvements in digestive function and
                        reduction in symptoms for patients with irritable bowel syndrome after a 6-week intervention.
                      </p>
                    </div>

                    <div className="border-l-2 border-red-500 pl-4">
                      <h4 className="text-white text-lg font-medium mb-2">
                        International Journal of Psychophysiology, 2021
                      </h4>
                      <p className="text-gray-300">
                        A comprehensive review found that breathing techniques that emphasize extended exhalation were
                        most effective for activating the parasympathetic nervous system and reducing cardiovascular
                        stress.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
