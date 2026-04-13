import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import work2d from "@/assets/work-2d.jpg";
import work3d from "@/assets/work-3d.jpg";
import workEdit from "@/assets/work-edit.jpg";
import workAi from "@/assets/work-ai.jpg";

const projects = [
  { title: "Dreamscape", category: "2D Animation", image: work2d },
  { title: "Lumière", category: "3D Product Commercial", image: work3d },
  { title: "Chronicle", category: "Video Editing", image: workEdit },
  { title: "Synthesis", category: "AI Video Generation", image: workAi },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-lg cursor-pointer"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          width={800}
          height={600}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-primary text-xs font-display tracking-[0.3em] uppercase mb-2">{project.category}</p>
        <h3 className="font-display text-2xl font-bold text-foreground">{project.title}</h3>
      </div>
      {/* Corner accent */}
      <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-primary/0 group-hover:border-primary/60 transition-all duration-500" />
    </motion.div>
  );
};

const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-primary text-xs font-display tracking-[0.4em] uppercase mb-4">Selected Projects</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Our <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
