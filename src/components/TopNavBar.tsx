import { NavLink } from "react-router-dom";

export default function TopNavBar() {
  return (
    <nav className="docked full-width top-0 sticky z-50 bg-surface/80 dark:bg-inverse-surface/80 backdrop-blur-md shadow-sm h-20 transition-all duration-300 glass-nav">
      <div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-full">
        <div className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed">Klinik Sehat Sejahtera</div>
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={({ isActive }) => 
            `font-body-md text-body-md ${isActive ? 'text-primary dark:text-primary-fixed font-bold border-b-2 border-primary dark:border-primary-fixed pb-1' : 'text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors'} active:scale-95 duration-200`
          }>Home</NavLink>
          <NavLink to="/" className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors active:scale-95 duration-200">Services</NavLink>
          <NavLink to="/team" className={({ isActive }) => 
            `font-body-md text-body-md ${isActive ? 'text-primary dark:text-primary-fixed font-bold border-b-2 border-primary dark:border-primary-fixed pb-1' : 'text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors'} active:scale-95 duration-200`
          }>Team</NavLink>
          <NavLink to="/" className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors active:scale-95 duration-200">Blog</NavLink>
          <NavLink to="/" className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors active:scale-95 duration-200">FAQ</NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden lg:block px-6 py-2 rounded-full border border-error text-error font-label-md hover:bg-error/5 transition-all active:scale-95">Emergency</button>
          <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-label-md shadow-md hover:opacity-90 transition-all active:scale-95">Book Appointment</button>
          <button className="md:hidden flex items-center justify-center w-10 h-10 text-on-surface">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}