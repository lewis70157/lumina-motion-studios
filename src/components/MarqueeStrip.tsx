const MarqueeStrip = () => {
  const items = ["2D Animation", "3D CGI", "Product Commercials", "Video Editing", "AI Video", "Motion Design", "Visual Effects", "Brand Films"];
  const doubled = [...items, ...items];

  return (
    <div className="py-6 border-y border-border/30 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="mx-8 font-display text-sm tracking-[0.3em] uppercase text-muted-foreground">
            {item} <span className="text-primary ml-8">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
