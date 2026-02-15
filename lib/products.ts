export type Occasion =
  | "Aso-Ebi"
  | "Ready-to-Wear"
  | "Evening"
  | "Bridal"
  | "Casual";
export type Fabric =
  | "Lace"
  | "Ankara"
  | "Aso-Oke"
  | "Silk"
  | "Cashmere"
  | "Cotton"
  | "Linen"
  | "Chiffon"
  | "Wool";
export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL";
export type Gender = "Women" | "Men" | "Girls";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  imageHover: string;
  category: string;
  gender: Gender;
  isNew?: boolean;
  description: string;
  fabric: Fabric;
  occasion: Occasion;
  sizes: Size[];
  relatedIds: string[];
}

export const allSizes: Size[] = ["XS", "S", "M", "L", "XL", "XXL"];
export const allFabrics: Fabric[] = [
  "Lace",
  "Ankara",
  "Aso-Oke",
  "Silk",
  "Cashmere",
  "Cotton",
  "Linen",
  "Chiffon",
  "Wool",
];
export const allOccasions: Occasion[] = [
  "Aso-Ebi",
  "Ready-to-Wear",
  "Evening",
  "Bridal",
  "Casual",
];
export const allCategories = [
  "Dresses",
  "Blouses & Tops",
  "Skirts",
  "Trousers",
  "Outerwear",
  "Traditional",
  "Accessories",
  "Menswear",
  "Girls",
];
export const allGenders: Gender[] = ["Women", "Men", "Girls"];

export const sizeGuide: Record<
  Size,
  { bust: string; waist: string; hip: string }
> = {
  XS: { bust: '30-32"', waist: '24-26"', hip: '33-35"' },
  S: { bust: '33-35"', waist: '27-29"', hip: '36-38"' },
  M: { bust: '36-38"', waist: '30-32"', hip: '39-41"' },
  L: { bust: '39-41"', waist: '33-35"', hip: '42-44"' },
  XL: { bust: '42-44"', waist: '36-38"', hip: '45-47"' },
  XXL: { bust: '45-47"', waist: '39-41"', hip: '48-50"' },
};

export const products: Product[] = [
  {
    id: "1",
    name: "Royal Sapphire Ankara Corset Dress",
    price: 385000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Dresses",
    gender: "Women",
    isNew: true,
    description:
      "A show-stopping masterpiece showcasing premium Dutch-wax ankara in royal sapphire and gold geometric patterns. Featuring a structured corset bodice with bone construction, this dress hugs curves beautifully while demanding attention. The full skirt sweeps dramatically, perfect for elevated celebrations and events.",
    fabric: "Ankara",
    occasion: "Aso-Ebi",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    relatedIds: ["5", "9", "13"],
  },
  {
    id: "2",
    name: "Sunset Gold Lace Gown",
    price: 520000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Dresses",
    gender: "Women",
    isNew: true,
    description:
      "An exquisite celebration gown in breathtaking sunset gold lace over champagne silk. Hand-finished embellishments trace the bodice and waist, creating an ethereal silhouette. This is bespoke luxury - custom-sewn to your exact measurements. A dress that commands the room.",
    fabric: "Lace",
    occasion: "Aso-Ebi",
    sizes: ["S", "M", "L", "XL", "XXL"],
    relatedIds: ["1", "8", "12"],
  },
  {
    id: "3",
    name: "Emerald Office Blazer with Ankara Details",
    price: 285000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Outerwear",
    gender: "Women",
    isNew: true,
    description:
      "Power meets elegance. A contemporary blazer in solid emerald with strategic ankara accents at the cuffs and back panel. Tailored for the modern professional, featuring refined shoulders and a nipped waist. Fully lined with signature finishing. Perfect for boardrooms and brunches.",
    fabric: "Cotton",
    occasion: "Ready-to-Wear",
    sizes: ["XS", "S", "M", "L", "XL"],
    relatedIds: ["7", "11", "4"],
  },
  {
    id: "4",
    name: "Burgundy Bubu Dream Dress",
    price: 295000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Dresses",
    gender: "Women",
    description:
      "The ultimate comfort-meets-chic moment. This flowing bubu silhouette in luxurious burgundy silk is cut generously for elegant draping. Featuring voluminous sleeves with refined cuffs and subtle embroidery at the neckline. Effortlessly stunning for family gatherings and leisure.",
    fabric: "Silk",
    occasion: "Casual",
    sizes: ["S", "M", "L", "XL", "XXL"],
    relatedIds: ["6", "10", "14"],
  },
  {
    id: "5",
    name: "Crimson Lace & Ankara Blend Gown",
    price: 480000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Dresses",
    gender: "Women",
    isNew: true,
    description:
      "A stunning fusion of premium crimson lace overtop ankara-printed silk lining. The bodice features hand-beaded detailing, while the skirt showcases the ankara pattern in strategic panels. This is haute couture celebration wear - custom made for your most important moments.",
    fabric: "Lace",
    occasion: "Bridal",
    sizes: ["S", "M", "L", "XL"],
    relatedIds: ["2", "8", "16"],
  },
  {
    id: "6",
    name: "Sunshine Ankara Wrapper & Blouse Set",
    price: 220000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Traditional",
    gender: "Women",
    description:
      "The classic elevated. Authentic Nigerian wrapper in vibrant sunshine yellow and tribal patterns, paired with a tailored linen blouse featuring intricate embroidery. This timeless combination is perfect for weddings, naming ceremonies, and celebrations. A nod to heritage, styled for today.",
    fabric: "Ankara",
    occasion: "Aso-Ebi",
    sizes: ["S", "M", "L", "XL", "XXL"],
    relatedIds: ["4", "11", "15"],
  },
  {
    id: "7",
    name: "Navy Office Wrap Trousers",
    price: 140000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Trousers",
    gender: "Women",
    description:
      "Precision-tailored navy trousers with a sophisticated wrap waist detail. Cut from premium cotton blend for comfort and durability. High-waisted, tapered leg, and finished with invisible hemming. The perfect closet staple for professional women.",
    fabric: "Cotton",
    occasion: "Ready-to-Wear",
    sizes: ["XS", "S", "M", "L", "XL"],
    relatedIds: ["3", "11", "13"],
  },
  {
    id: "8",
    name: "Blush Pink Hand-Beaded Lace Dress",
    price: 550000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Dresses",
    gender: "Women",
    isNew: true,
    description:
      "Pure elegance and grace. Sheer blush pink lace featuring hand-sewn crystal beadwork throughout. The bodice is strategically embellished, while the skirt flows like a dream. This bespoke piece is custom-made for discerning brides and celebrities. Every stitch tells a story.",
    fabric: "Lace",
    occasion: "Bridal",
    sizes: ["S", "M", "L", "XL"],
    relatedIds: ["5", "2", "12"],
  },
  {
    id: "9",
    name: "Deep Forest Ankara Pencil Skirt",
    price: 125000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Skirts",
    gender: "Women",
    description:
      "Sophisticated office wear with personality. A tailored pencil skirt in deep forest ankara with subtle geometric patterns. Fitted through the hip and thigh, with a clean slit. Pair with a neutral blouse for instant polish, or a matching ankara blouse for coordinated drama.",
    fabric: "Ankara",
    occasion: "Ready-to-Wear",
    sizes: ["XS", "S", "M", "L", "XL"],
    relatedIds: ["7", "3", "11"],
  },
  {
    id: "10",
    name: "Cream Iro & Buba Traditional Set",
    price: 310000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Traditional",
    gender: "Women",
    isNew: true,
    description:
      "A timeless traditional ensemble where heritage shines. The cream iro (wrapper) features hand-woven texture, paired with a fitted buba (blouse) in matching cream linen with delicate embroidery. Worn by generations, styled for this moment. Custom-fit available.",
    fabric: "Linen",
    occasion: "Aso-Ebi",
    sizes: ["S", "M", "L", "XL", "XXL"],
    relatedIds: ["6", "15", "4"],
  },
  {
    id: "11",
    name: "Terracotta Ankara Blouse with Peplum",
    price: 95000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Blouses & Tops",
    gender: "Women",
    description:
      "A statement piece that works hard. Terracotta ankara with a fitted bodice and dramatic peplum waist detail. Tailored sleeves sit just off the shoulders. Pair with solid bottoms for a balanced look, or embrace coordinated ankara energy with matching skirts.",
    fabric: "Ankara",
    occasion: "Ready-to-Wear",
    sizes: ["XS", "S", "M", "L", "XL"],
    relatedIds: ["3", "7", "9"],
  },
  {
    id: "12",
    name: "Deep Purple Premium Lace Gown",
    price: 495000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Dresses",
    gender: "Women",
    isNew: true,
    description:
      "Regal and mesmerizing. Premium imported lace in deep royal purple with intricate geometric patterns. The bodice is boned and hand-finished with coordinate thread work. This custom-made gown is for women who understand that presence is the best accessory.",
    fabric: "Lace",
    occasion: "Aso-Ebi",
    sizes: ["S", "M", "L", "XL", "XXL"],
    relatedIds: ["2", "8", "5"],
  },
  {
    id: "13",
    name: "Multicolor Ankara Corset Top with Peplum",
    price: 165000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Blouses & Tops",
    gender: "Women",
    isNew: true,
    description:
      "Turn heads with this bold ankara corset top featuring vibrant multicolor geometric patterns. Structured waist with a flared peplum at the hem. The perfect piece for those who refuse to blend in. Pair with neutral bottoms or go all-in with matching ankara.",
    fabric: "Ankara",
    occasion: "Ready-to-Wear",
    sizes: ["XS", "S", "M", "L", "XL"],
    relatedIds: ["1", "11", "9"],
  },
  {
    id: "14",
    name: "Ivory Damask Agbada Dress",
    price: 380000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Traditional",
    gender: "Women",
    description:
      "A contemporary interpretation of the classic agbada. Flowing ivory damask fabric with voluminous sleeves that frame the silhouette beautifully. The understated elegance speaks volumes. Perfect for celebrations where you want to honor tradition while turning heads.",
    fabric: "Cotton",
    occasion: "Aso-Ebi",
    sizes: ["S", "M", "L", "XL", "XXL"],
    relatedIds: ["4", "10", "6"],
  },
  {
    id: "15",
    name: "Gold Aso-Oke Pencil Skirt with Blouse",
    price: 285000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Traditional",
    gender: "Women",
    description:
      "Celebrate Yoruba craftsmanship with this hand-woven aso-oke in rich gold tones. The pencil skirt hugs elegantly, paired with a matching tailored blouse featuring subtle architectural detailing. A conversation piece for any important gathering.",
    fabric: "Aso-Oke",
    occasion: "Aso-Ebi",
    sizes: ["S", "M", "L", "XL"],
    relatedIds: ["10", "6", "4"],
  },
  {
    id: "16",
    name: "Charcoal Ankara Smart Trousers",
    price: 155000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Trousers",
    gender: "Women",
    isNew: true,
    description:
      "Professionalism meets panache. Charcoal ankara with subtle geometric patterns, tailored into smart high-waisted trousers. Refined waistband, clean lines, and a tapered leg. Wear to the office with a plain blouse, or style up with an ankara corset for evening.",
    fabric: "Ankara",
    occasion: "Ready-to-Wear",
    sizes: ["XS", "S", "M", "L", "XL"],
    relatedIds: ["7", "9", "3"],
  },
  {
    id: "17",
    name: "Navy Polished Linen Shift Dress",
    price: 185000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Dresses",
    gender: "Women",
    description:
      "Effortless sophistication. A classic shift dress in premium navy linen with a clean, minimalist silhouette. Perfect for those hot Lagos afternoons when you still need to look sharp. The ultimate versatile piece - dress up with accessories or wear casually on weekends.",
    fabric: "Linen",
    occasion: "Casual",
    sizes: ["XS", "S", "M", "L", "XL"],
    relatedIds: ["4", "7", "11"],
  },
  {
    id: "18",
    name: "Ruby Red Ankara Ball Gown",
    price: 425000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Dresses",
    gender: "Women",
    isNew: true,
    description:
      "Pure drama and romance. Stunning ruby red ankara with intricate tribal patterns forms this voluminous ball gown. Structured corset bodice, dramatic full skirt with layers of tulle underpinning. The dress that makes an entrance a moment to remember. Custom measurements honored.",
    fabric: "Ankara",
    occasion: "Aso-Ebi",
    sizes: ["S", "M", "L", "XL", "XXL"],
    relatedIds: ["1", "5", "9"],
  },
  {
    id: "19",
    name: "Modern Prince Navy Agbada Set (Men)",
    price: 395000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Menswear",
    gender: "Men",
    isNew: true,
    description:
      "Nigerian elegance redefined. Navy guinea brocade agbada set featuring the flowing outer robe, tailored inner buba with embroidered detailing, and matching sokoto trousers. Every piece is custom-tailored for perfect proportions. The modern man's ultimate power move.",
    fabric: "Cotton",
    occasion: "Aso-Ebi",
    sizes: ["S", "M", "L", "XL", "XXL"],
    relatedIds: ["20", "22", "3"],
  },
  {
    id: "20",
    name: "Ankara Print Slim Fit Shirt (Men)",
    price: 98000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Menswear",
    gender: "Men",
    description:
      "Sharp and unforgettable. A contemporary slim-fit shirt in vibrant ankara featuring a clean collar, chest pocket, and refined cuffs. Perfect for pairing with plain trousers for a balanced statement, or doubling down with ankara trousers for coordinated impact.",
    fabric: "Ankara",
    occasion: "Casual",
    sizes: ["S", "M", "L", "XL", "XXL"],
    relatedIds: ["19", "21", "7"],
  },
  {
    id: "21",
    name: "Emerald Ankara Shorts",
    price: 65000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Trousers",
    gender: "Men",
    description:
      "Vibrant confidence. Premium ankara shorts in emerald and gold patterns, tailored with a comfortable fit that doesn't sacrifice style. Perfect for weekend hangouts, informal events, or styled up with a linen shirt for elevated casual wear.",
    fabric: "Ankara",
    occasion: "Casual",
    sizes: ["S", "M", "L", "XL", "XXL"],
    relatedIds: ["20", "19", "4"],
  },
  {
    id: "22",
    name: "Navy Guinea Brocade Sokoto Trousers (Men)",
    price: 125000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Menswear",
    gender: "Men",
    description:
      "Traditional meets tailoring. Premium navy guinea brocade sokoto trousers featuring the characteristic comfortable fit at the hip and thigh. Pair with a buba for the complete traditional set, or style with modern pieces for contemporary flair.",
    fabric: "Cotton",
    occasion: "Aso-Ebi",
    sizes: ["S", "M", "L", "XL", "XXL"],
    relatedIds: ["19", "20", "10"],
  },
  {
    id: "23",
    name: "Rainbow Ankara Flare Dress (Girls)",
    price: 62000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Girls",
    gender: "Girls",
    isNew: true,
    description:
      "Let her shine. Cheerful rainbow ankara in a flared silhouette with elasticated bodice for easy dressing. The full skirt twirls beautifully for play and celebration. Available in multiple stunning print options - contact us on WhatsApp to choose her favorite.",
    fabric: "Ankara",
    occasion: "Casual",
    sizes: ["XS", "S", "M", "L"],
    relatedIds: ["24", "16", "4"],
  },
  {
    id: "24",
    name: "Blush Lace Flower Girl Dress",
    price: 85000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Girls",
    gender: "Girls",
    isNew: true,
    description:
      "Pure magic. An enchanting flower girl dress in soft blush lace over satin underpinning. Fitted bodice with delicate straps, full tulle skirt with satin sash. Custom measurements ensure the perfect fit for your little princess. A dress she'll remember forever.",
    fabric: "Lace",
    occasion: "Bridal",
    sizes: ["XS", "S", "M"],
    relatedIds: ["23", "8", "5"],
  },
  {
    id: "25",
    name: "Ankara Cropped Blouse & High-Waist Skirt Set",
    price: 195000,
    image: "/images/image.png",
    imageHover: "/images/image.png",
    category: "Blouses & Tops",
    gender: "Women",
    isNew: true,
    description:
      "Bold. Coordinated. Unforgettable. A perfectly proportioned ankara two-piece featuring a fitted cropped blouse with dramatic neckline and a high-waisted pencil skirt. The ultimate celebration set that showcases intricate geometric patterns. Wear together or separate.",
    fabric: "Ankara",
    occasion: "Ready-to-Wear",
    sizes: ["XS", "S", "M", "L", "XL"],
    relatedIds: ["13", "11", "9"],
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(price);
}

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product): Product[] {
  return product.relatedIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => p !== undefined);
}
