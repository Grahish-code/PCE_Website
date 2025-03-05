import Image from "next/image"
import Link from "next/link"

interface ImageCardProps {
  title: string
  description: string
  imageSrc: string
  link?: string
  className?: string
}

export default function ImageCard({ title, description, imageSrc, link, className = "" }: ImageCardProps) {
  const CardContent = () => (
    <div
      className={`gradient-border bg-white overflow-hidden h-full transition-all duration-300 hover:shadow-lg ${className}`}
    >
      <div className="relative h-48">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="styled-image object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-text">{description}</p>
      </div>
    </div>
  )

  if (link) {
    return (
      <Link href={link} className="block h-full">
        <CardContent />
      </Link>
    )
  }

  return <CardContent />
}

