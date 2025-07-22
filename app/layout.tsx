import type React from "react"
import "../lib/process-polyfill" // Must be first import

import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Happy Birthday My Love ❤️",
  description: "A special birthday celebration website",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
