import Hero from "@/components/hero"
import Card from "@/components/card"
import ImageCard from "@/components/image-card"
import { BookOpen, Users, Award, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Hero
        title="Welcome to Horizon College"
        subtitle="Empowering minds, shaping futures. Join us on a journey of academic excellence and personal growth."
        ctaText="Apply Now"
        ctaLink="/admissions"
      />

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Horizon College</h2>
            <p className="text-lg text-text max-w-3xl mx-auto">
              We offer a transformative educational experience focused on academic excellence, innovation, and personal
              development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="Academic Excellence"
              description="Our rigorous academic programs are designed to challenge and inspire, preparing students for success in their chosen fields."
              icon={<BookOpen size={36} />}
            />
            <Card
              title="Diverse Community"
              description="Join a vibrant community of students and faculty from around the world, bringing diverse perspectives to the learning experience."
              icon={<Users size={36} />}
            />
            <Card
              title="Career Success"
              description="Our graduates excel in their careers, with 94% securing employment or continuing education within six months of graduation."
              icon={<Award size={36} />}
            />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Featured Programs</h2>
            <p className="text-lg text-text max-w-3xl mx-auto">
              Explore our diverse range of undergraduate and graduate programs designed to prepare you for success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ImageCard
              title="Business Administration"
              description="Develop the skills and knowledge needed to succeed in today's dynamic business environment."
              imageSrc="/placeholder.svg?height=400&width=600"
              link="/academics/business"
            />
            <ImageCard
              title="Computer Science"
              description="Learn cutting-edge technologies and develop solutions to complex computational problems."
              imageSrc="/placeholder.svg?height=400&width=600"
              link="/academics/computer-science"
            />
            <ImageCard
              title="Environmental Science"
              description="Study the environment and develop strategies for sustainability and conservation."
              imageSrc="/placeholder.svg?height=400&width=600"
              link="/academics/environmental-science"
            />
          </div>

          <div className="text-center mt-10">
            <Link
              href="/academics"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-primary/90 transition-colors duration-300"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Upcoming Events</h2>
            <p className="text-lg text-text max-w-3xl mx-auto">
              Stay connected with the latest happenings on campus and in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="gradient-border bg-white overflow-hidden">
              <div className="bg-primary text-white p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold">15</div>
                  <div>MAR</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Open House</h3>
                <p className="text-text mb-4">
                  Join us for an informative session about our programs, campus life, and admissions process.
                </p>
                <div className="flex items-center text-sm text-text/70">
                  <Calendar size={16} className="mr-2" />
                  <span>10:00 AM - 2:00 PM</span>
                </div>
              </div>
            </div>

            <div className="gradient-border bg-white overflow-hidden">
              <div className="bg-primary text-white p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold">22</div>
                  <div>MAR</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Research Symposium</h3>
                <p className="text-text mb-4">
                  Discover groundbreaking research from our faculty and students across various disciplines.
                </p>
                <div className="flex items-center text-sm text-text/70">
                  <Calendar size={16} className="mr-2" />
                  <span>9:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>

            <div className="gradient-border bg-white overflow-hidden">
              <div className="bg-primary text-white p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold">30</div>
                  <div>MAR</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Alumni Networking</h3>
                <p className="text-text mb-4">
                  Connect with successful alumni and build valuable professional relationships.
                </p>
                <div className="flex items-center text-sm text-text/70">
                  <Calendar size={16} className="mr-2" />
                  <span>6:00 PM - 8:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/events"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-primary/90 transition-colors duration-300"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-lg">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">300+</div>
              <div className="text-lg">Faculty Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Programs</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg">Graduate Employment Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Student Testimonials</h2>
            <p className="text-lg text-text max-w-3xl mx-auto">
              Hear what our students have to say about their experience at Horizon College.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="gradient-border bg-white p-6">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Student" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-text/70">Business Administration, 2023</p>
                </div>
              </div>
              <p className="text-text">
                "My experience at Horizon College has been transformative. The faculty are dedicated to student success,
                and the opportunities for hands-on learning are unmatched."
              </p>
            </div>

            <div className="gradient-border bg-white p-6">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Student" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-sm text-text/70">Computer Science, 2022</p>
                </div>
              </div>
              <p className="text-text">
                "The computer science program at Horizon College prepared me for a successful career in tech. The
                curriculum is cutting-edge and the faculty bring real-world experience to the classroom."
              </p>
            </div>

            <div className="gradient-border bg-white p-6">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Student" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Aisha Patel</h4>
                  <p className="text-sm text-text/70">Environmental Science, 2023</p>
                </div>
              </div>
              <p className="text-text">
                "The environmental science program offered me incredible field experiences and research opportunities. I
                feel well-prepared to make a positive impact in my field."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

