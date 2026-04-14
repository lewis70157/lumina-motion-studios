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

const Terms = () => (
  <div className="bg-background min-h-screen noise-bg">
    <Navbar />
    <ScrollToTop />
    <WhatsAppButton />
    <main className="pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.div {...fadeUp}>
          <p className="text-primary text-[10px] font-display tracking-[0.5em] uppercase mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms of Service<span className="text-primary">.</span>
          </h1>
          <p className="text-muted-foreground text-sm mb-16">Last updated: April 2026</p>
        </motion.div>

        <div className="space-y-10 text-muted-foreground text-sm leading-relaxed">
          {[
            { title: "1. Agreement to Terms", body: "By accessing or using NOVA.STUDIO's services, you agree to be bound by these Terms of Service. If you do not agree, you may not use our services." },
            { title: "2. Services", body: "NOVA.STUDIO provides 2D animation, 3D CGI, video editing, and AI video generation services. All projects are subject to a separate project agreement outlining scope, timeline, deliverables, and pricing." },
            { title: "3. Intellectual Property", body: "Upon full payment, clients receive full ownership of the final deliverables. NOVA.STUDIO retains the right to showcase completed work in our portfolio unless a non-disclosure agreement is in place." },
            { title: "4. Payment Terms", body: "Projects require a 50% upfront deposit before work begins. The remaining balance is due upon delivery of the final product. Late payments may incur a 2% monthly fee." },
            { title: "5. Revisions", body: "Each project includes an agreed-upon number of revision rounds. Additional revisions beyond the scope will be billed at our standard hourly rate." },
            { title: "6. Cancellation", body: "Clients may cancel a project with written notice. Any work completed up to the cancellation date will be billed accordingly. The initial deposit is non-refundable." },
            { title: "7. Limitation of Liability", body: "NOVA.STUDIO's liability is limited to the total amount paid for the specific project. We are not liable for indirect, incidental, or consequential damages." },
            { title: "8. Governing Law", body: "These terms are governed by the laws of India. Any disputes will be resolved through arbitration in Mumbai, Maharashtra." },
          ].map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
            >
              <h2 className="font-display text-foreground text-base mb-3">{section.title}</h2>
              <p>{section.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Terms;
