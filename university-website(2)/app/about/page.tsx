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
                Founded in 1998, Pillai University has grown from a small college to a comprehensive university with
                four prestigious colleges offering diverse programs in architecture, arts, commerce, science,
                engineering, and management.
              </p>
              <p className="text-muted-foreground mb-4">
                Over the past two decades, we have established ourselves as a center of academic excellence, research,
                and innovation. Our commitment to quality education has earned us recognition from various national and
                international accreditation bodies.
              </p>
              <p className="text-muted-foreground">
                Today, Pillai University stands tall as an institution that not only imparts knowledge but also shapes
                character, instills values, and prepares students to be responsible global citizens.
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
              <div className="gradient-blue p-8 h-full">
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
              <div className="gradient-blue-reverse p-8 h-full">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-white mr-4" />
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Provide quality education that fosters critical thinking, creativity, and innovation</span>
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
                  "Striving for the highest standards in all our endeavors, from academics to research to administration.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Inclusivity",
                description:
                  "Embracing diversity and ensuring equal opportunities for all, regardless of background or identity.",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Innovation",
                description: "Encouraging creative thinking and novel approaches to address complex challenges.",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Global Perspective",
                description: "Fostering an international outlook and preparing students for a globalized world.",
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
            {[1, 2, 3].map((item) => (
              <div key={item} className="card-3d rounded-xl overflow-hidden">
                <div className="bg-white dark:bg-gray-800">
                  <div className="relative h-64">
                    <Image
                      src={`/placeholder.svg?height=400&width=300&text=Leader ${item}`}
                      alt={`Leader ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">Dr. John Doe</h3>
                    <p className="text-primary mb-4">
                      {item === 1 ? "Chancellor" : item === 2 ? "Vice Chancellor" : "Dean of Academics"}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Ph.D. in Education from Harvard University with over 20 years of experience in academic
                      leadership.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/leadership">View All Leadership Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-blue text-white">
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

