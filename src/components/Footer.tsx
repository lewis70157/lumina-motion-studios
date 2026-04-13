const Footer = () => (
  <footer className="py-12 px-6 md:px-12 border-t border-border/30">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="font-display text-sm text-muted-foreground">
        © 2026 NOVA<span className="text-primary">.</span>STUDIO — All rights reserved
      </p>
      <div className="flex items-center gap-8">
        {["Instagram", "Behance", "Vimeo", "LinkedIn"].map((s) => (
          <a key={s} href="#" className="text-muted-foreground hover:text-primary text-sm font-display tracking-wider uppercase transition-colors duration-300">
            {s}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
