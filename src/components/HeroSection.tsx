import { motion } from "framer-motion";
import Scene3D from "./Scene3D";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";
import { ArrowDown, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden mesh-bg">
      <Scene3D />

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-[1]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }} />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-display tracking-wider uppercase text-muted-foreground">Available for work</span>
          </motion.div>

          <div className="mb-4">
            <TextReveal
              text="Software Engineer"
              className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground font-display block"
              delay={0.3}
            />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold font-display leading-[0.95] mb-8">
            <span className="overflow-hidden block">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Hi, I'm <span className="gradient-text">Sarah</span>
              </motion.span>
            </span>
            <span className="overflow-hidden block">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="gradient-accent-text">Anderson</span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 text-balance leading-relaxed"
          >
            Building elegant, performant, and accessible digital experiences
            with modern web technologies.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton
              as="a"
              href="#projects"
              className="group px-8 py-3.5 rounded-full font-display font-medium text-sm bg-primary text-primary-foreground flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              View My Work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#contact"
              className="px-8 py-3.5 rounded-full font-display font-medium text-sm glass-card border border-border text-foreground hover:bg-primary/5 transition-colors"
            >
              Get in Touch
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom area - scroll + socials, pinned to bottom */}
      <div className="relative z-10 pb-8 flex flex-col items-center gap-8">
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-[10px] font-display tracking-[0.2em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex items-center gap-3"
        >
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "#contact", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <MagneticButton key={label} as="a" href={href} className="p-3 glass-card border border-border text-muted-foreground hover:text-foreground transition-colors rounded-2xl">
              <Icon className="h-5 w-5" />
            </MagneticButton>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
