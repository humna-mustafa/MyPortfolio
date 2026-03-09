import { motion } from "framer-motion";

const blobs = [
  {
    color: "hsl(var(--primary) / 0.15)",
    size: "40%",
    top: "10%",
    left: "15%",
    duration: 18,
    delay: 0,
  },
  {
    color: "hsl(280, 70%, 60% / 0.1)",
    size: "35%",
    top: "50%",
    left: "60%",
    duration: 22,
    delay: 2,
  },
  {
    color: "hsl(340, 75%, 55% / 0.08)",
    size: "30%",
    top: "20%",
    left: "70%",
    duration: 20,
    delay: 4,
  },
  {
    color: "hsl(200, 80%, 50% / 0.07)",
    size: "45%",
    top: "60%",
    left: "10%",
    duration: 25,
    delay: 1,
  },
];

const GradientMeshBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, 30, -20, 15, 0],
            y: [0, -25, 15, -10, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
};

export default GradientMeshBackground;
