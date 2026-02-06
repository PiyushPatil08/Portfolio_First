"use client"

import { motion } from "framer-motion"

const impactItems = [
    { highlight: "AI-powered", text: "Delivered  products using LLMs" },

  { highlight: "25%", text: "Reduced API latency in real-time systems" },
  { highlight: "800+", text: " Solved DSA problems" },
  { highlight: "Production", text: "Internship Experience" },
  { highlight: "Web + ML + Data", text: "Expertise" },
]


export function ImpactSection() {
  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* Subtle gradient background strip */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 5,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-primary font-mono text-sm mb-2">My Results</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Impact</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4 md:gap-x-4"
        >
          {impactItems.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="flex items-center gap-3 md:gap-4"
            >
              {/* Impact item */}
              <motion.div
                className="group relative cursor-default"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-2 bg-primary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative flex items-baseline gap-1.5 md:gap-2">
                  {/* Highlighted number/word */}
                  <span className="text-xl md:text-2xl lg:text-3xl font-bold text-primary group-hover:text-primary/90 transition-colors duration-300">
                    {item.highlight}
                  </span>
                  {/* Regular text */}
                  <span className="text-base md:text-lg lg:text-xl font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                    {item.text}
                  </span>
                </div>

                {/* Underline animation on hover */}
                <motion.div 
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary/80 to-primary/40 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.div>

              {/* Divider dot (not after last item) */}
              {index < impactItems.length - 1 && (
                <span className="text-muted-foreground/40 text-lg md:text-xl font-light select-none hidden sm:inline">
                  •
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Subtle gradient underline */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-8 mx-auto max-w-2xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        />
      </div>
    </section>
  )
}
