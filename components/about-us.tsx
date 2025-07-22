"use client"

import { useState } from "react"
import Image from "next/image"

const memories = [
  {
    src: "/images/photo6.jpg",
    title: "Our Beach Adventures",
    note: "Our first beach trip together - the day I knew you were the one for me! 🏖️💕",
  },
  {
    src: "/images/photo1.jpg",
    title: "Pure Joy",
    note: "Your happiness is contagious! This smile of yours can light up the darkest days! ✨😊",
  },
  {
    src: "/images/photo4.jpg",
    title: "Celebrations",
    note: "Celebrating life with you is the greatest gift. Here's to many more celebrations together! 🎉💖",
  },
]

export default function AboutUs() {
  const [selectedMemory, setSelectedMemory] = useState<{ src: string; title: string; note: string } | null>(null)

  return (
    <div className="min-h-screen px-4 pt-24 pb-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Our Beautiful Story
        </h1>

        {/* Video Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-pink-500/30 mb-12">
          <h3 className="text-2xl font-semibold text-pink-300 mb-6 text-center">Our Journey Together</h3>

          <div className="aspect-video bg-black/50 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-black/40 transition-colors">
            <div className="text-center">
              <div className="text-6xl text-pink-400 mb-4">▶</div>
              <p className="text-pink-200">Our special moments captured in time</p>
            </div>
          </div>

          <div className="mt-6 bg-pink-500/20 rounded-2xl p-6">
            <p className="text-lg leading-relaxed text-pink-100">
              Every moment with you feels like a fairytale. From our first meeting to this special day, you've made
              every second magical. I love how we laugh together, dream together, and grow together. You're not just my
              girlfriend, you're my best friend and my greatest love.
            </p>
          </div>
        </div>

        {/* Memory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-pink-500/30 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25"
              onClick={() => setSelectedMemory(memory)}
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={memory.src || "/placeholder.svg"}
                  alt={memory.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-semibold">{memory.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Love Message */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-pink-500/30 text-center">
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMemory(null)}
          >
            <div
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 max-w-2xl w-full border border-pink-500/30 relative transform transition-all duration-300 scale-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMemory(null)}
                className="absolute top-4 right-4 text-white text-3xl hover:text-pink-400 transition-colors z-10 bg-black/30 rounded-full w-10 h-10 flex items-center justify-center"
              >
                ×
              </button>

              <div className="aspect-square relative rounded-2xl overflow-hidden mb-6">
                <Image
                  src={selectedMemory.src || "/placeholder.svg"}
                  alt={selectedMemory.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-4 border border-pink-400/30 mb-4">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3">🌟</div>
                  <h4 className="text-xl font-semibold text-pink-300">{selectedMemory.title}</h4>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-400/30">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">💖</div>
                  <h3 className="text-lg font-semibold text-purple-300">Our Memory</h3>
                </div>
                <p className="text-lg leading-relaxed text-pink-100">{selectedMemory.note}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
