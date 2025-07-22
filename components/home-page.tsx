"use client"

import { useState, useEffect } from "react"

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const birthday = new Date("2025-07-23T00:00:00").getTime()
      const now = new Date().getTime()
      const difference = birthday - now

      if (difference > 0) {
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30))
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))

        setTimeLeft({ months, days, hours, minutes })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 60000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        {/* Moon */}
        <div className="absolute top-24 right-8 w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-lg shadow-yellow-500/50 animate-pulse">
          <div className="absolute top-2 left-3 w-3 h-3 bg-yellow-100/50 rounded-full" />
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
          Happy 20th Birthday
        </h1>

        <h2 className="text-3xl md:text-4xl text-pink-400 mb-12">My Beautiful Princess</h2>

        {/* Age Display */}
        <div className="mb-12">
          <div className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent leading-none">
            20
          </div>
          <p className="text-xl text-pink-300 mt-4">Years of Amazing You</p>
        </div>

        {/* Countdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Months", value: timeLeft.months },
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
          ].map((item) => (
            <div key={item.label} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-pink-500/30">
              <div className="text-4xl font-bold text-pink-400">{item.value}</div>
              <div className="text-sm text-pink-200 mt-2">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Birthday Message */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-pink-500/30 mb-8">
          <p className="text-lg leading-relaxed text-pink-100">
            Today marks 20 incredible years of your beautiful existence. You light up every room you enter and make
            every day brighter just by being you. Happy Birthday, my love! 💕
          </p>
        </div>

        {/* Explore Button */}
        <button
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
          onClick={() => window.dispatchEvent(new CustomEvent("navigate", { detail: "about-her" }))}
        >
          Explore More About You
        </button>
      </div>
    </div>
  )
}
