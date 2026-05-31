const brands = [
  "NEBULA", "ORBITAL", "VANTA", "LUMEN", "AXIOM", "PRISMA",
  "KAIROS", "ZENITH", "ATLAS", "FORMA", "QUANTUM", "ECHELON",
];

const ClientLogos = () => {
  const doubled = [...brands, ...brands];
  return (
    <section className="py-16 border-y border-border/20 overflow-hidden">
      <div className="text-center mb-10">
        <span className="font-display text-[10px] tracking-[0.5em] uppercase text-muted-foreground">
          Trusted by visionary brands
        </span>
      </div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((b, i) => (
            <span
              key={i}
              className="mx-12 font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground/30 hover:text-primary transition-colors duration-500 cursor-default"
            >
              {b}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
};

export default ClientLogos;