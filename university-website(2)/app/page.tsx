import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import CollegeCard from "@/components/college-card"
import HeroCarousel from "@/components/hero-carousel"

export default function Home() {
  const colleges = [
    {
      name: "Pillai College of Architecture",
      description:
        "Fostering creativity and innovation in architectural design with state-of-the-art facilities and experienced faculty. Our programs are accredited by the Council of Architecture.",
      image: "/placeholder.svg?height=300&width=500&text=Architecture",
      link: "/colleges#architecture",
    },
    {
      name: "Pillai College of Arts, Commerce and Science",
      description:
        "Offering diverse programs in arts, commerce, and science with a focus on holistic development and industry-relevant skills. Our graduates excel in various fields globally.",
      image: "/placeholder.svg?height=300&width=500&text=Arts+Commerce+Science",
      link: "/colleges#arts",
    },
    {
      name: "Pillai College of Engineering (Autonomous)",
      description:
        "An autonomous institution known for excellence in engineering education with cutting-edge research facilities. Our engineering programs are AICTE approved and NBA accredited.",
      image: "/placeholder.svg?height=300&width=500&text=Engineering",
      link: "/colleges#engineering",
    },
    {
      name: "Pillai Institute of Management Studies and Research",
      description:
        "Developing future business leaders through comprehensive management education and industry collaborations. Our MBA program is ranked among the top in the region.",
      image: "/placeholder.svg?height=300&width=500&text=Management",
      link: "/colleges#management",
    },
  ]

  return (
    <>
      <HeroCarousel />

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text">Our Colleges</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our diverse range of colleges offering specialized education in various disciplines, each with a
              legacy of excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {colleges.map((college) => (
              <CollegeCard
                key={college.name}
                name={college.name}
                description={college.description}
                image={college.image}
                link={college.link}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 section-alternate gradient-blue-purple">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl text-white mb-6">Why Choose Pillai University?</h2>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Academic Excellence</h3>
                    <p className="text-blue-100">
                      Rigorous academic programs designed to foster critical thinking and innovation, taught by faculty
                      with extensive industry experience and research backgrounds.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Industry Connections</h3>
                    <p className="text-blue-100">
                      Strong partnerships with industry leaders providing internships, job opportunities, and real-world
                      projects. Our placement cell ensures students find rewarding careers.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Modern Infrastructure</h3>
                    <p className="text-blue-100">
                      State-of-the-art facilities including advanced labs, digital libraries, smart classrooms, and
                      recreational spaces spread across our 50-acre green campus.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Global Exposure</h3>
                    <p className="text-blue-100">
                      International collaborations and exchange programs with renowned universities worldwide, providing
                      students with global perspectives and opportunities.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild className="bg-white text-blue-700 hover:bg-blue-50">
                  <Link href="/about">
                    Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Campus+Life"
                alt="Campus Life"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text-blue-teal">Latest News & Events</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest happenings at Pillai University, from academic achievements to cultural
              celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "International Conference on Sustainable Development",
                date: "March 15, 2024",
                description:
                  "Pillai University hosts a global conference bringing together experts to discuss sustainable development goals and climate action.",
                image: "/placeholder.svg?height=300&width=500&text=Conference",
              },
              {
                title: "New Research Center for Artificial Intelligence",
                date: "March 12, 2024",
                description:
                  "The university inaugurates a state-of-the-art research center dedicated to artificial intelligence and machine learning applications.",
                image: "/placeholder.svg?height=300&width=500&text=AI+Research",
              },
              {
                title: "Annual Cultural Festival 'Alegria' Announced",
                date: "March 10, 2024",
                description:
                  "The much-awaited cultural extravaganza 'Alegria' returns with performances, competitions, and celebrity appearances.",
                image: "/placeholder.svg?height=300&width=500&text=Cultural+Festival",
              },
            ].map((item, index) => (
              <div key={index} className="card-hover rounded-xl overflow-hidden">
                <div className="bg-white dark:bg-gray-800">
                  <div className="relative h-48">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">{item.date}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <Link
                      href="#"
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/news">View All News & Events</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text">Student Success Stories</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our graduates are making a difference in various fields around the world. Here are some of their inspiring
              journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                program: "B.Tech in Computer Science",
                year: "2020",
                achievement: "Software Engineer at Google",
                testimonial:
                  "The practical approach to learning at Pillai College of Engineering prepared me for real-world challenges in the tech industry.",
                image: "/placeholder.svg?height=300&width=300&text=Student+1",
              },
              {
                name: "Rahul Patel",
                program: "MBA in Finance",
                year: "2019",
                achievement: "Investment Analyst at Morgan Stanley",
                testimonial:
                  "The industry exposure and case study approach at PIMSR gave me the edge I needed to succeed in the competitive finance sector.",
                image: "/placeholder.svg?height=300&width=300&text=Student+2",
              },
              {
                name: "Aisha Khan",
                program: "B.Arch",
                year: "2021",
                achievement: "Associate at Zaha Hadid Architects",
                testimonial:
                  "The creative freedom and technical rigor at Pillai College of Architecture helped me develop my unique design philosophy.",
                image: "/placeholder.svg?height=300&width=300&text=Student+3",
              },
            ].map((student, index) => (
              <div key={index} className="card-hover rounded-xl overflow-hidden">
                <div className="bg-white dark:bg-gray-800 p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src={student.image || "/placeholder.svg"}
                        alt={student.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{student.name}</h3>
                    <p className="text-primary">{student.achievement}</p>
                    <p className="text-sm text-muted-foreground">
                      {student.program}, {student.year}
                    </p>
                  </div>
                  <blockquote className="italic text-muted-foreground">"{student.testimonial}"</blockquote>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/alumni">More Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-blue-cyan text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Join Our Community</h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              Take the first step towards a bright future with Pillai University. Applications for the 2024-25 academic
              year are now open.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/admissions">Apply Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="/campus-tour">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

