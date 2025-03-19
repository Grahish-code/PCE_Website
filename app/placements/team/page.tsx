import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import { Mail, Phone, Clock, MapPin } from "lucide-react"

export default function PlacementTeamPage() {
  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Director, Placement Cell",
      qualification: "Ph.D. in Management, MBA",
      experience: "20+ years in academia and industry",
      responsibilities: "Overall management of placement activities, corporate relations, and strategic planning",
      image: "/placeholder.svg?height=300&width=300&text=Dr.+Rajesh+Kumar",
      contact: {
        email: "rajesh.kumar@pillai.edu",
        phone: "+91 98765 43210",
      },
    },
    {
      name: "Prof. Sunita Sharma",
      position: "Deputy Director, Placement Cell",
      qualification: "MBA, M.Tech",
      experience: "15+ years in corporate relations and placement",
      responsibilities: "Coordination with companies, placement drives, and student counseling",
      image: "/placeholder.svg?height=300&width=300&text=Prof.+Sunita+Sharma",
      contact: {
        email: "sunita.sharma@pillai.edu",
        phone: "+91 98765 43211",
      },
    },
    {
      name: "Mr. Amit Patel",
      position: "Placement Officer (Engineering)",
      qualification: "M.Tech, MBA",
      experience: "10+ years in technical recruitment",
      responsibilities: "Placements for engineering students, technical training coordination",
      image: "/placeholder.svg?height=300&width=300&text=Mr.+Amit+Patel",
      contact: {
        email: "amit.patel@pillai.edu",
        phone: "+91 98765 43212",
      },
    },
    {
      name: "Ms. Priya Singh",
      position: "Placement Officer (Management)",
      qualification: "MBA (HR), PGDHRM",
      experience: "8+ years in HR and recruitment",
      responsibilities: "Placements for management students, soft skills training",
      image: "/placeholder.svg?height=300&width=300&text=Ms.+Priya+Singh",
      contact: {
        email: "priya.singh@pillai.edu",
        phone: "+91 98765 43213",
      },
    },
    {
      name: "Mr. Rahul Verma",
      position: "Placement Officer (Arts & Science)",
      qualification: "M.Sc., MBA",
      experience: "7+ years in academic administration and placement",
      responsibilities: "Placements for arts and science students, internship coordination",
      image: "/placeholder.svg?height=300&width=300&text=Mr.+Rahul+Verma",
      contact: {
        email: "rahul.verma@pillai.edu",
        phone: "+91 98765 43214",
      },
    },
    {
      name: "Ms. Neha Joshi",
      position: "Training Coordinator",
      qualification: "M.Tech, Certified Trainer",
      experience: "6+ years in corporate training",
      responsibilities: "Coordination of training programs, skill development workshops",
      image: "/placeholder.svg?height=300&width=300&text=Ms.+Neha+Joshi",
      contact: {
        email: "neha.joshi@pillai.edu",
        phone: "+91 98765 43215",
      },
    },
  ]

  return (
    <>
      <HeroSection
        title="Placement Cell Team"
        subtitle="Meet our dedicated team working tirelessly to connect students with the best career opportunities"
        backgroundImage="/placeholder.svg?height=600&width=1600&text=Placement+Cell+Team"
      />

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              The Placement Cell at Pillai University comprises experienced professionals dedicated to helping students
              achieve their career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div key={index} className="card-with-border p-6">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary">{member.position}</p>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Qualification:</span> {member.qualification}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Experience:</span> {member.experience}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Responsibilities:</span> {member.responsibilities}
                  </p>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center text-muted-foreground mb-1">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    <a href={`mailto:${member.contact.email}`} className="hover:text-primary transition-colors">
                      {member.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    <a href={`tel:${member.contact.phone}`} className="hover:text-primary transition-colors">
                      {member.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1-2 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl hero-text-enhanced">Our Mission</h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              The Placement Cell at Pillai University is committed to connecting students with the best career
              opportunities and preparing them for professional success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Placement+Cell+Mission"
                alt="Placement Cell Mission"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Vision</h3>
                  <p className="text-blue-100">
                    To be a premier placement cell that consistently achieves 100% placement for eligible students and
                    establishes Pillai University as a preferred destination for recruiters across industries.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Mission</h3>
                  <p className="text-blue-100">
                    To provide comprehensive placement support, industry exposure, and skill development opportunities
                    that enhance the employability of our students and prepare them for successful careers.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Core Values</h3>
                  <ul className="list-disc pl-5 text-blue-100">
                    <li>Student-centric approach</li>
                    <li>Integrity and transparency</li>
                    <li>Continuous improvement</li>
                    <li>Industry relevance</li>
                    <li>Equal opportunity for all students</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">More Team Members</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the rest of our dedicated placement team working to ensure student success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(3).map((member, index) => (
              <div key={index} className="card-with-border p-6">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary">{member.position}</p>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Qualification:</span> {member.qualification}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Experience:</span> {member.experience}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Responsibilities:</span> {member.responsibilities}
                  </p>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center text-muted-foreground mb-1">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    <a href={`mailto:${member.contact.email}`} className="hover:text-primary transition-colors">
                      {member.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    <a href={`tel:${member.contact.phone}`} className="hover:text-primary transition-colors">
                      {member.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 gradient-color-1-3 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl hero-text-enhanced">Contact the Placement Cell</h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              For any queries related to placements, internships, or career guidance, please feel free to contact our
              Placement Cell.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-blue-200 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Address</h4>
                    <p className="text-blue-100">
                      Placement Cell, Administrative Block, Pillai University, Dr. K. M. Vasudevan Pillai Campus, Plot
                      No. 10, Sector 16, New Panvel, Navi Mumbai - 410206
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-0.5 text-blue-200 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-blue-100">
                      Main: +91 22 2745 6200
                      <br />
                      Helpline: +91 98765 43210
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-0.5 text-blue-200 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-blue-100">
                      placements@pillai.edu
                      <br />
                      training@pillai.edu
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 mt-0.5 text-blue-200 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Office Hours</h4>
                    <p className="text-blue-100">
                      Monday to Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-md border border-blue-300/30 bg-white/10 px-3 py-2 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-md border border-blue-300/30 bg-white/10 px-3 py-2 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-blue-100 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full rounded-md border border-blue-300/30 bg-white/10 px-3 py-2 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Subject of your message"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-md border border-blue-300/30 bg-white/10 px-3 py-2 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full bg-white text-blue-700 hover:bg-blue-50">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">For Recruiters</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              We invite companies to participate in our placement process and recruit our talented students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=800&width=600&text=For+Recruiters"
                alt="For Recruiters"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Recruit from Pillai University?</h3>
              <div className="space-y-4 mb-6">
                <div className="card-with-border p-4">
                  <h4 className="font-semibold">Talented Pool of Students</h4>
                  <p className="text-muted-foreground">
                    Our rigorous selection process and comprehensive education ensure that our students are among the
                    best in their fields.
                  </p>
                </div>
                <div className="card-with-border p-4">
                  <h4 className="font-semibold">Industry-Ready Skills</h4>
                  <p className="text-muted-foreground">
                    Our training programs focus on developing technical, soft, and professional skills required in the
                    industry.
                  </p>
                </div>
                <div className="card-with-border p-4">
                  <h4 className="font-semibold">Streamlined Recruitment Process</h4>
                  <p className="text-muted-foreground">
                    Our experienced placement team ensures a smooth and efficient recruitment process for companies.
                  </p>
                </div>
                <div className="card-with-border p-4">
                  <h4 className="font-semibold">Long-term Partnership</h4>
                  <p className="text-muted-foreground">
                    We value long-term relationships with companies and offer various engagement opportunities beyond
                    placements.
                  </p>
                </div>
              </div>
              <Button asChild>
                <Link href="/placements/team#contact">Contact for Recruitment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6 hero-text-enhanced">Schedule a Meeting</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Interested in learning more about our placement services or discussing recruitment opportunities? Schedule
              a meeting with our placement team.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/placements/team#contact">Schedule a Meeting</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

