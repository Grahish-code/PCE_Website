import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import { Trophy, Calendar, CheckCircle, Dumbbell, ArrowRight } from "lucide-react"

export default function SportsPage() {
  const facilities = [
    {
      name: "Cricket Ground",
      description:
        "Full-sized cricket ground with well-maintained pitch and outfield, complete with practice nets and pavilion.",
      image: "/placeholder.svg?height=400&width=600&text=Cricket+Ground",
      features: [
        "Standard size cricket pitch",
        "Practice nets",
        "Pavilion with changing rooms",
        "Spectator seating",
        "Floodlights for evening matches",
      ],
    },
    {
      name: "Football Field",
      description: "FIFA standard football field with natural grass, goal posts, and markings for various age groups.",
      image: "/placeholder.svg?height=400&width=600&text=Football+Field",
      features: [
        "Standard size football field",
        "Natural grass surface",
        "Goal posts and corner flags",
        "Spectator seating",
        "Floodlights for evening matches",
      ],
    },
    {
      name: "Basketball Courts",
      description: "Multiple indoor and outdoor basketball courts with professional-grade flooring and equipment.",
      image: "/placeholder.svg?height=400&width=600&text=Basketball+Courts",
      features: [
        "Indoor and outdoor courts",
        "Professional-grade flooring",
        "Adjustable height hoops",
        "Scoreboard",
        "Spectator seating",
      ],
    },
    {
      name: "Swimming Pool",
      description:
        "Olympic-sized swimming pool with temperature control, diving boards, and separate training pool for beginners.",
      image: "/placeholder.svg?height=400&width=600&text=Swimming+Pool",
      features: [
        "Olympic-sized main pool",
        "Training pool for beginners",
        "Diving boards",
        "Temperature control",
        "Changing rooms and showers",
      ],
    },
    {
      name: "Gymnasium",
      description:
        "Modern gymnasium with cardio equipment, weight training area, and dedicated spaces for aerobics and yoga.",
      image: "/placeholder.svg?height=400&width=600&text=Gymnasium",
      features: [
        "Cardio equipment",
        "Weight training area",
        "Aerobics and yoga space",
        "Qualified trainers",
        "Locker rooms and showers",
      ],
    },
    {
      name: "Indoor Sports Complex",
      description:
        "Multi-purpose indoor sports complex for badminton, table tennis, volleyball, and other indoor games.",
      image: "/placeholder.svg?height=400&width=600&text=Indoor+Sports+Complex",
      features: [
        "Badminton courts",
        "Table tennis tables",
        "Volleyball court",
        "Chess and carrom facilities",
        "Air-conditioned environment",
      ],
    },
  ]

  const achievements = [
    {
      title: "Inter-University Cricket Championship",
      year: "2023",
      position: "Winners",
      description: "Our cricket team won the Inter-University Cricket Championship for the third consecutive year.",
    },
    {
      title: "State-level Basketball Tournament",
      year: "2023",
      position: "Runners-up",
      description: "Our men's basketball team secured the second position in the State-level Basketball Tournament.",
    },
    {
      title: "National Swimming Championship",
      year: "2022",
      position: "Gold Medal (200m Freestyle)",
      description:
        "Our student Rahul Sharma won the gold medal in 200m freestyle at the National Swimming Championship.",
    },
    {
      title: "Inter-College Football Tournament",
      year: "2022",
      position: "Winners",
      description: "Our football team emerged as champions in the prestigious Inter-College Football Tournament.",
    },
  ]

  return (
    <>
      <HeroSection
        title="Sports Facilities"
        subtitle="World-class sports infrastructure for physical fitness and competitive excellence"
        backgroundImage="/placeholder.svg?height=600&width=1600&text=Sports+Facilities"
      />

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">Our Sports Facilities</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              At Pillai University, we believe in the holistic development of our students. Our extensive sports
              facilities and programs encourage physical fitness, teamwork, and healthy competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.slice(0, 3).map((facility, index) => (
              <div key={index} className="card-hover rounded-xl overflow-hidden">
                <div className="bg-white dark:bg-gray-800">
                  <div className="relative h-48">
                    <Image
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{facility.name}</h3>
                    <p className="text-muted-foreground mb-4">{facility.description}</p>
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="list-disc pl-5 mb-4 text-muted-foreground">
                      {facility.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <Button asChild variant="outline">
                      <Link href={`/student-life/sports#${facility.name.toLowerCase().replace(/\s+/g, "-")}`}>
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1-2 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Sports+Excellence"
                alt="Sports Excellence"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6 hero-text-enhanced">Sports Excellence Program</h2>
              <p className="text-blue-100 mb-6">
                Our Sports Excellence Program is designed to identify and nurture sporting talent among our students.
                The program provides specialized training, coaching, and support to help students excel in their chosen
                sports.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-blue-200" />
                  <div>
                    <h3 className="font-semibold text-white">Professional Coaching</h3>
                    <p className="text-blue-100">
                      Trained coaches and physical education instructors to guide students in various sports.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-blue-200" />
                  <div>
                    <h3 className="font-semibold text-white">Sports Scholarships</h3>
                    <p className="text-blue-100">
                      Financial support for students who excel in sports at state, national, or international levels.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-blue-200" />
                  <div>
                    <h3 className="font-semibold text-white">Fitness Programs</h3>
                    <p className="text-blue-100">
                      Customized fitness and nutrition programs for athletes to enhance their performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-blue-200" />
                  <div>
                    <h3 className="font-semibold text-white">Competition Exposure</h3>
                    <p className="text-blue-100">
                      Opportunities to participate in various inter-college, university, and national level
                      competitions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-white text-blue-700 hover:bg-blue-50">
                  <Link href="/student-life/sports#excellence-program">Join the Program</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">More Sports Facilities</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our additional sports facilities designed to cater to various sporting interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.slice(3).map((facility, index) => (
              <div key={index} className="card-hover rounded-xl overflow-hidden">
                <div className="bg-white dark:bg-gray-800">
                  <div className="relative h-48">
                    <Image
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{facility.name}</h3>
                    <p className="text-muted-foreground mb-4">{facility.description}</p>
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="list-disc pl-5 mb-4 text-muted-foreground">
                      {facility.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <Button asChild variant="outline">
                      <Link href={`/student-life/sports#${facility.name.toLowerCase().replace(/\s+/g, "-")}`}>
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1-3 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl hero-text-enhanced">Sports Achievements</h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              Our students have excelled in various sports competitions at the university, state, and national levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    <Trophy className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold text-white mr-3">{achievement.title}</h3>
                      <span className="bg-blue-800 text-blue-100 text-xs font-medium px-2.5 py-0.5 rounded">
                        {achievement.year}
                      </span>
                    </div>
                    <div className="text-blue-200 font-semibold mb-2">{achievement.position}</div>
                    <p className="text-blue-100">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/achievements#sports">View All Sports Achievements</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">Sports Events</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              We organize various sports events throughout the academic year to promote sportsmanship and physical
              fitness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-with-border p-6">
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 mr-3 text-primary" />
                <h3 className="text-xl font-bold">Annual Sports Meet</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                A week-long sports extravaganza featuring competitions in various sports disciplines. Students from all
                colleges participate in this grand event to showcase their sporting talents.
              </p>
              <div className="flex items-center text-muted-foreground mb-4">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                <span>December | 1 week</span>
              </div>
              <Button asChild>
                <Link href="/student-life/events#sportathon">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="card-with-border p-6">
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 mr-3 text-primary" />
                <h3 className="text-xl font-bold">Inter-College Tournaments</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Regular tournaments in cricket, football, basketball, and other sports where our teams compete with
                teams from other colleges and universities.
              </p>
              <div className="flex items-center text-muted-foreground mb-4">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                <span>Throughout the year</span>
              </div>
              <Button asChild>
                <Link href="/student-life/events#tournaments">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6 hero-text-enhanced">Join Our Sports Teams</h2>
              <p className="text-blue-100 mb-6">
                We have various sports teams that participate in inter-college, university, and national level
                competitions. Join our teams to showcase your sporting talents and represent Pillai University.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Dumbbell className="h-8 w-8 mx-auto mb-2 text-white" />
                  <h3 className="font-semibold text-white">Cricket Team</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Dumbbell className="h-8 w-8 mx-auto mb-2 text-white" />
                  <h3 className="font-semibold text-white">Football Team</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Dumbbell className="h-8 w-8 mx-auto mb-2 text-white" />
                  <h3 className="font-semibold text-white">Basketball Team</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Dumbbell className="h-8 w-8 mx-auto mb-2 text-white" />
                  <h3 className="font-semibold text-white">Swimming Team</h3>
                </div>
              </div>
              <Button asChild className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="/student-life/sports#join-teams">Join a Team</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Sports+Teams"
                alt="Sports Teams"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

