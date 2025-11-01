import React from 'react';

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'Quantolio',
    dates: 'September 2025 - Present',
    description: 'Working on HVAC smart AI applications.',
    tech: ['TypeScript', 'Next.js', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    role: 'Freelance Web Developer',
    company: 'YULRentals',
    dates: 'May 2025 - July 2025',
    description: 'Contributed to the development of a full-stack car rental booking platform using MERN stack, implementing JWT authentication, an admin dashboard with CRUD operations, and a real-time booking system.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'ImageKit'],
    link: 'https://yulrentals-git-main-rayyan-khans-projects-68783307.vercel.app/',
  },
  {
    role: 'MAIS 202 - Machine Learning Workshop',
    company: 'McGill University',
    dates: 'February 2025 - April 2025',
    description: 'Participated in an 8-week intensive ML/AI workshop, learning about core Machine Learning principles, Neural Networks, and Convolutional Neural Networks.',
    tech: ['Python', 'scikit-learn', 'TensorFlow'],
  },
];

const Work: React.FC = () => (
  <section className="max-w-4xl mx-auto px-6 py-16">
    <div className="space-y-12">
      <div>
        <h1 className="mb-4">Work & Experience</h1>
        <p className="text-gray-700">
          Professional experience and notable projects I've contributed to.
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <article key={idx} className="border-l-2 border-gray-200 pl-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <h3 className="font-semibold">{exp.role}</h3>
              <span className="text-sm text-gray-500">{exp.dates}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <p className="font-medium text-gray-900">{exp.company}</p>
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-600 hover:text-black"
                >
                  (view project)
                </a>
              )}
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {exp.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
