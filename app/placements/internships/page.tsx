import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import { Building, Calendar, CheckCircle, Briefcase, ArrowRight, Users, Award } from "lucide-react"

export default function PlacementInternshipsPage() {
  const placementProcess = [
    {
      title: "Pre-Placement Talks",
      description:
        "Companies visit the campus to introduce their organization, job profiles, and selection process to students.",
      icon: <Building className="h-8 w-8" />,
    },
    {
      title: "Aptitude Tests",
      description:
        "Written or online tests to assess quantitative, logical reasoning, verbal, and technical skills of students.",
      icon: <CheckCircle className="h-8 w-8" />,
    },
    {
      title: "Group Discussions",
      description:
        "Assessment of communication skills, knowledge, team dynamics, and leadership qualities through group discussions.",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "Technical Interviews",
      description:
        "In-depth evaluation of technical knowledge and problem-solving abilities relevant to the job profile.",
      icon: <Briefcase className="h-8 w-8" />,
    },
    {
      title: "HR Interviews",
      description:
        "Final round to assess personality, attitude, cultural fit, and career aspirations of the candidates.",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "Job Offers",
      description: "Selected candidates receive job offers with details of role, compensation, and joining date.",
      icon: <Award className="h-8 w-8" />,
    },
  ]

  const internshipPrograms = [
    {
      title: "Summer Internships",
      duration: "2-3 months (May-July)",
      eligibility: "Students in pre-final year of their program",
      description:
        "Intensive internships during summer break to gain hands-on experience in the industry. Many companies offer pre-placement offers (PPOs) to outstanding interns.",
      companies: ["Microsoft", "Amazon", "TCS", "Infosys", "HDFC Bank", "Reliance Industries"],
    },
    {
      title: "Winter Internships",
      duration: "1-2 months (December-January)",
      eligibility: "Students in second/third year of their program",
      description:
        "Short-term internships during winter break to explore career options and gain initial industry exposure.",
      companies: ["Wipro", "Cognizant", "ICICI Bank", "L&T", "Godrej", "Deloitte"],
    },
    {
      title: "Semester Internships",
      duration: "6 months",
      eligibility: "Final year students (as part of curriculum)",
      description:
        "Long-term internships integrated into the curriculum, allowing students to work on substantial projects while completing their studies.",
      companies: ["IBM", "Capgemini", "Axis Bank", "Tata Motors", "Mahindra", "HCL"],
    },
    {
      title: "Research Internships",
      duration: "3-6 months",
      eligibility: "Students with strong academic record and research aptitude",
      description:
        "Specialized internships focused on research and development activities in collaboration with industry and academic partners.",
      companies: ["ISRO", "DRDO", "BARC", "IITs", "CSIR Labs", "Research Organizations"],
    },
  ]

  const topRecruiters = [
    { name: "Microsoft", logo: "/placeholder.svg?height=80&width=120&text=Microsoft", category: "IT" },
    { name: "Amazon", logo: "/placeholder.svg?height=80&width=120&text=Amazon", category: "IT" },
    { name: "TCS", logo: "/placeholder.svg?height=80&width=120&text=TCS", category: "IT" },
    { name: "Infosys", logo: "/placeholder.svg?height=80&width=120&text=Infosys", category: "IT" },
    { name: "HDFC Bank", logo: "/placeholder.svg?height=80&width=120&text=HDFC", category: "Banking" },
    { name: "ICICI Bank", logo: "/placeholder.svg?height=80&width=120&text=ICICI", category: "Banking" },
    { name: "L&T", logo: "/placeholder.svg?height=80&width=120&text=L&T", category: "Engineering" },
    { name: "Reliance", logo: "/placeholder.svg?height=80&width=120&text=Reliance", category: "Engineering" },
  ]

  return (
    <>
      <HeroSection
        title="Placement & Internships"
        subtitle="Launching successful careers through industry connections and comprehensive placement support"
        backgroundImage="/placeholder.svg?height=600&width=1600&text=Placement+and+Internships"
      />

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">Placement Process</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our structured placement process ensures that students are well-prepared and companies find the right
              talent for their organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placementProcess.map((step, index) => (
              <div key={index} className="card-with-border p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground mr-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 text-primary">{step.icon}</div>
                  <p className="text-muted-foreground">{step.description}</p>
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
                src="/placeholder.svg?height=800&width=600&text=Placement+Statistics"
                alt="Placement Statistics"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6 hero-text-enhanced">Placement Highlights</h2>
              <p className="text-blue-100 mb-6">
                Our placement records reflect our commitment to student success and industry relevance. We have
                consistently achieved excellent placement statistics across all programs.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-1/2">
                    <div className="text-sm text-blue-200">Placement Rate</div>
                    <div className="text-3xl font-bold text-white">95%</div>
                    <div className="text-sm text-blue-200">of eligible students placed</div>
                  </div>
                  <div className="w-1/2">
                    <div className="text-sm text-blue-200">Total Offers</div>
                    <div className="text-3xl font-bold text-white">1200+</div>
                    <div className="text-sm text-blue-200">across all programs</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/2">
                    <div className="text-sm text-blue-200">Highest Package</div>
                    <div className="text-3xl font-bold text-white">₹42 LPA</div>
                    <div className="text-sm text-blue-200">international offer</div>
                  </div>
                  <div className="w-1/2">
                    <div className="text-sm text-blue-200">Average Package</div>
                    <div className="text-3xl font-bold text-white">₹8.5 LPA</div>
                    <div className="text-sm text-blue-200">across all programs</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/2">
                    <div className="text-sm text-blue-200">Recruiting Companies</div>
                    <div className="text-3xl font-bold text-white">250+</div>
                    <div className="text-sm text-blue-200">from various sectors</div>
                  </div>
                  <div className="w-1/2">
                    <div className="text-sm text-blue-200">Pre-Placement Offers</div>
                    <div className="text-3xl font-bold text-white">120+</div>
                    <div className="text-sm text-blue-200">through internships</div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-white text-blue-700 hover:bg-blue-50">
                  <Link href="/placements/overview#statistics">View Detailed Statistics</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">Internship Programs</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer various internship opportunities to help students gain practical experience and enhance their
              employability.
            </p>
          </div>

          <div className="space-y-8">
            {internshipPrograms.map((program, index) => (
              <div key={index} className="card-with-border p-6">
                <div className="flex flex-col md:flex-row md:items-start">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold">{program.title}</h3>
                    <div className="flex items-center text-muted-foreground mt-2">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span>{program.duration}</span>
                    </div>
                  </div>
                  <div className="md:w-2/4 mb-4 md:mb-0 md:px-6">
                    <p className="text-muted-foreground mb-3">{program.description}</p>
                    <div className="mb-3">
                      <span className="font-semibold">Eligibility: </span>
                      <span className="text-muted-foreground">{program.eligibility}</span>
                    </div>
                  </div>
                  <div className="md:w-1/4">
                    <div className="bg-muted rounded-lg p-3">
                      <h4 className="font-semibold text-sm mb-2">Top Companies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.companies.slice(0, 3).map((company, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {company}
                          </span>
                        ))}
                        {program.companies.length > 3 && (
                          <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            +{program.companies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
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
            <h2 className="text-3xl font-bold sm:text-4xl hero-text-enhanced">Top Recruiters</h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              Our students are recruited by leading companies across various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {topRecruiters.map((company, index) => (
              <div key={index} className="bg-white rounded-lg p-4 flex items-center justify-center">
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

          <div className="mt-12 text-center">
            <Button asChild className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/placements/overview#recruiters">View All Recruiters</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6 gradient-text hero-text-enhanced">
                Placement Assistance
              </h2>
              <p className="text-muted-foreground mb-6">
                Our Placement Cell provides comprehensive assistance to students throughout the placement and internship
                process.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Resume Building</h3>
                    <p className="text-muted-foreground">
                      Guidance on creating professional resumes and portfolios that highlight students' strengths and
                      achievements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Mock Interviews</h3>
                    <p className="text-muted-foreground">
                      Practice sessions with industry experts to prepare students for technical and HR interviews.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Group Discussion Practice</h3>
                    <p className="text-muted-foreground">
                      Regular GD sessions to improve communication skills, logical thinking, and team dynamics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Company-Specific Preparation</h3>
                    <p className="text-muted-foreground">
                      Targeted preparation for specific companies based on their selection process and job requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/placements/training">
                    Learn About Training Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Placement+Assistance"
                alt="Placement Assistance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6 hero-text-enhanced">Ready to Launch Your Career?</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Join Pillai University and take advantage of our comprehensive placement and internship support to
              kickstart your career.
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
                <Link href="/placements/team">Contact Placement Cell</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

