"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export type MediaItem = {
  src: string
  alt: string
  caption?: string
}

interface ProjectGalleryProps {
  items: MediaItem[]
  title: string
  isPortrait: boolean
}

export function ProjectGallery({ items, title, isPortrait }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!items || items.length === 0) return null

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % items.length)
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)

  const currentItem = items[currentIndex]
  const currentSrc = currentItem.src

  // Smart URL parser for YouTube
  let youtubeSrc = null
  if (currentSrc.includes("youtube.com/embed/")) {
    youtubeSrc = currentSrc
  } else if (currentSrc.includes("youtu.be/")) {
    youtubeSrc = currentSrc.replace("youtu.be/", "www.youtube.com/embed/")
  } else if (currentSrc.includes("watch?v=")) {
    youtubeSrc = currentSrc.replace("watch?v=", "embed/")
  }

  const isLocalVideo = currentSrc.toLowerCase().includes(".mov") || currentSrc.toLowerCase().includes(".mp4")
  const isVideo = youtubeSrc || isLocalVideo

  return (
    <div className="mt-10 w-full overflow-hidden rounded-md border border-border shadow-sm">
      
      {/* Media & Controls Container */}
      <div className="relative group bg-secondary/30">
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
              title={currentItem.alt}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full border-0 bg-black"
            />
          ) : isLocalVideo ? (
            <video
              src={currentSrc}
              controls
              autoPlay
              muted
              loop
              playsInline
              aria-label={currentItem.alt}
              className="h-full w-full object-contain bg-black"
            />
          ) : (
            <div className="relative h-full w-full p-4 flex items-center justify-center">
              <Image
                src={currentSrc}
                alt={currentItem.alt}
                width={1200}
                height={800}
                className="max-w-full max-h-full w-auto h-auto object-contain"
                priority={currentIndex === 0}
              />
            </div>
          )}
        </div>

        {/* Navigation Arrows */}
        {items.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur transition-all hover:bg-primary hover:text-primary-foreground opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-6" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur transition-all hover:bg-primary hover:text-primary-foreground opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="size-6" />
            </button>

            {/* Dot Indicators */}
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
          </>
        )}
      </div>

      {/* Caption Strip */}
      {currentItem.caption && (
        <div className="border-t border-border bg-card p-4 text-center font-sans text-sm leading-relaxed text-muted-foreground">
          {currentItem.caption}
        </div>
      )}
    </div>
  )
}
