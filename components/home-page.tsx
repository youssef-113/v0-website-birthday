"use client"

import { useState, useEffect } from "react"

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
  })

  const [totalStats, setTotalStats] = useState({
    years: 20,
    months: 240,
    days: 7300,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Get next birthday (either this year or next year)
      const today = new Date()
      const currentYear = today.getFullYear()
      let birthdayThisYear = new Date(`${currentYear}-07-23T00:00:00`)

      // If birthday has passed this year, set for next year
      if (today > birthdayThisYear) {
        birthdayThisYear = new Date(`${currentYear + 1}-07-23T00:00:00`)
      }

      const difference = birthdayThisYear.getTime() - today.getTime()

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

  useEffect(() => {
    // Calculate stats based on birth date
    const birthDate = new Date("2005-07-23")
    const today = new Date()

    const yearDiff = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = yearDiff * 12 + (today.getMonth() - birthDate.getMonth())

    // Calculate days (approximate)
    const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
    const diffDays = Math.round(Math.abs((today.getTime() - birthDate.getTime()) / oneDay))

    setTotalStats({
      years: yearDiff,
      months: monthDiff,
      days: diffDays,
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 pt-20">
      {/* Welcome Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        {/* Moon */}
        <div className="absolute top-24 right-8 w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-lg shadow-yellow-500/50 animate-pulse">
          <div className="absolute top-2 left-3 w-3 h-3 bg-yellow-100/50 rounded-full" />
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
          Happy 20th Birthday
        </h1>

        <h2 className="text-3xl md:text-4xl text-pink-400 mb-12">My Beautiful Princess</h2>

        {/* Birth Date Card */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-pink-500/30 flex-1">
            <div className="text-lg text-pink-200 mb-2">Born on</div>
            <div className="text-2xl font-bold text-white mb-1">July 23, 2005</div>
            <div className="text-md text-pink-300">Saturday</div>
            <div className="text-lg text-pink-400 mt-2">♌ Leo</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-pink-500/30 flex-1">
            <div className="text-lg text-pink-200 mb-2">Moon Phase</div>
            <div className="text-3xl mb-1">🌖</div>
            <div className="text-xl font-bold text-white mb-1">Waning Gibbous</div>
            <div className="text-md text-pink-300">Born under a mystical moon ✨</div>
          </div>
        </div>

        {/* Age Display */}
        <div className="mb-12">
          <div className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent leading-none">
            20
          </div>
          <p className="text-xl text-pink-300 mt-4">Years of Amazing You</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-pink-500/30">
            <div className="text-3xl font-bold text-pink-400">{totalStats.years}</div>
            <div className="text-sm text-pink-200">Beautiful Years</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-pink-500/30">
            <div className="text-3xl font-bold text-pink-400">{totalStats.months}</div>
            <div className="text-sm text-pink-200">Months of Joy</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-pink-500/30">
            <div className="text-3xl font-bold text-pink-400">{totalStats.days}</div>
            <div className="text-sm text-pink-200">Days of Wonder</div>
          </div>
        </div>

        {/* Countdown */}
        <div className="mb-8">
          <h3 className="text-xl text-pink-300 mb-4">Next birthday in:</h3>
          <div className="grid grid-cols-3 gap-6">
            {[
              { label: "Months", value: timeLeft.months },
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-pink-500/30">
                <div className="text-4xl font-bold text-pink-400">{item.value}</div>
                <div className="text-sm text-pink-200 mt-2">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Birthday Message */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-pink-500/30 mb-8">
          <h2 className="text-2xl font-bold text-pink-400 mb-4">My Heart's Message to You 💕</h2>
          <p className="text-lg leading-relaxed text-pink-100 mb-4">
            Every day with you feels like a dream come true. Your smile lights up my world, and your laugh is the
            sweetest melody I've ever heard. On this special day, I want you to know that you mean everything to me.
            You're not just my girlfriend, you're my best friend, my inspiration, and my greatest love.
          </p>
          <p className="text-lg leading-relaxed text-pink-100 mb-6">
            I hope this new year of your life brings you all the happiness, love, and dreams that your beautiful heart
            deserves. I can't wait to create more magical memories with you. Happy Birthday, my darling! ❤️
          </p>
          <div className="text-right italic text-pink-200">
            With all my love,
            <br />
            <span className="font-bold text-pink-400">Your Forever Valentine 💖</span>
          </div>
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
