import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { Menu, X, Home, User, FolderOpen, Wrench, Mail } from "lucide-react";
import { FloatingNav } from "./ui/floating-navbar";

const navItems = [
  { name: "About", link: "#about", icon: <User className="h-4 w-4" /> },
  { name: "Projects", link: "#projects", icon: <FolderOpen className="h-4 w-4" /> },
  { name: "Skills", link: "#skills", icon: <Wrench className="h-4 w-4" /> },
];

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useState(() => {
    scrollY.on("change", (v) => setScrolled(v > 50));
  });

  return (
    <>
      {/* Floating nav - appears on scroll (desktop) */}
      <FloatingNav navItems={navItems} />

      {/* Initial top navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-12 lg:px-24"
      >
        <motion.div
          className={`border px-5 py-2.5 flex items-center justify-between max-w-5xl mx-auto rounded-2xl transition-all duration-300 ${
            scrolled
              ? "glass-card border-border shadow-lg"
              : "border-transparent bg-transparent"
          }`}
        >
          <a href="#" className="font-display text-lg font-bold gradient-text tracking-tight">
            SA<span className="text-accent">.</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-primary/5"
              >
                {l.label}
              </a>
            ))}
            <div className="ml-3">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button onClick={() => setOpen(!open)} className="p-2 text-foreground rounded-lg hover:bg-primary/5 transition-colors">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.div>
      </motion.nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed top-16 left-4 right-4 glass-card border border-border p-3 flex flex-col gap-1 max-w-5xl mx-auto md:hidden rounded-2xl z-50"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2.5 rounded-lg hover:bg-primary/5"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
