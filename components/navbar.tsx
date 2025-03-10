"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Menu, X, Sun, Moon, Laptop, ChevronDown } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface NavLinkProps {
  href: string
  label: string
  subItems?: { label: string; href: string }[]
  onClick?: () => void
}

const NavLink = ({ href, label, subItems, onClick }: NavLinkProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  if (!subItems || subItems.length === 0) {
    return (
      <Link href={href} className="nav-link text-foreground hover:text-primary transition-colors" onClick={onClick}>
        {label}
      </Link>
    )
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="nav-link flex items-center text-foreground hover:text-primary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-background border">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {subItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary"
                onClick={() => {
                  setIsOpen(false)
                  if (onClick) onClick()
                }}
                role="menuitem"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    {
      name: "Home",
      href: "/",
      subItems: [],
    },
    {
      name: "About Us",
      href: "/about",
      subItems: [
        { label: "Our History", href: "/about#history" },
        { label: "Vision & Mission", href: "/about#vision-mission" },
        { label: "Core Values", href: "/about#core-values" },
        { label: "Leadership", href: "/about#leadership" },
      ],
    },
    {
      name: "Programs",
      href: "/programs",
      subItems: [
        { label: "Engineering", href: "/programs/engineering" },
        { label: "Arts, Commerce and Science", href: "/programs/arts-commerce-science" },
        { label: "Management Studies & Research", href: "/programs/management" },
        { label: "Architecture", href: "/programs/architecture" },
      ],
    },
    {
      name: "Placements",
      href: "/placements",
      subItems: [
        { label: "Placement Overview", href: "/placements/overview" },
        { label: "Placement & Internships", href: "/placements/internships" },
        { label: "Training & Development", href: "/placements/training" },
        { label: "Placement Cell Team", href: "/placements/team" },
      ],
    },
    {
      name: "Admissions",
      href: "/admissions",
      subItems: [
        { label: "Admission Process", href: "/admissions#process" },
        { label: "Eligibility Criteria", href: "/admissions#eligibility" },
        { label: "Fee Structure", href: "/admissions#fees" },
        { label: "Scholarships", href: "/admissions#scholarships" },
        { label: "Documents Required", href: "/admissions#documents" },
        { label: "College Details", href: "/admissions#colleges" },
      ],
    },
    {
      name: "Student Life",
      href: "/student-life",
      subItems: [
        { label: "Clubs & Societies", href: "/student-life/clubs" },
        { label: "Events & Festivals", href: "/student-life/events" },
        { label: "Sports Facilities", href: "/student-life/sports" },
        { label: "Campus Facilities", href: "/student-life/campus" },
      ],
    },
    {
      name: "Achievements",
      href: "/achievements",
      subItems: [
        { label: "University Recognitions", href: "/achievements#recognitions" },
        { label: "Research Excellence", href: "/achievements#research" },
        { label: "Student Achievements", href: "/achievements#students" },
      ],
    },
    {
      name: "Contact",
      href: "/contact",
      subItems: [],
    },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl sm:text-2xl font-bold gradient-text-blue-purple">Pillai College</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href} label={link.name} subItems={link.subItems} />
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  {theme === "light" ? (
                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                  ) : theme === "dark" ? (
                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                  ) : (
                    <Laptop className="h-[1.2rem] w-[1.2rem]" />
                  )}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isOpen}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.name} className="py-2">
                <NavLink href={link.href} label={link.name} subItems={link.subItems} onClick={() => setIsOpen(false)} />
              </div>
            ))}
            <div className="px-3 py-2">
              <div className="flex items-center space-x-2">
                <span>Theme:</span>
                <Button variant="outline" size="icon" onClick={() => setTheme("light")}>
                  <Sun className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => setTheme("dark")}>
                  <Moon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => setTheme("system")}>
                  <Laptop className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

