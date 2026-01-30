import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  return (
    <footer className="content-container py-12 border-t border-border mt-8">
      <div className="flex flex-col items-center gap-6">
        <ThemeToggle />
        <p className="text-xs text-muted-foreground text-center font-mono">
          © {new Date().getFullYear()} Rayyan Ahmed Khan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
