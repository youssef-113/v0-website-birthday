import type React from "react"
import "../lib/process-polyfill" // Must be first import

import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Happy Birthday My Love ❤️",
  description: "A special birthday celebration website",
  generator: "v0.dev",
  icons: {
    icon: "/placeholder-logo.png",
    shortcut: "/placeholder-logo.png",
    apple: "/placeholder-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/placeholder-logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/placeholder-logo.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
