export default function Footer() {
  return (
    <footer className="bg-surface-container-low full-width border-t border-primary/5">
      <div className="w-full px-margin-desktop py-section-gap max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="space-y-6">
          <div className="font-headline-sm text-headline-sm font-bold text-primary">Klinik Sehat Sejahtera</div>
          <p className="text-on-surface-variant font-body-md">Providing holistic and compassionate healthcare since 2004. Your health, our priority.</p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all" href="#">
              <span className="material-symbols-outlined text-[20px]">share</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all" href="#">
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-label-md text-primary mb-6 uppercase tracking-wider">Services</h4>
          <ul className="space-y-4">
            <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">General Checkup</a></li>
            <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Pediatrics</a></li>
            <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Cardiology</a></li>
            <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Dental Care</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-primary mb-6 uppercase tracking-wider">Resources</h4>
          <ul className="space-y-4">
            <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">About Us</a></li>
            <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Contact Support</a></li>
            <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Maps Location</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-primary mb-6 uppercase tracking-wider">Newsletter</h4>
          <p className="text-on-surface-variant text-caption mb-4">Stay updated with health tips and news.</p>
          <div className="flex flex-col gap-3">
            <input className="px-4 py-2 rounded-lg border-outline-variant bg-surface-bright focus:ring-primary focus:border-primary" placeholder="Email address" type="email" />
            <button className="bg-primary text-on-primary py-2 rounded-lg font-label-md hover:opacity-90 transition-all">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="w-full px-margin-desktop py-8 max-w-container-max mx-auto border-t border-primary/5 text-center text-on-surface-variant text-caption">
        © 2024 Klinik Sehat Sejahtera. All rights reserved.
      </div>
    </footer>
  );
}