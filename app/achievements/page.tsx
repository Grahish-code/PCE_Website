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
      title: "NAAC 'A++' Accreditation",
      description:
        "Received the highest grade from the National Assessment and Accreditation Council for academic excellence.",
      year: "2023",
      icon: <Award className="h-8 w-8" />,
    },
    {
      title: "Top 50 Universities in India",
      description: "Ranked among the top 50 universities in India by the Ministry of Education's NIRF rankings.",
      year: "2023",
      icon: <Trophy className="h-8 w-8" />,
    },
    {
      title: "Excellence in Research Award",
      description: "Recognized for outstanding contributions to research in renewable energy technologies.",
      year: "2022",
      icon: <Star className="h-8 w-8" />,
    },
    {
      title: "Best Infrastructure Award",
      description: "Awarded for having state-of-the-art campus facilities and modern learning environments.",
      year: "2022",
      icon: <CheckCircle className="h-8 w-8" />,
    },
    {
      title: "Innovation Hub Recognition",
      description: "Designated as an Innovation Hub by the Ministry of Science and Technology for promoting startups.",
      year: "2021",
      icon: <Target className="h-8 w-8" />,
    },
    {
      title: "International Collaboration Excellence",
      description:
        "Recognized for establishing successful academic partnerships with over 20 international universities.",
      year: "2021",
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
      title: "National Robotics Competition",
      description:
        "First place in the National Robotics Competition organized by the Ministry of Science and Technology.",
      image: "/placeholder.svg?height=300&width=500&text=Robotics",
      year: "2023",
      students: ["Rahul Sharma", "Priya Patel", "Amit Kumar"],
    },
    {
      title: "International Hackathon",
      description: "Our students secured the second position in the International Hackathon held in Singapore.",
      image: "/placeholder.svg?height=300&width=500&text=Hackathon",
      year: "2023",
      students: ["Neha Singh", "Vikram Reddy", "Sanjay Mehta"],
    },
    {
      title: "Cultural Festival",
      description: "Won the Best College Award at the Inter-University Cultural Festival for three consecutive years.",
      image: "/placeholder.svg?height=300&width=500&text=Cultural",
      year: "2022-2023",
      students: ["Ananya Desai", "Rohan Kapoor", "Meera Joshi"],
    },
    {
      title: "IEEE Paper Presentation",
      description:
        "Students from our Engineering college won the Best Paper Award at the IEEE International Conference.",
      image: "/placeholder.svg?height=300&width=500&text=IEEE",
      year: "2022",
      students: ["Karan Shah", "Divya Nair", "Arjun Menon"],
    },
    {
      title: "National Design Competition",
      description: "Architecture students won first prize in the National Sustainable Design Competition.",
      image: "/placeholder.svg?height=300&width=500&text=Design",
      year: "2022",
      students: ["Riya Patel", "Aditya Sharma", "Zara Khan"],
    },
    {
      title: "Business Plan Competition",
      description:
        "MBA students secured top position in the National Business Plan Competition with their innovative startup idea.",
      image: "/placeholder.svg?height=300&width=500&text=Business",
      year: "2021",
      students: ["Vivek Malhotra", "Sneha Gupta", "Raj Kapoor"],
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
      title: "Renewable Energy Solutions",
      description: "Developing innovative solar and wind energy technologies for sustainable power generation",
      impact: "Potential to provide clean energy to rural communities at 30% lower cost",
      researchers: "Dr. Amit Singh, Dr. Priya Sharma, and team",
      image: "/placeholder.svg?height=300&width=500&text=Renewable+Energy",
    },
    {
      title: "AI in Healthcare",
      description: "Using artificial intelligence for early detection of chronic diseases through non-invasive methods",
      impact: "Improved diagnosis accuracy by 40% in preliminary trials",
      researchers: "Dr. Rajesh Kumar, Dr. Meera Joshi, and team",
      image: "/placeholder.svg?height=300&width=500&text=AI+Healthcare",
    },
    {
      title: "Sustainable Architecture",
      description: "Developing eco-friendly building materials and designs for urban environments",
      impact: "Reduces carbon footprint by 35% compared to conventional construction",
      researchers: "Prof. Anand Mehta, Dr. Riya Patel, and team",
      image: "/placeholder.svg?height=300&width=500&text=Sustainable+Architecture",
    },
    {
      title: "Financial Inclusion Models",
      description: "Creating innovative financial models to extend banking services to underserved communities",
      impact: "Successfully implemented in 50+ villages, benefiting over 10,000 families",
      researchers: "Dr. Sunita Patel, Prof. Vikram Reddy, and team",
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
              Pillai University has been recognized for its excellence in various domains over the years.
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

      <section id="research" className="py-16 gradient-blue-purple text-white">
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

      <section id="students" className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text">Student Achievements</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
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
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
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

      <section id="faculty" className="py-16 gradient-blue-cyan text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Faculty Achievements</h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
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
                    <h3 className="text-xl font-bold text-white">{faculty.name}</h3>
                    <p className="text-blue-200">{faculty.department}</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-block px-2 py-1 rounded-full bg-blue-800 text-xs font-medium text-white mb-2">
                      {faculty.year}
                    </div>
                    <p className="text-blue-100">{faculty.achievement}</p>
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
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text">Rankings & Accreditations</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Pillai University is proud to be recognized by various national and international accreditation bodies.
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
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">Join Our Legacy of Excellence</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Become part of an institution committed to academic excellence, innovation, and holistic development.
            </p>
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

