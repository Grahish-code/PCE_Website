import Hero from "@/components/hero"
import ImageCard from "@/components/image-card"
import Link from "next/link"
import Image from "next/image"
import { Home, Utensils, Dumbbell, Music, Users, BookOpen } from "lucide-react"

export default function CampusLifePage() {
  return (
    <div>
      <Hero
        title="Campus Life"
        subtitle="Experience a vibrant and inclusive community where you can grow academically, socially, and personally."
        backgroundImage="/placeholder.svg?height=800&width=1600"
      />

      {/* Housing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Residence Life</h2>
              <p className="text-lg mb-4">
                Living on campus is an integral part of the college experience at Horizon College. Our residence halls
                provide comfortable, safe, and supportive environments where students can live, learn, and grow
                together.
              </p>
              <p className="text-lg mb-6">
                Each residence hall has its own unique character and community, with dedicated Resident Assistants who
                organize activities and provide support to residents.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary p-2 rounded-full mr-4">
                    <Home size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Comfortable Accommodations</h3>
                    <p>Modern facilities with a variety of room options to suit different preferences and budgets</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary p-2 rounded-full mr-4">
                    <Users size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Vibrant Communities</h3>
                    <p>Engage with peers through floor activities, hall events, and community service opportunities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary p-2 rounded-full mr-4">
                    <BookOpen size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Learning-Focused Environment</h3>
                    <p>
                      Study lounges, academic support, and themed living communities centered around academic interests
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/campus-life/housing"
                  className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-primary/90 transition-colors duration-300"
                >
                  Explore Housing Options
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] gradient-border">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Residence Hall"
                fill
                className="styled-image object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dining */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Dining Services</h2>
            <p className="text-lg text-text max-w-3xl mx-auto">
              Enjoy a variety of delicious and nutritious dining options across campus, with menus that cater to
              different dietary needs and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ImageCard
              title="Main Dining Hall"
              description="Our largest dining facility offering a wide variety of options, from made-to-order stations to international cuisines."
              imageSrc="/placeholder.svg?height=400&width=600"
            />
            <ImageCard
              title="Campus Café"
              description="A cozy spot to grab coffee, smoothies, sandwiches, and snacks between classes or during study sessions."
              imageSrc="/placeholder.svg?height=400&width=600"
            />
            <ImageCard
              title="The Grill"
              description="Featuring burgers, sandwiches, and other grill favorites, perfect for a quick and satisfying meal."
              imageSrc="/placeholder.svg?height=400&width=600"
            />
          </div>

          <div className="mt-12 gradient-border bg-white p-6">
            <div className="flex items-start mb-4">
              <Utensils size={24} className="text-primary mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Meal Plans</h3>
                <p className="mb-4">
                  We offer flexible meal plans to suit different lifestyles and budgets. All plans include dining
                  dollars that can be used at any campus dining location.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                    <span>Unlimited Plan: Unlimited access to dining halls plus $200 dining dollars</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                    <span>14-Meal Plan: 14 meals per week plus $300 dining dollars</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                    <span>10-Meal Plan: 10 meals per week plus $400 dining dollars</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                    <span>Commuter Plan: 5 meals per week plus $250 dining dollars</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recreation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Recreation & Wellness</h2>
            <p className="text-lg text-text max-w-3xl mx-auto">
              Stay active and healthy with our state-of-the-art recreation facilities and wellness programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[300px] gradient-border">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Fitness Center"
                fill
                className="styled-image object-cover"
              />
            </div>
            <div className="gradient-border bg-white p-6">
              <div className="flex items-start mb-4">
                <Dumbbell size={24} className="text-primary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Fitness Center</h3>
                  <p>
                    Our modern fitness center features cardio and strength training equipment, free weights, and
                    dedicated spaces for stretching and functional training.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>State-of-the-art cardio and strength equipment</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>Group fitness classes including yoga, cycling, and HIIT</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>Personal training services available</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>Open 6:00 AM - 11:00 PM on weekdays, 8:00 AM - 8:00 PM on weekends</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ImageCard
              title="Aquatic Center"
              description="Olympic-sized swimming pool for lap swimming, water aerobics, and recreational swimming."
              imageSrc="/placeholder.svg?height=400&width=600"
            />
            <ImageCard
              title="Indoor Courts"
              description="Basketball, volleyball, and badminton courts available for open play and intramural competitions."
              imageSrc="/placeholder.svg?height=400&width=600"
            />
            <ImageCard
              title="Outdoor Recreation"
              description="Tennis courts, soccer fields, and walking trails for outdoor activities and sports."
              imageSrc="/placeholder.svg?height=400&width=600"
            />
          </div>
        </div>
      </section>

      {/* Student Organizations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Student Organizations</h2>
            <p className="text-lg text-text max-w-3xl mx-auto">
              With over 100 student organizations, there's something for everyone at Horizon College. Get involved,
              develop leadership skills, and make lifelong friends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="gradient-border bg-white p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Academic & Professional</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>Business Club</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>Engineering Society</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>Pre-Med Association</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>Psychology Club</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>Debate Team</span>
                </li>
              </ul>
            </div>

            <div className="gradient-border bg-white p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Cultural & Identity</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>International Student Association</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>Black Student Union</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>Asian Cultural Society</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>Hispanic Student Association</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>LGBTQ+ Alliance</span>
                </li>
              </ul>
            </div>

            <div className="gradient-border bg-white p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Arts & Media</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>Student Newspaper</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>Photography Club</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>Theater Group</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>A Cappella Choir</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>Film Society</span>
                </li>
              </ul>
            </div>

            <div className="gradient-border bg-white p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Service & Advocacy</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>Volunteer Corps</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>Environmental Club</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>Habitat for Humanity</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>Student Government</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <span>Peer Mentors</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/campus-life/organizations"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-primary/90 transition-colors duration-300"
            >
              Explore All Organizations
            </Link>
          </div>
        </div>
      </section>

      {/* Events & Traditions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Events & Traditions</h2>
            <p className="text-lg text-text max-w-3xl mx-auto">
              Experience the rich traditions and exciting events that make Horizon College special.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="gradient-border bg-white overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Welcome Week"
                  fill
                  className="styled-image object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Welcome Week</h3>
                <p className="text-text">
                  Kick off the academic year with a week of activities, including the convocation ceremony, club fair,
                  and community service day.
                </p>
              </div>
            </div>

            <div className="gradient-border bg-white overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Homecoming"
                  fill
                  className="styled-image object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Homecoming</h3>
                <p className="text-text">
                  Join alumni, students, and faculty for a weekend of celebration, including the football game, parade,
                  and alumni events.
                </p>
              </div>
            </div>

            <div className="gradient-border bg-white overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Spring Festival"
                  fill
                  className="styled-image object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Spring Festival</h3>
                <p className="text-text">
                  Celebrate the end of the academic year with music, food, games, and activities on the campus quad.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 gradient-border bg-white p-6">
            <div className="flex items-start mb-4">
              <Music size={24} className="text-primary mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Arts & Culture</h3>
                <p className="mb-4">
                  Horizon College hosts a variety of cultural events throughout the year, including concerts, theater
                  productions, art exhibitions, and guest lectures.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Performing Arts Series</h4>
                    <p>Professional performances in music, dance, and theater</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Student Showcases</h4>
                    <p>Opportunities for students to share their talents with the community</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Gallery Exhibitions</h4>
                    <p>Rotating exhibitions featuring student, faculty, and visiting artists</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Distinguished Speaker Series</h4>
                    <p>Thought leaders and experts from various fields share their insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

