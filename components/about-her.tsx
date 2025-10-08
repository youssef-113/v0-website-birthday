"use client"

import { useState, useEffect, useRef, type MouseEvent, type KeyboardEvent as ReactKeyboardEvent, type TouchEvent as ReactTouchEvent } from "react"
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
    thumbnail: "/images/WhatsApp Image 2025-10-05 at 02.27.36_316c0dbd.jpg",
    note: "Every moment with you is a treasure I'll cherish forever! 💕",
  },
  {
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/instagram_video_story_1742856170549-qmnvrUsfnGoJqrh1tVCzL7cF4qWVJM.mp4",
    thumbnail: "/images/WhatsApp Image 2025-10-05 at 02.27.36_316c0dbd.jpg",
    note: "Your laughter is the sweetest melody I've ever heard! 🎵💖",
  },
  {
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AQOxUSZfqeIJuyjcXHPB2yK67c0b1L_FXZgHO5I33f-LjiidBiIS1r068bhYmeTl-QlF3KmWGD-DEVBJAVcPUd5f8xjKVNkr9cwvi9k-VUj5fjTeT0JAOovNnzFsViqqIja0y7.mp4",
    thumbnail: "/images/WhatsApp Image 2025-10-05 at 02.27.36_316c0dbd.jpg",
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
    src: "/images/video11.mp4",
    note: "Your laughter is the sweetest sound in the world,I could listen to it forever! 🎶💞",
  },
  {
    type: "video",
    src: "/images/video12.mp4",
    note: "The way you light up the room with your smile is simply magical! ✨😊",
  },
  {
    type: "video",
    src: "/images/video13.mp4",
    note: "Every moment with you is a treasure I hold close to my heart! 💖🌟",
  },
  {
    type: "video",
    src: "/images/video14.mp4",
    note: "Your beauty shines brighter than the stars in the night sky! 🌌💫",
  },
  {
    type: "video",
    src: "/images/video15.mp4",
    note: "You are my sunshine on a cloudy day, my rock, and my everything! ☀️💞",
  },
  {
    type: "video",
    src: "/images/video16.mp4",
    note: "Your beauty steals my breath away, but it’s your heart that completely owns me.💞",
  },
  {
    type: "video",
    src: "/images/video17.mp4",
    note: "Looking at you is like a breath of fresh air - you take my breath away! 🌬️💖",
  },
  {
    type: "video",
    src: "/images/video18.mp4",
    note: "Your smile is my favorite curve, and your eyes are my favorite stars! 🌟😊 ",
  },
  {
    type: "video",
    src: "/images/video19.mp4",
    note: "Your beauty is heaven’s masterpiece, and every time I look at you, Having you in my life is the greatest blessing 🌟💞",
  },
  {
    type: "image",
    src: "/images/photo10.jpg",
    note: "In your eyes, I see the universe unfolding its most beautiful secrets. You're my everything! 🌌💫",
  },
  {
    type: "image",
    src: "/images/photo12.jpg",
    note: "Your presence turns ordinary moments into extraordinary memories. Grateful for every second! ⏳💖",
  },
  {
    type: "image",
    src: "/images/photo13.jpg",
    note: "Like a rare gem, your beauty captivates and your spirit inspires. Forever mesmerized! 💎✨",
  },
  {
    type: "image",
    src: "/images/couple1.jpg",
    note: "Us together - the perfect blend of souls, creating our own beautiful story! 👫💕",
  },
  {
    type: "image",
    src: "/images/couple2.jpg",
    note: "Two hearts beating as one, making every day an adventure of love! ❤️🤝",
  },
  {
    type: "video",
    src: "/images/highlights - 18090282787518145 (2).mp4",
    thumbnail: "/images/WhatsApp Image 2025-10-05 at 02.27.36_316c0dbd.jpg",
    note: "Our journey together is the highlight of my life - every laugh, every moment, pure joy! 🎥🎉",
  },
  {
    type: "image",
    src: "/images/480262400_2977499079069442_7652786201795638247_n.jpg",
    note: "Capturing your elegance in motion, every frame tells our love story! 📸💕",
  },
  {
    type: "image",
    src: "/images/480916717_2996135657205784_7054894599230855549_n.jpg",
    note: "The way you move is poetry in motion - graceful, beautiful, unforgettable! 🌟🕺",
  },
  {
    type: "video",
    src: "/images/AQOxUSZfqeIJuyjcXHPB2yK67c0b1L_FXZgHO5I33f-LjiidBiIS1r068bhYmeTl-QlF3KmWGD-DEVBJAVcPUd5f8xjKVNkr9cwvi9k.mp4",
    thumbnail: "/images/WhatsApp Image 2025-10-05 at 02.27.36_316c0dbd.jpg",
    note: "In your gaze, I find endless wonder and infinite love! 👀💖",
  },
  {
    type: "image",
    src: "/images/photo_2024-05-18_18-19-26.jpg",
    note: "Your smile lights up my world like the morning sun! ☀️😊",
  },
  {
    type: "image",
    src: "/images/WhatsApp Image 2025-06-19 at 18.31.53_99ace78f.jpg",
    note: "Each photo is a testament to your incredible spirit and charm! ✨📖",
  },
  {
    type: "image",
    src: "/images/WhatsApp Image 2025-07-18 at 03.54.18_824b6443.jpg",
    note: "You make ordinary moments extraordinary with your presence! 🌈✨",
  },
  {
    type: "image",
    src: "/images/WhatsApp Image 2025-07-18 at 03.54.18_b3e75816.jpg",
    note: "Your beauty is timeless, your love eternal! ⏳💞",
  },
  {
    type: "image",
    src: "/images/WhatsApp Image 2025-07-19 at 00.11.22_d65fcc35.jpg",
    note: "In your arms, I've found my forever home! 🏡💕",
  },
  {
    type: "image",
    src: "/images/WhatsApp Image 2025-07-19 at 00.11.23_b6ba232e.jpg",
    note: "Your laughter is music to my soul! 🎵😄",
  },
  {
    type: "image",
    src: "/images/WhatsApp Image 2025-07-19 at 00.11.24_2df001ba.jpg",
    note: "Every day with you is a new adventure in love! 🗺️❤️",
  },
  {
    type: "image",
    src: "/images/WhatsApp Image 2025-07-19 at 00.11.24_b379334b.jpg",
    note: "Your eyes hold the secrets of the universe! 🌌🔍",
  },
  {
    type: "image",
    src: "/images/WhatsApp Image 2025-07-19 at 00.11.25_346c1be8.jpg",
    note: "You are my sunshine, my moon, my everything! ☀️🌙",
  },
  {
    type: "image",
    src: "/images/WhatsApp Image 2025-07-19 at 00.11.25_b504496f.jpg",
    note: "In your smile, I see all my dreams come true! 😊💭",
  },
  {
    type: "image",
    src: "/images/WhatsApp Image 2025-07-19 at 00.11.26_0ffbb5ab.jpg",
    note: "Your touch is magic, your love is real! 🪄❤️",
  },
  {
    type: "image",
    src: "/images/WhatsApp Image 2025-07-19 at 00.11.26_42be3e13.jpg",
    note: "Together we create our own fairy tale! 📖✨",
  },
  {
    type: "image",
    src: "/images/WhatsApp Image 2025-10-05 at 02.27.36_316c0dbd.jpg",
    note: "Your beauty rivals the stars in the night sky! 🌟⭐",
  },
  {
    type: "video",
    src: "/images/WhatsApp Video 2025-09-03 at 15.16.27_649ef15f.mp4",
    thumbnail: "/images/WhatsApp Image 2025-10-05 at 02.27.36_316c0dbd.jpg",
    note: "You make my heart dance with joy! 💃🎉",
  },
  {
    type: "video",
    src: "/images/WhatsApp Video 2025-10-06 at 12.56.43_761cc308.mp4",
    thumbnail: "/images/WhatsApp Image 2025-10-05 at 02.27.36_316c0dbd.jpg",
    note: "Every moment with you is a blessing! 🙏💖",
  },
  {
    type: "video",
    src: "/images/WhatsApp Video 2025-10-06 at 12.56.58_9b97daea.mp4",
    thumbnail: "/images/WhatsApp Image 2025-10-05 at 02.27.36_316c0dbd.jpg",
    note: "Your love is my greatest treasure! 💎❤️",
  },
  {
    type: "video",
    src: "/images/WhatsApp Video 2025-10-07 at 14.12.37_3b13ca4f.mp4",
    thumbnail: "/images/WhatsApp Image 2025-10-05 at 02.27.36_316c0dbd.jpg",
    note: "You are the art that colors my world! 🎨🌍",
  },
]

export default function AboutHer() {
  const [selectedMedia, setSelectedMedia] = useState<{
    type: string
    src: string
    note: string
    thumbnail?: string
  } | null>(null)

  // Close modal on ESC and lock body scroll while open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMedia(null)
    }
    if (selectedMedia) {
      document.addEventListener("keydown", onKey)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [selectedMedia])

  // Touch swipe to close (mobile)
  const touchStartY = useRef<number | null>(null)
  const handleTouchStart = (e: ReactTouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0]?.clientY ?? null
  }
  const handleTouchEnd = (e: ReactTouchEvent<HTMLDivElement>) => {
    if (touchStartY.current == null) return
    const endY = e.changedTouches[0]?.clientY ?? touchStartY.current
    const delta = endY - touchStartY.current
    if (delta > 80) setSelectedMedia(null)
    touchStartY.current = null
  }

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
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-pink-500/30 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25 focus:outline-none focus:ring-2 focus:ring-pink-400/60"
              onClick={() => setSelectedMedia(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e: ReactKeyboardEvent<HTMLDivElement>) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  setSelectedMedia(item)
                }
              }}
            >
              <div
                className={`${item.type === "video" ? "aspect-video bg-black" : "aspect-square"} relative overflow-hidden`}
              >
                <Image
                  src={item.type === "video" ? item.thumbnail || "/images/WhatsApp Image 2025-10-05 at 02.27.36_316c0dbd.jpg" : item.src}
                  alt={`Media ${index + 1}`}
                  fill
                  className={`${item.type === "video" ? "object-contain" : "object-cover group-hover:scale-110"} transition-transform duration-300`}
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
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 max-w-3xl w-full border border-pink-500/30 relative"
              onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/40 text-white grid place-items-center hover:bg-black/50 transition-colors"
                aria-label="Close"
              >
                <span className="text-2xl leading-none">×</span>
              </button>

              <div className="rounded-2xl overflow-hidden mb-6">
                {selectedMedia.type === "video" ? (
                  <div className="aspect-video relative">
                    <video
                      src={selectedMedia.src}
                      controls
                      autoPlay
                      preload="metadata"
                      poster={selectedMedia.thumbnail ?? "/images/WhatsApp Image 2025-10-05 at 02.27.36_316c0dbd.jpg"}
                      className="w-full h-full object-contain"
                      playsInline
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
