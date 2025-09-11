import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-5xl mx-auto">
          <div className="space-y-6">
            <div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  HITESH
                </span>
                <span className="text-white">/</span>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  DEVELOPER
                </span>
              </h1>
              <div className="flex items-center justify-center gap-2 text-gray-300 mb-8">
                <MapPin size={20} />
                <span className="text-xl">Fullstack Web Developer</span>
              </div>
            </div>

            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Fullstack Web Developer with hands-on experience in building scalable web applications using React.js,
              Node.js, Express.js, PostgreSQL, and MongoDB. Skilled in creating responsive UIs, developing RESTful
              APIs, and deploying applications in cloud and containerized environments. Passionate about delivering
              high-quality code, collaborating with cross-functional teams, and continuously learning new technologies
              such as LangChain and Generative AI integration.
            </p>

            <div className="flex justify-center gap-4 pt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </div>

            <div className="pt-10">
              <a
                href="#timeline"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;