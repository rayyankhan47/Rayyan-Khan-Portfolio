import React from 'react';

const Home: React.FC = () => (
  <section className="max-w-7xl mx-auto px-6 py-16">
    <div className="flex gap-12">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              Rayyan Ahmed Khan
            </h1>
            <p className="text-sm text-gray-700 leading-relaxed text-left">
              Software Engineer Intern @ Quantolio | Honours Mathematics & Computer Science @ McGill University
            </p>
          </div>

          <div className="space-y-3">
            <a 
              href="mailto:rayyankhan47@gmail.com"
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-black transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
            
            <a 
              href="https://github.com/rayyankhan47"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-black transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
            
            <a 
              href="https://linkedin.com/in/rayyankhan1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-black transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <div className="w-full max-w-2xl mb-8 overflow-hidden h-48">
              <img 
                src="/mathpic.png" 
                alt="Mathematics" 
                className="w-full h-full object-cover object-[73%_27%]"
              />
            </div>
            <h2 className="mb-4">👋🏽 Hi, I'm Rayyan Khan!</h2>
          </div>

          <div className="flex border-l-4 border-gray-400 pl-6 py-2 my-8">
            <blockquote className="italic text-gray-700 leading-relaxed">
              <strong>Mathematics</strong> is the queen of the sciences, and <strong>Number Theory</strong> is the queen of mathematics.
              <cite className="block text-sm text-gray-500 not-italic mt-2">— Carl Friedrich Gauss</cite>
            </blockquote>
          </div>

          {/* About Me Section */}
          <div className="space-y-6">
            <div>
              <h2 className="font-bold text-xl mb-2">About Me</h2>
              <div className="border-b border-gray-300 mb-4"></div>
              <div className="space-y-4">
                <h3 className="font-bold text-lg mb-2">🎓 Academic Background</h3>
                <p className="text-gray-700 leading-relaxed">
                  I hold a Diploma of College Studies in Health Sciences from <a href="https://www.dawsoncollege.qc.ca/">Dawson College</a>.
                  Here, I built a strong foundation in <b>problem-solving</b> and <b>critical thinking</b>, while especially developing a passion for
                  <b>community service</b> and <b>leadership</b>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Although I was initially interested in pursuing a career in medicine, I found a deep and sincere passion for <b>mathematics</b>,
                  which has changed the way I will forever view this beautiful and complex subject. My interests in mathematics currently lie
                  in <a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2007.07927">Algebraic Topology & Graph Theory</a> and <a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2510.26745">applications of Geometry to Large Language Models.</a>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I am currently pursuing a Bachelor of Science (B.Sc.) in Honours Computer Science and Mathematics at <a target="_blank" rel="noopener noreferrer" href="https://www.mcgill.ca/">McGill University</a>.
                  Hello.
                </p>
              </div>
            </div>

            {/* Affiliation Section */}
            <div>
              <h3 className="font-bold text-xl mb-2">Affiliation</h3>
              <div className="border-b border-gray-300 mb-4"></div>
              <div className="flex gap-6 flex-wrap">
                {/* Add your 4 logos here */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>
);

export default Home;
