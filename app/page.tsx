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
        "Pillai College of Architecture (PCA) is a renowned institution dedicated to excellence in architectural education. Affiliated with the University of Mumbai and approved by the Council of Architecture (COA), PCA offers innovative programs that blend creativity, technology, and sustainability. With a focus on hands-on learning, research, and industry collaboration, PCA prepares students to become skilled architects ready to shape the future of design and urban development.",
      image: "/placeholder.svg?height=300&width=500&text=Architecture",
      link: "/colleges#architecture",
    },
    {
      name: "Pillai College of Arts, Commerce and Science",
      description:
        "Pillai College of Arts, Commerce & Science (PCACS) is a renowned institution offering diverse undergraduate and postgraduate programs. Affiliated with the University of Mumbai, the college is accredited with an A+ grade by NAAC. With a strong focus on academic excellence, skill development, and holistic growth, PCACS provides a dynamic learning environment equipped with modern facilities, industry collaborations, and extracurricular opportunities.",
      image: "/placeholder.svg?height=300&width=500&text=Arts+Commerce+Science",
      link: "/colleges#arts",
    },
    {
      name: "Pillai College of Engineering (Autonomous)",
      description:
        "Pillai College of Engineering (PCE), established in 1999, is a distinguished engineering college in India, accredited with an A+ grade by NAAC. Approved by AICTE and affiliated with the University of Mumbai, PCE is recognized by the Government of Maharashtra and DTE. The college attained Autonomous status from the University Grants Commission (UGC) in 2021, ensuring academic excellence and innovation in engineering education.",
      image: "/placeholder.svg?height=300&width=500&text=Engineering",
      link: "/colleges#engineering",
    },
    {
      name: "Pillai Institute of Management Studies and Research",
      description:
        "Pillai Institute of Management Studies and Research (PIMSR) is a leading management institute committed to academic excellence and industry-oriented learning. Approved by AICTE and affiliated with the University of Mumbai, PIMSR offers a dynamic curriculum designed to develop future business leaders. With a focus on innovation, entrepreneurship, and holistic development, the institute provides a vibrant learning environment supported by experienced faculty, state-of-the-art infrastructure, and strong industry collaborations."
,
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
                    Rigorous programs designed to foster knowledge, innovation, and critical thinking.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Cutting-Edge Infrastructure:</h3>
                    <p className="text-blue-100">
                    Modern labs, digital resources, and collaborative learning spaces.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Industry Connections</h3>
                    <p className="text-blue-100">
                    Strong collaborations with top companies for internships and placements.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Global Perspective: </h3>
                    <p className="text-blue-100">
                    Opportunities for international exchange, research, and networking.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Holistic Development: </h3>
                    <p className="text-blue-100">
                     Focus on leadership, ethics, and personal growth beyond academics.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600">
                    6
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Vibrant Campus Life: </h3>
                    <p className="text-blue-100">
                     A diverse and inclusive environment with extracurricular and cultural activities.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600">
                    7
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Strong Alumni Network:</h3>
                    <p className="text-blue-100">
                    A community of successful professionals supporting career growth.
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

