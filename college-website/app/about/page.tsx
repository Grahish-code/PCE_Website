import Hero from "@/components/hero"
import Image from "next/image"
import Card from "@/components/card"
import { History, Target, Award, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div>
      <Hero
        title="About Horizon College"
        subtitle="Learn about our history, mission, and the values that guide our institution."
        backgroundImage="/placeholder.svg?height=800&width=1600"
      />

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-lg mb-4">
                Founded in 1965, Horizon College has grown from a small liberal arts college to a comprehensive institution offering a wide range of undergraduate and graduate programs.
              </p>
              <p className="text-lg mb-4">
                For over five decades, we have been committed to providing a transformative educational experience that prepares students for success in their careers and lives.
              </p>
              <p className="text-lg">
                Today, Horizon College is recognized for its academic excellence, innovative research, and commitment to community engagement.
              </p>
            </div>
            <div className="relative h-[400px] gradient-border">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Horizon College Campus"
                fill
                className="styled-image object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Mission & Values</h2>
            <p className="text-lg text-text max-w-3xl mx-auto">
              At Horizon College, we are guided by a clear mission and a set of core values that inform everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="gradient-border bg-white p-8">
              <div className="flex items-center mb-4">
                <History size={32} className="text-primary mr-4" />
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-lg">
                Horizon College is dedicated to providing a transformative educational experience that empowers students to become thoughtful, responsible, and innovative leaders who contribute to the betterment of society.
              </p>
            </div>

            <div className="gradient-border bg-white p-8">
              <div className="flex items-center mb-4">
                <Target size={32} className="text-primary mr-4" />
                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-lg">
                To be a leading institution of higher education known for academic excellence, innovative research, and a commitment to addressing the complex challenges facing our world.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card
              title="Excellence"
              description="We strive for excellence in teaching, research, and all aspects of our operations."
              icon={<Award size={32} />}
            />
            <Card
              title="Integrity"
              description="We act with honesty, transparency, and ethical behavior in all our endeavors."
              icon={<Award size={32} />}
            />
            <Card
              title="Diversity"
              description="We value and respect the diversity of people, perspectives, and ideas."
              icon={<Users size={32} />}
            />
            <Card
              title="Innovation"
              description="We encourage creative thinking and innovative approaches to learning and problem-solving."
              icon={<Award size={32} />}
            />
          </div>
        </div>
      </section>

      {/* Leadership */}
        />}
            />
          </div>
  </div>
      </section>
  ;<section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary mb-4">Our Leadership</h2>
        <p className="text-lg text-text max-w-3xl mx-auto">
          Meet the dedicated leaders who guide our institution with vision and integrity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="gradient-border bg-white overflow-hidden">
          <div className="relative h-64">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Dr. Elizabeth Chen"
              fill
              className="styled-image object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-primary">Dr. Elizabeth Chen</h3>
            <p className="text-secondary mb-2">President</p>
            <p className="text-text">
              Dr. Chen brings over 25 years of experience in higher education leadership and a passion for innovation in
              teaching and learning.
            </p>
          </div>
        </div>

        <div className="gradient-border bg-white overflow-hidden">
          <div className="relative h-64">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Dr. Marcus Johnson"
              fill
              className="styled-image object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-primary">Dr. Marcus Johnson</h3>
            <p className="text-secondary mb-2">Provost</p>
            <p className="text-text">
              As Provost, Dr. Johnson oversees all academic programs and is committed to maintaining the highest
              standards of educational excellence.
            </p>
          </div>
        </div>

        <div className="gradient-border bg-white overflow-hidden">
          <div className="relative h-64">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Dr. Sophia Rodriguez"
              fill
              className="styled-image object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-primary">Dr. Sophia Rodriguez</h3>
            <p className="text-secondary mb-2">Dean of Students</p>
            <p className="text-text">
              Dr. Rodriguez is dedicated to creating a supportive and enriching campus environment where all students
              can thrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  ;<section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary mb-4">Our History</h2>
        <p className="text-lg text-text max-w-3xl mx-auto">
          Explore the key milestones in Horizon College's journey to becoming a leading institution of higher education.
        </p>
      </div>

      <div className="space-y-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <div className="gradient-border bg-white p-6 h-full">
              <h3 className="text-2xl font-bold text-primary mb-2">1965</h3>
              <h4 className="text-xl text-secondary mb-4">Founding</h4>
              <p className="text-text">
                Horizon College was founded with a vision to provide accessible, high-quality education to the
                community.
              </p>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <div className="relative h-64 gradient-border">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Founding of Horizon College"
                fill
                className="styled-image object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <div className="gradient-border bg-white p-6 h-full">
              <h3 className="text-2xl font-bold text-primary mb-2">1985</h3>
              <h4 className="text-xl text-secondary mb-4">Expansion</h4>
              <p className="text-text">
                The college expanded its campus and introduced new programs in business, science, and the arts.
              </p>
            </div>
          </div>
          <div className="md:w-2/3 md:pr-8">
            <div className="relative h-64 gradient-border">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Campus Expansion"
                fill
                className="styled-image object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <div className="gradient-border bg-white p-6 h-full">
              <h3 className="text-2xl font-bold text-primary mb-2">2005</h3>
              <h4 className="text-xl text-secondary mb-4">Innovation Center</h4>
              <p className="text-text">
                The opening of the Innovation Center marked a new era of research and technological advancement.
              </p>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <div className="relative h-64 gradient-border">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Innovation Center"
                fill
                className="styled-image object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <div className="gradient-border bg-white p-6 h-full">
              <h3 className="text-2xl font-bold text-primary mb-2">2023</h3>
              <h4 className="text-xl text-secondary mb-4">Global Recognition</h4>
              <p className="text-text">
                Horizon College achieved global recognition for its academic excellence and innovative approach to
                education.
              </p>
            </div>
          </div>
          <div className="md:w-2/3 md:pr-8">
            <div className="relative h-64 gradient-border">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Global Recognition"
                fill
                className="styled-image object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

