import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => setDark(!dark)}
      className="relative p-2.5 rounded-full glass-card border border-border"
      aria-label="Toggle theme"
    >
      <Sun className={`h-4 w-4 transition-all ${dark ? "scale-0 rotate-90 opacity-0 absolute" : "scale-100 rotate-0"} text-foreground`} />
      <Moon className={`h-4 w-4 transition-all ${dark ? "scale-100 rotate-0" : "scale-0 -rotate-90 opacity-0 absolute"} text-foreground`} />
    </motion.button>
  );
};

export default ThemeToggle;
