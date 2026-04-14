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

const Privacy = () => (
  <div className="bg-background min-h-screen noise-bg">
    <Navbar />
    <ScrollToTop />
    <WhatsAppButton />
    <main className="pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.div {...fadeUp}>
          <p className="text-primary text-[10px] font-display tracking-[0.5em] uppercase mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Policy<span className="text-primary">.</span>
          </h1>
          <p className="text-muted-foreground text-sm mb-16">Last updated: April 2026</p>
        </motion.div>

        <div className="space-y-10 text-muted-foreground text-sm leading-relaxed">
          {[
            { title: "Information We Collect", body: "We collect information you provide directly, such as your name, email address, phone number, and project details when you fill out our contact form or communicate with us." },
            { title: "How We Use Your Information", body: "Your information is used to respond to inquiries, deliver our services, send project updates, and improve our website experience. We never sell your personal data to third parties." },
            { title: "Cookies & Analytics", body: "We use minimal cookies for essential website functionality and anonymous analytics to understand how visitors interact with our site. You can disable cookies in your browser settings." },
            { title: "Data Security", body: "We implement industry-standard security measures to protect your information. All data transmission is encrypted via SSL/TLS. Project files are stored securely with access controls." },
            { title: "Third-Party Services", body: "We may use third-party tools for analytics, communication, and project management. These services have their own privacy policies and we ensure they meet our data protection standards." },
            { title: "Data Retention", body: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy. Project files are retained for 12 months after project completion unless otherwise agreed." },
            { title: "Your Rights", body: "You have the right to access, correct, or delete your personal data. You may also object to processing or request data portability. Contact us at hello@novastudio.com to exercise these rights." },
            { title: "Updates to This Policy", body: "We may update this privacy policy from time to time. Significant changes will be communicated via email or a notice on our website." },
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

export default Privacy;
