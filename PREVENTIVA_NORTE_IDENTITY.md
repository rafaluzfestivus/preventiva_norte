# Preventiva Norte — Identity Reference

- Domain: https://preventivanorte.pt
- Email: comercial@preventivanorte.pt
- WhatsApp/Mobile: +351 910 407 785  ⚠️ UNCONFIRMED — live site shows 910 407 485, one digit differs. Confirm with client before launch.
- Landline: +351 253 047 599
- Service areas: Porto, Braga, Vila Nova de Gaia, Matosinhos, Maia, Gondomar, "todo o Norte de Portugal"
- Primary color: #EAB308 (yellow-500)
- Secondary color: #4d2a36 ("Custom Wine")
- Default SEO title: "Instalação de Redes de Proteção no Porto e Norte | Preventiva Norte"
- Analytics: NEW GA4 property + GTM container required (do not reuse Centro's or Este's IDs). See Task 3.
- Lead capture: Web3Forms only, independent Web3Forms account (NOT shared with Sur's placeholder key). See Task 4.
- Next.js version: pinned to `16.3.4` (bumped from the group's `16.1.6`
  convention on 2026-09-09 to patch a Critical npm-audit advisory — HTTP
  request smuggling via `rewrites`, plus unbounded `next/image` disk-cache
  growth — that affects `next@16.1.6`. This is an intentional, owner-approved
  deviation from Sur/Este/Centro, which remain on `16.1.6` pending their own
  upgrade. See the final-review fix-wave notes
  (`.superpowers/sdd/2026-09-09-preventiva-norte-rebuild/final-review-fix1-report.md`)
  before "fixing" this back down to match the siblings.
