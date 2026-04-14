import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Deep-dive into your brand, audience, and objectives to define a creative brief.",
    details: ["Brand audit", "Audience research", "Creative brief"],
  },
  {
    num: "02",
    title: "Concept",
    desc: "Storyboarding, moodboards, and art direction that set the visual tone.",
    details: ["Moodboards", "Storyboards", "Art direction"],
  },
  {
    num: "03",
    title: "Production",
    desc: "2D/3D animation, CGI rendering, and AI-assisted creation at the highest fidelity.",
    details: ["Animation", "CGI render", "AI generation"],
  },
  {
    num: "04",
    title: "Post & Delivery",
    desc: "Color grading, sound design, and final polish — delivered in every format you need.",
    details: ["Color grade", "Sound design", "Multi-format export"],
  },
];

const ProcessStep = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      {/* Connecting line */}
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute top-10 left-1/2 w-px h-full bg-gradient-to-b from-primary/30 to-transparent" />
      )}

      <div className="relative bg-card/30 border border-border/30 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500 hover:bg-card/50">
        {/* Step number */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-display text-3xl md:text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-500">
            {step.num}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-border/50 to-transparent" />
        </div>

        <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
          {step.title}
        </h3>
        <p className="text-muted-foreground text-xs leading-relaxed mb-4 max-w-sm">
          {step.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {step.details.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-muted/40 text-muted-foreground text-[10px] font-display tracking-wider uppercase border border-border/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProcessSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]);

  return (
    <section id="process" ref={containerRef} className="py-28 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <p className="text-primary text-[10px] font-display tracking-[0.5em] uppercase mb-3">How We Work</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Our <span className="text-gradient">Process</span>
            </h2>
          </div>
          <span className="hidden md:block text-muted-foreground text-[10px] font-display tracking-[0.3em] uppercase">
            From idea to delivery
          </span>
        </motion.div>

        {/* Timeline line */}
        <div className="relative">
          <div className="hidden md:block absolute left-8 top-0 w-px h-full bg-border/20">
            <motion.div className="w-full bg-primary/40 origin-top" style={{ height: lineHeight }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <ProcessStep key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
