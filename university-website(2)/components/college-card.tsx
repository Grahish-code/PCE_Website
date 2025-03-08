import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CollegeCardProps {
  name: string
  description: string
  image: string
  link: string
}

const CollegeCard = ({ name, description, image, link }: CollegeCardProps) => {
  return (
    <div className="card-hover relative rounded-xl overflow-hidden h-full">
      <div className="gradient-blue h-full flex flex-col">
        <div className="relative h-48">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{name}</h3>
          <p className="text-blue-100 mb-4 flex-grow text-sm sm:text-base">{description}</p>
          <Link
            href={link}
            className="inline-flex items-center text-white hover:text-blue-200 transition-colors text-sm sm:text-base"
          >
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CollegeCard

