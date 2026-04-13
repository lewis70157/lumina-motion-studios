import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const lineScale = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

  return (
    <section id="contact" ref={containerRef} className="py-28 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary text-[10px] font-display tracking-[0.5em] uppercase mb-5">Let's Create</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4 leading-[0.95]">
            Have a project<span className="text-primary">?</span>
          </h2>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-gradient mb-6">
            Let's talk.
          </h2>
          <p className="text-muted-foreground text-sm mb-10 max-w-md mx-auto">
            From 30-second spots to animated series — let's bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="mailto:hello@novastudio.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-display text-xs tracking-[0.2em] uppercase hover:glow-primary transition-all duration-500 group"
          >
            hello@novastudio.com
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </motion.div>

        <motion.div
          className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-center"
          style={{ scaleX: lineScale }}
        />
      </div>
    </section>
  );
};

export default ContactSection;
