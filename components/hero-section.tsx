"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, FileText, Github, Linkedin, Mail, Code2 } from "lucide-react"
import { motion } from "framer-motion"

const roles = [
  "Software Development Engineer",
  "React Developer",
  "Backend Engineer",
  "Full Stack Developer",
  "AI & Machine Learning Engineer",
  "Software Developer",
  "Data Analyst",
  "Machine Learning Enthusiast",
]

const socialLinks = [
  { icon: Github, href: "https://github.com/PiyushPatil08", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/piyush-patil-haveachat/", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/u/Piyush_Patil2004/", label: "LeetCode" },
  { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=piyushupatil08@gmail.com", label: "Email" },
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Animated gradient background blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-primary/15 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Available for Opportunities Pill */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full mb-2"
          >
            <motion.span
              className="w-2 h-2 bg-emerald-400 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <span className="text-sm font-medium text-primary">Available for Opportunities</span>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-primary font-mono text-base"
          >
            Hi, My Name is
          </motion.p>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold relative group cursor-default"
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent 
              group-hover:from-primary group-hover:via-foreground group-hover:to-primary transition-all duration-500">
              Piyush Patil
            </span>
            <motion.span 
              className="absolute -inset-4 bg-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
              animate={{ scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.h1>

          <motion.div variants={itemVariants} className="h-8 md:h-10">
            <p className="text-xl md:text-2xl text-muted-foreground">
              {displayText}
              <motion.span 
                className="text-primary inline-block ml-0.5"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
              >
                |
              </motion.span>
            </p>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-muted-foreground leading-relaxed max-w-lg"
          >
            I build scalable, high-impact digital products at the intersection of design and engineering.
Currently focused on accessible, user-centric solutions using modern web technologies and AI -ML.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button 
                asChild 
                size="lg" 
                className="relative gap-2 overflow-hidden group bg-gradient-to-r from-primary to-primary/80"
              >
                <a href="#projects">
                  <span className="relative z-10 flex items-center gap-2">
                    <ArrowDown size={18} />
                    View Projects
                  </span>
                  {/* Shine effect */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Glow */}
                  <span className="absolute inset-0 bg-primary/50 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button 
                asChild 
                size="lg" 
                className="relative gap-2 overflow-hidden group bg-gradient-to-r from-primary to-primary/80"
              >
                <a href="https://drive.google.com/file/d/1ibvckU0tFwh7T7bUUPZ4Z4mEeXaFFxIE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center gap-2">
                    <FileText size={18} />
                    View Resume
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="absolute inset-0 bg-primary/50 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 pt-2">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={social.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-11 h-11 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center
                  hover:border-primary transition-all duration-300 overflow-hidden"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 relative z-10" />
                {/* Glow effect */}
                <motion.span 
                  className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="absolute -inset-2 bg-primary/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Abstract Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-80 h-80">
            {/* Animated geometric shapes */}
            <motion.div 
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 border-2 border-primary/30 rounded-full" />
            </motion.div>
            <motion.div 
              className="absolute inset-4"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-24 border-2 border-primary/50 rotate-45" />
            </motion.div>
            
            {/* Center element with glassmorphism */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="w-40 h-40 bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm rounded-full 
                  flex items-center justify-center border border-primary/30 shadow-2xl shadow-primary/20"
                animate={{ 
                  boxShadow: [
                    "0 0 40px rgba(var(--primary), 0.2)",
                    "0 0 60px rgba(var(--primary), 0.3)",
                    "0 0 40px rgba(var(--primary), 0.2)"
                  ]
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <motion.code 
                  className="text-primary font-mono text-lg"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {"</>"}
                </motion.code>
              </motion.div>
            </div>

            {/* Floating dots */}
            {[
              { top: "10%", right: "10%", size: 12, delay: 0 },
              { bottom: "25%", left: "10%", size: 8, delay: 0.5 },
              { top: "50%", right: "0%", size: 16, delay: 1 },
            ].map((dot, i) => (
              <motion.div
                key={i}
                className="absolute bg-primary rounded-full"
                style={{
                  top: dot.top,
                  right: dot.right,
                  bottom: dot.bottom,
                  left: dot.left,
                  width: dot.size,
                  height: dot.size,
                  opacity: 1 - i * 0.2,
                }}
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  delay: dot.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
