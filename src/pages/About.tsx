import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaGithub, FaJava, FaAws, FaDocker, FaDatabase, FaCogs } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiNextdotjs, SiSpringboot, SiExpress, SiPostman, SiC, SiHtml5, SiCss3, SiPytorch, SiTensorflow, SiPostgresql } from 'react-icons/si';
import profileImg from '../assets/rayyan.jpg';

const languages = [
  { name: 'Python', icon: <FaPython className="text-yellow-300" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
  { name: 'Java', icon: <FaJava className="text-red-500" /> },
  { name: 'SQL', icon: <FaDatabase className="text-blue-300" /> },
  { name: 'C', icon: <SiC className="text-blue-500" /> },
  { name: 'HTML', icon: <SiHtml5 className="text-orange-400" /> },
  { name: 'CSS', icon: <SiCss3 className="text-blue-400" /> },
];

const frameworks = [
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-700" /> },
  { name: 'Express', icon: <SiExpress className="text-gray-200" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
  { name: 'PyTorch', icon: <SiPytorch className="text-orange-500" /> },
  { name: 'TensorFlow', icon: <SiTensorflow className="text-yellow-500" /> },
  { name: 'scikit-learn', icon: <FaCogs className="text-gray-300" /> },
  { name: 'YOLO', icon: <FaCogs className="text-yellow-300" /> },
];

const tools = [
  { name: 'AWS', icon: <FaAws className="text-orange-300" /> },
  { name: 'Docker', icon: <FaDocker className="text-blue-300" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white" /> },
];

const About: React.FC = () => (
  <section className="flex flex-col items-center justify-center w-full h-full min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 px-4 py-12">
    <div className="max-w-2xl w-full bg-gray-900 bg-opacity-80 rounded-xl shadow-lg p-8 text-center">
      {/* Profile Photo */}
      <div className="mx-auto mb-6 w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
        <img
          src={profileImg}
          alt="Rayyan Khan profile"
          className="w-full h-full object-cover object-bottom"
        />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">About Me</h2>
      <p className="text-gray-300 mb-6">
        Hi! I'm Rayyan, a passionate Computer Science student with a love for building modern web apps, exploring startups, and diving into full-stack and machine learning projects. I thrive on learning new technologies and collaborating with others to create impactful solutions.
      </p>
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-blue-400 mb-4">Languages</h3>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {languages.map((lang) => (
            <div key={lang.name} className="flex flex-col items-center group cursor-pointer">
              {lang.icon}
              <span className="text-sm text-gray-200 mt-1 transition drop-shadow group-hover:text-blue-400 group-hover:drop-shadow-glow">
                {lang.name}
              </span>
            </div>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-blue-400 mb-4">Frameworks & Libraries</h3>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {frameworks.map((fw) => (
            <div key={fw.name} className="flex flex-col items-center group cursor-pointer">
              {fw.icon}
              <span className="text-sm text-gray-200 mt-1 transition drop-shadow group-hover:text-blue-400 group-hover:drop-shadow-glow">
                {fw.name}
              </span>
            </div>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-blue-400 mb-4">Developer Tools</h3>
        <div className="flex flex-wrap justify-center gap-6 mb-2">
          {tools.map((tool) => (
            <div key={tool.name} className="flex flex-col items-center group cursor-pointer">
              {tool.icon}
              <span className="text-sm text-gray-200 mt-1 transition drop-shadow group-hover:text-blue-400 group-hover:drop-shadow-glow">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <style>{`
      .drop-shadow-glow {
        text-shadow: 0 0 8px #60a5fa, 0 0 16px #60a5fa;
      }
    `}</style>
  </section>
);

export default About; 