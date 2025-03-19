import { Calendar } from "@/components/ui/calendar"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import HeroSection from "@/components/hero-section"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="We're here to help and answer any questions you might have"
        backgroundImage="/placeholder.svg?height=600&width=1600&text=Contact+Us"
      />

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl gradient-text mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Whether you have a question about admissions, programs, campus facilities, or anything else, our team is
                ready to answer all your queries. Fill out the form and we'll get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium mb-1">
                      First Name
                    </label>
                    <Input id="first-name" name="first-name" placeholder="Enter your first name" required />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium mb-1">
                      Last Name
                    </label>
                    <Input id="last-name" name="last-name" placeholder="Enter your last name" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <Input id="email" name="email" type="email" placeholder="Enter your email address" required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <Input id="phone" name="phone" placeholder="Enter your phone number" required />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input id="subject" name="subject" placeholder="What is your inquiry about?" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Please provide details about your inquiry"
                    required
                  ></textarea>
                </div>

                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <div className="card-hover rounded-xl overflow-hidden mb-8">
                <div className="relative h-[300px]">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Campus+Map"
                    alt="Campus Map"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-3 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Main Campus Address</h3>
                    <p className="text-muted-foreground">
                      Dr. K. M. Vasudevan Pillai Campus, Plot No. 10, Sector 16, New Panvel, Navi Mumbai - 410206,
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-3 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      Main: +91 22 2745 6100
                      <br />
                      Admissions: +91 22 2745 6200
                      <br />
                      Toll-Free: 1800 266 5656
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-3 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      General Inquiries: info@pillai.edu
                      <br />
                      Admissions: admissions@pillai.edu
                      <br />
                      Placements: placements@pillai.edu
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-3 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">
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
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1-2 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">Department Contacts</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Connect directly with specific departments for specialized assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                department: "Admissions Office",
                contact: "admissions@pillai.edu",
                phone: "+91 22 2745 6200",
                description:
                  "For inquiries related to application process, eligibility criteria, and admission status.",
              },
              {
                department: "Academic Affairs",
                contact: "academics@pillai.edu",
                phone: "+91 22 2745 6300",
                description: "For inquiries related to courses, curriculum, examinations, and academic policies.",
              },
              {
                department: "Student Services",
                contact: "studentservices@pillai.edu",
                phone: "+91 22 2745 6400",
                description:
                  "For inquiries related to student ID cards, transcripts, certificates, and general student support.",
              },
              {
                department: "International Relations",
                contact: "international@pillai.edu",
                phone: "+91 22 2745 6500",
                description:
                  "For inquiries related to international admissions, exchange programs, and collaborations.",
              },
              {
                department: "Placement Cell",
                contact: "placements@pillai.edu",
                phone: "+91 22 2745 6600",
                description: "For inquiries related to internships, campus placements, and career guidance.",
              },
              {
                department: "Hostel Administration",
                contact: "hostel@pillai.edu",
                phone: "+91 22 2745 6700",
                description: "For inquiries related to hostel accommodation, facilities, and regulations.",
              },
            ].map((dept, index) => (
              <div key={index} className="card-hover rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{dept.department}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-blue-100">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>{dept.contact}</span>
                    </div>
                    <div className="flex items-center text-blue-100">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>{dept.phone}</span>
                    </div>
                  </div>
                  <p className="text-blue-100">{dept.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text mb-4">Visit Our Campus</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience our vibrant campus firsthand. Schedule a campus tour to explore our facilities and meet with
              faculty and students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-hover rounded-xl overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Campus+Tour"
                  alt="Campus Tour"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-white dark:bg-gray-800">
                <h3 className="text-xl font-bold mb-2">Guided Campus Tours</h3>
                <p className="text-muted-foreground mb-4">
                  Our guided campus tours provide a comprehensive overview of our facilities, academic buildings,
                  libraries, laboratories, sports complex, and student amenities. Tours are conducted by current
                  students who can share their firsthand experiences.
                </p>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  <span>Monday to Friday: 10:00 AM and 2:00 PM</span>
                </div>
                <Button asChild>
                  <Link href="/campus-tour">
                    Schedule a Tour <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="card-hover rounded-xl overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Open+Day"
                  alt="Open Day"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-white dark:bg-gray-800">
                <h3 className="text-xl font-bold mb-2">Open Days & Information Sessions</h3>
                <p className="text-muted-foreground mb-4">
                  Throughout the year, we host open days and information sessions where prospective students and parents
                  can interact with faculty, attend sample lectures, explore facilities, and learn about admission
                  procedures and scholarship opportunities.
                </p>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  <span>Next Open Day: June 15, 2024</span>
                </div>
                <Button asChild>
                  <Link href="/open-day">
                    Register for Open Day <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1-3 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">Connect With Us on Social Media</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Stay updated with the latest news, events, and happenings at Pillai University by following us on social
              media.
            </p>
            <div className="flex justify-center space-x-6">
              {[
                { name: "Facebook", link: "#", icon: "/placeholder.svg?height=50&width=50&text=FB" },
                { name: "Twitter", link: "#", icon: "/placeholder.svg?height=50&width=50&text=TW" },
                { name: "Instagram", link: "#", icon: "/placeholder.svg?height=50&width=50&text=IG" },
                { name: "LinkedIn", link: "#", icon: "/placeholder.svg?height=50&width=50&text=LI" },
                { name: "YouTube", link: "#", icon: "/placeholder.svg?height=50&width=50&text=YT" },
              ].map((social, index) => (
                <Link key={index} href={social.link} className="hover:opacity-80 transition-opacity">
                  <Image
                    src={social.icon || "/placeholder.svg"}
                    alt={social.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

