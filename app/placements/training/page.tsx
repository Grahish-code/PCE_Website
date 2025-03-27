import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import { Code, Users, Briefcase, CheckCircle, Calendar, ArrowRight, Target } from "lucide-react"

export default function TrainingDevelopmentPage() {
  const trainingPrograms = [
    {
      title: "Technical Skills Development",
      description: "Comprehensive training in technical skills relevant to various industries and job roles.",
      icon: <Code className="h-8 w-8" />,
      modules: [
        "Programming Languages (Java, Python, C++)",
        "Web Development (HTML, CSS, JavaScript, React)",
        "Database Management (SQL, MongoDB)",
        "Cloud Computing (AWS, Azure)",
        "Data Science and Analytics",
        "Mobile App Development",
      ],
    },
    {
      title: "Aptitude Training",
      description:
        "Structured training to enhance quantitative, logical reasoning, and verbal abilities required for competitive exams and placement tests.",
      icon: <Target className="h-8 w-8" />,
      modules: [
        "Quantitative Aptitude",
        "Logical Reasoning",
        "Verbal Ability",
        "Data Interpretation",
        "Problem Solving",
        "Time Management Strategies",
      ],
    },
    {
      title: "Soft Skills Development",
      description:
        "Training in essential soft skills to enhance communication, interpersonal abilities, and professional conduct.",
      icon: <Users className="h-8 w-8" />,
      modules: [
        "Communication Skills",
        "Presentation Skills",
        "Group Discussion Techniques",
        "Email and Business Writing",
        "Team Collaboration",
        "Leadership Development",
      ],
    },
    {
      title: "Career Readiness",
      description: "Preparation for the job search process, interviews, and professional workplace conduct.",
      icon: <Briefcase className="h-8 w-8" />,
      modules: [
        "Resume and Cover Letter Writing",
        "LinkedIn Profile Optimization",
        "Interview Preparation",
        "Corporate Etiquette",
        "Salary Negotiation",
        "Career Planning",
      ],
    },
  ]

  const workshops = [
    {
      title: "Industry-Specific Workshops",
      description:
        "Specialized workshops conducted by industry experts to provide insights into specific sectors and job roles.",
      schedule: "Monthly",
      upcoming: [
        { name: "FinTech Innovations", date: "September 15, 2024" },
        { name: "Digital Marketing Trends", date: "October 10, 2024" },
        { name: "Healthcare IT Solutions", date: "November 5, 2024" },
      ],
    },
    {
      title: "Mock Interview Sessions",
      description: "Practice interview sessions with HR professionals and technical experts from leading companies.",
      schedule: "Bi-weekly",
      upcoming: [
        { name: "Technical Interview Practice", date: "September 20, 2024" },
        { name: "HR Interview Simulation", date: "October 5, 2024" },
        { name: "Case Study Interviews", date: "October 25, 2024" },
      ],
    },
    {
      title: "Hackathons & Coding Competitions",
      description:
        "Competitive events to enhance problem-solving abilities, coding skills, and teamwork under pressure.",
      schedule: "Quarterly",
      upcoming: [
        { name: "24-Hour Hackathon", date: "September 30, 2024" },
        { name: "Competitive Coding Challenge", date: "November 15, 2024" },
        { name: "AI Solution Development", date: "December 10, 2024" },
      ],
    },
    {
      title: "Entrepreneurship Bootcamps",
      description: "Intensive programs to develop entrepreneurial mindset, business planning, and startup skills.",
      schedule: "Semester-wise",
      upcoming: [
        { name: "Startup Ideation Workshop", date: "October 15, 2024" },
        { name: "Business Plan Development", date: "November 20, 2024" },
        { name: "Pitch Deck Preparation", date: "December 5, 2024" },
      ],
    },
  ]

  return (
    <>
      <HeroSection
        title="Training & Development"
        subtitle="Comprehensive training programs to enhance employability and career readiness"
        backgroundImage="/placeholder.svg?height=600&width=1600&text=Training+and+Development"
      />

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">Our Training Approach</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              At Pillai University, we believe in preparing our students for successful careers through comprehensive
              training and development programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Training+Approach"
                alt="Training Approach"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Holistic Development</h3>
              <p className="text-muted-foreground mb-6">
                Our training programs are designed to develop technical skills, soft skills, and professional
                competencies required for successful careers in various industries. We follow a structured approach that
                begins from the first year and continues throughout the academic journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Industry-Aligned Curriculum</h4>
                    <p className="text-muted-foreground">
                      Training modules designed in consultation with industry experts to ensure relevance and
                      employability.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Experiential Learning</h4>
                    <p className="text-muted-foreground">
                      Hands-on projects, case studies, and simulations to apply theoretical knowledge to practical
                      situations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Personalized Development</h4>
                    <p className="text-muted-foreground">
                      Individual assessment and customized training plans based on strengths, weaknesses, and career
                      aspirations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Continuous Feedback</h4>
                    <p className="text-muted-foreground">
                      Regular assessments and feedback to track progress and identify areas for improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1-2 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl hero-text-enhanced">Training Programs</h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              Our comprehensive training programs are designed to enhance various skills required for professional
              success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 text-white">{program.icon}</div>
                  <h3 className="text-xl font-bold text-white">{program.title}</h3>
                </div>
                <p className="text-blue-100 mb-4">{program.description}</p>
                <h4 className="font-semibold text-white mb-2">Key Modules:</h4>
                <ul className="space-y-1">
                  {program.modules.map((module, idx) => (
                    <li key={idx} className="flex items-start">
                      <ArrowRight className="h-4 w-4 mr-2 mt-1 text-blue-200" />
                      <span className="text-blue-100">{module}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">Year-wise Training Plan</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our training programs are structured year-wise to ensure progressive skill development throughout the
              academic journey.
            </p>
          </div>

          <div className="space-y-8">
            <div className="card-with-border p-6">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground mr-4">
                  1
                </div>
                <h3 className="text-xl font-bold">First Year: Foundation Building</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Focus Areas:</h4>
                  <ul className="list-disc pl-5 mb-4 text-muted-foreground">
                    <li>Communication skills development</li>
                    <li>Basic technical skills relevant to the program</li>
                    <li>Time management and study skills</li>
                    <li>Team collaboration and interpersonal skills</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Activities:</h4>
                  <ul className="list-disc pl-5 mb-4 text-muted-foreground">
                    <li>Personality development workshops</li>
                    <li>Basic technical training sessions</li>
                    <li>Group activities and team projects</li>
                    <li>Career awareness sessions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-with-border p-6">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground mr-4">
                  2
                </div>
                <h3 className="text-xl font-bold">Second Year: Skill Enhancement</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Focus Areas:</h4>
                  <ul className="list-disc pl-5 mb-4 text-muted-foreground">
                    <li>Advanced technical skills specific to specialization</li>
                    <li>Aptitude test preparation</li>
                    <li>Presentation and public speaking skills</li>
                    <li>Resume building and LinkedIn profile creation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Activities:</h4>
                  <ul className="list-disc pl-5 mb-4 text-muted-foreground">
                    <li>Technical workshops and certification courses</li>
                    <li>Aptitude training sessions</li>
                    <li>Presentation contests</li>
                    <li>Industry interaction programs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-with-border p-6">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground mr-4">
                  3
                </div>
                <h3 className="text-xl font-bold">Third Year: Professional Development</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Focus Areas:</h4>
                  <ul className="list-disc pl-5 mb-4 text-muted-foreground">
                    <li>Industry-specific technical skills</li>
                    <li>Group discussion and interview skills</li>
                    <li>Project management and leadership</li>
                    <li>Internship preparation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Activities:</h4>
                  <ul className="list-disc pl-5 mb-4 text-muted-foreground">
                    <li>Mock group discussions and interviews</li>
                    <li>Industry-specific technical training</li>
                    <li>Leadership development workshops</li>
                    <li>Internship guidance and placement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-with-border p-6">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground mr-4">
                  4
                </div>
                <h3 className="text-xl font-bold">Final Year: Placement Readiness</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Focus Areas:</h4>
                  <ul className="list-disc pl-5 mb-4 text-muted-foreground">
                    <li>Company-specific preparation</li>
                    <li>Advanced interview techniques</li>
                    <li>Salary negotiation skills</li>
                    <li>Professional workplace conduct</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Activities:</h4>
                  <ul className="list-disc pl-5 mb-4 text-muted-foreground">
                    <li>Company-specific mock interviews</li>
                    <li>Pre-placement talks and interactions</li>
                    <li>Final resume and portfolio review</li>
                    <li>Campus placement drives</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1-3 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl hero-text-enhanced">Workshops & Special Programs</h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              In addition to our regular training programs, we organize various workshops and special programs to
              enhance specific skills and provide industry exposure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshops.map((workshop, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">{workshop.title}</h3>
                <p className="text-blue-100 mb-4">{workshop.description}</p>
                <div className="flex items-center text-blue-200 mb-3">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Frequency: {workshop.schedule}</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Upcoming Sessions:</h4>
                <ul className="space-y-2">
                  {workshop.upcoming.map((session, idx) => (
                    <li key={idx} className="flex items-start">
                      <ArrowRight className="h-4 w-4 mr-2 mt-1 text-blue-200" />
                      <div>
                        <span className="text-white">{session.name}</span>
                        <span className="text-blue-200 text-sm ml-2">({session.date})</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6 gradient-text hero-text-enhanced">
                Industry Partnerships
              </h2>
              <p className="text-muted-foreground mb-6">
                We collaborate with leading companies and industry experts to provide relevant and up-to-date training
                to our students.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Corporate Training Programs</h3>
                    <p className="text-muted-foreground">
                      Specialized training programs conducted by industry professionals to bridge the gap between
                      academia and industry requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Certification Courses</h3>
                    <p className="text-muted-foreground">
                      Industry-recognized certification courses to enhance employability and validate skills.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Guest Lectures and Webinars</h3>
                    <p className="text-muted-foreground">
                      Regular sessions by industry experts to provide insights into current trends, technologies, and
                      industry practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Industry Projects</h3>
                    <p className="text-muted-foreground">
                      Opportunities to work on real-world projects in collaboration with industry partners.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/placements/internships">
                    Explore Internship Opportunities <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Industry+Partnerships"
                alt="Industry Partnerships"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16  text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6 hero-text-enhanced">Enhance Your Skills</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Take advantage of our comprehensive training programs to enhance your skills and prepare for a successful
              career.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-black hover:bg-blue-50">
                <Link href="/student-portal">Access Training Portal</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-muted-foreground border-white hover:bg-white/10"
              >
                <Link href="/placements/team">Contact Training Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

