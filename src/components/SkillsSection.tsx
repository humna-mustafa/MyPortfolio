// @ts-nocheck
import { motion, useInView } from "framer-motion";
import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Code2, Globe, Database, Wrench, Coffee } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5 text-primary" />,
    skills: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    ],
  },
  {
    title: "Web & Frameworks",
    icon: <Globe className="w-5 h-5 text-primary" />,
    skills: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
    ],
  },
  {
    title: "Databases & Backend",
    icon: <Database className="w-5 h-5 text-primary" />,
    skills: [
      { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-5 h-5 text-primary" />,
    skills: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ],
  },
];

const philosophyItems = [
  { title: "Build to Ship", desc: "Every project leaves my desk production-ready" },
  { title: "User First, Always", desc: "If it doesn't solve a real problem, I don't build it" },
  { title: "Clean Code Obsessed", desc: "Atomic commits, meaningful PRs, zero shortcuts" },
  { title: "Learn in Public", desc: "Open source, articles, and sharing what I know" },
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

const SkillIcon = ({ name, logo, delay }: { name: string; logo: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.6 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.3, ease: "easeOut" }}
    whileHover={{ scale: 1.15, y: -4 }}
    className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-muted/40 border border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 flex items-center justify-center cursor-default group relative"
    title={name}
  >
    <img src={logo} alt={name} className="w-8 h-8 md:w-9 md:h-9 object-contain" loading="lazy" />
    <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
      <span className="text-[10px] font-medium text-muted-foreground whitespace-nowrap bg-background/80 backdrop-blur-sm px-2 py-0.5 rounded-md border border-border/50">{name}</span>
    </div>
  </motion.div>
);

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/50" />
            <p className="text-sm tracking-[0.2em] uppercase text-primary font-display">Tech Stack</p>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display">
            My <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-balance">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-8 space-y-6">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + gi * 0.12, duration: 0.5 }}
                className="glass-card p-6 md:p-8 hover:border-primary/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  {group.icon}
                  <h3 className="font-display font-semibold text-lg gradient-text">{group.title}</h3>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="flex flex-wrap gap-4 pb-2">
                  {group.skills.map((skill, si) => (
                    <SkillIcon
                      key={skill.name}
                      name={skill.name}
                      logo={skill.logo}
                      delay={0.25 + gi * 0.08 + si * 0.04}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-32 space-y-6">
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="glass-card p-5"
              >
                <h4 className="text-xs uppercase tracking-[0.15em] text-primary font-display mb-4 flex items-center gap-2">
                  <Coffee className="w-3.5 h-3.5" />
                  How I Work
                </h4>
                <div className="space-y-3">
                  {philosophyItems.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.7 + i * 0.08 }}
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
