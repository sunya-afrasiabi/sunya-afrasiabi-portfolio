"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectGalleryProps {
  items: string[]
  title: string
  isPortrait: boolean
}

export function ProjectGallery({ items, title, isPortrait }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!items || items.length === 0) return null

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const currentItem = items[currentIndex]

  // Smart URL parser for YouTube
  let youtubeSrc = null
  if (currentItem.includes("youtube.com/embed/")) {
    youtubeSrc = currentItem
  } else if (currentItem.includes("youtu.be/")) {
    youtubeSrc = currentItem.replace("youtu.be/", "www.youtube.com/embed/")
  } else if (currentItem.includes("watch?v=")) {
    youtubeSrc = currentItem.replace("watch?v=", "embed/")
  }

  const isLocalVideo = currentItem.toLowerCase().includes(".mov") || currentItem.toLowerCase().includes(".mp4")
  const isVideo = youtubeSrc || isLocalVideo

  return (
    <div className="mt-10 flex w-full items-center justify-center gap-2 sm:gap-4">
      
      {/* Navigation Arrow (Left) */}
      {items.length > 1 && (
        <button
          onClick={handlePrev}
          className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all hover:border-primary hover:text-primary"
          aria-label="Previous media"
        >
          <ChevronLeft className="size-6" />
        </button>
      )}

      {/* Media Container */}
      <div className="relative w-full overflow-hidden rounded-md border border-border bg-secondary/30 shadow-sm">
        <div 
          className={`flex items-center justify-center w-full ${
            isPortrait && !isVideo
              ? "max-w-md mx-auto aspect-[3/4] h-[550px]" 
              : "aspect-video max-h-[600px]"
          }`}
        >
          {youtubeSrc ? (
            <iframe
              src={youtubeSrc}
              title={`${title} Video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full border-0 bg-black"
            />
          ) : isLocalVideo ? (
            <video
              src={currentItem}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-contain bg-black"
            />
          ) : (
            <div className="relative h-full w-full p-4 flex items-center justify-center">
              <Image
                src={currentItem}
                alt={`${title} - Media ${currentIndex + 1}`}
                width={1200}
                height={800}
                className="max-w-full max-h-full w-auto h-auto object-contain"
                priority={currentIndex === 0}
              />
            </div>
          )}
        </div>

        {/* Dot Indicators */}
        {items.length > 1 && (
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`size-2 rounded-full transition-all ${
                  idx === currentIndex ? "bg-primary w-4" : "bg-muted-foreground/50 hover:bg-muted-foreground"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Navigation Arrow (Right) */}
      {items.length > 1 && (
        <button
          onClick={handleNext}
          className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all hover:border-primary hover:text-primary"
          aria-label="Next media"
        >
          <ChevronRight className="size-6" />
        </button>
      )}
      
    </div>
  )
}
