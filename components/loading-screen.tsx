"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [currentYear, setCurrentYear] = useState(2005)
  const [showAgeCalc, setShowAgeCalc] = useState(false)

  useEffect(() => {
    // Start age calculation animation after 500ms
    const ageCalcTimer = setTimeout(() => {
      setShowAgeCalc(true)

      // Animate years from 2005 to 2025
      let year = 2005
      const yearInterval = setInterval(() => {
        year += 1
        setCurrentYear(year)

        if (year >= 2025) {
          clearInterval(yearInterval)
        }
      }, 100) // Change year every 100ms

      return () => clearInterval(yearInterval)
    }, 500)

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1.5
      })
    }, 45)

    return () => {
      clearTimeout(ageCalcTimer)
      clearInterval(progressInterval)
    }
  }, [])

  const calculateAge = (year: number) => {
    return year - 2005
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Hearts Background */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-400 animate-pulse opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 15}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 2 + 1}s`,
            }}
          >
            💖
          </div>
        ))}
      </div>

      <div className="text-center z-10">
        {/* Heart Loader */}
        <div className="flex justify-center mb-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-6 h-6 bg-pink-500 rounded-full mx-2 animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1s",
              }}
            />
          ))}
        </div>

        {/* Age Calculator Animation */}
        {showAgeCalc && (
          <div className="mb-8 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-pink-500/30 animate-fade-in">
            <h3 className="text-2xl text-pink-300 mb-4">Calculating her beautiful years...</h3>
            <div className="text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
              {currentYear}
            </div>
            <div className="text-xl text-pink-200">Age: {calculateAge(currentYear)} years old</div>
            {currentYear >= 2025 && (
              <div className="mt-4 text-lg text-yellow-300 animate-pulse">✨ 20 Amazing Years! ✨</div>
            )}
          </div>
        )}

        <h2 className="text-2xl mb-8 text-pink-300">Loading your special day...</h2>

        {/* Progress Bar */}
        <div className="w-80 h-3 bg-gray-700 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 rounded-full transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full"></div>
          </div>
        </div>

        <p className="text-pink-200 text-lg">{progress.toFixed(0)}%</p>

        {progress >= 100 && (
          <div className="mt-4 text-xl text-yellow-300 animate-bounce">🎂 Ready to celebrate! 🎂</div>
        )}
      </div>
    </div>
  )
}
