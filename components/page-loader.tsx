"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"


export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate minimum loading time for smooth experience
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
        >
          {/* Code-inspired loading animation */}
          <div className="relative flex flex-col items-center gap-8">
            {/* Terminal-style code block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative bg-card/50 border border-border rounded-xl p-6 backdrop-blur-sm"
            >
              {/* Terminal dots */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              
              {/* Code lines with typing animation */}
              <div className="font-mono text-sm space-y-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-muted-foreground">const</span>
                  <span className="text-primary">portfolio</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-foreground">{"{"}</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-2 pl-4"
                >
                  <span className="text-muted-foreground">loading:</span>
                  <motion.span
                    className="text-primary"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                  >
                    true
                  </motion.span>
                  <span className="text-muted-foreground">,</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-2 pl-4"
                >
                  <span className="text-muted-foreground">status:</span>
                  <span className="text-accent">{'"initializing"'}</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center"
                >
                  <span className="text-foreground">{"}"}</span>
                  <motion.span
                    className="text-primary ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
                  >
                    |
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>

            {/* Pulsing dots */}
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
