// @ts-nocheck
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense } from "react";

const skillGroups = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Three.js", level: 75 },
      { name: "Framer Motion", level: 88 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "GraphQL", level: 78 },
      { name: "REST APIs", level: 92 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "🚀",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 85 },
      { name: "Figma", level: 88 },
      { name: "Testing", level: 82 },
    ],
  },
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
            My <span className="gradient-text">toolkit</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-balance">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Skill groups */}
          <div className="lg:col-span-8 space-y-8">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + gi * 0.15, duration: 0.5 }}
                className="glass-card p-6 md:p-8 group/card hover:border-primary/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xl">{group.icon}</span>
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

          {/* Right: 3D orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="sticky top-32 space-y-6">
              <div className="h-[320px] glass-card overflow-hidden">
                <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
                  <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[3, 3, 3]} intensity={0.8} color="#a78bfa" />
                    <pointLight position={[-3, -1, 2]} intensity={0.4} color="#e879a0" />
                    <MiniOrb color="#7c3aed" />
                  </Suspense>
                </Canvas>
              </div>

              {/* Stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="glass-card p-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "18+", label: "Technologies" },
                    { value: "5+", label: "Years Exp." },
                    { value: "50+", label: "Projects" },
                    { value: "100%", label: "Dedication" },
                  ].map((stat, i) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-xl font-bold font-display gradient-text">{stat.value}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
