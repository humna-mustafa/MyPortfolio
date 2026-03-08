import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { FileText } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import logoSvg from "@/assets/logo.svg";

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

  const allItems = navItems;

  useEffect(() => {
    const sectionIds = allItems.map((item) => item.link.replace("#", ""));

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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    const el = document.getElementById(link.replace("#", ""));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-4 inset-x-0 mx-auto z-[5000] px-4 md:px-6 w-full max-w-5xl",
          className
        )}
      >
        <motion.div
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500",
            "border border-border bg-background/85 backdrop-blur-2xl shadow-[0_8px_32px_-8px_hsl(0_0%_0%/0.08)]"
          )}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="shrink-0 hover:opacity-80 transition-opacity"
          >
            <img src={logoSvg} alt="HM Logo" className="h-9 w-9 rounded-full" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {allItems.map((navItem, idx) => (
              <a
                key={`nav-${idx}`}
                href={navItem.link}
                onClick={(e) => handleClick(e, navItem.link)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg",
                  activeSection === navItem.link
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {navItem.name}
                {activeSection === navItem.link && (
                  <motion.div
                    layoutId="active-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </a>
            ))}

            <div className="ml-2 pl-2 border-l border-border">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Nav */}
          <nav className="flex md:hidden items-center gap-0.5">
            {allItems.map((navItem, idx) => (
              <a
                key={`nav-m-${idx}`}
                href={navItem.link}
                onClick={(e) => handleClick(e, navItem.link)}
                className={cn(
                  "relative px-2.5 py-1.5 text-xs font-medium transition-colors duration-200 rounded-md",
                  activeSection === navItem.link
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {navItem.name}
                {activeSection === navItem.link && (
                  <motion.div
                    layoutId="active-underline-mobile"
                    className="absolute bottom-0 left-1 right-1 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </a>
            ))}
            <div className="ml-1">
              <ThemeToggle />
            </div>
          </nav>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
