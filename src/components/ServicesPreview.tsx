export default function ServicesPreview() {
  const services = [
    { icon: "medical_information", title: "Check-ups", desc: "Pemeriksaan rutin untuk menjaga kesehatan tubuh tetap optimal." },
    { icon: "child_care", title: "KIA", desc: "Kesehatan Ibu dan Anak, termasuk imunisasi dan konsultasi kehamilan." },
    { icon: "biotech", title: "Lab", desc: "Fasilitas laboratorium lengkap untuk hasil diagnosis yang akurat." },
    { icon: "content_cut", title: "Khitan", desc: "Layanan khitan modern dengan metode minim rasa sakit." },
    { icon: "fact_check", title: "MCU", desc: "Paket Medical Check-Up komprehensif untuk kebutuhan pribadi atau kerja." },
  ];

  return (
    <section className="py-section-gap">
      <div className="w-full px-margin-desktop max-w-container-max mx-auto text-center mb-16">
        <h2 className="font-headline-md text-headline-md text-primary mb-4">Layanan Unggulan</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Solusi kesehatan lengkap untuk Anda mulai dari pemeriksaan rutin hingga layanan laboratorium terpadu.
        </p>
      </div>
      <div className="w-full px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <div key={index} className="group p-6 rounded-3xl bg-white border border-outline-variant/30 hover:border-primary transition-all hover:shadow-xl hover:shadow-primary/5">
            <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
              <span className="material-symbols-outlined text-primary group-hover:text-white">{service.icon}</span>
            </div>
            <h4 className="font-headline-sm text-[20px] text-primary mb-2">{service.title}</h4>
            <p className="text-caption text-on-surface-variant mb-4">{service.desc}</p>
            <a className="inline-flex items-center text-primary font-bold text-label-md group-hover:gap-2 transition-all" href="#">
              Detail <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}