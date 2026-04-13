import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const services = [
  {
    num: "01",
    title: "2D Animation",
    desc: "Hand-crafted frame-by-frame and motion graphics that breathe life into every story with cinematic flair.",
  },
  {
    num: "02",
    title: "3D CGI & Product Commercials",
    desc: "Photorealistic 3D renders and product visualizations that blur the line between digital and reality.",
  },
  {
    num: "03",
    title: "Video Editing",
    desc: "Precision post-production with color grading, sound design, and seamless storytelling flow.",
  },
  {
    num: "04",
    title: "AI Video Generation",
    desc: "Cutting-edge AI-powered video creation — transforming concepts into stunning visuals at unprecedented speed.",
  },
];

const ServiceItem = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group border-b border-border/50 py-10 px-4 cursor-pointer hover:bg-muted/30 transition-colors duration-500"
    >
      <div className="flex items-start gap-6 md:gap-12">
        <span className="font-display text-sm text-primary tracking-widest mt-2">{service.num}</span>
        <div className="flex-1">
          <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-3 flex items-center gap-4">
            {service.title}
            <motion.span
              animate={{ x: isHovered ? 8 : 0, opacity: isHovered ? 1 : 0 }}
              className="text-primary text-lg"
            >
              →
            </motion.span>
          </h3>
          <motion.p
            animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-muted-foreground max-w-xl overflow-hidden"
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-primary text-xs font-display tracking-[0.4em] uppercase mb-4">What We Do</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Our <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        <div className="border-t border-border/50">
          {services.map((service, i) => (
            <ServiceItem key={service.num} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
