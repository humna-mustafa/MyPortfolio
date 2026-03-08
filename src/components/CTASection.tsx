import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => (
  <section className="section-padding mesh-bg relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
    <div className="max-w-5xl mx-auto text-center relative">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-8"
      >
        Let's build something<br />
        <span className="gradient-text">extraordinary together</span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-display font-medium text-sm hover:opacity-90 transition-opacity group"
        >
          Start a Conversation
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
