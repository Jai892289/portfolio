// // import Hero from "./components/Hero"
// import About from "@/components/About"
// import TechStack from "@/components/TechStack"
// import Experience from "@/components/Experience"
// import Projects from "@/components/Projects"
// import Services from "@/components/Services"
// import Testimonials from "@/components/Testimonial"
// import Contact from "@/components/Contact"
// import Footer from "@/components/Footer"
// import Hero from "@/components/Hero"

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       <Hero />
//       <About />
//       <TechStack />
//       {/* <Experience /> */}
//       <Projects />
//       <Services />
//       {/* <Testimonials /> */}
//       <Contact />
//       <Footer />
//     </main>
//   )
// }


"use client"

import { useEffect, useState } from "react"
import About from "@/components/About"
import TechStack from "@/components/TechStack"
// import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Services from "@/components/Services"
// import Testimonials from "@/components/Testimonial"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-900 text-white">
        {/* <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        <br></br> */}
        <div className="text-md animate-pulse">Loading...</div>

      </div>
    )
  }

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
