"use client"

import { useState, useRef, useEffect } from "react"
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
]

export default function AboutUs() {
  const [selectedMemory, setSelectedMemory] = useState<{ src: string; title: string; note: string } | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const handleVideoPlay = (videoUrl: string) => {
    setActiveVideo(videoUrl)
  }

  const handleVideoClose = () => {
    setActiveVideo(null)
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

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
          
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-pink-500/30 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25 memory-card opacity-0 translate-y-10">
            <h3 className="text-2xl font-semibold text-pink-300 mb-4 text-center">Our First Video</h3>

            <div
              className="aspect-video bg-black/50 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-black/40 transition-colors overflow-hidden relative"
              onClick={() =>
                handleVideoPlay(
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video_2025-04-13_00-18-55-ozhSrrQayIBoyteoWtr56BV2YyagON.mp4",
                )
              }
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
              <div className="text-center z-10">
                <div className="text-6xl text-pink-400 mb-4 transform transition-transform hover:scale-125">▶</div>
                <p className="text-pink-200">Watch our special moments</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-pink-500/30 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25 memory-card opacity-0 translate-y-10">
            <h3 className="text-2xl font-semibold text-pink-300 mb-4 text-center">Our Second Video</h3>

            <div
              className="aspect-video bg-black/50 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-black/40 transition-colors overflow-hidden relative"
              onClick={() =>
                handleVideoPlay(
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video_2025-04-13_00-16-38-NffIuxi11hAtWBMYdtiEEVcUwr1khx.mp4",
                )
              }
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
              <div className="text-center z-10">
                <div className="text-6xl text-pink-400 mb-4 transform transition-transform hover:scale-125">▶</div>
                <p className="text-pink-200">More beautiful memories</p>
              </div>
            </div>

          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-pink-500/30 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25 memory-card opacity-0 translate-y-10">
            <h3 className="text-2xl font-semibold text-pink-300 mb-4 text-center">our Third Video</h3>

            <div
              className="aspect-video bg-black/50 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-black/40 transition-colors overflow-hidden relative"
              onClick={() =>
                handleVideoPlay(
                  "/images/couple5.MP4",
                )
              }
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
              <div className="text-center z-10">
                <div className="text-6xl text-pink-400 mb-4 transform transition-transform hover:scale-125">▶</div>
                <p className="text-pink-200">More beautiful memories</p>
              </div>
            </div>

          </div>
          
        </div>

        {/* Photo Collage */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-pink-300 mb-6 text-center">Our Photo Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {memories.map((memory, index) => (
              <div
                key={index}
                className="group memory-card opacity-0 translate-y-10"
                onClick={() => setSelectedMemory(memory)}
              >
                <div className="aspect-square relative overflow-hidden rounded-xl border-2 border-pink-500/30 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25">
                  <Image
                    src={memory.src || "/placeholder.svg"}
                    alt={memory.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h4 className="text-white font-medium text-sm">{memory.title}</h4>
                  </div>
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
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 max-w-2xl w-full border border-pink-500/30 relative">
              <button
                onClick={() => setSelectedMemory(null)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-pink-400 transition-colors z-10"
              >
                ×
              </button>

              <div className="aspect-square relative rounded-2xl overflow-hidden mb-6">
                <Image
                  src={selectedMemory.src || "/placeholder.svg"}
                  alt={selectedMemory.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 50vw"
                  unoptimized
                />
              </div>

              <h4 className="text-xl font-semibold text-pink-300 mb-4">{selectedMemory.title}</h4>

              <div className="bg-pink-500/20 rounded-2xl p-6">
                <p className="text-lg leading-relaxed text-pink-100">{selectedMemory.note}</p>
              </div>
            </div>
          </div>
        )}

        {/* Video Modal */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full relative">
              <button
                onClick={handleVideoClose}
                className="absolute -top-12 right-0 text-white text-3xl hover:text-pink-400 transition-colors z-50"
              >
                ×
              </button>

              <video
                ref={videoRef}
                src={activeVideo}
                className="w-full rounded-xl"
                controls
                autoPlay
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
