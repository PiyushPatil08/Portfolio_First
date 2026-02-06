import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ImpactSection } from "@/components/impact-section"
import { SkillsSection } from "@/components/skills-section"
import { ValuesSection } from "@/components/values-section"
import { ProjectsSection } from "@/components/projects-section"
import { GithubSection } from "@/components/github-section"
import { TimelineSection } from "@/components/timeline-section"
import { BlogsSection } from "@/components/blogs-section"
import { ContactSection } from "@/components/contact-section"
import { HobbiesSection } from "@/components/hobbies-section"
import { Footer } from "@/components/footer"
import { PageLoader } from "@/components/page-loader"

export default function Home() {
  return (
    <main className="min-h-screen bg-background scroll-smooth">
      <PageLoader />
      <Navbar />
      <HeroSection />
      <ImpactSection />
      <SkillsSection />
      <ValuesSection />
      <ProjectsSection />
      <TimelineSection />
      <GithubSection />
      
      <BlogsSection />
      <HobbiesSection />
      <ContactSection />

      <Footer />
    </main>
  )
}
