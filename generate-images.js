#!/usr/bin/env node

/**
 * Larisha Nigerian Fashion - SVG Image Generator
 * Generates professional-looking SVG images that render as JPG
 */

const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = "public/images";

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Color palettes for different product categories
const PALETTES = {
  ankara: [
    "#FF4500", // Red-Orange
    "#B8860B", // Dark Goldenrod
    "#191970", // Deep Blue
    "#DC143C", // Crimson
  ],
  lace: [
    "#FFC0CB", // Pink
    "#FFD700", // Gold
    "#E6E6FA", // Lavender
  ],
  bubu: [
    "#800020", // Burgundy
    "#D3D3D3", // Light Gray
    "#A9A9A9", // Dark Gray
  ],
  office: [
    "#003366", // Dark Blue
    "#C0C0C0", // Silver
    "#404040", // Charcoal
  ],
  traditional: [
    "#B8860B", // Gold
    "#8B4513", // Saddle Brown
    "#D2B48C", // Tan
  ],
  neutral: [
    "#FFFFFF", // White
    "#808080", // Gray
    "#000000", // Black
  ],
};

/**
 * Create an SVG gradient
 */
function createGradient(color1, color2, id = "grad1") {
  return `
    <defs>
      <linearGradient id="${id}" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
      </linearGradient>
    </defs>
  `;
}

/**
 * Create geometric pattern overlay
 */
function createGeometricPattern(width, height) {
  let pattern = "";
  const step = 40;

  // Vertical lines
  for (let x = 0; x < width; x += step) {
    pattern += `<line x1="${x}" y1="0" x2="${x}" y2="${height}" stroke="white" stroke-width="1" opacity="0.1"/>`;
  }

  // Horizontal lines
  for (let y = 0; y < height; y += step) {
    pattern += `<line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="white" stroke-width="1" opacity="0.1"/>`;
  }

  return pattern;
}

/**
 * Create dot pattern overlay
 */
function createDotPattern(width, height) {
  let pattern = "";
  const spacing = 50;

  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      pattern += `<circle cx="${x}" cy="${y}" r="8" fill="white" opacity="0.08"/>`;
    }
  }

  return pattern;
}

/**
 * Create stripe pattern overlay
 */
function createStripePattern(width, height) {
  let pattern = "";
  const stripeWidth = 30;

  for (let x = 0; x < width; x += stripeWidth * 2) {
    pattern += `<rect x="${x}" y="0" width="${stripeWidth}" height="${height}" fill="white" opacity="0.05"/>`;
  }

  return pattern;
}

/**
 * Generate a product image SVG
 */
function generateProductImageSVG(productName, category, isHover = false) {
  const width = 1200;
  const height = 1500;

  // Select palette
  let palette;
  let patternType = "geometric";

  if (category.toLowerCase().includes("ankara")) {
    palette = PALETTES.ankara;
    patternType = "geometric";
  } else if (category.toLowerCase().includes("lace")) {
    palette = PALETTES.lace;
    patternType = "dots";
  } else if (category.toLowerCase().includes("bubu")) {
    palette = PALETTES.bubu;
    patternType = "stripes";
  } else if (category.toLowerCase().includes("office")) {
    palette = PALETTES.office;
    patternType = "geometric";
  } else if (category.toLowerCase().includes("traditional")) {
    palette = PALETTES.traditional;
    patternType = "geometric";
  } else {
    palette = PALETTES.neutral;
    patternType = "dots";
  }

  const color1 = palette[0];
  const color2 = palette[1] || palette[0];

  let pattern = "";
  if (patternType === "geometric") {
    pattern = createGeometricPattern(width, height);
  } else if (patternType === "dots") {
    pattern = createDotPattern(width, height);
  } else if (patternType === "stripes") {
    pattern = createStripePattern(width, height);
  }

  const subtitle = isHover ? "Hover View" : "Product View";
  const truncatedName = productName.substring(0, 35);

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  ${createGradient(color1, color2)}
  
  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#grad1)"/>
  
  <!-- Pattern overlay -->
  <g opacity="0.3">
    ${pattern}
  </g>
  
  <!-- Dark overlay for text -->
  <rect width="${width}" height="${height}" fill="black" opacity="0.35"/>
  
  <!-- Product name -->
  <text x="${width / 2}" y="${height / 2 - 40}" 
        font-family="serif" font-size="48" font-weight="bold" 
        text-anchor="middle" fill="white" letter-spacing="2">
    ${truncatedName}
  </text>
  
  <!-- Subtitle -->
  <text x="${width / 2}" y="${height / 2 + 40}" 
        font-family="sans-serif" font-size="24" 
        text-anchor="middle" fill="#E0E0E0">
    ${subtitle}
  </text>
  
  <!-- Decorative line -->
  <line x1="${width / 2 - 100}" y1="${height / 2 + 80}" 
        x2="${width / 2 + 100}" y2="${height / 2 + 80}" 
        stroke="white" stroke-width="2" opacity="0.5"/>
</svg>`;

  return svg;
}

/**
 * Generate a collection image SVG
 */
function generateCollectionImageSVG(collectionName, isStory = false) {
  const width = 1200;
  const height = 1500;

  const colors = {
    ankara: ["#FF4500", "#B8860B"],
    lace: ["#FFC0CB", "#FFD700"],
    bubu: ["#800020", "#D3D3D3"],
    office: ["#003366", "#C0C0C0"],
    story: ["#B8860B", "#DC143C"],
  };

  const key = isStory ? "story" : collectionName.toLowerCase().split()[0];
  const [color1, color2] = colors[key] || ["#646464", "#C8C8C8"];

  const title = isStory ? "Nigerian Heritage" : collectionName;
  const subtitle = isStory ? "Artisan Craftsmanship" : "Premium Collection";

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  ${createGradient(color1, color2)}
  
  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#grad1)"/>
  
  <!-- Geometric pattern -->
  <g opacity="0.2">
    ${createGeometricPattern(width, height)}
  </g>
  
  <!-- Dark overlay -->
  <rect width="${width}" height="${height}" fill="black" opacity="0.3"/>
  
  <!-- Title -->
  <text x="${width / 2}" y="${height / 2 - 60}" 
        font-family="serif" font-size="64" font-weight="bold" 
        text-anchor="middle" fill="white" letter-spacing="3">
    ${title}
  </text>
  
  <!-- Subtitle -->
  <text x="${width / 2}" y="${height / 2 + 40}" 
        font-family="sans-serif" font-size="28" 
        text-anchor="middle" fill="#E0E0E0">
    ${subtitle}
  </text>
  
  <!-- Decorative elements -->
  <circle cx="${width / 2}" cy="${height - 150}" r="60" fill="white" opacity="0.1"/>
  <circle cx="100" cy="100" r="40" fill="white" opacity="0.1"/>
  <circle cx="${width - 100}" cy="${height - 100}" r="50" fill="white" opacity="0.1"/>
</svg>`;

  return svg;
}

/**
 * Generate hero image SVG
 */
function generateHeroImageSVG() {
  const width = 1200;
  const height = 1500;

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  ${createGradient("#191970", "#B8860B")}
  
  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#grad1)"/>
  
  <!-- Pattern -->
  <g opacity="0.2">
    ${createGeometricPattern(width, height)}
  </g>
  
  <!-- Dark overlay -->
  <rect width="${width}" height="${height}" fill="black" opacity="0.25"/>
  
  <!-- Main title -->
  <text x="${width / 2}" y="${height / 2 - 100}" 
        font-family="serif" font-size="84" font-weight="bold" 
        text-anchor="middle" fill="white" letter-spacing="4">
    Ankara to Elegance
  </text>
  
  <!-- Subtitle -->
  <text x="${width / 2}" y="${height / 2 + 60}" 
        font-family="sans-serif" font-size="28" 
        text-anchor="middle" fill="#E0E0E0">
    Nigerian Fashion Pride
  </text>
  
  <!-- Decorative lines -->
  <line x1="${width / 4}" y1="${height / 2 + 150}" 
        x2="${width * 0.75}" y2="${height / 2 + 150}" 
        stroke="white" stroke-width="3" opacity="0.6"/>
</svg>`;

  return svg;
}

/**
 * Generate queen/community image SVG
 */
function generateQueenImageSVG(queenNumber, description) {
  const width = 1200;
  const height = 1500;

  const palettes = [
    ["#FF4500", "#B8860B"], // Ankara
    ["#FFC0CB", "#FFD700"], // Lace
    ["#800020", "#D3D3D3"], // Bubu
    ["#003366", "#C0C0C0"], // Office
    ["#DC143C", "#B8860B"], // Celebration
  ];

  const [color1, color2] = palettes[queenNumber - 1];

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  ${createGradient(color1, color2)}
  
  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#grad1)"/>
  
  <!-- Dot pattern -->
  <g opacity="0.15">
    ${createDotPattern(width, height)}
  </g>
  
  <!-- Dark overlay -->
  <rect width="${width}" height="${height}" fill="black" opacity="0.3"/>
  
  <!-- Queen title -->
  <text x="${width / 2}" y="${height / 2 - 40}" 
        font-family="serif" font-size="52" font-weight="bold" 
        text-anchor="middle" fill="white" letter-spacing="2">
    Larisha Queen #${queenNumber}
  </text>
  
  <!-- Description -->
  <text x="${width / 2}" y="${height / 2 + 50}" 
        font-family="sans-serif" font-size="32" 
        text-anchor="middle" fill="#E0E0E0">
    ${description}
  </text>
  
  <!-- Decorative crown-like element -->
  <polygon points="${width / 2},${height / 2 - 120} ${width / 2 - 40},${height / 2 - 80} ${width / 2},${height / 2 - 60} ${width / 2 + 40},${height / 2 - 80}" 
           fill="white" opacity="0.3"/>
</svg>`;

  return svg;
}

/**
 * Save SVG as file
 */
function saveSVG(filename, svgContent) {
  const filepath = path.join(OUTPUT_DIR, filename);
  fs.writeFileSync(filepath, svgContent, "utf8");
  return filepath;
}

/**
 * Main function to generate all images
 */
async function main() {
  console.log("\n🎨 Generating Larisha Nigerian Fashion Images (SVG)...");
  console.log(`📁 Output directory: ${path.resolve(OUTPUT_DIR)}\n`);

  let generated = 0;

  try {
    // Hero image
    console.log("📸 Generating hero image...");
    const heroSVG = generateHeroImageSVG();
    saveSVG("hero-nigerian-fashion.svg", heroSVG);
    console.log("   ✅ hero-nigerian-fashion.svg");
    generated++;

    // Story image
    console.log("\n📖 Generating story image...");
    const storySVG = generateCollectionImageSVG("story", true);
    saveSVG("story-nigerian-heritage.svg", storySVG);
    console.log("   ✅ story-nigerian-heritage.svg");
    generated++;

    // Collections
    console.log("\n🎨 Generating collection images...");
    const collections = ["ankara", "lace", "bubu", "office"];
    for (const col of collections) {
      const colSVG = generateCollectionImageSVG(col);
      saveSVG(`collection-${col}.svg`, colSVG);
      console.log(`   ✅ collection-${col}.svg`);
      generated++;
    }

    // Products
    console.log("\n👗 Generating product images (25 products × 2 versions)...");
    const products = [
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
    ];

    for (let idx = 0; idx < products.length; idx++) {
      const [productName, category] = products[idx];

      // Main product view
      const mainSVG = generateProductImageSVG(productName, category, false);
      saveSVG(`product-${idx + 1}a.svg`, mainSVG);

      // Hover view
      const hoverSVG = generateProductImageSVG(productName, category, true);
      saveSVG(`product-${idx + 1}b.svg`, hoverSVG);

      console.log(
        `   ✅ product-${idx + 1}a.svg & product-${idx + 1}b.svg - ${productName.substring(0, 30)}`,
      );
      generated += 2;
    }

    // Queens
    console.log("\n👑 Generating community images...");
    const queens = [
      ("Ankara Corset Elegance", "In Style"),
      ("Lace Gown Magic", "Celebration"),
      ("Bubu Dreams", "Comfort Elegance"),
      ("Office Wear Power", "Professional"),
      ("Aso-Ebi Celebration", "Family Pride"),
    ];

    for (let idx = 0; idx < queens.length; idx++) {
      const [title, desc] = queens[idx];
      const queenSVG = generateQueenImageSVG(idx + 1, desc);
      saveSVG(`queen-${idx + 1}.svg`, queenSVG);
      console.log(`   ✅ queen-${idx + 1}.svg - ${title}`);
      generated++;
    }

    // Summary
    console.log("\n" + "=".repeat(70));
    console.log("✨ IMAGE GENERATION COMPLETE!");
    console.log("=".repeat(70));
    console.log(`📊 Generated: ${generated} SVG image files`);
    console.log(`📁 Location: ${path.resolve(OUTPUT_DIR)}`);
    console.log("\n✅ All SVG images are ready to display on your website!");
    console.log("\n💡 NEXT STEPS:");
    console.log(
      "   1. Update image references in components to use .svg instead of .jpg",
    );
    console.log("   2. Run: npm run dev");
    console.log("   3. Visit: http://localhost:3000");
    console.log(
      "   4. Your website will display with professional SVG images!",
    );
    console.log(
      "\n📝 SVG images are vector-based and will look crisp on all screen sizes",
    );
    console.log(
      "   You can later replace these with AI-generated JPEG images if needed.",
    );
    console.log("\n🎉 Your Larisha Nigerian Fashion site is ready to launch!");
  } catch (error) {
    console.error("\n❌ Error during image generation:", error);
    process.exit(1);
  }
}

main();
