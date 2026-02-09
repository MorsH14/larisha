"use client"

import { motion } from "framer-motion"
import { products } from "@/lib/products"
import { ProductCard } from "./product-card"

export function ProductGrid() {
  return (
    <section id="shop" className="px-5 md:px-10 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
          Curated Selection
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground text-balance">
          Featured Arrivals
        </h2>
      </motion.div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  )
}
