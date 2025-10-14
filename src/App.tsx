import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

const Navbar: React.FC = () => {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold no-underline hover:no-underline">
            Rayyan A. Khan
          </Link>
          <div className="flex gap-8">
            <Link to="/" className="text-sm no-underline hover:no-underline text-gray-600 hover:text-black transition">
              Home
            </Link>
            <Link to="/about" className="text-sm no-underline hover:no-underline text-gray-600 hover:text-black transition">
              About
            </Link>
            <Link to="/projects" className="text-sm no-underline hover:no-underline text-gray-600 hover:text-black transition">
              Projects
            </Link>
            <Link to="/work" className="text-sm no-underline hover:no-underline text-gray-600 hover:text-black transition">
              Work
            </Link>
            <Link to="/contact" className="text-sm no-underline hover:no-underline text-gray-600 hover:text-black transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-white min-h-screen text-black w-full h-full flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
