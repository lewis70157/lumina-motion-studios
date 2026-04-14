import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import reel1 from "@/assets/reel-1.jpg";
import reel2 from "@/assets/reel-2.jpg";
import reel3 from "@/assets/reel-3.jpg";
import reel4 from "@/assets/reel-4.jpg";
import reel5 from "@/assets/reel-5.jpg";
import reel6 from "@/assets/reel-6.jpg";

const reelItems = [
  { image: reel1, title: "Velocity", category: "3D CGI" },
  { image: reel2, title: "Dreamscape", category: "2D Animation" },
  { image: reel3, title: "Essence", category: "Product Commercial" },
  { image: reel4, title: "Synthesis", category: "AI Video" },
  { image: reel5, title: "Chronicle", category: "Video Editing" },
  { image: reel6, title: "Nexus", category: "3D Visualization" },
];

const ShowreelSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section id="showreel" ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="px-6 md:px-12 mb-8"
        >
          <p className="text-primary text-[10px] font-display tracking-[0.5em] uppercase mb-3">Showreel</p>
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Selected <span className="text-gradient">Work</span>
            </h2>
            <span className="hidden md:block text-muted-foreground text-[10px] font-display tracking-[0.3em] uppercase">
              Drag or scroll →
            </span>
          </div>
        </motion.div>

        {/* Horizontal scroll track */}
        <motion.div style={{ x }} className="flex gap-6 pl-6 md:pl-12">
          {reelItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex-shrink-0 w-[75vw] md:w-[40vw] lg:w-[32vw]"
            >
              {/* Label */}
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-px bg-primary/50" />
                <span className="font-display text-[9px] tracking-[0.3em] uppercase text-muted-foreground">
                  {item.category}
                </span>
              </div>

              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden rounded-lg relative cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Title on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-display text-base font-semibold text-foreground">{item.title}</h3>
                </div>

                {/* Corner accents */}
                <div className="absolute top-3 right-3 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-full h-px bg-primary/60" />
                  <div className="absolute top-0 right-0 w-px h-full bg-primary/60" />
                </div>
                <div className="absolute bottom-3 left-3 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 w-full h-px bg-primary/60" />
                  <div className="absolute bottom-0 left-0 w-px h-full bg-primary/60" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress bar */}
        <div className="px-6 md:px-12 mt-8">
          <div className="max-w-xs h-px bg-border/40 relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-primary"
              style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowreelSection;
