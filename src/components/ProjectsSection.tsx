import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Flowboard",
    desc: "A real-time collaborative project management tool with drag-and-drop kanban boards, live cursors, and team chat.",
    tags: ["React", "TypeScript", "WebSockets", "PostgreSQL"],
    color: "from-primary/20 to-accent/10",
    featured: true,
  },
  {
    title: "PixelPerfect",
    desc: "AI-powered design-to-code tool that converts Figma files into production-ready React components.",
    tags: ["Next.js", "Python", "OpenAI", "Figma API"],
    color: "from-accent/20 to-primary/10",
    featured: true,
  },
  {
    title: "EcoTrack",
    desc: "Carbon footprint tracker with personalized sustainability recommendations and community challenges.",
    tags: ["React Native", "Node.js", "MongoDB"],
    color: "from-primary/15 to-accent/5",
    featured: false,
  },
  {
    title: "Synthwave",
    desc: "Open-source music visualization engine with WebGL shaders and real-time audio analysis.",
    tags: ["Three.js", "WebAudio", "GLSL"],
    color: "from-accent/15 to-primary/5",
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-display mb-3">Projects</p>
          <h2 className="text-3xl md:text-5xl font-bold font-display">
            Selected <span className="gradient-text">work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className={`glass-card border border-border overflow-hidden hover-lift group ${
                p.featured ? "md:col-span-1" : ""
              }`}
            >
              <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
                <span className="font-display text-2xl font-bold text-foreground/20 group-hover:text-foreground/30 transition-colors">
                  {p.title}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <div className="flex gap-2">
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {t}
                    </span>
                  ))}
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
