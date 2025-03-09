"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useTheme } from "@/components/theme-provider"; // Import useTheme

const ProgramPage = () => {
  const { theme } = useTheme(); // Get the current theme

  // Function to determine background color based on theme
  const getBackgroundColor = () => {
    switch (theme) {
      case "dark":
        return "#333";
      case "light":
        return "#f9f9f9";
      default: // system
        return "var(--background)"; // Or another default based on your CSS variables
    }
  };

  // Function to determine text color based on theme
  const getTextColor = () => {
    switch (theme) {
      case "dark":
        return "#f9f9f9";
      case "light":
        return "#333";
      default: // system
        return "var(--foreground)"; // Or another default based on your CSS variables
    }
  };

  // Apply dark/light mode styles to the component
  const getStyles = () => ({
    padding: "20px",
    backgroundColor: "#4D6AFF",  // Static background color
    color: getTextColor(),
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "flex-start" as const,
    width: "100%",
  });

  const containerStyles = {
    display: "flex" as const,
    justifyContent: "space-between" as const,
    flex: "1" as const, // Take up remaining space
    flexShrink: 0, // Prevent shrinking
    alignItems: 'flex-start' as const, // Add this line
    maxWidth: '1200px', // Add maxWidth to the container
    margin: '0 auto', // Center the container
  };

  const mainContentStyles = {
    display: "flex" as const,
    flexDirection: "column" as const,
    alignItems: "flex-start" as const,
    padding: "20px",
    flex: "1" as const, // Take up the remaining space
  };

  const sectionStyles = {
    marginBottom: "20px",
  };

  const titleStyles = {
    fontSize: "2em",
    marginBottom: "10px",
    color: "#0070f3",
  };

  const descriptionStyles = {
    fontSize: "1.2em",
    lineHeight: "1.6",
  };

  const intakeStyles = {
    fontSize: "1.1em",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const careerStyles = {
    fontSize: "1.1em",
    lineHeight: "1.5",
  };

  const moreInfoStyles = {
    marginTop: "30px",
    textAlign: "center" as const,
  };

  const linkStyles = {
    color: "#0070f3",
    textDecoration: "none",
    fontWeight: "bold",
  };

  const keyInfoStyles = {
    marginTop:"70px",
    marginLeft: "100px",
    top: "20px",
    width: "350px", // Increased width
    padding: "25px", // Increased padding
    backgroundColor:  "#f0f0f0",
    color:  "#444",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    // Added this line
    height: 'fit-content',
  };

  const keyInfoTitleStyles = {
    fontSize: "1.4em", // Slightly larger title
    fontWeight: "bold",
    marginBottom: "12px", // Slightly larger margin
  };

  const keyInfoItemStyles = {
    fontSize: "1.1em", // Slightly larger item font
    marginBottom: "12px", // Slightly larger margin
  };

  const programOverviewAndCareerOppHeaderStyles = {
    fontSize: "1.5em",
    marginBottom: "10px",
    fontWeight: "900", // Make it bolder
  };

  return (
    <div style={getStyles()}>
      <Head>
        <title>Computer Engineering</title>
      </Head>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "2.5em",
            fontWeight: "bold",
            marginBottom: "10px",
            color:"#2596be",
          }}
        >
         Post Basic B.Sc. Nursing
        </h2>
        <p
          style={{
            fontSize: "1.2em",
            color: theme === "dark" ? "#ccc" : "#555",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          
        </p>
      </div>

      <div style={containerStyles}>
        <div style={mainContentStyles}>
          <section style={sectionStyles}>
            <h2 style={programOverviewAndCareerOppHeaderStyles}>Program Overview</h2>
            <p style={descriptionStyles}>
            The four-year BTech program in Computer Engineering provides the Pillai College alumni with the skills and knowledge of excelling in the world of corporations. It establishes a strong foundation in basic engineering fundamentals, which supports graduates in solving real-life problems, contributing to new research and innovation, as well as pursuing entrepreneurial visions.The program fosters cross-disciplinary thinking: it allows students to innovate to solve complex challenges across diversified technology domains.They also provide them with social responsibility along with good ethical practices in preparation to make a beneficial impact upon the society.They gain hands-on experience in designing and developing hardware and software systems, with specialized training in: Artificial Intelligence (AI) and Machine Learning (ML), Big Data and Information Security, Software Development and Cloud Computing, Data Science and Cybersecurity. Courses improve students’ communication and life skills, then lay the groundwork for personal finance. Additional instruction is provided in documentation, technical writing, and intellectual property management. All of these, in addition to other essential skills, are ready to take on the global market procedures.

            </p>
          </section>

          <section style={sectionStyles}>
            <h2 style={programOverviewAndCareerOppHeaderStyles}>Career Opportunities</h2>
            <p style={careerStyles}>
            Software Engineer :Design, develop, and maintain software applications and systems. Embedded Systems Engineer: Develop and implement embedded software for hardware systems. Hardware Engineer: Design and develop computer hardware and electronic components. Data Scientist/Analyst: Analyze complex data sets to drive business decisions. Network Engineer: Design and implement computer networks and communication systems. AI/ML Engineer: Develop artificial intelligence and machine learning solutions. IoT Engineer: Design and develop Internet of Things devices and systems. Systems Engineer: Manage and optimize complex computer systems and infrastructure. Cybersecurity Analyst: Protect systems and networks from security threats. Electronics Design Engineer: Design and develop electronic circuits and systems.  Web Developer: Build and maintain websites and web applications. Mobile App Developer: Design and develop mobile applications for various platforms. Cloud Engineer: Develop and manage cloud infrastructure and solutions. DevOps Engineer: Automate and streamline development and operations processes. Augmented Reality (AR) Developer: Create interactive AR applications and experiences. Virtual Reality (VR) Developer: Design immersive virtual reality environments and applications. Database Administrator: Manage and maintain database systems and ensure data integrity. System Analyst: Analyze system requirements and recommend efficient solutions. IT Consultant: Provide expert advice on IT strategies and implementations. Game Developer: Design and develop interactive video games for various platforms.  Robotics Engineer: Develop robotic systems and applications for automation. Tech Entrepreneur: Innovate and launch technology-driven startups and businesses.
            </p>
          </section>

          <div style={moreInfoStyles}>
          <p style={{ fontSize: "1em" }}>
     For more detailed information, visit the official website:
   </p>
   <a
     href="https://www.pce.ac.in/bachelors/computer-engineering/"
     target="_blank"
     rel="noopener noreferrer" // Important for security
     style={linkStyles}
   >
     PCE Website
   </a>
          
          
          </div>
        </div>

        <div style={keyInfoStyles}>
          <h3 style={keyInfoTitleStyles}>Key Information</h3>
          <p style={keyInfoItemStyles}>
            <strong>Duration:</strong> 2 Years
          </p>
          <p style={keyInfoItemStyles}>
            <strong>Eligibility:</strong>The Candidate must have completed their 12th-grade education with Physics, Chemistry, and Mathematics as core subjects. A minimum percentage in these subjects is required, as specified by the admission authority. Entrance Exams: The candidate must have a valid score in either MHT-CET (Maharashtra Common Entrance Test) or JEE (Joint Entrance Examination). These exams determine merit-based admissions into the engineering program.
          </p>
          <p style={keyInfoItemStyles}>
            <strong>Intake:</strong> 30 Seats
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramPage;
