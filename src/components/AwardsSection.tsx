import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Trophy, Star, Sparkles, Crown } from "lucide-react";

const awards = [
  { name: "Awwwards", category: "Site of the Day", year: "2025", icon: Trophy },
  { name: "FWA", category: "FWA of the Day", year: "2025", icon: Crown },
  { name: "CSS Design", category: "Special Kudos", year: "2024", icon: Star },
  { name: "Behance", category: "Featured Project", year: "2024", icon: Sparkles },
  { name: "Webby", category: "Honoree", year: "2024", icon: Award },
  { name: "Awwwards", category: "Honorable Mention", year: "2023", icon: Trophy },
];

const Counter = ({ to }: { to: number }) => {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1500;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return <span ref={ref}>{n}</span>;
};

const AwardsSection = () => {
  return (
    <section id="awards" className="py-24 px-6 md:px-12 border-y border-border/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="font-display text-[10px] tracking-[0.5em] uppercase text-primary">Recognition</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 text-foreground">
              Awarded by<br />
              <span className="text-gradient">the best.</span>
            </h2>
          </div>
          <div className="flex gap-10">
            <div>
              <div className="font-display text-5xl md:text-6xl font-bold text-foreground tabular-nums">
                <Counter to={42} />+
              </div>
              <div className="font-display text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-2">Awards Won</div>
            </div>
            <div>
              <div className="font-display text-5xl md:text-6xl font-bold text-foreground tabular-nums">
                <Counter to={180} />+
              </div>
              <div className="font-display text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-2">Projects Delivered</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {awards.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="group relative p-6 rounded-2xl border border-border/30 bg-muted/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.3)]"
              >
                <Icon className="w-6 h-6 text-primary mb-4" />
                <div className="font-display text-sm font-semibold text-foreground">{a.name}</div>
                <div className="font-display text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">{a.category}</div>
                <div className="font-display text-[10px] tracking-[0.3em] text-primary/70 mt-3">{a.year}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;