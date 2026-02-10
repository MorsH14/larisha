#!/usr/bin/env python3
"""
Larisha Nigerian Fashion - Professional Image Generator
Generates high-quality product and lifestyle images for the website
"""

import os
from PIL import Image, ImageDraw, ImageFilter
import random
import math

# Configuration
OUTPUT_DIR = "public/images"
IMAGE_WIDTH = 1200
IMAGE_HEIGHT = 1500

# Create output directory if it doesn't exist
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Color palettes for different product categories
PALETTES = {
    "ankara": [
        (255, 69, 0),      # Red-Orange
        (184, 134, 11),    # Dark Goldenrod
        (25, 25, 112),     # Deep Blue
        (220, 20, 60),     # Crimson
    ],
    "lace": [
        (255, 192, 203),   # Pink
        (255, 215, 0),     # Gold
        (230, 230, 250),   # Lavender
    ],
    "bubu": [
        (128, 0, 32),      # Burgundy
        (211, 211, 211),   # Light Gray
        (169, 169, 169),   # Dark Gray
    ],
    "office": [
        (0, 51, 102),      # Dark Blue
        (192, 192, 192),   # Silver
        (64, 64, 64),      # Charcoal
    ],
    "traditional": [
        (184, 134, 11),    # Gold
        (139, 69, 19),     # Saddle Brown
        (210, 180, 140),   # Tan
    ],
    "neutral": [
        (255, 255, 255),   # White
        (128, 128, 128),   # Gray
        (0, 0, 0),         # Black
    ]
}

def create_gradient_background(width, height, color1, color2):
    """Create a gradient background"""
    image = Image.new('RGB', (width, height), color1)
    draw = ImageDraw.Draw(image, 'RGBA')
    
    # Create gradient
    r1, g1, b1 = color1
    r2, g2, b2 = color2
    
    for y in range(height):
        ratio = y / height
        r = int(r1 * (1 - ratio) + r2 * ratio)
        g = int(g1 * (1 - ratio) + g2 * ratio)
        b = int(b1 * (1 - ratio) + b2 * ratio)
        draw.rectangle([(0, y), (width, y+1)], fill=(r, g, b))
    
    return image

def add_pattern_overlay(image, pattern_type="geometric"):
    """Add decorative pattern overlay"""
    draw = ImageDraw.Draw(image, 'RGBA')
    width, height = image.size
    
    if pattern_type == "geometric":
        # Create geometric patterns
        step = 40
        alpha = 20
        color = (255, 255, 255, alpha)
        for x in range(0, width, step):
            draw.line([(x, 0), (x, height)], fill=color, width=1)
        for y in range(0, height, step):
            draw.line([(0, y), (width, y)], fill=color, width=1)
    
    elif pattern_type == "dots":
        # Create dot pattern
        radius = 8
        spacing = 50
        color = (255, 255, 255, 15)
        for x in range(0, width, spacing):
            for y in range(0, height, spacing):
                draw.ellipse([x-radius, y-radius, x+radius, y+radius], fill=color)
    
    elif pattern_type == "stripes":
        # Create stripe pattern
        stripe_width = 30
        color = (255, 255, 255, 10)
        for x in range(0, width, stripe_width * 2):
            draw.rectangle([(x, 0), (x + stripe_width, height)], fill=color)
    
    return image

def add_text_overlay(image, title, subtitle=""):
    """Add text overlay to image"""
    draw = ImageDraw.Draw(image)
    width, height = image.size
    
    # Add semi-transparent dark overlay for text readability
    overlay = Image.new('RGBA', (width, height), (0, 0, 0, 120))
    image.paste(overlay, (0, 0), overlay)
    
    # Add title
    title_bbox = draw.textbbox((0, 0), title)
    title_width = title_bbox[2] - title_bbox[0]
    title_x = (width - title_width) // 2
    title_y = height // 2 - 40
    
    draw.text((title_x, title_y), title, fill=(255, 255, 255), font=None)
    
    # Add subtitle if provided
    if subtitle:
        subtitle_bbox = draw.textbbox((0, 0), subtitle)
        subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
        subtitle_x = (width - subtitle_width) // 2
        subtitle_y = height // 2 + 20
        
        draw.text((subtitle_x, subtitle_y), subtitle, fill=(220, 220, 220), font=None)
    
    return image

def generate_product_image(product_name, category, is_hover=False):
    """Generate a single product image"""
    
    # Select color palette based on category
    if "ankara" in category.lower():
        palette = PALETTES["ankara"]
        pattern = "geometric"
    elif "lace" in category.lower():
        palette = PALETTES["lace"]
        pattern = "dots"
    elif "bubu" in category.lower():
        palette = PALETTES["bubu"]
        pattern = "stripes"
    elif "office" in category.lower():
        palette = PALETTES["office"]
        pattern = "geometric"
    elif "traditional" in category.lower():
        palette = PALETTES["traditional"]
        pattern = "geometric"
    else:
        palette = PALETTES["neutral"]
        pattern = "dots"
    
    # Create gradient background
    color1 = palette[0]
    color2 = palette[1] if len(palette) > 1 else palette[0]
    
    img = create_gradient_background(IMAGE_WIDTH, IMAGE_HEIGHT, color1, color2)
    
    # Add pattern overlay
    img = add_pattern_overlay(img, pattern)
    
    # Add text
    subtitle = "Hover View" if is_hover else "Product View"
    img = add_text_overlay(img, product_name[:30], subtitle)
    
    # Add subtle blur for premium feel
    img = img.filter(ImageFilter.GaussianBlur(radius=0.5))
    
    return img

def generate_collection_image(collection_name, is_story=False):
    """Generate collection or story section image"""
    
    # Define colors for each collection
    colors = {
        "ankara": ((255, 69, 0), (184, 134, 11)),
        "lace": ((255, 192, 203), (255, 215, 0)),
        "bubu": ((128, 0, 32), (211, 211, 211)),
        "office": ((0, 51, 102), (192, 192, 192)),
        "story": ((184, 134, 11), (220, 20, 60)),
    }
    
    key = "story" if is_story else collection_name.lower().split()[0]
    color1, color2 = colors.get(key, ((100, 100, 100), (200, 200, 200)))
    
    img = create_gradient_background(IMAGE_WIDTH, IMAGE_HEIGHT, color1, color2)
    img = add_pattern_overlay(img, "geometric")
    
    if is_story:
        img = add_text_overlay(img, "Nigerian Heritage", "Artisan Craftsmanship")
    else:
        img = add_text_overlay(img, collection_name, "Premium Collection")
    
    return img

def generate_hero_image():
    """Generate hero section image"""
    # Royal sapphire with gold
    img = create_gradient_background(IMAGE_WIDTH, IMAGE_HEIGHT, (25, 25, 112), (184, 134, 11))
    img = add_pattern_overlay(img, "geometric")
    img = add_text_overlay(img, "Ankara to Elegance", "Nigerian Fashion Pride")
    return img

def generate_queen_image(queen_number, description):
    """Generate queen/lifestyle image"""
    palettes = [
        ("ankara", ((255, 69, 0), (184, 134, 11))),
        ("lace", ((255, 192, 203), (255, 215, 0))),
        ("bubu", ((128, 0, 32), (211, 211, 211))),
        ("office", ((0, 51, 102), (192, 192, 192))),
        ("celebration", ((220, 20, 60), (184, 134, 11))),
    ]
    
    _, (color1, color2) = palettes[queen_number - 1]
    img = create_gradient_background(IMAGE_WIDTH, IMAGE_HEIGHT, color1, color2)
    img = add_pattern_overlay(img, "dots")
    img = add_text_overlay(img, f"Larisha Queen #{queen_number}", description)
    
    return img

def main():
    """Generate all images"""
    print("🎨 Generating Larisha Nigerian Fashion Images...")
    print(f"📁 Output directory: {OUTPUT_DIR}\n")
    
    # Track progress
    total = 0
    generated = 0
    
    try:
        # Hero image
        print("📸 Generating hero image...")
        hero = generate_hero_image()
        hero.save(os.path.join(OUTPUT_DIR, "hero-nigerian-fashion.jpg"), "JPEG", quality=95)
        print("   ✅ hero-nigerian-fashion.jpg")
        generated += 1
        total += 1
        
        # Story image
        print("\n📖 Generating story image...")
        story = generate_collection_image("story", is_story=True)
        story.save(os.path.join(OUTPUT_DIR, "story-nigerian-heritage.jpg"), "JPEG", quality=95)
        print("   ✅ story-nigerian-heritage.jpg")
        generated += 1
        total += 1
        
        # Collection images
        print("\n🎨 Generating collection images...")
        collections = ["ankara", "lace", "bubu", "office"]
        for col in collections:
            img = generate_collection_image(col)
            filename = f"collection-{col}.jpg"
            img.save(os.path.join(OUTPUT_DIR, filename), "JPEG", quality=95)
            print(f"   ✅ {filename}")
            generated += 1
            total += 1
        
        # Product images (25 products × 2 versions each = 50 images)
        print("\n👗 Generating product images (25 products × 2 versions)...")
        products = [
            ("Royal Sapphire Ankara Corset Dress", "ankara"),
            ("Sunset Gold Lace Gown", "lace"),
            ("Emerald Office Blazer", "office"),
            ("Burgundy Bubu Dream Dress", "bubu"),
            ("Crimson Lace & Ankara Blend Gown", "lace"),
            ("Sunshine Ankara Wrapper Set", "ankara"),
            ("Navy Office Wrap Trousers", "office"),
            ("Blush Pink Hand-Beaded Lace Dress", "lace"),
            ("Deep Forest Ankara Pencil Skirt", "ankara"),
            ("Cream Iro & Buba Traditional Set", "traditional"),
            ("Terracotta Ankara Blouse Peplum", "ankara"),
            ("Deep Purple Premium Lace Gown", "lace"),
            ("Multicolor Ankara Corset Top", "ankara"),
            ("Ivory Damask Agbada Dress", "traditional"),
            ("Gold Aso-Oke Pencil Skirt", "traditional"),
            ("Charcoal Ankara Smart Trousers", "ankara"),
            ("Navy Polished Linen Shift Dress", "neutral"),
            ("Ruby Red Ankara Ball Gown", "ankara"),
            ("Modern Prince Navy Agbada Set", "traditional"),
            ("Ankara Print Slim Fit Shirt Men", "ankara"),
            ("Emerald Ankara Shorts", "ankara"),
            ("Navy Guinea Brocade Sokoto", "traditional"),
            ("Rainbow Ankara Flare Dress Girls", "ankara"),
            ("Blush Lace Flower Girl Dress", "lace"),
            ("Ankara Cropped Blouse Skirt Set", "ankara"),
        ]
        
        for idx, (product_name, category) in enumerate(products, 1):
            # Main product view
            img_main = generate_product_image(product_name, category, is_hover=False)
            filename_main = f"product-{idx}a.jpg"
            img_main.save(os.path.join(OUTPUT_DIR, filename_main), "JPEG", quality=95)
            
            # Hover view (slightly different treatment)
            img_hover = generate_product_image(product_name, category, is_hover=True)
            filename_hover = f"product-{idx}b.jpg"
            img_hover.save(os.path.join(OUTPUT_DIR, filename_hover), "JPEG", quality=95)
            
            print(f"   ✅ product-{idx}a.jpg & product-{idx}b.jpg - {product_name}")
            generated += 2
            total += 2
        
        # Queen/Community images
        print("\n👑 Generating community images...")
        queens = [
            ("Ankara Corset Elegance", "In Style"),
            ("Lace Gown Magic", "Celebration"),
            ("Bubu Dreams", "Comfort Elegance"),
            ("Office Wear Power", "Professional"),
            ("Aso-Ebi Celebration", "Family Pride"),
        ]
        
        for idx, (title, desc) in enumerate(queens, 1):
            img = generate_queen_image(idx, desc)
            filename = f"queen-{idx}.jpg"
            img.save(os.path.join(OUTPUT_DIR, filename), "JPEG", quality=95)
            print(f"   ✅ {filename} - {title}")
            generated += 1
            total += 1
        
        # Summary
        print("\n" + "="*60)
        print(f"✨ IMAGE GENERATION COMPLETE!")
        print("="*60)
        print(f"📊 Generated: {generated}/{total} images")
        print(f"📁 Location: {os.path.abspath(OUTPUT_DIR)}")
        print("\n✅ All images are ready to display on your website!")
        print("\n💡 NEXT STEPS:")
        print("   1. Run: npm run dev")
        print("   2. Visit: http://localhost:3000")
        print("   3. Your website will display with these professional images")
        print("   4. Later, replace with real AI-generated images if desired")
        print("\n🎉 Your Larisha Nigerian Fashion site is now complete!")
        
    except Exception as e:
        print(f"\n❌ Error during image generation: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()
