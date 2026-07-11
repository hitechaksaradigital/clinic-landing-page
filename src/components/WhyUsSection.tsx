export default function WhyUsSection() {
  return (
    <section className="py-section-gap bg-surface-container-low">
      <div className="w-full px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-center">
          <div className="lg:col-span-1">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Mengapa Memilih Kami?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Kami berkomitmen memberikan standar pelayanan kesehatan tertinggi dengan pendekatan yang humanis dan terjangkau bagi seluruh lapisan masyarakat.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-surface transition-transform hover:-translate-y-2 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary text-[32px]">sentiment_satisfied</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Pelayanan Ramah</h3>
              <p className="text-body-md text-on-surface-variant">Setiap pasien adalah prioritas. Kami melayani dengan senyum dan empati.</p>
            </div>
            <div className="p-8 rounded-3xl bg-surface transition-transform hover:-translate-y-2 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-[32px]">stethoscope</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Dokter Ahli</h3>
              <p className="text-body-md text-on-surface-variant">Tim medis profesional dengan pengalaman bertahun-tahun di bidangnya.</p>
            </div>
            <div className="p-8 rounded-3xl bg-surface transition-transform hover:-translate-y-2 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-tertiary-fixed flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary text-[32px]">payments</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Harga Terjangkau</h3>
              <p className="text-body-md text-on-surface-variant">Kualitas premium dengan biaya yang tetap bersahabat untuk keluarga.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}