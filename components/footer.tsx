import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-color-1-4 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "#ffffff" }}>
              Pillai College
            </h3>
            <p className="mb-4" style={{ color: "#ffffff" }}>
              Empowering students with knowledge, skills, and values to excel in a global society.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-200 transition-colors" style={{ color: "#ffffff" }}>
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-blue-200 transition-colors" style={{ color: "#ffffff" }}>
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-blue-200 transition-colors" style={{ color: "#ffffff" }}>
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-blue-200 transition-colors" style={{ color: "#ffffff" }}>
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "#ffffff" }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-200 transition-colors" style={{ color: "#ffffff" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-200 transition-colors" style={{ color: "#ffffff" }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-blue-200 transition-colors" style={{ color: "#ffffff" }}>
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/placements" className="hover:text-blue-200 transition-colors" style={{ color: "#ffffff" }}>
                  Placements
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-blue-200 transition-colors" style={{ color: "#ffffff" }}>
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/student-life" className="hover:text-blue-200 transition-colors" style={{ color: "#ffffff" }}>
                  Student Life
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-blue-200 transition-colors" style={{ color: "#ffffff" }}>
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-200 transition-colors" style={{ color: "#ffffff" }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "#ffffff" }}>
              Our Programs
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs/engineering" className="hover:text-blue-200 transition-colors" style={{ color: "#ffffff" }}>
                  Engineering
                </Link>
              </li>
              <li>
                <Link href="/programs/arts-commerce-science" className="hover:text-blue-200 transition-colors" style={{ color: "#ffffff" }}>
                  Arts, Commerce and Science
                </Link>
              </li>
              <li>
                <Link href="/programs/management" className="hover:text-blue-200 transition-colors" style={{ color: "#ffffff" }}>
                  Management Studies & Research
                </Link>
              </li>
              <li>
                <Link href="/programs/architecture" className="hover:text-blue-200 transition-colors" style={{ color: "#ffffff" }}>
                  Architecture
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "#ffffff" }}>
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start" style={{ color: "#ffffff" }}>
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <span>Dr. K. M. Vasudevan Pillai Campus, Plot No. 10, Sector 16, New Panvel, Navi Mumbai - 410206</span>
              </li>
              <li className="flex items-center" style={{ color: "#ffffff" }}>
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 22 2745 6100</span>
              </li>
              <li className="flex items-center" style={{ color: "#ffffff" }}>
                <Mail className="h-5 w-5 mr-2" />
                <span>info@pillai.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-8 border-golden-light mt-8 pt-8 text-center">
          <p style={{ color: "#ffffff" }}>
            © {new Date().getFullYear()} Pillai College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
