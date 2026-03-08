import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Code, Rocket, Award } from "lucide-react";

const timeline = [
  {
    year: "2025",
    title: "Started BS Software Engineering",
    org: "COMSATS University Islamabad, Lahore Campus",
    description: "Enrolled in one of Pakistan's top CS programs. Hit the ground running — started coding production projects from week one, not just assignments.",
    icon: GraduationCap,
    type: "education" as const,
  },
  {
    year: "2025",
    title: "First Open-Source Contributions",
    org: "GitHub · Pull Shark · YOLO · Quickdraw",
    description: "Earned GitHub Pro status and multiple developer achievements. Built a consistent contribution habit — 175+ contributions and counting.",
    icon: Code,
    type: "career" as const,
  },
  {
    year: "2025",
    title: "Launched CitizenConnect",
    org: "Full-Stack Civic Tech Platform",
    description: "Designed, built, and shipped a government-citizen communication platform from scratch. Now serves 500+ active users with real-time features and role-based access.",
    icon: Briefcase,
    type: "career" as const,
  },
  {
    year: "2025",
    title: "Published on Medium — 10K+ Readers",
    org: "Technical Writing",
    description: "Wrote a data-driven guide on cracking COMSATS admissions that went viral among Pakistani students. Proved that I communicate as well as I code.",
    icon: Award,
    type: "career" as const,
  },
  {
    year: "2026",
    title: "Built PakUni — University Discovery Platform",
    org: "React · Node.js · REST APIs",
    description: "Created Pakistan's most comprehensive university comparison tool — 200+ institutions, advanced search, and personalized recommendations. Solving a real gap in EdTech.",
    icon: Rocket,
    type: "career" as const,
  },
  {
    year: "2026",
    title: "Mastered Design Patterns & Clean Architecture",
    org: "COMSATS University · SP26-OOP",
    description: "Deep-dived into enterprise-grade OOP — SOLID principles, Gang of Four patterns, and clean architecture in Java & C++. Building the engineering foundation that scales.",
    icon: Code,
    type: "education" as const,
  },
];


const TimelineSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="section-padding relative" ref={ref}>
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
            The <span className="gradient-text">story so far</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
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
                {/* Content card */}
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

                {/* Center icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center border-2 bg-primary/10 border-primary/30 text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                </div>

                {/* Spacer for other side */}
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
