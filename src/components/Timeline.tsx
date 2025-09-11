import React from 'react';
import { GraduationCap, Briefcase, Users, Code, Brain } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  company?: string;
  description: string[];
  icon: React.ReactNode;
  color: string;
}

const Timeline: React.FC = () => {
  const timelineData: TimelineItem[] = [
    {
      year: '2019',
      title: 'B.Tech Started',
      description: ['Began my journey in Computer Science Engineering', 'Built foundation in programming and software development'],
      icon: <GraduationCap size={20} />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2022',
      title: 'First Internship',
      company: 'NULLCLASS',
      description: [
        'Built dynamic frontend features using JavaScript and DOM manipulation',
        'Mentored over 100 students, helping resolve technical doubts',
        'Led a JavaScript project focused on event handling and UI interactivity'
      ],
      icon: <Code size={20} />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2023',
      title: 'Second Internship',
      company: 'ESCALON',
      description: [
        'Developed React.js web apps, improving UX by 60% through optimization',
        'Built API-driven accounting dashboards using Node.js and Express, automating data visualization',
        'Participated in Agile sprints and collaborative team development'
      ],
      icon: <Briefcase size={20} />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2023 June',
      title: 'Full-time Role (1.5 years)',
      description: [
        'Instructed HTML, CSS, JavaScript, and React.js to over 100 students with real-world projects',
        'Conducted workshops on GitHub version control, VS Code usage, and CI/CD fundamentals',
        'Achieved a 92% project completion rate by promoting hands-on learning'
      ],
      icon: <Users size={20} />,
      color: 'from-orange-500 to-red-500'
    },
    {
      year: '2025 Jan',
      title: 'Freelance & AI Focus',
      description: [
        'Working as a freelance developer on various projects',
        'Studying AI religiously, focusing on LangChain and Generative AI',
        'Building AI-powered applications and exploring machine learning'
      ],
      icon: <Brain size={20} />,
      color: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From starting my B.Tech to becoming a fullstack developer and diving into AI
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-purple-500 to-blue-500"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                } flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-4 border-purple-500 z-10">
                  <div className={`w-full h-full rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white`}>
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'} pl-16 sm:pl-0`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${item.color} text-white`}>
                        {item.year}
                      </span>
                      {item.company && (
                        <span className="text-purple-400 text-sm font-medium">
                          @ {item.company}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    
                    <ul className="space-y-2">
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-gray-300 flex items-start gap-2">
                          <span className="text-purple-400 mt-1.5">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden sm:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;