import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Heart } from "lucide-react";
import CounterStat from "./CounterStat";

const qualities = [
  { icon: Code2, title: "Systems Thinker", desc: "Designing scalable architectures from database schema to pixel-perfect UI." },
  { icon: Palette, title: "Product-Minded", desc: "Every line of code serves a user need. I ship features, not just functions." },
  { icon: Zap, title: "High Velocity", desc: "Rapid prototyping to production. I learn fast, build faster, iterate fastest." },
  { icon: Heart, title: "Open Source Advocate", desc: "175+ contributions. I believe in building in public and giving back." },
];

const stats = [
  { value: 10, suffix: "+", label: "Production Projects" },
  { value: 175, suffix: "+", label: "GitHub Contributions" },
  { value: 6, suffix: "+", label: "Languages & Frameworks" },
  { value: 3, suffix: "", label: "Platforms Shipped" },
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
            <p className="text-sm tracking-[0.2em] uppercase text-primary font-display">About Me</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 leading-tight">
            Engineering software<br />
            <span className="gradient-text">that matters</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            I don't just study software engineering — I <span className="text-primary font-medium">ship it</span>. 
            From civic-tech platforms serving real communities to developer tools used by peers across Pakistan, 
            I build end-to-end systems with Java, TypeScript, React, and Node.js. 
            My code is clean, my commits are atomic, and my PRs tell a story.
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
