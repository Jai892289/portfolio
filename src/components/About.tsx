"use client"

import { Code, Rocket, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "100+" },
    { icon: Users, label: "Happy Clients", value: "10+" },
    { icon: Rocket, label: "Years Experience", value: "6+" },
    // { icon: Award, label: "Awards Won", value: "12" },
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer with a mission to create innovative solutions that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-1">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">JD</span>
                  </div>
                </div>
                <p className="text-gray-300">Full Stack Developer</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Hello! I'm John Developer</h3>
            <p className="text-gray-300 leading-relaxed">
              With over 6 years of experience in full-stack development, I specialize in creating robust, scalable
              applications using cutting-edge technologies. My journey began with traditional web development and
              evolved into blockchain and mobile app development.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I'm passionate about solving complex problems and turning innovative ideas into reality. Whether it's
              building decentralized applications, creating seamless mobile experiences, or developing high-performance
              web applications, I bring dedication and expertise to every project.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Problem Solver</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Innovation Driven</span>
              <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Team Player</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
