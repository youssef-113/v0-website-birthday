"use client"

import { useEffect, useState } from "react"

export default function HeartBackground() {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; size: number; delay: number }>>([])
  const [letters, setLetters] = useState<
    Array<{ id: number; left: number; letter: string; size: number; delay: number }>
  >([])

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

    const createLetter = () => {
      const letters = ["E", "R", "S", "A"]
      const id = Date.now() + Math.random()
      const left = Math.random() * 100
      const letter = letters[Math.floor(Math.random() * letters.length)]
      const size = Math.random() * 15 + 20
      const delay = Math.random() * 3

      setLetters((prev) => [...prev, { id, left, letter, size, delay }])

      setTimeout(() => {
        setLetters((prev) => prev.filter((l) => l.id !== id))
      }, 10000)
    }

    // Create hearts every 2 seconds
    const heartInterval = setInterval(createHeart, 2000)

    // Create letters every 3 seconds
    const letterInterval = setInterval(createLetter, 3000)

    // Create initial hearts and letters
    for (let i = 0; i < 5; i++) {
      setTimeout(createHeart, i * 400)
    }
    for (let i = 0; i < 3; i++) {
      setTimeout(createLetter, i * 1000)
    }

    return () => {
      clearInterval(heartInterval)
      clearInterval(letterInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Hearts */}
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

      {/* Floating Letters (E, R, S, A) */}
      {letters.map((letter) => (
        <div
          key={letter.id}
          className="absolute animate-float-up font-bold text-purple-400 opacity-50"
          style={{
            left: `${letter.left}%`,
            fontSize: `${letter.size}px`,
            animationDelay: `${letter.delay}s`,
            bottom: "-50px",
            fontFamily: "serif",
            textShadow: "0 0 10px rgba(147, 51, 234, 0.5)",
          }}
        >
          {letter.letter}
        </div>
      ))}

      {/* Static Background Hearts */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={`static-heart-${i}`}
            className="absolute text-pink-300 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 15}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          >
            💕
          </div>
        ))}
      </div>

      {/* Static Background Letters */}
      <div className="absolute inset-0 opacity-15">
        {["E", "R", "S", "A"].map((letter, i) => (
          <div
            key={`static-letter-${i}`}
            className="absolute font-bold text-purple-300 animate-pulse"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 40}%`,
              fontSize: `${40 + Math.random() * 20}px`,
              fontFamily: "serif",
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              textShadow: "0 0 15px rgba(147, 51, 234, 0.3)",
            }}
          >
            {letter}
          </div>
        ))}
      </div>

      {/* Additional decorative elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute text-yellow-300 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: "12px",
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>
    </div>
  )
}
