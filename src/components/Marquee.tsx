import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  speed?: number;
  reverse?: boolean;
}

const Marquee = ({ items, speed = 20, reverse = false }: MarqueeProps) => {
  const duplicated = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden whitespace-nowrap py-4">
      <motion.div
        style={{ willChange: "transform", contain: "layout style" }}
        className="inline-flex gap-8"
        animate={{
          x: reverse ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-sm font-display font-medium text-muted-foreground/60"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
