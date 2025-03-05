import Hero from "@/components/hero"
import Card from "@/components/card"
import Link from "next/link"
import Image from "next/image"
import { Calendar, FileText, Users, MessageCircle, DollarSign, Award } from "lucide-react"

export default function AdmissionsPage() {
  return (
    <div>
      <Hero
        title="Admissions"
        subtitle="Take the first step toward your future at Horizon College. Learn about our admissions process, requirements, and financial aid opportunities."
        ctaText="Apply Now"
        ctaLink="/admissions/apply"
        backgroundImage="/placeholder.svg?height=800&width=1600"
      />

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Application Process</h2>
            <p className="text-lg text-text max-w-3xl mx-auto">
              Our admissions process is designed to be straightforward and supportive. Follow these steps to apply to
              Horizon College.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="1. Research Programs"
              description="Explore our academic programs to find the right fit for your interests and career goals."
              icon={<FileText size={36} />}
              link="/academics"
            />
            <Card
              title="2. Submit Application"
              description="Complete the online application form and submit all required documents."
              icon={<FileText size={36} />}
              link="/admissions/apply"
            />
            <Card
              title="3. Review Process"
              description="Our admissions team will carefully review your application and notify you of the decision."
              icon={<Users size={36} />}
            />
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/admissions/apply"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-primary/90 transition-colors duration-300"
            >
              Start Your Application
            </Link>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Important Dates</h2>
            <p className="text-lg text-text max-w-3xl mx-auto">
              Mark your calendar with these key deadlines for the upcoming academic year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="gradient-border bg-white p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Fall Semester</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Calendar size={20} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">November 1</span>
                    <span>Early Decision Application Deadline</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Calendar size={20} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">January 15</span>
                    <span>Regular Decision Application Deadline</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Calendar size={20} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">March 15</span>
                    <span>Admission Decisions Released</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Calendar size={20} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">May 1</span>
                    <span>Enrollment Confirmation Deadline</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Calendar size={20} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">August 25</span>
                    <span>Fall Semester Classes Begin</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="gradient-border bg-white p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Spring Semester</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Calendar size={20} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">October 1</span>
                    <span>Spring Application Deadline</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Calendar size={20} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">November 15</span>
                    <span>Admission Decisions Released</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Calendar size={20} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">December 1</span>
                    <span>Enrollment Confirmation Deadline</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Calendar size={20} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">January 15</span>
                    <span>Spring Semester Classes Begin</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Admission Requirements</h2>
              <p className="text-lg mb-6">
                Horizon College seeks motivated students who demonstrate academic potential, leadership qualities, and a
                passion for learning.
              </p>

              <div className="space-y-4">
                <div className="gradient-border bg-white p-4">
                  <h3 className="font-bold text-primary mb-2">Academic Records</h3>
                  <p>Official high school transcripts or equivalent with a minimum GPA of 3.0</p>
                </div>
                <div className="gradient-border bg-white p-4">
                  <h3 className="font-bold text-primary mb-2">Standardized Tests</h3>
                  <p>SAT or ACT scores (optional for 2023-2024 academic year)</p>
                </div>
                <div className="gradient-border bg-white p-4">
                  <h3 className="font-bold text-primary mb-2">Personal Statement</h3>
                  <p>Essay describing your academic interests, personal achievements, and future goals</p>
                </div>
                <div className="gradient-border bg-white p-4">
                  <h3 className="font-bold text-primary mb-2">Letters of Recommendation</h3>
                  <p>Two letters from teachers, counselors, or mentors who know you well</p>
                </div>
                <div className="gradient-border bg-white p-4">
                  <h3 className="font-bold text-primary mb-2">Extracurricular Activities</h3>
                  <p>Record of involvement in clubs, sports, community service, or other activities</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] gradient-border">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Students on campus"
                fill
                className="styled-image object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Financial Aid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Financial Aid & Scholarships</h2>
            <p className="text-lg text-text max-w-3xl mx-auto">
              Horizon College is committed to making education accessible through a variety of financial aid options and
              scholarships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="Merit Scholarships"
              description="Awarded based on academic achievement, leadership, and other accomplishments."
              icon={<Award size={36} />}
              link="/financial-aid/scholarships"
            />
            <Card
              title="Need-Based Aid"
              description="Financial assistance based on demonstrated financial need determined by the FAFSA."
              icon={<DollarSign size={36} />}
              link="/financial-aid/need-based"
            />
            <Card
              title="Work-Study Programs"
              description="Opportunities to work on campus while pursuing your degree."
              icon={<Users size={36} />}
              link="/financial-aid/work-study"
            />
          </div>

          <div className="mt-12 p-6 gradient-border bg-white">
            <h3 className="text-xl font-bold text-primary mb-4">Financial Aid Process</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  1
                </div>
                <div>
                  <span className="font-bold block">Complete the FAFSA</span>
                  <span>
                    Submit the Free Application for Federal Student Aid (FAFSA) using our school code: 001234.
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  2
                </div>
                <div>
                  <span className="font-bold block">Apply for Scholarships</span>
                  <span>
                    Complete the scholarship application to be considered for merit-based and other scholarship
                    opportunities.
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  3
                </div>
                <div>
                  <span className="font-bold block">Review Your Aid Package</span>
                  <span>
                    Once admitted, you'll receive a financial aid package outlining the assistance available to you.
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  4
                </div>
                <div>
                  <span className="font-bold block">Accept Your Aid</span>
                  <span>
                    Follow the instructions to accept the financial aid offered and complete any additional
                    requirements.
                  </span>
                </div>
              </li>
            </ol>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/financial-aid"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-primary/90 transition-colors duration-300"
            >
              Explore Financial Aid Options
            </Link>
          </div>
        </div>
      </section>

      {/* Visit Campus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Visit Our Campus</h2>
            <p className="text-lg text-text max-w-3xl mx-auto">
              The best way to experience Horizon College is to visit our beautiful campus. Schedule a tour, attend an
              information session, or join us for an open house event.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative h-[400px] gradient-border">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Campus Tour"
                fill
                className="styled-image object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="gradient-border bg-white p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Campus Tours</h3>
                <p className="mb-4">
                  Join a student-led tour to explore our facilities, visit residence halls, and get a feel for campus
                  life.
                </p>
                <div className="flex items-center text-sm text-text/70 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>Available Monday-Friday at 10:00 AM and 2:00 PM, and select Saturdays</span>
                </div>
                <Link
                  href="/visit/tour"
                  className="inline-block bg-primary text-white font-bold py-2 px-6 rounded-md hover:bg-primary/90 transition-colors duration-300"
                >
                  Schedule a Tour
                </Link>
              </div>

              <div className="gradient-border bg-white p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Information Sessions</h3>
                <p className="mb-4">
                  Attend a presentation by admissions counselors to learn about our programs, application process, and
                  student life.
                </p>
                <div className="flex items-center text-sm text-text/70 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>Available Monday-Friday at 11:00 AM and 3:00 PM</span>
                </div>
                <Link
                  href="/visit/info-session"
                  className="inline-block bg-primary text-white font-bold py-2 px-6 rounded-md hover:bg-primary/90 transition-colors duration-300"
                >
                  Register for a Session
                </Link>
              </div>

              <div className="gradient-border bg-white p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Open House Events</h3>
                <p className="mb-4">
                  Join us for a comprehensive campus experience, including tours, faculty meetings, and student panels.
                </p>
                <div className="flex items-center text-sm text-text/70 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>Next Open House: April 15, 2023</span>
                </div>
                <Link
                  href="/visit/open-house"
                  className="inline-block bg-primary text-white font-bold py-2 px-6 rounded-md hover:bg-primary/90 transition-colors duration-300"
                >
                  RSVP for Open House
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Admissions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Contact Admissions</h2>
            <p className="text-lg text-text max-w-3xl mx-auto">
              Have questions? Our admissions team is here to help you navigate the application process and answer any
              questions you may have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="Email Us"
              description="Send your questions to admissions@horizoncollege.edu and we'll respond within 24 hours."
              icon={<MessageCircle size={36} />}
              link="mailto:admissions@horizoncollege.edu"
            />
            <Card
              title="Call Us"
              description="Speak directly with an admissions counselor at (123) 456-7890, Monday-Friday, 9:00 AM - 5:00 PM."
              icon={<MessageCircle size={36} />}
              link="tel:1234567890"
            />
            <Card
              title="Schedule a Meeting"
              description="Book a one-on-one virtual or in-person meeting with an admissions counselor."
              icon={<Calendar size={36} />}
              link="/admissions/meeting"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

