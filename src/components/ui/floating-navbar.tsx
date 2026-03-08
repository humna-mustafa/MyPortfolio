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
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);
      setScrolled(scrollYProgress.get() > 0.02);
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
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
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-4 inset-x-0 mx-auto z-[5000] px-4 md:px-6 w-full max-w-6xl",
          className
        )}
      >
        <motion.div
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500",
            scrolled
              ? "border border-border bg-background/80 backdrop-blur-2xl shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.12),0_2px_12px_-4px_hsl(0_0%_0%/0.06)]"
              : "border border-transparent bg-transparent"
          )}
        >
          {/* Logo */}
          <a
            href="#"
            className="font-display text-xl font-bold gradient-text tracking-tight shrink-0 hover:opacity-80 transition-opacity"
          >
            SA<span className="text-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5">
            <div className="relative flex items-center bg-muted/60 rounded-xl p-1 mr-3">
              {navItems.map((navItem, idx) => (
                <a
                  key={`nav-${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative z-10 px-5 py-2 text-sm font-medium transition-colors duration-300 rounded-lg",
                    activeSection === navItem.link
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {navItem.name}
                  {activeSection === navItem.link && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-lg bg-background shadow-[0_1px_3px_0_rgb(0_0_0/0.1),0_1px_2px_-1px_rgb(0_0_0/0.1)] border border-border"
                      style={{ zIndex: -1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className={cn(
                "relative rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
                activeSection === "#contact"
                  ? "bg-primary text-primary-foreground shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.5)]"
                  : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_4px_16px_-4px_hsl(var(--primary)/0.35)]"
              )}
            >
              Contact
            </a>

            <div className="ml-3 pl-3 border-l border-border/50">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Nav */}
          <div className="flex md:hidden items-center gap-0.5">
            <div className="relative flex items-center bg-muted/60 rounded-lg p-0.5 mr-2">
              {navItems.map((navItem, idx) => (
                <a
                  key={`nav-m-${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative z-10 px-3 py-1.5 text-xs font-medium transition-colors duration-300 rounded-md",
                    activeSection === navItem.link
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {navItem.name}
                  {activeSection === navItem.link && (
                    <motion.div
                      layoutId="active-pill-mobile"
                      className="absolute inset-0 rounded-md bg-background shadow-[0_1px_3px_0_rgb(0_0_0/0.1),0_1px_2px_-1px_rgb(0_0_0/0.1)] border border-border"
                      style={{ zIndex: -1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="rounded-lg bg-primary text-primary-foreground px-3 py-1.5 text-xs font-semibold hover:bg-primary/90 transition-all shadow-sm"
            >
              Contact
            </a>
            <div className="ml-1">
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
