"use client"

import { motion } from "framer-motion"

export default function WelcomeBanner() {
  return (
    <div className="container mx-auto px-6 py-6 mb-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-r from-purple-900/40 to-indigo-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-6">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Welcome to BreathFlow</h2>
            <p className="text-gray-300">
              All breathing techniques are completely free to use. Start your journey to better wellbeing today!
            </p>
          </div>
          <div className="whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90 text-white font-medium text-base px-6 py-2 rounded-md inline-block">
            <a href="/techniques" className="text-white block w-full h-full">
              See All Techniques
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
