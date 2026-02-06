"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"

const filters = ["All", "Web", "Data"]

const projects = [
  {
    title: "SensAI",
    description:
      "AI Career Coach is a full-stack, AI-powered career advancement platform designed to help users create resumes and cover letters, practice interviews, and plan career paths with personalized guidance.",
    image: "/sensai.png",
    tags: ["Next.js", "React", "Nextauth.js", "MongoDB", "Gemini AI", "Tailwind CSS"],
    category: "Web",
    github: "https://github.com/PiyushPatil08/SensAI",
    demo: "https://demo.com",
  },


  {
    title: "FindMyNotes",
    description:
      "FindMyNotes is a full-stack notes-sharing platform that lets students upload, discover, and interact with academic content and other users in real time, with secure sharing, powerful search, and collaborative features.",
    image: "/notes.png",
    tags: ["React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Tailwind CSS",
      "Cloudinary"],
    category: "Web",
    github: "https://github.com/PiyushPatil08/FindMyNotes",
    demo: "https://demo.com",
  },


  {
    title: "Splitr",
    description:
      "Splitr is a collaborative expense-splitting platform that helps groups manage shared expenses, track balances, and settle payments efficiently with smart settlements and real-time updates.",
    image: "/Splitr.png",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Prisma",
      "MongoDB",
      "NextAuth.js",
      "Clerk",
      "bcrypt",
      "Vercel"
    ],

    category: "Web",
    github: "https://github.com/PiyushPatil08/Splitr",
    demo: "https://spitr.vercel.app/",
  },
  {
    title: "CodeSync",
    description:
      "CodeSync is a real-time collaborative code editor where developers can code together in shared rooms with instant sync, multi-file support, live presence, chat, and AI-assisted coding.",
    image: "/codesync.png",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Socket.io",
      "Docker",
      "Vercel"
    ],
    category: "Web",
    github: "https://github.com/PiyushPatil08/CodeSync",
    demo: "https://codesync-six.vercel.app/",
  },
  {
    title: " Mobile Sales Analysis and Dashboard",
    description:
      "This project is an interactive Mobile Sales Dashboard created using Power BI Desktop. It analyzes and visualizes mobile sales data across different cities, brands, models, months, and payment methods. The dashboard provides deep insights to help businesses and stakeholders make data-driven decisions.",
    image: "/mobile.png",
    tags: ["Python", "Power BI Desktop", "SQL", "DAX"],
    category: "Data",
    github: "https://github.com/PiyushPatil08/Mobile-Sales-Analysis-and-Dashboard",
    demo: "https://github.com/PiyushPatil08/Mobile-Sales-Analysis-and-Dashboard",
  },
  {
    title: "AI Summarizer",
    description:
      "AI Summarizer is a Chrome extension that uses the Gemini API to intelligently summarize web page content. It helps users quickly understand long articles by generating detailed summaries, bullet-point highlights, or brief overviews directly inside the browser.",
    image: "/project_placeholder.png",
    tags: [
      "JavaScript",
      "Chrome Extension",
      "Gemini API",
      "HTML",
      "CSS"
    ],
    category: "Web",
    github: "https://github.com/PiyushPatil08/AI-Summarizer-Chrome-Extension",
    demo: "https://github.com/PiyushPatil08/AI-Summarizer-Chrome-Extension",
  },
]

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {filters.map((filter) => (
            <motion.button
              type="button"
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${activeFilter === filter
                ? "text-primary-foreground"
                : "bg-secondary/50 text-secondary-foreground hover:bg-secondary/80"
                }`}
            >
              {activeFilter === filter && (
                <motion.span
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{filter}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  layout: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Animated gradient border */}
                <motion.div
                  className="absolute -inset-[1px] bg-gradient-to-r from-primary via-primary/30 to-primary rounded-xl opacity-0 group-hover:opacity-100 blur-[1px]"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  style={{ backgroundSize: "200% 200%" }}
                />

                <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-xl overflow-hidden
                  group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-primary/10
                  group-hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Project Image */}
                  <div className="relative w-full h-48 bg-secondary overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        priority={index < 3}
                      />
                    ) : null}
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />

                  {/* Overlay with buttons - visible on card hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-48 bg-background/90 backdrop-blur-sm flex items-center justify-center gap-4
                      opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"
                    >
                      <Button asChild size="sm" variant="outline" className="gap-2 bg-transparent backdrop-blur-sm">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
                    >
                      <Button asChild size="sm" className="gap-2 bg-gradient-to-r from-primary to-primary/80">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </Button>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono
                            group-hover:bg-primary/20 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
