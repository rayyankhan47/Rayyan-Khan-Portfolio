import { Mail, FileText, Github, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <header className="content-container py-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-medium text-foreground">Rayyan Khan</h1>
          <p className="text-sm text-muted-foreground font-mono">CS & ML</p>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Work
          </a>
          <a href="#activities" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Activities
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
