import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { AnimatePresence, motion } from "framer-motion";

const Navbar: React.FC = () => (
  <nav className="bg-gray-900 text-blue-400 px-6 py-4 flex gap-6 justify-center shadow-lg">
    <Link to="/" className="hover:text-blue-300 transition">Home</Link>
    <Link to="/about" className="hover:text-blue-300 transition">About</Link>
    <Link to="/projects" className="hover:text-blue-300 transition">Projects</Link>
    <Link to="/work" className="hover:text-blue-300 transition">Work</Link>
    <Link to="/contact" className="hover:text-blue-300 transition">Contact</Link>
  </nav>
);

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
