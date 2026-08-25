# SEO Report for **AURELIA HOME** (53‑page static e‑commerce site)

## 1. Meta‑Tag Recommendations (add to every HTML `<head>`)

| Page Type | Title (≈ 50‑60 chars) | Description (150‑160 chars) |
|-----------|----------------------|------------------------------|
| Home / Shop All | AURELIA HOME – Premium Furniture & Décor | Discover elegant, handcrafted furniture, lighting, and home accessories from AURELIA HOME. Shop premium collections for every room. |
| Category pages (e.g., Living Room) | Living Room Furniture – AURELIA HOME | Curated living‑room pieces that blend style and comfort. Browse sofas, chairs, tables and décor to create your perfect space. |
| Product pages (e.g., Verona Lounge Chair) | Verona Lounge Chair – AURELIA HOME | Sophisticated Verona lounge chair crafted from solid wood and plush upholstery. Ideal for modern living rooms. |
| Collection pages (e.g., New Arrivals) | New Arrivals – AURELIA HOME | Freshly launched premium home‑style pieces. Explore the latest furniture, lighting, and décor trends. |
| Brand / Content pages (e.g., About) | About AURELIA HOME – Our Story | Learn about AURELIA HOME’s design philosophy, craftsmanship, and commitment to timeless elegance. |
| Customer info pages (e.g., Shipping) | Shipping & Delivery – AURELIA HOME | Transparent shipping policies, delivery timelines, and tracking for all AURELIA HOME orders. |

**Common tags for every page**

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://www.aureliahome.com{{PAGE_PATH}}">
```

## 2. Open Graph & Twitter Card Tags (add to every page)

```html
<meta property="og:type" content="website">
<meta property="og:site_name" content="AURELIA HOME">
<meta property="og:url" content="https://www.aureliahome.com{{PAGE_PATH}}">
<meta property="og:title" content="{{PAGE_TITLE}}">
<meta property="og:description" content="{{PAGE_DESCRIPTION}}">
<meta property="og:image" content="https://placehold.co/1200x630/131921/FF9900?text=AURELIA+HOME">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{PAGE_TITLE}}">
<meta name="twitter:description" content="{{PAGE_DESCRIPTION}}">
<meta name="twitter:image" content="https://placehold.co/1200x630/131921/FF9900?text=AURELIA+HOME">
<meta name="twitter:site" content="@AureliaHome">
<meta name="twitter:creator" content="@AureliaHome">
```

*Replace `{{PAGE_PATH}}`, `{{PAGE_TITLE}}`, and `{{PAGE_DESCRIPTION}}` with the actual values for each page.*

## 3. Structured Data (JSON‑LD)

### a. Site‑wide markup (include on every page)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AURELIA HOME",
  "url": "https://www.aureliahome.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.aureliahome.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### b. Organization / LocalBusiness (home page)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AURELIA HOME",
  "url": "https://www.aureliahome.com",
  "logo": "https://placehold.co/400x300/FF9900/white?text=AURELIA+HOME+Logo",
  "image": "https://placehold.co/1200x630/131921/FF9900?text=AURELIA+HOME",
  "description": "Premium furniture, lighting and décor for elegant modern homes.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Design Avenue",
    "addressLocality": "London",
    "postalCode": "SW1A 1AA",
    "addressCountry": "GB"
  },
  "telephone": "+44 20 1234 5678",
  "sameAs": [
    "https://www.facebook.com/AureliaHome",
    "https://www.instagram.com/AureliaHome",
    "https://twitter.com/AureliaHome"
  ]
}
```

### c. BreadcrumbList (add to each page)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.aureliahome.com/index.html"
    }{{#if category}},
    {
      "@type": "ListItem",
      "position": 2,
      "name": "{{Category Name}}",
      "item": "https://www.aureliahome.com/{{category‑slug}}.html"
    }{{/if}}{{#if product}},
    {
      "@type": "ListItem",
      "position": 3,
      "name": "{{Product Name}}",
      "item": "https://www.aureliahome.com/{{product‑slug}}.html"
    }{{/if}}
  ]
}
```

### d. Product markup (on each product page)

```json
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "{{Product Name}}",
  "image": [
    "https://placehold.co/800x600/FF9900/white?text={{Product+Name}}"
  ],
  "description": "{{Short description}}",
  "sku": "{{SKU}}",
  "brand": {
    "@type": "Brand",
    "name": "AURELIA HOME"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.aureliahome.com/{{product‑slug}}.html",
    "priceCurrency": "GBP",
    "price": "{{Price}}",
    "availability": "https://schema.org/InStock"
  },
  "material": "{{Materials}}",
  "weight": "{{Weight if known}}",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Dimensions",
      "value": "{{Dimensions}}"
    },
    {
      "@type": "PropertyValue",
      "name": "Care",
      "value": "{{Care instructions}}"
    }
  ]
}
```

## 4. Content & UX Recommendations

| Area | Recommendation |
|------|----------------|
| **Headings** | Use a clear hierarchy (`<h1>` for page title, `<h2>` for sections, `<h3>` for sub‑sections). Ensure only one `<h1>` per page. |
| **Images** | All placeholder images must have descriptive `alt` attributes (e.g., `alt="Verona Lounge Chair – upholstered in velvet"`). |
| **Internal Linking** | Each product page should link to its parent category and display 3–4 related products (use `rel="noopener"` for external links). |
| **URL Structure** | Keep URLs short, hyphen‑separated, and reflective of the page title (already done). |
| **Mobile** | Verify that the sticky header and footer are fully responsive; test tap targets (≥ 48 px). |
| **Performance** | Replace any heavy placeholder images with the `placehold.co` URLs (already lightweight). Consider adding `loading="lazy"` to `<img>` tags. |
| **Schema Validation** | Run each page through Google’s Rich Results Test after adding JSON‑LD to ensure no errors. |
| **Sitemap** | The generated `sitemap.xml` (see above) includes all 53 pages with appropriate priority. Submit it to Google Search Console. |
| **Robots** | The `robots.txt` (see above) allows full crawling. If future private sections are added, update accordingly. |

## 5. Next Steps for the Front‑End Team

1. **Insert the meta, Open Graph, Twitter, and JSON‑LD snippets** into the `<head>` of every HTML file.  
2. **Add `alt` text** to every `<img>` tag, using the product or category name.  
3. **Implement the BreadcrumbList** markup on each page (adjust the `position` values as needed).  
4. **Verify the sticky header/footer** matches the design spec and does not duplicate existing `<header>`/`<nav>` elements.  
5. **Test the site** with Lighthouse (Performance, SEO, Accessibility) and fix any remaining issues.  
6. **Submit the sitemap** to Google/Bing and monitor indexing progress.