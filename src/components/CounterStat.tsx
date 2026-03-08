import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CounterStatProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

const CounterStat = ({ value, suffix = "", label, delay = 0 }: CounterStatProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const controls = animate(0, value, {
          duration: 2,
          ease: "easeOut",
          onUpdate: (v) => setDisplayValue(Math.floor(v)),
        });
        return () => controls.stop();
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, value, delay]);

  return (
    <div ref={ref} className="text-center">
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay }}
        className="text-4xl md:text-5xl font-display font-bold gradient-text"
      >
        {displayValue}{suffix}
      </motion.span>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: delay + 0.3 }}
        className="text-sm text-muted-foreground mt-2 font-display tracking-wide uppercase"
      >
        {label}
      </motion.p>
    </div>
  );
};

export default CounterStat;
