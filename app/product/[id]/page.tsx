"use client"

import { useState } from "react"
import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ShoppingBag,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Truck,
  ShieldCheck,
  Ruler,
} from "lucide-react"
import {
  getProduct,
  getRelatedProducts,
  formatPrice,
  sizeGuide,
  type Size,
} from "@/lib/products"
import { useCart } from "@/lib/cart-context"
import { ProductCard } from "@/components/product-card"

export default function ProductDetailPage() {
  const params = useParams()
  const product = getProduct(params.id as string)

  if (!product) {
    notFound()
  }

  const [selectedSize, setSelectedSize] = useState<Size | null>(null)
  const [showImage, setShowImage] = useState<"main" | "hover">("main")
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false)
  const [detailsOpen, setDetailsOpen] = useState(true)
  const { addItem, generateWhatsAppUrl } = useCart()

  const related = getRelatedProducts(product)

  const handleAddToBag = () => {
    if (!selectedSize) return
    addItem(product, selectedSize)
  }

  const singleItemWhatsApp = () => {
    const text = `Hello Larisha, I'm interested in:\n\n${product.name}${selectedSize ? ` - Size ${selectedSize}` : ""}\nPrice: ${formatPrice(product.price)}\n\nPlease confirm availability. Thank you!`
    return `https://wa.me/2349038662876?text=${encodeURIComponent(text)}`
  }

  return (
    <main className="pt-28 md:pt-32 pb-20 md:pb-16">
      {/* Breadcrumbs */}
      <div className="px-5 md:px-10 mb-6">
        <nav className="flex items-center gap-2 text-xs font-sans text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-foreground transition-colors">
            Shop
          </Link>
          <span>/</span>
          <Link
            href={`/shop?category=${product.category}`}
            className="hover:text-foreground transition-colors"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Product Content */}
      <div className="px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 max-w-6xl">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[3/4] bg-secondary overflow-hidden mb-3">
              <Image
                src={showImage === "main" ? product.image : product.imageHover}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 font-sans">
                  New Arrival
                </span>
              )}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowImage("main")}
                className={`relative w-20 h-24 border-2 overflow-hidden transition-colors ${showImage === "main" ? "border-accent" : "border-border"}`}
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt="View 1"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
              <button
                onClick={() => setShowImage("hover")}
                className={`relative w-20 h-24 border-2 overflow-hidden transition-colors ${showImage === "hover" ? "border-accent" : "border-border"}`}
              >
                <Image
                  src={product.imageHover || "/placeholder.svg"}
                  alt="View 2"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans mb-2">
              {product.gender} / {product.category} / {product.occasion}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
              {product.name}
            </h1>
            <p className="text-xl text-foreground font-sans mb-6">
              {formatPrice(product.price)}
            </p>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Fabric */}
            <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-sans mb-6">
              Fabric: <span className="text-foreground">{product.fabric}</span>
            </p>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs tracking-[0.15em] uppercase text-foreground font-sans">
                  Select Size
                </p>
                <button
                  onClick={() => setSizeGuideOpen(!sizeGuideOpen)}
                  className="flex items-center gap-1 text-xs text-muted-foreground font-sans hover:text-accent transition-colors"
                >
                  <Ruler className="w-3 h-3" />
                  Size Guide
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2.5 text-xs tracking-[0.1em] uppercase font-sans border min-h-[44px] transition-colors ${
                      selectedSize === size
                        ? "bg-foreground text-background border-foreground"
                        : "bg-transparent border-border text-foreground hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Guide Drawer */}
            <AnimatePresence>
              {sizeGuideOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mb-6"
                >
                  <div className="border border-border p-4 bg-card">
                    <p className="text-xs tracking-[0.15em] uppercase text-foreground font-sans mb-3">
                      Nigerian Sizing Guide
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs font-sans">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="py-2 pr-4 text-left text-muted-foreground font-normal uppercase tracking-wider">
                              Size
                            </th>
                            <th className="py-2 pr-4 text-left text-muted-foreground font-normal uppercase tracking-wider">
                              Bust
                            </th>
                            <th className="py-2 pr-4 text-left text-muted-foreground font-normal uppercase tracking-wider">
                              Waist
                            </th>
                            <th className="py-2 text-left text-muted-foreground font-normal uppercase tracking-wider">
                              Hip
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.sizes.map((size) => (
                            <tr key={size} className="border-b border-border last:border-0">
                              <td className="py-2 pr-4 text-foreground font-medium">{size}</td>
                              <td className="py-2 pr-4 text-muted-foreground">{sizeGuide[size].bust}</td>
                              <td className="py-2 pr-4 text-muted-foreground">{sizeGuide[size].waist}</td>
                              <td className="py-2 text-muted-foreground">{sizeGuide[size].hip}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-[10px] text-muted-foreground font-sans mt-3 leading-relaxed">
                      For a perfect fit, visit our Victoria Island showroom for complimentary
                      measurements, or message our stylists on WhatsApp.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Actions */}
            <div className="flex flex-col gap-3 mb-8">
              <button
                onClick={handleAddToBag}
                disabled={!selectedSize}
                className="w-full py-4 bg-foreground text-background text-xs tracking-[0.2em] uppercase font-sans flex items-center justify-center gap-2 hover:bg-foreground/90 transition-colors min-h-[44px] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ShoppingBag className="w-4 h-4" />
                {selectedSize ? "Add to Bag" : "Select a Size"}
              </button>
              <a
                href={singleItemWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#25D366] text-[#ffffff] text-xs tracking-[0.2em] uppercase font-sans flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4" />
                Inquire on WhatsApp
              </a>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-col gap-3 py-4 border-t border-border">
              <div className="flex items-center gap-3">
                <Truck className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <span className="text-xs text-muted-foreground font-sans">
                  Fast nationwide delivery across Nigeria
                </span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <span className="text-xs text-muted-foreground font-sans">
                  Secure bank transfer & card payment
                </span>
              </div>
            </div>

            {/* Accordion - Details */}
            <div className="border-t border-border mt-2">
              <button
                onClick={() => setDetailsOpen(!detailsOpen)}
                className="flex items-center justify-between w-full py-4 text-xs tracking-[0.15em] uppercase text-foreground font-sans min-h-[44px]"
              >
                Product Details
                {detailsOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              <AnimatePresence>
                {detailsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 text-sm text-muted-foreground font-sans leading-relaxed">
                      <ul className="flex flex-col gap-1.5 list-disc list-inside">
                        <li>Fabric: {product.fabric}</li>
                        <li>Occasion: {product.occasion}</li>
                        <li>Category: {product.category}</li>
                        <li>Available sizes: {product.sizes.join(", ")}</li>
                        <li>Handcrafted in Lagos, Nigeria</li>
                        <li>Dry clean recommended</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Complete the Look */}
      {related.length > 0 && (
        <section className="px-5 md:px-10 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
              Styled Together
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">
              Complete the Look
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
