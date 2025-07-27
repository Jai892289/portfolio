"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function TechStack() {
  const technologies = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "Next.js", level: 90, color: "from-gray-400 to-gray-600" },
        { name: "TypeScript", level: 88, color: "from-blue-500 to-blue-700" },
        { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-cyan-600" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 90, color: "from-green-400 to-green-600" },
        { name: "Express.js", level: 85, color: "from-gray-500 to-gray-700" },
        { name: "MongoDB", level: 80, color: "from-green-500 to-green-700" },
        { name: "PostgreSQL", level: 75, color: "from-blue-600 to-blue-800" },
      ],
    },
    {
      category: "Mobile",
      skills: [
        { name: "React Native", level: 88, color: "from-purple-400 to-purple-600" },
        { name: "Expo", level: 85, color: "from-indigo-400 to-indigo-600" },
        { name: "Flutter", level: 70, color: "from-blue-400 to-blue-600" },
      ],
    },
    {
      category: "Blockchain",
      skills: [
        { name: "Solidity", level: 85, color: "from-yellow-400 to-yellow-600" },
        { name: "Web3.js", level: 80, color: "from-orange-400 to-orange-600" },
        { name: "Ethereum", level: 82, color: "from-purple-500 to-purple-700" },
        { name: "Smart Contracts", level: 88, color: "from-pink-400 to-pink-600" },
      ],
    },
  ]

  return (
    <section id="tech-stack" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Stack</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Technologies I work with to bring ideas to life</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6 text-center">{tech.category}</h3>
                <div className="space-y-4">
                  {tech.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
