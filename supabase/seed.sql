-- Seed data for doctors table
insert into public.doctors (name, title, image, image_alt, schedule, specialty, specialty_icon, available_today)
values
  ('Dr. Adrian Santoso', 'Senior Surgeon, MD', 
   'https://lh3.googleusercontent.com/aida-public/AB6AXuAdZx0E2K5z_x4N1TjeGpSfojSikAs2QfkDk4I1GqD8J_ikJhbD2_MZRUm3_vq9ZrSYc_VuXYnAkA_A-TXQBpy8ithHoiZDmiXUwlW_LiVyZvbjF2RgG81qHS7x0eWNst2Gh20456vmFiugWe8vGf9sUYohHOBMj_sxZ9GBIBJz3u-6qQ2RnC7Yia2ss8TLAFG9WoZ8_KV-iAS6DyEPRDS0udRRRregHNQE_MyPP5HOcxoYVW1Beytd',
   'A professional headshot of a senior male doctor with a warm smile, wearing a white clinical coat and a stethoscope.', 
   'Mon - Thu: 08:00 - 14:00', '15+ Years Surgical Expertise', 'verified_user', true),
   
  ('Dr. Sarah Wijaya', 'Pediatrician, Sp.A',
   'https://lh3.googleusercontent.com/aida-public/AB6AXuBU7-G8XxKW3wJTsukl4CEBQ6Z7jnCAKzF215AXisaLUmHxV1eOFYyDc7Oxzqq_pV34GzRUE9A5c5rxtYeYWbMYZpuFlZhV3taXZ5uqyVEGnt6Mw0B8znJ0HJclQJLljaTt5Yorxv_z3ac4eQkCmHvdPC88MZIVoJdTM0IHOnuUS2dZ0opEhN9SGHNop6M-HIJoAy_jPru6Bkd7T3K51uQ9g_vxo6hFMpl-P478W8JVZMn-C_iwjMIc',
   'A professional headshot of a friendly female pediatrician in her late 30s.',
   'Tue - Sat: 09:00 - 16:00', 'Child Development Specialist', 'verified_user', false),
   
  ('Dr. Marcus Lee', 'General Practitioner',
   'https://lh3.googleusercontent.com/aida-public/AB6AXuDWi_ZmfEF_pkpkePAbCChSKknVhzM4uBYEJC-cfWh-s72qMlvLUZU96AELyNEr5sc3QgCBusThUUY2MynaVLZwv26BgSvWfJz-sTWAOO0g5cL5M0b_zzZS7kvJC8XuaxPkPaOxi0w_AyyfmWbczc0Zm8Jsv1VAzB50I4fizSdFHp84j0ZNKtlkKjzsbQl6GUq0aNHxdVbT-oHgdr8vfADVJ-T1sm0KBdQkiRZ7C8sSBywYZPnobLdF',
   'A portrait of a male General Practitioner in a modern, well-lit medical clinic setting.',
   'Mon - Fri: 08:00 - 17:00', 'Family Health Consultant', 'emergency', false),
   
  ('Dr. Elena Rodriguez', 'Cardiologist, MD',
   'https://lh3.googleusercontent.com/aida-public/AB6AXuDZY0n0HPnKIorVwd62CV8Y_ft75dtrwirVNaGCvereCVy0ZjfFg1A_g7H1GFADNW7njQ61YZTqg9TF0iljeuevaLWC9jkNvFY92yZ1J2RkoEd3IYoBMqoSPfmkdLjFdYwIKwYvvdzWjau7Rwz8k2siAuJQ3x6ngzOOaK_-agaLmfdk4Sij1ho7nalKpWSWHS57z7dkA_gNuEm4BxszRwzSmODs7IU_ce48SLc0CuCaD-vW0j17yshz',
   'Portrait of a female cardiologist in a sleek, high-tech hospital environment.',
   'Mon, Wed, Fri: 10:00 - 15:00', 'Cardiac Intervention Expert', 'monitor_heart', false),
   
  ('Dr. Kevin Tan', 'Dermatologist, Sp.KK',
   'https://lh3.googleusercontent.com/aida-public/AB6AXuBQACt7E0YzAfV-HGtCPL_YshbpZoXb33rijgjNkxGhk0gbSzT5iKkKkdlLCBY_gPko1_umbf4qWRo45HBfWZDQ-Qe1Qd9wjCFL3KkilfdbFrX2SFIHHAadPH41HzXJlAjhlu0L5Ercm1FPghFB-RaEAe9lunQiWrFKd5nlim474xTYBz6ZgfXtCZupsAUVahq7ajwfJ1V8ijC-2A80JiCI_6y_FS78FokzNq4cpY3RZ4fgkanHG0o6',
   'A professional headshot of a male dermatologist with clean, healthy skin.',
   'Wed - Sat: 13:00 - 19:00', 'Cosmetic & Clinical Care', 'spa', false);