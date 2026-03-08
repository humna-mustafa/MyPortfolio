import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import ThemeToggle from "../ThemeToggle";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0 ? true : false);
      }
    }
  });

  useEffect(() => {
    const sectionIds = [...navItems.map((item) => item.link.replace("#", "")), "contact"];

    const handleScroll = () => {
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
            current = `#${id}`;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={cn(
          "fixed top-4 inset-x-0 mx-auto z-[5000] px-4 md:px-8 w-full max-w-5xl",
          className
        )}
      >
        <motion.div
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-between border border-border rounded-2xl bg-background/70 backdrop-blur-xl shadow-[0_4px_30px_-8px_hsl(var(--primary)/0.15)] px-6 py-2.5"
        >
          <a href="#" className="font-display text-lg font-bold gradient-text tracking-tight shrink-0">
            SA<span className="text-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((navItem, idx) => (
              <a
                key={`nav-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                  activeSection === navItem.link
                    ? "text-foreground bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                )}
              >
                {navItem.name}
                {activeSection === navItem.link && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-lg bg-primary/10 -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <a
              href="#contact"
              className={cn(
                "relative rounded-lg border px-5 py-2 text-sm font-medium transition-colors ml-1",
                activeSection === "#contact"
                  ? "border-primary bg-primary text-primary-foreground ring-2 ring-primary/30"
                  : "border-border bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              Contact
            </a>
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Nav */}
          <div className="flex md:hidden items-center gap-1">
            {navItems.map((navItem, idx) => (
              <a
                key={`nav-m-${idx}`}
                href={navItem.link}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium transition-colors rounded-lg",
                  activeSection === navItem.link
                    ? "text-foreground bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {navItem.name}
              </a>
            ))}
            <a
              href="#contact"
              className={cn(
                "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                activeSection === "#contact"
                  ? "bg-primary text-primary-foreground ring-2 ring-primary/30"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              Contact
            </a>
            <ThemeToggle />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
