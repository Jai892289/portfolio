"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Building, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description:
        "Leading development of enterprise-level applications using React, Next.js, and Node.js. Implemented blockchain solutions for supply chain management.",
      technologies: ["React", "Next.js", "Node.js", "Solidity", "MongoDB"],
    },
    {
      title: "Blockchain Developer",
      company: "CryptoInnovate",
      period: "2021 - 2022",
      description:
        "Developed smart contracts and DeFi applications. Built trading platforms with real-time data processing and secure wallet integrations.",
      technologies: ["Solidity", "Web3.js", "React", "Express.js", "PostgreSQL"],
    },
    {
      title: "Mobile App Developer",
      company: "AppVentures",
      period: "2020 - 2021",
      description:
        "Created cross-platform mobile applications using React Native. Delivered 15+ apps with over 100K downloads combined.",
      technologies: ["React Native", "Expo", "Firebase", "Redux", "TypeScript"],
    },
    {
      title: "Full Stack Developer",
      company: "WebSolutions Inc",
      period: "2018 - 2020",
      description:
        "Developed responsive web applications and RESTful APIs. Collaborated with design teams to create pixel-perfect user interfaces.",
      technologies: ["React", "Node.js", "Express.js", "MySQL", "AWS"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">My professional journey and key achievements</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-slate-900"></div>

                <div className="ml-16 w-full">
                  <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <div className="flex items-center text-gray-400 text-sm mt-2 md:mt-0">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>

                      <div className="flex items-center text-purple-400 mb-4">
                        <Building className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
