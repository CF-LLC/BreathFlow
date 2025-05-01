"use client"

import { Button } from "@/components/ui/button"
import { Wind, Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import type React from "react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
    >
      <a href="/" className="flex items-center space-x-2">
        <Wind className="w-8 h-8 text-purple-500" />
        <span className="text-white font-medium text-xl">BreathFlow</span>
      </a>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="/techniques">Techniques</NavLink>
        <NavLink href="/benefits">Benefits</NavLink>
        <NavLink href="/science">The Science</NavLink>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <div className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-md inline-block">
          <a href="/techniques" className="text-white block w-full h-full">
            Start Breathing
          </a>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 z-50">
          <div className="flex flex-col p-6 space-y-4">
            <MobileNavLink href="/techniques" onClick={() => setMobileMenuOpen(false)}>
              Techniques
            </MobileNavLink>
            <MobileNavLink href="/benefits" onClick={() => setMobileMenuOpen(false)}>
              Benefits
            </MobileNavLink>
            <MobileNavLink href="/science" onClick={() => setMobileMenuOpen(false)}>
              The Science
            </MobileNavLink>
          </div>
        </div>
      )}
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-gray-300 hover:text-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
    </a>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a href={href} className="text-gray-300 hover:text-white transition-colors py-2 text-lg block" onClick={onClick}>
      {children}
    </a>
  )
}
