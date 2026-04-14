import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const faqs = [
  { q: "What services does NOVA.STUDIO offer?", a: "We specialize in 2D Animation, 3D CGI & Product Commercials, Video Editing, and AI Video Generation. From concept to final delivery, we handle every stage of production." },
  { q: "How long does a typical project take?", a: "Timelines vary by scope. A 30-second 3D product commercial typically takes 3–4 weeks, while a full animated series episode can take 6–8 weeks. We'll provide a detailed timeline during our initial consultation." },
  { q: "What is your pricing structure?", a: "We offer project-based pricing tailored to your specific needs. After understanding your requirements, we provide a transparent quote with no hidden costs. Contact us for a free estimate." },
  { q: "Do you work with international clients?", a: "Absolutely. We have clients across India, UK, US, and Europe. Our team is experienced in remote collaboration with seamless communication across time zones." },
  { q: "What file formats do you deliver?", a: "We deliver in all standard formats including MP4, MOV, ProRes, EXR, and more. We tailor deliverables to your platform requirements — whether it's social media, broadcast, or cinema." },
  { q: "Can you work with our existing brand guidelines?", a: "Yes! We love working within established brand systems. Share your guidelines and we'll ensure every frame aligns perfectly with your brand identity." },
  { q: "Do you offer revisions?", a: "Every project includes a set number of revision rounds (typically 2–3). We work closely with you at each stage to ensure the final product exceeds expectations." },
];

const FAQ = () => (
  <div className="bg-background min-h-screen noise-bg">
    <Navbar />
    <ScrollToTop />
    <WhatsAppButton />
    <main className="pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.div {...fadeUp}>
          <p className="text-primary text-[10px] font-display tracking-[0.5em] uppercase mb-4">Support</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked<span className="text-primary">.</span>
          </h1>
          <p className="text-muted-foreground text-sm mb-16 max-w-lg">Everything you need to know about working with us.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group border border-border/30 rounded-xl overflow-hidden bg-muted/10 hover:border-primary/20 transition-colors duration-300"
            >
              <summary className="px-6 py-5 cursor-pointer font-display text-sm text-foreground flex items-center justify-between list-none">
                {faq.q}
                <span className="text-primary text-lg group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</div>
            </motion.details>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default FAQ;
