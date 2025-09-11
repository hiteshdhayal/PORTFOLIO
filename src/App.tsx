import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import ProjectCategories from './components/ProjectCategories';
import WebDevProjects from './components/WebDevProjects';
import AIProjects from './components/AIProjects';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <Hero />
      <Timeline />
      <ProjectCategories />
      <WebDevProjects />
      <AIProjects />
      
      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Portfolio. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;