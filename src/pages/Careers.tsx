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

const openings = [
  { role: "Senior 3D Animator", type: "Full-time", location: "Mumbai / Remote", desc: "Create stunning 3D character and product animations for global brands. 3+ years experience with Maya, Cinema 4D, or Blender required." },
  { role: "Motion Graphics Designer", type: "Full-time", location: "Mumbai", desc: "Design dynamic motion graphics for commercials and social content. Proficiency in After Effects and Cinema 4D is essential." },
  { role: "AI Video Specialist", type: "Full-time", location: "Remote", desc: "Push the boundaries of AI-generated video content. Experience with Runway, Pika, Sora, or similar tools. Strong creative vision required." },
  { role: "2D Illustrator / Animator", type: "Contract", location: "Remote", desc: "Bring stories to life through beautiful 2D illustration and animation. Expertise in Procreate, Photoshop, and After Effects." },
  { role: "Video Editor", type: "Full-time", location: "Mumbai / Remote", desc: "Edit high-end commercial and branded content. Expert-level Premiere Pro and DaVinci Resolve skills. Color grading experience a plus." },
];

const Careers = () => (
  <div className="bg-background min-h-screen noise-bg">
    <Navbar />
    <ScrollToTop />
    <WhatsAppButton />
    <main className="pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeUp}>
          <p className="text-primary text-[10px] font-display tracking-[0.5em] uppercase mb-4">Join Us</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Careers<span className="text-primary">.</span>
          </h1>
          <p className="text-muted-foreground text-sm mb-16 max-w-lg">
            We're always looking for exceptional talent to join our creative team. If you're passionate about pushing the boundaries of visual storytelling, we'd love to hear from you.
          </p>
        </motion.div>

        <div className="space-y-4">
          {openings.map((job, i) => (
            <motion.a
              key={i}
              href="mailto:careers@novastudio.com"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="block border border-border/30 rounded-xl p-6 bg-muted/10 hover:border-primary/30 hover:bg-muted/20 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-foreground text-base mb-1 group-hover:text-primary transition-colors duration-300">{job.role}</h3>
                  <p className="text-muted-foreground text-sm">{job.desc}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="px-3 py-1 rounded-full border border-border/40 text-[10px] font-display tracking-wider uppercase text-muted-foreground">{job.type}</span>
                  <span className="px-3 py-1 rounded-full border border-border/40 text-[10px] font-display tracking-wider uppercase text-muted-foreground">{job.location}</span>
                  <span className="text-primary text-sm group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 rounded-2xl border border-border/20 bg-muted/10 text-center"
        >
          <h3 className="font-display text-foreground text-lg mb-2">Don't see your role?</h3>
          <p className="text-muted-foreground text-sm mb-6">We're always open to exceptional talent. Send your portfolio and resume to:</p>
          <a href="mailto:careers@novastudio.com" className="text-primary font-display text-sm tracking-wider hover:underline">
            careers@novastudio.com
          </a>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Careers;
