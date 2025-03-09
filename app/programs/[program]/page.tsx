import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import { Clock, Building, MapPin, GraduationCap, Briefcase, CheckCircle, Users } from "lucide-react"

interface PlacedStudent {
  name: string
  photo: string
  package: string
  company: string
  position: string
  batch: string
}

interface ProgramData {
  name: string
  duration: {
    years: number
    semesters: number
  }
  department: string
  campus: string
  college: string
  overview: string
  outcomes: string[]
  eligibility: string
  careerProspects: string[]
  intake: number
  feeStructure: {
    tuition: string
    development: string
    other: string
  }
  totalFees: string
  placementHighlights: {
    rate: string
    averagePackage: string
    topRecruiters: string[]
  }
  placedStudents: PlacedStudent[]
  image: string
  collegeLink: string
}

// This would typically come from a database or API
const programsData: { [key: string]: ProgramData } = {


  "bachelor-of-technology-computer-engineering": {
    name: "B.Tech in Computer Engineering",
    duration: {
      years: 4,
      semesters: 8,
    },
    department: "Department of Computer Engineering",
    campus: "New Panvel Campus",
    college: "Pillai College of Engineering (Autonomous)",
    overview:
      "The B.Tech in Computer Engineering program is designed to provide students with a strong foundation in computer science and engineering principles. The curriculum covers programming, algorithms, data structures, computer architecture, operating systems, databases, and software engineering, preparing students for careers in the rapidly evolving technology sector.",
    outcomes: [
      "Ability to apply knowledge of mathematics, science, and engineering to solve complex computing problems",
      "Proficiency in designing, implementing, and evaluating computer-based systems, processes, and components",
      "Skills to analyze and interpret data to arrive at valid conclusions",
      "Capability to design and conduct experiments, as well as to analyze and interpret data",
      "Understanding of professional and ethical responsibilities in the field of computing",
      "Effective communication skills for technical and non-technical audiences",
      "Recognition of the need for and ability to engage in lifelong learning",
    ],
    eligibility:
      "10+2 with Physics, Chemistry, and Mathematics with minimum 50% aggregate marks and valid JEE Main score.",
    careerProspects: [
      "Software Engineer",
      "System Architect",
      "Database Administrator",
      "Network Engineer",
      "Data Scientist",
      "AI/ML Engineer",
      "DevOps Engineer",
      "Cloud Solutions Architect",
      "Cybersecurity Specialist",
      "Research and Development",
    ],
    intake: 60,
    feeStructure: {
      tuition: "₹1,80,000 per year",
      development: "₹30,000 per year",
      other: "₹20,000 per year",
    },
    totalFees: "₹9,20,000 for the entire program",
    placementHighlights: {
      rate: "98%",
      averagePackage: "₹10.5 LPA",
      topRecruiters: ["Microsoft", "Amazon", "Google", "TCS", "Infosys"],
    },
    placedStudents: [
      {
        name: "Vikram Singh",
        photo: "/placeholder.svg?height=300&width=300&text=Vikram",
        package: "₹18.5 LPA",
        company: "Microsoft",
        position: "Software Engineer",
        batch: "2023",
      },
      {
        name: "Neha Gupta",
        photo: "/placeholder.svg?height=300&width=300&text=Neha",
        package: "₹22.3 LPA",
        company: "Amazon",
        position: "SDE-2",
        batch: "2023",
      },
      {
        name: "Arjun Reddy",
        photo: "/placeholder.svg?height=300&width=300&text=Arjun",
        package: "₹25.6 LPA",
        company: "Google",
        position: "Software Developer",
        batch: "2022",
      },
      {
        name: "Sneha Joshi",
        photo: "/placeholder.svg?height=300&width=300&text=Sneha",
        package: "₹16.8 LPA",
        company: "Adobe",
        position: "Frontend Engineer",
        batch: "2022",
      },
    ],
    image: "/placeholder.svg?height=600&width=800&text=Computer+Engineering",
    collegeLink: "/colleges#engineering",
  },



  "bachelor-of-architecture": {
    name: "Bachelor of Architecture (B.Arch)",
    duration: {
      years: 5,
      semesters: 10,
    },
    department: "Department of Architecture",
    campus: "New Panvel Campus",
    college: "Pillai College of Architecture",
    overview:
      "The Bachelor of Architecture (B.Arch) program is designed to provide students with a comprehensive understanding of architectural design, building construction, history of architecture, and professional practice. The curriculum combines theoretical knowledge with practical applications, preparing students to design sustainable and innovative spaces for the future.",
    outcomes: [
      "Ability to create architectural designs that satisfy both aesthetic and technical requirements",
      "Understanding of the history and theories of architecture and related arts, technologies, and human sciences",
      "Knowledge of urban design, planning, and the skills involved in the planning process",
      "Understanding of the relationship between people and buildings, and between buildings and their environment",
      "Comprehension of the architectural profession and the role of the architect in society",
      "Mastery of the methods of investigation and preparation of the brief for a design project",
      "Understanding of structural design, construction, and engineering problems associated with building design",
    ],
    eligibility:
      "10+2 or equivalent with Mathematics as a subject with minimum 50% aggregate marks and valid NATA score.",
    careerProspects: [
      "Architectural Designer",
      "Project Architect",
      "Urban Designer",
      "Interior Designer",
      "Landscape Architect",
      "Construction Manager",
      "Sustainable Design Consultant",
      "Heritage Conservation Specialist",
      "Architectural Journalist",
      "Architectural Educator",
    ],
    intake: 40,
    feeStructure: {
      tuition: "₹1,50,000 per year",
      development: "₹25,000 per year",
      other: "₹15,000 per year",
    },
    totalFees: "₹9,50,000 for the entire program",
    placementHighlights: {
      rate: "92%",
      averagePackage: "₹5.5 LPA",
      topRecruiters: [
        "Architect Hafeez Contractor",
        "Morphogenesis",
        "RSP Architects",
        "Edifice Consultants",
        "Godrej Properties",
      ],
    },
    placedStudents: [
      {
        name: "Aditya Sharma",
        photo: "/placeholder.svg?height=300&width=300&text=Aditya",
        package: "₹7.2 LPA",
        company: "Architect Hafeez Contractor",
        position: "Junior Architect",
        batch: "2023",
      },
      {
        name: "Priya Patel",
        photo: "/placeholder.svg?height=300&width=300&text=Priya",
        package: "₹6.8 LPA",
        company: "Morphogenesis",
        position: "Design Associate",
        batch: "2023",
      },
      {
        name: "Rahul Mehta",
        photo: "/placeholder.svg?height=300&width=300&text=Rahul",
        package: "₹7.5 LPA",
        company: "RSP Architects",
        position: "Architectural Designer",
        batch: "2022",
      },
    ],
    image: "/placeholder.svg?height=600&width=800&text=B.Arch+Program",
    collegeLink: "/colleges#architecture",
  },


  

  "master-of-business-administration": {
    name: "Master of Business Administration (MBA)",
    duration: {
      years: 2,
      semesters: 4,
    },
    department: "Department of Management Studies",
    campus: "New Panvel Campus",
    college: "Pillai Institute of Management Studies and Research",
    overview:
      "The MBA program offers comprehensive management education with specializations in Finance, Marketing, HR, Operations, and more. The curriculum combines theoretical knowledge with case studies, industry projects, and internships to develop leadership skills, strategic thinking, and business acumen required for successful careers in the corporate world.",
    outcomes: [
      "Ability to apply management theories and concepts to solve business problems",
      "Skills to analyze business environments and formulate effective strategies",
      "Proficiency in financial analysis and decision-making",
      "Understanding of marketing principles and consumer behavior",
      "Knowledge of human resource management and organizational behavior",
      "Capability to lead teams and manage organizational change",
      "Ethical decision-making and corporate social responsibility",
    ],
    eligibility:
      "Bachelor's degree in any discipline with minimum 50% aggregate marks and valid CAT/MAT/XAT/CMAT/GMAT score.",
    careerProspects: [
      "Marketing Manager",
      "Financial Analyst",
      "HR Manager",
      "Operations Manager",
      "Business Analyst",
      "Project Manager",
      "Management Consultant",
      "Entrepreneur",
      "Investment Banker",
      "Corporate Strategist",
    ],
    intake: 120,
    feeStructure: {
      tuition: "₹2,50,000 per year",
      development: "₹35,000 per year",
      other: "₹25,000 per year",
    },
    totalFees: "₹6,20,000 for the entire program",
    placementHighlights: {
      rate: "95%",
      averagePackage: "₹8.2 LPA",
      topRecruiters: ["HDFC Bank", "ICICI Bank", "Deloitte", "TCS", "Amazon"],
    },
    placedStudents: [
      {
        name: "Rohan Kapoor",
        photo: "/placeholder.svg?height=300&width=300&text=Rohan",
        package: "₹12.5 LPA",
        company: "HDFC Bank",
        position: "Management Trainee",
        batch: "2023",
      },
      {
        name: "Ananya Desai",
        photo: "/placeholder.svg?height=300&width=300&text=Ananya",
        package: "₹14.2 LPA",
        company: "Deloitte",
        position: "Business Analyst",
        batch: "2023",
      },
      {
        name: "Karan Malhotra",
        photo: "/placeholder.svg?height=300&width=300&text=Karan",
        package: "₹13.8 LPA",
        company: "Amazon",
        position: "Product Manager",
        batch: "2022",
      },
    ],
    image: "/placeholder.svg?height=600&width=800&text=MBA+Program",
    collegeLink: "/colleges#management",
  },



}

export default function ProgramDetailsPage({ params }: { params: { program: string } }) {
  // In a real application, you would fetch this data from an API or database
  const programId = params.program
  const program = programsData[programId as keyof typeof programsData]

  // Fallback for programs not in our sample data
  if (!program) {
    return (
      <>
        <HeroSection
          title="Program Details"
          subtitle="Information about our academic programs"
          backgroundImage="/placeholder.svg?height=600&width=1600&text=Program+Details"
        />
        <section className="py-16 section-alternate">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced mb-6">Program Not Found</h2>
            <p className="text-lg text-muted-foreground mb-8">
              The program you are looking for is not available or does not exist.
            </p>
            <Button asChild>
              <Link href="/programs">View All Programs</Link>
            </Button>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <HeroSection
        title={program.name}
        subtitle={`${program.duration.years}-year program offered by ${program.college}`}
        backgroundImage="/placeholder.svg?height=600&width=1600&text=Program+Details"
      />

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced mb-6">Program Overview</h2>
              <p className="text-muted-foreground mb-8">{program.overview}</p>

              <div className="card-with-border p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Program Outcomes</h3>
                <ul className="space-y-2">
                  {program.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="text-xl font-bold mb-4">Career Prospects</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {program.careerProspects.map((career, index) => (
                  <div key={index} className="flex items-center p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="h-5 w-5 mr-2 text-primary" />
                    <span>{career}</span>
                  </div>
                ))}
              </div>

              <div className="card-with-border p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Placement Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{program.placementHighlights.rate}</div>
                    <div className="text-sm text-muted-foreground">Placement Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{program.placementHighlights.averagePackage}</div>
                    <div className="text-sm text-muted-foreground">Average Package</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">
                      {program.placementHighlights.topRecruiters.length}+
                    </div>
                    <div className="text-sm text-muted-foreground">Top Recruiters</div>
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Top Recruiters:</h4>
                <div className="flex flex-wrap gap-2">
                  {program.placementHighlights.topRecruiters.map((recruiter, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {recruiter}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-12 mb-6">
                <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">
                  Placement Success Stories
                </h2>
                <p className="text-muted-foreground mt-2">
                  Meet our successful graduates who have secured excellent placements
                </p>
              </div>

              <h3 className="text-xl font-bold mb-4">Student Placement Success Stories</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {program.placedStudents?.map((student, index) => (
                  <div key={index} className="card-with-border overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={student.photo || "/placeholder.svg"}
                        alt={student.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-lg">{student.name}</h4>
                      <div className="text-sm text-muted-foreground mb-2">Batch of {student.batch}</div>
                      <div className="flex items-center mb-1">
                        <Briefcase className="h-4 w-4 mr-1 text-primary" />
                        <span className="text-sm">{student.company}</span>
                      </div>
                      <div className="flex items-center mb-1">
                        <GraduationCap className="h-4 w-4 mr-1 text-primary" />
                        <span className="text-sm">{student.position}</span>
                      </div>
                      <div className="mt-2 bg-primary/10 rounded-full px-3 py-1 inline-block">
                        <span className="text-primary font-semibold">{student.package}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="card-with-border p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Program Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Duration</div>
                      <div className="text-muted-foreground">
                        {program.duration.years} Years | {program.duration.semesters} Semesters
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Building className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Department</div>
                      <div className="text-muted-foreground">{program.department}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Campus</div>
                      <div className="text-muted-foreground">{program.campus}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <GraduationCap className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold">College</div>
                      <div className="text-muted-foreground">{program.college}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Intake</div>
                      <div className="text-muted-foreground">{program.intake} students per year</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-with-border p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Eligibility</h3>
                <p className="text-muted-foreground">{program.eligibility}</p>
              </div>

              <div className="card-with-border p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Fee Structure</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tuition Fee:</span>
                    <span className="font-medium">{program.feeStructure.tuition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Development Fee:</span>
                    <span className="font-medium">{program.feeStructure.development}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Other Charges:</span>
                    <span className="font-medium">{program.feeStructure.other}</span>
                  </div>
                  <div className="pt-3 border-t flex justify-between">
                    <span className="font-semibold">Total Fees:</span>
                    <span className="font-bold text-primary">{program.totalFees}</span>
                  </div>
                </div>
              </div>

              <div className="relative h-[200px] rounded-xl overflow-hidden card-hover mb-8">
                <Image src={program.image || "/placeholder.svg"} alt={program.name} fill className="object-cover" />
              </div>

              <div className="space-y-4">
                <Button asChild className="w-full">
                  <Link href="/admissions">Apply Now</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href={program.collegeLink}>Visit College Page</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Request Information</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-blue-purple text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6 hero-text-enhanced">Ready to Begin Your Journey?</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Take the first step towards a rewarding career by applying to the {program.name} program at{" "}
              {program.college}.
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

