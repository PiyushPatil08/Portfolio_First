"use client"

import { useRef } from "react"
import { Briefcase, GraduationCap, Award, ExternalLink } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { link } from "fs/promises"

const experiences = [
  {
    title: "IT Intern",
    organization: "Johnson Controls",
    duration: "Jan 2026 - Present",
    description:
      "Developing System for various use cases and Collaborating with cross-functional teams.",
  },
  {
    title: "SDE Intern",
    organization: "BLUESTOCK.in | FinTech",
    duration: "Feb 2025 - April 2025",
    description:
      "Built a high-performance React SPA integrating TradingView charts to visualize 1,000+ live stock data points. Designed and deployed RESTful APIs using Node.js and Express Improved frontend and backend performance, reducing data fetch latency by 25%.",
  },
  {
    title: "Full Stack Developer",
    organization: "Technohacks",
    duration: "Dec 2024 - Jan 2025",
    description:
      "Developed and maintained dynamic web application project using MERN stack and RESTful APIs with AI integration.Learned best practices in code review and testing.",
  },
];

const education = [
  {
    title: "Bachelor of Engineering in Information Technology",
    organization: "D.Y. Patil College of Engineering, Akurdi, Pune",
    duration: "2023 – 2026",
    grade: "CGPA: 9.46",
    description:
      "Focused on software development, data structures, algorithms, and modern web technologies. Actively involved in technical clubs and peer learning.",
  },
  {
    title: "Diploma in Computer Technology",
    organization: "Government Polytechnic, Nashik",
    duration: "2020 – 2023",
    grade: "Percentage: 91%",
    description:
      "Strong foundation in programming, databases, operating systems, and computer networks with hands-on project experience.",
  },
  {
    title: "Secondary (X)",
    organization: "Late P. K. Shinde, Pachora",
    duration: "2020",
    grade: "Percentage: 96.2%",
    description:
      "Foundation in Mathematics and Science. Active participant in science olympiads.",
  },
];

const certifications = [
  {

    title: "Python Full Stack Virtual Internship",
    issuer: "EduSkills Academy",
    link: "https://drive.google.com/file/d/1nSHIpFMl7XNxnpn3xJaBVLllLQr5xGxv/view?usp=sharing",
  },
  {
    title: "Certified Software Engineer",
    issuer: "HackerRank",
    link: "https://drive.google.com/file/d/1lTtO3_pO6K9HALr37ydcYMp6kgdwCfsN/view?usp=sharing",
  }, {
    title: "Data Science and ML Virtual Internship",
    issuer: "YBI Foundation",
    link: "https://drive.google.com/file/d/1EB-Ni7xy4YYTxdTjB-ZegQZPXxYC7Hy1/view?usp=sharing",
  },
  {
    title: "DSA-CP Lead 2024-25",
    issuer: "GDSC",
    link: "https://drive.google.com/file/d/1uAPsxHG7SFWC91ZKeu_iHaGTDMLsLL7X/view?usp=sharing",
  },


];


export function TimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 px-6 bg-card/30"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">My Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Experience & Education
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center border border-primary/20"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <Briefcase className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground">
                Experience
              </h3>
            </motion.div>

            <div className="relative">
              {/* Animated Timeline Line */}
              <motion.div
                className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"
                initial={{ scaleY: 0, originY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
              />

              <div className="space-y-8">
                {experiences.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.15,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="relative pl-12 group"
                  >
                    {/* Timeline Dot with pulse */}
                    <motion.div
                      className="absolute left-2 top-1.5 w-4 h-4 rounded-full border-2 border-background flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.15, type: "spring" }}
                    >
                      <span className="w-full h-full bg-primary rounded-full" />
                      <motion.span
                        className="absolute inset-0 bg-primary rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                      />
                    </motion.div>

                    {/* Card */}
                    <motion.div
                      className="relative"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Glow effect */}
                      <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/50 via-primary/20 to-primary/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />

                      <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-xl p-5
                        group-hover:border-transparent group-hover:shadow-xl group-hover:shadow-primary/10 transition-all duration-500"
                      >
                        <motion.span
                          className="inline-block px-3 py-1 text-primary font-mono text-xs bg-primary/10 rounded-full mb-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          {item.duration}
                        </motion.span>
                        <h4 className="text-foreground font-semibold mt-1 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {item.organization}
                        </p>
                        <p className="text-muted-foreground text-sm mt-2">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center border border-primary/20"
                whileHover={{ rotate: -5, scale: 1.05 }}
              >
                <GraduationCap className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground">
                Education
              </h3>
            </motion.div>

            <div className="relative">
              {/* Animated Timeline Line */}
              <motion.div
                className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"
                initial={{ scaleY: 0, originY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
              />

              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.15,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="relative pl-12 group"
                  >
                    {/* Timeline Dot with pulse */}
                    <motion.div
                      className="absolute left-2 top-1.5 w-4 h-4 rounded-full border-2 border-background flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.15, type: "spring" }}
                    >
                      <span className="w-full h-full bg-primary rounded-full" />
                      <motion.span
                        className="absolute inset-0 bg-primary rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                      />
                    </motion.div>

                    {/* Card */}
                    <motion.div
                      className="relative"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Glow effect */}
                      <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/50 via-primary/20 to-primary/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />

                      <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-xl p-5
                        group-hover:border-transparent group-hover:shadow-xl group-hover:shadow-primary/10 transition-all duration-500"
                      >
                        {/* Year and Grade badges in a row */}
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <motion.span
                            className="inline-block px-3 py-1 text-primary font-mono text-xs bg-primary/10 rounded-full"
                            whileHover={{ scale: 1.05 }}
                          >
                            {item.duration}
                          </motion.span>
                          <motion.span
                            className="inline-block px-3 py-1 text-primary font-mono text-xs bg-primary/10 border border-primary/30 rounded-full"
                            whileHover={{ scale: 1.05 }}
                          >
                            {item.grade}
                          </motion.span>
                        </div>
                        <h4 className="text-foreground font-semibold mt-1 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {item.organization}
                        </p>
                        <p className="text-muted-foreground text-sm mt-2">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications - Inline Horizontal Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-primary/20"
              whileHover={{ rotate: 5, scale: 1.05 }}
            >
              <Award className="w-5 h-5 text-primary" />
            </motion.div>
            <h3 className="text-lg font-semibold text-foreground">
              Certifications
            </h3>
          </div>

          {/* Fixed 4-column grid - no scroll */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -3 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]" />

                <div className="relative flex items-start gap-3 p-4 bg-card/80 backdrop-blur-sm border border-border rounded-xl h-full
                  group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {cert.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
