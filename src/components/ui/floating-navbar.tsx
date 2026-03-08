import React, { useState } from "react";
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
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

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

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={cn(
          "fixed top-4 inset-x-0 mx-auto z-[5000] w-[90%] max-w-3xl",
          className
        )}
      >
        <motion.div
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-between border border-border rounded-2xl bg-background/70 backdrop-blur-xl shadow-[0_4px_30px_-8px_hsl(var(--primary)/0.15)] px-5 py-2.5"
        >
          {/* Logo */}
          <a href="#" className="font-display text-lg font-bold gradient-text tracking-tight shrink-0">
            SA<span className="text-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((navItem, idx) => (
              <a
                key={`nav-${idx}`}
                href={navItem.link}
                className="relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-primary/5"
              >
                <span>{navItem.name}</span>
              </a>
            ))}
            <a
              href="#contact"
              className="relative rounded-lg border border-border bg-primary text-primary-foreground px-5 py-2 text-sm font-medium hover:bg-primary/90 transition-colors ml-1"
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
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {navItem.icon}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-lg bg-primary text-primary-foreground px-3 py-1.5 text-xs font-medium hover:bg-primary/90 transition-colors"
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
