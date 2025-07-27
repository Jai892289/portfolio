"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Smartphone, Globe, Coins, Database, Zap } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Full-stack web applications using React, Next.js, and Node.js with modern UI/UX design.",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "API Integration"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications with React Native for iOS and Android platforms.",
      features: ["Cross-Platform", "Native Performance", "Push Notifications", "App Store Deployment"],
    },
    {
      icon: Coins,
      title: "Blockchain Development",
      description: "Smart contracts, DeFi applications, and blockchain solutions for various industries.",
      features: ["Smart Contracts", "DeFi Protocols", "NFT Marketplaces", "Web3 Integration"],
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Scalable server-side solutions with databases, APIs, and cloud infrastructure.",
      features: ["RESTful APIs", "Database Design", "Cloud Deployment", "Security Implementation"],
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software solutions to meet specific business requirements and workflows.",
      features: ["Business Logic", "Workflow Automation", "System Integration", "Maintenance Support"],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize existing applications for better speed, scalability, and user experience.",
      features: ["Code Optimization", "Database Tuning", "Caching Strategies", "Load Balancing"],
    },
  ]

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
