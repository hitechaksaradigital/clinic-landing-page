import type { Doctor } from "../types";
import { useEffect } from "react";

interface TeamPageProps {
  doctors: Doctor[];
}

export default function OurTeamPage({ doctors }: TeamPageProps) {
  useEffect(() => {
    const handleScroll = () => {
      const bar = document.getElementById('cta-bar');
      if (window.scrollY > 300) {
        bar?.classList.remove('translate-y-[200%]');
        bar?.classList.add('translate-y-0');
      } else {
        bar?.classList.add('translate-y-[200%]');
        bar?.classList.remove('translate-y-0');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
      <header className="text-center mb-16 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant mb-6 animate-fade-in">
          <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          <span className="font-label-md text-label-md uppercase tracking-wider">Trusted Excellence</span>
        </div>
        <h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">Meet Our Specialists</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant text-balance">
          Our clinic brings together a diverse team of world-class medical professionals dedicated to your health and well-being. With decades of combined expertise and a compassionate approach, we ensure you receive the highest standard of care.
        </p>
      </header>
      
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {doctors.map((doctor, index) => (
          <div key={doctor.name} className="bg-surface-container-lowest rounded-xl border border-primary/10 p-6 flex flex-col transition-all duration-300 hover:-translate-y-2 group">
            <div className="aspect-[4/5] rounded-lg overflow-hidden mb-6 relative">
              <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                   data-alt={doctor.imageAlt} 
                   src={doctor.image} 
                   alt={doctor.name} />
              {doctor.availableToday && (
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-secondary-container/90 backdrop-blur-sm text-on-secondary-fixed-variant text-caption font-semibold flex items-center gap-1 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    Available Today
                  </span>
                </div>
              )}
              {doctor.icon && (
                <div className={`absolute ${doctor.iconPosition || 'top-4 right-4'}`}>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{doctor.icon}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="flex-grow">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">{doctor.name}</h3>
              <p className="font-label-md text-label-md text-primary mb-4">{doctor.title}</p>
              <div className="space-y-3">
                {doctor.schedule && (
                  <div className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
                    <span className="text-caption">{doctor.schedule}</span>
                  </div>
                )}
                {doctor.specialty && (
                  <div className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>{doctor.specialtyIcon || 'verified_user'}</span>
                    <span className="text-caption">{doctor.specialty}</span>
                  </div>
                )}
              </div>
            </div>
            <button className="mt-6 w-full py-3 rounded-lg border border-primary/20 text-primary font-label-md hover:bg-primary hover:text-on-primary transition-all duration-300 flex justify-center items-center gap-2">
              View Profile
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        ))}
        
        <div className="bg-primary rounded-xl p-8 flex flex-col justify-center items-center text-center text-on-primary relative overflow-hidden transition-all duration-300 hover:-translate-y-2 group">
          <div className="relative z-10">
            <span className="material-symbols-outlined text-[48px] mb-6 opacity-80" style={{ fontVariationSettings: "'wght' 200" }}>work</span>
            <h3 className="font-headline-sm text-headline-sm mb-4">Are you a healthcare expert?</h3>
            <p className="font-body-md text-body-md mb-8 opacity-90">We are always looking for passionate professionals to join our growing clinical family.</p>
            <button className="bg-surface text-primary px-8 py-3 rounded-full font-label-md hover:bg-surface-container-high transition-colors active:scale-95">View Open Positions</button>
          </div>
        </div>
      </section>
      
      <section className="mt-section-gap grid grid-cols-2 md:grid-cols-4 gap-8 py-12 px-8 bg-surface-container-low rounded-3xl">
        <div className="text-center">
          <div className="font-display-lg text-primary text-[40px] leading-none mb-2">45+</div>
          <div className="font-label-md text-on-surface-variant uppercase tracking-widest">Medical Experts</div>
        </div>
        <div className="text-center">
          <div className="font-display-lg text-primary text-[40px] leading-none mb-2">12k+</div>
          <div className="font-label-md text-on-surface-variant uppercase tracking-widest">Happy Patients</div>
        </div>
        <div className="text-center">
          <div className="font-display-lg text-primary text-[40px] leading-none mb-2">15</div>
          <div className="font-label-md text-on-surface-variant uppercase tracking-widest">Departments</div>
        </div>
        <div className="text-center">
          <div className="font-display-lg text-primary text-[40px] leading-none mb-2">24/7</div>
          <div className="font-label-md text-on-surface-variant uppercase tracking-widest">Care Availability</div>
        </div>
      </section>
      
      <AppointmentBar />
    </main>
  );
}

function AppointmentBar() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-32px)] max-w-2xl bg-white/90 backdrop-blur-xl border border-primary/10 shadow-2xl rounded-2xl p-4 flex flex-col md:flex-row items-center gap-4 transition-transform duration-500 translate-y-[200%]" id="cta-bar">
      <div className="flex items-center gap-4 flex-grow px-2">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>event_available</span>
        </div>
        <div>
          <div className="font-label-md text-on-surface">Ready to book?</div>
          <div className="text-caption text-on-surface-variant">Connect with our experts today.</div>
        </div>
      </div>
      <div className="flex gap-2 w-full md:w-auto">
        <button className="flex-1 md:flex-none px-6 py-2.5 rounded-xl border border-outline text-on-surface font-label-md hover:bg-surface-container transition-all">Later</button>
        <button className="flex-1 md:flex-none px-6 py-2.5 rounded-xl bg-primary text-on-primary font-label-md shadow-lg hover:opacity-90 transition-all active:scale-95">Book Now</button>
      </div>
    </div>
  );
}