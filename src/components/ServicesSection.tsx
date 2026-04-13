import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const services = [
  { num: "01", title: "2D Animation", desc: "Frame-by-frame and motion graphics with cinematic flair." },
  { num: "02", title: "3D CGI & Commercials", desc: "Photorealistic renders that blur digital and reality." },
  { num: "03", title: "Video Editing", desc: "Color grading, sound design, and seamless storytelling." },
  { num: "04", title: "AI Video Generation", desc: "AI-powered visuals at unprecedented speed." },
];

const ServiceItem = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group border-b border-border/40 py-8 px-2 cursor-pointer hover:bg-muted/20 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Hover glow line */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-px bg-primary"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <div className="flex items-center gap-6 md:gap-10 pl-4">
        <span className="font-display text-[10px] text-primary/60 tracking-widest">{service.num}</span>
        <div className="flex-1 flex items-center justify-between">
          <h3 className="font-display text-xl md:text-3xl font-semibold text-foreground flex items-center gap-3">
            {service.title}
            <motion.span
              animate={{ x: hovered ? 6 : 0, opacity: hovered ? 1 : 0 }}
              className="text-primary text-sm"
            >
              ↗
            </motion.span>
          </h3>
          <motion.p
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className="hidden md:block text-muted-foreground text-xs max-w-xs text-right"
          >
            {service.desc}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section id="services" ref={containerRef} className="py-28 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <p className="text-primary text-[10px] font-display tracking-[0.5em] uppercase mb-3">What We Do</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Our <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        {/* Animated top border */}
        <motion.div className="h-px bg-primary/40 origin-left" style={{ width: lineWidth }} />

        <div>
          {services.map((service, i) => (
            <ServiceItem key={service.num} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
