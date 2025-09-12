import React from 'react';
import { ExternalLink, Github, Brain } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const AIProjects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'AGENTS',
      title: 'AI Automation AGENT',
      description: 'Intelligent AI Agents using LangChain and OpenAI GPT, featuring context awareness and multi-language support.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['LangChain', 'OpenAI GPT', 'Python', 'FastAPI', 'React'],
      liveUrl: 'https://x.com/hiteshdhayall/status/1963672648841630145',
      githubUrl: 'https://github.com/hiteshdhayal/CURSOR-CLI'
    },
    {
      id: 'persona-based-chatbot',
      title: 'Persona-Based Chatbot',
      description: 'Utilising LLM models build a persona instructed to respond as if it were Hitesh Choudhary & Piyush Garg to take reference tones dataset from their YouTube & Twitter',
      image: 'https://images.pexels.com/photos/29562925/pexels-photo-29562925.jpeg',
      technologies: ['GPT-4', 'LangChain', 'Streamlit', 'PostgreSQL', 'Docker'],
      liveUrl: 'https://hiteshsirpersona.netlify.app/',
      githubUrl: 'https://github.com/hiteshdhayal/HiteshSirPersona'
    },
    {
      id: 'RAG-system',
      title: 'RAG Intelligence System',
      description: 'AI-powered RAG insights, summarizes content, and answers questions about uploaded documents.(deployment in progress)',
      image: 'https://images.pexels.com/photos/17484975/pexels-photo-17484975.png',
      technologies: ['LangChain', 'Chroma DB', 'FastAPI', 'React', 'OpenAI'],
      liveUrl: '',
      githubUrl: 'https://github.com/hiteshdhayal/RAG'
    }
  ];

  return (
    <section id="ai" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge AI applications leveraging machine learning and generative AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                
                {/* AI Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-400 text-xs font-medium">
                    <Brain size={12} />
                    AI Powered
                  </div>
                </div>
                
                {/* Hover Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  >
                    <ExternalLink size={14} />
                    Try Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 text-white text-sm font-medium rounded-lg hover:bg-slate-600 transition-colors duration-300"
                  >
                    <Github size={14} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIProjects;