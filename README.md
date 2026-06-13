# SlopFactory Official Website

The official landing page for SlopFactory, a professional AI-native software
studio building custom solutions and original web, mobile, and intelligent
software products.

## Local development

```bash
npm install
npm run dev
```

## Production build

Set the final public domain so canonical URLs, Open Graph metadata, `robots.txt`,
and `sitemap.xml` all point to the correct host:

```powershell
$env:VITE_SITE_URL="https://slopfactory.cc"
npm run build
```

The Cloudflare Pages-ready static output is written to `dist/`.

## Deployment

The production website is hosted on Cloudflare Pages at
`https://slopfactory.cc`. Cloudflare builds and deploys the website
automatically whenever changes are pushed to `main`.

Follow [Cloudflare deployment instructions](docs/CLOUDFLARE_DEPLOYMENT.md) to
connect the GitHub repository, configure the build, and attach the custom
domain. GitHub Pages is disabled and is not used for deployment.

GitHub Actions validates lint and the production build on pushes and pull
requests. Public contact details are configured in `src/siteConfig.js`.

The lowercase `slopfactory` logotype is the primary identity. The compact `s`
favicon is reserved for browser and app-icon placements.

## Contact form

Project enquiries are submitted to `support@slopfactory.cc` through FormSubmit,
with direct email shown as a fallback. Before launch, submit the form once and
approve the FormSubmit activation email sent to the support inbox.
