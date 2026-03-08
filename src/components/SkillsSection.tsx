// @ts-nocheck
import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Code2, Server, Wrench, Zap, TrendingUp, Award, Coffee, Rocket } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5 text-primary" />,
    skills: [
      { name: "Java", level: 90 },
      { name: "C++", level: 85 },
      { name: "C", level: 80 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "TypeScript", level: 70 },
    ],
  },
  {
    title: "Web & Frameworks",
    icon: <Server className="w-5 h-5 text-primary" />,
    skills: [
      { name: "React", level: 75 },
      { name: "Node.js", level: 70 },
      { name: "HTML/CSS", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "REST APIs", level: 78 },
      { name: "SQL / Databases", level: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-5 h-5 text-primary" />,
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code", level: 90 },
      { name: "Linux", level: 75 },
      { name: "Figma", level: 70 },
      { name: "Firebase", level: 72 },
      { name: "Docker", level: 65 },
    ],
  },
];

const stats = [
  { value: 6, suffix: "+", label: "Languages", icon: <Zap className="w-4 h-4" /> },
  { value: 175, suffix: "+", label: "Contributions", icon: <TrendingUp className="w-4 h-4" /> },
  { value: 10, suffix: "+", label: "Projects", icon: <Award className="w-4 h-4" /> },
  { value: 100, suffix: "%", label: "Dedication", icon: <Rocket className="w-4 h-4" /> },
];

const philosophyItems = [
  { title: "Ship Fast, Ship Right", desc: "Speed without sacrificing quality" },
  { title: "User-Obsessed", desc: "Every feature solves a real problem" },
  { title: "Test Everything", desc: "If it's not tested, it's not done" },
  { title: "Learn in Public", desc: "Open source, articles, and mentorship" },
];

const MiniOrb = ({ color }) => {
  const ref = useRef(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.4;
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  return (
    <Float speed={3} floatIntensity={0.5}>
      <mesh ref={ref} scale={1.2}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={color} wireframe />
      </mesh>
    </Float>
  );
};

const AnimatedCounter = ({ value, suffix, delay, inView }: { value: number; suffix: string; delay: number; inView: boolean }) => {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const controls = animate(0, value, {
          duration: 2,
          ease: "easeOut",
          onUpdate: (v) => setDisplay(Math.floor(v)),
        });
        return () => controls.stop();
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, value, delay]);
  return <>{display}{suffix}</>;
};

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.4 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.3 }}
          className="text-xs text-muted-foreground font-mono"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-1.5 rounded-full bg-muted/50 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ delay: delay + 0.1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full"
          style={{ background: "var(--gradient-primary)" }}
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/50" />
            <p className="text-sm tracking-[0.2em] uppercase text-primary font-display">Skills</p>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display">
            Technical <span className="gradient-text">arsenal</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-balance">
            Battle-tested technologies I use to build production systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Skill groups - left */}
          <div className="lg:col-span-8 space-y-6">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + gi * 0.15, duration: 0.5 }}
                className="glass-card p-6 md:p-8 group/card hover:border-primary/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  {group.icon}
                  <h3 className="font-display font-semibold text-lg gradient-text">{group.title}</h3>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {group.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={0.3 + gi * 0.1 + si * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right sidebar - stacked cards */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-32 space-y-6">
              {/* 3D Orb */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="h-[240px] glass-card overflow-hidden relative"
              >
                <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
                  <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[3, 3, 3]} intensity={0.8} color="#a78bfa" />
                    <pointLight position={[-3, -1, 2]} intensity={0.4} color="#e879a0" />
                    <MiniOrb color="#7c3aed" />
                  </Suspense>
                </Canvas>
                <div className="absolute bottom-3 left-0 right-0 text-center">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60 font-display">Interactive 3D</span>
                </div>
              </motion.div>

              {/* Stats grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="glass-card p-5"
              >
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="relative p-3 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors group text-center"
                    >
                      <div className="flex items-center justify-center gap-1.5 mb-1">
                        <span className="text-primary/60 group-hover:text-primary transition-colors">{stat.icon}</span>
                      </div>
                      <div className="text-2xl font-bold font-display gradient-text">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={0.7 + i * 0.1} inView={inView} />
                      </div>
                      <div className="text-[11px] text-muted-foreground mt-0.5 font-display tracking-wide uppercase">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Philosophy / approach card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="glass-card p-5"
              >
                <h4 className="text-xs uppercase tracking-[0.15em] text-primary font-display mb-4 flex items-center gap-2">
                  <Coffee className="w-3.5 h-3.5" />
                  My Approach
                </h4>
                <div className="space-y-3">
                  {philosophyItems.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + i * 0.08 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary mt-1.5 transition-colors shrink-0" />
                      <div>
                        <span className="text-sm font-medium text-foreground">{item.title}</span>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
