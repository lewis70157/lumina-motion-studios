import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", id: "showcase" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between backdrop-blur-xl bg-background/60 border-b border-border/50"
    >
      <button onClick={() => scrollTo("hero")} className="font-display text-xl font-bold tracking-tight text-foreground">
        NOVA<span className="text-primary">.</span>STUDIO
      </button>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className="relative font-display text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 group"
          >
            {link}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
          </button>
        ))}
        <button
          onClick={() => scrollTo("contact")}
          className="ml-4 px-5 py-2 rounded-full border border-primary/50 text-primary text-sm font-display tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Start Project
        </button>
      </div>

      {/* Mobile Toggle */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5 z-50">
        <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} className="block w-6 h-px bg-foreground" />
        <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="block w-6 h-px bg-foreground" />
        <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} className="block w-6 h-px bg-foreground" />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollTo(link)}
                className="font-display text-3xl font-bold tracking-tight text-foreground"
              >
                {link}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
