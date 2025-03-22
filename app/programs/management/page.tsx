import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import { CheckCircle, Clock, Calendar, Users, GraduationCap, Award, Briefcase } from "lucide-react"

export default function ManagementPage() {
  const programs = [
    {
      name: "Master of Business Administration (MBA)",
      slug: "master-of-business-administration",
      duration: "2 years",
      description:
        "Comprehensive management education with specializations in Finance, Marketing, HR, Operations, and more.",
      eligibility:
        "Bachelor's degree in any discipline with minimum 50% aggregate marks and valid CAT/MAT/XAT/CMAT/GMAT score.",
    },
    {
      name: "Executive MBA",
      slug: "executive-mba",
      duration: "1 year",
      description: "Accelerated program for working professionals with at least 3 years of work experience.",
      eligibility: "Bachelor's degree with minimum 50% aggregate marks and minimum 3 years of work experience.",
    },
    {
      name: "MBA in Business Analytics",
      slug: "mba-in-business-analytics",
      duration: "2 years",
      description: "Specialized program focusing on data analytics, business intelligence, and decision-making.",
      eligibility: "Bachelor's degree with minimum 50% aggregate marks and valid entrance test score.",
    },
    {
      name: "MBA in Digital Marketing",
      slug: "mba-in-digital-marketing",
      duration: "2 years",
      description: "Specialized program focusing on digital marketing strategies, social media, and e-commerce.",
      eligibility: "Bachelor's degree with minimum 50% aggregate marks and valid entrance test score.",
    },
    {
      name: "Ph.D. in Management",
      slug: "phd-in-management",
      duration: "3-5 years",
      description: "Research-focused program for advancing knowledge in various management disciplines.",
      eligibility:
        "Master's degree in Management or related field with minimum 55% aggregate marks and entrance test/interview.",
    },
  ]

  const facilities = [
    {
      name: "Bloomberg Terminal Lab",
      description: "State-of-the-art financial lab with Bloomberg terminals for real-time market data and analysis.",
    },
    {
      name: "Business Incubation Center",
      description: "Platform for nurturing entrepreneurial ideas and startups with mentoring and resources.",
    },
    {
      name: "Conference Halls",
      description: "Modern conference facilities for seminars, workshops, and corporate interactions.",
    },
    {
      name: "Digital Library",
      description: "Extensive collection of business books, journals, case studies, and online databases.",
    },
    {
      name: "Simulation Labs",
      description: "Business simulation software and tools for practical learning and decision-making scenarios.",
    },
    {
      name: "Group Discussion Rooms",
      description: "Dedicated spaces for group discussions, case study analysis, and team activities.",
    },
  ]

  return (
    <>
      <HeroSection
        title="Management Studies & Research"
        subtitle="Developing future business leaders through comprehensive management education and industry collaborations"
        backgroundImage="/placeholder.svg?height=600&width=1600&text=Management+Studies"
      />

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">
              Pillai Institute of Management Studies and Research
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Established in 2002, Pillai Institute of Management Studies and Research (PIMSR) offers comprehensive
              management education with a focus on developing leadership skills, strategic thinking, and business
              acumen. Our industry-oriented curriculum and case study approach prepare students for successful careers
              in the corporate world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Management+Institute"
                alt="Management Institute"
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
                    <div className="font-medium">2002</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Students</div>
                    <div className="font-medium">800+</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Programs</div>
                    <div className="font-medium">5+ MBA Programs with Various Specializations</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Accreditation</div>
                    <div className="font-medium">AICTE Approved, NBA Accredited</div>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                PIMSR is known for its excellence in management education, industry connections, and placement record.
                Our curriculum combines theoretical knowledge with practical applications through case studies, industry
                projects, and internships to ensure that our graduates are well-prepared for the challenges of the
                business world.
              </p>
              <Button asChild>
                <Link href="/admissions">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1-2 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl hero-text-enhanced">Our Programs</h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              Explore our diverse range of management programs designed to prepare you for leadership roles in the
              corporate world.
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
              Our management programs are supported by modern facilities and resources that provide an enriching
              learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="card-with-border p-6">
                <h3 className="text-xl font-bold mb-3">{facility.name}</h3>
                <p className="text-muted-foreground">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1-3 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6 hero-text-enhanced">Industry Connections</h2>
              <p className="text-blue-100 mb-6">
                We have strong partnerships with leading companies across various sectors. These connections provide our
                students with valuable industry exposure, internship opportunities, and placement advantages.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-blue-200" />
                  <div>
                    <h3 className="font-semibold text-white">Corporate Mentorship</h3>
                    <p className="text-blue-100">
                      Industry professionals mentor students, providing guidance on career paths and industry trends.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-blue-200" />
                  <div>
                    <h3 className="font-semibold text-white">Guest Lectures</h3>
                    <p className="text-blue-100">
                      Regular guest lectures by industry experts to provide insights into real-world business challenges
                      and solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-blue-200" />
                  <div>
                    <h3 className="font-semibold text-white">Live Projects</h3>
                    <p className="text-blue-100">
                      Opportunities to work on real business projects with partner companies, applying classroom
                      learning to practical situations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-blue-200" />
                  <div>
                    <h3 className="font-semibold text-white">Industry Visits</h3>
                    <p className="text-blue-100">
                      Regular visits to companies to understand their operations, management practices, and business
                      models.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-white text-black hover:bg-blue-50">
                  <Link href="/placements">Explore Placement Opportunities</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Industry+Connections"
                alt="Industry Connections"
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
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">Career Opportunities</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our MBA graduates pursue successful careers in various sectors and roles. The comprehensive management
              education and practical skills gained during the program prepare them for diverse career paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-with-border p-6">
              <div className="text-primary mb-4">
                <Briefcase className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Corporate Roles</h3>
              <ul className="list-disc pl-5 mb-4 text-muted-foreground">
                <li>Marketing Manager</li>
                <li>Financial Analyst</li>
                <li>HR Manager</li>
                <li>Operations Manager</li>
                <li>Business Analyst</li>
                <li>Project Manager</li>
              </ul>
            </div>
            <div className="card-with-border p-6">
              <div className="text-primary mb-4">
                <Briefcase className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Industry Sectors</h3>
              <ul className="list-disc pl-5 mb-4 text-muted-foreground">
                <li>Banking & Finance</li>
                <li>IT & Consulting</li>
                <li>FMCG & Retail</li>
                <li>Manufacturing</li>
                <li>Healthcare</li>
                <li>E-commerce</li>
              </ul>
            </div>
            <div className="card-with-border p-6">
              <div className="text-primary mb-4">
                <Briefcase className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Top Recruiters</h3>
              <ul className="list-disc pl-5 mb-4 text-muted-foreground">
                <li>HDFC Bank</li>
                <li>Deloitte</li>
                <li>TCS</li>
                <li>Amazon</li>
                <li>Reliance Industries</li>
                <li>Infosys</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6 hero-text-enhanced">
              Ready to Begin Your Management Journey?
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Take the first step towards a rewarding career in management by applying to Pillai Institute of Management
              Studies and Research.
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

