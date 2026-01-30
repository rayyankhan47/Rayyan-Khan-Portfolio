import { ExternalLink, Star } from "lucide-react";

interface Project {
  title: string;
  description: string;
  language?: string;
  stars?: number;
  link: string;
}

// Pinned projects from GitHub (rayyankhan47) in order
const projects: Project[] = [
  {
    title: "Blockbase",
    description: "Minecraft meets Git. CodeJam15 Hackathon Winner!",
    language: "Java",
    stars: 53,
    link: "https://github.com/rayyankhan47/Blockbase",
  },
  {
    title: "Tesseract",
    description: "Cursor meets Minecraft. Hackathon submission for McHacks 13.",
    language: "Java",
    stars: 3,
    link: "https://github.com/rayyankhan47/Tesseract",
  },
  {
    title: "grid-heist",
    description: "Orchestrating multiple LLMs to compete against each other. Complex multi-agent reasoning in real-time using Backboard.io.",
    language: "Python",
    link: "https://github.com/rayyankhan47/grid-heist",
  },
  {
    title: "makemore",
    description: "A character-level language model that trains on a dataset of words of a given category, and produces more like them.",
    language: "Jupyter Notebook",
    link: "https://github.com/rayyankhan47/makemore",
  },
  {
    title: "Navvi",
    description: "An AI onboarding tool for new developers and interns. Submission for SpurHacks 2025.",
    language: "TypeScript",
    link: "https://github.com/rayyankhan47/Navvi",
  },
  {
    title: "micrograd",
    description: "Building micrograd from scratch. Micrograd is an autograd engine that implements backpropagation and has a small neural net library built on top of it.",
    language: "Python",
    link: "https://github.com/rayyankhan47/micrograd",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="content-container py-8">
      <h2 className="section-title">Selected Projects</h2>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card block group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-mono text-base font-medium text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  {project.language && (
                    <span className="text-xs font-mono text-muted-foreground">
                      {project.language}
                    </span>
                  )}
                  {project.stars && project.stars > 0 && (
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="w-3 h-3" />
                      {project.stars}
                    </span>
                  )}
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
