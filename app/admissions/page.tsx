import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import { CheckCircle, Calendar, FileText, CreditCard, GraduationCap, Award, Users } from "lucide-react"

export default function AdmissionsPage() {
  const admissionSteps = [
    {
      title: "Research Programs",
      description: "Explore our diverse range of undergraduate and postgraduate programs across our four colleges.",
      icon: <FileText className="h-8 w-8" />,
    },
    {
      title: "Check Eligibility",
      description: "Review the eligibility criteria for your chosen program to ensure you meet the requirements.",
      icon: <CheckCircle className="h-8 w-8" />,
    },
    {
      title: "Online Application",
      description: "Complete the online application form and upload the required documents.",
      icon: <FileText className="h-8 w-8" />,
    },
    {
      title: "Entrance Examination",
      description: "Appear for the relevant entrance examination or participate in the selection process.",
      icon: <FileText className="h-8 w-8" />,
    },
    {
      title: "Interview",
      description: "Shortlisted candidates will be called for an interview or counseling session.",
      icon: <FileText className="h-8 w-8" />,
    },
    {
      title: "Admission Offer",
      description: "Successful candidates will receive an admission offer letter.",
      icon: <FileText className="h-8 w-8" />,
    },
    {
      title: "Fee Payment",
      description: "Secure your seat by paying the admission fee within the specified timeline.",
      icon: <CreditCard className="h-8 w-8" />,
    },
  ]

  const eligibilityCriteria = [
    {
      college: "Pillai College of Architecture",
      programs: [
        {
          name: "Bachelor of Architecture (B.Arch)",
          criteria:
            "10+2 or equivalent with Mathematics as a subject with minimum 50% aggregate marks and valid NATA score.",
        },
        {
          name: "Master of Architecture (M.Arch)",
          criteria: "B.Arch degree with minimum 55% aggregate marks and valid GATE score or university entrance test.",
        },
      ],
    },
    {
      college: "Pillai College of Arts, Commerce and Science",
      programs: [
        {
          name: "Bachelor Programs (B.A./B.Com/B.Sc)",
          criteria: "10+2 or equivalent with minimum 45% aggregate marks in relevant stream.",
        },
        {
          name: "Master Programs (M.A./M.Com/M.Sc)",
          criteria: "Bachelor's degree in relevant discipline with minimum 50% aggregate marks.",
        },
      ],
    },
    {
      college: "Pillai College of Engineering",
      programs: [
        {
          name: "B.Tech Programs",
          criteria:
            "10+2 or equivalent with Physics, Chemistry, and Mathematics with minimum 50% aggregate marks and valid JEE Main score.",
        },
        {
          name: "M.Tech Programs",
          criteria: "B.Tech/B.E. degree in relevant discipline with minimum 55% aggregate marks and valid GATE score.",
        },
      ],
    },
    {
      college: "Pillai Institute of Management Studies and Research",
      programs: [
        {
          name: "MBA",
          criteria:
            "Bachelor's degree in any discipline with minimum 50% aggregate marks and valid CAT/MAT/XAT/CMAT/GMAT score.",
        },
      ],
    },
  ]

  const scholarships = [
    {
      name: "Merit Scholarship",
      eligibility: "Students with exceptional academic performance in qualifying examinations.",
      amount: "Up to 50% tuition fee waiver",
      icon: <Award className="h-8 w-8" />,
    },
    {
      name: "Sports Excellence Scholarship",
      eligibility: "Students with outstanding achievements in sports at state/national/international level.",
      amount: "Up to 30% tuition fee waiver",
      icon: <Award className="h-8 w-8" />,
    },
    {
      name: "Financial Need-based Scholarship",
      eligibility: "Students from economically weaker sections with good academic record.",
      amount: "Up to 40% tuition fee waiver",
      icon: <Award className="h-8 w-8" />,
    },
    {
      name: "Research Scholarship",
      eligibility: "Postgraduate students pursuing research in priority areas.",
      amount: "Full tuition fee waiver and monthly stipend",
      icon: <Award className="h-8 w-8" />,
    },
  ]

  return (
    <>
      <HeroSection
        title="Admissions"
        subtitle="Your journey to academic excellence begins here"
        backgroundImage="/placeholder.svg?height=600&width=1600&text=Admissions"
      />

      <section id="process" className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text">Admission Process</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Follow these simple steps to join Pillai University and embark on your journey towards a successful
              career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="card-hover rounded-xl overflow-hidden">
                <div className="gradient-color-1 p-6 h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-600 mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 text-white">{step.icon}</div>
                    <p className="text-blue-100">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="#application">Start Your Application</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="eligibility" className="py-16 gradient-color-1-2 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Eligibility Criteria</h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              Each program has specific eligibility requirements. Check if you meet the criteria for your desired
              program.
            </p>
          </div>

          <div className="space-y-8">
            {eligibilityCriteria.map((college, index) => (
              <div key={index} className="card-hover rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{college.college}</h3>
                  <div className="space-y-4">
                    {college.programs.map((program, idx) => (
                      <div key={idx} className="bg-white/10 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-white mb-2">{program.name}</h4>
                        <div className="flex items-start">
                          <GraduationCap className="h-5 w-5 mr-2 mt-0.5 text-blue-200" />
                          <p className="text-blue-100">{program.criteria}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-blue-100 mb-4">
              Note: Reservation policies as per government norms are applicable. Relaxation in eligibility criteria may
              be provided to candidates from reserved categories as per the prevailing rules.
            </p>
            <Button asChild className="bg-white text-black hover:bg-blue-50">
              <Link href="/contact">Contact Admissions Office</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="fees" className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text">Fee Structure</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Transparent fee structure for all our programs. The fees mentioned below are per academic year.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-4 text-left">Program</th>
                  <th className="p-4 text-left">Tuition Fee (₹)</th>
                  <th className="p-4 text-left">Development Fee (₹)</th>
                  <th className="p-4 text-left">Other Charges (₹)</th>
                  <th className="p-4 text-left">Total (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="bg-white dark:bg-gray-800">
                  <td className="p-4">B.Arch</td>
                  <td className="p-4">1,50,000</td>
                  <td className="p-4">25,000</td>
                  <td className="p-4">15,000</td>
                  <td className="p-4 font-bold">1,90,000</td>
                </tr>
                <tr className="bg-muted">
                  <td className="p-4">B.A./B.Com/B.Sc</td>
                  <td className="p-4">60,000</td>
                  <td className="p-4">15,000</td>
                  <td className="p-4">10,000</td>
                  <td className="p-4 font-bold">85,000</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="p-4">B.Tech</td>
                  <td className="p-4">1,80,000</td>
                  <td className="p-4">30,000</td>
                  <td className="p-4">20,000</td>
                  <td className="p-4 font-bold">2,30,000</td>
                </tr>
                <tr className="bg-muted">
                  <td className="p-4">M.Arch</td>
                  <td className="p-4">1,70,000</td>
                  <td className="p-4">25,000</td>
                  <td className="p-4">15,000</td>
                  <td className="p-4 font-bold">2,10,000</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="p-4">M.A./M.Com/M.Sc</td>
                  <td className="p-4">70,000</td>
                  <td className="p-4">15,000</td>
                  <td className="p-4">10,000</td>
                  <td className="p-4 font-bold">95,000</td>
                </tr>
                <tr className="bg-muted">
                  <td className="p-4">M.Tech</td>
                  <td className="p-4">1,90,000</td>
                  <td className="p-4">30,000</td>
                  <td className="p-4">20,000</td>
                  <td className="p-4 font-bold">2,40,000</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="p-4">MBA</td>
                  <td className="p-4">2,50,000</td>
                  <td className="p-4">35,000</td>
                  <td className="p-4">25,000</td>
                  <td className="p-4 font-bold">3,10,000</td>
                </tr>
                <tr className="bg-muted">
                  <td className="p-4">Ph.D.</td>
                  <td className="p-4">1,00,000</td>
                  <td className="p-4">20,000</td>
                  <td className="p-4">15,000</td>
                  <td className="p-4 font-bold">1,35,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Additional Information</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>
                  Hostel fees are separate and range from ₹80,000 to ₹1,20,000 per year depending on the type of
                  accommodation.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>One-time admission fee of ₹25,000 is applicable for all programs.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>Caution deposit (refundable) of ₹10,000 is required at the time of admission.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>Fees can be paid in two installments per academic year.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>Various payment methods including credit/debit cards, net banking, and UPI are accepted.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="scholarships" className="py-16 gradient-color-1-3 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Scholarships & Financial Aid</h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              We believe that financial constraints should not be a barrier to quality education. Explore our
              scholarship programs designed to support deserving students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="card-hover rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 text-white">{scholarship.icon}</div>
                    <h3 className="text-xl font-bold text-white">{scholarship.name}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-blue-200 flex-shrink-0" />
                      <p className="text-blue-100">
                        <span className="font-semibold">Eligibility:</span> {scholarship.eligibility}
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CreditCard className="h-5 w-5 mr-2 mt-0.5 text-blue-200 flex-shrink-0" />
                      <p className="text-blue-100">
                        <span className="font-semibold">Amount:</span> {scholarship.amount}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-blue-100 mb-4">
              In addition to the above scholarships, we also facilitate various government scholarships and education
              loans through our partner banks.
            </p>
            <Button asChild className="bg-white text-black hover:bg-blue-50">
              <Link href="/scholarships">Learn More About Scholarships</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="application" className="py-16 section-alternate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text">Important Dates</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Mark your calendar with these key dates for the admission process for the academic year 2024-25.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                event: "Application Portal Opens",
                date: "January 15, 2024",
                icon: <Calendar className="h-8 w-8" />,
              },
              {
                event: "Last Date for Application Submission",
                date: "April 30, 2024",
                icon: <Calendar className="h-8 w-8" />,
              },
              {
                event: "Entrance Examination",
                date: "May 15-20, 2024",
                icon: <FileText className="h-8 w-8" />,
              },
              {
                event: "Interview/Counseling Sessions",
                date: "June 1-15, 2024",
                icon: <Users className="h-8 w-8" />,
              },
              {
                event: "First Merit List Announcement",
                date: "June 25, 2024",
                icon: <Award className="h-8 w-8" />,
              },
              {
                event: "Commencement of Classes",
                date: "August 1, 2024",
                icon: <GraduationCap className="h-8 w-8" />,
              },
            ].map((item, index) => (
              <div key={index} className="card-hover rounded-xl overflow-hidden">
                <div className="gradient-color-1 p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 text-white">{item.icon}</div>
                    <h3 className="text-xl font-bold text-white">{item.event}</h3>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="https://admissions.pillai.edu" target="_blank">
                Apply Online Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16" >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text mb-6">Need Help?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our admissions team is here to guide you through every step of the application process. Feel free to reach
              out with any questions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg border">
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-primary">admissions@pillai.edu</p>
              </div>
              <div className="p-4 rounded-lg border">
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-primary">+91 22 2745 6100</p>
              </div>
              <div className="p-4 rounded-lg border">
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-primary">Admissions Office, New Panvel Campus</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

