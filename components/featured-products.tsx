"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { products, type Product } from "@/lib/products"
import { ProductCard } from "./product-card"
import { QuickViewModal } from "./quick-view-modal"

export function FeaturedProducts() {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)
  const featured = products.filter((p) => p.isNew).slice(0, 8)

  return (
    <>
      <section id="shop" className="px-5 md:px-10 py-16 md:py-24 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-red-600 font-bold mb-3 font-sans">
            This Season's Treasures
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground text-balance">
            Ankara, Lace & Everything Nice
          </h2>
          <p className="text-sm md:text-base text-foreground/60 font-sans mt-3 max-w-2xl mx-auto">
            Carefully curated Nigerian attire featuring authentic Ankara prints, exquisite Lace gowns, elegant Bubu styles, and sophisticated office wear
          </p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {featured.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onQuickView={setQuickViewProduct}
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-10 py-4 bg-red-600 text-white text-xs tracking-[0.25em] uppercase font-sans hover:bg-red-700 transition-colors min-h-[44px]"
          >
            Explore Full Collection
          </Link>
        </motion.div>
      </section>

      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </>
  )
}
