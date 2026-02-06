"use client"

import { useRef } from "react"
import { Code2, Database, Brain } from "lucide-react"
import { motion, useInView } from "framer-motion"

const roles = [
  {
    title: "Software Development Intern",
    description: "Building scalable applications with modern frameworks",
    icon: Code2,
  },
  {
    title: "Full Stack Developer",
    description: "Creating end-to-end solutions from database to UI",
    icon: Database,
  },
  {
    title: "Machine Learning Enthusiast",
    description: "Exploring AI/ML to solve real-world problems",
    icon: Brain,
  },
]

export function RolesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-mono text-primary mb-8 text-center"
        >
          What I Do
        </motion.h2>
        <div className="space-y-6">
          {roles.map((role, index) => {
            const Icon = role.icon
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ x: 10 }}
                className="group relative"
              >
                {/* Animated gradient border */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/50 via-primary/20 to-primary/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />
                
                <div className="relative flex items-center gap-6 p-6 bg-card/80 backdrop-blur-sm border border-border rounded-xl
                  group-hover:border-transparent group-hover:bg-card transition-all duration-500
                  group-hover:shadow-xl group-hover:shadow-primary/10"
                >
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/20"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      <span className="bg-gradient-to-r from-foreground to-foreground group-hover:from-primary group-hover:to-foreground bg-clip-text text-transparent transition-all duration-500">
                        {role.title}
                      </span>
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1 group-hover:text-muted-foreground/80 transition-colors">
                      {role.description}
                    </p>
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
