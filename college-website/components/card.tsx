import type { ReactNode } from "react"
import Link from "next/link"

interface CardProps {
  title: string
  description: string
  link?: string
  icon?: ReactNode
  className?: string
}

export default function Card({ title, description, link, icon, className = "" }: CardProps) {
  const CardContent = () => (
    <div className={`gradient-border bg-white p-6 h-full transition-all duration-300 hover:shadow-lg ${className}`}>
      {icon && <div className="mb-4 text-primary">{icon}</div>}
      <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
      <p className="text-text">{description}</p>
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

