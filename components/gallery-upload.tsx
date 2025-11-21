"use client"

import { useState, useRef, useEffect, type ChangeEvent, type KeyboardEvent as ReactKeyboardEvent, type TouchEvent as ReactTouchEvent } from "react"
import Image from "next/image"
import { Upload, Download, Trash2, ChevronDown, Camera, Image as ImageIcon } from "lucide-react"

interface MediaItem {
  id: string
  type: "image" | "video"
  src: string
  uploadedAt: Date
  thumbnail?: string
}

export default function GalleryUpload() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)
  const [videoLoading, setVideoLoading] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc")
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const cameraInputRef = useRef<HTMLInputElement>(null)
  const galleryInputRef = useRef<HTMLInputElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile device on mount
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
      setIsMobile(isMobileDevice)
    }
    checkMobile()
  }, [])

  // Load media from localStorage on mount
  useEffect(() => {
    const savedMedia = localStorage.getItem("galleryMedia")
    if (savedMedia) {
      try {
        const parsed = JSON.parse(savedMedia)
        setMediaItems(
          parsed.map((item: any) => ({
            ...item,
            uploadedAt: new Date(item.uploadedAt),
          }))
        )
      } catch (error) {
        console.error("Failed to load gallery:", error)
      }
    }
  }, [])

  // Save media to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("galleryMedia", JSON.stringify(mediaItems))
  }, [mediaItems])

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

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files
    if (files) {
      processFiles(Array.from(files))
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files) {
      processFiles(Array.from(files))
    }
  }

  const processFiles = (files: File[]) => {
    files.forEach((file) => {
      // Validate file type
      const isImage = file.type.startsWith("image/")
      const isVideo = file.type.startsWith("video/")

      if (!isImage && !isVideo) {
        alert("Please upload only images or videos")
        return
      }

      // Validate file size (max 50MB)
      if (file.size > 50 * 1024 * 1024) {
        alert("File size must be less than 50MB")
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const src = e.target?.result as string
        const newItem: MediaItem = {
          id: Date.now().toString() + Math.random(),
          type: isImage ? "image" : "video",
          src,
          uploadedAt: new Date(),
        }
        setMediaItems((prev) => [newItem, ...prev])
      }
      reader.readAsDataURL(file)
    })
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this item?")) {
      setMediaItems((prev) => prev.filter((item) => item.id !== id))
      if (selectedMedia?.id === id) {
        setSelectedMedia(null)
      }
    }
  }

  const handleDownload = (item: MediaItem) => {
    const link = document.createElement("a")
    link.href = item.src
    link.download = `media-${item.id}.${item.type === "image" ? "jpg" : "mp4"}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const sortedMedia = [...mediaItems].sort((a, b) => {
    if (sortOrder === "desc") {
      return b.uploadedAt.getTime() - a.uploadedAt.getTime()
    } else {
      return a.uploadedAt.getTime() - b.uploadedAt.getTime()
    }
  })

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="min-h-screen px-4 pt-24 pb-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Our Memories Gallery
        </h1>
        <p className="text-center text-pink-200 mb-12">Upload and store your precious moments together</p>

        {/* Upload Section */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`mb-12 p-6 sm:p-8 rounded-3xl border-2 border-dashed transition-all duration-300 ${
            isDragging
              ? "border-pink-400 bg-pink-500/20 scale-105"
              : "border-pink-300/50 bg-white/5 hover:border-pink-400/50"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,video/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*,video/*"
            capture="environment"
            onChange={handleFileSelect}
            className="hidden"
          />
          <input
            ref={galleryInputRef}
            type="file"
            multiple
            accept="image/*,video/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          <div className="flex flex-col items-center justify-center">
            <Upload className="w-12 sm:w-16 h-12 sm:h-16 text-pink-400 mb-4" />
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">Upload Photos & Videos</h2>
            <p className="text-pink-200 mb-6 sm:mb-8 text-center text-sm sm:text-base">
              {isMobile ? "Capture or select your precious moments" : "Drag and drop your images and videos here, or click to browse"}
            </p>
            
            {/* Mobile Buttons */}
            {isMobile ? (
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  onClick={() => cameraInputRef.current?.click()}
                  className="flex-1 sm:flex-none px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full active:scale-95 transition-all duration-200 transform hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
                >
                  <Camera className="w-5 h-5" />
                  <span>Camera</span>
                </button>
                <button
                  onClick={() => galleryInputRef.current?.click()}
                  className="flex-1 sm:flex-none px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full active:scale-95 transition-all duration-200 transform hover:shadow-lg hover:shadow-pink-500/50 flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
                >
                  <ImageIcon className="w-5 h-5" />
                  <span>Gallery</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Choose Files
              </button>
            )}
            <p className="text-xs sm:text-sm text-pink-300 mt-4">Supported: Images & Videos (Max 50MB each)</p>
          </div>
        </div>

        {/* Sort Controls */}
        {mediaItems.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <p className="text-pink-200 text-sm sm:text-base">
              Total: <span className="font-bold text-pink-400">{mediaItems.length}</span> items
            </p>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-pink-200 text-sm sm:text-base hidden sm:inline">Sort by date:</span>
              <button
                onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")}
                className="flex items-center gap-2 px-4 py-2 sm:py-2 bg-white/10 hover:bg-white/20 active:scale-95 border border-pink-400/50 rounded-full text-pink-300 transition-all duration-200 text-sm sm:text-base touch-manipulation flex-1 sm:flex-none justify-center"
              >
                {sortOrder === "desc" ? "Newest First" : "Oldest First"}
                <ChevronDown className={`w-4 h-4 transition-transform ${sortOrder === "asc" ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>
        )}

        {/* Media Grid */}
        {sortedMedia.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
            {sortedMedia.map((item) => (
              <div
                key={item.id}
                className="group relative bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border border-white/30 shadow-lg sm:shadow-xl cursor-pointer transform transition-all duration-200 active:scale-95 hover:scale-[1.03] sm:hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/40 focus:outline-none focus:ring-4 focus:ring-pink-400/50 hover:border-pink-400/50 hover:bg-gradient-to-br hover:from-pink-500/20 hover:via-purple-500/20 hover:to-transparent touch-manipulation"
              >
                {/* Media Preview */}
                <div
                  onClick={() => setSelectedMedia(item)}
                  className="relative w-full aspect-square overflow-hidden"
                >
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt="Gallery item"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <>
                      <video
                        src={item.src}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                        <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-t-8 border-t-white ml-1" />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Date Badge */}
                <div className="absolute top-2 left-2 bg-black/60 backdrop-blur px-2 py-1 rounded-lg text-xs text-pink-200 opacity-0 group-hover:opacity-100 sm:opacity-0 transition-opacity">
                  {formatDate(item.uploadedAt)}
                </div>

                {/* Action Buttons - Always visible on mobile, hover on desktop */}
                <div className="absolute top-2 right-2 flex gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDownload(item)
                    }}
                    className="p-2 sm:p-2 bg-blue-500/90 hover:bg-blue-600 active:scale-90 rounded-lg transition-all touch-manipulation"
                    title="Download"
                  >
                    <Download className="w-4 h-4 text-white" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDelete(item.id)
                    }}
                    className="p-2 sm:p-2 bg-red-500/90 hover:bg-red-600 active:scale-90 rounded-lg transition-all touch-manipulation"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-2xl text-pink-300 mb-4">No memories yet</p>
            <p className="text-pink-200">Start uploading photos and videos to create your gallery!</p>
          </div>
        )}

        {/* Modal */}
        {selectedMedia && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={handleCloseModal}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] bg-black/40 backdrop-blur-xl rounded-3xl border border-pink-400/50 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all"
              >
                <span className="text-white text-2xl">×</span>
              </button>

              {/* Media Display */}
              <div className="flex flex-col items-center justify-center h-full">
                {selectedMedia.type === "image" ? (
                  <img
                    src={selectedMedia.src}
                    alt="Full view"
                    className="max-w-full max-h-[80vh] object-contain"
                  />
                ) : (
                  <>
                    {videoLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <div className="w-12 h-12 border-4 border-pink-400 border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                    {videoError && (
                      <div className="text-center text-red-400">
                        <p>Error loading video</p>
                      </div>
                    )}
                    <video
                      ref={videoRef}
                      src={selectedMedia.src}
                      controls
                      autoPlay
                      className="max-w-full max-h-[80vh] object-contain"
                      onLoadedData={() => setVideoLoading(false)}
                      onError={() => {
                        setVideoLoading(false)
                        setVideoError(true)
                      }}
                    />
                  </>
                )}
              </div>

              {/* Info Footer */}
              <div className="bg-black/60 backdrop-blur px-4 sm:px-6 py-4 border-t border-pink-400/30">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <p className="text-pink-200 text-xs sm:text-sm">Uploaded: {formatDate(selectedMedia.uploadedAt)}</p>
                    <p className="text-pink-300 text-xs sm:text-sm mt-1">Type: {selectedMedia.type.toUpperCase()}</p>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => handleDownload(selectedMedia)}
                      className="flex-1 sm:flex-none px-4 py-2 bg-blue-500 hover:bg-blue-600 active:scale-95 text-white rounded-lg transition-all flex items-center justify-center gap-2 text-sm touch-manipulation"
                    >
                      <Download className="w-4 h-4" />
                      <span className="hidden sm:inline">Download</span>
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(selectedMedia.id)
                        handleCloseModal()
                      }}
                      className="flex-1 sm:flex-none px-4 py-2 bg-red-500 hover:bg-red-600 active:scale-95 text-white rounded-lg transition-all flex items-center justify-center gap-2 text-sm touch-manipulation"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Delete</span>
                    </button>
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
