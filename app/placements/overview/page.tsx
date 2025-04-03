import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import { Building, Play } from "lucide-react"

export default function PlacementOverviewPage() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      program: "B.Tech Computer Engineering, 2023",
      company: "Microsoft",
      role: "Software Engineer",
      package: "₹18 LPA",
      image: "/placeholder.svg?height=150&width=150&text=Student+1",
      testimonial:
        "The placement training provided by Pillai College was instrumental in helping me secure a position at Microsoft. The mock interviews and technical workshops prepared me well for the recruitment process.",
    },
    {
      name: "Priya Patel",
      program: "MBA Finance, 2023",
      company: "HDFC Bank",
      role: "Management Trainee",
      package: "₹12 LPA",
      image: "/placeholder.svg?height=150&width=150&text=Student+2",
      testimonial:
        "I'm grateful for the guidance and support provided by the Placement Cell. The industry interactions and internship opportunities helped me gain practical experience and land a job at HDFC Bank.",
    },
    {
      name: "Amit Kumar",
      program: "B.Tech Electronics, 2023",
      company: "Tata Consultancy Services",
      role: "System Engineer",
      package: "₹7.5 LPA",
      image: "/placeholder.svg?height=150&width=150&text=Student+3",
      testimonial:
        "The career counseling sessions helped me identify my strengths and choose the right career path. The placement process was smooth, and I received multiple job offers before graduation.",
    },
    {
      name: "Neha Singh",
      program: "B.Tech Information Technology, 2023",
      company: "Amazon",
      role: "SDE-1",
      package: "₹16 LPA",
      image: "/placeholder.svg?height=150&width=150&text=Student+4",
      testimonial:
        "The technical training and competitive programming sessions organized by the Placement Cell were extremely helpful. The mock interviews boosted my confidence and prepared me for the actual interviews.",
    },
  ]

  const topRecruiters = [
    { name: "Microsoft", logo: "/placeholder.svg?height=80&width=120&text=Microsoft", category: "IT" },
    { name: "Amazon", logo: "/placeholder.svg?height=80&width=120&text=Amazon", category: "IT" },
    { name: "TCS", logo: "/placeholder.svg?height=80&width=120&text=TCS", category: "IT" },
    { name: "Infosys", logo: "/placeholder.svg?height=80&width=120&text=Infosys", category: "IT" },
    { name: "Wipro", logo: "/placeholder.svg?height=80&width=120&text=Wipro", category: "IT" },
    { name: "Cognizant", logo: "/placeholder.svg?height=80&width=120&text=Cognizant", category: "IT" },
    { name: "HDFC Bank", logo: "/placeholder.svg?height=80&width=120&text=HDFC", category: "Banking" },
    { name: "ICICI Bank", logo: "/placeholder.svg?height=80&width=120&text=ICICI", category: "Banking" },
    { name: "Axis Bank", logo: "/placeholder.svg?height=80&width=120&text=Axis", category: "Banking" },
    { name: "L&T", logo: "/placeholder.svg?height=80&width=120&text=L&T", category: "Engineering" },
    { name: "Godrej", logo: "/placeholder.svg?height=80&width=120&text=Godrej", category: "Engineering" },
    { name: "Reliance", logo: "/placeholder.svg?height=80&width=120&text=Reliance", category: "Engineering" },
  ]

  return (
    <>
      <HeroSection
        title="Placement Overview"
        subtitle="Discover our placement records, testimonials, and top recruiters"
        backgroundImage="/placeholder.svg?height=600&width=1600&text=Placement+Overview"
      />

      <section id="statistics" className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">Placement Statistics</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our placement records reflect our commitment to student success and industry relevance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Placement+Statistics"
                alt="Placement Statistics"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">2022-23 Placement Highlights</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-1/2">
                    <div className="text-sm text-muted-foreground">Placement Rate</div>
                    <div className="text-3xl font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">of eligible students placed</div>
                  </div>
                  <div className="w-1/2">
                    <div className="text-sm text-muted-foreground">Total Offers</div>
                    <div className="text-3xl font-bold text-primary">1200+</div>
                    <div className="text-sm text-muted-foreground">across all programs</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/2">
                    <div className="text-sm text-muted-foreground">Highest Package</div>
                    <div className="text-3xl font-bold text-primary">₹42 LPA</div>
                    <div className="text-sm text-muted-foreground">international offer</div>
                  </div>
                  <div className="w-1/2">
                    <div className="text-sm text-muted-foreground">Average Package</div>
                    <div className="text-3xl font-bold text-primary">₹8.5 LPA</div>
                    <div className="text-sm text-muted-foreground">across all programs</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/2">
                    <div className="text-sm text-muted-foreground">Recruiting Companies</div>
                    <div className="text-3xl font-bold text-primary">250+</div>
                    <div className="text-sm text-muted-foreground">from various sectors</div>
                  </div>
                  <div className="w-1/2">
                    <div className="text-sm text-muted-foreground">Pre-Placement Offers</div>
                    <div className="text-3xl font-bold text-primary">120+</div>
                    <div className="text-sm text-muted-foreground">through internships</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Program-wise Placement Statistics</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-4 text-left">Program</th>
                    <th className="p-4 text-left">Placement Rate</th>
                    <th className="p-4 text-left">Highest Package (LPA)</th>
                    <th className="p-4 text-left">Average Package (LPA)</th>
                    <th className="p-4 text-left">Top Recruiters</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="p-4">B.Tech Computer Engineering</td>
                    <td className="p-4">98%</td>
                    <td className="p-4">₹42</td>
                    <td className="p-4">₹10.5</td>
                    <td className="p-4">Microsoft, Amazon, Google</td>
                  </tr>
                  <tr className="bg-muted">
                    <td className="p-4">B.Tech Information Technology</td>
                    <td className="p-4">97%</td>
                    <td className="p-4">₹38</td>
                    <td className="p-4">₹9.8</td>
                    <td className="p-4">TCS, Infosys, Wipro</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="p-4">B.Tech Electronics & Telecommunication</td>
                    <td className="p-4">92%</td>
                    <td className="p-4">₹18</td>
                    <td className="p-4">₹7.5</td>
                    <td className="p-4">Reliance, L&T, Samsung</td>
                  </tr>
                  <tr className="bg-muted">
                    <td className="p-4">B.Tech Mechanical Engineering</td>
                    <td className="p-4">90%</td>
                    <td className="p-4">₹16</td>
                    <td className="p-4">₹6.8</td>
                    <td className="p-4">Tata Motors, Mahindra, Godrej</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="p-4">MBA</td>
                    <td className="p-4">95%</td>
                    <td className="p-4">₹24</td>
                    <td className="p-4">₹8.2</td>
                    <td className="p-4">HDFC Bank, ICICI Bank, Deloitte</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 gradient-color-1-2 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl hero-text-enhanced">Testimonials & Success Stories</h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              Hear from our alumni about their placement experiences and how Pillai College helped them launch
              successful careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex flex-col sm:flex-row items-start">
                  <div className="sm:mr-6 mb-4 sm:mb-0">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                    <p className="text-blue-200 mb-1">{testimonial.program}</p>
                    <div className="flex items-center text-blue-100 mb-4">
                      <Building className="h-4 w-4 mr-2" />
                      <span>
                        {testimonial.company} | {testimonial.role} | {testimonial.package}
                      </span>
                    </div>
                    <blockquote className="italic text-blue-100">"{testimonial.testimonial}"</blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Play className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Watch Our Placement Journey</h3>
              <p className="text-blue-100 mb-4">
                Check out our video featuring placement success stories and campus recruitment drives.
              </p>
              <Button asChild className="bg-white text-black hover:bg-blue-50">
                <Link href="#">Watch Video</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="recruiters" className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">Top Recruiters</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our students are recruited by leading companies across various industries.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6">IT & Software</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {topRecruiters
                .filter((r) => r.category === "IT")
                .map((company, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center shadow-md"
                  >
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      width={120}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6">Banking & Finance</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {topRecruiters
                .filter((r) => r.category === "Banking")
                .map((company, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center shadow-md"
                  >
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      width={120}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Engineering & Manufacturing</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {topRecruiters
                .filter((r) => r.category === "Engineering")
                .map((company, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center shadow-md"
                  >
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      width={120}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16  text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6 hero-text-enhanced">Ready to Launch Your Career?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Join Pillai College and take advantage of our comprehensive placement support to kickstart your career.
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
                <Link href="/placements/team">Contact Placement Cell</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

