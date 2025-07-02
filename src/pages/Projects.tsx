import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Personal Portfolio',
    image: '/vite.svg',
    summary: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.',
    description: 'This portfolio showcases my projects, work experience, and skills. It features smooth animations, a contact form, and a mobile-first design.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    links: [
      { label: 'GitHub', url: 'https://github.com/rayyankhan47/Rayyan-Khan-Portfolio', icon: <FaGithub /> },
      { label: 'Live Site', url: 'https://rayyan.dev', icon: <FaExternalLinkAlt /> },
    ],
  },
  {
    title: 'ML Project Example',
    image: '/vite.svg',
    summary: 'A machine learning project using Python, scikit-learn, and YOLO.',
    description: 'This project demonstrates object detection and classification using YOLO and scikit-learn pipelines.',
    tech: ['Python', 'YOLO', 'scikit-learn'],
    links: [
      { label: 'GitHub', url: 'https://github.com/rayyankhan47/ml-project', icon: <FaGithub /> },
    ],
  },
];

const Projects: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="flex flex-col items-center justify-center w-full h-full min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 px-4 py-12">
      <div className="max-w-5xl w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="bg-gray-900 bg-opacity-80 rounded-xl shadow-lg p-6 flex flex-col items-center cursor-pointer hover:scale-105 hover:shadow-2xl transition"
              onClick={() => setSelected(idx)}
            >
              <img src={project.image} alt={project.title} className="w-20 h-20 mb-4 rounded-lg object-contain bg-gray-800" />
              <h3 className="text-xl font-semibold text-blue-400 mb-2 text-center">{project.title}</h3>
              <p className="text-gray-300 text-center mb-2">{project.summary}</p>
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                {project.tech.map((t) => (
                  <span key={t} className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs font-mono">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Modal */}
        {selected !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="bg-gray-900 rounded-xl shadow-2xl p-8 max-w-lg w-full relative animate-fadeIn">
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-blue-400 text-2xl font-bold"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <img src={projects[selected].image} alt={projects[selected].title} className="w-24 h-24 mb-4 rounded-lg object-contain bg-gray-800 mx-auto" />
              <h3 className="text-2xl font-bold text-blue-400 mb-2 text-center">{projects[selected].title}</h3>
              <p className="text-gray-200 mb-4 text-center">{projects[selected].description}</p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {projects[selected].tech.map((t) => (
                  <span key={t} className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs font-mono">{t}</span>
                ))}
              </div>
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