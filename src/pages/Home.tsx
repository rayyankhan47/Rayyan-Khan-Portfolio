import React from 'react';
import { FaPython, FaJava, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiHtml5, SiCss3, SiC, SiNextdotjs, SiExpress } from 'react-icons/si';

const Home: React.FC = () => (
  <section className="max-w-7xl mx-auto px-6 py-16">
    <div className="flex gap-12">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0">
        <div className="space-y-6">
          <div className="w-40 h-40 mx-auto overflow-hidden rounded-full">
            <img 
              src="/headshot.png" 
              alt="Rayyan Khan" 
              className="w-full h-full object-cover scale-110"
            />
          </div>
          
          <div>
            <h1 className="text-2xl font-bold mb-2">
              Rayyan Ahmed Khan
            </h1>
            <p className="text-sm text-gray-700 leading-relaxed text-left">
              SWE Intern @ Quantolio | Honours Mathematics & Computer Science @ McGill University | Montreal, Canada
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
            
            <a 
              href="https://youtube.com/@mathrayyan?si=EF1Eb5ZSRiG0WWMH"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-black transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </a>
          </div>

          {/* Technology Icons - Languages */}
          <div className="flex flex-wrap gap-3">
            <FaPython className="w-6 h-6 text-gray-700" title="Python" />
            <FaJava className="w-6 h-6 text-gray-700" title="Java" />
            <SiTypescript className="w-6 h-6 text-gray-700" title="TypeScript" />
            <FaDatabase className="w-6 h-6 text-gray-700" title="SQL" />
            <SiHtml5 className="w-6 h-6 text-gray-700" title="HTML" />
            <SiCss3 className="w-6 h-6 text-gray-700" title="CSS" />
            <SiC className="w-6 h-6 text-gray-700" title="C" />
          </div>

          {/* Technology Icons - Frameworks */}
          <div className="flex flex-wrap gap-3 pt-2">
            <FaReact className="w-6 h-6 text-gray-700" title="React" />
            <SiNextdotjs className="w-6 h-6 text-gray-700" title="Next.js" />
            <FaNodeJs className="w-6 h-6 text-gray-700" title="Node.js" />
            <SiExpress className="w-6 h-6 text-gray-700" title="Express.js" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="mb-4">👋🏽 Hi, I'm Rayyan!</h2>
          </div>

          <div className="mb-6 flex flex-col items-start">
            <img 
              src="/csbros.png" 
              alt="CS buddies in Toronto" 
              className="max-w-2xl w-full rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-600 mt-3 italic">
              Me (blue shirt) and some CS buddies in my favourite city, Toronto, post-hackathon
            </p>
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
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1 h-6 bg-gray-400"></div>
                  <h3 className="font-bold text-lg">🎓 Academic Background</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  I hold a Diploma of College Studies in Health Sciences from <a href="https://www.dawsoncollege.qc.ca/">Dawson College</a>.
                  Here, I built a strong foundation in <b>problem-solving</b> and <b>critical thinking</b>, while especially developing a passion for <b>community service</b>, <b>leadership</b>, and <b>education advocacy</b>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Although I was initially interested in pursuing a career in medicine, I found a deep and sincere passion for <b>mathematics</b>,
                  which has changed the way I will forever view this beautiful and complex subject. My interests in mathematics currently lie
                  in <a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2007.07927">Algebraic Topology & Graph Theory</a> and <a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2510.26745">applications of Geometry to Large Language Models.</a>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Although I have a strong passion for the above, I have also ended up finding a strong interest in <b>computer science</b>,
                  and have especially been exploring the worlds of <b>machine learning</b> and <b>software engineering</b>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I am currently pursuing a Bachelor of Science (B.Sc.) in Honours Computer Science and Mathematics at <a target="_blank" rel="noopener noreferrer" href="https://www.mcgill.ca/">McGill University</a>, with an expected graduation date of May 2028. 
                </p>
                <p className="text-gray-700 leading-relaxed">
                I am also currently working as a Software Engineer Intern at <a target="_blank" rel="noopener noreferrer" href="https://www.thermolio.com/">Quantolio</a>, where I am working on HVAC smart AI applications with a Next.js, TypeScript, FastAPI, Docker, and AWS tech stack.
                </p>

                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1 h-6 bg-gray-400"></div>
                  <h3 className="font-bold text-lg">🎤 Education Advocacy Initiatives</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Ever since 2020, I have been extremely passionate about advocating for the importance of education, and have had the wonderful opportunity to be involved in various initiatives to help spread this message:
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4 mt-3">
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=3QA8cwoKIoY"><b>The Mindful Students Podcast (2023)</b></a>: A podcast interview with Qasim Mughal, a second year medical student at McGill University, where we discussed his academic path towards medicine.
                    </li>
                    <li>
                      <b>High School To College Workshop (2023)</b>: A friend and I organized workshops for high school students at our alma mater to help them prepare for the Québec collegiate (CÉGEP) experience.
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/muslimyouthspace_uarr/"><b>UARR Muslim Youth Space (2021)</b></a>: I was fortunate enough to be selected as a workshop speaker, alongside peers, and present a topic of our choice.
                      Our topic was "The Importance of Education Through the Islamic Perspective", where I had the opportunity to share my personal journey from being an underperforming and uninterested student to a successful and passionate one through my faith.
                    </li>
                  </ul>
                </p>

                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1 h-6 bg-gray-400"></div>
                  <h3 className="font-bold text-lg">🎨 Personal Endeavours & Hobbies</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  When I'm not working or studying, I enjoy:
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4 mt-3">
                    <li>
                      <b>Learning about LLMs</b>: My particular interests in AI either lie in applications of AI & robotics, or otherwise (and more significantly) in Large Language Models. I'm currently trying to rebuild GPT-2's 124M model from scratch for pedagogical purposes, inspired by Andrej Karpathy's playlist titled <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ&si=H61Jul5CuI6pO7eh">"Neural Networks: Zero to Hero"</a>.
                    </li>
                    <li>
                      <b>Content Creation</b>: I have been creating content on several YouTube channels ever since 2015, and as of <b>October 2025</b>, I have been recording my progress while I try to become a successful and skilled programmer, <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/playlist?list=PLHgYCxmJQu-cUsrloeCrLjIdlR2_yksf1&si=p_cBXQ8BkybhWLZ3">which you can watch here</a>. 
                    </li>
                    <li>
                      <b>Reading Math & CS books/papers</b>: I enjoy reading books and papers about mathematics and computer science, and I'm currently reading <i><b><a target="_blank" rel="noopener noreferrer" href="http://abstract.ups.edu/">Abstract Algebra: Theory and Applications</a></b> by Thomas W. Judson</i>, and <i><b><a target="_blank" rel="noopener noreferrer" href="https://www.akkadia.org/drepper/cpumemory.pdf">What Every Programmer Should Know About Memory</a></b> by Ulrich Drepper</i>.
                    </li>
                  </ul>
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-6 bg-gray-400"></div>
                  <h3 className="font-bold text-lg">👥 Leadership, Service, and Engagement</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-bold text-gray-700">Role</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-bold text-gray-700">Affiliation</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-bold text-gray-700">Dates of Service</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 text-gray-700">
                          Director of Prayer
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-gray-700">Muslim Student Assocation of McGill University</td>
                        <td className="border border-gray-300 px-4 py-2 text-gray-700">Sept 2025 – Present</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 text-gray-700">
                          Volunteer Tutor (Math, Physics, Chemistry)
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-gray-700">Dawson College</td>
                        <td className="border border-gray-300 px-4 py-2 text-gray-700">Dec 2023 – May 2024</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 text-gray-700">
                          Vice-President (Formerly Secretary, Social Media Manager)
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-gray-700">Muslim Student Association of Dawson College</td>
                        <td className="border border-gray-300 px-4 py-2 text-gray-700">Sep 2022 – Jan 2024</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 text-gray-700">
                          President
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-gray-700">Best Buddies Canada, Dawson College Branch</td>
                        <td className="border border-gray-300 px-4 py-2 text-gray-700">Aug 2023 – May 2024</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>
);

export default Home;
