import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import BrandingSection from "@/components/BrandingSection";
import SecretSection from "@/components/SecretSection";
import WhatYouLearnSection from "@/components/WhatYouLearnSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ReadySection from "@/components/ReadySection";
import SRRDifferenceSection from "@/components/SRRDifferenceSection";
import WhyMattersSection from "@/components/WhyMattersSection";
import CommunitySection from "@/components/CommunitySection";
import WordOnStreetSection from "@/components/WordOnStreetSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <BrandingSection />
      <SecretSection />
      <WhatYouLearnSection />
      <TestimonialsSection />
      <SRRDifferenceSection />
      <WhyMattersSection />
      <ReadySection />
      <CommunitySection />
      <WordOnStreetSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
