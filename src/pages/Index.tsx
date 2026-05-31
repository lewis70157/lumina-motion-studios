import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import ClientLogos from "@/components/ClientLogos";
import ShowreelSection from "@/components/ShowreelSection";
import AwardsSection from "@/components/AwardsSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import Preloader from "@/components/Preloader";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <PageTransition>
    <div className="bg-background min-h-screen noise-bg">
      <Preloader />
      <CustomCursor />
      <ScrollToTop />
      <WhatsAppButton />
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <ClientLogos />
      <ShowreelSection />
      <AwardsSection />
      <ShowcaseSection />
      <ProcessSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
    </PageTransition>
  );
};

export default Index;
