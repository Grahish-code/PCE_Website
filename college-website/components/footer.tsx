import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Horizon College</h3>
            <p className="mb-4">
              Empowering minds, shaping futures. Join us on a journey of academic excellence and personal growth.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-accent transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-accent transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/campus-life" className="hover:text-accent transition-colors">
                  Campus Life
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Library
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Career Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Alumni
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 University Avenue, Academic City, State 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>info@horizoncollege.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Horizon College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

