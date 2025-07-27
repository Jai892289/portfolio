// import Hero from "./components/Hero"
import About from "@/components/About"
import TechStack from "@/components/TechStack"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonial"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <About />
      <TechStack />
      {/* <Experience /> */}
      <Projects />
      <Services />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  )
}
