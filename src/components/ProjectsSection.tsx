import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import citizenConnectImg from "@/assets/project-citizenconnect.jpg";

import sp26OopImg from "@/assets/project-sp26oop.jpg";

const projects = [
  {
    title: "CitizenConnect",
    desc: "A full-stack civic engagement platform built as a university course project. Features role-based authentication, real-time communication, and an analytics dashboard. My first complete full-stack application — designed, built, and polished from scratch.",
    tags: ["React", "TypeScript", "Firebase", "Full Stack"],
    year: "2025",
    category: "Course Project",
    color: "from-primary/20 to-accent/10",
    number: "01",
    link: "https://github.com/humna-mustafa/citizenconnect",
    image: citizenConnectImg,
  },
  {
    title: "SP26-OOP",
    desc: "A comprehensive collection of OOP implementations exploring SOLID principles, Gang of Four design patterns, and clean architecture in Java & C++. Not just assignments — a personal deep-dive into writing software that's structured, testable, and maintainable.",
    tags: ["Java", "C++", "Design Patterns", "Clean Architecture"],
    year: "2026",
    category: "Engineering",
    color: "from-primary/15 to-accent/15",
    number: "02",
    link: "https://github.com/humna-mustafa/SP26-OOP",
    image: sp26OopImg,
  },
  {
    title: "Personal Portfolio",
    desc: "The site you're looking at right now. Built from scratch with React, TypeScript, and Framer Motion — custom 3D scene, smooth animations, dark/light themes, and responsive design. No templates, no shortcuts.",
    tags: ["React", "TypeScript", "Framer Motion", "Tailwind"],
    year: "2026",
    category: "Personal",
    color: "from-accent/20 to-primary/10",
    number: "03",
    link: "https://github.com/humna-mustafa",
    image: citizenConnectImg,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/50" />
            <p className="text-sm tracking-[0.2em] uppercase text-primary font-display">Projects</p>
          </div>
          <div className="flex items-end justify-between">
            <h2 className="text-3xl md:text-5xl font-bold font-display">
              Things I've <span className="gradient-text">built</span>
            </h2>
            <p className="text-muted-foreground text-sm hidden md:block">
              {projects.length} featured projects
            </p>
          </div>
        </motion.div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group cursor-pointer relative block"
            >
              <div className={`relative overflow-hidden rounded-2xl border border-border transition-all duration-500 ${hoveredIdx === i ? 'border-primary/30 shadow-[0_0_40px_-15px_hsl(var(--primary)/0.2)]' : 'hover:border-border/80'}`}>
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${p.color} opacity-0 transition-opacity duration-500`}
                  animate={{ opacity: hoveredIdx === i ? 1 : 0 }}
                />

                <div className="relative flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="relative w-full md:w-72 lg:w-80 shrink-0 overflow-hidden">
                    <motion.img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-48 md:h-full object-cover"
                      animate={{ scale: hoveredIdx === i ? 1.05 : 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden md:block" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex items-center justify-between p-5 md:p-8 gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-display text-muted-foreground/60 tracking-wider uppercase">{p.year}</span>
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full border border-primary/20 text-primary/80 font-display uppercase tracking-wider">{p.category}</span>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl font-bold group-hover:gradient-text transition-all duration-300">{p.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 max-w-lg leading-relaxed">{p.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {p.tags.map((t) => (
                          <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/10">{t}</span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center shrink-0">
                      <motion.div
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300"
                        animate={{ rotate: hoveredIdx === i ? 0 : -45 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
