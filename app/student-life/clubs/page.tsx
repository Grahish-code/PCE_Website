import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import { Code, Users, Lightbulb, Cpu, Wrench, BookOpen } from "lucide-react"

export default function ClubsPage() {
  const clubs = [
    {
      id: "tapas",
      name: "TAPAS PCE",
      description:
        "A student-led organization dedicated to innovation and social initiatives, working on impactful projects that benefit the community. Members engage in mentoring sessions, leadership training, and workshops designed to develop critical problem-solving skills.",
      icon: <Cpu className="h-8 w-8" />,
      image: "/placeholder.svg?height=400&width=600&text=TAPAS+PCE",
      activities: [
        "Mentoring sessions",
        "leadership training",
        "community projects",
        "social initiatives",
        "skill development workshops",
      ],
      Club_College:"PCE",
     
    },
    {
      id: "csi",
      name: "CSI PCE",
      description:
        "Computer Society of India (CSI) student chapter at PCE Encourages participation in technology-driven projects, coding challenges, and research-based competitions. Students can gain hands-on experience in software development and connect with industry experts through seminars and conferences.",
      icon: <Code className="h-8 w-8" />,
      image: "/placeholder.svg?height=400&width=600&text=CSI+PCE",
      activities: ["Coding competitions", "Technical workshops", "Guest lectures", "Industry-academia interactions","Hackathons"],
      Club_College:"PCE",
    },
    {
      id: "gdg",
      name: "GDG PCE",
      description:
        "Google Developer Group (GDG) at PCE is a hub for aspiring developers to enhance their programming skills, participate in hackathons, and learn from industry experts. The club regularly hosts Google-sponsored events and knowledge-sharing sessions on the latest technological advancements.",
      icon: <Lightbulb className="h-8 w-8" />,
      image: "/placeholder.svg?height=400&width=600&text=GDG+PCE",
      activities: [
        "coding boot camps",
        "Web development sessions",
        "Cloud computing workshops",
        "Hackathons",
      ],
      Club_College:"PCE", 
    },
    {
      id: "ishrae",
      name: "ISHRAE",
      description:
        "Indian Society of Heating, Refrigerating and Air Conditioning Engineers (ISHRAE) student chapter aims to promote awareness and research in the field of HVAC (Heating, Ventilation, and Air Conditioning) through seminars, industry interactions, and technical sessions.",
      icon: <Wrench className="h-8 w-8" />,
      image: "/placeholder.svg?height=400&width=600&text=ISHRAE",
      activities: [
        "Technical workshops on HVAC systems",
        "Industrial visits",
        "Technical competitions",
        "Guest lectures by industry experts",
      ],
      Club_College:"PCE"
    },
    {
      id: "tpc",
      name: "TPC PCE",
      description:
        "Technical Paper Club (TPC) guides students in career planning, resume building, and interview preparation through workshops and mentorship sessions. Industry collaboration and internship programs ensure that students are job-ready upon graduation.",
      icon: <BookOpen className="h-8 w-8" />,
      image: "/placeholder.svg?height=400&width=600&text=TPC+PCE",
      activities: [
        "Research methodology workshops",
        "Paper writing sessions",
        "Conference participation",
        "Research project guidance",
      ],
      Club_College:"PCE"
    },
    {
      id: "student-council",
      name: "Student Council",
      description:
        "The Student Council is the official representative body of students who organizes student-led initiatives, cultural activities, leadership training programs, and social awareness campaigns. The council acts as a bridge between students and the administration, ensuring holistic development and representation of student interests",
      icon: <Users className="h-8 w-8" />,
      image: "/placeholder.svg?height=400&width=600&text=Student+Council",
      activities: ["Cultural events", "Sports competitions", "Student welfare activities", "Inter-college events"],
      Club_College:"PCE"
    },
    {
      id: "ieee",
      name: "IEEE PCE",
      description:
        "IEEE student branch at PCE provides a platform for students to enhance their technical knowledge and professional skills through various activities and events.",
      icon: <Cpu className="h-8 w-8" />,
      image: "/placeholder.svg?height=400&width=600&text=IEEE+PCE",
      activities: [
        "Technical workshops",
        "Project competitions",
        "Technical paper presentations",
        "Industry-academia interactions",
      ],
      Club_College:"PCE"
    },
  ]

  return (
    <>
      <HeroSection
        title="Clubs & Societies"
        subtitle="Explore the vibrant student clubs and societies that enrich campus life at Pillai University"
        backgroundImage="/placeholder.svg?height=600&width=1600&text=Clubs+and+Societies"
      />

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">Student Clubs</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              At Pillai University, we believe in holistic development. Our student clubs provide opportunities to
              explore interests, develop skills, and build lasting friendships beyond the classroom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clubs.map((club) => (
              <div key={club.id} className="card-hover rounded-xl overflow-hidden">
                <div className="bg-white dark:bg-gray-800">
                  <div className="relative h-48">
                    <Image src={club.image || "/placeholder.svg"} alt={club.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white flex items-center">
                      <div className="mr-3">{club.icon}</div>
                      <h3 className="text-xl font-bold">{club.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">{club.description}</p>
                    <h4 className="font-semibold mb-2">Key Activities:</h4>
                    <ul className="list-disc pl-5 mb-4 text-muted-foreground">
                      {club.activities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                    <Button asChild>
                      <Link href={`/student-life/clubs#${club.id}`}>Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-blue-purple text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6 hero-text-enhanced">Benefits of Joining Clubs</h2>
              <p className="text-blue-100 mb-6">
                Participating in student clubs and societies offers numerous benefits that complement academic learning
                and enhance the overall university experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Skill Development</h3>
                    <p className="text-blue-100">
                      Enhance technical, leadership, communication, and teamwork skills through hands-on activities and
                      projects.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Networking Opportunities</h3>
                    <p className="text-blue-100">
                      Connect with peers, seniors, faculty, and industry professionals who share similar interests.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Resume Enhancement</h3>
                    <p className="text-blue-100">
                      Add valuable extracurricular activities and leadership roles to your resume to stand out to
                      potential employers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Personal Growth</h3>
                    <p className="text-blue-100">
                      Discover new interests, build confidence, and develop a well-rounded personality through diverse
                      experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Club+Activities"
                alt="Club Activities"
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
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">How to Join</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Joining a club or society at Pillai University is easy and open to all students.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Attend Club Fair</h3>
                    <p className="text-muted-foreground">
                      At the beginning of each academic year, we organize a Club Fair where all clubs showcase their
                      activities and recruit new members.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Contact Club Representatives</h3>
                    <p className="text-muted-foreground">
                      Reach out to club representatives or faculty advisors directly to express your interest in
                      joining.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Attend Club Events</h3>
                    <p className="text-muted-foreground">
                      Participate in open events organized by clubs to get a feel for their activities before committing
                      to membership.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Register Online</h3>
                    <p className="text-muted-foreground">
                      Complete the online registration form available on the student portal to officially join a club.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button asChild>
                  <Link href="/student-portal">Access Student Portal</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-blue-cyan text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6 hero-text-enhanced">Start Your Own Club</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Have a unique interest not represented by existing clubs? You can start your own club at Pillai
              University!
            </p>
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/student-life/clubs#start-club">Learn How to Start a Club</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

