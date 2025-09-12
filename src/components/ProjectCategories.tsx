import React from 'react';
import { Code, Brain, ArrowRight } from 'lucide-react';

const ProjectCategories: React.FC = () => {
  const categories = [
    {
      id: 'webdev',
      title: 'Web Development',
      description: 'Full-stack applications built with React, Node.js, and modern web technologies',
      icon: <Code size={32} />,
      gradient: 'from-blue-500 to-purple-600',
      projects: '3 Projects',
    },
    {
      id: 'ai',
      title: 'AI Projects',
      description: 'Machine learning and AI-powered applications using LangChain and Generative AI',
      icon: <Brain size={32} />,
      gradient: 'from-purple-500 to-pink-600',
      projects: '3 Projects',
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my work in web development and artificial intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => scrollToSection(category.id)}
              className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 cursor-pointer hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${category.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                  {category.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-purple-400">
                    {category.projects}
                  </span>
                  <ArrowRight 
                    size={20} 
                    className="text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" 
                  />
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCategories;