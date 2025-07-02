import React from 'react';
import { FaBuilding, FaLaptopCode } from 'react-icons/fa';

const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'Tech Startup',
    logo: <FaLaptopCode className="text-blue-400 text-2xl" />,
    dates: 'May 2023 – Aug 2023',
    description: 'Worked on building scalable web applications, implemented new features, and collaborated with cross-functional teams to deliver high-quality software.',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
  },
  {
    role: 'Research Assistant',
    company: 'McGill University',
    logo: <FaBuilding className="text-blue-400 text-2xl" />,
    dates: 'Sep 2022 – Apr 2023',
    description: 'Conducted research in machine learning, developed data pipelines, and contributed to academic publications.',
    tech: ['Python', 'scikit-learn', 'TensorFlow'],
  },
];

const Work: React.FC = () => (
  <section className="flex flex-col items-center justify-center w-full h-full min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 px-4 py-12">
    <div className="max-w-3xl w-full mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Work & Experience</h2>
      <div className="relative border-l-4 border-blue-800 pl-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="mb-12 last:mb-0 relative">
            <div className="absolute -left-6 top-1.5 bg-blue-800 rounded-full w-6 h-6 flex items-center justify-center shadow-lg">
              {exp.logo}
            </div>
            <div className="bg-gray-900 bg-opacity-80 rounded-xl shadow-lg p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-blue-400">{exp.role}</h3>
                <span className="text-sm text-gray-400 mt-1 sm:mt-0">{exp.dates}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-white">{exp.company}</span>
              </div>
              <p className="text-gray-300 mb-2">{exp.description}</p>
              {exp.tech && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs font-mono">{t}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Work; 