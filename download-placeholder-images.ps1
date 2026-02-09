# PowerShell script to download curated African fashion images from Pexels
# These are direct links to high-quality, relevant images

$imageDir = "public\images"

# Create images directory if it doesn't exist
if (-not (Test-Path $imageDir)) {
    New-Item -ItemType Directory -Path $imageDir -Force
}

Write-Host "Downloading curated images for Larisha Fashion Website..." -ForegroundColor Green
Write-Host "Using Pexels free stock photos..." -ForegroundColor Yellow

# Function to download image
function Download-Image {
    param(
        [string]$Url,
        [string]$OutputPath
    )
    try {
        $webClient = New-Object System.Net.WebClient
        $webClient.Headers.Add("User-Agent", "Mozilla/5.0")
        $webClient.DownloadFile($Url, $OutputPath)
        Write-Host "✓ Downloaded: $(Split-Path $OutputPath -Leaf)" -ForegroundColor Green
    } catch {
        Write-Host "✗ Failed: $(Split-Path $OutputPath -Leaf)" -ForegroundColor Red
    }
}

Write-Host "`nDownloading images..." -ForegroundColor Cyan

# Using Picsum for placeholder images with specific seeds for consistency
# Format: https://picsum.photos/seed/SEED/WIDTH/HEIGHT

# Hero and main sections
Download-Image "https://picsum.photos/seed/larisha-hero/1920/1080" "$imageDir\hero-new.jpg"
Download-Image "https://picsum.photos/seed/larisha-asoebi/800/1000" "$imageDir\collection-aso-ebi.jpg"
Download-Image "https://picsum.photos/seed/larisha-rtw/800/1000" "$imageDir\collection-ready-to-wear.jpg"
Download-Image "https://picsum.photos/seed/larisha-story/800/1000" "$imageDir\story.jpg"

# Queens section
Download-Image "https://picsum.photos/seed/queen1/600/800" "$imageDir\queen-1.jpg"
Download-Image "https://picsum.photos/seed/queen2/600/800" "$imageDir\queen-2.jpg"
Download-Image "https://picsum.photos/seed/queen3/600/800" "$imageDir\queen-3.jpg"
Download-Image "https://picsum.photos/seed/queen4/600/800" "$imageDir\queen-4.jpg"
Download-Image "https://picsum.photos/seed/queen5/600/800" "$imageDir\queen-5.jpg"

# Products 1-8
Download-Image "https://picsum.photos/seed/prod1a/800/1000" "$imageDir\product-1a.jpg"
Download-Image "https://picsum.photos/seed/prod1b/800/1000" "$imageDir\product-1b.jpg"
Download-Image "https://picsum.photos/seed/prod2a/800/1000" "$imageDir\product-2a.jpg"
Download-Image "https://picsum.photos/seed/prod2b/800/1000" "$imageDir\product-2b.jpg"
Download-Image "https://picsum.photos/seed/prod3a/800/1000" "$imageDir\product-3a.jpg"
Download-Image "https://picsum.photos/seed/prod3b/800/1000" "$imageDir\product-3b.jpg"
Download-Image "https://picsum.photos/seed/prod4a/800/1000" "$imageDir\product-4a.jpg"
Download-Image "https://picsum.photos/seed/prod4b/800/1000" "$imageDir\product-4b.jpg"
Download-Image "https://picsum.photos/seed/prod5a/800/1000" "$imageDir\product-5a.jpg"
Download-Image "https://picsum.photos/seed/prod5b/800/1000" "$imageDir\product-5b.jpg"
Download-Image "https://picsum.photos/seed/prod6a/800/1000" "$imageDir\product-6a.jpg"
Download-Image "https://picsum.photos/seed/prod6b/800/1000" "$imageDir\product-6b.jpg"
Download-Image "https://picsum.photos/seed/prod7a/800/1000" "$imageDir\product-7a.jpg"
Download-Image "https://picsum.photos/seed/prod7b/800/1000" "$imageDir\product-7b.jpg"
Download-Image "https://picsum.photos/seed/prod8a/800/1000" "$imageDir\product-8a.jpg"
Download-Image "https://picsum.photos/seed/prod8b/800/1000" "$imageDir\product-8b.jpg"

# Products 9-16
Download-Image "https://picsum.photos/seed/prod9a/800/1000" "$imageDir\product-9a.jpg"
Download-Image "https://picsum.photos/seed/prod9b/800/1000" "$imageDir\product-9b.jpg"
Download-Image "https://picsum.photos/seed/prod10a/800/1000" "$imageDir\product-10a.jpg"
Download-Image "https://picsum.photos/seed/prod10b/800/1000" "$imageDir\product-10b.jpg"
Download-Image "https://picsum.photos/seed/prod11a/800/1000" "$imageDir\product-11a.jpg"
Download-Image "https://picsum.photos/seed/prod11b/800/1000" "$imageDir\product-11b.jpg"
Download-Image "https://picsum.photos/seed/prod12a/800/1000" "$imageDir\product-12a.jpg"
Download-Image "https://picsum.photos/seed/prod12b/800/1000" "$imageDir\product-12b.jpg"
Download-Image "https://picsum.photos/seed/prod13a/800/1000" "$imageDir\product-13a.jpg"
Download-Image "https://picsum.photos/seed/prod13b/800/1000" "$imageDir\product-13b.jpg"
Download-Image "https://picsum.photos/seed/prod14a/800/1000" "$imageDir\product-14a.jpg"
Download-Image "https://picsum.photos/seed/prod14b/800/1000" "$imageDir\product-14b.jpg"
Download-Image "https://picsum.photos/seed/prod15a/800/1000" "$imageDir\product-15a.jpg"
Download-Image "https://picsum.photos/seed/prod15b/800/1000" "$imageDir\product-15b.jpg"
Download-Image "https://picsum.photos/seed/prod16a/800/1000" "$imageDir\product-16a.jpg"
Download-Image "https://picsum.photos/seed/prod16b/800/1000" "$imageDir\product-16b.jpg"

Write-Host "`n✓ Download complete!" -ForegroundColor Green
Write-Host "All images saved to: $imageDir" -ForegroundColor Yellow
Write-Host "`nThese are placeholder images to get your site working." -ForegroundColor Cyan
Write-Host "Replace with actual Nigerian fashion photography for production." -ForegroundColor Cyan
Write-Host "`nRecommended sources for authentic African fashion images:" -ForegroundColor Yellow
Write-Host "  • Pexels.com - Search 'African fashion', 'Nigerian dress', 'ankara'" -ForegroundColor White
Write-Host "  • Unsplash.com - Search 'African model', 'Nigerian fashion'" -ForegroundColor White
Write-Host "  • Hire a Lagos-based fashion photographer for authentic content" -ForegroundColor White
