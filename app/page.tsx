"use client"

import type React from "react"

import { useState, useEffect } from "react"
import LoadingScreen from "@/components/loading-screen"
import Navigation from "@/components/navigation"
import HomePage from "@/components/home-page"
import AboutHer from "@/components/about-her"
import AboutUs from "@/components/about-us"
import GalleryUpload from "@/components/gallery-upload"
import Login from "@/components/login"
import HeartBackground from "@/components/heart-background"
import HeartExplosion from "@/components/heart-explosion"
import FloatingLetters from "@/components/floating-letters"

export default function BirthdayWebsite() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState("login")
  const [explosions, setExplosions] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const createHeartExplosion = (x: number, y: number) => {
    const id = Date.now()
    setExplosions((prev) => [...prev, { id, x, y }])

    setTimeout(() => {
      setExplosions((prev) => prev.filter((explosion) => explosion.id !== id))
    }, 1000)
  }

  const handleClick = (e: React.MouseEvent) => {
    if (e && e.clientX && e.clientY) {
      createHeartExplosion(e.clientX, e.clientY)
    }
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden cursor-heart"
      onClick={handleClick}
    >
      <HeartBackground />
      <FloatingLetters />
      {currentPage !== "login" && <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />}

      <div className="relative">
        {currentPage === "login" && <Login onLoginSuccess={() => setCurrentPage("home")} />}
        {currentPage === "home" && <HomePage />}
        {currentPage === "about-her" && <AboutHer />}
        {currentPage === "about-us" && <AboutUs />}
        {currentPage === "gallery" && <GalleryUpload />}
      </div>

      {explosions.map((explosion) => (
        <HeartExplosion key={explosion.id} x={explosion.x} y={explosion.y} />
      ))}
    </div>
  )
}
