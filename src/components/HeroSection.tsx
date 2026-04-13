import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative h-[120vh] flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </motion.div>

      {/* Floating orbs */}
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-primary/8 blur-[120px]"
        animate={{ x: [0, 60, -40, 0], y: [0, -50, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        style={{ top: "15%", left: "10%" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-secondary/6 blur-[150px]"
        animate={{ x: [0, -50, 40, 0], y: [0, 40, -60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ bottom: "5%", right: "5%" }}
      />

      {/* Content with parallax */}
      <motion.div className="relative z-10 text-center px-6 max-w-5xl mx-auto" style={{ y: textY, opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <span className="w-8 h-px bg-primary" />
          <span className="font-display text-[10px] tracking-[0.5em] uppercase text-primary">Creative Studio</span>
          <span className="w-8 h-px bg-primary" />
        </motion.div>

        <h1 className="font-display font-bold leading-[0.88] mb-6">
          {["We", "Craft", "Digital", "Experiences"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.4 + i * 0.12, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`inline-block mr-3 md:mr-5 text-4xl sm:text-6xl md:text-7xl lg:text-8xl ${
                word === "Digital" ? "text-gradient" : "text-foreground"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto mb-8 font-body leading-relaxed"
        >
          Award-winning 2D animation, 3D CGI, product commercials & AI visuals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="flex items-center justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-display text-xs tracking-[0.2em] uppercase hover:glow-primary transition-all duration-500"
          >
            Explore Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 rounded-full border border-border/60 text-foreground font-display text-xs tracking-[0.2em] uppercase hover:border-primary hover:text-primary transition-all duration-300"
          >
            Contact
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 2 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-4 h-7 rounded-full border border-muted-foreground/30 flex items-start justify-center p-1 mx-auto"
          >
            <motion.div className="w-0.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
