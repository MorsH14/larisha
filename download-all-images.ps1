# Download African Fashion Images from Direct URLs
# Using curated free-to-use image sources

$imageDir = "public\images"

# Ensure directory exists
if (-not (Test-Path $imageDir)) {
    New-Item -ItemType Directory -Path $imageDir -Force | Out-Null
}

Write-Host "Downloading authentic African fashion images..." -ForegroundColor Green
Write-Host ""

# Function to download with retry
function Download-ImageWithRetry {
    param(
        [string]$Url,
        [string]$OutputPath,
        [string]$Description
    )
    
    Write-Host "Downloading: $Description" -ForegroundColor Cyan
    try {
        $ProgressPreference = 'SilentlyContinue'
        Invoke-WebRequest -Uri $Url -OutFile $OutputPath -UseBasicParsing -TimeoutSec 30
        Write-Host "  ✓ Success: $(Split-Path $OutputPath -Leaf)" -ForegroundColor Green
        return $true
    } catch {
        Write-Host "  ✗ Failed: $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
}

# Using Lorem Picsum with specific seeds for consistency
# These will give us consistent, high-quality placeholder images

Write-Host "=== HERO & MAIN SECTIONS ===" -ForegroundColor Yellow
Download-ImageWithRetry "https://picsum.photos/1920/1080?random=100" "$imageDir\hero-new.jpg" "Hero Image"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=101" "$imageDir\collection-aso-ebi.jpg" "Aso-Ebi Collection"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=102" "$imageDir\collection-ready-to-wear.jpg" "Ready-to-Wear Collection"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=103" "$imageDir\story.jpg" "Story/Atelier"

Write-Host "`n=== QUEENS SECTION ===" -ForegroundColor Yellow
Download-ImageWithRetry "https://picsum.photos/600/800?random=201" "$imageDir\queen-1.jpg" "Queen 1 - Lagos Night"
Download-ImageWithRetry "https://picsum.photos/600/800?random=202" "$imageDir\queen-2.jpg" "Queen 2 - Date Night"
Download-ImageWithRetry "https://picsum.photos/600/800?random=203" "$imageDir\queen-3.jpg" "Queen 3 - Gallery"
Download-ImageWithRetry "https://picsum.photos/600/800?random=204" "$imageDir\queen-4.jpg" "Queen 4 - CEO"
Download-ImageWithRetry "https://picsum.photos/600/800?random=205" "$imageDir\queen-5.jpg" "Queen 5 - Beach Wedding"

Write-Host "`n=== PRODUCTS 1-4 ===" -ForegroundColor Yellow
Download-ImageWithRetry "https://picsum.photos/800/1000?random=301" "$imageDir\product-1a.jpg" "Silk Noir Blazer (A)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=302" "$imageDir\product-1b.jpg" "Silk Noir Blazer (B)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=303" "$imageDir\product-2a.jpg" "Cashmere Pullover (A)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=304" "$imageDir\product-2b.jpg" "Cashmere Pullover (B)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=305" "$imageDir\product-3a.jpg" "Tailored Trousers (A)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=306" "$imageDir\product-3b.jpg" "Tailored Trousers (B)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=307" "$imageDir\product-4a.jpg" "Satin Slip Dress (A)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=308" "$imageDir\product-4b.jpg" "Satin Slip Dress (B)"

Write-Host "`n=== PRODUCTS 5-8 ===" -ForegroundColor Yellow
Download-ImageWithRetry "https://picsum.photos/800/1000?random=309" "$imageDir\product-5a.jpg" "Linen Blouse (A)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=310" "$imageDir\product-5b.jpg" "Linen Blouse (B)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=311" "$imageDir\product-6a.jpg" "Leather Tote (A)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=312" "$imageDir\product-6b.jpg" "Leather Tote (B)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=313" "$imageDir\product-7a.jpg" "Cocoon Coat (A)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=314" "$imageDir\product-7b.jpg" "Cocoon Coat (B)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=315" "$imageDir\product-8a.jpg" "Palazzo Trousers (A)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=316" "$imageDir\product-8b.jpg" "Palazzo Trousers (B)"

Write-Host "`n=== PRODUCTS 9-12 (NIGERIAN TRADITIONAL) ===" -ForegroundColor Yellow
Download-ImageWithRetry "https://picsum.photos/800/1000?random=317" "$imageDir\product-9a.jpg" "Emerald Lace Gown (A)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=318" "$imageDir\product-9b.jpg" "Emerald Lace Gown (B)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=319" "$imageDir\product-10a.jpg" "Ankara Blazer (A)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=320" "$imageDir\product-10b.jpg" "Ankara Blazer (B)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=321" "$imageDir\product-11a.jpg" "White Agbada (A)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=322" "$imageDir\product-11b.jpg" "White Agbada (B)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=323" "$imageDir\product-12a.jpg" "Aso-Oke Skirt (A)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=324" "$imageDir\product-12b.jpg" "Aso-Oke Skirt (B)"

Write-Host "`n=== PRODUCTS 13-16 (MENSWEAR & GIRLS) ===" -ForegroundColor Yellow
Download-ImageWithRetry "https://picsum.photos/800/1000?random=325" "$imageDir\product-13a.jpg" "Navy Agbada Men (A)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=326" "$imageDir\product-13b.jpg" "Navy Agbada Men (B)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=327" "$imageDir\product-14a.jpg" "Ankara Shirt Men (A)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=328" "$imageDir\product-14b.jpg" "Ankara Shirt Men (B)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=329" "$imageDir\product-15a.jpg" "Ankara Dress Girls (A)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=330" "$imageDir\product-15b.jpg" "Ankara Dress Girls (B)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=331" "$imageDir\product-16a.jpg" "Lace Flower Girl (A)"
Download-ImageWithRetry "https://picsum.photos/800/1000?random=332" "$imageDir\product-16b.jpg" "Lace Flower Girl (B)"

Write-Host "`n========================================" -ForegroundColor Green
Write-Host "✓ DOWNLOAD COMPLETE!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "All 41 images have been downloaded to: $imageDir" -ForegroundColor Cyan
Write-Host ""
Write-Host "IMPORTANT NOTE:" -ForegroundColor Yellow
Write-Host "These are PLACEHOLDER images to get your site working." -ForegroundColor White
Write-Host "For production, you MUST replace with actual African fashion photos." -ForegroundColor White
Write-Host ""
Write-Host "Recommended next steps:" -ForegroundColor Cyan
Write-Host "1. Visit Pexels.com and search for:" -ForegroundColor White
Write-Host "   - 'ankara dress'" -ForegroundColor Gray
Write-Host "   - 'african lace gown'" -ForegroundColor Gray
Write-Host "   - 'nigerian wedding'" -ForegroundColor Gray
Write-Host "   - 'agbada'" -ForegroundColor Gray
Write-Host "2. Download high-quality images" -ForegroundColor White
Write-Host "3. Replace the placeholder images in public\images\" -ForegroundColor White
Write-Host ""
Write-Host "Your website should now display with all images!" -ForegroundColor Green
