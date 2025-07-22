"use client"

import { useState } from "react"
import Image from "next/image"

const photos = [
  {
    src: "/images/photo1.jpg",
    note: "Your radiant smile at the beach - this moment captured my heart all over again! 🌊💕",
  },
  {
    src: "/images/photo2.jpg",
    note: "The way you blow kisses makes my heart skip a beat every single time! 😘✨",
  },
  {
    src: "/images/photo3.jpg",
    note: "Your elegance and grace shine through in every photo. You're absolutely stunning! 🌟",
  },
  {
    src: "/images/photo4.jpg",
    note: "Celebrating you is my favorite thing to do! Happy Birthday my princess! 🎉👑",
  },
  {
    src: "/images/photo5.jpg",
    note: "20 years of you being amazing! Here's to many more beautiful years together! 🎂💖",
  },
  {
    src: "/images/photo6.jpg",
    note: "Sunset kisses with you are pure magic. You make every moment special! 🌅💋",
  },
  {
    src: "/images/photo7.jpg",
    note: "Your beauty radiates from within and lights up the whole beach! 🏖️✨",
  },
  {
    src: "/images/photo8.jpg",
    note: "Every wave pales in comparison to the waves of love I feel for you! 🌊💕",
  },
  {
    src: "/images/photo9.jpg",
    note: "That shy smile of yours melts my heart every single time! You're perfect! 😊💖",
  },
]

export default function AboutHer() {
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; note: string } | null>(null)

  return (
    <div className="min-h-screen px-4 pt-24 pb-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          About My Beautiful Girl
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-pink-500/30 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={`Photo ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm">Click to see my note</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 max-w-2xl w-full border border-pink-500/30">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-pink-400 transition-colors"
              >
                ×
              </button>

              <div className="aspect-square relative rounded-2xl overflow-hidden mb-6">
                <Image
                  src={selectedPhoto.src || "/placeholder.svg"}
                  alt="Selected photo"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-pink-500/20 rounded-2xl p-6">
                <p className="text-lg leading-relaxed text-pink-100">{selectedPhoto.note}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
