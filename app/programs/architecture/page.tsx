import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import { CheckCircle, Clock, Calendar, Users, GraduationCap, Award, Building } from "lucide-react"

export default function ArchitecturePage() {
  const programs = [
    {
      name: "Bachelor of Architecture (B.Arch)",
      slug: "bachelor-of-architecture",
      duration: "5 years",
      description:
        "Comprehensive program covering architectural design, building construction, history of architecture, and professional practice.",
      eligibility:
        "10+2 or equivalent with Mathematics as a subject with minimum 50% aggregate marks and valid NATA score.",
    },
    {
      name: "Master of Architecture (M.Arch)",
      slug: "master-of-architecture",
      duration: "2 years",
      description:
        "Advanced study in architectural design with specializations in urban design, landscape architecture, and sustainable design.",
      eligibility: "B.Arch degree with minimum 55% aggregate marks and valid GATE score or university entrance test.",
    },
    {
      name: "Master of Urban Planning",
      slug: "master-of-urban-planning",
      duration: "2 years",
      description: "Specialized program focusing on urban planning, development, and management of urban spaces.",
      eligibility: "B.Arch or B.Planning degree with minimum 55% aggregate marks and valid entrance test score.",
    },
    {
      name: "Ph.D. in Architecture",
      slug: "phd-in-architecture",
      duration: "3-5 years",
      description: "Research-focused program for advancing knowledge in various architectural disciplines.",
      eligibility: "M.Arch degree with minimum 60% aggregate marks and entrance test/interview.",
    },
  ]

  const facilities = [
    {
      name: "Design Studios",
      description:
        "Spacious and well-equipped design studios for architectural drafting, model making, and design development.",
    },
    {
      name: "Material Testing Lab",
      description: "Laboratory for testing and analyzing various building materials and their properties.",
    },
    {
      name: "Model Making Workshop",
      description: "Workshop with tools and equipment for creating architectural models and prototypes.",
    },
    {
      name: "Digital Fabrication Lab",
      description:
        "Advanced lab with 3D printers, laser cutters, and CNC machines for digital fabrication of architectural models.",
    },
    {
      name: "Architectural Library",
      description:
        "Extensive collection of architectural books, journals, and digital resources for research and reference.",
    },
    {
      name: "Computer Lab",
      description:
        "Modern computer lab with the latest architectural software for CAD, BIM, 3D modeling, and rendering.",
    },
  ]

  return (
    <>
      <HeroSection
        title="Architecture Programs"
        subtitle="Nurturing creative minds and technical expertise in the field of architecture"
        backgroundImage="/placeholder.svg?height=600&width=1600&text=Architecture+Programs"
      />

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">
              Pillai College of Architecture
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Established in 1998, Pillai College of Architecture is dedicated to nurturing creative minds and technical
              expertise in the field of architecture. Our curriculum combines theoretical knowledge with practical
              applications, preparing students to design sustainable and innovative spaces for the future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Architecture+College"
                alt="Architecture College"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Established</div>
                    <div className="font-medium">1998</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Students</div>
                    <div className="font-medium">500+</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Programs</div>
                    <div className="font-medium">4 Undergraduate & Postgraduate Programs</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Accreditation</div>
                    <div className="font-medium">Council of Architecture (COA) Approved</div>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Pillai College of Architecture offers comprehensive programs in architecture and related fields. Our
                curriculum emphasizes design thinking, technical knowledge, sustainability, and professional practice to
                prepare students for successful careers in architecture.
              </p>
              <Button asChild>
                <Link href="/admissions">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1-2 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl hero-text-enhanced">Our Programs</h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              Explore our diverse range of architecture programs designed to prepare you for a successful career in the
              field of architecture and design.
            </p>
          </div>

          <div className="space-y-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-white">
                      <Link href={`/programs/${program.slug}`} className="hover:underline">
                        {program.name}
                      </Link>
                    </h3>
                    <div className="flex items-center text-blue-200 mt-2">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{program.duration}</span>
                    </div>
                  </div>
                  <div className="md:w-2/4 mb-4 md:mb-0 md:px-6">
                    <p className="text-blue-100">{program.description}</p>
                  </div>
                  <div className="md:w-1/4">
                    <div className="bg-blue-900/50 rounded-lg p-3">
                      <h4 className="font-semibold text-white text-sm mb-2">Eligibility:</h4>
                      <p className="text-blue-100 text-sm">{program.eligibility}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </section>

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">
              State-of-the-Art Facilities
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our architecture programs are supported by modern facilities and resources that provide an enriching
              learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="card-with-border p-6">
                <h3 className="text-xl font-bold mb-3">{facility.name}</h3>
                <p className="text-muted-foreground">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1-3 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6 hero-text-enhanced">Learning Approach</h2>
              <p className="text-blue-100 mb-6">
                Our teaching methodology combines theoretical knowledge with practical applications, emphasizing design
                thinking, creativity, technical skills, and professional practice.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-blue-200" />
                  <div>
                    <h3 className="font-semibold text-white">Design Studios</h3>
                    <p className="text-blue-100">
                      Hands-on design projects that develop creative thinking, problem-solving, and technical skills.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-blue-200" />
                  <div>
                    <h3 className="font-semibold text-white">Site Visits</h3>
                    <p className="text-blue-100">
                      Regular visits to construction sites, architectural landmarks, and urban spaces for practical
                      learning.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-blue-200" />
                  <div>
                    <h3 className="font-semibold text-white">Guest Lectures</h3>
                    <p className="text-blue-100">
                      Talks by practicing architects, urban planners, and industry experts to provide insights into the
                      profession.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-blue-200" />
                  <div>
                    <h3 className="font-semibold text-white">Design Competitions</h3>
                    <p className="text-blue-100">
                      Participation in national and international design competitions to showcase talent and gain
                      recognition.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-white text-black hover:bg-blue-50">
                  <Link href="/student-life">Explore Student Life</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Learning+Approach"
                alt="Learning Approach"
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
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">Career Opportunities</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our architecture graduates pursue successful careers in various fields related to architecture and design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-with-border p-6">
              <div className="text-primary mb-4">
                <Building className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Architectural Practice</h3>
              <ul className="list-disc pl-5 mb-4 text-muted-foreground">
                <li>Architectural Designer</li>
                <li>Project Architect</li>
                <li>Interior Designer</li>
                <li>Landscape Architect</li>
                <li>Urban Designer</li>
              </ul>
            </div>
            <div className="card-with-border p-6">
              <div className="text-primary mb-4">
                <Building className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Related Fields</h3>
              <ul className="list-disc pl-5 mb-4 text-muted-foreground">
                <li>Construction Management</li>
                <li>Real Estate Development</li>
                <li>Sustainable Design Consultant</li>
                <li>Heritage Conservation</li>
                <li>Architectural Journalism</li>
              </ul>
            </div>
            <div className="card-with-border p-6">
              <div className="text-primary mb-4">
                <Building className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Top Employers</h3>
              <ul className="list-disc pl-5 mb-4 text-muted-foreground">
                <li>Architectural Firms</li>
                <li>Construction Companies</li>
                <li>Government Agencies</li>
                <li>Real Estate Developers</li>
                <li>Urban Planning Organizations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16  text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6 hero-text-enhanced">
              Ready to Begin Your Architecture Journey?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Take the first step towards a rewarding career in architecture by applying to Pillai College of
              Architecture.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-black hover:bg-blue-50">
                <Link href="/admissions">Apply Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-muted-foreground border-white hover:bg-white/10"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

