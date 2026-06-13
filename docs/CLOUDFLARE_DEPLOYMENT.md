# Deploying SlopFactory to Cloudflare Pages

Cloudflare Pages deploys the website directly from the GitHub repository and
publishes every push to `main`.

## 1. Create the Pages project

1. Sign in to the Cloudflare dashboard.
2. Open **Workers & Pages** and select **Create application**.
3. Choose **Pages** and **Connect to Git**.
4. Connect the GitHub account and select `JadenChun/slopfactory-website`.
5. Use these build settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | `Vite` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |

## 2. Configure the production URL

Before the first production deployment, add this environment variable under
the Pages project's **Settings > Environment variables**:

| Variable | Production value |
| --- | --- |
| `VITE_SITE_URL` | `https://slopfactory.cc` |
| `NODE_VERSION` | `22` |

This value is inserted into the canonical URL, Open Graph metadata,
`robots.txt`, and `sitemap.xml` during the build.

Save the settings and trigger a new deployment if Cloudflare already completed
the first build.

## 3. Attach the custom domain

1. Open the Pages project and select **Custom domains**.
2. Select **Set up a custom domain**.
3. Enter `slopfactory.cc` and complete the DNS setup shown by Cloudflare.
4. Add `www.slopfactory.cc` as another custom domain if the `www` address
   should also work.
5. In Cloudflare, create a redirect rule from `www.slopfactory.cc` to
   `https://slopfactory.cc` so there is one canonical website address.

`slopfactory.cc` already uses Cloudflare nameservers (`fay.ns.cloudflare.com`
and `phil.ns.cloudflare.com`), so Cloudflare can add the required apex-domain
DNS record automatically. Cloudflare also provisions and renews HTTPS
certificates automatically.

## 4. Verify the launch

After the domain becomes active:

1. Open `https://slopfactory.cc` and confirm HTTPS works.
2. Check `https://slopfactory.cc/robots.txt`.
3. Check `https://slopfactory.cc/sitemap.xml`.
4. View the page source and confirm the canonical URL uses
   `https://slopfactory.cc/`.
5. Submit one project enquiry and approve the FormSubmit activation email sent
   to `support@slopfactory.cc`.
6. Confirm a later push to `main` creates a new Cloudflare Pages deployment.

## GitHub configuration

GitHub Actions only runs lint and build checks. GitHub Pages has been disabled;
Cloudflare Pages is the only production deployment target.
