"use client"

import { useState } from "react"
import Image from "next/image"

const photos = [
  {
    src: "/images/photo1.jpg",
    note: "Your radiant smile at the beach - this moment captured my heart all over again! The way you light up every scene makes me fall in love with you more each day. 🌊💕",
  },
  {
    src: "/images/photo2.jpg",
    note: "The way you blow kisses makes my heart skip a beat every single time! Your playful spirit and sweet gestures are what make you absolutely irresistible. 😘✨",
  },
  {
    src: "/images/photo3.jpg",
    note: "Your elegance and grace shine through in every photo. You're absolutely stunning and carry yourself like the queen you truly are! 🌟👑",
  },
  {
    src: "/images/photo4.jpg",
    note: "Celebrating you is my favorite thing to do! Happy Birthday my princess! Every moment with you feels like a celebration of love and happiness. 🎉👑",
  },
  {
    src: "/images/photo5.jpg",
    note: "20 years of you being amazing! Here's to many more beautiful years together filled with love, laughter, and endless adventures! 🎂💖",
  },
  {
    src: "/images/photo6.jpg",
    note: "Sunset kisses with you are pure magic. You make every moment special and turn ordinary days into extraordinary memories! 🌅💋",
  },
  {
    src: "/images/photo7.jpg",
    note: "Your beauty radiates from within and lights up the whole beach! You have this incredible ability to make everything around you more beautiful. 🏖️✨",
  },
  {
    src: "/images/photo8.jpg",
    note: "Every wave pales in comparison to the waves of love I feel for you! Your presence by the ocean creates the most perfect harmony. 🌊💕",
  },
  {
    src: "/images/photo9.jpg",
    note: "That shy smile of yours melts my heart every single time! You're perfect in every way, and your gentle nature makes you even more beautiful. 😊💖",
  },
  {
    src: "/images/photo10.jpg",
    note: "Like an angel walking on earth! Your white dress flowing in the ocean breeze makes you look absolutely divine. You take my breath away every single day. 👼🤍",
  },
  {
    src: "/images/photo11.jpg",
    note: "Golden hour was made for you, my love! The way the sunset light kisses your face shows the world how truly magical you are. You're my golden treasure. 🌅✨",
  },
  {
    src: "/images/photo12.jpg",
    note: "Effortlessly beautiful and naturally stunning! Even with sunglasses on, your inner light shines so bright. You're my sunshine on every cloudy day. 😎☀️",
  },
  {
    src: "/images/photo13.jpg",
    note: "Elegance personified! You look like royalty in this beautiful abaya. Your grace and poise make you stand out in every crowd. You're my queen forever. 👸🖤",
  },
  {
    src: "/images/photo14.jpg",
    note: "That sweet kiss you're blowing melts my heart completely! Your playful and loving nature makes every day with you feel like a beautiful dream. 💋💙",
  },
  {
    src: "/images/photo15.jpg",
    note: "Beach goddess in blue! You look absolutely stunning sitting by the ocean. The way you pose so naturally shows your confidence and beauty. 💙🏖️",
  },
  {
    src: "/images/photo16.jpg",
    note: "Sophisticated and stylish! Your fashion sense is impeccable, but it's your beautiful soul that truly makes you shine from within. 🕶️✨",
  },
  {
    src: "/images/photo17.jpg",
    note: "Desert rose in full bloom! Your beauty against the sandy backdrop creates the most perfect picture. You're like a precious gem in every setting. 🌹🏜️",
  },
  {
    src: "/images/photo18.jpg",
    note: "City lights can't compete with your glow! You look absolutely radiant in this evening shot. You light up my world brighter than any skyline. 🌃✨",
  },
  {
    src: "/images/photo19.jpg",
    note: "Peace, love, and pure beauty! Your victory sign and sweet smile show your joyful spirit. You bring peace and happiness to my heart every day. ✌️💕",
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
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 max-w-2xl w-full border border-pink-500/30 relative transform transition-all duration-300 scale-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 text-white text-3xl hover:text-pink-400 transition-colors z-10 bg-black/30 rounded-full w-10 h-10 flex items-center justify-center"
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

              <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-6 border border-pink-400/30">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">💕</div>
                  <h3 className="text-xl font-semibold text-pink-300">My Note For You</h3>
                </div>
                <p className="text-lg leading-relaxed text-pink-100">{selectedPhoto.note}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
