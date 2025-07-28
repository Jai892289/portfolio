"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import NFT from '../../public/nft.png'
import Ecomm from '../../public/ecomm.png'
import Busfabrik from '../../public/busfabrik.png'
import Jhar from '../../public/jhar.png'
import Hiee from '../../public/hiee.png'
import Android from '../../public/android.svg'

export default function Projects() {
  const projects = [
    {
      title: "Camper Booking Platform",
      description:
        "A comprehensive decentralized finance platform with  staking, and trading capabilities. Built with React, Solidity, and Web3.js.",
      image: Busfabrik,
      technologies: ["Next.js", "Node.js", "MongoDB", "Express.js", "i18next"],
      liveUrl: "https://www.busfabrik.ch/",
      // githubUrl: "https://github.com/johndoe/defi-platform",
      featured: false,
    },
    {
      title: "E-commerce Web App",
      description:
        "Cross-platform web application with real-time inventory, payment integration, and push notifications.",
      image: Ecomm,
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Firebase"],
      liveUrl: "https://ecomm-next.vercel.app/",
      // githubUrl: "https://github.com/johndoe/ecommerce-app",
      featured: true,
    },
    {
      title: "Jharkhand Govt. Analytics Dashboard",
      description:
        "Real-time analytics dashboard with data visualization, and automated reporting features.",
      image: Jhar,
      technologies: ["Next.js", "Laravel", "Chart.js", "PostgreSQL"],
      liveUrl: "https://jharkhandegovernance.com/livedashboard",
      // githubUrl: "https://github.com/johndoe/analytics-dashboard",
      featured: false,
    },
    {
      title: "NFT Marketplace",
      description:
        "Full-featured NFT marketplace with minting, trading, and auction capabilities. Integrated with IPFS for decentralized storage.",
      image: NFT,
      technologies: ["React", "Solidity", "IPFS", "Ethereum", "Express.js"],
      liveUrl: "https://nft-gray-three.vercel.app/",
      // githubUrl: "https://github.com/johndoe/nft-marketplace",
      featured: true,
    },
    {
      title: "Ecommerce Platform + Mobile App",
      description:
        "Modern ecommerce media platform with real-time messaging using its Application, content sharing, and advanced privacy controls.",
      image: Hiee,
      technologies: ["Next.js","Node.js", "Pgsql", "React Native ", "Tailwind CSS", "i18next"],
      liveUrl: "https://redmaxfootwears.hiee.shop/",
      // githubUrl: "https://github.com/johndoe/social-platform",
      featured: false,
      apk:"https://play.google.com/store/apps/details?id=com.hiee.shop&hl=en_IN",
      apkIcon:Android
    }
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">A showcase of my best work and innovative solutions</p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-purple-500/20 p-0 hover:border-purple-500/40 transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 cursor-pointer hover:to-cyan-600 text-white"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  {/* <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white text-center mb-5">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm p-0 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={200}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 6).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white cursor-pointer text-xs px-3 py-1"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                    {project?.apk && project?.apk?.length > 0 && (
                    <div onClick={() => window.open(project.apk, "_blank")} className="cursor-pointer">
                    <Image src={Android} alt={project.title}
                    width={40}
                    height={50}
                    />
                    </div>
                    )}
                   

                    {/* <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white text-xs px-3 py-1 bg-transparent"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
