import React from 'react';
import { FaBuilding, FaLaptopCode } from 'react-icons/fa';

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'Quantolio',
    logo: <FaLaptopCode className="text-blue-400 text-2xl" />,
    dates: 'Sept 2025 - Present',
    description: 'Fintech startup',
    tech: ['Python', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    role: 'Freelance Web Developer',
    company: 'YULRentals',
    logo: <FaLaptopCode className="text-blue-400 text-2xl" />,
    dates: 'May 2025 - July 2025',
    description: 'Contributed to the development of a full-stack car rental booking platform using MERN stack, implementing JWT authentication, an admin dashboard with CRUD operations, and a real-time booking system, resulting in a production-ready application.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'ImageKit'],
  },
  {
    role: 'Founder & Lead Engineer',
    company: 'ParlonsCégep',
    logo: <FaLaptopCode className="text-blue-400 text-2xl" />,
    dates: 'March 2025 - Present',
    description: 'Leading the development of Québec\'s first dedicated social platform for CEGEP students, overseeing a cross-functional team of software engineering and marketing.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
  },
  {
    role: 'MAIS 202 - Machine Learning Workshop',
    company: 'McGill University',
    logo: <FaBuilding className="text-blue-400 text-2xl" />,
    dates: 'February 2025 - April 2025',
    description: 'Participated in MAIS 202, an 8-week intensive ML/AI workshop hosted by AI student researchers, learning about core Machine Learning Principles, Neural Networks, Convolutional Neural Networks, and more, for the purpose of a cumulative CNN project.',
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
                {exp.company === 'YULRentals' && (
                  <a
                    href="https://yulrentals-git-main-rayyan-khans-projects-68783307.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm transition"
                  >
                    (view here!)
                  </a>
                )}
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