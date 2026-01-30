import { Mail, Github, Linkedin, Youtube } from "lucide-react";
import thebrosImage from "@/assets/thebros.png";

const Bio = () => {
  return (
    <section className="content-container py-8">
      <p className="text-lg leading-relaxed text-foreground mb-6">
        Hi! I'm a computer science student interested in <strong className="font-medium">machine learning</strong> and{" "}
        <strong className="font-medium">startup ventures</strong>.
      </p>

      <figure className="mb-6">
        <img
          src={thebrosImage}
          alt="Me and my friends at a hackathon"
          className="w-full rounded-md border border-border"
        />
        <figcaption className="mt-2 text-sm text-muted-foreground text-center">
          My friends and I (2nd from the left) winning a hackathon
        </figcaption>
      </figure>

      <p className="text-base leading-relaxed text-muted-foreground mb-6">
        I'm currently pursuing my B.Sc. at{" "}
        <a href="#" className="link-underline text-foreground">
          McGill University
        </a>
        , in Honours Mathematics & Computer Science, and I'm working on my own startup ventures. I'm also interested in ML/DL research.
      </p>

      <p className="text-base leading-relaxed text-muted-foreground mb-8">
        I'm always open to research collaborations and startup opportunities. Feel free to reach out!
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <a
          href="mailto:ryankhann47@gmail.com"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span>ryankhann[at]gmail[dot]com</span>
        </a>
        <a
          href="https://github.com/rayyankhan47"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/rayyankhan1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://www.youtube.com/@MathRayyan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Youtube className="w-4 h-4" />
          <span>YouTube</span>
        </a>
      </div>
    </section>
  );
};

export default Bio;
