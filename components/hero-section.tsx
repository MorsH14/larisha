"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      <Image
        src="/images/image.png"
        alt="Larisha Nigerian Attire Collection - Ankara, Lace, Bubu, Office Wear"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm tracking-[0.35em] uppercase text-white/90 mb-4 font-sans"
        >
          Authentic Nigerian Heritage
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl md:text-7xl lg:text-8xl text-white leading-tight text-balance"
        >
          Ankara to Elegance
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm md:text-base text-white/85 mt-4 mb-8 max-w-lg font-sans leading-relaxed"
        >
          Premium Nigerian attire crafted with pride. From vibrant Ankara prints to exquisite Lace gowns, Bubu elegance, and sophisticated Office wear. Each piece is a celebration of African excellence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-10 py-4 bg-red-600 text-white text-xs tracking-[0.25em] uppercase font-sans hover:bg-red-700 transition-colors min-h-[44px]"
          >
            Shop Ankara & Lace
          </Link>
          <Link
            href="/shop?occasion=Aso-Ebi"
            className="inline-flex items-center justify-center px-10 py-4 bg-white/20 backdrop-blur-sm text-white text-xs tracking-[0.25em] uppercase font-sans border border-white/40 hover:bg-white/30 transition-colors min-h-[44px]"
          >
            Aso-Ebi Collection
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
