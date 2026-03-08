import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const Footer = () => (
<footer className="relative overflow-hidden">
    {/* Bottom bar */}
    <div className="px-6 py-8 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <a href="#" className="font-display text-lg font-bold gradient-text">SA<span className="text-accent">.</span></a>
          <span className="hidden md:inline text-border">|</span>
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Sarah Anderson. Crafted with precision.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {[
            { icon: Github, label: "GitHub" },
            { icon: Linkedin, label: "LinkedIn" },
            { icon: Twitter, label: "Twitter" },
          ].map(({ icon: Icon, label }) => (
            <motion.a
              key={label}
              href="#"
              whileHover={{ y: -2 }}
              className="p-2.5 rounded-xl text-muted-foreground/60 hover:text-foreground hover:bg-primary/5 transition-colors"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
