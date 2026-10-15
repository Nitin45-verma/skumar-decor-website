# S.Kumar Light and Flower Decoration

A responsive, SEO-optimized business website for **S.Kumar Light and Flower Decoration**, a wedding and event decoration company based in Jaipur, Rajasthan.

**Live site:** [https://skumar-decor.vercel.app](https://skumar-decor.vercel.app/)

---

## About the Project

S.Kumar Light and Flower Decoration provides premium lighting and floral decoration for weddings and special occasions. This website gives the business a professional online presence: it showcases services and past work, builds customer trust, and makes it easy to call or WhatsApp the team in one tap.

## Services Showcased

- Wedding Lighting
- Flower Decoration
- Stage Decoration
- DJ System
- Bride Entry Decoration
- Tent & Light Setup

## Features

- **Fully responsive** mobile-first layout, built for phones, tablets and desktops
- **Smooth animations** using Framer Motion (scroll reveals, hover effects, micro-interactions)
- **Sections:** Hero, About, Services, Gallery, Why Choose Us, Testimonials, Contact, Footer
- **Click-to-call and WhatsApp** floating buttons for quick enquiries
- **Google Maps embed** for the shop location (free iframe embed, no paid API)
- **Hindi + English** content with Devanagari font support
- **Fast hosting** on Vercel with automatic deployments

## Tech Stack

| Area | Technology |
|---|---|
| Framework | React.js (Vite) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React / React Icons |
| Hosting | Vercel |

## SEO Implementation

- Optimized title, meta description and keywords
- Open Graph and Twitter Card tags for rich link previews
- Canonical URL
- `LocalBusiness` structured data (JSON-LD, Schema.org)
- `sitemap.xml` and `robots.txt`
- Verified and indexed in Google Search Console
- Linked with a verified Google Business Profile for local search

**Lighthouse (latest check):** SEO 100 · Best Practices 96 · Accessibility 91 · Performance 51 (optimization ongoing)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
# Clone the repository
git clone <your-repository-url>
cd skumar-decor

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
skumar-decor/
├── public/            # Static assets (logo, og-image, sitemap.xml, robots.txt)
├── src/
│   ├── components/    # Navbar, Hero, About, Services, Gallery, Contact, Footer...
│   ├── data/          # Services, gallery and testimonial content
│   ├── App.jsx
│   └── main.jsx
├── index.html         # SEO meta tags and JSON-LD structured data
├── tailwind.config.js
└── package.json
```

## Deployment

The site is deployed on **Vercel**. Every push to the main branch triggers an automatic redeploy.

1. Push the project to GitHub
2. Import the repository in Vercel
3. Framework preset: **Vite**
4. Build command: `npm run build` · Output directory: `dist`

## Business Information

- **Business:** S.Kumar Light and Flower Decoration
- **Address:** Kapurwala, Pawaliya Road, Laxmi Narayan Sarovar Colony, Jaipur, Rajasthan - 302029
- **Phone:** 9079689655

## Roadmap

- [ ] Improve Lighthouse performance score (LCP and Total Blocking Time)
- [ ] Connect a custom domain
- [ ] Add more real event photos to the gallery
- [ ] Digital wedding invitation service section
- [ ] Listings on JustDial and Sulekha

## Author

**Nitin Verma**: Full Stack Web Developer based in Jaipur, Rajasthan.

## License

This project was built for S.Kumar Light and Flower Decoration. All business content, logos and images belong to the client. All rights reserved.
