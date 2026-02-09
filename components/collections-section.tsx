"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const collections = [
  {
    title: "Aso-Ebi",
    subtitle: "Statement pieces for celebrations",
    image: "/images/collection-aso-ebi.jpg",
    href: "/shop?occasion=Aso-Ebi",
  },
  {
    title: "Ready-to-Wear",
    subtitle: "Everyday luxury, reimagined",
    image: "/images/collection-ready-to-wear.jpg",
    href: "/shop?occasion=Ready-to-Wear",
  },
]

export function CollectionsSection() {
  return (
    <section className="px-5 md:px-10 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
          Collections
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground text-balance">
          Shop by Occasion
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
        {collections.map((col, i) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <Link href={col.href} className="group block relative overflow-hidden">
              <div className="relative aspect-[4/5] md:aspect-[3/4]">
                <Image
                  src={col.image || "/placeholder.svg"}
                  alt={col.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-5 text-center">
                  <h3 className="font-serif text-2xl md:text-4xl text-background mb-2">
                    {col.title}
                  </h3>
                  <p className="text-sm text-background/80 font-sans mb-4">
                    {col.subtitle}
                  </p>
                  <span className="text-xs tracking-[0.2em] uppercase text-background font-sans border-b border-background/50 pb-1 group-hover:border-background transition-colors">
                    Explore
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
