import TopNavBar from "./components/TopNavBar";
import HeroSection from "./components/HeroSection";
import WhyUsSection from "./components/WhyUsSection";
import ServicesPreview from "./components/ServicesPreview";
import TestimonialsSlider from "./components/TestimonialsSlider";
import InsurancePartners from "./components/InsurancePartners";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import OurTeamPage from "./pages/OurTeamPage";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { Doctor } from "./types";

const doctors: Doctor[] = [
  {
    name: "Dr. Adrian Santoso",
    title: "Senior Surgeon, MD",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdZx0E2K5z_x4N1TjeGpSfojSikAs2QfkDk4I1GqD8J_ikJhbD2_MZRUm3_vq9ZrSYc_VuXYnAkA_A-TXQBpy8ithHoiZDmiXUwlW_LiVyZvbjF2RgG81qHS7x0eWNst2Gh20456vmFiugWe8vGf9sUYohHOBMj_sxZ9GBIBJz3u-6qQ2RnC7Yia2ss8TLAFG9WoZ8_KV-iAS6DyEPRDS0udRRRregHNQE_MyPP5HOcxoYVW1Beytd",
    imageAlt: "A professional headshot of a senior male doctor with a warm smile, wearing a white clinical coat and a stethoscope.",
    schedule: "Mon - Thu: 08:00 - 14:00",
    specialty: "15+ Years Surgical Expertise",
    availableToday: true
  },
  {
    name: "Dr. Sarah Wijaya",
    title: "Pediatrician, Sp.A",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBU7-G8XxKW3wJTsukl4CEBQ6Z7jnCAKzF215AXisaLUmHxV1eOFYyDc7Oxzqq_pV34GzRUE9A5c5rxtYeYWbMYZpuFlZhV3taXZ5uqyVEGnt6Mw0B8znJ0HJclQJLljaTt5Yorxv_z3ac4eQkCmHvdPC88MZIVoJdTM0IHOnuUS2dZ0opEhN9SGHNop6M-HIJoAy_jPru6Bkd7T3K51uQ9g_vxo6hFMpl-P478W8JVZMn-C_iwjMIc",
    imageAlt: "A professional headshot of a friendly female pediatrician in her late 30s.",
    schedule: "Tue - Sat: 09:00 - 16:00",
    specialty: "Child Development Specialist",
    icon: "favorite",
    iconPosition: "absolute top-4 right-4"
  },
  {
    name: "Dr. Marcus Lee",
    title: "General Practitioner",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWi_ZmfEF_pkpkePAbCChSKknVhzM4uBYEJC-cfWh-s72qMlvLUZU96AELyNEr5sc3QgCBusThUUY2MynaVLZwv26BgSvWfJz-sTWAOO0g5cL5M0b_zzZS7kvJC8XuaxPkPaOxi0w_AyyfmWbczc0Zm8Jsv1VAzB50I4fizSdFHp84j0ZNKtlkKjzsbQl6GUq0aNHxdVbT-oHgdr8vfADVJ-T1sm0KBdQkiRZ7C8sSBywYZPnobLdF",
    imageAlt: "A portrait of a male General Practitioner in a modern, well-lit medical clinic setting.",
    schedule: "Mon - Fri: 08:00 - 17:00",
    specialty: "Family Health Consultant",
    specialtyIcon: "emergency"
  },
  {
    name: "Dr. Elena Rodriguez",
    title: "Cardiologist, MD",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZY0n0HPnKIorVwd62CV8Y_ft75dtrwirVNaGCvereCVy0ZjfFg1A_g7H1GFADNW7njQ61YZTqg9TF0iljeuevaLWC9jkNvFY92yZ1J2RkoEd3IYoBMqoSPfmkdLjFdYwIKwYvvdzWjau7Rwz8k2siAuJQ3x6ngzOOaK_-agaLmfdk4Sij1ho7nalKpWSWHS57z7dkA_gNuEm4BxszRwzSmODs7IU_ce48SLc0CuCaD-vW0j17yshz",
    imageAlt: "Portrait of a female cardiologist in a sleek, high-tech hospital environment.",
    schedule: "Mon, Wed, Fri: 10:00 - 15:00",
    specialty: "Cardiac Intervention Expert",
    specialtyIcon: "monitor_heart"
  },
  {
    name: "Dr. Kevin Tan",
    title: "Dermatologist, Sp.KK",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQACt7E0YzAfV-HGtCPL_YshbpZoXb33rijgjNkxGhk0gbSzT5iKkKkdlLCBY_gPko1_umbf4qWRo45HBfWZDQ-Qe1Qd9wjCFL3KkilfdbFrX2SFIHHAadPH41HzXJlAjhlu0L5Ercm1FPghFB-RaEAe9lunQiWrFKd5nlim474xTYBz6ZgfXtCZupsAUVahq7ajwfJ1V8ijC-2A80JiCI_6y_FS78FokzNq4cpY3RZ4fgkanHG0o6",
    imageAlt: "A professional headshot of a male dermatologist with clean, healthy skin.",
    schedule: "Wed - Sat: 13:00 - 19:00",
    specialty: "Cosmetic & Clinical Care",
    specialtyIcon: "spa"
  }
];

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
    <BrowserRouter>
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
        <TopNavBar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <WhyUsSection />
              <ServicesPreview />
              <TestimonialsSlider />
              <InsurancePartners />
            </>
          } />
          <Route path="/team" element={<OurTeamPage doctors={doctors} />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}