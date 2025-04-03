import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import { Calendar, MapPin, Users, Music, Trophy, Lightbulb, ArrowRight } from "lucide-react"

export default function EventsPage() {
  const majorEvents = [
    {
      name: "Alegria",
      type: "Cultural Festival",
      description:
        "Annual cultural festival featuring performances, competitions, workshops, and celebrity appearances. Alegria is one of the most anticipated events of the year, bringing together students from all colleges of Pillai College.",
      date: "February",
      duration: "3 days",
      image: "/placeholder.svg?height=400&width=600&text=Alegria",
      highlights: [
        "Music and dance performances",
        "Fashion show",
        "Literary events",
        "Art exhibitions",
        "Celebrity performances",
      ],
    },
    {
      name: "Techtonic",
      type: "Technical Symposium",
      description:
        "Technical symposium with coding competitions, project exhibitions, robotics challenges, and guest lectures from industry experts. Techtonic showcases the technical prowess of Pillai College students.",
      date: "March",
      duration: "2 days",
      image: "/placeholder.svg?height=400&width=600&text=Techtonic",
      highlights: [
        "Hackathons",
        "Technical paper presentations",
        "Project exhibitions",
        "Robotics competitions",
        "Industry expert talks",
      ],
    },
    {
      name: "Sportathon",
      type: "Sports Tournament",
      description:
        "Inter-college sports tournament with competitions in cricket, football, basketball, athletics, and more. Sportathon promotes sportsmanship and physical fitness among students.",
      date: "December",
      duration: "1 week",
      image: "/placeholder.svg?height=400&width=600&text=Sportathon",
      highlights: [
        "Cricket tournament",
        "Football championship",
        "Basketball competition",
        "Athletics meet",
        "Indoor games",
      ],
    },
    {
      name: "Management Conclave",
      type: "Business Summit",
      description:
        "Business summit with industry leaders, panel discussions, case study competitions, and networking opportunities. The Management Conclave provides valuable insights into the corporate world.",
      date: "January",
      duration: "2 days",
      image: "/placeholder.svg?height=400&width=600&text=Management+Conclave",
      highlights: [
        "Panel discussions",
        "Case study competitions",
        "Business plan presentations",
        "Networking sessions",
        "Industry expert talks",
      ],
    },
  ]

  const regularEvents = [
    {
      name: "Guest Lectures",
      description:
        "Regular talks by industry experts, academics, and notable personalities to provide insights and inspiration.",
      icon: <Lightbulb className="h-8 w-8" />,
    },
    {
      name: "Cultural Performances",
      description:
        "Music, dance, and theatrical performances organized by various cultural clubs throughout the academic year.",
      icon: <Music className="h-8 w-8" />,
    },
    {
      name: "Inter-College Competitions",
      description: "Participation in various competitions hosted by other colleges and universities across the region.",
      icon: <Trophy className="h-8 w-8" />,
    },
    {
      name: "Workshops & Seminars",
      description:
        "Skill development workshops and academic seminars on various topics relevant to different disciplines.",
      icon: <Users className="h-8 w-8" />,
    },
  ]

  return (
    <>
      <HeroSection
        title="Events & Festivals"
        subtitle="Experience the vibrant campus life through our diverse range of events and festivals"
        backgroundImage="/placeholder.svg?height=600&width=1600&text=Events+and+Festivals"
      />

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">Major Annual Events</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our calendar is packed with exciting events that showcase talent, promote learning, and create lasting
              memories.
            </p>
          </div>

          <div className="space-y-12">
            {majorEvents.map((event, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "order-1 md:order-2" : "order-1"}`}>
                  <div className="relative h-[300px] rounded-xl overflow-hidden card-hover">
                    <Image src={event.image || "/placeholder.svg"} alt={event.name} fill className="object-cover" />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? "order-2 md:order-1" : "order-2"}`}>
                  <div className="inline-block px-3 py-1 rounded-lg bg-primary/10 text-primary mb-4">{event.type}</div>
                  <h3 className="text-2xl font-bold mb-3">{event.name}</h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    <span>
                      {event.date} | {event.duration}
                    </span>
                  </div>
                  <h4 className="font-semibold mt-4 mb-2">Highlights:</h4>
                  <ul className="list-disc pl-5 mb-4 text-muted-foreground">
                    {event.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                  <Button asChild className="mt-2">
                    <Link href={`/student-life/events/${event.name.toLowerCase()}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1-2 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl hero-text-enhanced">Regular Events</h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              In addition to our major annual events, we organize various regular events throughout the academic year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regularEvents.map((event, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-white mb-4">{event.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{event.name}</h3>
                <p className="text-blue-100">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">Event Calendar</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Plan your academic year with our comprehensive event calendar.
            </p>
          </div>

          <div className="card-with-border p-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-4 text-left">Month</th>
                    <th className="p-4 text-left">Event</th>
                    <th className="p-4 text-left">Type</th>
                    <th className="p-4 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="p-4">July</td>
                    <td className="p-4">Orientation Program</td>
                    <td className="p-4">Academic</td>
                    <td className="p-4">1 day</td>
                  </tr>
                  <tr className="bg-muted">
                    <td className="p-4">August</td>
                    <td className="p-4">Independence Day Celebration</td>
                    <td className="p-4">Cultural</td>
                    <td className="p-4">1 day</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="p-4">September</td>
                    <td className="p-4">Teachers' Day Celebration</td>
                    <td className="p-4">Cultural</td>
                    <td className="p-4">1 day</td>
                  </tr>
                  <tr className="bg-muted">
                    <td className="p-4">October</td>
                    <td className="p-4">Technical Workshop Series</td>
                    <td className="p-4">Technical</td>
                    <td className="p-4">1 week</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="p-4">November</td>
                    <td className="p-4">Inter-College Debate Competition</td>
                    <td className="p-4">Literary</td>
                    <td className="p-4">2 days</td>
                  </tr>
                  <tr className="bg-muted">
                    <td className="p-4">December</td>
                    <td className="p-4">Sportathon</td>
                    <td className="p-4">Sports</td>
                    <td className="p-4">1 week</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="p-4">January</td>
                    <td className="p-4">Management Conclave</td>
                    <td className="p-4">Business</td>
                    <td className="p-4">2 days</td>
                  </tr>
                  <tr className="bg-muted">
                    <td className="p-4">February</td>
                    <td className="p-4">Alegria</td>
                    <td className="p-4">Cultural</td>
                    <td className="p-4">3 days</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="p-4">March</td>
                    <td className="p-4">Techtonic</td>
                    <td className="p-4">Technical</td>
                    <td className="p-4">2 days</td>
                  </tr>
                  <tr className="bg-muted">
                    <td className="p-4">April</td>
                    <td className="p-4">Annual Day</td>
                    <td className="p-4">Cultural</td>
                    <td className="p-4">1 day</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1-3 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6 hero-text-enhanced">Event Venues</h2>
              <p className="text-blue-100 mb-6">
                Our campus features various venues for hosting events of different scales and types.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 text-blue-200" />
                  <div>
                    <h3 className="font-semibold text-white">Main Auditorium</h3>
                    <p className="text-blue-100">
                      Air-conditioned auditorium with 1000+ seating capacity, state-of-the-art sound and lighting
                      systems, and a large stage for performances.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 text-blue-200" />
                  <div>
                    <h3 className="font-semibold text-white">Open-Air Amphitheater</h3>
                    <p className="text-blue-100">
                      Outdoor venue with 500+ seating capacity, perfect for cultural performances and gatherings under
                      the stars.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 text-blue-200" />
                  <div>
                    <h3 className="font-semibold text-white">Conference Halls</h3>
                    <p className="text-blue-100">
                      Multiple conference halls with capacities ranging from 100 to 300 people, equipped with modern
                      presentation facilities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 text-blue-200" />
                  <div>
                    <h3 className="font-semibold text-white">Sports Complex</h3>
                    <p className="text-blue-100">
                      Indoor and outdoor sports facilities for hosting various sports events and competitions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Event+Venues"
                alt="Event Venues"
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
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text mb-6 hero-text-enhanced">Get Involved</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              There are many ways to participate in and contribute to our events and festivals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="card-with-border p-6">
                <h3 className="text-xl font-bold mb-3">Participate</h3>
                <p className="text-muted-foreground mb-4">
                  Showcase your talents by participating in various competitions and performances.
                </p>
                <Button asChild>
                  <Link href="/student-life/clubs">Join a Club</Link>
                </Button>
              </div>
              <div className="card-with-border p-6">
                <h3 className="text-xl font-bold mb-3">Volunteer</h3>
                <p className="text-muted-foreground mb-4">
                  Be part of the organizing team and gain valuable experience in event management.
                </p>
                <Button asChild>
                  <Link href="/student-life/events#volunteer">Volunteer Now</Link>
                </Button>
              </div>
              <div className="card-with-border p-6">
                <h3 className="text-xl font-bold mb-3">Attend</h3>
                <p className="text-muted-foreground mb-4">
                  Support your fellow students by attending events and cheering for them.
                </p>
                <Button asChild>
                  <Link href="/student-life/events#calendar">View Calendar</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

