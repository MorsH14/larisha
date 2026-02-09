export type Occasion = "Aso-Ebi" | "Ready-to-Wear" | "Evening" | "Bridal" | "Casual"
export type Fabric = "Lace" | "Ankara" | "Aso-Oke" | "Silk" | "Cashmere" | "Cotton" | "Linen" | "Chiffon" | "Wool"
export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL"
export type Gender = "Women" | "Men" | "Girls"

export interface Product {
  id: string
  name: string
  price: number
  image: string
  imageHover: string
  category: string
  gender: Gender
  isNew?: boolean
  description: string
  fabric: Fabric
  occasion: Occasion
  sizes: Size[]
  relatedIds: string[]
}

export const allSizes: Size[] = ["XS", "S", "M", "L", "XL", "XXL"]
export const allFabrics: Fabric[] = ["Lace", "Ankara", "Aso-Oke", "Silk", "Cashmere", "Cotton", "Linen", "Chiffon", "Wool"]
export const allOccasions: Occasion[] = ["Aso-Ebi", "Ready-to-Wear", "Evening", "Bridal", "Casual"]
export const allCategories = ["Dresses", "Blouses & Tops", "Skirts", "Trousers", "Outerwear", "Traditional", "Accessories", "Menswear", "Girls"]
export const allGenders: Gender[] = ["Women", "Men", "Girls"]

export const sizeGuide: Record<Size, { bust: string; waist: string; hip: string }> = {
  XS: { bust: '30-32"', waist: '24-26"', hip: '33-35"' },
  S:  { bust: '33-35"', waist: '27-29"', hip: '36-38"' },
  M:  { bust: '36-38"', waist: '30-32"', hip: '39-41"' },
  L:  { bust: '39-41"', waist: '33-35"', hip: '42-44"' },
  XL: { bust: '42-44"', waist: '36-38"', hip: '45-47"' },
  XXL:{ bust: '45-47"', waist: '39-41"', hip: '48-50"' },
}

export const products: Product[] = [
  {
    id: "1",
    name: "Silk Noir Blazer",
    price: 285000,
    image: "/images/product-1a.jpg",
    imageHover: "/images/product-1b.jpg",
    category: "Outerwear",
    gender: "Women",
    isNew: true,
    description: "A masterfully sewn blazer in rich noir silk. Structured shoulders and a slim silhouette tailored to flatter every body type. Fully lined with Larisha's signature finishing. Can be custom-sewn to your exact measurements.",
    fabric: "Silk",
    occasion: "Ready-to-Wear",
    sizes: ["XS", "S", "M", "L", "XL"],
    relatedIds: ["3", "5", "7"],
  },
  {
    id: "2",
    name: "Creme Cashmere Pullover",
    price: 165000,
    image: "/images/product-2a.jpg",
    imageHover: "/images/product-2b.jpg",
    category: "Blouses & Tops",
    gender: "Women",
    isNew: true,
    description: "Luxuriously soft cashmere pullover in a warm creme tone. Relaxed yet refined, sewn with French seams for durability. Perfect for layering or wearing solo on cool harmattan evenings.",
    fabric: "Cashmere",
    occasion: "Casual",
    sizes: ["S", "M", "L", "XL"],
    relatedIds: ["5", "8", "3"],
  },
  {
    id: "3",
    name: "Charcoal Tailored Trousers",
    price: 120000,
    image: "/images/product-3a.jpg",
    imageHover: "/images/product-3b.jpg",
    category: "Trousers",
    gender: "Women",
    description: "Impeccably cut and sewn from fine wool suiting. High-waisted with a tapered leg, finished with invisible hem stitching. Available for bespoke tailoring to your measurements.",
    fabric: "Wool",
    occasion: "Ready-to-Wear",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    relatedIds: ["1", "5", "2"],
  },
  {
    id: "4",
    name: "Champagne Satin Slip Dress",
    price: 210000,
    image: "/images/product-4a.jpg",
    imageHover: "/images/product-4b.jpg",
    category: "Dresses",
    gender: "Women",
    isNew: true,
    description: "A bias-cut slip dress sewn from flowing champagne satin. The delicate cowl neckline and adjustable straps are hand-finished. A go-to evening piece that can be hemmed to your ideal length.",
    fabric: "Silk",
    occasion: "Evening",
    sizes: ["XS", "S", "M", "L"],
    relatedIds: ["9", "6", "12"],
  },
  {
    id: "5",
    name: "Ivory Linen Blouse",
    price: 95000,
    image: "/images/product-5a.jpg",
    imageHover: "/images/product-5b.jpg",
    category: "Blouses & Tops",
    gender: "Women",
    description: "A structured ivory linen blouse sewn with oversized cuffs and a clean placket. Breathable fabric perfect for Lagos heat. Each piece is cut and stitched by our in-house tailors.",
    fabric: "Linen",
    occasion: "Casual",
    sizes: ["XS", "S", "M", "L", "XL"],
    relatedIds: ["3", "8", "1"],
  },
  {
    id: "6",
    name: "Noir Leather Tote",
    price: 340000,
    image: "/images/product-6a.jpg",
    imageHover: "/images/product-6b.jpg",
    category: "Accessories",
    gender: "Women",
    isNew: true,
    description: "Handcrafted from the finest vegetable-tanned leather with hand-stitched detailing. A spacious, sophisticated tote for the woman who carries her world with grace.",
    fabric: "Linen",
    occasion: "Ready-to-Wear",
    sizes: ["M"],
    relatedIds: ["1", "4", "7"],
  },
  {
    id: "7",
    name: "Olive Cocoon Coat",
    price: 380000,
    image: "/images/product-7a.jpg",
    imageHover: "/images/product-7b.jpg",
    category: "Outerwear",
    gender: "Women",
    description: "A dramatic oversized coat sewn from premium wool in deep olive. The cocoon silhouette is fully lined and can be tailored shorter or longer to suit your frame. Perfect for harmattan or travel.",
    fabric: "Wool",
    occasion: "Ready-to-Wear",
    sizes: ["S", "M", "L", "XL"],
    relatedIds: ["1", "3", "2"],
  },
  {
    id: "8",
    name: "Sand Palazzo Trousers",
    price: 135000,
    image: "/images/product-8a.jpg",
    imageHover: "/images/product-8b.jpg",
    category: "Trousers",
    gender: "Women",
    description: "Wide-leg palazzo trousers sewn from premium linen in warm sand. High-waisted with a fluid drape that elongates the silhouette. Elasticated back waist for comfort, with a clean flat front.",
    fabric: "Linen",
    occasion: "Casual",
    sizes: ["XS", "S", "M", "L", "XL"],
    relatedIds: ["5", "2", "11"],
  },
  {
    id: "9",
    name: "Emerald Aso-Ebi Lace Gown",
    price: 450000,
    image: "/images/product-9a.jpg",
    imageHover: "/images/product-9b.jpg",
    category: "Dresses",
    gender: "Women",
    isNew: true,
    description: "A show-stopping emerald lace gown designed and sewn for the most prestigious occasions. Intricate corded lace with hand-finished beadwork. Every gown is custom-sewn - send your measurements via WhatsApp for a perfect fit.",
    fabric: "Lace",
    occasion: "Aso-Ebi",
    sizes: ["S", "M", "L", "XL", "XXL"],
    relatedIds: ["12", "4", "10"],
  },
  {
    id: "10",
    name: "Ankara Heritage Blazer",
    price: 320000,
    image: "/images/product-10a.jpg",
    imageHover: "/images/product-10b.jpg",
    category: "Traditional",
    gender: "Women",
    isNew: true,
    description: "Where tradition meets tailoring. Sewn from premium Dutch-wax ankara in vibrant orange and gold. Structured with interfacing for a sharp silhouette while remaining comfortable. Fully lined in matching cotton.",
    fabric: "Ankara",
    occasion: "Ready-to-Wear",
    sizes: ["XS", "S", "M", "L", "XL"],
    relatedIds: ["1", "3", "11"],
  },
  {
    id: "11",
    name: "White Modern Agbada Tunic",
    price: 275000,
    image: "/images/product-11a.jpg",
    imageHover: "/images/product-11b.jpg",
    category: "Traditional",
    gender: "Women",
    description: "A reimagined agbada silhouette sewn in crisp white cotton. Dramatic flowing sleeves meet a minimal body - each piece is hand-cut and stitched to honor tradition while feeling utterly modern.",
    fabric: "Cotton",
    occasion: "Aso-Ebi",
    sizes: ["S", "M", "L", "XL"],
    relatedIds: ["10", "9", "8"],
  },
  {
    id: "12",
    name: "Aso-Oke Royal Wrap Skirt",
    price: 195000,
    image: "/images/product-12a.jpg",
    imageHover: "/images/product-12b.jpg",
    category: "Skirts",
    gender: "Women",
    isNew: true,
    description: "Hand-woven aso-oke in deep burgundy and gold threads, sewn into an elegant wrap skirt. A love letter to Yoruba craftsmanship, updated with concealed snap closures for the modern Larisha woman.",
    fabric: "Aso-Oke",
    occasion: "Aso-Ebi",
    sizes: ["S", "M", "L", "XL", "XXL"],
    relatedIds: ["9", "11", "4"],
  },
  {
    id: "13",
    name: "Navy Agbada Set (Men)",
    price: 350000,
    image: "/images/product-13a.jpg",
    imageHover: "/images/product-13b.jpg",
    category: "Menswear",
    gender: "Men",
    isNew: true,
    description: "A regal navy blue agbada set sewn from premium guinea brocade. Includes the flowing outer robe, fitted inner top (buba), and matching trousers (sokoto). Each piece is custom-sewn to the client's measurements.",
    fabric: "Cotton",
    occasion: "Aso-Ebi",
    sizes: ["S", "M", "L", "XL", "XXL"],
    relatedIds: ["14", "10", "11"],
  },
  {
    id: "14",
    name: "Ankara Print Shirt (Men)",
    price: 85000,
    image: "/images/product-14a.jpg",
    imageHover: "/images/product-14b.jpg",
    category: "Menswear",
    gender: "Men",
    description: "A modern slim-fit shirt sewn from vibrant ankara print. Features a clean collar, chest pocket, and French seams throughout. Perfect for a statement weekend look or paired with tailored chinos.",
    fabric: "Ankara",
    occasion: "Casual",
    sizes: ["S", "M", "L", "XL", "XXL"],
    relatedIds: ["13", "10", "3"],
  },
  {
    id: "15",
    name: "Ankara Flare Dress (Girls)",
    price: 55000,
    image: "/images/product-15a.jpg",
    imageHover: "/images/product-15b.jpg",
    category: "Girls",
    gender: "Girls",
    isNew: true,
    description: "A cheerful ankara-print flared dress sewn for young fashionistas. Elasticated bodice for easy dressing, with a full skirt that twirls beautifully. Available in multiple print options - contact us on WhatsApp to choose.",
    fabric: "Ankara",
    occasion: "Casual",
    sizes: ["XS", "S", "M"],
    relatedIds: ["16", "9", "12"],
  },
  {
    id: "16",
    name: "Blush Lace Flower Girl Dress",
    price: 75000,
    image: "/images/product-16a.jpg",
    imageHover: "/images/product-16b.jpg",
    category: "Girls",
    gender: "Girls",
    description: "An enchanting flower girl dress sewn from soft blush lace over satin lining. Features a fitted bodice, tulle underskirt, and satin sash. Each dress is made to order and can be customized for your little one's measurements.",
    fabric: "Lace",
    occasion: "Bridal",
    sizes: ["XS", "S", "M"],
    relatedIds: ["15", "9", "4"],
  },
]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(price)
}

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(product: Product): Product[] {
  return product.relatedIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => p !== undefined)
}
