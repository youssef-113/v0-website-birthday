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
    note: "Every moment with you is a treasure I'll cherish forever! 💕",
  },
  {
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/instagram_video_story_1742856170549-qmnvrUsfnGoJqrh1tVCzL7cF4qWVJM.mp4",
    note: "Your laughter is the sweetest melody I've ever heard! 🎵💖",
  },
  {
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AQOxUSZfqeIJuyjcXHPB2yK67c0b1L_FXZgHO5I33f-LjiidBiIS1r068bhYmeTl-QlF3KmWGD-DEVBJAVcPUd5f8xjKVNkr9cwvi9k-VUj5fjTeT0JAOovNnzFsViqqIja0y7.mp4",
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
    type: "video",
    src: "/images/highlights - 18090282787518145 (2).mp4",
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
    note: "Your beauty rivals the stars in the night sky! 🌟⭐",
  },
  {
    type: "image",
    src: "/images/WhatsApp Image 2025-07-19 at 00.11.26_42be3e13.jpg",
    note: "Together we create our own fairy tale! 📖✨",
  },
  {
    type: "image",
    src: "/images/WhatsApp Image 2025-10-05 at 02.27.36_316c0dbd.jpg",
    note: "Your touch is magic, your love is real! 🪄❤️",
  },
  {
    type: "video",
    src: "/images/WhatsApp Video 2025-09-03 at 15.16.27_649ef15f.mp4",
    note: "You make my heart dance with joy! 💃🎉",
  },
  {
    type: "video",
    src: "/images/WhatsApp Video 2025-10-06 at 12.56.43_761cc308.mp4",
    note: "Every moment with you is a blessing! 🙏💖",
  },
  {
    type: "video",
    src: "/images/WhatsApp Video 2025-10-06 at 12.56.58_9b97daea.mp4",
    note: "Your love is my greatest treasure! 💎❤️",
  },
  {
    type: "video",
    src: "/images/WhatsApp Video 2025-10-07 at 14.12.37_3b13ca4f.mp4",
    note: "Proud of you and your achievements!🎉",
  },
  {
    type: "image",
    src: "/images/photo_2023-10-08_20-29-54.jpg",
    note: "Your natural beauty takes my breath away every single day! You're absolutely gorgeous! 😍✨",
  },
  {
    type: "image",
    src: "/images/photo_2023-10-08_20-29-55.jpg",
    note: "The way you shine in every photo reminds me why I fell in love with you! 🌟💕",
  },
  {
    type: "image",
    src: "/images/photo14.jpg",
    note: "You make every moment feel like a dream come true. I'm so lucky to have you! 🌈💖",
  },
  {
    type: "image",
    src: "/images/photo15.jpg",
    note: "Your presence in my life is the greatest gift I could ever ask for! 🎁❤️",
  },
  {
    type: "image",
    src: "/images/photo16.jpg",
    note: "Looking at you makes me realize how blessed I am to call you mine! 🙏💞",
  },
  {
    type: "image",
    src: "/images/photo17.jpg",
    note: "Every photo of you is a masterpiece, but nothing compares to seeing you in person! 🎨✨",
  },
  {
    type: "video",
    src: "/images/photo18.mp4",
    note: "Watching you live your life fills my heart with so much love and pride! 🎬💗",
  },
  {
    type: "video",
    src: "/images/video21.mp4",
    note: "Your energy and spirit light up my entire world! You're my everything! ⚡💖",
  },
  {
    type: "video",
    src: "/images/video22.mp4",
    note: "Every second with you is a precious memory I'll treasure forever! ⏰💕",
  },
  {
    type: "video",
    src: "/images/video23.mp4",
    note: "Your laughter is the most beautiful sound in the universe! Music to my ears! 🎵😄",
  },
  {
    type: "video",
    src: "/images/video26.mp4",
    note: "You bring color and joy to my life in ways I never imagined possible! 🌺🎨",
  },
  {
    type: "video",
    src: "/images/video27.mp4",
    note: "Watching you be yourself is my favorite thing in the world! Stay amazing! 🌟💫",
  },
  {
    type: "video",
    src: "/images/video28.mp4",
    note: "Your happiness is contagious and makes my heart overflow with love! 😊💓",
  },
  {
    type: "video",
    src: "/images/video29.mp4",
    note: "Every video of you reminds me how incredibly lucky I am to love you! 🍀❤️",
  },
  {
    type: "video",
    src: "/images/video30.mp4",
    note: "You make ordinary moments extraordinary just by being you! Pure magic! ✨🎩",
  },
  {
    type: "video",
    src: "/images/video31.mp4",
    note: "Your beautiful soul shines through in everything you do! I adore you! 💎💖",
  },
  {
    type: "video",
    src: "/images/video32.mp4",
    note: "Being with you feels like living in a beautiful dream I never want to wake up from! 💭💕",
  },
  {
    type: "video",
    src: "/images/video33.mp4",
    note: "You're my inspiration, my motivation, and my reason to smile every day! 🌅😊",
  },
  {
    type: "video",
    src: "/images/video34.mp4",
    note: "Your love has transformed my life in the most beautiful ways imaginable! 🦋💞",
  },
  {
    type: "video",
    src: "/images/video35.mp4",
    note: "With you, every day is an adventure filled with love and laughter! 🎢❤️",
  },
  {
    type: "video",
    src: "/images/WhatsApp Video 2025-05-06 at 00.04.44_23cc0e9c.mp4",
    note: "These moments capture the essence of our beautiful love story! 📖💕",
  },
  {
    type: "video",
    src: "/images/WhatsApp Video 2025-05-06 at 00.07.01_0a7133b8.mp4",
    note: "Your presence turns every moment into a celebration of love! 🎉💖",
  },
  {
    type: "video",
    src: "/images/WhatsApp Video 2025-06-09 at 16.29.51_c00c704c.mp4",
    note: "Forever grateful for every second I get to spend loving you! 🙏💗",
  },
  {
    type: "video",
    src: "/images/WhatsApp Video 2025-10-30 at 18.25.29_b44e9011.mp4",
    note: "Your smile turns ordinary moments into pure magic. You’re the most beautiful girl in my world. ✨💖",
  },
  {
    type: "video",
    src: "/images/WhatsApp Video 2025-10-30 at 18.25.29_b75e17c4.mp4",
    note: "Every glance from you feels like sunrise—warm, bright, and full of hope. ☀️💕",
  },
  {
    type: "video",
    src: "/images/WhatsApp Video 2025-10-30 at 18.25.29_ba74bc0a.mp4",
    note: "Your laughter is my favorite melody—sweet, soft, and forever in my heart. 🎶💞",
  },
  {
    type: "video",
    src: "/images/WhatsApp Video 2025-10-30 at 18.25.30_5d6a5430.mp4",
    note: "In your eyes I find peace, in your heart I find home. You are beautifully, wonderfully you. 🏡💗",
  },
  {
    type: "video",
    src: "/images/WhatsApp Video 2025-10-30 at 18.25.30_9f5c5281.mp4",
    note: "You’re the kind of beautiful that glows from within—kind, gentle, and unforgettable. 🌸✨",
  },
  {
    type: "video",
    src: "/images/WhatsApp Video 2025-10-30 at 18.25.30_dbb1f9e9.mp4",
    note: "Every second with you is a blessing I’ll cherish forever. I love you endlessly. 💍💖",
  },
]

export default function AboutHer() {
  const [selectedMedia, setSelectedMedia] = useState<{
    type: string
    src: string
    note: string
    thumbnail?: string
  } | null>(null)
  const [videoLoading, setVideoLoading] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Close modal on ESC and lock body scroll while open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMedia(null)
        if (videoRef.current) {
          videoRef.current.pause()
        }
      }
    }
    if (selectedMedia) {
      document.addEventListener("keydown", onKey)
      document.body.style.overflow = "hidden"
      setVideoLoading(selectedMedia.type === "video")
      setVideoError(false)
    } else {
      setVideoLoading(false)
      setVideoError(false)
    }
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
      if (videoRef.current) {
        videoRef.current.pause()
      }
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
    if (delta > 80) {
      setSelectedMedia(null)
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }
    touchStartY.current = null
  }

  const handleCloseModal = () => {
    setSelectedMedia(null)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div className="min-h-screen px-4 pt-24 pb-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          About My Beautiful Girl
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {media.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border border-white/30 shadow-lg sm:shadow-xl cursor-pointer transform transition-all duration-700 hover:scale-[1.03] sm:hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/40 focus:outline-none focus:ring-4 focus:ring-pink-400/50 hover:border-pink-400/50 hover:bg-gradient-to-br hover:from-pink-500/20 hover:via-purple-500/20 hover:to-transparent"
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
                className={`${item.type === "video" ? "aspect-[4/3] sm:aspect-video" : "aspect-square sm:aspect-[4/5]"} relative overflow-hidden bg-gradient-to-br from-black/40 to-black/20`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/15 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
                {item.type === "video" ? (
                  <>
                    <video
                      src={item.src}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                      preload="auto"
                      muted
                      playsInline
                      onLoadedMetadata={(e) => {
                        const video = e.currentTarget;
                        video.currentTime = 0.1;
                      }}
                      style={{ 
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0
                      }}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="relative">
                        <div className="absolute inset-0 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 blur-2xl opacity-60 group-hover:opacity-80 group-hover:scale-125 transition-all duration-500 animate-pulse" />
                        <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500 border-3 border-white/50">
                          <svg className="w-7 h-7 sm:w-10 sm:h-10 text-white ml-1 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Image
                    src={item.src}
                    alt={`Photo ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    unoptimized
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    {item.type === "video" ? (
                      <>
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-pink-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                        </svg>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse" />
                      </>
                    ) : (
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-pink-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span className="text-[10px] sm:text-xs font-medium text-pink-200 uppercase tracking-wider">
                      {item.type === "video" ? "Video" : "Photo"}
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-xs sm:text-sm font-medium leading-tight">Tap to see my note 💕</p>
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

        {/* Modal */}
        {selectedMedia && (
          <div
            className="fixed inset-0 bg-gradient-to-br from-black/95 via-pink-900/20 to-purple-900/20 backdrop-blur-xl z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-400"
            onClick={handleCloseModal}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="bg-gradient-to-br from-white/25 via-pink-500/10 to-purple-500/10 backdrop-blur-3xl rounded-3xl sm:rounded-4xl p-4 sm:p-6 md:p-8 max-w-6xl w-full border border-white/30 shadow-2xl relative animate-in slide-in-from-bottom-10 duration-500"
              onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
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
                    {selectedMedia.type === "video" ? (
                      <div className="aspect-video relative bg-black">
                        {videoLoading && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-10">
                            <div className="text-center">
                              <div className="relative w-20 h-20 mx-auto mb-4">
                                <div className="absolute inset-0 rounded-full border-4 border-pink-500/30" />
                                <div className="absolute inset-0 rounded-full border-4 border-pink-500 border-t-transparent animate-spin" />
                              </div>
                              <p className="text-white font-medium">Loading video...</p>
                            </div>
                          </div>
                        )}
                        
                        {videoError && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-10">
                            <div className="text-center p-6">
                              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
                                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <p className="text-white font-medium mb-2">Unable to load video</p>
                              <button
                                onClick={() => {
                                  setVideoError(false)
                                  setVideoLoading(true)
                                  if (videoRef.current) {
                                    videoRef.current.load()
                                  }
                                }}
                                className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-sm font-medium transition-colors"
                              >
                                Try Again
                              </button>
                            </div>
                          </div>
                        )}
                        
                        <video
                          ref={videoRef}
                          src={selectedMedia.src}
                          controls
                          controlsList="nodownload"
                          autoPlay
                          preload="auto"
                          className="w-full h-full object-contain bg-black rounded-2xl"
                          playsInline
                          crossOrigin="anonymous"
                          onLoadedData={() => setVideoLoading(false)}
                          onCanPlay={() => setVideoLoading(false)}
                          onError={() => {
                            setVideoLoading(false)
                            setVideoError(true)
                          }}
                          onWaiting={() => setVideoLoading(true)}
                          onPlaying={() => setVideoLoading(false)}
                        />
                        
                        {!videoLoading && !videoError && (
                          <>
                            <div className="absolute top-4 left-4 pointer-events-none">
                              <div className="flex items-center gap-3 bg-black/70 backdrop-blur-lg rounded-full px-4 py-2 border border-pink-400/40 shadow-lg">
                                <div className="relative">
                                  <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
                                  <div className="absolute inset-0 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                                </div>
                                <span className="text-sm text-white font-bold tracking-wide">NOW PLAYING</span>
                              </div>
                            </div>
                            <div className="absolute bottom-4 right-4 pointer-events-none">
                              <div className="bg-black/70 backdrop-blur-lg rounded-full px-3 py-1.5 border border-white/30 shadow-lg">
                                <span className="text-xs text-pink-300 font-medium">Video Memory</span>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    ) : (
                      <div className="aspect-square sm:aspect-[4/3] relative group">
                        <Image
                          src={selectedMedia.src || "/placeholder.svg"}
                          alt="Selected media"
                          fill
                          className="object-contain transition-transform duration-1000 group-hover:scale-105"
                          unoptimized
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 70vw"
                        />
                        <div className="absolute top-4 left-4">
                          <div className="flex items-center gap-3 bg-black/60 backdrop-blur-lg rounded-full px-4 py-2 border border-pink-400/30">
                            <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" />
                            <span className="text-sm text-white font-bold tracking-wide">PHOTO</span>
                          </div>
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <div className="bg-black/60 backdrop-blur-lg rounded-full px-3 py-1.5 border border-white/20">
                            <span className="text-xs text-pink-300 font-medium">Photo Memory</span>
                          </div>
                        </div>
                      </div>
                    )}
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
                              {selectedMedia.type === "video" ? (
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z"/>
                                </svg>
                              ) : (
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                </svg>
                              )}
                            </div>
                          </div>
                          <div>
                            <span className="text-sm sm:text-base font-bold text-white uppercase tracking-wider drop-shadow-lg">
                              {selectedMedia.type === "video" ? "Video Note" : "Photo Note"}
                            </span>
                            <p className="text-xs sm:text-sm text-pink-100 mt-1 font-medium">A special memory just for you 💕</p>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 mb-6">
                          <p className="text-base sm:text-lg leading-relaxed text-white font-medium animate-in slide-in-from-bottom-4 duration-700">
                            {selectedMedia.note}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                            <span className="text-xs text-pink-200 uppercase tracking-wider">Forever Yours</span>
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
      </div>
    </div>
  )
}
