import { motion } from "framer-motion";
import heroImg from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  const titleWords = ["We", "Craft", "Digital", "Experiences"];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImg}
          alt="Abstract 3D render"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-40"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-primary/10 blur-[100px]"
        animate={{ x: [0, 50, -30, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{ top: "20%", left: "15%" }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-secondary/10 blur-[120px]"
        animate={{ x: [0, -40, 30, 0], y: [0, 30, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ bottom: "10%", right: "10%" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-display text-sm tracking-[0.4em] uppercase text-primary mb-8"
        >
          Creative Studio — Animation & CGI
        </motion.p>

        <h1 className="font-display font-bold leading-[0.9] mb-8">
          {titleWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 80, rotateX: 40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={`inline-block mr-4 md:mr-6 text-5xl sm:text-7xl md:text-8xl lg:text-9xl ${
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
          transition={{ delay: 1.3, duration: 1 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body"
        >
          We blend artistry and technology to create award-winning 2D animations,
          3D CGI, product commercials, and AI-driven visuals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase hover:glow-primary transition-all duration-500"
          >
            View Our Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded-full border border-border text-foreground font-display text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-muted-foreground/40 flex items-start justify-center p-1"
          >
            <motion.div className="w-1 h-2 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
