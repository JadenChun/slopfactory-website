# SlopFactory Official Website

The official landing page for SlopFactory, an independent AI-native software
studio building custom web, mobile, and intelligent systems.

## Local development

```bash
npm install
npm run dev
```

## Production build

Set the final public domain so canonical URLs, Open Graph metadata, `robots.txt`,
and `sitemap.xml` all point to the correct host:

```powershell
$env:VITE_SITE_URL="https://slopfactory.com"
npm run build
```

The CloudFront-ready static output is written to `dist/`.

## CloudFront setup

Use a private S3 bucket as the origin with Origin Access Control:

1. Upload the contents of `dist/` to the bucket.
2. Set the CloudFront default root object to `index.html`.
3. Enable automatic compression and redirect HTTP to HTTPS.
4. Give hashed files under `/assets/*` a long immutable cache policy.
5. Keep `index.html`, `robots.txt`, and `sitemap.xml` on a short cache policy.
6. Connect the custom domain with an ACM certificate issued in `us-east-1`.
7. Invalidate `/index.html`, `/robots.txt`, and `/sitemap.xml` after releases.

Once the S3 bucket and CloudFront distribution exist, deploy with:

```powershell
.\scripts\deploy-cloudfront.ps1 `
  -Bucket "your-private-bucket" `
  -DistributionId "YOUR_DISTRIBUTION_ID" `
  -SiteUrl "https://slopfactory.com"
```

`slopfactory.com` currently resolves to Google-hosted DNS. Repoint the domain
only after CloudFront, its ACM certificate, and the alternate domain name are
ready.

GitHub Actions validates lint and the production build on pushes and pull
requests. Public contact details are configured in `src/siteConfig.js`.

The lowercase `slopfactory` logotype is the primary identity. The compact `sf`
favicon is reserved for browser and app-icon placements.
