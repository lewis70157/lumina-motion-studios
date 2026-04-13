import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "150+", label: "Projects" },
  { value: "40+", label: "Clients" },
  { value: "12", label: "Awards" },
  { value: "8+", label: "Years" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]);

  return (
    <section id="about" ref={containerRef} className="py-28 px-6 md:px-12 relative overflow-hidden">
      {/* Animated ambient orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/4 blur-[160px] pointer-events-none"
        style={{ scale: orbScale }}
      />

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-primary text-[10px] font-display tracking-[0.5em] uppercase mb-3">About</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Where <span className="text-gradient">Vision</span> Meets Craft
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed">
            A collective of animators, CGI artists, and technologists united by one obsession — 
            creating visuals that leave audiences breathless.
          </p>
        </motion.div>

        <div className="grid grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="text-center p-5 rounded-lg border border-border/20 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 group"
            >
              <p className="font-display text-2xl md:text-4xl font-bold text-gradient mb-1 group-hover:glow-text transition-all duration-500">{stat.value}</p>
              <p className="text-muted-foreground text-[10px] font-display tracking-[0.2em] uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
