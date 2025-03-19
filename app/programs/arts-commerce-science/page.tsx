import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import { CheckCircle, Clock, Calendar, Users, GraduationCap, Award, BookOpen } from "lucide-react"

export default function ArtsCommerceScience() {
  const programs = [
    {
      name: "Bachelor of Arts (B.A.)",
      slug: "bachelor-of-arts",
      duration: "3 years",
      description:
        "Comprehensive programs in humanities subjects including English, Psychology, Sociology, Economics, and more.",
      eligibility: "10+2 or equivalent with minimum 45% aggregate marks in relevant stream.",
    },
    {
      name: "Bachelor of Commerce (B.Com)",
      slug: "bachelor-of-commerce",
      duration: "3 years",
      description: "Study of commerce, accounting, finance, economics, and business management principles.",
      eligibility: "10+2 or equivalent with minimum 45% aggregate marks in relevant stream.",
    },
    {
      name: "Bachelor of Science (B.Sc)",
      slug: "bachelor-of-science",
      duration: "3 years",
      description: "Programs in Physics, Chemistry, Mathematics, Computer Science, and Life Sciences.",
      eligibility: "10+2 or equivalent with minimum 45% aggregate marks in relevant stream.",
    },
    {
      name: "Master of Arts (M.A.)",
      slug: "master-of-arts",
      duration: "2 years",
      description: "Advanced study in humanities subjects with specialization options.",
      eligibility: "Bachelor's degree in relevant discipline with minimum 50% aggregate marks.",
    },
    {
      name: "Master of Commerce (M.Com)",
      slug: "master-of-commerce",
      duration: "2 years",
      description: "Advanced study in commerce, accounting, finance, and business management.",
      eligibility: "Bachelor's degree in relevant discipline with minimum 50% aggregate marks.",
    },
    {
      name: "Master of Science (M.Sc)",
      slug: "master-of-science",
      duration: "2 years",
      description: "Advanced study in science subjects with research opportunities.",
      eligibility: "Bachelor's degree in relevant discipline with minimum 50% aggregate marks.",
    },
    {
      name: "Ph.D. Programs",
      slug: "phd-programs",
      duration: "3-5 years",
      description: "Research-focused programs in various disciplines of arts, commerce, and science.",
      eligibility:
        "Master's degree in relevant discipline with minimum 55% aggregate marks and entrance test/interview.",
    },
  ]

  const facilities = [
    {
      name: "Science Laboratories",
      description:
        "Well-equipped laboratories for Physics, Chemistry, Biology, and Computer Science with modern equipment and instruments.",
    },
    {
      name: "Language Lab",
      description: "Advanced language laboratory for enhancing communication skills and language proficiency.",
    },
    {
      name: "Digital Library",
      description:
        "Extensive collection of books, journals, e-resources, and online databases for research and learning.",
    },
    {
      name: "Research Centers",
      description: "Dedicated centers for research in various disciplines with state-of-the-art facilities.",
    },
    {
      name: "Computer Labs",
      description: "Modern computer laboratories with the latest hardware and software for practical learning.",
    },
    {
      name: "Seminar Halls",
      description: "Well-equipped seminar halls for academic discussions, presentations, and guest lectures.",
    },
  ]

  return (
    <>
      <HeroSection
        title="Arts, Commerce & Science Programs"
        subtitle="Diverse undergraduate and postgraduate programs across humanities, commerce, and sciences"
        backgroundImage="/placeholder.svg?height=600&width=1600&text=Arts+Commerce+Science"
      />

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">
              Pillai College of Arts, Commerce and Science
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Established in 2000, Pillai College of Arts, Commerce and Science (PCACS) offers a diverse range of
              undergraduate and postgraduate programs across humanities, commerce, and sciences. Our interdisciplinary
              approach fosters critical thinking, creativity, and practical skills needed for various career paths.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Arts+College"
                alt="Arts College"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Established</div>
                    <div className="font-medium">2000</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Students</div>
                    <div className="font-medium">2000+</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Programs</div>
                    <div className="font-medium">15+ Undergraduate & Postgraduate Programs</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Accreditation</div>
                    <div className="font-medium">NAAC 'A++' Accredited</div>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                PCACS offers a wide range of programs in arts, commerce, and science disciplines. Our curriculum is
                designed to provide students with a strong foundation in their chosen field, along with opportunities
                for interdisciplinary learning, research, and practical experience.
              </p>
              <Button asChild>
                <Link href="/admissions">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1-2 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl hero-text-enhanced">Our Programs</h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              Explore our diverse range of programs in arts, commerce, and science designed to prepare you for a
              successful career in your chosen field.
            </p>
          </div>

          <div className="space-y-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-white">
                      <Link href={`/programs/${program.slug}`} className="hover:underline">
                        {program.name}
                      </Link>
                    </h3>
                    <div className="flex items-center text-blue-200 mt-2">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{program.duration}</span>
                    </div>
                  </div>
                  <div className="md:w-2/4 mb-4 md:mb-0 md:px-6">
                    <p className="text-blue-100">{program.description}</p>
                  </div>
                  <div className="md:w-1/4">
                    <div className="bg-blue-900/50 rounded-lg p-3">
                      <h4 className="font-semibold text-white text-sm mb-2">Eligibility:</h4>
                      <p className="text-blue-100 text-sm">{program.eligibility}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">
              State-of-the-Art Facilities
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our programs are supported by modern facilities and resources that provide an enriching learning
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="card-with-border p-6">
                <h3 className="text-xl font-bold mb-3">{facility.name}</h3>
                <p className="text-muted-foreground">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1-3 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6 hero-text-enhanced">Career Opportunities</h2>
              <p className="text-blue-100 mb-6">
                Our graduates pursue successful careers in various fields based on their specialization. The strong
                foundation and practical skills gained during the program prepare them for diverse career paths.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-blue-200" />
                  <div>
                    <h3 className="font-semibold text-white">Arts & Humanities</h3>
                    <p className="text-blue-100">
                      Teaching, Journalism, Content Writing, Public Relations, Civil Services, NGOs, Research, and more.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-blue-200" />
                  <div>
                    <h3 className="font-semibold text-white">Commerce & Management</h3>
                    <p className="text-blue-100">
                      Accounting, Finance, Banking, Investment, Marketing, Human Resources, Entrepreneurship, and more.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-blue-200" />
                  <div>
                    <h3 className="font-semibold text-white">Science</h3>
                    <p className="text-blue-100">
                      Research, Data Analysis, IT Industry, Healthcare, Environmental Consulting, Quality Control, and
                      more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-white text-blue-700 hover:bg-blue-50">
                  <Link href="/placements">Explore Placement Opportunities</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Career+Opportunities"
                alt="Career Opportunities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">Student Activities</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe in holistic development. Our students participate in various co-curricular and extracurricular
              activities that enhance their skills and personality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-with-border p-6">
              <div className="text-primary mb-4">
                <BookOpen className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Academic Clubs</h3>
              <p className="text-muted-foreground mb-4">
                Subject-specific clubs that organize workshops, seminars, competitions, and guest lectures to enhance
                academic knowledge and skills.
              </p>
            </div>
            <div className="card-with-border p-6">
              <div className="text-primary mb-4">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cultural Activities</h3>
              <p className="text-muted-foreground mb-4">
                Annual cultural festival, music, dance, drama, and literary events that provide a platform for students
                to showcase their talents.
              </p>
            </div>
            <div className="card-with-border p-6">
              <div className="text-primary mb-4">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sports & Fitness</h3>
              <p className="text-muted-foreground mb-4">
                Various sports facilities and competitions that promote physical fitness, teamwork, and sportsmanship
                among students.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-color-1 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6 hero-text-enhanced">Ready to Begin Your Journey?</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Take the first step towards a rewarding career by applying to Pillai College of Arts, Commerce and
              Science.
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

