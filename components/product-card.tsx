"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Eye, ShoppingBag } from "lucide-react"
import type { Product } from "@/lib/products"
import { formatPrice } from "@/lib/products"

interface ProductCardProps {
  product: Product
  index: number
  onQuickView?: (product: Product) => void
}

export function ProductCard({ product, index, onQuickView }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className={`object-cover transition-opacity duration-700 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <Image
            src={product.imageHover || "/placeholder.svg"}
            alt={`${product.name} alternate view`}
            fill
            className={`object-cover transition-opacity duration-700 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] tracking-[0.2em] uppercase px-3 py-1 font-sans">
              New
            </span>
          )}
        </div>
      </Link>

      {/* Quick View button - desktop */}
      {onQuickView && (
        <motion.button
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => {
            e.preventDefault()
            onQuickView(product)
          }}
          className="absolute bottom-[70px] left-3 right-3 flex items-center justify-center gap-2 bg-background/90 backdrop-blur-sm text-foreground py-3 text-xs tracking-[0.15em] uppercase font-sans border border-border hover:bg-background transition-colors min-h-[44px] hidden md:flex"
          aria-label={`Quick view ${product.name}`}
        >
          <Eye className="w-4 h-4" />
          Quick View
        </motion.button>
      )}

      {/* Mobile quick view */}
      {onQuickView && (
        <button
          onClick={(e) => {
            e.preventDefault()
            onQuickView(product)
          }}
          className="absolute bottom-[70px] right-3 w-10 h-10 flex items-center justify-center bg-background/90 backdrop-blur-sm text-foreground border border-border md:hidden min-h-[44px] min-w-[44px]"
          aria-label={`Quick view ${product.name}`}
        >
          <Eye className="w-4 h-4" />
        </button>
      )}

      <div className="pt-3 pb-1">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-sm font-sans text-foreground tracking-wide hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-muted-foreground font-sans mt-0.5">{product.occasion}</p>
        <p className="text-sm font-sans text-foreground mt-1">{formatPrice(product.price)}</p>
      </div>
    </motion.div>
  )
}
