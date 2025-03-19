import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import { CheckCircle, Users, BookOpen, Award, Target, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <HeroSection title="About Pillai University" subtitle="A legacy of excellence in education since 1998" />

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden card-3d order-2 md:order-1">
              <Image
                src="/placeholder.svg?height=800&width=600&text=University+History"
                alt="University History"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">Our History</h2>
              <p className="text-muted-foreground mb-4">
              Founded in 1965, the Pillai Group of Institutions (Mahatma Education Society - MES) has grown from a visionary initiative into a distinguished name in education. With a commitment to academic excellence, research, and holistic development, MES has nurtured thousands of students, empowering them to become leaders in various fields. Over the decades, we have expanded into a network of prestigious institutions offering engineering, management, commerce, arts, science, architecture, and professional studies.
              </p>
              <p className="text-muted-foreground mb-4">
              Today, we stand as a multi-disciplinary educational powerhouse, recognized for our world-class faculty, cutting-edge research, state-of-the-art infrastructure, and industry-integrated learning experiences. Our institutions emphasize innovation, inclusivity, and global perspectives, ensuring that every student is prepared for the challenges of tomorrow
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Vision & Mission</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Guiding principles that drive our commitment to excellence in education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-3d rounded-xl overflow-hidden">
              <div className="gradient-color-1 p-8 h-full">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-white mr-4" />
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-blue-100">
                  To be a globally recognized university known for academic excellence, innovative research, and
                  producing graduates who are not only skilled professionals but also responsible global citizens
                  committed to making a positive impact on society.
                </p>
              </div>
            </div>

            <div className="card-3d rounded-xl overflow-hidden">
              <div className="gradient-color-1-reverse p-8 h-full">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-white mr-4" />
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Deliver transformative education that nurtures critical thinking, creativity, and innovation.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Conduct cutting-edge research that addresses real-world challenges</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Promote inclusivity, diversity, and ethical values</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Establish strong industry partnerships for enhanced learning experiences</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Contribute to community development through outreach programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Core Values</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our actions and decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Excellence",
                description:
                  "Committed to achieving the highest standards in education, research, and administration, ensuring academic and professional excellence .",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Inclusivity",
                description:
                  "Embracing diversity and fostering an environment where everyone, regardless of background or identity, has equal opportunities to thrive.",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Innovation",
                description: "Encouraging creative thinking and novel approaches to address complex challenges.",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Global Perspective",
                description: "Fostering an international outlook and preparing students for a globalized world. an international outlook and preparing students for a globalized world.",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Integrity",
                description: "Upholding ethical standards, honesty, and transparency in all our actions.",
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Social Responsibility",
                description: "Contributing positively to society and promoting sustainable development.",
              },
            ].map((value, index) => (
              <div key={index} className="card-3d rounded-xl overflow-hidden">
                <div className="bg-white dark:bg-gray-800 p-6 h-full">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 text-primary">{value.icon}</div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 section-alternate">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold sm:text-4xl">Leadership</h2>
      <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
        Meet the visionaries guiding Pillai University towards excellence.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="card-3d rounded-xl overflow-hidden">
        <div className="bg-white dark:bg-gray-800">
          <div className="relative h-64">
            <Image
              src={`/placeholder.svg?height=400&width=300&text=Leader 1`}
              alt="Leader 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-1">Dr. K. M. Vasudevan Pillai</h3>
            <p className="text-primary mb-4">Chairman & CEO</p>
            <p className="text-muted-foreground mb-4">We are committed to provide a holistic education based on new generation academics that creates powerful global career options to our students and at the same time make them key contributors to the society at large. We strive to achieve nation building by emphasizing on character building of individual. This is done through approach of mentoring.</p>
          </div>
        </div>
      </div>

      <div className="card-3d rounded-xl overflow-hidden">
        <div className="bg-white dark:bg-gray-800">
          <div className="relative h-64">
            <Image
              src={`/placeholder.svg?height=400&width=300&text=Leader 2`}
              alt="Leader 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-1">Dr. Daphne Pillai</h3>
            <p className="text-primary mb-4">Secretary</p>
            <p className="text-muted-foreground mb-4">In this fiercely competitive world, success has several dimensions far widespread than the vortex of academia, spreading its tentacles into diverse fields which one has to adapt to. Our objective at Pillai is to provide you the right environment which will enable you to fulfill all aspirations and ambitions. Very often one is not even aware of one’s own capabilities and we at Pillai’s believe that even if we succeed in making the student scratch the tip of iceberg, we have set the ball rolling for individuals to achieve ultimate success in life.</p>
          </div>
        </div>
      </div>

      <div className="card-3d rounded-xl overflow-hidden">
        <div className="bg-white dark:bg-gray-800">
          <div className="relative h-64">
            <Image
              src={`/placeholder.svg?height=400&width=300&text=Leader 3`}
              alt="Leader 3"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-1">Dr. Sandeep Joshi</h3>
            <p className="text-primary mb-4">Principal PCE</p>
            <p className="text-muted-foreground mb-4">Dr. Joshi holds a Doctorate degree in Mechanical Engineering from IIT Bombay and has over 23 years of professional experience.
            His research areas include Heat Transfer, Sustainable renewable energy, Low cost solar energy utilization, Waste heat recovery and Energy management. He has two Indian Patents on Solar Air Heater and Solar Agro produce Dryer. He also has 14 papers in International Journals of well repute and 18 papers in peer reviewed international conferences.</p>
          </div>
        </div>
      </div>

      <div className="card-3d rounded-xl overflow-hidden">
        <div className="bg-white dark:bg-gray-800">
          <div className="relative h-64">
            <Image
              src={`/placeholder.svg?height=400&width=300&text=Leader 4`}
              alt="Leader 4"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-1">Leader 4 Name</h3>
            <p className="text-primary mb-4">Position</p>
            <p className="text-muted-foreground mb-4">Description of Leader 4.</p>
          </div>
        </div>
      </div>

      <div className="card-3d rounded-xl overflow-hidden">
        <div className="bg-white dark:bg-gray-800">
          <div className="relative h-64">
            <Image
              src={`/placeholder.svg?height=400&width=300&text=Leader 5`}
              alt="Leader 5"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-1">Leader 5 Name</h3>
            <p className="text-primary mb-4">Position</p>
            <p className="text-muted-foreground mb-4">Description of Leader 5.</p>
          </div>
        </div>
      </div>

      <div className="card-3d rounded-xl overflow-hidden">
        <div className="bg-white dark:bg-gray-800">
          <div className="relative h-64">
            <Image
              src={`/placeholder.svg?height=400&width=300&text=Leader 6`}
              alt="Leader 6"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-1">Leader 6 Name</h3>
            <p className="text-primary mb-4">Position</p>
            <p className="text-muted-foreground mb-4">Description of Leader 6.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="py-16 gradient-color-1 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">Join Our Community</h2>
              <p className="text-blue-100 mb-6">
                Become part of a vibrant academic community dedicated to excellence, innovation, and making a positive
                impact on society.
              </p>
              <div className="flex flex-wrap gap-4">
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
            <div className="relative h-[300px] rounded-xl overflow-hidden card-3d">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Campus+Life"
                alt="Campus Life"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

