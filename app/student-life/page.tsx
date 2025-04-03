import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import { ArrowRight, Users, BookOpen, Music, Palette, Code, Dumbbell, Trophy } from "lucide-react"

export default function StudentLifePage() {
  const facilities = [
    {
      name: "Modern Hostels",
      description: "Comfortable accommodation with Wi-Fi, dining facilities, recreation areas, and 24/7 security.",
      image: "/placeholder.svg?height=300&width=500&text=Hostels",
    },
    {
      name: "Sports Complex",
      description:
        "State-of-the-art sports facilities including cricket ground, football field, basketball courts, and indoor games.",
      image: "/placeholder.svg?height=300&width=500&text=Sports+Complex",
    },
    {
      name: "Central Library",
      description: "Extensive collection of books, journals, e-resources, and comfortable reading spaces.",
      image: "/placeholder.svg?height=300&width=500&text=Library",
    },
    {
      name: "Cafeterias & Food Courts",
      description: "Multiple dining options serving a variety of cuisines at affordable prices.",
      image: "/placeholder.svg?height=300&width=500&text=Cafeteria",
    },
    {
      name: "Auditorium & Amphitheater",
      description: "Venues for cultural events, seminars, and performances with modern audio-visual equipment.",
      image: "/placeholder.svg?height=300&width=500&text=Auditorium",
    },
    {
      name: "Health Center",
      description: "On-campus medical facility with qualified doctors and nurses for emergency and routine healthcare.",
      image: "/placeholder.svg?height=300&width=500&text=Health+Center",
    },
  ]

  const clubs = [
    {
      name: "Cultural Club",
      description:
        "Organizes cultural events, festivals, and performances to celebrate diversity and artistic expression.",
      icon: <Music className="h-8 w-8" />,
    },
    {
      name: "Art & Design Club",
      description: "Platform for students to explore their creativity through various art forms and design projects.",
      icon: <Palette className="h-8 w-8" />,
    },
    {
      name: "Tech Club",
      description: "Focuses on technology trends, coding competitions, hackathons, and innovative projects.",
      icon: <Code className="h-8 w-8" />,
    },
    {
      name: "Sports Club",
      description:
        "Promotes sports activities, organizes tournaments, and trains students for inter-college competitions.",
      icon: <Dumbbell className="h-8 w-8" />,
    },
    {
      name: "Literary Club",
      description: "Encourages reading, writing, debates, and literary discussions among students.",
      icon: <BookOpen className="h-8 w-8" />,
    },
    {
      name: "Social Service Club",
      description: "Engages in community service, social awareness campaigns, and volunteer activities.",
      icon: <Users className="h-8 w-8" />,
    },
  ]

  const events = [
    {
      name: "Alegria",
      description:
        "Annual cultural festival featuring performances, competitions, workshops, and celebrity appearances.",
      date: "February",
      image: "/placeholder.svg?height=300&width=500&text=Alegria",
    },
    {
      name: "Techtonic",
      description:
        "Technical symposium with coding competitions, project exhibitions, robotics challenges, and guest lectures.",
      date: "March",
      image: "/placeholder.svg?height=300&width=500&text=Techtonic",
    },
    {
      name: "Sportathon",
      description:
        "Inter-college sports tournament with competitions in cricket, football, basketball, athletics, and more.",
      date: "December",
      image: "/placeholder.svg?height=300&width=500&text=Sportathon",
    },
    {
      name: "Management Conclave",
      description:
        "Business summit with industry leaders, panel discussions, case study competitions, and networking opportunities.",
      date: "January",
      image: "/placeholder.svg?height=300&width=500&text=Management+Conclave",
    },
  ]

  return (
    <>
      <HeroSection
        title="Student Life"
        subtitle="Experience a vibrant campus life beyond academics"
        backgroundImage="/placeholder.svg?height=600&width=1600&text=Student+Life"
      />

      <section id="facilities" className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text">Campus Facilities</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our campus is designed to provide a comfortable and enriching environment for students to learn, grow, and
              thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
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
                    <h3 className="text-xl font-bold mb-2">{facility.name}</h3>
                    <p className="text-muted-foreground mb-4">{facility.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="clubs" className="py-16 gradient-color-1-2 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Clubs & Societies</h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              Join our diverse range of student clubs and societies to pursue your interests, develop new skills, and
              build lasting friendships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club, index) => (
              <div key={index} className="card-hover rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 text-white">{club.icon}</div>
                    <h3 className="text-xl font-bold text-white">{club.name}</h3>
                  </div>
                  <p className="text-blue-100 mb-4">{club.description}</p>
                  <Link href="#" className="inline-flex items-center text-white hover:text-blue-200 transition-colors">
                    Join Club <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/clubs">Explore All Clubs</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="events" className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text">Events & Activities</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our calendar is packed with exciting events and activities throughout the academic year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div key={index} className="card-hover rounded-xl overflow-hidden">
                <div className="bg-white dark:bg-gray-800">
                  <div className="relative h-64">
                    <Image src={event.image || "/placeholder.svg"} alt={event.name} fill className="object-cover" />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {event.date}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{event.name}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
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
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="sports" className="py-16 gradient-color-1-3 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">Sports & Recreation</h2>
              <p className="text-blue-100 mb-6">
                At Pillai College, we believe in the holistic development of our students. Our extensive sports
                facilities and programs encourage physical fitness, teamwork, and healthy competition among students.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Trophy className="h-5 w-5 mr-2 mt-0.5 text-blue-200 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Championship Teams</h3>
                    <p className="text-blue-100">
                      Our College teams have won numerous inter-university tournaments in cricket, football,
                      basketball, and athletics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Dumbbell className="h-5 w-5 mr-2 mt-0.5 text-blue-200 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Modern Facilities</h3>
                    <p className="text-blue-100">
                      Access to state-of-the-art sports facilities including indoor and outdoor courts, swimming pool,
                      gymnasium, and fitness center.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 mr-2 mt-0.5 text-blue-200 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Professional Coaching</h3>
                    <p className="text-blue-100">
                      Trained coaches and physical education instructors to guide students in various sports and fitness
                      activities.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="/sports">Explore Sports Programs</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Sports+Facilities"
                alt="Sports Facilities"
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
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text">Student Testimonials</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear what our students have to say about their experience at Pillai College.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ananya Sharma",
                program: "B.Tech Computer Engineering",
                year: "3rd Year",
                testimonial:
                  "The vibrant campus life at Pillai College has given me opportunities to explore my interests beyond academics. The tech club and cultural events have been the highlights of my journey so far.",
                image: "/placeholder.svg?height=300&width=300&text=Student+1",
              },
              {
                name: "Rohan Mehta",
                program: "MBA Finance",
                year: "2nd Year",
                testimonial:
                  "The balance between academics and extracurricular activities is perfect here. I've been able to participate in management conclaves, sports tournaments, and still maintain good academic performance.",
                image: "/placeholder.svg?height=300&width=300&text=Student+2",
              },
              {
                name: "Priya Patel",
                program: "B.Arch",
                year: "4th Year",
                testimonial:
                  "The design workshops, cultural festivals, and international exchange programs have broadened my perspective. The campus facilities and supportive environment make student life truly enjoyable.",
                image: "/placeholder.svg?height=300&width=300&text=Student+3",
              },
            ].map((student, index) => (
              <div key={index} className="card-hover rounded-xl overflow-hidden">
                <div className="bg-white dark:bg-gray-800 p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                      <Image
                        src={student.image || "/placeholder.svg"}
                        alt={student.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold">{student.name}</h3>
                    <p className="text-sm text-primary">
                      {student.program}, {student.year}
                    </p>
                  </div>
                  <blockquote className="italic text-muted-foreground">"{student.testimonial}"</blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">
              Ready to Experience Student Life at Pillai College?
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Join our vibrant community and make the most of your College years with endless opportunities for
              growth and enjoyment.
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
                <Link href="/campus-tour">Schedule a Campus Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

