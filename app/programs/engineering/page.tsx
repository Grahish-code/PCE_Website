import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import { CheckCircle, Clock, Calendar, Users, GraduationCap, Award } from "lucide-react"

export default function EngineeringPage() {
  const programs = [
    {
      name: "B.Tech in Computer Engineering",
      slug: "bachelor-of-technology-computer-engineering",
      duration: "4 years",
      description:
        "Learn to design and develop computer systems, software applications, and cutting-edge technologies.",
      eligibility:
        "10+2 with Physics, Chemistry, and Mathematics with minimum 50% aggregate marks and valid JEE Main score.",
    },
    {
      name: "B.Tech in Information Technology",
      slug: "bachelor-of-technology-information-technology",
      duration: "4 years",
      description: "Focus on information systems, data management, cybersecurity, and emerging IT trends.",
      eligibility:
        "10+2 with Physics, Chemistry, and Mathematics with minimum 50% aggregate marks and valid JEE Main score.",
    },
    {
      name: "B.Tech in Electronics & Computer Science",
      slug: "bachelor-of-technology-electronics-computer-science",
      duration: "4 years",
      description: "Focus on information systems, data management, cybersecurity, and emerging IT trends.",
      eligibility:
        "10+2 with Physics, Chemistry, and Mathematics with minimum 50% aggregate marks and valid JEE Main score.",
    },
    {
      name: "B.Tech in Electronics & Telecommunication",
      slug: "bachelor-of-technology-electronics-telecommunication",
      duration: "4 years",
      description: "Focus on information systems, data management, cybersecurity, and emerging IT trends.",
      eligibility:
        "10+2 with Physics, Chemistry, and Mathematics with minimum 50% aggregate marks and valid JEE Main score.",
    },
    {
      name: "B.Tech in Automobile Engineering",
      slug: "bachelor-of-technology-automobile-engineering",
      duration: "4 years",
      description: "Focus on information systems, data management, cybersecurity, and emerging AI trends.",
      eligibility:
        "10+2 with Physics, Chemistry, and Mathematics with minimum 50% aggregate marks and valid JEE Main score.",
    },
    {
      name: "B.Tech in Mechanical Engineering",
      slug: "bachelor-of-technology-mechanical-engineering",
      duration: "4 years",
      description: "Learn about mechanical systems, thermodynamics, manufacturing processes, and automation.",
      eligibility:
        "10+2 with Physics, Chemistry, and Mathematics with minimum 50% aggregate marks and valid JEE Main score.",
    },
    {
      name: "M.Tech in Computer Engineering",
      slug: "master-of-technology-computer-engineering",
      duration: "2 years",
      description:
        "Advanced study in artificial intelligence, machine learning, cloud computing, and software engineering.",
      eligibility: "B.Tech/B.E. degree in relevant discipline with minimum 55% aggregate marks and valid GATE score.",
    },
    {
      name: "M.Tech in Information Technology",
      slug: "master-of-technology-information-technology",
      duration: "2 years",
      description: "Specialized study in VLSI design, embedded systems, wireless communications, and IoT.",
      eligibility: "B.Tech/B.E. degree in relevant discipline with minimum 55% aggregate marks and valid GATE score.",
    },
    {
      name: "M.Tech in Electronics Engineering",
      slug: "master-of-technology-electronics-engineering",
      duration: "2 years",
      description: "Specialized study in VLSI design, embedded systems, wireless communications, and IoT.",
      eligibility: "B.Tech/B.E. degree in relevant discipline with minimum 55% aggregate marks and valid GATE score.",
    },
    {
      name: "M.E in Mechanical Engineering(CAD/CAM and Robotics)",
      slug: "master-of-engineering-mechanical-cad-cam-robotics",
      duration: "2 years",
      description: "Specialized study in CAD/CAM and robotics.",
      eligibility: "B.Tech/B.E. degree in relevant discipline with minimum 55% aggregate marks and valid GATE score.",
    },
    {
      name: "M.E in Mechanical Engineering(Thermal Engineering)",
      slug: "master-of-engineering-mechanical-thermal-engineering",
      duration: "2 years",
      description: "Specialized study in thermal engineering.",
      eligibility: "B.Tech/B.E. degree in relevant discipline with minimum 55% aggregate marks and valid GATE score.",
    },
    {
      name: "Ph.D. in Computer Engineering",
      slug: "doctor-of-philosophy-computer-engineering",
      duration: "2-5 years",
      description: "Research-focused program in computer engineering.",
      eligibility: "M.Tech/M.E. degree with minimum 60% aggregate marks and entrance test/interview.",
    },
    {
      name: "Ph.D. in Electronic Engineering",
      slug: "doctor-of-philosophy-electronic-engineering",
      duration: "2-5 years",
      description: "Research-focused program in electronic engineering.",
      eligibility: "M.Tech/M.E. degree with minimum 60% aggregate marks and entrance test/interview.",
    },
    {
      name: "Ph.D. in Information Engineering",
      slug: "doctor-of-philosophy-information-engineering",
      duration: "2-5 years",
      description: "Research-focused program in information engineering.",
      eligibility: "M.Tech/M.E. degree with minimum 60% aggregate marks and entrance test/interview.",
    },
    {
      name: "Ph.D. in Mechanical Engineering",
      slug: "doctor-of-philosophy-mechanical-engineering",
      duration: "3-5 years",
      description: "Research-focused program for advancing knowledge in mechanical engineering.",
      eligibility: "M.Tech/M.E. degree with minimum 60% aggregate marks and entrance test/interview.",
    },
]

  const facilities = [
    {
      name: "Advanced Computing Labs",
      description:
        "State-of-the-art computing facilities with the latest hardware and software for practical learning.",
    },
    {
      name: "Robotics Lab",
      description: "Equipped with industrial robots, microcontrollers, and automation systems for hands-on experience.",
    },
    {
      name: "IoT Research Center",
      description: "Dedicated space for Internet of Things research, development, and prototyping.",
    },
    {
      name: "Mechanical Workshops",
      description: "Modern workshops with CNC machines, 3D printers, and testing equipment.",
    },
    {
      name: "Civil Engineering Labs",
      description: "Well-equipped labs for material testing, structural analysis, and environmental engineering.",
    },
    {
      name: "Electronics Labs",
      description: "Advanced labs for circuit design, signal processing, and communication systems.",
    },
  ]

  return (
    <>
      <HeroSection
        title="Engineering Programs"
        subtitle="Cutting-edge engineering education with a focus on innovation and practical skills"
        backgroundImage="/placeholder.svg?height=600&width=1600&text=Engineering+Programs"
      />

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">
              Pillai College of Engineering
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Established in 1999, Pillai College of Engineering (PCE) is an autonomous institution known for its
              excellence in engineering education. With state-of-the-art laboratories, experienced faculty, and industry
              collaborations, we prepare students to become innovative engineers ready to tackle global challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Engineering+College"
                alt="Engineering College"
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
                    <div className="font-medium">1999</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Students</div>
                    <div className="font-medium">3000+</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Programs</div>
                    <div className="font-medium">8 Undergraduate & Postgraduate Programs</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Accreditation</div>
                    <div className="font-medium">NBA Accredited, AICTE Approved</div>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                PCE offers a comprehensive range of engineering programs designed to meet the evolving needs of the
                industry. Our curriculum combines theoretical knowledge with practical applications, research
                opportunities, and industry exposure to ensure that our graduates are well-prepared for successful
                careers.
              </p>
              <Button asChild>
                <Link href="/admissions">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-blue-purple text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl hero-text-enhanced">Our Programs</h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              Explore our diverse range of engineering programs designed to prepare you for a successful career in your
              chosen field.
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
              Our engineering programs are supported by modern laboratories and facilities that provide hands-on
              learning experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="card-hover rounded-xl overflow-hidden">
                <div className="bg-white dark:bg-gray-800 p-6">
                  <h3 className="text-xl font-bold mb-3">{facility.name}</h3>
                  <p className="text-muted-foreground">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-blue-cyan text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6 hero-text-enhanced">Career Opportunities</h2>
              <p className="text-blue-100 mb-6">
                Our engineering graduates are highly sought after by top companies across various sectors. With a strong
                foundation in technical knowledge and practical skills, our students excel in diverse roles and
                industries.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-blue-200" />
                  <div>
                    <h3 className="font-semibold text-white">Industry Sectors</h3>
                    <p className="text-blue-100">
                      IT & Software, Manufacturing, Telecommunications, Automotive, Aerospace, Energy, Infrastructure,
                      and more.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-blue-200" />
                  <div>
                    <h3 className="font-semibold text-white">Job Roles</h3>
                    <p className="text-blue-100">
                      Software Engineer, System Architect, Network Engineer, Data Scientist, IoT Specialist, Mechanical
                      Designer, Structural Engineer, and more.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-blue-200" />
                  <div>
                    <h3 className="font-semibold text-white">Top Recruiters</h3>
                    <p className="text-blue-100">
                      Microsoft, Google, Amazon, Tata Consultancy Services, Infosys, Larsen & Toubro, Reliance
                      Industries, and many more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-white text-blue-700 hover:bg-blue-50">
                  <Link href="/placements">Explore Placement Opportunities</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Career+Opportunities"
                alt="Career Opportunities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text mb-6 hero-text-enhanced">
              Ready to Begin Your Engineering Journey?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Take the first step towards a rewarding career in engineering by applying to Pillai College of
              Engineering.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/admissions">Apply Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

