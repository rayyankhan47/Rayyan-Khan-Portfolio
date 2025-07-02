import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Home: React.FC = () => (
  <section className="flex flex-col items-center justify-center w-full h-full min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 px-4">
    <div className="max-w-2xl text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
        Rayyan Khan
      </h1>
      <span className="text-lg md:text-2xl text-blue-400 mb-8 font-medium block min-h-[2.5rem]">
        <Typewriter
          words={['Computer Science Student', 'Startup Founder', 'Full-Stack/Machine Learning Developer']}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
      <p className="text-gray-300 mb-8">
        Welcome to my portfolio! Explore my projects, experience, and get in touch to collaborate or connect.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/projects" className="px-6 py-3 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow transition">
          View Projects
        </Link>
        <Link to="/contact" className="px-6 py-3 rounded border border-blue-400 text-blue-400 hover:bg-blue-900 hover:text-white font-semibold shadow transition">
          Contact Me
        </Link>
      </div>
    </div>
  </section>
);

export default Home; 