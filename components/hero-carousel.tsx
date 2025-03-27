"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

interface Slide {
  type: "image" | "card" | "video"
  image: string
  title: string
  subtitle: string
  videoUrl?: string
  cardContent?: {
    title: string
    description: string
    stats?: { label: string; value: string }[]
  }
}

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const slides: Slide[] = [
    {
      type: "image",
      image: "/Group_4.png?height=900&width=1700&text=Campus+Life",
      title: "Shaping Tomorrow's Leaders",
      subtitle:
        "Pillai University offers world-class education across architecture, arts, engineering, and management disciplines.",
    },
    {
      type: "card",
      image: "/Group_4.png?height=900&width=1700&text=Statistics",
      title: "Excellence in Numbers",
      subtitle: "Our achievements speak for themselves",
      cardContent: {
        title: "Pillai University at a Glance",
        description: "A legacy of excellence in education since 1998",
        stats: [
          { label: "Students", value: "10,000+" },
          { label: "Faculty", value: "500+" },
          { label: "Courses", value: "100+" },
          { label: "Placements", value: "95%" },
        ],
      },
    },
    {
      type: "video",
      image: "/Group_4.png?height=900&width=1700&text=Campus+Tour+Video",
      videoUrl: "https://example.com/video.mp4", // This is a placeholder URL
      title: "Experience Our Vibrant Campus",
      subtitle: "Take a virtual tour of our beautiful campus and see what makes Pillai University special.",
    },
    {
      type: "image",
      image: "/Group_4.png?height=800&width=1600&text=Engineering+Labs",
      title: "Cutting-Edge Research Facilities",
      subtitle: "Our state-of-the-art laboratories and research centers foster innovation and practical learning.",
    },
    {
      type: "card",
      image: "/Group_4.png?height=900&width=1700&text=Achievements",
      title: "Recognized Excellence",
      subtitle: "Accreditations and rankings that set us apart",
      cardContent: {
        title: "Nationally Recognized Institution",
        description:
          "Pillai University is accredited by NAAC with an A++ grade and ranked among the top universities in India",
        stats: [
          { label: "NAAC Grade", value: "A++" },
          { label: "NIRF Rank", value: "Top 50" },
          { label: "Research Papers", value: "2000+" },
          { label: "Patents", value: "75+" },
        ],
      },
    },
    {
      type: "video",
      image: "/Group_4.png?height=900&width=1700&text=Student+Testimonials",
      videoUrl: "https://example.com/testimonials.mp4", // This is a placeholder URL
      title: "Student Success Stories",
      subtitle: "Hear directly from our students about their transformative journey at Pillai University.",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    if (isPlaying) {
      setIsPlaying(false)
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    if (isPlaying) {
      setIsPlaying(false)
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }
  }

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPlaying) {
        nextSlide()
      }
    }, 6000)
    return () => clearInterval(interval)
  }, [isPlaying])

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 hero-slide ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {slide.type === "video" ? (
            <div className="absolute inset-0">
              {isPlaying && currentSlide === index ? (
                <video
                  ref={videoRef}
                  src={slide.videoUrl}
                  className="w-full h-full object-cover"
                  controls={false}
                  autoPlay
                  muted
                  playsInline
                  onEnded={() => setIsPlaying(false)}
                />
              ) : (
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-600/50"></div>

              {!isPlaying && currentSlide === index && (
                <button
                  onClick={toggleVideo}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-6 backdrop-blur-sm transition-colors z-20"
                  aria-label="Play video"
                >
                  <Play className="h-12 w-12 text-white" />
                </button>
              )}
            </div>
          ) : slide.type === "card" ? (
            <div className="absolute inset-0">
  <Image
    src={slide.image || "/placeholder.svg"}
    alt={slide.title}
    fill
    className="object-cover"
    priority={index === 0}
  />
  <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-600/70"></div>

  {/* Card Content */}
  <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 max-w-3xl w-full border border-white/20">
      {/* Title */}
      <h3 className="text-3xl font-bold text-white ml-20 mb-4">{slide.cardContent?.title}</h3>
      {/* Description */}
      <p className="text-blue-100 mb-8 text-lg ">{slide.cardContent?.description}</p>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {slide.cardContent?.stats?.map((stat, idx) => (
          <div key={idx} className="text-center">
            {/* Stat Value */}
            <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
            {/* Stat Label */}
            <div className="text-sm text-blue-200 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
          ) : (
            <div className="absolute inset-0">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-600/50"></div>
            </div>
          )}

          {/* Content for all slide types */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white hero-text-enhanced">
                  {slide.title}
                </h1>
                <p className="mt-4 md:mt-6 text-lg md:text-xl text-blue-100 max-w-3xl">{slide.subtitle}</p>
                {slide.type !== "card" && (
                  <div className="mt-6 md:mt-8 flex flex-wrap gap-4">
                    <Button asChild size="lg" className="bg-white text-black hover:bg-blue-50">
                      <Link href="/admissions">Apply Now</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="bg-transparent text-white border-white hover:bg-white/10"
                    >
                      <Link href="/about">Discover More</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              if (isPlaying) {
                setIsPlaying(false)
                if (videoRef.current) {
                  videoRef.current.pause()
                }
              }
            }}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroCarousel

