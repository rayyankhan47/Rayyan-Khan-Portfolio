import React from 'react';

const About: React.FC = () => (
  <section className="max-w-4xl mx-auto px-6 py-16">
    <div className="space-y-12">
      <div>
        <h1 className="mb-8">About</h1>
        
        <div className="prose prose-lg max-w-none space-y-4">
          <p className="text-gray-700 leading-relaxed">
            I'm Rayyan, a Computer Science student with a passion for building modern web applications, 
            exploring startups, and diving into full-stack and machine learning projects. I thrive on 
            learning new technologies and collaborating with others to create impactful solutions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Currently, I'm focused on developing scalable applications using modern frameworks and 
            exploring the intersection of web development and machine learning.
          </p>
        </div>
      </div>

      <div>
        <h2 className="mb-6">Research Interests</h2>
        <div className="prose prose-lg max-w-none space-y-4">
          <p className="text-gray-700 leading-relaxed">
            My academic interests lie at the intersection of pure mathematics and machine learning. 
            I'm particularly fascinated by:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>Pure Mathematics:</strong> Graph theory and algebraic topology, especially their 
              applications to understanding complex systems and network structures
            </li>
            <li>
              <strong>Machine Learning:</strong> Deep learning architectures, with a focus on understanding 
              the theoretical foundations and practical implementations
            </li>
            <li>
              <strong>Natural Language Processing:</strong> Large Language Models (LLMs) and transformer 
              architecture, exploring how attention mechanisms can be understood through a mathematical lens
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            I'm excited about exploring how mathematical structures can inform machine learning design, 
            and how computational approaches can provide insights into abstract mathematical problems.
          </p>
        </div>
      </div>

      <div>
        <h2 className="mb-6">Technical Skills</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'TypeScript', 'Java', 'SQL', 'C', 'HTML', 'CSS'].map((lang) => (
                <span key={lang} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'React', 'Next.js', 'Node.js', 'Express', 'Spring Boot',
                'MongoDB', 'PostgreSQL', 'PyTorch', 'TensorFlow', 'scikit-learn'
              ].map((fw) => (
                <span key={fw} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded">
                  {fw}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['AWS', 'Docker', 'Git', 'Postman'].map((tool) => (
                <span key={tool} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-6">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">McGill University</h3>
            <p className="text-gray-600 text-sm">Bachelor of Science in Computer Science</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
