"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import AchievementCard from "@/components/achievement-card"
import {
  Award,
  Trophy,
  Star,
  Medal,
  BookOpen,
  Users,
  Target,
  Globe,
  CheckCircle,
  Loader2,
  ArrowRight,
} from "lucide-react"

export default function AchievementsPage() {
  const [visibleAchievements, setVisibleAchievements] = useState(6)
  const [loading, setLoading] = useState(false)
  const loadMoreRef = useRef<HTMLDivElement>(null)

  const achievements = [
    {
      title: "NAAC 'A+' Accreditation",
      description:
        "Autonomous status granted by UGC from the academic year 2021-22. Recognized under UGC sections 12(b) and 2(f).",
      year: "2021",
      icon: <Award className="h-8 w-8" />,
    },
    {
      title: "Pillai College of Arts, Commerce, and Science (PCACS)",
      description: "Accredited in all three cycles. Permanently affiliated with the University of Mumbai. ISO 9001:2015 certified.",
      year: "2023",
      icon: <Trophy className="h-8 w-8" />,
    },
    {
      title: "Pillai College of Architecture (PiCA)",
      description: "Accredited in its first accreditation cycle. Established in 1992. Authorized NATA test center.",
      year: "2023",
      icon: <Star className="h-8 w-8" />,
    },
    {
      title: "NIRF Ranking",
      description: "Ranked among the Top 50 Universities in India for its academic and research standards.",
      year: "2024",
      icon: <CheckCircle className="h-8 w-8" />,
    },
    {
      title: "AICTE & NBA Approvals",
      description: "Recognized by AICTE, UGC, and NBA for its state-of-the-art facilities and education system.",
      year: "2024",
      icon: <Target className="h-8 w-8" />,
    },
    {
      title: "NBA Accreditation for PCE",
      description:
        "Departments like Automobile, Computer, IT, E&TC, and Mechanical Engineering accredited until 2025.",
      year: "2024",
      icon: <Globe className="h-8 w-8" />,
    },
    {
      title: "Best Placement Record",
      description: "Achieved 95% placement rate across all programs with top companies recruiting our graduates.",
      year: "2020",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "Academic Excellence Award",
      description: "Honored for maintaining high academic standards and innovative teaching methodologies.",
      year: "2020",
      icon: <BookOpen className="h-8 w-8" />,
    },
    {
      title: "Sports Championship",
      description: "Won the Inter-University Sports Championship for three consecutive years.",
      year: "2019-2021",
      icon: <Medal className="h-8 w-8" />,
    },
    {
      title: "Green Campus Initiative Award",
      description: "Recognized for sustainable campus practices and environmental conservation efforts.",
      year: "2019",
      icon: <CheckCircle className="h-8 w-8" />,
    },
    {
      title: "Best Cultural Festival",
      description: "Our annual cultural festival 'Alegria' was voted the best college festival in the region.",
      year: "2019",
      icon: <Star className="h-8 w-8" />,
    },
    {
      title: "Digital Innovation Award",
      description: "Honored for implementing innovative digital learning solutions and smart campus initiatives.",
      year: "2018",
      icon: <Target className="h-8 w-8" />,
    },
    {
      title: "Community Service Excellence",
      description: "Recognized for impactful community outreach programs and social responsibility initiatives.",
      year: "2018",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "Industry Partnership Award",
      description: "Acknowledged for establishing strong industry collaborations benefiting students and research.",
      year: "2017",
      icon: <Globe className="h-8 w-8" />,
    },
    {
      title: "Alumni Achievement Recognition",
      description: "Honored for the exceptional accomplishments of our alumni in various fields globally.",
      year: "2017",
      icon: <Award className="h-8 w-8" />,
    },
  ]

  const studentAchievements = [
    {
      title: "Smart India Hackathon 2020",
      description:
        "Two student teams became National Winners in the Smart India Hackathon.",
      image: "/placeholder.svg?height=300&width=500&text=Robotics",
      year: "2023",
      students: ["Team 1", "Team 2"],
    },
    {
      title: "Smart India Hackathon 2022",
      description: "Team Homebrew won the first prize of ₹1,00,000, and Team SARBOT won ₹75,000.",
      image: "/placeholder.svg?height=300&width=500&text=Hackathon",
      year: "2022",
      students: ["Team Homebrew", "Team SARBOT"],
    },
    {
      title: "Smart India Hackathon 2023",
      description: "Team Herculean won the Hardware Edition of the Smart India Hackathon.",
      image: "/placeholder.svg?height=300&width=500&text=Cultural",
      year: "2023",
      students: ["Team Herculean"],
    },
    {
      title: "KAVACH Cybersecurity Hackathon 2023",
      description:
        "PCE participants actively participated in the KAVACH Cybersecurity Hackathon.",
      image: "/placeholder.svg?height=300&width=500&text=IEEE",
      year: "2022",
      students: ["PCE Participants"],
    },
    {
      title: "National Hackathon 2025",
      description: "Om Sandip Patil won ₹1,00,000 in the National Hackathon.",
      image: "/placeholder.svg?height=300&width=500&text=Design",
      year: "2025",
      students: ["Om Sandip Patil"],
    },
    {
      title: "HackCelestial 1.0 (2024)",
      description:
        "PCE participants were recognized for outstanding contributions in HackCelestial 1.0.",
      image: "/placeholder.svg?height=300&width=500&text=Business",
      year: "2024",
      students: ["PCE Participants"],
    },
  ]

  const facultyAchievements = [
    {
      name: "Dr. Rajesh Kumar",
      department: "Computer Science",
      achievement: "Published groundbreaking research on artificial intelligence in IEEE Transactions",
      year: "2023",
      image: "/placeholder.svg?height=300&width=300&text=Faculty+1",
    },
    {
      name: "Dr. Priya Sharma",
      department: "Biotechnology",
      achievement: "Received national research grant of ₹1.5 crore for work on sustainable biofuels",
      year: "2023",
      image: "/placeholder.svg?height=300&width=300&text=Faculty+2",
    },
    {
      name: "Prof. Anand Mehta",
      department: "Architecture",
      achievement: "Won the prestigious National Design Award for sustainable urban planning",
      year: "2022",
      image: "/placeholder.svg?height=300&width=300&text=Faculty+3",
    },
    {
      name: "Dr. Sunita Patel",
      department: "Management",
      achievement: "Appointed to the National Education Policy committee for higher education reforms",
      year: "2022",
      image: "/placeholder.svg?height=300&width=300&text=Faculty+4",
    },
  ]

  const researchHighlights = [
    {
      title: "Research Publications",
      description: "Pillai College of Engineering (PCE) published 50+ papers in 2022-2023, 150+ in 2021-2022, and 39 in 2020-2021.",
      impact: "Significant contributions to academic knowledge and innovation.",
      researchers: "Faculty and students across all institutions",
      image: "/placeholder.svg?height=300&width=500&text=Renewable+Energy",
    },
    {
      title: "Artificial Intelligence and Machine Learning Lab",
      description: "Funded by AICTE, this lab focuses on cutting-edge AI and ML research in Computer Engineering.",
      impact: "Enhancing research capabilities in AI and ML.",
      researchers: "Faculty and student team",
      image: "/placeholder.svg?height=300&width=500&text=AI+Healthcare",
    },
    {
      title: "Conducting Polymer Composites",
      description: "Development, Synthesis, and Characterization of Conducting Polymer Composites, funded by the University of Mumbai.",
      impact: "Innovative research in Mechanical Engineering.",
      researchers: "Dr. Priam Pillai",
      image: "/placeholder.svg?height=300&width=500&text=Sustainable+Architecture",
    },
    {
      title: "Research Papers and Book Chapters",
      description: "PCACS published research papers and book chapters with internal funding of ₹85,000.",
      impact: "Contributing to academic knowledge in Arts, Commerce, and Science.",
      researchers: "Various faculty members",
      image: "/placeholder.svg?height=300&width=500&text=Financial+Inclusion",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !loading && visibleAchievements < achievements.length) {
          loadMoreAchievements()
        }
      },
      { threshold: 0.1 },
    )

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current)
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current)
      }
    }
  }, [visibleAchievements, loading])

  const loadMoreAchievements = () => {
    setLoading(true)
    // Simulate loading delay
    setTimeout(() => {
      setVisibleAchievements((prev) => Math.min(prev + 3, achievements.length))
      setLoading(false)
    }, 1000)
  }

  return (
    <>
      <HeroSection
        title="Achievements & Awards"
        subtitle="Celebrating excellence and recognition in academics, research, and beyond"
      />

      <section id="recognitions" className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text">Our Recognitions</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Pillai College has been recognized for its excellence in various domains over the years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.slice(0, visibleAchievements).map((achievement, index) => (
              <AchievementCard
                key={index}
                title={achievement.title}
                description={achievement.description}
                year={achievement.year}
                icon={achievement.icon}
              />
            ))}
          </div>

          {visibleAchievements < achievements.length && (
            <div ref={loadMoreRef} className="mt-12 text-center">
              {loading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <span className="ml-2 text-lg">Loading more achievements...</span>
                </div>
              ) : (
                <Button onClick={loadMoreAchievements}>Load More Achievements</Button>
              )}
            </div>
          )}
        </div>
      </section>

      <section id="research" className="py-16 gradient-color-1-2 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">Research Excellence</h2>
              <p className="text-blue-100 mb-4">
                Our commitment to research has led to groundbreaking discoveries and innovations across various fields.
                Our faculty and students have published in prestigious journals and presented at international
                conferences.
              </p>
              <p className="text-blue-100 mb-4">
                With state-of-the-art research facilities and collaborations with industry partners, we continue to push
                the boundaries of knowledge and contribute to solving real-world problems.
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-center">
                  <div className="w-16 text-2xl font-bold text-white">200+</div>
                  <div className="text-blue-100">Research papers published annually</div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 text-2xl font-bold text-white">50+</div>
                  <div className="text-blue-100">Ongoing research projects</div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 text-2xl font-bold text-white">₹100M+</div>
                  <div className="text-blue-100">Research grants received</div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 text-2xl font-bold text-white">25+</div>
                  <div className="text-blue-100">Patents filed</div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Research"
                alt="Research Excellence"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="research-highlights" className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text">Research Highlights</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our groundbreaking research initiatives that are making a real-world impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchHighlights.map((research, index) => (
              <div key={index} className="card-hover rounded-xl overflow-hidden">
                <div className="bg-white dark:bg-gray-800">
                  <div className="relative h-48">
                    <Image
                      src={research.image || "/placeholder.svg"}
                      alt={research.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{research.title}</h3>
                    <p className="text-muted-foreground mb-3">{research.description}</p>
                    <div className="mb-3">
                      <span className="font-semibold">Impact: </span>
                      <span className="text-muted-foreground">{research.impact}</span>
                    </div>
                    <div className="mb-4">
                      <span className="font-semibold">Researchers: </span>
                      <span className="text-muted-foreground">{research.researchers}</span>
                    </div>
                    <Link
                      href="#"
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      Read Research Paper <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/research">View All Research Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="students" className="py-16 gradient-color-1-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl text-white">Student Achievements</h2>
            <p className="mt-4 text-lg text-white max-w-3xl mx-auto">
              Our students excel in academics, sports, cultural activities, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentAchievements.map((item, index) => (
              <div key={index} className="card-hover rounded-xl overflow-hidden">
                <div className="bg-white dark:bg-gray-800">
                  <div className="relative h-48">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {item.year}
                    </div>
                  </div>
                  <div className="p-6">
                  <h3
  className="text-xl font-bold mb-2"
  style={{
    backgroundImage: `linear-gradient(135deg, hsl(var(--gradient-start)), hsl(var(--gradient-end)))`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    textShadow: "0 1px 1px rgba(0, 0, 0, 0.1)"
  }}
>
  {item.title}
</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-1">Student Team:</h4>
                      <ul className="text-sm text-muted-foreground">
                        {item.students.map((student, idx) => (
                          <li key={idx}>{student}</li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href="#"
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/student-achievements">View All Student Achievements</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="faculty" className="py-16 section-alternate text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Faculty Achievements</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our distinguished faculty members are recognized nationally and internationally for their contributions to
              academia and research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyAchievements.map((faculty, index) => (
              <div key={index} className="card-hover rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm">
                <div className="p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src={faculty.image || "/placeholder.svg"}
                        alt={faculty.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gradient">{faculty.name}</h3>
                    <p className="text-muted-foreground">{faculty.department}</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-block px-2 py-1 rounded-full bg-black text-xs font-medium text-white mb-2">
                      {faculty.year}
                    </div>
                    <p className="text-muted-foreground">{faculty.achievement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl text-white">Rankings & Accreditations</h2>
            <p className="mt-4 text-lg text-white max-w-3xl mx-auto">
              Pillai College is proud to be recognized by various national and international accreditation bodies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "NAAC A++",
                description: "National Assessment and Accreditation Council",
                logo: "/placeholder.svg?height=100&width=100&text=NAAC",
              },
              {
                name: "NBA Accredited",
                description: "National Board of Accreditation",
                logo: "/placeholder.svg?height=100&width=100&text=NBA",
              },
              {
                name: "NIRF Top 50",
                description: "National Institutional Ranking Framework",
                logo: "/placeholder.svg?height=100&width=100&text=NIRF",
              },
              {
                name: "ISO 9001:2015",
                description: "Quality Management System",
                logo: "/placeholder.svg?height=100&width=100&text=ISO",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-white p-4 rounded-full mb-4 shadow-md">
                  <Image
                    src={item.logo || "/placeholder.svg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                <p className="text-sm text-white">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 section-alternate text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">Join Our Legacy of Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Become part of an institution committed to academic excellence, innovation, and holistic development.
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
