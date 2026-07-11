export default function Footer() {
  return (
    <footer className="bg-surface-container-low full-width">
      <div className="w-full px-margin-desktop py-section-gap max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="space-y-6">
          <div className="font-headline-sm text-headline-sm font-bold text-primary">Klinik Sehat Sejahtera</div>
          <p className="text-body-md text-on-surface-variant">Melayani masyarakat dengan sepenuh hati sejak tahun 2010. Mitra terpercaya kesehatan keluarga Anda.</p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="font-label-md text-label-md text-primary uppercase font-bold">Quick Links</h4>
          <ul className="space-y-3">
            <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">About Us</a></li>
            <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Services</a></li>
            <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Contact Support</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-label-md text-label-md text-primary uppercase font-bold">Lokasi Kami</h4>
          <div className="text-on-surface-variant space-y-3">
            <div className="flex gap-2">
              <span className="material-symbols-outlined text-[20px]">location_on</span>
              <span>Jl. Sehat No. 123, Kota Sejahtera, Indonesia</span>
            </div>
            <div className="flex gap-2">
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>(021) 1234-5678</span>
            </div>
          </div>
          <a className="inline-block px-4 py-2 bg-surface-container-high rounded-full text-primary font-bold text-label-md hover:bg-surface-container-highest transition-colors" href="#">Buka Google Maps</a>
        </div>
        <div className="space-y-6">
          <h4 className="font-label-md text-label-md text-primary uppercase font-bold">Jam Operasional</h4>
          <ul className="text-on-surface-variant space-y-2">
            <li className="flex justify-between"><span>Senin - Sabtu:</span> <span>07:00 - 21:00</span></li>
            <li className="flex justify-between"><span>Minggu:</span> <span>08:00 - 14:00</span></li>
            <li className="flex justify-between text-error font-bold"><span>Emergency:</span> <span>24 Jam</span></li>
          </ul>
        </div>
      </div>
      <div className="w-full px-margin-desktop py-8 border-t border-outline-variant/30 text-center text-caption text-on-surface-variant">
        © 2024 Klinik Sehat Sejahtera. All rights reserved.
      </div>
    </footer>
  );
}