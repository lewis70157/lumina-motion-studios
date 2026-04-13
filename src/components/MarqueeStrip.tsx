const MarqueeStrip = () => {
  const items = ["2D Animation", "3D CGI", "Product Spots", "Video Editing", "AI Video", "Motion Design", "VFX", "Brand Films"];
  const doubled = [...items, ...items];

  return (
    <div className="py-4 border-y border-border/20 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="mx-6 font-display text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60">
            {item} <span className="text-primary/40 ml-6">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
