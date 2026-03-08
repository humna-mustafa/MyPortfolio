import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="px-6 py-12 md:px-12 lg:px-24 border-t border-border">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © 2026 Sarah Anderson. Built with passion & code.
      </p>
      <div className="flex items-center gap-4">
        {[Github, Linkedin, Twitter].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
