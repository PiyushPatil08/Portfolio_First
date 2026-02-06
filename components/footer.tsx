"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

const socialLinks = [
  { icon: Github, href: "https://github.com/PiyushPatil08", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/piyush-patil-haveachat/", label: "LinkedIn" },
  { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=piyushupatil08@gmail.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border/50 bg-card/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground text-sm"
        >
          © {new Date().getFullYear()} Piyush Patil. Built with Next.js & Tailwind CSS.
        </motion.p>
        <div className="flex items-center gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -3, scale: 1.1 }}
              className="relative group p-2"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              {/* Glow effect */}
              <span className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
