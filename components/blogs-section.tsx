"use client"

import { useRef } from "react"
import { ExternalLink, ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"

const blogs = [
  {
    title: "Building Scalable APIs with Node.js and Express",
    description: "Learn how to design and implement RESTful APIs that can handle millions of requests with proper error handling and caching strategies.",
    image: "/blog-api.jpg",
    link: "https://medium.com",
    date: "Jan 2026",
  },
  {
    title: "Introduction to Machine Learning with Python",
    description: "A beginner-friendly guide to understanding ML concepts and building your first predictive model using scikit-learn.",
    image: "/blog-ml.jpg",
    link: "https://dev.to",
    date: "Dec 2025",
  },
  {
    title: "Modern CSS Techniques You Should Know",
    description: "Explore the latest CSS features like container queries, cascade layers, and the :has() selector that are changing web development.",
    image: "/blog-css.jpg",
    link: "https://medium.com",
    date: "Nov 2025",
  },
]

export function BlogsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="blogs" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">My Writing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Blogs & Articles
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <motion.a
              key={blog.title}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -8 }}
              className="group relative block"
            >
              {/* Animated border on hover */}
              <motion.div 
                className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-primary via-primary/30 to-primary opacity-0 group-hover:opacity-100 blur-[1px]"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                style={{ backgroundSize: "200% 200%" }}
              />
              
              {/* Card with glassmorphism */}
              <div className="relative bg-card/60 backdrop-blur-md border border-border rounded-xl overflow-hidden
                group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-primary/10
                transition-all duration-500"
              >
                {/* Image */}
                <div className="h-44 bg-secondary relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.code 
                      className="text-primary/30 font-mono text-5xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {"</>"}
                    </motion.code>
                  </motion.div>
                  {/* Glow overlay on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <motion.span 
                      className="text-xs text-primary font-mono px-2 py-1 bg-primary/10 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      {blog.date}
                    </motion.span>
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </motion.div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {blog.description}
                  </p>
                  
                  {/* Read More with animated arrow */}
                  <motion.div 
                    className="flex items-center gap-2 text-sm text-primary"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Read More</span>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
