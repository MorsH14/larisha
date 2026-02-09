@echo off
echo Downloading images for Larisha Fashion Website...
echo.

cd public\images

echo Downloading main section images...
curl -L "https://picsum.photos/800/1000?random=1" -o collection-aso-ebi.jpg
curl -L "https://picsum.photos/800/1000?random=2" -o collection-ready-to-wear.jpg
curl -L "https://picsum.photos/800/1000?random=3" -o story.jpg

echo Downloading queens section...
curl -L "https://picsum.photos/600/800?random=4" -o queen-1.jpg
curl -L "https://picsum.photos/600/800?random=5" -o queen-2.jpg
curl -L "https://picsum.photos/600/800?random=6" -o queen-3.jpg
curl -L "https://picsum.photos/600/800?random=7" -o queen-4.jpg
curl -L "https://picsum.photos/600/800?random=8" -o queen-5.jpg

echo Downloading product images (1-8)...
curl -L "https://picsum.photos/800/1000?random=10" -o product-1a.jpg
curl -L "https://picsum.photos/800/1000?random=11" -o product-1b.jpg
curl -L "https://picsum.photos/800/1000?random=12" -o product-2a.jpg
curl -L "https://picsum.photos/800/1000?random=13" -o product-2b.jpg
curl -L "https://picsum.photos/800/1000?random=14" -o product-3a.jpg
curl -L "https://picsum.photos/800/1000?random=15" -o product-3b.jpg
curl -L "https://picsum.photos/800/1000?random=16" -o product-4a.jpg
curl -L "https://picsum.photos/800/1000?random=17" -o product-4b.jpg
curl -L "https://picsum.photos/800/1000?random=18" -o product-5a.jpg
curl -L "https://picsum.photos/800/1000?random=19" -o product-5b.jpg
curl -L "https://picsum.photos/800/1000?random=20" -o product-6a.jpg
curl -L "https://picsum.photos/800/1000?random=21" -o product-6b.jpg
curl -L "https://picsum.photos/800/1000?random=22" -o product-7a.jpg
curl -L "https://picsum.photos/800/1000?random=23" -o product-7b.jpg
curl -L "https://picsum.photos/800/1000?random=24" -o product-8a.jpg
curl -L "https://picsum.photos/800/1000?random=25" -o product-8b.jpg

echo Downloading product images (9-16)...
curl -L "https://picsum.photos/800/1000?random=26" -o product-9a.jpg
curl -L "https://picsum.photos/800/1000?random=27" -o product-9b.jpg
curl -L "https://picsum.photos/800/1000?random=28" -o product-10a.jpg
curl -L "https://picsum.photos/800/1000?random=29" -o product-10b.jpg
curl -L "https://picsum.photos/800/1000?random=30" -o product-11a.jpg
curl -L "https://picsum.photos/800/1000?random=31" -o product-11b.jpg
curl -L "https://picsum.photos/800/1000?random=32" -o product-12a.jpg
curl -L "https://picsum.photos/800/1000?random=33" -o product-12b.jpg
curl -L "https://picsum.photos/800/1000?random=34" -o product-13a.jpg
curl -L "https://picsum.photos/800/1000?random=35" -o product-13b.jpg
curl -L "https://picsum.photos/800/1000?random=36" -o product-14a.jpg
curl -L "https://picsum.photos/800/1000?random=37" -o product-14b.jpg
curl -L "https://picsum.photos/800/1000?random=38" -o product-15a.jpg
curl -L "https://picsum.photos/800/1000?random=39" -o product-15b.jpg
curl -L "https://picsum.photos/800/1000?random=40" -o product-16a.jpg
curl -L "https://picsum.photos/800/1000?random=41" -o product-16b.jpg

cd ..\..

echo.
echo Done! All images downloaded to public\images\
echo.
echo IMPORTANT: These are placeholder images.
echo For production, replace with actual Nigerian fashion photography.
echo.
pause
