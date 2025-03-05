import Link from "next/link"

interface HeroProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
  backgroundImage?: string
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink = "/",
  backgroundImage = "/placeholder.svg?height=800&width=1600",
}: HeroProps) {
  return (
    <div
      className="relative bg-primary text-white py-24 md:py-32"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 76, 129, 0.85), rgba(15, 76, 129, 0.9)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">{subtitle}</p>
        {ctaText && (
          <Link
            href={ctaLink}
            className="inline-block bg-accent text-primary font-bold py-3 px-8 rounded-md hover:bg-white transition-colors duration-300"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </div>
  )
}

