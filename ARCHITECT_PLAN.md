# Project: AURELIA HOME

## Tech Stack

**Framework:** static HTML, inline CSS, vanilla JS
**State:** none (cart/wishlist state persisted via browser localStorage only)
**Styling:** vanilla-css (inline `<style>` block shared across all 53 pages)
**Data:** none — all product/category content is static, hard-coded fictional content per page
**Auth:** none

## Database Schema
No database — static content only. Every page is a standalone `.html` file with inline CSS/JS. Cart state (if implemented) lives in `localStorage` on the client only.

## API Endpoints
No backend. Contact/newsletter forms use static `mailto:` or client-side-only validation with a simulated "Sent!" confirmation state (no real submission endpoint).

## Frontend Components / Pages
Exactly 53 static HTML pages, grouped by type:

**Main Store (2):** index (Home), shop-all (Shop All)

**Category pages (10 — grid + intro + hero, each with 2–4 assigned products):**
living-room, bedroom, dining, lighting, home-decor, kitchen-dining-accessories, bedding, storage-organization, outdoor-living, gifts

**Product detail pages (24 — one per fictional SKU):**
verona-lounge-chair, milano-three-seater-sofa, luna-coffee-table, oslo-side-table, siena-accent-chair, arden-floor-lamp, solis-table-lamp, nova-pendant-light, maison-ceramic-vase, terra-decorative-bowl, aurora-wall-mirror, forma-wall-art, haven-queen-bed, cloud-bedside-table, alba-dresser, noma-dining-table, elise-dining-chair, atelier-serveware-set, lumi-glassware-set, casa-dinnerware-collection, pure-linen-bedding-set, serenity-throw-blanket, nordic-storage-basket, grove-outdoor-chair

**Collection / shopping pages (5):**
new-arrivals, best-sellers, minimal-collection, warm-living-collection, gifts-under-100

**Brand / content pages (6):**
about, design-philosophy, materials-craftsmanship, journal, styling-guide, room-inspiration

**Customer information pages (6):**
contact, faq, shipping-delivery, returns-refunds, privacy-policy, terms-conditions

Total: 2 + 10 + 24 + 5 + 6 + 6 = **53 pages**

## Critical Requirements
1. All 53 pages must exist as real, non-empty, cross-linked `.html` files — 0 duplicates, 0 broken internal links, 0 placeholder-only pages.
2. Header/footer HTML and shared CSS must be pasted verbatim on every page for total visual consistency (single design language across 53 pages).
3. Every category page must link only to products actually assigned to it; every product page must link back to its parent category and show 3–4 "related products" from the same or adjacent category.
4. Product pages must include: name, short description, detailed description, price, materials, dimensions (where applicable), care info, highlights, related products — all fictional, no real certifications/awards claimed.
5. Site must be fully mobile-responsive with one consistent sticky header (with Shop/Collections dropdowns) and one consistent 4-column footer.

## Complexity Rating
Complex — 53 interlinked static pages across 6 distinct page types, requiring strict cross-page navigation integrity and full fictional product-content generation, while remaining a no-backend static build.