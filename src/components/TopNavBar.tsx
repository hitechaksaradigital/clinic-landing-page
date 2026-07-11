export default function TopNavBar() {
  return (
    <nav className="docked full-width top-0 sticky z-50 bg-surface/80 backdrop-blur-md shadow-sm h-20 transition-all duration-300">
      <div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-full">
        <div className="font-headline-sm text-headline-sm font-bold text-primary">
          Klinik Sehat Sejahtera
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md" href="#">Home</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Services</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Team</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Blog</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">FAQ</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden lg:block px-6 py-2.5 rounded-full border-2 border-error text-error font-label-md text-label-md hover:bg-error/5 transition-all active:scale-95 duration-200">
            Emergency
          </button>
          <button className="px-6 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-lg shadow-primary/20 hover:bg-primary-container transition-all active:scale-95 duration-200">
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
}