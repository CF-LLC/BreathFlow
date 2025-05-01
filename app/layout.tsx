import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import DebugHelper from "@/components/debug-helper"

export const metadata: Metadata = {
  title: "Breath Flow",
  description: "Breathing for the mind, body, and soul",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <DebugHelper />
        {children}
      </body>
    </html>
  )
}
