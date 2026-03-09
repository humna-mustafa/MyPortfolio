import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Code, Rocket, Award } from "lucide-react";

const timeline = [
  {
    year: "2025",
    title: "Enrolled in BS Software Engineering",
    org: "COMSATS University Islamabad, Lahore Campus",
    description: "Started my formal engineering education at one of Pakistan's top universities. Instead of waiting for the curriculum, I began building real projects from week one.",
    icon: GraduationCap,
    type: "education" as const,
  },
  {
    year: "2025",
    title: "Earned GitHub Achievements",
    org: "Pull Shark · YOLO · Quickdraw",
    description: "Began contributing to open source consistently — earning multiple GitHub achievements through quality pull requests and active collaboration. 175+ contributions and counting.",
    icon: Code,
    type: "career" as const,
  },
  {
    year: "2025",
    title: "Shipped CitizenConnect",
    org: "React · TypeScript · Full Stack",
    description: "Built a civic engagement platform from scratch with role-based auth, real-time features, and an analytics dashboard. My first production-ready full-stack application.",
    icon: Briefcase,
    type: "career" as const,
  },
  {
    year: "2025",
    title: "Published First Article on Medium",
    org: "Technical Writing · 10K+ Readers",
    description: "Wrote a strategic guide on cracking COMSATS admissions that reached thousands of students. My first step into sharing knowledge through writing.",
    icon: Award,
    type: "career" as const,
  },
  {
    year: "2026",
    title: "Deep-Diving into Design Patterns",
    org: "SOLID · Gang of Four · Clean Architecture",
    description: "Going beyond syntax — studying design patterns and architectural principles in Java & C++ to build the engineering mindset that outlasts any framework.",
    icon: Code,
    type: "education" as const,
  },
  {
    year: "2026",
    title: "Launched This Portfolio",
    org: "React · TypeScript · Framer Motion",
    description: "Designed and developed this portfolio from scratch — no templates. Custom animations, 3D visuals, and a personal brand built to reflect my engineering identity.",
    icon: Rocket,
    type: "career" as const,
  },
];

const TimelineSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/50" />
            <p className="text-sm tracking-[0.2em] uppercase text-primary font-display">Journey</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display">
            My <span className="gradient-text">Path So Far</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 md:-translate-x-px" />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 * i, duration: 0.5 }}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ml-16 md:ml-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/40 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.15)] transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? "md:justify-end" : ""}`}>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-display tracking-wider uppercase bg-primary/10 text-primary border border-primary/20`}>
                          {item.type}
                        </span>
                        <span className="text-xs text-muted-foreground/60 font-display">{item.year}</span>
                      </div>
                      <h3 className="font-display text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-primary/70 font-display mb-2">{item.org}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center border-2 bg-primary/10 border-primary/30 text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
