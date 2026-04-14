import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [formData, setFormData] = useState({ name: "", email: "", details: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nDetails: ${formData.details}`);
    window.open(`https://wa.me/919999999999?text=${msg}`, "_blank");
  };

  return (
    <footer id="footer" className="relative overflow-hidden">
      {/* Main footer content */}
      <div className="py-20 px-6 md:px-12 border-t border-border/20" ref={ref}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left - Brand & Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl font-bold text-foreground">
              NOVA<span className="text-primary">.</span>STUDIO
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Premium CGI & animation studio crafting hyper-realistic digital stories for the world's most ambitious brands.
            </p>

            <div className="space-y-4 pt-2">
              <a href="mailto:hello@novastudio.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm group">
                <span className="w-10 h-10 rounded-full border border-border/40 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-300">
                  <Mail size={16} />
                </span>
                hello@novastudio.com
              </a>
              <a href="tel:+919999999999" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm group">
                <span className="w-10 h-10 rounded-full border border-border/40 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-300">
                  <Phone size={16} />
                </span>
                <span>
                  +91 99999 99999 (IN)<br />
                  +44 7823 795412 (UK)
                </span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <span className="w-10 h-10 rounded-full border border-border/40 flex items-center justify-center">
                  <MapPin size={16} />
                </span>
                Mumbai, India
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { label: "Instagram", icon: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z" },
                { label: "LinkedIn", icon: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" },
                { label: "X", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-11 h-11 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  aria-label={s.label}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Middle - Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-8"
          >
            <div>
              <h4 className="font-display text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-6">Studio</h4>
              <ul className="space-y-3">
                {["Gallery", "About", "Services", "Showreel"].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-foreground/70 hover:text-primary text-sm transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-6">Support</h4>
              <ul className="space-y-3">
                {["FAQ", "Terms", "Privacy", "Careers"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-foreground/70 hover:text-primary text-sm transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-border/30 bg-muted/20 p-6 backdrop-blur-sm">
              <h4 className="font-display text-lg text-foreground mb-1">Let's build your</h4>
              <h4 className="font-display text-lg text-primary mb-6">next campaign.</h4>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="NAME"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border/30 text-foreground text-xs font-display tracking-wider placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors duration-300"
                  />
                  <input
                    type="email"
                    placeholder="EMAIL"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border/30 text-foreground text-xs font-display tracking-wider placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors duration-300"
                  />
                </div>
                <textarea
                  placeholder="PROJECT DETAILS"
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border/30 text-foreground text-xs font-display tracking-wider placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors duration-300 resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-foreground text-background font-display text-xs tracking-[0.3em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Large watermark text */}
      <div className="relative overflow-hidden py-4">
        <p className="font-display text-[8vw] font-bold text-foreground/[0.03] text-center whitespace-nowrap leading-none select-none">
          NOVA.STUDIO
        </p>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/20 py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            © 2026 NOVA.STUDIO. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            {["Mumbai", "London", "Global"].map((loc) => (
              <span key={loc} className="font-display text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
