"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const collections = [
  {
    title: "Ankara Elegance",
    subtitle: "Vibrant prints, stunning tailoring",
    image: "/images/image.png",
    href: "/shop?fabric=Ankara",
  },
  {
    title: "Lace Royalty",
    subtitle: "Exquisite gowns for celebration",
    image: "/images/image.png",
    href: "/shop?fabric=Lace",
  },
  {
    title: "Bubu Dreams",
    subtitle: "Comfort meets chic sophistication",
    image: "/images/image.png",
    href: "/shop?occasion=Casual",
  },
  {
    title: "Office Ready",
    subtitle: "Professional Nigerian sophistication",
    image: "/images/image.png",
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

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-7xl mx-auto">
        {collections.map((col, i) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <Link href={col.href} className="group block relative overflow-hidden">
              <div className="relative aspect-[4/5] md:aspect-[4/6]">
                <Image
                  src={col.image || "/placeholder.svg"}
                  alt={col.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 px-4 text-center">
                  <h3 className="font-serif text-lg md:text-2xl text-white mb-1 text-balance">
                    {col.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/85 font-sans mb-3">
                    {col.subtitle}
                  </p>
                  <span className="text-xs tracking-[0.2em] uppercase text-white font-sans border-b border-white/60 pb-1 group-hover:border-white transition-colors">
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
