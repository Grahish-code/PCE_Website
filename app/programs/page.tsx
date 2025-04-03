import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import { GraduationCap, BookOpen, Building, Briefcase } from "lucide-react"

export default function ProgramsPage() {
  const programs = [
    {
      id: "engineering",
      title: "Engineering",
      description: "Cutting-edge engineering programs with state-of-the-art facilities and industry connections.",
      icon: <GraduationCap className="h-8 w-8" />,
      image: "/placeholder.svg?height=400&width=600&text=Engineering",
      link: "/programs/engineering",
    },
    {
      id: "arts-commerce-science",
      title: "Arts, Commerce and Science",
      description: "Diverse undergraduate and postgraduate programs across humanities, commerce, and sciences.",
      icon: <BookOpen className="h-8 w-8" />,
      image: "/placeholder.svg?height=400&width=600&text=Arts+Commerce+Science",
      link: "/programs/arts-commerce-science",
    },
    {
      id: "management",
      title: "Management Studies & Research",
      description:
        "Comprehensive management education with a focus on developing leadership skills and business acumen.",
      icon: <Briefcase className="h-8 w-8" />,
      image: "/placeholder.svg?height=400&width=600&text=Management",
      link: "/programs/management",
    },
    {
      id: "architecture",
      title: "Architecture",
      description: "Creative architecture programs that blend design principles with technical expertise.",
      icon: <Building className="h-8 w-8" />,
      image: "/placeholder.svg?height=400&width=600&text=Architecture",
      link: "/programs/architecture",
    },
  ]

  return (
    <>
      <HeroSection
        title="Academic Programs"
        subtitle="Explore our diverse range of undergraduate and postgraduate programs across multiple disciplines"
        backgroundImage="/placeholder.svg?height=600&width=1600&text=Academic+Programs"
      />

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">Our Programs</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Pillai College offers a wide range of academic programs designed to prepare students for successful
              careers in their chosen fields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="card-hover rounded-xl overflow-hidden">
                <div className="bg-white dark:bg-gray-800">
                  <div className="relative h-48">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white flex items-center">
                      <div className="mr-3">{program.icon}</div>
                      <h3 className="text-xl font-bold">{program.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    <Button asChild>
                      <Link href={program.link}>Explore Programs</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6 hero-text-enhanced">Why Choose Pillai College?</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-12">
              Our academic programs are designed to provide students with the knowledge, skills, and experiences they
              need to succeed in today's competitive world.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Industry-Relevant Curriculum",
                  description:
                    "Programs designed in consultation with industry experts to ensure relevance and employability.",
                },
                {
                  title: "Experienced Faculty",
                  description:
                    "Learn from distinguished professors and industry professionals with extensive experience.",
                },
                {
                  title: "State-of-the-Art Facilities",
                  description: "Access to modern laboratories, libraries, and other learning resources.",
                },
                {
                  title: "Global Exposure",
                  description:
                    "International collaborations and exchange programs with renowned universities worldwide.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

