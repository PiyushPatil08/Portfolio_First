"use client"

import React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send, Loader2 } from "lucide-react"
import { motion, useInView } from "framer-motion"

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@PiyushPatil08",
    href: "https://github.com/PiyushPatil08",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Piyush Patil",
    href: "https://www.linkedin.com/in/piyush-patil-haveachat/",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "piyushupatil08@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=piyushupatil08@gmail.com",
  },
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setFormState({ name: "", email: "", message: "" })
    setIsSubmitting(false)
    alert("Message sent successfully!")
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {"Let's Work Together"}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {"I'm"} currently open to new opportunities and collaborations. Whether
            you have a project in mind or just want to say hi, feel free to
            reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Animated gradient border */}
            <motion.div 
              className="absolute -inset-[1px] bg-gradient-to-r from-primary via-primary/30 to-primary rounded-2xl opacity-50"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              style={{ backgroundSize: "200% 200%" }}
            />
            
            <form 
              onSubmit={handleSubmit} 
              className="relative bg-card/60 backdrop-blur-xl rounded-2xl p-6 space-y-6 border border-border/50"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <div className="relative">
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="bg-card/50 border-border focus:border-primary transition-all duration-300"
                  />
                  <motion.div 
                    className="absolute inset-0 -z-10 bg-primary/20 rounded-md blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: focusedField === "name" ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="bg-card/50 border-border focus:border-primary transition-all duration-300"
                  />
                  <motion.div 
                    className="absolute inset-0 -z-10 bg-primary/20 rounded-md blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: focusedField === "email" ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <div className="relative">
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="bg-card/50 border-border focus:border-primary resize-none transition-all duration-300"
                  />
                  <motion.div 
                    className="absolute inset-0 -z-10 bg-primary/20 rounded-md blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: focusedField === "message" ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 relative overflow-hidden bg-gradient-to-r from-primary to-primary/80"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </span>
                  {/* Shine effect */}
                  {!isSubmitting && (
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Connect With Me
            </h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group relative block"
                >
                  {/* Glow on hover */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/50 to-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />
                  
                  <div className="relative flex items-center gap-4 p-4 bg-card/60 backdrop-blur-sm border border-border rounded-xl
                    group-hover:border-transparent group-hover:bg-card/80 transition-all duration-500"
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center border border-primary/20"
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <social.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {social.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {social.handle}
                      </p>
                    </div>
                    
                    {/* Arrow indicator */}
                    <motion.div 
                      className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <span className="text-primary">→</span>
                    </motion.div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
