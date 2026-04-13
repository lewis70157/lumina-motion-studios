import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => (
  <div className="bg-background min-h-screen noise-bg">
    <CustomCursor />
    <Navbar />
    <HeroSection />
    <MarqueeStrip />
    <WorkSection />
    <ServicesSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
