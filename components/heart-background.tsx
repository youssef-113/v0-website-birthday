"use client"

import { useEffect, useState } from "react"

export default function HeartBackground() {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; size: number; delay: number }>>([])

  useEffect(() => {
    const createHeart = () => {
      const id = Date.now() + Math.random()
      const left = Math.random() * 100
      const size = Math.random() * 20 + 10
      const delay = Math.random() * 2

      setHearts((prev) => [...prev, { id, left, size, delay }])

      setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== id))
      }, 8000)
    }

    const interval = setInterval(createHeart, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-up text-pink-400 opacity-60"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            bottom: "-50px",
          }}
        >
          💖
        </div>
      ))}
    </div>
  )
}
