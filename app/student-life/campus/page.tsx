import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import {
  Home,
  Wifi,
  AmbulanceIcon as FirstAid,
  Bus,
  ShoppingBag,
  Library,
  Computer,
  Utensils,
  ArrowRight,
} from "lucide-react"

export default function CampusFacilitiesPage() {
  const facilities = [
    {
      name: "Modern Hostels",
      description: "Comfortable accommodation with Wi-Fi, dining facilities, recreation areas, and 24/7 security.",
      icon: <Home className="h-8 w-8" />,
      image: "/placeholder.svg?height=400&width=600&text=Hostels",
      features: [
        "Separate hostels for boys and girls",
        "Fully furnished rooms with attached bathrooms",
        "Wi-Fi connectivity",
        "Common rooms with TV and indoor games",
        "Dining facilities with nutritious meals",
        "24/7 security with CCTV surveillance",
        "Laundry services",
      ],
    },
    {
      name: "Central Library",
      description: "Extensive collection of books, journals, e-resources, and comfortable reading spaces.",
      icon: <Library className="h-8 w-8" />,
      image: "/placeholder.svg?height=400&width=600&text=Library",
      features: [
        "Over 100,000 books across various disciplines",
        "Subscription to leading national and international journals",
        "Digital library with e-books and online resources",
        "Spacious reading halls",
        "Discussion rooms for group study",
        "Photocopying and printing facilities",
        "Extended hours during examination periods",
      ],
    },
    {
      name: "Computer Labs",
      description:
        "State-of-the-art computer laboratories with the latest hardware and software for academic and research purposes.",
      icon: <Computer className="h-8 w-8" />,
      image: "/placeholder.svg?height=400&width=600&text=Computer+Labs",
      features: [
        "Multiple labs with high-end computers",
        "Latest software for various disciplines",
        "High-speed internet connectivity",
        "Technical support staff",
        "24/7 access for research scholars",
        "Printing and scanning facilities",
        "Regular upgrades to keep pace with technology",
      ],
    },
    {
      name: "Cafeterias & Food Courts",
      description: "Multiple dining options serving a variety of cuisines at affordable prices.",
      icon: <Utensils className="h-8 w-8" />,
      image: "/placeholder.svg?height=400&width=600&text=Cafeteria",
      features: [
        "Multiple cafeterias across the campus",
        "Variety of cuisines including Indian, Chinese, and Continental",
        "Hygienic food preparation",
        "Affordable prices",
        "Special dietary options (vegetarian, vegan, etc.)",
        "Comfortable seating arrangements",
        "Extended hours during events and examinations",
      ],
    },
    {
      name: "Health Center",
      description: "On-campus medical facility with qualified doctors and nurses for emergency and routine healthcare.",
      icon: <FirstAid className="h-8 w-8" />,
      image: "/placeholder.svg?height=400&width=600&text=Health+Center",
      features: [
        "Qualified doctors and nurses",
        "First aid and emergency care",
        "Basic diagnostic facilities",
        "Ambulance service for emergencies",
        "Regular health check-ups",
        "Mental health counseling",
        "Tie-ups with nearby hospitals for specialized care",
      ],
    },
    {
      name: "Wi-Fi Campus",
      description: "High-speed Wi-Fi connectivity throughout the campus for academic and personal use.",
      icon: <Wifi className="h-8 w-8" />,
      image: "/placeholder.svg?height=400&width=600&text=Wi-Fi+Campus",
      features: [
        "High-speed internet connectivity",
        "Coverage across the entire campus",
        "Secure network with authentication",
        "Technical support for connectivity issues",
        "Regular upgrades to improve speed and coverage",
        "Separate networks for academic and personal use",
        "Bandwidth management for optimal performance",
      ],
    },
    {
      name: "Transportation",
      description:
        "Regular bus services connecting the campus to various parts of the city for commuting students and staff.",
      icon: <Bus className="h-8 w-8" />,
      image: "/placeholder.svg?height=400&width=600&text=Transportation",
      features: [
        "Fleet of buses covering major routes",
        "Regular schedules throughout the day",
        "GPS tracking for real-time location updates",
        "Comfortable and safe travel",
        "Special services for events and field trips",
        "Subsidized rates for students",
        "Dedicated staff for coordination and management",
      ],
    },
    {
      name: "Shopping Complex",
      description: "On-campus shopping facilities for stationery, books, daily essentials, and other necessities.",
      icon: <ShoppingBag className="h-8 w-8" />,
      image: "/placeholder.svg?height=400&width=600&text=Shopping+Complex",
      features: [
        "Stationery and book store",
        "Convenience store for daily essentials",
        "Photocopying and printing services",
        "ATM facilities",
        "Mobile recharge and bill payment services",
        "Gift shop",
        "Courier and postal services",
      ],
    },
  ]

  return (
    <>
      <HeroSection
        title="Campus Facilities"
        subtitle="Modern infrastructure and amenities for a comfortable and enriching campus life"
        backgroundImage="/placeholder.svg?height=600&width=1600&text=Campus+Facilities"
      />

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">Our Campus Facilities</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Pillai University provides a range of modern facilities and amenities to ensure a comfortable and
              enriching campus life for our students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.slice(0, 4).map((facility, index) => (
              <div key={index} className="card-with-border p-6">
                <div className="text-primary mb-4">{facility.icon}</div>
                <h3 className="text-xl font-bold mb-3">{facility.name}</h3>
                <p className="text-muted-foreground mb-4">{facility.description}</p>
                <Button asChild variant="outline">
                  <Link href={`#${facility.name.toLowerCase().replace(/\s+/g, "-")}`}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {facilities.slice(0, 4).map((facility, index) => (
        <section
          key={index}
          id={facility.name.toLowerCase().replace(/\s+/g, "-")}
          className={`py-16 ${index % 2 === 0 ? "gradient-blue-purple text-white" : "section-alternate"}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? "order-2 md:order-1" : "order-2"}`}>
                <h2 className="text-3xl font-bold sm:text-4xl mb-6 hero-text-enhanced">{facility.name}</h2>
                <p className={`mb-6 ${index % 2 === 0 ? "text-blue-100" : "text-muted-foreground"}`}>
                  {facility.description}
                </p>
                <h3 className={`font-semibold mb-3 ${index % 2 === 0 ? "text-white" : ""}`}>Features:</h3>
                <ul className="space-y-2 mb-6">
                  {facility.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <ArrowRight
                        className={`h-5 w-5 mr-2 mt-0.5 ${index % 2 === 0 ? "text-blue-200" : "text-primary"}`}
                      />
                      <span className={index % 2 === 0 ? "text-blue-100" : "text-muted-foreground"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                {index % 2 === 0 ? (
                  <Button asChild className="bg-white text-blue-700 hover:bg-blue-50">
                    <Link href="/contact">Contact for More Information</Link>
                  </Button>
                ) : (
                  <Button asChild>
                    <Link href="/contact">Contact for More Information</Link>
                  </Button>
                )}
              </div>
              <div
                className={`relative h-[400px] rounded-xl overflow-hidden card-hover ${index % 2 === 1 ? "order-1 md:order-2" : "order-1"}`}
              >
                <Image src={facility.image || "/placeholder.svg"} alt={facility.name} fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text hero-text-enhanced">More Campus Facilities</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our additional facilities designed to enhance your campus experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.slice(4).map((facility, index) => (
              <div key={index} className="card-with-border p-6">
                <div className="text-primary mb-4">{facility.icon}</div>
                <h3 className="text-xl font-bold mb-3">{facility.name}</h3>
                <p className="text-muted-foreground mb-4">{facility.description}</p>
                <Button asChild variant="outline">
                  <Link href={`#${facility.name.toLowerCase().replace(/\s+/g, "-")}`}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {facilities.slice(4).map((facility, index) => (
        <section
          key={index}
          id={facility.name.toLowerCase().replace(/\s+/g, "-")}
          className={`py-16 ${index % 2 === 0 ? "gradient-blue-cyan text-white" : "section-alternate"}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? "order-2 md:order-1" : "order-2"}`}>
                <h2 className="text-3xl font-bold sm:text-4xl mb-6 hero-text-enhanced">{facility.name}</h2>
                <p className={`mb-6 ${index % 2 === 0 ? "text-blue-100" : "text-muted-foreground"}`}>
                  {facility.description}
                </p>
                <h3 className={`font-semibold mb-3 ${index % 2 === 0 ? "text-white" : ""}`}>Features:</h3>
                <ul className="space-y-2 mb-6">
                  {facility.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <ArrowRight
                        className={`h-5 w-5 mr-2 mt-0.5 ${index % 2 === 0 ? "text-blue-200" : "text-primary"}`}
                      />
                      <span className={index % 2 === 0 ? "text-blue-100" : "text-muted-foreground"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                {index % 2 === 0 ? (
                  <Button asChild className="bg-white text-blue-700 hover:bg-blue-50">
                    <Link href="/contact">Contact for More Information</Link>
                  </Button>
                ) : (
                  <Button asChild>
                    <Link href="/contact">Contact for More Information</Link>
                  </Button>
                )}
              </div>
              <div
                className={`relative h-[400px] rounded-xl overflow-hidden card-hover ${index % 2 === 1 ? "order-1 md:order-2" : "order-1"}`}
              >
                <Image src={facility.image || "/placeholder.svg"} alt={facility.name} fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 gradient-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6 hero-text-enhanced">Campus Map</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Explore our campus virtually with our interactive campus map.
            </p>
            <div className="relative h-[500px] rounded-xl overflow-hidden card-hover max-w-5xl mx-auto">
              <Image
                src="/placeholder.svg?height=1000&width=1600&text=Campus+Map"
                alt="Campus Map"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="/campus-tour">Schedule a Campus Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

