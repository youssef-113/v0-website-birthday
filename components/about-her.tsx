"use client"

import { useState } from "react"
import Image from "next/image"

// Updated media array to include both photos and videos
const media = [
  {
    type: "image",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-06-29_16-39-56.jpg-edMXOMZDnNvUDDELDO675Qlv4Qk8I9.jpeg",
    note: "Your beautiful eyes always tell a story that words can't express! 💕",
  },
  {
    type: "image",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-08%20at%2022.57.19_7cec9348.jpg-Erx0PIWs9DSk0A3nbMY9w7vljoe4x4.jpeg",
    note: "The way you bloom like these flowers behind you - radiant and full of life! 🌸✨",
  },
  {
    type: "image",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480262400_2977499079069442_7652786201795638247_n.jpg-pg6L2FkwzYOXFKm10gJFb8L0VngzZz.jpeg",
    note: "Even the city lights can't outshine your beautiful smile by the water! 🌃💫",
  },
  {
    type: "image",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-03-25_02-48-41.jpg-bRfldX31bpYcZSXL0TVkHdnysvtsDn.jpeg",
    note: "Elegance personified - you make every outfit look like high fashion! 👑✨",
  },
  {
    type: "image",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-06-29_16-39-38.jpg-Wn2TE1SEmTfYNDwmSMWec8OhE8zqHM.jpeg",
    note: "That perfect smile and those gorgeous eyes - you take my breath away every time! 😍💖",
  },
  {
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video_2025-07-22_18-14-03-ty3TlNxrCVBmbubTTDwz9LNPXJi9qu.mp4",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-06-29_16-39-56.jpg-edMXOMZDnNvUDDELDO675Qlv4Qk8I9.jpeg",
    note: "Every moment with you is a treasure I'll cherish forever! 💕",
  },
  {
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/instagram_video_story_1742856170549-qmnvrUsfnGoJqrh1tVCzL7cF4qWVJM.mp4",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-08%20at%2022.57.19_7cec9348.jpg-Erx0PIWs9DSk0A3nbMY9w7vljoe4x4.jpeg",
    note: "Your laughter is the sweetest melody I've ever heard! 🎵💖",
  },
  {
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AQOxUSZfqeIJuyjcXHPB2yK67c0b1L_FXZgHO5I33f-LjiidBiIS1r068bhYmeTl-QlF3KmWGD-DEVBJAVcPUd5f8xjKVNkr9cwvi9k-VUj5fjTeT0JAOovNnzFsViqqIja0y7.mp4",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-03-25_02-48-41.jpg-bRfldX31bpYcZSXL0TVkHdnysvtsDn.jpeg",
    note: "Every video of you reminds me how lucky I am to have you in my life! ✨💕",
  },

  {
    type: "image",
    src: "/images/photo1.jpg",
    note: "Your radiant smile at the beach - this moment captured my heart all over again! 🌊💕",
  },
  {
    type: "image",
    src: "/images/photo2.jpg",
    note: "The way you blow kisses makes my heart skip a beat every single time! 😘✨",
  },
  {
    type: "image",
    src: "/images/photo3.jpg",
    note: "Your elegance and grace shine through in every photo. You're absolutely stunning! 🌟",
  },
  {
    type: "image",
    src: "/images/photo4.jpg",
    note: "Celebrating you is my favorite thing to do! Happy Birthday my princess! 🎉👑",
  },
  {
    type: "image",
    src: "/images/photo5.jpg",
    note: "20 years of you being amazing! Here's to many more beautiful years together! 🎂💖",
  },
  {
    type: "image",
    src: "/images/photo6.jpg",
    note: "Sunset kisses with you are pure magic. You make every moment special! 🌅💋",
  },
  {
    type: "image",
    src: "/images/photo7.jpg",
    note: "Your beauty radiates from within and lights up the whole beach! 🏖️✨",
  },
  {
    type: "image",
    src: "/images/photo8.jpg",
    note: "Every wave pales in comparison to the waves of love I feel for you! 🌊💕",
  },
  {
    type: "image",
    src: "/images/photo9.jpg",
    note: "look at you, glowing with happiness and love! You are my sunshine! ☀️💖",
  },
  {
    type: "image",
    src: "/images/photo11.jpg",
    note: "Your smile is my favorite curve, and your eyes are my favorite stars! 🌟😊 ",
  },

  {
    type: "video",
    src: "/images/video10.mp4",
    note: "Your beauty is a gift from God, and I'm blessed to have you in my life! 🌟💞",
  },
  {
    type: "video",
    src: "../public/images/video11.mp4",
    note: "Your laughter is the sweetest sound in the world,I could listen to it forever! 🎶💞",
  },
  {
    type: "video",
    src: "../public/images/video12.mp4",
    note: "The way you light up the room with your smile is simply magical! ✨😊",
  },
  {
    type: "video",
    src: "../public/images/video13.mp4",
    note: "Every moment with you is a treasure I hold close to my heart! 💖🌟",
  },
  {
    type: "video",
    src: "../public/images/video14.mp4",
    note: "Your beauty shines brighter than the stars in the night sky! 🌌💫",
  },
  {
    type: "video",
    src: "../public/images/video15.mp4",
    note: "You are my sunshine on a cloudy day, my rock, and my everything! ☀️💞",
  },
  {
    type: "video",
    src: "../public/images/video16.mp4",
    note: "Your beauty is a gift from God, and I'm blessed to have you in my life! 🌟💞",
  },
  {
    type: "video",
    src: "../public/images/video17.mp4",
    note: "Looking at you is like a breath of fresh air - you take my breath away! 🌬️💖",
  },
  {
    type: "video",
    src: "../public/images/video18.mp4",
    note: "Your smile is my favorite curve, and your eyes are my favorite stars! 🌟😊 ",
  },
  {
    type: "video",
    src: "../public/images/video19.mp4",
    note: "Your beauty is a gift from God, and I'm blessed to have you in my life! 🌟💞",
  },
  {
    type: "video",
    src: "../public/images/video20.mp4",
    note:"You are my sunshine on a cloudy day, my rock, and my everything! ☀️💞",
  }

]

export default function AboutHer() {
  const [selectedMedia, setSelectedMedia] = useState<{
    type: string
    src: string
    note: string
    thumbnail?: string
  } | null>(null)

  return (
    <div className="min-h-screen px-4 pt-24 pb-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          About My Beautiful Girl
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {media.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-pink-500/30 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25"
              onClick={() => setSelectedMedia(item)}
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={item.type === "video" ? item.thumbnail || item.src : item.src}
                  alt={`Media ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  unoptimized
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-pink-500/70 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm">Click to see my note</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 max-w-3xl w-full border border-pink-500/30">
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-pink-400 transition-colors z-10"
              >
                ×
              </button>

              <div className="rounded-2xl overflow-hidden mb-6">
                {selectedMedia.type === "video" ? (
                  <div className="aspect-video relative">
                    <video
                      src={selectedMedia.src}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                      crossOrigin="anonymous"
                    />
                  </div>
                ) : (
                  <div className="aspect-square relative">
                    <Image
                      src={selectedMedia.src || "/placeholder.svg"}
                      alt="Selected media"
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                )}
              </div>

              <div className="bg-pink-500/20 rounded-2xl p-6">
                <p className="text-lg leading-relaxed text-pink-100">{selectedMedia.note}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
