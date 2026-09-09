# Preventiva Group — DESIGN.md

This document is the shared reference for the Preventiva group's four
marketing sites (Centro, Este, Sur, Norte). Norte (this repo) is the current
reference implementation — it was rebuilt from scratch on top of a fork of
Este's codebase, and the tokens/patterns below reflect what actually shipped
here, not just what was planned. The last section, "Lições da Norte", is
required reading before starting the Sur rebuild (next in the group's
roadmap).

## Colors

Defined in `src/app/globals.css`:

- `--color-primary`: `#EAB308` (yellow-500)
- `--color-secondary`: `#4d2a36` (custom wine)
- `--color-text-main`: `#374151` (gray-700)
- `--color-text-light`: `#F3F4F6` (gray-100)

These values are currently identical across Centro, Este, Sur, and Norte by
convention, but are NOT synced at build time — each repo owns its own copy of
`globals.css`. A future brand differentiation (per-company accent color) is
possible without touching the other three sites.

## Typography

Inter (Google Fonts), same weight/size scale as documented in
`preventiva.base/preventivacentro.es-design.md`.

## Components (shared shape across repos, independently implemented)

- `Navbar`, `Footer`, `WhatsAppButton`, `CookieConsent` (all in
  `src/components/layout/`) — same function-name contract in every repo
  (`export function Navbar()`, `export function Footer()`, etc.), content and
  locale logic differ per site.
- `ProteccionContent` (`src/app/proteccion/ProteccionContent.tsx`, with an
  `es/proteccion/CaProteccioContent.tsx` locale counterpart) — the
  consolidated services page; every new site should use this pattern instead
  of separate `/servicios/*` pages (see Norte's Task 8 consolidation as the
  reference migration).

## i18n pattern

`Locale` union type + `src/dictionaries/{types,pt,es}.ts` + a
`LocaleUpdater` client component (`src/components/layout/LocaleUpdater.tsx`)
+ explicit `dict` props on every section component at the secondary-locale
route, with hardcoded defaults at the primary route. Norte's `pt`/`es`
implementation (this repo) is the reference for the next site that needs
bilingual support.

Note: not every piece of copy on the site goes through this dictionary
system. `ProteccionContent.tsx`/`CaProteccioContent.tsx` and the privacy
policy pages are standalone components with their own hardcoded copy per
locale — deliberately outside `SiteDict`, because they were ported wholesale
from legacy content rather than authored as parallel PT/ES strings. Know
which pattern a given page uses before assuming a dictionary edit will reach
it.

## Lead capture patterns (two valid, deliberately different)

- **Shared-CRM pattern** (Centro, Este): `/api/lead` route → Supabase
  `clients` table with a `company_id` tenant field.
- **Independent pattern** (Norte, and Sur once finished): Web3Forms-only
  (`NEXT_PUBLIC_WEB3FORMS_KEY`, posted client-side to
  `https://api.web3forms.com/submit` from `ContactSection.tsx`), no Supabase
  dependency. Use this pattern for any company that should not appear in
  Centro's internal sales panel.

## Analytics pattern (mandatory going forward)

Never hardcode a GA4/GTM/Ads ID in committed code. Always read from
`NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_GTM_ID` / `NEXT_PUBLIC_GOOGLE_ADS_ID`,
rendering nothing when unset. See Norte's `src/app/layout.tsx` (this repo)
as the reference implementation — this was introduced specifically because
Norte's previous code shipped with Centro's IDs hardcoded, and (as this
rebuild also discovered — see below) forking carries the same risk forward
in the opposite direction too.

---

## Lições da Norte (primeira implementação)

Norte was rebuilt by forking Este's codebase and re-skinning it. That
process is efficient, but it repeatedly surfaced a class of bug that pure
code review does not catch. These lessons are written for whoever builds
Sur next — most of this will apply there almost unchanged.

### 1. The "wrong-brand fact" bug class doesn't contain the word "Este"

Forking a sibling's codebase carries over that sibling's *real data*, not
just its code shape. Over the course of this build, the following
Este-specific facts were found still live in Norte's codebase, well after
the obvious rename/rebrand pass was believed complete:

- **JSON-LD `sameAs` and `aggregateRating`** in `layout.tsx` — pointed at
  Este's real Instagram account and carried a fabricated star rating that
  had never applied to Norte. Removed entirely rather than invented with
  different numbers (no real review data existed yet to publish).
- **A hardcoded Spanish phone number in body copy** —
  `ProteccionContent.tsx` / `CaProteccioContent.tsx` embedded
  `wa.me/34681625566` (a Spain, +34, number) inside prose describing a
  Portugal-based business, discovered only when Task 7's reviewer noticed
  the country code didn't match Norte's real `351910407785` used
  everywhere else.
- **The same wrong number inside `WhatsAppButton.tsx`** — the site-wide
  floating WhatsApp button (rendered on every single page) still had Este's
  number hardcoded. This was found and fixed during Task 8, despite the
  task's own brief incorrectly assuming this file was "already correct."
  A bug in a component this central has the largest possible blast radius
  of anything found in the whole build.
- **Two separate wrong-landmark occurrences, of two different mechanisms**
  — both traced back to Este's original assets and both showing Barcelona's
  Sagrada Família, but requiring different fixes:
  - `src/components/sections/Hero.tsx` renders a background `<video>` element
    (`<source src="/grok-video-75d457db-6ffe-4a84-8c5e-689da5f46f68.mp4">`)
    whose AI-generated footage clearly shows the Sagrada Família playing
    behind the headline and logo. **This one cannot be fixed by editing a
    string** — the fix requires producing or sourcing a new video asset
    entirely, which is a materially harder and slower fix than the others in
    this list. This is the instance a manual browser walkthrough with the
    video actually playing was needed to catch; none of Tasks 1–8's
    build/grep/curl-based reviews caught it.
  - `src/components/sections/Benefits.tsx:58` has a separate, ordinary
    hardcoded Unsplash background-image URL
    (`photo-1510563800743-aed236490d08` — the same landmark photo) on a
    smaller `aspect-[4/3]` image box. Unlike the Hero video, this one is a
    plain URL swap, no new asset production needed.
- **Este's own real Google Ads conversion ID** (`AW-18111431326`), hardcoded
  in `ContactSection.tsx`, firing live conversion-tracking events under
  Este's ad account on every lead submitted through Norte's site — a bug
  with a real financial/analytics-integrity impact on a third party, not
  just a cosmetic identity error.

**None of these contain the string "Este."** A grep for the sibling's brand
name will not find a phone number, a star rating, a stock-photo URL, or a
tracking ID. Two independent audit passes are required after any fork:

1. **A full visual browser walkthrough of every page** (not just a build
   check) — the Sagrada Família hero image was only caught this way, after
   eight tasks of code-level review had already passed.
2. **A fact-by-fact audit of every phone number, email, social link, and
   image asset** against a checklist of "what should this actually say for
   this company" — not a text search for the old brand name. Treat every
   hardcoded number, ID, and asset URL as suspect until verified against
   the real facts for the new site.

### 2. Metadata inheritance means fixing a leaf page isn't enough

Next.js layout metadata fields left unset on a page are inherited from the
nearest ancestor layout that *does* define them. During this build, `Task
2` fixed `src/app/layout.tsx`'s `authors`/`title`/`description` fields to
say "Preventiva Norte" — but `src/app/es/layout.tsx` still had its own,
separately-set stale `authors: "Preventiva Este"` / `preventivaeste.com`.
Because `es/proteccion/page.tsx` and `es/testes-certificaciones/page.tsx`
don't define their own `authors` field, they were silently inheriting the
*stale* value from the nearer `es/layout.tsx` ancestor, not the
already-fixed root layout. Fixing the root layout did nothing for those
leaf pages, because Next.js metadata inheritance resolves from the nearest
ancestor that sets a given field — not from the outermost one.

**Lesson:** when auditing metadata after a fork, trace each field
(`title`, `description`, `authors`, `openGraph.*`, etc.) up the actual
layout tree for every route, not just at the root. A field fixed at the
root can still be shadowed by a stale value in an intermediate layout
closer to the page.

### 3. "Same number, wrong language" is a distinct, lower-severity bug class

Separately from "wrong company" bugs, this build also shipped genuinely
correct Norte facts in the *wrong locale's language* — Portuguese metadata
(`title`, `description`, `openGraph`) on `/es` routes (`es/layout.tsx`,
`es/page.tsx`, `es/proteccion/page.tsx`,
`es/testes-certificaciones/page.tsx`) for a period during the build. This
is not a factual error (the phone number, address, and warranty terms were
all correct) — it is a locale/language mismatch, worth checking as its own
pass separate from the wrong-brand-fact audit above, because a
"correct-facts" grep will not catch it. Check every locale route's
rendered `<html lang>`, `openGraph.locale`, and visible metadata separately
from checking that the underlying facts are right.

### 4. Check the live old site's real sitemap.xml before guessing redirects

Rather than guessing legacy WordPress URL slugs for the redirect map (or
waiting on Google Search Console access), this build fetched
`preventivanorte.pt/sitemap.xml` directly — a live site's sitemap index is
public and requires no special access. This immediately gave a real,
authoritative list of URLs to redirect instead of a speculative one. Do
this for Sur before writing any redirect map: fetch the live sitemap
directly rather than guessing at old page structures.

### 5. A sibling's live domain can be compromised — check its sitemap for anomalies, not just its URL count

While fetching `preventivanorte.pt`'s sitemap for the redirect-mapping work
above, this build found the live production WordPress site had been
compromised: its sitemap index listed 4 "post" sitemaps totaling **3,520
URLs**, nearly all of them Dutch-language online-gambling spam
(`bingo-*`, `keno-*`, `craps-*`, `sic-bo-*`, `punto-banco-*`, "free spins",
"no deposit bonus," etc.) — a classic WordPress hack/SEO-spam-injection
pattern. Only 3 URLs on the entire site were genuine (`/`, `/home/es/`,
`/nones/`). Trusting the sitemap's raw URL count, or assuming a large
indexed-URL count reflects real content, would have produced a redirect map
that preserved thousands of spam URLs.

**Before migrating any sibling site (Sur included), check its live
domain's public sitemap for anomalies** — implausible URL counts, foreign
languages that don't match the site's market, or thematically unrelated
slugs — before trusting it as a source of real page inventory. This is a
general caution for auditing any site pre-migration, not specific to
Norte's own incident: a compromised legacy site poisons both its own search
reputation and any redirect map built carelessly from its indexed URLs.
