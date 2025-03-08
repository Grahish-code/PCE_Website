import type { ReactNode } from "react"

interface HeroSectionProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  children?: ReactNode
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage = "/placeholder.svg?height=600&width=1600",
  children,
}: HeroSectionProps) => {
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 gradient-blue opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white hero-text-enhanced">
            {title}
          </h1>
          {subtitle && <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-blue-100 max-w-3xl">{subtitle}</p>}
          {children && <div className="mt-6 sm:mt-8">{children}</div>}
        </div>
      </div>
    </div>
  )
}

export default HeroSection

