"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Full Stack Developer & Blockchain Expert"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 mt-10">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">JD</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Jaideep{" "}Gupta{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Developer
            </span>
          </h1>

          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Crafting exceptional digital experiences with 6+ years of expertise in React, Next.js, Node.js, React
            Native, and Blockchain technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-3 cursor-pointer rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 cursor-pointer rounded-full font-semibold transition-all duration-300"
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com/Jai892289" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/jaideep-gupta-8a2823100/" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:jgupta324@gmail.com"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://wa.me/7366042663"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
          >
            <MessageCircle size={24} />
          </a>
        </div>

        <div className="animate-bounce">
          <ChevronDown
            size={32}
            className="text-gray-400 cursor-pointer mx-auto hover:text-purple-400 transition-colors duration-300"
            onClick={() => scrollToSection("about")}
          />
        </div>
      </div>
    </section>
  )
}
