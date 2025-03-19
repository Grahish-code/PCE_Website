import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import { ArrowRight, BookOpen, Users, Building, Briefcase, GraduationCap, Clock, Calendar, MapPin } from "lucide-react"

export default function CollegesPage() {
  const colleges = [
    {
      id: "architecture",
      name: "Pillai College of Architecture",
      established: "1998",
      students: "500+",
      programs: [
        { name: "Bachelor of Architecture (B.Arch)", duration: "5 years" },
        { name: "Master of Architecture (M.Arch)", duration: "2 years" },
        { name: "Ph.D. in Architecture", duration: "3-5 years" },
      ],
      description:
        "Pillai College of Architecture is dedicated to nurturing creative minds and technical expertise in the field of architecture. Our curriculum combines theoretical knowledge with practical applications, preparing students to design sustainable and innovative spaces for the future.",
      facilities: [
        "Design Studios",
        "Material Testing Lab",
        "Model Making Workshop",
        "Digital Fabrication Lab",
        "Architectural Library",
      ],
      achievements: [
        "Council of Architecture Excellence Award",
        "National Design Competition Winners",
        "Green Building Certification",
      ],
      image: "/placeholder.svg?height=600&width=800&text=Architecture+College",
      icon: <Building className="h-8 w-8" />,
    },
    {
      id: "arts",
      name: "Pillai College of Arts, Commerce and Science",
      established: "2000",
      students: "2000+",
      programs: [
        { name: "Bachelor of Arts (B.A.)", duration: "3 years" },
        { name: "Bachelor of Commerce (B.Com)", duration: "3 years" },
        { name: "Bachelor of Science (B.Sc)", duration: "3 years" },
        { name: "Master of Arts (M.A.)", duration: "2 years" },
        { name: "Master of Commerce (M.Com)", duration: "2 years" },
        { name: "Master of Science (M.Sc)", duration: "2 years" },
        { name: "Ph.D. Programs", duration: "3-5 years" },
      ],
      description:
        "Pillai College of Arts, Commerce and Science offers a diverse range of undergraduate and postgraduate programs across humanities, commerce, and sciences. Our interdisciplinary approach fosters critical thinking, creativity, and practical skills needed for various career paths.",
      facilities: ["Science Laboratories", "Language Lab", "Digital Library", "Research Centers", "Auditorium"],
      achievements: ["NAAC 'A++' Accreditation", "University Rank Holders", "Research Publications"],
      image: "/placeholder.svg?height=600&width=800&text=Arts+College",
      icon: <BookOpen className="h-8 w-8" />,
    },
    {
      id: "engineering",
      name: "Pillai College of Engineering (Autonomous)",
      established: "1999",
      students: "3000+",
      programs: [
        { name: "B.Tech in Computer Engineering", duration: "4 years" },
        { name: "B.Tech in Information Technology", duration: "4 years" },
        { name: "B.Tech in Electronics & Telecommunication", duration: "4 years" },
        { name: "B.Tech in Mechanical Engineering", duration: "4 years" },
        { name: "B.Tech in Civil Engineering", duration: "4 years" },
        { name: "M.Tech Programs", duration: "2 years" },
        { name: "Ph.D. in Engineering", duration: "3-5 years" },
      ],
      description:
        "Pillai College of Engineering is an autonomous institution known for its excellence in engineering education. With state-of-the-art laboratories, experienced faculty, and industry collaborations, we prepare students to become innovative engineers ready to tackle global challenges.",
      facilities: [
        "Advanced Computing Labs",
        "Robotics Lab",
        "IoT Research Center",
        "Mechanical Workshops",
        "Civil Engineering Labs",
        "Electronics Labs",
      ],
      achievements: [
        "NBA Accreditation for all programs",
        "AICTE-CII Platinum Category Institution",
        "Smart India Hackathon Winners",
        "Patents Filed",
      ],
      image: "/placeholder.svg?height=600&width=800&text=Engineering+College",
      icon: <GraduationCap className="h-8 w-8" />,
    },
    {
      id: "management",
      name: "Pillai Institute of Management Studies and Research",
      established: "2002",
      students: "800+",
      programs: [
        { name: "Master of Business Administration (MBA)", duration: "2 years" },
        { name: "Executive MBA", duration: "1 year" },
        { name: "Ph.D. in Management", duration: "3-5 years" },
      ],
      description:
        "Pillai Institute of Management Studies and Research offers comprehensive management education with a focus on developing leadership skills, strategic thinking, and business acumen. Our industry-oriented curriculum and case study approach prepare students for successful careers in the corporate world.",
      facilities: [
        "Bloomberg Terminal Lab",
        "Business Incubation Center",
        "Conference Halls",
        "Digital Library",
        "Simulation Labs",
      ],
      achievements: [
        "AICTE Approved Programs",
        "Top 50 B-Schools in India",
        "Corporate Excellence Awards",
        "International Collaborations",
      ],
      image: "/placeholder.svg?height=600&width=800&text=Management+Institute",
      icon: <Briefcase className="h-8 w-8" />,
    },
  ]

  return (
    <>
      <HeroSection
        title="Our Colleges"
        subtitle="Explore our four prestigious colleges offering diverse programs across multiple disciplines"
        backgroundImage="/placeholder.svg?height=600&width=1600&text=Colleges"
      />

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text">Academic Excellence</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Pillai University comprises four distinguished colleges, each offering specialized education in their
              respective fields. Our colleges are known for their academic rigor, innovative teaching methodologies, and
              industry-relevant curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {colleges.map((college) => (
              <div key={college.id} className="card-hover rounded-xl overflow-hidden">
                <div className="gradient-color-1 p-6 h-full flex flex-col">
                  <div className="text-white mb-4">{college.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{college.name}</h3>
                  <div className="flex items-center text-blue-100 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Est. {college.established}</span>
                  </div>
                  <p className="text-blue-100 mb-4 flex-grow">{college.description.substring(0, 100)}...</p>
                  <Link
                    href={`#${college.id}`}
                    className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {colleges.map((college, index) => (
        <section
          key={college.id}
          id={college.id}
          className={`py-16 ${index % 2 === 0 ? "gradient-color-1-2 text-white" : "section-alternate"}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? "order-2" : ""}`}>
                <div className="inline-block px-3 py-1 rounded-lg bg-blue-100 text-blue-800 mb-4">{college.name}</div>
                <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                  {index % 2 === 0 ? (
                    <span className="text-white">{college.name}</span>
                  ) : (
                    <span className="gradient-text">{college.name}</span>
                  )}
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className={`h-5 w-5 mr-2 ${index % 2 === 0 ? "text-blue-200" : "text-blue-600"}`} />
                    <div>
                      <div className={`text-sm ${index % 2 === 0 ? "text-blue-200" : "text-muted-foreground"}`}>
                        Established
                      </div>
                      <div className={`font-medium ${index % 2 === 0 ? "text-white" : ""}`}>{college.established}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className={`h-5 w-5 mr-2 ${index % 2 === 0 ? "text-blue-200" : "text-blue-600"}`} />
                    <div>
                      <div className={`text-sm ${index % 2 === 0 ? "text-blue-200" : "text-muted-foreground"}`}>
                        Students
                      </div>
                      <div className={`font-medium ${index % 2 === 0 ? "text-white" : ""}`}>{college.students}</div>
                    </div>
                  </div>
                </div>
                <p className={`mb-6 ${index % 2 === 0 ? "text-blue-100" : "text-muted-foreground"}`}>
                  {college.description}
                </p>
                <div className="mb-6">
                  <h3 className={`text-lg font-semibold mb-2 ${index % 2 === 0 ? "text-white" : ""}`}>
                    Programs Offered
                  </h3>
                  <ul className="space-y-2">
                    {college.programs.map((program, idx) => (
                      <li key={idx} className="flex items-start">
                        <GraduationCap
                          className={`h-5 w-5 mr-2 mt-0.5 ${index % 2 === 0 ? "text-blue-200" : "text-blue-600"}`}
                        />
                        <div>
                          <span className={index % 2 === 0 ? "text-white" : ""}>{program.name}</span>
                          <span
                            className={`ml-2 text-sm ${index % 2 === 0 ? "text-blue-200" : "text-muted-foreground"}`}
                          >
                            <Clock className="inline h-3 w-3 mr-1" />
                            {program.duration}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4">
                  {index % 2 === 0 ? (
                    <>
                      <Button asChild className="bg-white text-blue-700 hover:bg-blue-50">
                        <Link href="/admissions">Apply Now</Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="bg-transparent text-white border-white hover:bg-white/10"
                      >
                        <Link href={`/colleges/${college.id}`}>View Details</Link>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button asChild>
                        <Link href="/admissions">Apply Now</Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href={`/colleges/${college.id}`}>View Details</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
              <div
                className={`relative h-[400px] rounded-xl overflow-hidden card-hover ${index % 2 === 1 ? "order-1" : ""}`}
              >
                <Image src={college.image || "/placeholder.svg"} alt={college.name} fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text">Campus Locations</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our colleges are strategically located across Navi Mumbai, providing easy access and modern facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-hover rounded-xl overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=New+Panvel+Campus"
                  alt="New Panvel Campus"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-white dark:bg-gray-800">
                <h3 className="text-xl font-bold mb-2">New Panvel Campus</h3>
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Dr. K. M. Vasudevan Pillai Campus, Plot No. 10, Sector 16, New Panvel, Navi Mumbai - 410206
                  </p>
                </div>
                <p className="text-muted-foreground mb-4">
                  Home to Pillai College of Engineering and Pillai Institute of Management Studies and Research.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Get Directions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="card-hover rounded-xl overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Panvel+Campus"
                  alt="Panvel Campus"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-white dark:bg-gray-800">
                <h3 className="text-xl font-bold mb-2">Panvel Campus</h3>
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Sector 7, Dr. K. M. Vasudevan Pillai Campus, Panvel, Navi Mumbai - 410206
                  </p>
                </div>
                <p className="text-muted-foreground mb-4">
                  Home to Pillai College of Architecture and Pillai College of Arts, Commerce and Science.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Get Directions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1-3 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to Join Us?</h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              Take the first step towards a rewarding academic journey at Pillai University.
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
              <Link href="/contact">Contact Admissions</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="/campus-tour">Schedule a Campus Tour</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

