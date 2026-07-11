import TopNavBar from "./components/TopNavBar";
import HeroSection from "./components/HeroSection";
import WhyUsSection from "./components/WhyUsSection";
import ServicesPreview from "./components/ServicesPreview";
import TestimonialsSlider from "./components/TestimonialsSlider";
import InsurancePartners from "./components/InsurancePartners";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 20) {
        nav?.classList.add('bg-surface/95', 'shadow-md');
        nav?.classList.remove('bg-surface/80');
      } else {
        nav?.classList.remove('bg-surface/95', 'shadow-md');
        nav?.classList.add('bg-surface/80');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      <TopNavBar />
      <HeroSection />
      <WhyUsSection />
      <ServicesPreview />
      <TestimonialsSlider />
      <InsurancePartners />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}