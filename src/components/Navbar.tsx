import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Work", id: "showcase" },
  { label: "Services", id: "services" },
  { label: "Process", id: "process" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    if (location.pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [location.pathname]);

  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const goHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 transition-all duration-500 ${
          scrolled
            ? "py-3 backdrop-blur-2xl bg-background/70 border-b border-primary/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "py-5 backdrop-blur-sm bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button onClick={goHome} className="relative group">
            <span className="font-display text-xl font-bold tracking-tight text-foreground">
              NOVA<span className="text-primary">.</span>STUDIO
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 h-px bg-primary"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="relative px-4 py-2 font-display text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-primary"
                  initial={false}
                  animate={{ width: activeLink === link.id ? "60%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
              </button>
            ))}

            <div className="w-px h-5 bg-border/40 mx-3" />

            <motion.button
              onClick={() => scrollTo("contact")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative ml-1 px-6 py-2.5 rounded-full font-display text-[10px] tracking-[0.25em] uppercase overflow-hidden group"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/70 opacity-100 group-hover:opacity-90 transition-opacity duration-300" />
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_20px_hsl(var(--primary)/0.4)]" />
              <span className="relative z-10 text-primary-foreground font-medium">Start Project</span>
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5 z-50 p-2">
            <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} className="block w-6 h-[1.5px] bg-foreground origin-center" />
            <motion.span animate={{ opacity: isOpen ? 0 : 1, scaleX: isOpen ? 0 : 1 }} className="block w-6 h-[1.5px] bg-foreground origin-center" />
            <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} className="block w-6 h-[1.5px] bg-foreground origin-center" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                onClick={() => scrollTo(link.id)}
                className="font-display text-3xl font-bold tracking-tight text-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 + 0.1 }}
              onClick={() => scrollTo("contact")}
              className="mt-4 px-8 py-3 rounded-full bg-primary text-primary-foreground font-display text-sm tracking-[0.2em] uppercase"
            >
              Start Project
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
