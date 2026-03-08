import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Flowboard",
    desc: "A real-time collaborative project management tool with drag-and-drop kanban boards, live cursors, and team chat.",
    tags: ["React", "TypeScript", "WebSockets", "PostgreSQL"],
    year: "2025",
    category: "Full-Stack",
  },
  {
    title: "PixelPerfect",
    desc: "AI-powered design-to-code tool that converts Figma files into production-ready React components.",
    tags: ["Next.js", "Python", "OpenAI", "Figma API"],
    year: "2024",
    category: "AI / ML",
  },
  {
    title: "EcoTrack",
    desc: "Carbon footprint tracker with personalized sustainability recommendations and community challenges.",
    tags: ["React Native", "Node.js", "MongoDB"],
    year: "2024",
    category: "Mobile",
  },
  {
    title: "Synthwave",
    desc: "Open-source music visualization engine with WebGL shaders and real-time audio analysis.",
    tags: ["Three.js", "WebAudio", "GLSL"],
    year: "2023",
    category: "Creative",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
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
              Selected <span className="gradient-text">work</span>
            </h2>
            <p className="text-muted-foreground text-sm hidden md:block">
              {projects.length} featured projects
            </p>
          </div>
        </motion.div>

        {/* Project list - editorial style */}
        <div className="space-y-0">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group cursor-hover border-t border-border last:border-b"
            >
              <div className="flex items-center justify-between py-8 md:py-10 px-2 transition-all duration-300 group-hover:px-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-xs font-display text-muted-foreground/60 tracking-wider uppercase">{p.year}</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full border border-border text-muted-foreground font-display">{p.category}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold group-hover:gradient-text transition-all duration-300">{p.title}</h3>
                  <motion.div
                    initial={false}
                    animate={{ height: hoveredIdx === i ? "auto" : 0, opacity: hoveredIdx === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-muted-foreground mt-3 max-w-lg leading-relaxed">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{t}</span>
                      ))}
                    </div>
                  </motion.div>
                </div>
                <div className="flex items-center gap-3 ml-6">
                  <motion.div
                    animate={{ rotate: hoveredIdx === i ? 0 : -45, scale: hoveredIdx === i ? 1 : 0.8, opacity: hoveredIdx === i ? 1 : 0.4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className="h-6 w-6 text-primary" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
