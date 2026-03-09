import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Heart } from "lucide-react";
import CounterStat from "./CounterStat";

const qualities = [
  { icon: Code2, title: "Systems Thinker", desc: "I approach every project with architecture in mind — thinking about data flow, scalability, and long-term maintainability." },
  { icon: Palette, title: "Detail-Oriented", desc: "Clean code, meaningful naming, atomic commits. Small things compound into great software." },
  { icon: Zap, title: "Self-Driven Learner", desc: "Picked up React, TypeScript, and full-stack development by building real projects — not just watching tutorials." },
  { icon: Heart, title: "Open-Source Advocate", desc: "175+ GitHub contributions with Pull Shark, YOLO & Quickdraw achievements. I believe in building in public." },
];

const stats = [
  { value: 175, suffix: "+", label: "GitHub Contributions" },
  { value: 6, suffix: "+", label: "Technologies Mastered" },
  { value: 3, suffix: "+", label: "Projects Shipped" },
  { value: 1, suffix: "st", label: "Year & Already Building" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/50" />
            <p className="text-sm tracking-[0.2em] uppercase text-primary font-display">About</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 leading-tight">
            Building software that <span className="gradient-text">solves real problems</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            I'm Humna Mustafa — a first-year Software Engineering student at{" "}
            <span className="text-primary font-medium">COMSATS University Islamabad, Lahore Campus</span>. 
            While most students wait until later semesters to start building, I began shipping projects from day one. 
            I develop user-centered, end-to-end applications using{" "}
            <span className="text-primary font-medium">Java, C++, Python, React & TypeScript</span>, 
            and I'm deep-diving into design patterns, SOLID principles, and clean architecture. 
            My goal is simple: write software that's structured, testable, and impactful.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 py-10 px-8 glass-card border border-border"
        >
          {stats.map((s, i) => (
            <CounterStat key={s.label} {...s} delay={0.1 * i} />
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {qualities.map((q, i) => (
            <motion.div
              key={q.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card border border-border p-6 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <q.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{q.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{q.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
