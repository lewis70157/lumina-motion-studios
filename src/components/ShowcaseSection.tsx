import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import work2d from "@/assets/work-2d-new.jpg";
import work3d from "@/assets/work-3d-new.jpg";
import workEdit from "@/assets/work-edit.jpg";
import workAi from "@/assets/work-ai-new.jpg";

const projects = [
  { title: "Dreamscape", category: "2D Animation", image: work2d, size: "large" },
  { title: "Lumière", category: "3D CGI Commercial", image: work3d, size: "small" },
  { title: "Chronicle", category: "Video Editing", image: workEdit, size: "small" },
  { title: "Synthesis", category: "AI Video", image: workAi, size: "large" },
];

const ParallaxImage = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-lg cursor-pointer ${
        project.size === "large" ? "md:col-span-7" : "md:col-span-5"
      }`}
    >
      {/* Small label above image */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-4 h-px bg-primary/60" />
        <span className="font-display text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{project.category}</span>
      </div>

      <div className="aspect-[16/10] overflow-hidden rounded-lg relative">
        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          width={1200}
          height={700}
          className="w-full h-[115%] object-cover transition-transform duration-[1.2s] group-hover:scale-105"
          style={{ y: imgY }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Title on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <h3 className="font-display text-lg font-semibold text-foreground">{project.title}</h3>
        </div>

        {/* Corner lines */}
        <div className="absolute top-3 right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 right-0 w-full h-px bg-primary/60" />
          <div className="absolute top-0 right-0 w-px h-full bg-primary/60" />
        </div>
        <div className="absolute bottom-3 left-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-0 left-0 w-full h-px bg-primary/60" />
          <div className="absolute bottom-0 left-0 w-px h-full bg-primary/60" />
        </div>
      </div>
    </motion.div>
  );
};

const ShowcaseSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="showcase" className="py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <p className="text-primary text-[10px] font-display tracking-[0.5em] uppercase mb-3">Selected Work</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <span className="hidden md:block text-muted-foreground text-xs font-display tracking-wider">(2022 — 2026)</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project, i) => (
            <ParallaxImage key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
