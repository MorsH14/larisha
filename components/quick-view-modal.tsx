"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, ShoppingBag } from "lucide-react"
import type { Product, Size } from "@/lib/products"
import { formatPrice } from "@/lib/products"
import { useCart } from "@/lib/cart-context"

interface QuickViewModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null)
  const [showImage, setShowImage] = useState<"main" | "hover">("main")
  const { addItem } = useCart()

  if (!product) return null

  const handleAdd = () => {
    if (!selectedSize) return
    addItem(product, selectedSize)
    onClose()
    setSelectedSize(null)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/40 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[90vw] md:max-w-3xl md:max-h-[85vh] bg-background z-50 overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center bg-background/80 backdrop-blur-sm"
              aria-label="Close quick view"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Images */}
              <div className="relative md:w-1/2 aspect-[3/4] bg-secondary flex-shrink-0">
                <Image
                  src={showImage === "main" ? product.image : product.imageHover}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] tracking-[0.2em] uppercase px-3 py-1 font-sans">
                    New
                  </span>
                )}
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <button
                    onClick={() => setShowImage("main")}
                    className={`w-12 h-12 border-2 overflow-hidden ${showImage === "main" ? "border-accent" : "border-transparent"}`}
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt="View 1"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </button>
                  <button
                    onClick={() => setShowImage("hover")}
                    className={`w-12 h-12 border-2 overflow-hidden ${showImage === "hover" ? "border-accent" : "border-transparent"}`}
                  >
                    <Image
                      src={product.imageHover || "/placeholder.svg"}
                      alt="View 2"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </button>
                </div>
              </div>

              {/* Details */}
              <div className="flex-1 p-6 md:p-8 flex flex-col">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans mb-2">
                  {product.category} / {product.occasion}
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                  {product.name}
                </h2>
                <p className="text-lg text-foreground font-sans mb-4">
                  {formatPrice(product.price)}
                </p>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-6">
                  {product.description}
                </p>
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-sans mb-2">
                  Fabric: {product.fabric}
                </p>

                {/* Size Selection */}
                <p className="text-xs tracking-[0.15em] uppercase text-foreground font-sans mb-3 mt-4">
                  Select Size
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-xs tracking-[0.1em] uppercase font-sans border min-h-[44px] min-w-[44px] transition-colors ${
                        selectedSize === size
                          ? "bg-foreground text-background border-foreground"
                          : "bg-transparent border-border text-foreground hover:border-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                <div className="flex flex-col gap-3 mt-auto">
                  <button
                    onClick={handleAdd}
                    disabled={!selectedSize}
                    className="w-full py-3.5 bg-foreground text-background text-xs tracking-[0.2em] uppercase font-sans flex items-center justify-center gap-2 hover:bg-foreground/90 transition-colors min-h-[44px] disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    {selectedSize ? "Add to Bag" : "Select a Size"}
                  </button>
                  <Link
                    href={`/product/${product.id}`}
                    onClick={onClose}
                    className="w-full py-3 text-center text-xs tracking-[0.2em] uppercase font-sans text-foreground border border-border hover:border-foreground transition-colors min-h-[44px] flex items-center justify-center"
                  >
                    View Full Details
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
