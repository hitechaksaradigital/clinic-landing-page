export default function TestimonialsSlider() {
  const testimonials = [
    {
      name: "Ibu Rahmawati",
      role: "Pasien KIA",
      rating: 5,
      text: "Sangat puas dengan pelayanannya. Dokternya ramah banget dan mau dengerin keluhan pasien dengan sabar. Antriannya juga teratur dan tempatnya bersih sekali.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWiVFsxLTp3pd9KN2rinsDZtlV4AZgYY9uovjVJvNH-3rVwcBjsO2lpc80Jh7L6ilZ5DK2unfILyqdw4QEPThbEZT_-H1XO91m_e_CLFeLloEow7myOyp5kqaCeAfT4LBBsHI6eKNOfwtnda_8D-C49CvuTEDyqiTzm2vqZcyP74iCaQV5wby8EFCmaZ0XiyR8vfZZ3s3Xrt1Hprecp3iNGYqynU2_bo2fo9Nsi0DE2MEgJMSPM9Gj"
    },
    {
      name: "Bapak Budi Hartono",
      role: "Pasien Umum",
      rating: 4.5,
      text: "Klinik paling recomended untuk keluarga. Harga sangat terjangkau tapi fasilitasnya seperti klinik mahal. Labnya juga cepat hasilnya, sangat membantu.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXjRFfLA7X1AJQ7jwCr4qkdGCRGZzFt1fKqei8hxHdcYTheID7Tlqjb-2vpJMY3suErDEVso7kfYMjd0QSnm8pQVxr9GnUxxaZ7AYFYE45BtZ835R3Zmy5qSF0tgIK7qLPJPaJZt3J5_u2LQXPV_npEo8M5pGNEku6Q8zNaoEaj1W2TjETyAtwv7kbAWKzvP-wWGbrJDKFzhuL-K0R1RsSpJwZyxyf-vkdrDQDzjkboQ44QbkPVmZm"
    },
    {
      name: "Ibu Sari",
      role: "Pasien Khitan",
      rating: 5,
      text: "Anak saya khitan di sini, metodenya oke banget, cepat sembuh dan dokternya pintar sekali menenangkan anak kecil. Terima kasih Klinik Sehat Sejahtera!",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDbeC4mFogw7XSmVmJhBZrnI7cnUWatNloAR1U8d9I1UoQpr6PEqRFDeZpLWg9kS_PKzZw1tPfEypIr4UFga_nq-YZlCv_7YPMCE9OqTgwbgFi92u6Fwhcg7bQLRijKbskDhKzeEYOuLXbJJIkpu5K5bvo3N_oHM9uueHTSIISFAHHA9zTlxoDEnAEvxfH0ANIdzk6bb7mhKJuMd4HUjfmSaj3RuG_J3tngOMUUbw0J1Rlq8cfylVe"
    }
  ];

  return (
    <section className="py-section-gap bg-primary-container/10 overflow-hidden">
      <div className="w-full px-margin-desktop max-w-container-max mx-auto text-center mb-12">
        <h2 className="font-headline-md text-headline-md text-primary">Apa Kata Pasien Kami</h2>
      </div>
      <div className="flex overflow-x-auto pb-8 gap-8 px-margin-desktop snap-x no-scrollbar">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="min-w-[320px] md:min-w-[450px] snap-center glass-card p-8 rounded-3xl">
            <div className="flex text-secondary-fixed-dim mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {i < Math.floor(testimonial.rating) ? "star" : i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0 ? "star_half" : "star"}
                </span>
              ))}
            </div>
            <p className="font-body-md text-body-md italic text-on-surface mb-6">
              "{testimonial.text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-dim">
                <img className="w-full h-full object-cover" data-alt={`${testimonial.name} portrait`} src={testimonial.image} alt={testimonial.name} />
              </div>
              <div>
                <div className="font-bold text-primary">{testimonial.name}</div>
                <div className="text-caption text-on-surface-variant">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}