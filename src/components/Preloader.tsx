import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("nova-preloaded")) {
      setDone(true);
      return;
    }
    document.body.style.overflow = "hidden";
    const start = performance.now();
    const duration = 1800;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setProgress(Math.floor(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => {
          setDone(true);
          sessionStorage.setItem("nova-preloaded", "1");
          document.body.style.overflow = "";
        }, 400);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-10"
          >
            NOVA<span className="text-primary">.</span>STUDIO
          </motion.div>
          <div className="w-64 h-px bg-border/40 overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-4 font-display text-xs tracking-[0.4em] text-muted-foreground tabular-nums">
            {String(progress).padStart(3, "0")}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;