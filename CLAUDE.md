# Studio 27 Salon & Spa — project notes

- **What this is:** a fictional brand used as a Bluluma design case study (formerly the "Studio 21" SwiftLift preview). All contact details are placeholders — keep them fake.
- **Style:** "Warm Minimal" — sand #ECE5DA, paper #F6F1EA, ink #2B2420, clay #A4573A (one accent), blush #E9B79F (accent on dark only), line #CFC3B3, taupe #5E534A. Headings Instrument Serif (one italic clay word per heading), body DM Sans. Pill buttons/nav, 4px image radius.
- **Shared data:** name, phone, email, address, hours, awards live in `src/lib/site.ts` — change them there, not in pages.
- **Tokens/utilities:** `src/index.css` (`.wrap`, `.section`, `.eyebrow`, `.display-*`, `.lead`, `.btn-dark/.btn-clay/.btn-line`, `.pill`, `.field`) + colors in `tailwind.config.ts`.
- **Images:** `src/assets/`. Do not use the old Spa-1 back-view massage photo (distorted body); massage = `services-massage.jpg` (hot stones).
- **Deploy:** Netlify (auto-deploys from `main`). Keep the netlify.app noindex script in `index.html`.
- **Footer credit:** "Web Design by Bluluma | Powered by SwiftLift" + fictional-brand note.
- Contact/newsletter forms are demo only (no backend).
