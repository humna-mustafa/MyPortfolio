import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, FileText, ExternalLink } from "lucide-react";

const ResumeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/50" />
            <p className="text-sm tracking-[0.2em] uppercase text-primary font-display">Resume</p>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            My <span className="gradient-text">credentials</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-12 text-balance leading-relaxed">
            Download my resume to learn more about my education, experience, and technical skills.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <FileText className="h-10 w-10 text-primary" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-xl font-bold mb-2">Humna Mustafa — Resume</h3>
              <p className="text-sm text-muted-foreground mb-1">Software Engineering Student • COMSATS University Lahore</p>
              <p className="text-xs text-muted-foreground/60">PDF • Last updated March 2026</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-display font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <Download className="h-4 w-4 group-hover:animate-bounce" />
                Download PDF
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-display font-medium text-sm hover:bg-primary/5 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                View Online
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
