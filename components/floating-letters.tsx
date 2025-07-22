"use client"

import { useEffect, useState } from "react"

interface FloatingLetter {
  id: number
  letter: string
  left: number
  size: number
  delay: number
  rotation: number
}

export default function FloatingLetters() {
  const [letters, setLetters] = useState<FloatingLetter[]>([])
  const letterOptions = ["E", "R", "S", "A"]

  useEffect(() => {
    const createLetter = () => {
      const id = Date.now() + Math.random()
      const letter = letterOptions[Math.floor(Math.random() * letterOptions.length)]
      const left = Math.random() * 100
      const size = Math.random() * 30 + 20
      const delay = Math.random() * 2
      const rotation = Math.random() * 360

      setLetters((prev) => [...prev, { id, letter, left, size, delay, rotation }])

      setTimeout(() => {
        setLetters((prev) => prev.filter((l) => l.id !== id))
      }, 8000)
    }

    const interval = setInterval(createLetter, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {letters.map((letter) => (
        <div
          key={letter.id}
          className="absolute animate-float-up"
          style={{
            left: `${letter.left}%`,
            fontSize: `${letter.size}px`,
            animationDelay: `${letter.delay}s`,
            animationDuration: "8s",
            bottom: "-50px",
            transform: `rotate(${letter.rotation}deg)`,
            color: getRandomColor(),
            fontWeight: "bold",
            textShadow: "0 0 5px rgba(255,255,255,0.7)",
          }}
        >
          {letter.letter}
        </div>
      ))}
    </div>
  )
}

function getRandomColor() {
  const colors = [
    "#FF69B4", // Hot Pink
    "#FF1493", // Deep Pink
    "#FF00FF", // Fuchsia
    "#9370DB", // Medium Purple
    "#8A2BE2", // Blue Violet
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}
