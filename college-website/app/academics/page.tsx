import Hero from "@/components/hero"
import ImageCard from "@/components/image-card"
import Link from "next/link"
import Image from "next/image"
import { BookOpen, Users, Award, Globe } from "lucide-react"

export default function AcademicsPage() {
  return (
    <div>
      <Hero
        title="Academics"
        subtitle="Discover our comprehensive range of programs designed to prepare you for success in your chosen field."
        backgroundImage="/placeholder.svg?height=800&width=1600"
      />

      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Programs</h2>
            <p className="text-lg text-text max-w-3xl mx-auto">
              Horizon College offers a wide range of undergraduate and graduate programs across various disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ImageCard
              title="Business & Management"
              description="Develop the skills and knowledge needed to succeed in today's dynamic business environment."
              imageSrc="/placeholder.svg?height=400&width=600"
              link="/academics/business"
            />
            <ImageCard
              title="Computer Science & IT"
              description="Learn cutting-edge technologies and develop solutions to complex computational problems."
              imageSrc="/placeholder.svg?height=400&width=600"
              link="/academics/computer-science"
            />
            <ImageCard
              title="Engineering"
              description="Design, build, and innovate with our comprehensive engineering programs."
              imageSrc="/placeholder.svg?height=400&width=600"
              link="/academics/engineering"
            />
            <ImageCard
              title="Arts & Humanities"
              description="Explore human culture, history, and creativity through our diverse arts and humanities programs."
              imageSrc="/placeholder.svg?height=400&width=600"
              link="/academics/arts-humanities"
            />
            <ImageCard
              title="Natural Sciences"
              description="Investigate the natural world and contribute to scientific advancement and discovery."
              imageSrc="/placeholder.svg?height=400&width=600"
              link="/academics/natural-sciences"
            />
            <ImageCard
              title="Social Sciences"
              description="Study human behavior and society to address complex social challenges."
              imageSrc="/placeholder.svg?height=400&width=600"
              link="/academics/social-sciences"
            />
          </div>
        </div>
      </section>

      {/* Academic Approach */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Academic Approach</h2>
              <p className="text-lg mb-4">
                At Horizon College, we believe in a holistic approach to education that combines rigorous academic study
                with practical, hands-on learning experiences.
              </p>
              <p className="text-lg mb-4">
                Our faculty are leaders in their fields who bring real-world experience and cutting-edge research into
                the classroom.
              </p>
              <p className="text-lg mb-6">
                Small class sizes ensure personalized attention and meaningful interactions between students and
                faculty.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-primary p-2 rounded-full mr-4">
                    <BookOpen size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Experiential Learning</h3>
                    <p>Learn by doing through internships, research, and project-based coursework</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary p-2 rounded-full mr-4">
                    <Users size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Collaborative Environment</h3>
                    <p>Work alongside peers and faculty on innovative projects</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary p-2 rounded-full mr-4">
                    <Award size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Academic Excellence</h3>
                    <p>Rigorous curriculum designed to challenge and inspire</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary p-2 rounded-full mr-4">
                    <Globe size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Global Perspective</h3>
                    <p>International opportunities and diverse perspectives</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-[500px] gradient-border">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Students in classroom"
                  fill
                  className="styled-image object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Distinguished Faculty</h2>
            <p className="text-lg text-text max-w-3xl mx-auto">
              Learn from experts who are leaders in their fields and dedicated to student success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="gradient-border bg-white overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Dr. James Wilson"
                  fill
                  className="styled-image object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">Dr. James Wilson</h3>
                <p className="text-secondary mb-2">Professor of Business</p>
                <p className="text-text">
                  Former CEO with 20+ years of industry experience and award-winning research in strategic management.
                </p>
              </div>
            </div>

            <div className="gradient-border bg-white overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Dr. Maria Garcia"
                  fill
                  className="styled-image object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">Dr. Maria Garcia</h3>
                <p className="text-secondary mb-2">Professor of Computer Science</p>
                <p className="text-text">
                  Leading researcher in artificial intelligence with patents and publications in top journals.
                </p>
              </div>
            </div>

            <div className="gradient-border bg-white overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Dr. Robert Kim"
                  fill
                  className="styled-image object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">Dr. Robert Kim</h3>
                <p className="text-secondary mb-2">Professor of Engineering</p>
                <p className="text-text">
                  Renowned engineer with industry experience and groundbreaking research in sustainable technologies.
                </p>
              </div>
            </div>

            <div className="gradient-border bg-white overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Dr. Sarah Johnson"
                  fill
                  className="styled-image object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">Dr. Sarah Johnson</h3>
                <p className="text-secondary mb-2">Professor of Environmental Science</p>
                <p className="text-text">
                  Environmental scientist with field experience and research focused on conservation and sustainability.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/faculty"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-primary/90 transition-colors duration-300"
            >
              Meet All Faculty
            </Link>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Academic Resources</h2>
            <p className="text-lg text-text max-w-3xl mx-auto">
              Horizon College provides a wealth of resources to support your academic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="gradient-border bg-white p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Library</h3>
              <div className="relative h-48 mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Library"
                  fill
                  className="styled-image object-cover"
                />
              </div>
              <p className="text-text mb-4">
                Our state-of-the-art library offers extensive physical and digital collections, study spaces, and expert
                librarians to assist with research.
              </p>
              <Link href="/library" className="text-primary font-bold hover:text-secondary transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="gradient-border bg-white p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Technology Center</h3>
              <div className="relative h-48 mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Technology Center"
                  fill
                  className="styled-image object-cover"
                />
              </div>
              <p className="text-text mb-4">
                Access cutting-edge technology, computer labs, and specialized software to support your coursework and
                research projects.
              </p>
              <Link href="/technology" className="text-primary font-bold hover:text-secondary transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="gradient-border bg-white p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Academic Support</h3>
              <div className="relative h-48 mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Academic Support"
                  fill
                  className="styled-image object-cover"
                />
              </div>
              <p className="text-text mb-4">
                Take advantage of tutoring, writing assistance, academic advising, and other support services to help
                you succeed.
              </p>
              <Link href="/academic-support" className="text-primary font-bold hover:text-secondary transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

