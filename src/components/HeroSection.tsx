import { motion } from "framer-motion";
import Scene3D from "./Scene3D";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";
import GradientMeshBackground from "./GradientMeshBackground";
import { ArrowDown, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 md:pt-36">
      <GradientMeshBackground />
      <Scene3D />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-4">
            <TextReveal
              text="Software Engineer · Full-Stack Developer · Open-Source Contributor"
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
                Hi, I'm <span className="gradient-text">Humna</span>
              </motion.span>
            </span>
            <span className="overflow-hidden block">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="gradient-accent-text">Mustafa</span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-balance leading-relaxed"
          >
            A Software Engineering student at <span className="text-primary font-semibold">COMSATS University Islamabad</span> who 
            builds end-to-end applications instead of waiting for the syllabus. I work with{" "}
            <span className="gradient-accent-text font-semibold">Java, C++, Python, React & TypeScript</span> — turning ideas 
            into production-ready software, one commit at a time.
          </motion.p>

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

      <div className="relative z-10 pb-8 flex flex-col items-center gap-4">
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
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
          className="flex items-center gap-5"
        >
          {[
            { icon: Github, href: "https://github.com/humna-mustafa", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/humna-mustafa/", label: "LinkedIn" },
            { icon: Mail, href: "#contact", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="p-3 glass-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors rounded-2xl" aria-label={label}>
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
