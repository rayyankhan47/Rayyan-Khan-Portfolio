import React, { useState } from 'react';
import type { ReactElement } from 'react';
import { FaGithub } from 'react-icons/fa';

// Define the type for project links
type ProjectLink = {
  label: string;
  url: string;
  icon: ReactElement;
};

// Type the projects array
const projects: {
  title: string;
  image: string;
  summary: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
}[] = [
  {
    title: 'ParlonsCégep',
    image: '/parlonscegeplogo.png',
    summary: 'Startup (In Development)',
    description: '(In Development)',
    tech: ['Spring Boot', 'TypeScript', 'React.js', 'PostgreSQL'],
    links: [],
  },
  {
    title: 'YulRentals.com',
    image: '/yulrentalslogo.jpeg',
    summary: 'A luxury car rental web application. It is built with the MERN stack and uses JWT authentication for security.',
    description: 'Contributed to the development of a full-stack car rental booking platform using MERN stack, implementing JWT authentication, an admin dashboard, and a real-time booking system.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    links: [],
  },
  {
    title: 'Navvi - AI Onboarding Assistant',
    image: '/navvilogo.png',
    summary: 'Automates the onboarding process for new developers.',
    description: 'A platform that analyzes code repositories and generates interactive onboarding guides and personalized learning paths for new developers.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    links: [],
  },
  {
    title: 'RedstoneHub',
    image: '/redstone.png',
    summary: 'GitHub for redstone engineers.',
    description: 'RedstoneHub is a comprehensive version control system designed specifically for redstone engineers. It allows you to track changes to your redstone builds, collaborate with other engineers, and maintain a history of your circuit development.',
    tech: ['TypeScript', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Three.js'],
    links: [],
  },
  {
    title: 'Console.text',
    image: '/console-dot-text.png',
    summary: 'DataDog and PagerDuty for mid-level startups.',
    description: 'Lets developers add real-time error alerts and persistent storage to their apps with a single line of code, featuring a custom dashboard and SMS/call notifications.',
    tech: ['JavaScript', 'Node.js', 'React.js', 'SQLite'],
    links: [],
  },
  {
    title: 'KNN Heart Disease Predictor',
    image: '/heart.png',
    summary: 'Predicts heart disease risk from clinical data.',
    description: 'A machine learning project that predicts the likelihood of heart disease using real-world clinical data, helping to identify at-risk patients with high accuracy.',
    tech: ['Pandas', 'Scikit-Learn', 'Python'],
    links: [],
  },
  {
    title: 'NBA Match Outcome Predictor',
    image: '/basketball.png',
    summary: 'Forecasts NBA game results using historical data and player stats.',
    description: 'A data science project that forecasts NBA game results by analyzing historical match data and player statistics to provide insights into likely outcomes.',
    tech: ['Pandas', 'Scikit-Learn', 'Python'],
    links: [],
  },
  {
    title: "Rayyan's Portfolio",
    image: '/portfolio.png',
    summary: 'Obviously, I built my own portfolio..',
    description: 'A modern, responsive portfolio website showcasing my projects, skills, and experience with smooth animations and a clean design.',
    tech: ['TypeScript', 'React.js', 'TailwindCSS'],
    links: [],
  },
];

const Projects: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="flex flex-col items-center justify-center w-full h-full min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 px-4 py-12">
      <div className="max-w-5xl w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Projects</h2>
        <div className="text-center mb-8">
          <p className="text-gray-300 mb-4">Check out my latest work and contributions!</p>
          <a
            href="https://github.com/rayyankhan47"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-gray-800 hover:bg-gray-700 text-white font-semibold shadow transition"
          >
            <FaGithub />
            View On GitHub
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="bg-gray-900 bg-opacity-80 rounded-xl shadow-lg p-6 flex flex-col items-center cursor-pointer hover:scale-105 hover:shadow-2xl transition"
              onClick={() => setSelected(idx)}
            >
              <img src={project.image} alt={project.title} className="w-20 h-20 mb-4 rounded-lg object-cover bg-gray-800" />
              <h3 className="text-xl font-semibold text-blue-400 mb-2 text-center">{project.title}</h3>
              <p className="text-gray-300 text-center mb-2">{project.summary}</p>
              <div className="flex flex-wrap gap-2 justify-center mt-2 mb-3">
                {project.tech.map((t) => (
                  <span key={t} className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs font-mono">{t}</span>
                ))}
              </div>
              {project.title === 'YulRentals.com' && (
                <a
                  href="https://yulrentals-git-main-rayyan-khans-projects-68783307.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  VIEW LIVE
                </a>
              )}
              {project.title === 'Navvi - AI Onboarding Assistant' && (
                <>
                  <a
                    href="https://navvi-nu.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-blue-400 hover:text-blue-300 transition-colors mr-3"
                    onClick={(e) => e.stopPropagation()}
                  >
                    VIEW LIVE
                  </a>
                  <a
                    href="https://github.com/rayyankhan47/Navvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-blue-400 hover:text-blue-300 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    VIEW SOURCE CODE
                  </a>
                </>
              )}
              {project.title === 'RedstoneHub' && (
                <a
                  href="https://github.com/rayyankhan47/RedstoneHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  VIEW SOURCE CODE
                </a>
              )}
              {project.title === 'Console.text' && (
                <a
                  href="https://github.com/rayyankhan47/console.text"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  VIEW SOURCE CODE
                </a>
              )}
              {project.title === 'KNN Heart Disease Predictor' && (
                <a
                  href="https://github.com/rayyankhan47/KNN-Heart-Disease-Predictor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  VIEW SOURCE CODE
                </a>
              )}
              {project.title === 'NBA Match Outcome Predictor' && (
                <a
                  href="https://github.com/rayyankhan47/Basketball-Match-Predictor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  VIEW SOURCE CODE
                </a>
              )}
            </div>
          ))}
        </div>
        {/* Modal */}
        {selected !== null && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={() => setSelected(null)}
          >
            <div 
              className="bg-gray-900 rounded-xl shadow-2xl p-8 max-w-lg w-full relative animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-blue-400 text-2xl font-bold"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <img src={projects[selected].image} alt={projects[selected].title} className="w-24 h-24 mb-4 rounded-lg object-cover bg-gray-800 mx-auto" />
              <h3 className="text-2xl font-bold text-blue-400 mb-2 text-center">{projects[selected].title}</h3>
              <p className="text-gray-200 mb-4 text-center">{projects[selected].description}</p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {projects[selected].tech.map((t) => (
                  <span key={t} className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs font-mono">{t}</span>
                ))}
              </div>
              {projects[selected].title === 'YulRentals.com' && (
                <a
                  href="https://yulrentals-git-main-rayyan-khans-projects-68783307.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mb-4"
                >
                  <span className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
                    VIEW LIVE
                  </span>
                </a>
              )}
              {projects[selected].title === 'Navvi - AI On-boarding Assistant' && (
                <>
                  <a
                    href="https://navvi-nu.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center mb-2"
                  >
                    <span className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
                      VIEW LIVE
                    </span>
                  </a>
                  <a
                    href="https://github.com/rayyankhan47/Navvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center mb-4"
                  >
                    <span className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
                      VIEW SOURCE CODE
                    </span>
                  </a>
                </>
              )}
              {projects[selected].title === 'RedstoneHub' && (
                <a
                  href="https://github.com/rayyankhan47/RedstoneHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mb-4"
                >
                  <span className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
                    VIEW SOURCE CODE
                  </span>
                </a>
              )}
              {projects[selected].title === 'Console.text' && (
                <a
                  href="https://github.com/rayyankhan47/console.text"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mb-4"
                >
                  <span className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
                    VIEW SOURCE CODE
                  </span>
                </a>
              )}
              {projects[selected].title === 'KNN Heart Disease Predictor' && (
                <a
                  href="https://github.com/rayyankhan47/KNN-Heart-Disease-Predictor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mb-4"
                >
                  <span className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
                    VIEW SOURCE CODE
                  </span>
                </a>
              )}
              {projects[selected].title === 'NBA Match Outcome Predictor' && (
                <a
                  href="https://github.com/rayyankhan47/Basketball-Match-Predictor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mb-4"
                >
                  <span className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
                    VIEW SOURCE CODE
                  </span>
                </a>
              )}
              <div className="flex gap-4 justify-center">
                {projects[selected].links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow transition"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease;
        }
      `}</style>
    </section>
  );
};

export default Projects; 