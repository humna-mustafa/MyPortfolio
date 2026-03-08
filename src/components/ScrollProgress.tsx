import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: "var(--gradient-primary)",
        willChange: "transform",
        contain: "layout style",
      }}
    />
  );
};

export default ScrollProgress;
