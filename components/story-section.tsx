"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export function StorySection() {
  return (
    <section id="story" className="px-5 md:px-10 py-16 md:py-24 bg-slate-50">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg"
        >
          <Image
            src="/images/story-nigerian-heritage.svg"
            alt="Larisha Nigerian Fashion Heritage - crafted in Lagos"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-red-600 font-bold mb-4 font-sans">
            Our Heritage
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance leading-snug">
            Celebrating Nigerian Excellence Through Fashion
          </h2>
          <p className="text-sm md:text-base text-foreground/70 font-sans leading-relaxed mb-4">
            Larisha is born from the heart of Lagos with an unwavering commitment to celebrating Nigerian craftsmanship, traditions, and pride. From the vibrant patterns of authentic Ankara to the intricate beauty of hand-beaded Lace gowns, every piece tells a story of heritage and innovation.
          </p>
          <p className="text-sm md:text-base text-foreground/70 font-sans leading-relaxed mb-4">
            We honor the Bubu's timeless elegance, the Agbada's regal presence, and the versatility of modern office wear that seamlessly blends African aesthetics with contemporary sophistication. Every design is meticulously crafted to celebrate who you are - a modern woman (or man) proud of her Nigerian roots.
          </p>
          <p className="text-sm md:text-base text-foreground/70 font-sans leading-relaxed mb-8">
            Our master tailors, weavers, and artisans bring centuries of tradition into each stitch. We collaborate directly with communities across Nigeria, ensuring that luxury means supporting local excellence.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-red-600 font-bold font-sans border-b-2 border-red-600 pb-2 hover:text-red-700 hover:border-red-700 transition-colors"
          >
            Learn More About Our Artisans
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
