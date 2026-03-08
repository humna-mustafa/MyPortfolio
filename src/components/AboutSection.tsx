import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Heart } from "lucide-react";
import CounterStat from "./CounterStat";

const qualities = [
  { icon: Code2, title: "Full Stack Dev", desc: "Building end-to-end user-centered applications with modern technologies." },
  { icon: Palette, title: "Problem Solver", desc: "Transforming complex challenges into elegant, efficient software solutions." },
  { icon: Zap, title: "Fast Learner", desc: "Continuously exploring emerging technologies and adapting to new tools." },
  { icon: Heart, title: "Team Player", desc: "Collaborating effectively to deliver impactful projects on time." },
];

const stats = [
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 175, suffix: "+", label: "GitHub Contributions" },
  { value: 4, suffix: "+", label: "Languages" },
  { value: 100, suffix: "%", label: "Dedication" },
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
            Building solutions<br />
            <span className="gradient-text">with purpose</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            I'm a Software Engineering student at COMSATS University Islamabad, Lahore Campus,
            focused on developing end-to-end user-centered applications. I work with
            Java, C++, Python, and modern web technologies to build impactful solutions
            that solve real-world problems.
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
