import { ExternalLink } from "lucide-react";

interface WorkExperience {
  title: string;
  company: string;
  companyLink?: string;
  dates: string;
  description: string;
  technologies: string[];
}

const experiences: WorkExperience[] = [
  {
    title: "Software Developer Intern",
    company: "Quantolio",
    dates: "September 2025 – November 2025",
    description: "Working on HVAC smart AI applications.",
    technologies: ["TypeScript", "Next.js", "FastAPI", "PostgreSQL", "Docker", "AWS"],
  },
  {
    title: "Freelance Web Developer",
    company: "YULRentals",
    companyLink: "#",
    dates: "May 2025 – July 2025",
    description:
      "Contributed to the development of a full-stack car rental booking platform using MERN stack, implementing JWT authentication, an admin dashboard with CRUD operations, and a real-time booking system.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "ImageKit"],
  },
  {
    title: "MAIS 202 - Machine Learning Workshop",
    company: "McGill University",
    dates: "February 2025 – April 2025",
    description:
      "Participated in an 8-week intensive ML/AI workshop, learning about core Machine Learning principles, Neural Networks, and Convolutional Neural Networks.",
    technologies: ["Python", "scikit-learn", "TensorFlow"],
  },
];

const Work = () => {
  return (
    <section id="work" className="content-container py-8">
      <h2 className="section-title">Work & Experience</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Professional experience and notable projects I've contributed to.
      </p>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-l-2 border-border pl-4 pb-2"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
              <h3 className="font-sans text-base font-semibold text-foreground">
                {exp.title}
              </h3>
              <span className="text-sm text-primary font-mono whitespace-nowrap">
                {exp.dates}
              </span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium text-foreground">
                {exp.company}
              </span>
              {exp.companyLink && (
                <a
                  href={exp.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1"
                >
                  (view project)
                </a>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs font-mono px-2 py-1 bg-secondary text-secondary-foreground rounded border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
