"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  SiOpenjdk, SiJavascript, SiPython, SiCplusplus,
  SiReact, SiNodedotjs, SiExpress, SiNextdotjs, SiRedux, SiGraphql, SiSocketdotio, SiJsonwebtokens,
  SiMongodb, SiMysql, SiPostgresql,
  SiGit, SiGithub, SiPostman, SiAmazonwebservices, SiDocker, SiLinux,
  SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiOpenai, SiLangchain
} from "react-icons/si"
import { 
  Brain, MessageSquare, Users, Lightbulb, Ear, Rocket, Code, Network, Monitor, Settings, Bug, Bot, Cpu, BarChart3, Layers, Sparkles, Search, SlidersHorizontal, FileText, HelpCircle, Database
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Java", icon: SiOpenjdk },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "C++", icon: SiCplusplus },
    ],
  },
  {
    name: "Technologies & Frameworks",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux },
      { name: "RESTful APIs", icon: Network },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "GraphQL", icon: SiGraphql },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "SQL", icon: Database },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "AWS (EC2, S3)", icon: SiAmazonwebservices },
      { name: "Docker", icon: SiDocker },
      { name: "Linux", icon: SiLinux },
    ],
  },
  {
    name: "Core Competencies",
    skills: [
      { name: "Data Structures & Algorithms", icon: Code },
      { name: "Object Oriented Programming", icon: Layers },
      { name: "Computer Networking", icon: Network },
      { name: "Operating System", icon: Monitor },
      { name: "System Design", icon: Settings },
      { name: "Machine Learning", icon: Brain },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Clear Communication", icon: MessageSquare },
      { name: "Teamwork", icon: Users },
      { name: "Problem Solving", icon: Lightbulb },
      { name: "Active Listening", icon: Ear },
      { name: "Eagerness to Learn", icon: Rocket },
      { name: "Initiative Taking", icon: Sparkles },
    ],
  },
  {
    name: "Data Analysis & Visualization",
    skills: [
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Matplotlib", icon: BarChart3 },
      { name: "Seaborn", icon: BarChart3 },
      { name: "Exploratory Data Analysis (EDA)", icon: Search },
      { name: "Feature Engineering", icon: SlidersHorizontal },
    ],
  },
  {
    name: "Machine Learning & AI",
    skills: [
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Model Training & Evaluation", icon: Cpu },
      { name: "Hyperparameter Tuning", icon: SlidersHorizontal },
    ],
  },
  {
    name: "Generative AI & LLMs",
    skills: [
      { name: "Large Language Models (LLMs)", icon: Bot },
      { name: "Prompt Engineering", icon: MessageSquare },
      { name: "OpenAI APIs", icon: SiOpenai },
      { name: "LangChain (Basics)", icon: SiLangchain },
      { name: "Retrieval Augmented Generation (RAG)", icon: Search },
    ],
  },
]

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">My Toolkit</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: categoryIndex * 0.1,
                ease: "easeOut"
              }}
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => {
                      const IconComponent = skill.icon
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            duration: 0.3,
                          }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="flex items-center gap-2 px-3 py-2 bg-card border border-primary rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md hover:shadow-primary/30 group/skill"
                        >
                          <IconComponent className="w-4 h-4 text-muted-foreground group-hover/skill:text-primary transition-colors duration-200" />
                          <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors duration-200">
                            {skill.name}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
