"use client"

import { Github, Linkedin, Mail, MessageCircle, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-purple-500/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">JD</span>
              </div>
              <span className="text-white text-xl font-bold">Jaideep Gupta Developer</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer & Blockchain Expert with 6+ years of experience creating innovative digital
              solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#tech-stack" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Projects
                </a>
              </li>
              {/* <li>
                <a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Services
                </a>
              </li> */}
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Web Development</span>
              </li>
              <li>
                <span className="text-gray-400">Mobile App Development</span>
              </li>
              <li>
                <span className="text-gray-400">Blockchain Development</span>
              </li>
              <li>
                <span className="text-gray-400">Backend Development</span>
              </li>
              <li>
                <span className="text-gray-400">Custom Software</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-purple-500/20">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a href="https://github.com/Jai892289" target="_blank" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jaideep-gupta-8a2823100/" target="_blank" 
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:jgupta324@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://wa.me/7366042663"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              <MessageCircle size={20} />
            </a>
          </div>

          <div className="flex items-center text-gray-400 text-sm">
            <span>Copyright ©{currentYear} All rights reserved.</span>
            {/* <Heart className="w-4 h-4 text-red-500 mx-1 fill-current" />
            <span>and lots of coffee</span> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
