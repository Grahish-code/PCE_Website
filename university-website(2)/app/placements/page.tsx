import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import { Briefcase, TrendingUp, Users, Building } from "lucide-react"

export default function PlacementsPage() {
  return (
    <>
      <HeroSection
        title="Placements"
        subtitle="Launching successful careers through industry connections and comprehensive placement support"
        backgroundImage="/placeholder.svg?height=600&width=1600&text=Placements"
      />

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">Placement Overview</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Pillai University has a strong track record of placing students in leading companies across various
              industries. Our dedicated Placement Cell works tirelessly to connect students with the best career
              opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Placement+Activities"
                alt="Placement Activities"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Placement Process</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Pre-Placement Training</h4>
                    <p className="text-muted-foreground">
                      Comprehensive training in technical skills, aptitude, and soft skills to prepare students for the
                      recruitment process.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Campus Recruitment Drives</h4>
                    <p className="text-muted-foreground">
                      Regular on-campus and virtual recruitment drives with leading companies from various sectors.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Internship Opportunities</h4>
                    <p className="text-muted-foreground">
                      Facilitation of internships that often lead to pre-placement offers and valuable industry
                      experience.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Career Counseling</h4>
                    <p className="text-muted-foreground">
                      Personalized guidance to help students identify their strengths and choose the right career path.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/placements/overview">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-blue-purple text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl hero-text-enhanced">Placement Statistics</h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              Our placement records reflect our commitment to student success and industry relevance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-xl text-blue-100 mb-4">Placement Rate</div>
              <p className="text-blue-200">Percentage of eligible students placed through campus recruitment</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-white mb-2">₹12L</div>
              <div className="text-xl text-blue-100 mb-4">Highest Package</div>
              <p className="text-blue-200">Highest annual package offered to our students</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-white mb-2">₹6.5L</div>
              <div className="text-xl text-blue-100 mb-4">Average Package</div>
              <p className="text-blue-200">Average annual package across all programs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-white mb-2">250+</div>
              <div className="text-xl text-blue-100 mb-4">Recruiting Companies</div>
              <p className="text-blue-200">Number of companies that visit our campus for recruitment</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/placements/overview#statistics">View Detailed Statistics</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              The Placement Cell offers a range of services to help students prepare for and secure rewarding careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover rounded-xl overflow-hidden">
              <div className="bg-white dark:bg-gray-800 p-6 h-full flex flex-col">
                <div className="text-primary mb-4">
                  <Briefcase className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">Placement & Internships</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  Coordination with companies for campus placements and internship opportunities for students across all
                  programs.
                </p>
                <Button asChild variant="outline">
                  <Link href="/placements/internships">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="card-hover rounded-xl overflow-hidden">
              <div className="bg-white dark:bg-gray-800 p-6 h-full flex flex-col">
                <div className="text-primary mb-4">
                  <TrendingUp className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">Training & Development</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  Comprehensive training programs to enhance technical skills, aptitude, and soft skills required for
                  successful placements.
                </p>
                <Button asChild variant="outline">
                  <Link href="/placements/training">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="card-hover rounded-xl overflow-hidden">
              <div className="bg-white dark:bg-gray-800 p-6 h-full flex flex-col">
                <div className="text-primary mb-4">
                  <Users className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">Placement Cell Team</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  Meet our dedicated team of placement officers who work tirelessly to connect students with the best
                  career opportunities.
                </p>
                <Button asChild variant="outline">
                  <Link href="/placements/team">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-blue-cyan text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl hero-text-enhanced">Top Recruiters</h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              Our students are recruited by leading companies across various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <div key={item} className="bg-white rounded-lg p-4 flex items-center justify-center">
                <Image
                  src={`/placeholder.svg?height=80&width=120&text=Company ${item}`}
                  alt={`Company ${item}`}
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/placements/overview#recruiters">View All Recruiters</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">Student Testimonials</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from our students about their placement experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                program: "B.Tech Computer Engineering",
                company: "Microsoft",
                image: "/placeholder.svg?height=150&width=150&text=Student+1",
                testimonial:
                  "The placement training provided by Pillai University was instrumental in helping me secure a position at Microsoft. The mock interviews and technical workshops prepared me well for the recruitment process.",
              },
              {
                name: "Priya Patel",
                program: "MBA Finance",
                company: "HDFC Bank",
                image: "/placeholder.svg?height=150&width=150&text=Student+2",
                testimonial:
                  "I'm grateful for the guidance and support provided by the Placement Cell. The industry interactions and internship opportunities helped me gain practical experience and land a job at HDFC Bank.",
              },
              {
                name: "Amit Kumar",
                program: "B.Tech Electronics",
                company: "Tata Consultancy Services",
                image: "/placeholder.svg?height=150&width=150&text=Student+3",
                testimonial:
                  "The career counseling sessions helped me identify my strengths and choose the right career path. The placement process was smooth, and I received multiple job offers before graduation.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="card-hover rounded-xl overflow-hidden">
                <div className="bg-white dark:bg-gray-800 p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-primary">{testimonial.program}</p>
                    <div className="flex items-center mt-1">
                      <Building className="h-4 w-4 mr-1 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  <blockquote className="italic text-muted-foreground">"{testimonial.testimonial}"</blockquote>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/placements/overview#testimonials">View More Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6 hero-text-enhanced">Contact Placement Cell</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              For any queries related to placements, internships, or career guidance, please feel free to contact our
              Placement Cell.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/placements/team#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

