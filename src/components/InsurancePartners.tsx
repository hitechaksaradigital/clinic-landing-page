export default function InsurancePartners() {
  const partners = [
    { name: "BPJS Kesehatan", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDi9-ZbkkaYvt40qeMlXNUwLEBUb_dpqZjKuXBE1ZbTaVRfGTCnnPZi8uQqb4bRMSBPq4BTMZPeTuE3385aDfTG2bAyx059rKzhveGR2xVhTk2UMqGNpKrPIChD8FaTMfupjVHQwjmBS50aCfQBt1BQ-rxqvb688_9PhEFpVKelbdqxFPBVl-cgdspjdIGSyTKMrrEChZCrnPxAN7wokPqbsb_kusQxoScsLBdzttPJFFWToWc9ey9m" },
    { name: "Prudential", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW6PsaUfV9VTwmS7jsYheZ-rwsa2Bv_nEuWzaa0n3rEEiJroe_7lLACa_bAePysGmFBXborruaIwiETr46SgnD6OtRRKEUe-H1QezHs_pcuQT5e_3HE2y0qPRAzQDKvtfuWWPkjollC9gTdPsvGjvEIlgem9ly1_cbB_rFY0fHGj-41VNirn1LrgtOcawVXLb0mERwC8NkRFLxkIH4lAhmS1cAao-4h-wO0iL3Mvvc0A1TgSNruCmz" },
    { name: "Allianz", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-ITKPj8Ck8XGgKrOz93HbDWppXPxj2Dhh-0Kh_VxjNYnDvNnSl-1xQBZh0OwQlEHgtv_9trkkL0WQGrKeWQgkAVsDqbEoBKzOXpV1_nPoBM-KUqFx_wTorY8rMajZDzx14SespqAqxOcSzpSX0zeAdLvmtYDM3HNmgNny0va5vBW-Xc1w2f8aqy6naK8eky9LEPBkvYgHh3tIGPkXWrxlNi0Prmc0XHz8EG2ixEr39oM6h6BtNzwq" },
    { name: "Manulife", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABQaJO6cc8SO3HCqHfhTP-pSGtKy_2dbEnTZX2R1DxLaP0bBKDGm7BAsUtaZipW3LLV779Zko3eB90FxWGPNUsT2aYtM0WtiyKANdXOdGdmiIZOpySX9pzhElv_rCbWT3Y0HXk2x1oYci8IQEuFXCyN_QX9lFqtofvztmalkBNCZ9AnKyNjHJsAylFwI7FW4NU3QH7W7YAGgcLpVekMlgpMNp7rRcISEe8wbvhzjQEiOuJrw6ymCmg" },
    { name: "AIA", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwLCGH5kFHq8-wfmrQOvLNRUUBcjRpBFIXga17AsSbxAOBVxfNA7CkKtSJS8efnUy2Gbkx4fw8Pzgc_k62ak8IMiYRtP0nuwPbaj26S1H9E1JMBPSc-6rkl7RheNcWTscfbvPYahZU0OfUumw5DJK4qHJCYAlymXEYTu1hICKRqJ3dFdx2lD7jnKZEQpsVFDfoD6q37RXa0tQPfJVZ9yyeRYSIvRk9-lEmLVlKHLwLbUKZDzjjWjMI" }
  ];

  return (
    <section className="py-16">
      <div className="w-full px-margin-desktop max-w-container-max mx-auto">
        <h3 className="text-center font-label-md text-label-md text-on-surface-variant mb-12 uppercase tracking-widest">Partner Asuransi & Jaminan</h3>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="h-12 w-32 bg-contain bg-center bg-no-repeat filter brightness-0" 
              data-alt={`${partner.name} logo`} 
              style={{ backgroundImage: `url('${partner.image}')` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}