export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          data-alt="A brightly lit, modern medical clinic interior with clean white walls, minimalist wooden accents, and soft recessed lighting. A spacious waiting area features comfortable ergonomic seating in shades of blue. Large floor-to-ceiling windows allow natural daylight to flood the space, creating a serene and welcoming professional medical environment. The overall aesthetic is clinical yet warm and high-tech." 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7U-MmU47aq06iW0xzzo9KWyu97ga6BcJ5Kgffdb7433xFfCWXh5kWfOQRYDsUIOkBnSz9mNcMLfAc0T-J6URowSsXqJdVr14QWFa7ksDhLP95qZi3pURvRM-bUWIm2jTQqzb1Il6Df4olM3sDSrfxhnIXxueGrwg0iqvaPHuQvig5l7EoKyWRAqsaM_sprMKmpHUXHMW6zLNcfd0D1awj_UQQP3i5fPSJ_z2csnLrbEj0w4CzomyB" 
          alt="Clinic Interior"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>
      <div className="relative z-10 w-full px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
        <div className="space-y-6 md:pr-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md animate-pulse">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            Terakreditasi Paripurna
          </div>
          <h1 className="font-display-lg text-display-lg text-primary leading-tight">
            Kesehatan Anda, <br/><span className="text-secondary">Prioritas Kami</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
            Pelayanan medis profesional dan ramah untuk seluruh keluarga dengan fasilitas modern dan tim dokter ahli.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
              Daftar Sekarang
            </button>
            <button className="px-8 py-4 rounded-full glass-card text-primary border border-primary/20 font-label-md text-label-md flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
              <span className="material-symbols-outlined">chat</span>
              Konsultasi Chat
            </button>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="glass-card rounded-[2rem] p-8 shadow-2xl relative z-10 animate-float">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">medical_services</span>
                </div>
                <div>
                  <div className="font-label-md text-label-md text-on-surface">Next Available</div>
                  <div className="text-secondary font-bold">Today, 14:00 PM</div>
                </div>
              </div>
              <hr className="border-outline-variant mb-6"/>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-body-md">
                  <span className="text-on-surface-variant">General Practitioner</span>
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-caption">Available</span>
                </div>
                <div className="flex justify-between items-center text-body-md">
                  <span className="text-on-surface-variant">Pediatrician</span>
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-caption">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}