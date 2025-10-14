import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <section className="max-w-4xl mx-auto px-6 py-16">
    <div className="space-y-8">
      <div>
        <h1 className="mb-4">Rayyan A. Khan</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Computer Science Student & Software Developer
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed">
          I'm a computer science student passionate about building scalable web applications 
          and exploring machine learning. Currently working on various full-stack projects and 
          contributing to open-source software.
        </p>
        <p className="text-gray-700 leading-relaxed">
          My work spans across web development, machine learning, and startup ventures. 
          I enjoy solving complex problems and creating tools that make developers' lives easier.
        </p>
      </div>

      <div className="flex gap-4 pt-4">
        <Link 
          to="/projects" 
          className="inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded no-underline hover:bg-gray-800 transition"
        >
          View Projects
        </Link>
        <Link 
          to="/contact" 
          className="inline-block px-4 py-2 border border-black text-black text-sm font-medium rounded no-underline hover:bg-gray-50 transition"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  </section>
);

export default Home;
