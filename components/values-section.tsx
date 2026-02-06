"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const nodes = [
  { title: "Clean Code", description: "Readable, maintainable, modular systems" },
  { title: "Performance Awareness", description: "Efficient APIs and optimized data flow" },
  { title: "Problem Solving", description: "Logical breakdowns and informed trade-offs" },
  { title: "Iterative Improvement", description: "Ship early, refine continuously" },
  { title: "Collaboration", description: "Clear communication and teamwork" },
]

export function ValuesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Engineering Values
          </h2>
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-primary font-mono text-sm mb-2">My Values</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Engineering Values</h2>
        </motion.div>

        {/* Horizontal timeline - Desktop */}
        <div className="hidden md:block relative">
          {/* Central horizontal line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 origin-left bg-gradient-to-r from-primary/30 via-primary to-primary/30"
            style={{ boxShadow: "0 0 20px rgba(45, 212, 191, 0.4)" }}
          />

          <div className="relative flex justify-between items-center min-h-[400px]">
            {nodes.map((node, index) => {
              const isAbove = index % 2 === 0
              return (
                <div key={node.title} className="relative flex flex-col items-center" style={{ width: `${100 / nodes.length}%` }}>
                  {/* Card positioned above or below the line */}
                  <motion.div
                    initial={{ opacity: 0, y: isAbove ? 40 : -40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                    className={`absolute ${isAbove ? "bottom-[calc(50%+40px)]" : "top-[calc(50%+40px)]"} w-full px-2`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: isAbove ? -4 : 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="group relative p-5 rounded-xl backdrop-blur-md border border-border/50 
                        bg-card/40 hover:bg-card/60 hover:border-primary/50 
                        transition-all duration-300"
                      style={{
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      {/* Glow effect on hover */}
                      <div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                        style={{
                          boxShadow: "0 0 40px rgba(45, 212, 191, 0.2)",
                        }}
                      />
                      
                      <h3 className="text-base font-semibold text-primary mb-2 text-center">
                        {node.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed text-center">
                        {node.description}
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Vertical connector */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
                    className={`absolute left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b ${
                      isAbove 
                        ? "bottom-1/2 origin-bottom from-transparent to-primary/60" 
                        : "top-1/2 origin-top from-primary/60 to-transparent"
                    }`}
                  />

                  {/* Connection point on timeline */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.15 }}
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary z-10"
                    style={{ boxShadow: "0 0 15px rgba(45, 212, 191, 0.6)" }}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile layout - horizontal scroll */}
        <div className="md:hidden relative">
          <div className="overflow-x-auto pb-4 -mx-6 px-6">
            <div className="relative min-w-[800px]">
              {/* Central horizontal line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 origin-left bg-gradient-to-r from-primary/30 via-primary to-primary/30"
                style={{ boxShadow: "0 0 15px rgba(45, 212, 191, 0.3)" }}
              />

              <div className="relative flex justify-between items-center min-h-[320px] px-8">
                {nodes.map((node, index) => {
                  const isAbove = index % 2 === 0
                  return (
                    <div key={node.title} className="relative flex flex-col items-center w-[140px]">
                      {/* Card positioned above or below */}
                      <motion.div
                        initial={{ opacity: 0, y: isAbove ? 30 : -30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className={`absolute ${isAbove ? "bottom-[calc(50%+30px)]" : "top-[calc(50%+30px)]"} w-full`}
                      >
                        <div className="p-4 rounded-xl backdrop-blur-md border border-border/50 bg-card/40">
                          <h3 className="text-sm font-semibold text-primary mb-1 text-center">
                            {node.title}
                          </h3>
                          <p className="text-xs text-muted-foreground leading-relaxed text-center">
                            {node.description}
                          </p>
                        </div>
                      </motion.div>

                      {/* Vertical connector */}
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        className={`absolute left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b ${
                          isAbove 
                            ? "bottom-1/2 origin-bottom from-transparent to-primary/60" 
                            : "top-1/2 origin-top from-primary/60 to-transparent"
                        }`}
                      />

                      {/* Connection point */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary z-10"
                        style={{ boxShadow: "0 0 10px rgba(45, 212, 191, 0.5)" }}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          
          {/* Scroll hint */}
          <p className="text-xs text-muted-foreground text-center mt-2">Swipe to explore</p>
        </div>
      </div>
    </section>
  )
}
