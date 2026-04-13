import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary text-xs font-display tracking-[0.4em] uppercase mb-6">Let's Create</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-[0.95]">
            Have a project<span className="text-primary">?</span>
            <br />
            <span className="text-gradient">Let's talk.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Whether it's a 30-second product spot or a full-scale animated series,
            we're ready to bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="mailto:hello@novastudio.com"
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase hover:glow-primary transition-all duration-500"
          >
            <span>hello@novastudio.com</span>
            <motion.span
              className="inline-block"
              whileHover={{ x: 4 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        />
      </div>
    </section>
  );
};

export default ContactSection;
