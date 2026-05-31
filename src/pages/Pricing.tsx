import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const tiers = [
  {
    name: "Starter",
    price: "$2.5K",
    desc: "For brands testing the waters with their first motion piece.",
    features: ["1 deliverable", "Up to 30 seconds", "2 revision rounds", "HD export", "5–7 day delivery"],
    featured: false,
  },
  {
    name: "Studio",
    price: "$8K",
    desc: "Our most popular package for full-scale brand campaigns.",
    features: ["3 deliverables", "Up to 60 seconds each", "Unlimited revisions", "4K + social cuts", "Dedicated producer", "2–3 week delivery"],
    featured: true,
  },
  {
    name: "Cinematic",
    price: "Custom",
    desc: "Hero films, launch campaigns, and complex CGI productions.",
    features: ["Bespoke scope", "Full creative direction", "Original score & sound design", "Multi-platform finishing", "On-set supervision", "Custom timeline"],
    featured: false,
  },
];

const faqs = [
  { q: "How do you bill — fixed or hourly?", a: "Most projects are fixed-fee based on scope. Retainers and time-and-materials are available for longer engagements." },
  { q: "What's your typical turnaround?", a: "Starter projects ship in a week. Studio packages take 2–3 weeks. Cinematic productions are scoped per project." },
  { q: "Do you handle scripting and creative direction?", a: "Yes — every package includes our creative direction. We can also work from your existing brief or storyboard." },
  { q: "Can I see process work before final delivery?", a: "Always. We share animatics, look-dev frames, and rough cuts at every major milestone." },
];

const Pricing = () => {
  return (
    <PageTransition>
      <div className="bg-background min-h-screen noise-bg">
        <Navbar />
        <section className="pt-40 pb-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="font-display text-[10px] tracking-[0.5em] uppercase text-primary">Packages</span>
              <h1 className="font-display text-5xl md:text-7xl font-bold mt-4 text-foreground leading-[0.95]">
                Pricing that<br /><span className="text-gradient">scales with you.</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto mt-6">
                Transparent tiers for every stage — from single hero shots to full cinematic campaigns.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tiers.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={`relative p-8 rounded-2xl border ${
                    tier.featured
                      ? "border-primary/50 bg-gradient-to-b from-primary/[0.08] to-transparent shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.4)]"
                      : "border-border/30 bg-muted/10"
                  }`}
                >
                  {tier.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground font-display text-[9px] tracking-[0.3em] uppercase">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-bold text-foreground">{tier.name}</h3>
                  <div className="font-display text-5xl font-bold text-foreground mt-4">{tier.price}</div>
                  <p className="text-muted-foreground text-sm mt-3 mb-8 leading-relaxed">{tier.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => window.open("https://wa.me/919999999999", "_blank")}
                    className={`w-full py-3 rounded-full font-display text-xs tracking-[0.25em] uppercase transition-all duration-500 ${
                      tier.featured
                        ? "bg-primary text-primary-foreground hover:glow-primary"
                        : "border border-border/60 text-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    Start Project
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="mt-24 max-w-2xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
                Questions, answered.
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border border-border/30 rounded-xl px-5 bg-muted/10"
                  >
                    <AccordionTrigger className="font-display text-sm text-foreground hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Pricing;