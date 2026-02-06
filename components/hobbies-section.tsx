"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Crown, Music, Film, Target } from "lucide-react"

const hobbies = [
  {
    name: "Chess",
    icon: Crown,
    hint: "Strategic thinker",
  },
  {
    name: "Cricket",
    icon: Target,
    hint: "Team player",
  },
  {
    name: "Movies",
    icon: Film,
    hint: "Story enthusiast",
  },
  {
    name: "Music",
    icon: Music,
    hint: "Creative soul",
  },
]


export function HobbiesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">Off the Clock</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Beyond Code
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {hobbies.map((hobby, index) => {
            const IconComponent = hobby.icon
            return (
              <motion.div
                key={hobby.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 150,
                }}
                whileHover={{ scale: 1.08, y: -8 }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-2 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative flex flex-col items-center p-6 md:p-8 rounded-2xl 
                  bg-card/60 backdrop-blur-md border border-border/50
                  group-hover:border-primary/50 group-hover:bg-card/80
                  transition-all duration-500 min-w-[140px] md:min-w-[160px]"
                  style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)" }}
                >
                  {/* Icon container */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 
                      flex items-center justify-center mb-4
                      group-hover:from-primary/30 group-hover:to-primary/10
                      transition-all duration-300"
                  >
                    <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                  
                  {/* Name */}
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {hobby.name}
                  </h3>
                  
                  {/* Hint */}
                  <p className="text-xs text-muted-foreground/70 group-hover:text-muted-foreground transition-colors duration-300">
                    {hobby.hint}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
