import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Heart } from "lucide-react";

const qualities = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable solutions" },
  { icon: Palette, title: "Design Eye", desc: "Bridging design and development seamlessly" },
  { icon: Zap, title: "Performance", desc: "Optimizing for speed and user experience" },
  { icon: Heart, title: "Passion", desc: "Deeply invested in every project I build" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding mesh-bg" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-display mb-3">About Me</p>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Crafting digital experiences<br />
            <span className="gradient-text">with purpose</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            I'm a software engineer with 5+ years of experience building
            full-stack applications. I specialize in React, TypeScript, and
            modern web technologies. I love transforming complex problems
            into simple, beautiful, and intuitive solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {qualities.map((q, i) => (
            <motion.div
              key={q.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="glass-card border border-border p-6 hover-lift group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <q.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-1">{q.title}</h3>
              <p className="text-sm text-muted-foreground">{q.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
