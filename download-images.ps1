# PowerShell script to download placeholder images from Unsplash
# This will download high-quality fashion images for the Larisha website

$imageDir = "public\images"

# Create images directory if it doesn't exist
if (-not (Test-Path $imageDir)) {
    New-Item -ItemType Directory -Path $imageDir -Force
}

Write-Host "Downloading images for Larisha Fashion Website..." -ForegroundColor Green
Write-Host "This may take a few minutes..." -ForegroundColor Yellow

# Function to download image
function Download-Image {
    param(
        [string]$Url,
        [string]$OutputPath
    )
    try {
        Invoke-WebRequest -Uri $Url -OutFile $OutputPath -UseBasicParsing
        Write-Host "✓ Downloaded: $OutputPath" -ForegroundColor Green
    } catch {
        Write-Host "✗ Failed: $OutputPath - $($_.Exception.Message)" -ForegroundColor Red
    }
}

# Unsplash Source URLs with specific search terms
# Format: https://source.unsplash.com/WIDTHxHEIGHT/?search-terms

Write-Host "`n1. Downloading Hero Image..." -ForegroundColor Cyan
Download-Image "https://source.unsplash.com/1920x1080/?african-fashion,model,elegant" "$imageDir\hero-new.jpg"

Write-Host "`n2. Downloading Collection Images..." -ForegroundColor Cyan
Download-Image "https://source.unsplash.com/800x1000/?african-dress,lace,celebration" "$imageDir\collection-aso-ebi.jpg"
Download-Image "https://source.unsplash.com/800x1000/?fashion,modern,african-style" "$imageDir\collection-ready-to-wear.jpg"

Write-Host "`n3. Downloading Story Image..." -ForegroundColor Cyan
Download-Image "https://source.unsplash.com/800x1000/?fashion-studio,atelier,sewing" "$imageDir\story.jpg"

Write-Host "`n4. Downloading Queens Section Images..." -ForegroundColor Cyan
Download-Image "https://source.unsplash.com/600x800/?african-woman,fashion,night" "$imageDir\queen-1.jpg"
Download-Image "https://source.unsplash.com/600x800/?african-woman,elegant,dress" "$imageDir\queen-2.jpg"
Download-Image "https://source.unsplash.com/600x800/?african-woman,art,sophisticated" "$imageDir\queen-3.jpg"
Download-Image "https://source.unsplash.com/600x800/?african-woman,professional,business" "$imageDir\queen-4.jpg"
Download-Image "https://source.unsplash.com/600x800/?african-woman,beach,wedding" "$imageDir\queen-5.jpg"

Write-Host "`n5. Downloading Product Images..." -ForegroundColor Cyan

# Product 1: Silk Noir Blazer
Download-Image "https://source.unsplash.com/800x1000/?black-blazer,silk,fashion" "$imageDir\product-1a.jpg"
Download-Image "https://source.unsplash.com/800x1000/?blazer,elegant,professional" "$imageDir\product-1b.jpg"

# Product 2: Creme Cashmere Pullover
Download-Image "https://source.unsplash.com/800x1000/?cream-sweater,cashmere,luxury" "$imageDir\product-2a.jpg"
Download-Image "https://source.unsplash.com/800x1000/?sweater,beige,cozy" "$imageDir\product-2b.jpg"

# Product 3: Charcoal Tailored Trousers
Download-Image "https://source.unsplash.com/800x1000/?gray-pants,tailored,fashion" "$imageDir\product-3a.jpg"
Download-Image "https://source.unsplash.com/800x1000/?trousers,professional,style" "$imageDir\product-3b.jpg"

# Product 4: Champagne Satin Slip Dress
Download-Image "https://source.unsplash.com/800x1000/?satin-dress,champagne,elegant" "$imageDir\product-4a.jpg"
Download-Image "https://source.unsplash.com/800x1000/?slip-dress,evening,luxury" "$imageDir\product-4b.jpg"

# Product 5: Ivory Linen Blouse
Download-Image "https://source.unsplash.com/800x1000/?white-blouse,linen,summer" "$imageDir\product-5a.jpg"
Download-Image "https://source.unsplash.com/800x1000/?linen-shirt,ivory,casual" "$imageDir\product-5b.jpg"

# Product 6: Noir Leather Tote
Download-Image "https://source.unsplash.com/800x1000/?black-bag,leather,tote" "$imageDir\product-6a.jpg"
Download-Image "https://source.unsplash.com/800x1000/?leather-bag,luxury,handbag" "$imageDir\product-6b.jpg"

# Product 7: Olive Cocoon Coat
Download-Image "https://source.unsplash.com/800x1000/?green-coat,oversized,fashion" "$imageDir\product-7a.jpg"
Download-Image "https://source.unsplash.com/800x1000/?olive-coat,winter,style" "$imageDir\product-7b.jpg"

# Product 8: Sand Palazzo Trousers
Download-Image "https://source.unsplash.com/800x1000/?beige-pants,wide-leg,linen" "$imageDir\product-8a.jpg"
Download-Image "https://source.unsplash.com/800x1000/?palazzo-pants,sand,flowing" "$imageDir\product-8b.jpg"

# Product 9: Emerald Aso-Ebi Lace Gown
Download-Image "https://source.unsplash.com/800x1000/?green-dress,lace,african" "$imageDir\product-9a.jpg"
Download-Image "https://source.unsplash.com/800x1000/?emerald-gown,elegant,celebration" "$imageDir\product-9b.jpg"

# Product 10: Ankara Heritage Blazer
Download-Image "https://source.unsplash.com/800x1000/?ankara,african-print,blazer" "$imageDir\product-10a.jpg"
Download-Image "https://source.unsplash.com/800x1000/?african-fabric,orange,pattern" "$imageDir\product-10b.jpg"

# Product 11: White Modern Agbada Tunic
Download-Image "https://source.unsplash.com/800x1000/?white-tunic,flowing,african" "$imageDir\product-11a.jpg"
Download-Image "https://source.unsplash.com/800x1000/?agbada,traditional,modern" "$imageDir\product-11b.jpg"

# Product 12: Aso-Oke Royal Wrap Skirt
Download-Image "https://source.unsplash.com/800x1000/?burgundy-skirt,african-fabric,traditional" "$imageDir\product-12a.jpg"
Download-Image "https://source.unsplash.com/800x1000/?wrap-skirt,gold,pattern" "$imageDir\product-12b.jpg"

# Product 13: Navy Agbada Set (Men)
Download-Image "https://source.unsplash.com/800x1000/?african-man,traditional,navy" "$imageDir\product-13a.jpg"
Download-Image "https://source.unsplash.com/800x1000/?agbada,menswear,elegant" "$imageDir\product-13b.jpg"

# Product 14: Ankara Print Shirt (Men)
Download-Image "https://source.unsplash.com/800x1000/?african-shirt,ankara,menswear" "$imageDir\product-14a.jpg"
Download-Image "https://source.unsplash.com/800x1000/?print-shirt,colorful,casual" "$imageDir\product-14b.jpg"

# Product 15: Ankara Flare Dress (Girls)
Download-Image "https://source.unsplash.com/800x1000/?kids-dress,colorful,african" "$imageDir\product-15a.jpg"
Download-Image "https://source.unsplash.com/800x1000/?girls-dress,ankara,playful" "$imageDir\product-15b.jpg"

# Product 16: Blush Lace Flower Girl Dress
Download-Image "https://source.unsplash.com/800x1000/?pink-dress,lace,flower-girl" "$imageDir\product-16a.jpg"
Download-Image "https://source.unsplash.com/800x1000/?blush-dress,kids,elegant" "$imageDir\product-16b.jpg"

Write-Host "`n✓ Download complete!" -ForegroundColor Green
Write-Host "All images saved to: $imageDir" -ForegroundColor Yellow
Write-Host "`nNote: These are placeholder images from Unsplash." -ForegroundColor Cyan
Write-Host "For production, replace with actual product photography." -ForegroundColor Cyan
