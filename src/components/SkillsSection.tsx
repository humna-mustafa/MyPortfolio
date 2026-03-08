// @ts-nocheck
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense } from "react";
import Marquee from "./Marquee";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Three.js", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "GraphQL", "REST APIs", "Redis"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Figma", "Testing"],
  },
];

const allSkills = skillGroups.flatMap((g) => g.skills);

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

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background orb */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        {/* Marquee at top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Marquee items={allSkills} speed={25} />
          <Marquee items={[...allSkills].reverse()} speed={30} reverse />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-primary/50" />
                <p className="text-sm tracking-[0.2em] uppercase text-primary font-display">Skills</p>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-display">
                My <span className="gradient-text">toolkit</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {skillGroups.map((group, gi) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + gi * 0.15, duration: 0.5 }}
                >
                  <h3 className="font-display font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, si) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3 + gi * 0.1 + si * 0.05 }}
                        whileHover={{ scale: 1.08, y: -3 }}
                        className="px-4 py-2 rounded-xl glass-card border border-border text-sm font-medium text-foreground cursor-default relative group overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative">{skill}</span>
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-[350px] hidden lg:block"
          >
            <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <pointLight position={[3, 3, 3]} intensity={0.8} color="#a78bfa" />
                <pointLight position={[-3, -1, 2]} intensity={0.4} color="#e879a0" />
                <MiniOrb color="#7c3aed" />
              </Suspense>
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
