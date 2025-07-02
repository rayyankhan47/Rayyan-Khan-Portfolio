import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-blue-400 px-6 py-4 shadow-lg relative z-50">
      <div className="max-w-6xl mx-auto flex justify-center md:justify-center items-center">
        {/* Desktop Menu - Centered */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-blue-300 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-300 transition">About</Link>
          <Link to="/projects" className="hover:text-blue-300 transition">Projects</Link>
          <Link to="/work" className="hover:text-blue-300 transition">Work</Link>
          <Link to="/contact" className="hover:text-blue-300 transition">Contact</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-2xl hover:text-blue-300 transition"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-gray-900 border-t border-gray-700"
          >
            <div className="flex flex-col py-4 space-y-2">
              <Link to="/" className="px-6 py-2 hover:bg-gray-800 hover:text-blue-300 transition" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="px-6 py-2 hover:bg-gray-800 hover:text-blue-300 transition" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link to="/projects" className="px-6 py-2 hover:bg-gray-800 hover:text-blue-300 transition" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
              <Link to="/work" className="px-6 py-2 hover:bg-gray-800 hover:text-blue-300 transition" onClick={() => setIsOpen(false)}>
                Work
              </Link>
              <Link to="/contact" className="px-6 py-2 hover:bg-gray-800 hover:text-blue-300 transition" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const pageFade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3 } },
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageFade}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex-1"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-gray-950 min-h-screen text-white w-full h-full flex flex-col">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
};

export default App;
