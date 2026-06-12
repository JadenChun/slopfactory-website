param(
  [Parameter(Mandatory = $true)]
  [string]$Bucket,

  [Parameter(Mandatory = $true)]
  [string]$DistributionId,

  [Parameter(Mandatory = $true)]
  [string]$SiteUrl
)

$ErrorActionPreference = "Stop"
$env:VITE_SITE_URL = $SiteUrl.TrimEnd("/")

npm ci
npm run lint
npm run build

aws s3 sync dist "s3://$Bucket" `
  --delete `
  --exclude "*" `
  --include "assets/*" `
  --cache-control "public,max-age=31536000,immutable"

aws s3 sync dist "s3://$Bucket" `
  --delete `
  --exclude "assets/*" `
  --cache-control "public,max-age=300,must-revalidate"

aws cloudfront create-invalidation `
  --distribution-id $DistributionId `
  --paths "/*"
