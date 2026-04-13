import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "40+", label: "Global Clients" },
  { value: "12", label: "Awards Won" },
  { value: "8+", label: "Years of Craft" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-primary text-xs font-display tracking-[0.4em] uppercase mb-4">About Us</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-8">
            Where <span className="text-gradient">Vision</span> Meets Craft
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed">
            We are a collective of animators, CGI artists, editors, and technologists
            united by one obsession — creating visuals that leave audiences breathless.
            From hand-drawn 2D to AI-generated futures, we push every pixel to perfection.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="text-center p-6 rounded-lg border border-border/30 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors duration-500"
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm font-display tracking-wider uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
