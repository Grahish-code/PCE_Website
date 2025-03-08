import type React from "react"
import { Award } from "lucide-react"

interface AchievementCardProps {
  title: string
  description: string
  year: string
  icon?: React.ReactNode
}

const AchievementCard = ({ title, description, year, icon = <Award className="h-8 w-8" /> }: AchievementCardProps) => {
  return (
    <div className="card-hover relative rounded-xl overflow-hidden">
      <div className="gradient-blue p-4 sm:p-6">
        <div className="flex items-start">
          <div className="mr-3 sm:mr-4 text-white hidden sm:block">{icon}</div>
          <div>
            <div className="inline-block px-2 py-1 rounded-full bg-blue-800 text-xs font-medium text-white mb-2">
              {year}
            </div>
            <h3 className="text-base sm:text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-blue-100 text-sm sm:text-base">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AchievementCard

