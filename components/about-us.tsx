"use client"

import { useState, useRef, useEffect, type MouseEvent } from "react"
import Image from "next/image"

const memories = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-05-16_01-51-12.jpg-ROUJ4EmA6kmLlOhVLVCdKDSHSj2HnQ.jpeg",
    title: "Our Special Moments",
    note: "Every moment with you is a treasure I hold close to my heart! 💕",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2022-12-20_18-40-43.jpg-IZS5gx0b4oWfAp0T0OBVHjnSzCAx4c.jpeg",
    title: "Cool Vibes",
    note: "Even with those fire eyes, you still melt my heart! 🔥💖",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-05-18_18-20-01.jpg-Sb8fqOhgB3smsJRzBAqcvLYgGMCTnE.jpeg",
    title: "Fire Eyes",
    note: "The way you look at me sets my soul on fire! 🔥👀",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-05-16_01-50-32.jpg-x6CJkQqRAV4g2cLAUPgRQ9Amaqwz0Q.jpeg",
    title: "Pure Love",
    note: "Your smile is the reason I believe in love at first sight! 😊❤️",
  },
  {
    src: "/images/couple6.jpg",
    title: "Together Forever",
    note: "With you, every day feels like a fairytale come true! 🌟💑",
  },
  {
    src: "/images/couple7.jpg",
    title: "My Beautiful Queen",
    note: "Your elegance and grace leave me speechless every single time. You're absolutely stunning! 👑✨",
  },
  {
    src: "/images/couple8.jpg",
    title: "Pure Happiness",
    note: "The joy in your eyes is my favorite sight in the world. Your happiness is my happiness! 😊💖",
  },
  {
    src: "/images/couple9.jpg",
    title: "Our Adventure",
    note: "Every journey with you is an adventure I never want to end. Here's to exploring life together! 🌍❤️",
  },
  {
    src: "/images/couple11.jpg",
    title: "Magical Moments",
    note: "Time stands still when I'm with you. These moments are pure magic that I'll cherish forever! ⏰💫",
  },
  {
    src: "/images/couple12.jpg",
    title: "My Everything",
    note: "You're not just my love, you're my best friend, my partner, my entire world! 🌎💕",
  },
  {
    src: "/images/couple13.jpg",
    title: "Endless Love",
    note: "My love for you grows stronger with each passing day. You complete me in every way! 💗🌹",
  },
  {
    src: "/images/couple14.jpg",
    title: "Forever Yours",
    note: "In your arms is where I belong. I promise to love you today, tomorrow, and always! 🤗💞",
  },
]

export default function AboutUs() {
  const [selectedMemory, setSelectedMemory] = useState<{ src: string; title: string; note: string } | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [activePoster, setActivePoster] = useState<string | null>(null)

  const handleVideoPlay = (videoUrl: string, posterUrl?: string) => {
    setActiveVideo(videoUrl)
    setActivePoster(posterUrl || null)
  }

  const handleVideoClose = () => {
    setActiveVideo(null)
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  // Close modal on ESC and lock body scroll
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleVideoClose()
    }
    if (activeVideo) {
      document.addEventListener("keydown", onKey)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [activeVideo])

  // Animation for cards on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = document.querySelectorAll(".memory-card")
    cards.forEach((card) => observer.observe(card))

    return () => {
      cards.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return (
    <div className="min-h-screen px-4 pt-24 pb-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Our Beautiful Story
        </h1>

        {/* Video Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-pink-500/30 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25 memory-card opacity-0 translate-y-10">
            <h3 className="text-2xl font-semibold text-pink-300 mb-4 text-center">Our First Video</h3>
            <div
              className="aspect-video rounded-2xl overflow-hidden relative group cursor-pointer"
              onClick={() =>
                handleVideoPlay(
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video_2025-04-13_00-18-55-ozhSrrQayIBoyteoWtr56BV2YyagON.mp4",
                  "/images/couple3.jpg",
                )
              }
            >
              <Image src="/images/couple3.jpg" alt="Video poster 1" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <div className="w-16 h-16 rounded-full bg-pink-500/80 flex items-center justify-center shadow-lg shadow-pink-500/30">
                  <span className="text-white text-2xl ml-1">▶</span>
                </div>
                <p className="text-pink-100 mt-3">Watch our special moments</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-pink-500/30 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25 memory-card opacity-0 translate-y-10">
            <h3 className="text-2xl font-semibold text-pink-300 mb-4 text-center">Our Second Video</h3>
            <div
              className="aspect-video rounded-2xl overflow-hidden relative group cursor-pointer"
              onClick={() =>
                handleVideoPlay(
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video_2025-04-13_00-16-38-NffIuxi11hAtWBMYdtiEEVcUwr1khx.mp4",
                  "/images/couple2.jpg",
                )
              }
            >
              <Image src="/images/couple2.jpg" alt="Video poster 2" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <div className="w-16 h-16 rounded-full bg-pink-500/80 flex items-center justify-center shadow-lg shadow-pink-500/30">
                  <span className="text-white text-2xl ml-1">▶</span>
                </div>
                <p className="text-pink-100 mt-3">More beautiful memories</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-pink-500/30 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25 memory-card opacity-0 translate-y-10">
            <h3 className="text-2xl font-semibold text-pink-300 mb-4 text-center">Our Third Video</h3>
            <div
              className="aspect-video rounded-2xl overflow-hidden relative group cursor-pointer"
              onClick={() => handleVideoPlay("/images/couple5.MP4", "/images/couple6.jpg")}
            >
              <Image src="/images/couple6.jpg" alt="Video poster 3" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <div className="w-16 h-16 rounded-full bg-pink-500/80 flex items-center justify-center shadow-lg shadow-pink-500/30">
                  <span className="text-white text-2xl ml-1">▶</span>
                </div>
                <p className="text-pink-100 mt-3">More beautiful memories</p>
              </div>
            </div>
          </div>

{/*card 4*/ }
<div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-pink-500/30 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25 memory-card opacity-0 translate-y-10">
            <h3 className="text-2xl font-semibold text-pink-300 mb-4 text-center">Our Fourth Video</h3>
            <div
              className="aspect-video rounded-2xl overflow-hidden relative group cursor-pointer"
              onClick={() =>
                handleVideoPlay(
                  "/images/video20.mp4",
                  "/images/couple6.jpg",
                )
              }
            >
              <Image src="/images/couple6.jpg" alt="Video poster 4" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <div className="w-16 h-16 rounded-full bg-pink-500/80 flex items-center justify-center shadow-lg shadow-pink-500/30">
                  <span className="text-white text-2xl ml-1">▶</span>
                </div>
                <p className="text-pink-100 mt-3">More beautiful memories</p>
              </div>
            </div>
          </div>

          {/* Card 5 - New Video */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-pink-500/30 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25 memory-card opacity-0 translate-y-10">
            <h3 className="text-2xl font-semibold text-pink-300 mb-4 text-center">Our Love Story</h3>
            <div
              className="aspect-video rounded-2xl overflow-hidden relative group cursor-pointer"
              onClick={() =>
                handleVideoPlay(
                  "/images/couple6.MOV",
                  "/images/couple7.jpg",
                )
              }
            >
              <Image src="/images/couple7.jpg" alt="Video poster 5" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <div className="w-16 h-16 rounded-full bg-pink-500/80 flex items-center justify-center shadow-lg shadow-pink-500/30">
                  <span className="text-white text-2xl ml-1">▶</span>
                </div>
                <p className="text-pink-100 mt-3">Watch our journey together</p>
              </div>
            </div>
          </div>

        </div>
        

        {/* Photo Collage */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Our Photo Gallery</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
            {memories.map((memory, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border border-white/30 shadow-lg sm:shadow-xl cursor-pointer transform transition-all duration-700 hover:scale-[1.03] sm:hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/40 focus:outline-none focus:ring-4 focus:ring-pink-400/50 hover:border-pink-400/50 hover:bg-gradient-to-br hover:from-pink-500/20 hover:via-purple-500/20 hover:to-transparent memory-card opacity-0 translate-y-10"
                onClick={() => setSelectedMemory(memory)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    setSelectedMemory(memory)
                  }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/15 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="aspect-square sm:aspect-[4/5] relative overflow-hidden bg-black/10">
                  <Image
                    src={memory.src || "/placeholder.svg"}
                    alt={memory.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    unoptimized
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-pink-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[10px] sm:text-xs font-medium text-pink-200 uppercase tracking-wider">
                        Memory
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold leading-tight mb-1">{memory.title}</h4>
                    <p className="text-[10px] sm:text-xs font-medium leading-tight opacity-90">Tap to see our note 💕</p>
                  </div>
                  
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-0 group-hover:scale-100">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Love Message */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-pink-500/30 text-center memory-card opacity-0 translate-y-10">
          <h3 className="text-3xl font-semibold text-pink-400 mb-6">My Promise to You</h3>
          <p className="text-lg leading-relaxed text-pink-100">
            On this special day, I promise to love you more each day, to support your dreams, to make you laugh when
            you're sad, and to celebrate every moment of joy with you. You've brought so much light into my life, and I
            can't wait to create more beautiful memories together. Happy 20th Birthday, my love! 💕
          </p>
        </div>

        {/* Memory Modal */}
        {selectedMemory && (
          <div 
            className="fixed inset-0 bg-gradient-to-br from-black/95 via-pink-900/20 to-purple-900/20 backdrop-blur-xl z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-400"
            onClick={() => setSelectedMemory(null)}
          >
            <div 
              className="bg-gradient-to-br from-white/25 via-pink-500/10 to-purple-500/10 backdrop-blur-3xl rounded-3xl sm:rounded-4xl p-4 sm:p-6 md:p-8 max-w-6xl w-full border border-white/30 shadow-2xl relative animate-in slide-in-from-bottom-10 duration-500"
              onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMemory(null)}
                className="absolute -top-3 -right-3 sm:top-4 sm:right-4 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white grid place-items-center hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-110 hover:rotate-90 shadow-lg backdrop-blur-sm border-2 border-white/40"
                aria-label="Close"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="lg:col-span-2">
                  <div className="rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl bg-gradient-to-br from-black/40 to-black/20 border border-white/20 relative">
                    <div className="aspect-square sm:aspect-[4/3] relative group">
                      <Image
                        src={selectedMemory.src || "/placeholder.svg"}
                        alt={selectedMemory.title}
                        fill
                        className="object-contain transition-transform duration-1000 group-hover:scale-105"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 70vw"
                        unoptimized
                      />
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center gap-3 bg-black/60 backdrop-blur-lg rounded-full px-4 py-2 border border-pink-400/30">
                          <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" />
                          <span className="text-sm text-white font-bold tracking-wide">OUR MEMORY</span>
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <div className="bg-black/60 backdrop-blur-lg rounded-full px-3 py-1.5 border border-white/20">
                          <span className="text-xs text-pink-300 font-medium">Special Moment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="h-full flex flex-col justify-between">
                    <div className="bg-gradient-to-br from-pink-500/50 via-purple-500/40 to-pink-500/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/30 shadow-inner relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-2xl" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="relative">
                            <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 blur-lg opacity-80 animate-pulse" />
                            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center border-3 border-white/40 shadow-lg">
                              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <span className="text-sm sm:text-base font-bold text-white uppercase tracking-wider drop-shadow-lg">
                              {selectedMemory.title}
                            </span>
                            <p className="text-xs sm:text-sm text-pink-100 mt-1 font-medium">A special memory for us 💕</p>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 mb-6">
                          <p className="text-base sm:text-lg leading-relaxed text-white font-medium animate-in slide-in-from-bottom-4 duration-700">
                            {selectedMemory.note}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                            <span className="text-xs text-pink-200 uppercase tracking-wider">Together Forever</span>
                          </div>
                          <div className="flex gap-1">
                            <span className="text-2xl animate-bounce">💖</span>
                            <span className="text-2xl animate-bounce delay-100">💕</span>
                            <span className="text-2xl animate-bounce delay-200">💗</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => handleVideoClose()}
          >
            <div
              className="max-w-4xl w-full relative"
              onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              <button
                onClick={handleVideoClose}
                className="absolute -top-12 right-0 text-white text-3xl hover:text-pink-400 transition-colors z-50"
                aria-label="Close"
              >
                ×
              </button>

              <video
                ref={videoRef}
                src={activeVideo}
                poster={activePoster ?? undefined}
                className="w-full rounded-xl"
                controls
                autoPlay
                preload="metadata"
                onEnded={handleVideoClose}
                crossOrigin="anonymous"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
