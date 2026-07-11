---
name: Klinik Sehat Sejahtera
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#434653'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#737784'
  outline-variant: '#c3c6d5'
  surface-tint: '#1d59c1'
  primary: '#003c90'
  on-primary: '#ffffff'
  primary-container: '#0f52ba'
  on-primary-container: '#bcceff'
  inverse-primary: '#b0c6ff'
  secondary: '#006d43'
  on-secondary: '#ffffff'
  secondary-container: '#75f8b3'
  on-secondary-container: '#007147'
  tertiary: '#334343'
  on-tertiary: '#ffffff'
  tertiary-container: '#4a5b5a'
  on-tertiary-container: '#c0d2d1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#b0c6ff'
  on-primary-fixed: '#001945'
  on-primary-fixed-variant: '#00419c'
  secondary-fixed: '#78fbb6'
  secondary-fixed-dim: '#59de9b'
  on-secondary-fixed: '#002111'
  on-secondary-fixed-variant: '#005232'
  tertiary-fixed: '#d4e6e5'
  tertiary-fixed-dim: '#b8cac9'
  on-tertiary-fixed: '#0e1e1e'
  on-tertiary-fixed-variant: '#3a4a49'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  section-gap: 80px
---

## Brand & Style
The design system for Klinik Sehat Sejahtera is built on the pillars of **Trust, Clarity, and Care**. The visual direction adopts a **Corporate Modern** aesthetic with subtle **Glassmorphism** to reflect a hygienic and technologically advanced medical environment. 

The target audience ranges from young families to seniors, requiring a UI that feels high-tech yet deeply human. We prioritize a "clinical-clean" look—heavy on whitespace and structured layouts—to reduce cognitive load for patients who may be experiencing stress. The emotional response should be one of immediate relief and confidence in the quality of care.

## Colors
The palette is rooted in medical professionalism. 
- **Primary (Sapphire Blue):** Used for primary actions, branding, and navigation to establish authority and trust.
- **Secondary (Calm Teal):** Used for success states, health-related accents, and positive reinforcement icons.
- **Tertiary (Frost Mint):** A very light, desaturated teal used for subtle background sections and hover states to maintain a "cool" and hygienic temperature.
- **Neutral (Slate Gray):** Provides legible contrast for body text without the harshness of pure black.
- **Background:** Soft white (#FAFAFA) is used to avoid screen glare while maintaining a sterile, modern feel.

## Typography
We utilize **Manrope** for headlines to provide a modern, friendly, and geometric structure that feels contemporary. Its balanced proportions ensure high legibility in a clinical context. For body copy and functional labels, **Inter** is used for its systematic and utilitarian precision, ensuring that critical medical information is easily digestible. High-contrast weights are used sparingly to guide the user's eye toward calls to action like "Book Appointment."

## Layout & Spacing
The layout follows a **Fluid Grid** model with a maximum container width to maintain readability on ultra-wide monitors. 
- **Desktop:** 12-column grid with 24px gutters. Content is centered with generous outer margins to evoke a sense of calm.
- **Tablet:** 8-column grid with 20px gutters. 
- **Mobile:** 4-column grid with 16px gutters.
Spacing follows an 8px base unit. Section gaps are intentionally large (80px+) to prevent the interface from feeling "cluttered" or "crowded," which can increase patient anxiety.

## Elevation & Depth
Depth is achieved through **Tonal Layers** and **Ambient Shadows**. We avoid heavy dropshadows in favor of soft, diffused blurs that make cards appear to float gently above the surface. 
- **Level 1 (Static Cards):** 1px border in a lighter shade of the primary color with a very soft 4px blur shadow.
- **Level 2 (Interactive/Hover):** Increased shadow spread (12px blur) with a subtle tint of the primary blue in the shadow color.
- **Navigation:** Uses a backdrop blur (glassmorphism) effect with 80% opacity white background to keep the context of the page visible while scrolling.

## Shapes
A **Rounded** approach is used to soften the traditional "cold" perception of medical institutions. All interactive elements, such as buttons and input fields, feature a 0.5rem (8px) radius. Larger containers like service cards or hero sections utilize "rounded-xl" (1.5rem) to create a welcoming, organic feel. This shape language suggests approachability and modern care.

## Components
- **Buttons:** Primary buttons are solid Blue with white text. Secondary buttons use the Teal accent or an outlined style. High roundedness is mandatory.
- **Inputs:** Fields have a light gray background with a 1px border that turns Primary Blue on focus. Labels are always visible above the field for accessibility.
- **Cards:** Used for doctor profiles and services. They feature a white background, soft shadow, and a 24px internal padding.
- **Chips:** Small, rounded badges used for "Available Today" or department categories, using the Tertiary green color with dark teal text.
- **Icons:** Thin-stroke, professional medical icons (e.g., stethoscopes, calendars) with a two-tone color style (Primary + Secondary).
- **Appointment Bar:** A sticky component or prominent card that allows users to select a service, date, and doctor quickly.