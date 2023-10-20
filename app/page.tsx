import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 p-4">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
