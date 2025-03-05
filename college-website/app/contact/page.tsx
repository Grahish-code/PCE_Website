import Hero from "@/components/hero"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div>
      <Hero
        title="Contact Us"
        subtitle="We're here to answer your questions and help you connect with the right people at Horizon College."
        backgroundImage="/placeholder.svg?height=800&width=1600"
      />

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="gradient-border bg-white p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary p-3 rounded-full">
                  <Phone size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Phone</h3>
              <p className="text-text mb-4">Call us for general inquiries</p>
              <Link href="tel:1234567890" className="text-primary font-bold hover:text-secondary transition-colors">
                (123) 456-7890
              </Link>
            </div>

            <div className="gradient-border bg-white p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary p-3 rounded-full">
                  <Mail size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
              <p className="text-text mb-4">Send us your questions</p>
              <Link href="mailto:info@horizoncollege.edu" className="text-primary font-bold hover:text-secondary transition-colors">
                info@horizoncollege.edu
              </Link>
            </div>

            <div className="gradient-border bg-white p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary p-3 rounded-full">
                  <MapPin size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Address</h3>
              <p className="text-text mb-4">Visit our campus</p>
              <address className="not-italic text-primary font-bold">
                123 University Avenue<br />
                Academic City, State 12345
              </address>
            </div>

            <div className="gradient-border bg-white p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary p-3 rounded-full">
                  <Clock size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Hours</h3>
              <p className="text-text mb-4">Administrative offices</p>
              <p className="text-primary font-bold">
                Monday - Friday<br />
                8:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Send Us a Message</h2>
              <p className="text-lg text-text">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form className="gradient-border bg-white p-8">
              <div className="gri\

