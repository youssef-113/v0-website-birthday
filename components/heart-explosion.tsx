"use client"

import type React from "react"

interface HeartExplosionProps {
  x: number
  y: number
}

export default function HeartExplosion({ x, y }: HeartExplosionProps) {
  const hearts = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 * Math.PI) / 180
    const distance = Math.random() * 100 + 50
    const dx = Math.cos(angle) * distance
    const dy = Math.sin(angle) * distance

    return { dx, dy, delay: Math.random() * 0.3 }
  })

  return (
    <div className="fixed pointer-events-none z-50" style={{ left: x, top: y }}>
      {hearts.map((heart, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 text-pink-400 animate-heart-explode"
          style={
            {
              "--dx": `${heart.dx}px`,
              "--dy": `${heart.dy}px`,
              animationDelay: `${heart.delay}s`,
            } as React.CSSProperties
          }
        >
          💕
        </div>
      ))}
    </div>
  )
}
