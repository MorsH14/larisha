"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      <Image
        src="/images/hero-new.jpg"
        alt="Larisha New Collection 2026"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-foreground/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm tracking-[0.35em] uppercase text-background/80 mb-4 font-sans"
        >
          The New Collection
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl md:text-7xl lg:text-8xl text-background leading-tight text-balance"
        >
          Modern Afro Elegance
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm md:text-base text-background/80 mt-4 mb-8 max-w-lg font-sans leading-relaxed"
        >
          Where Nigerian heritage meets contemporary luxury. Handcrafted pieces for the modern muse.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-10 py-4 bg-accent text-accent-foreground text-xs tracking-[0.25em] uppercase font-sans hover:bg-accent/90 transition-colors min-h-[44px]"
          >
            Shop Collection
          </Link>
          <Link
            href="/shop?occasion=Aso-Ebi"
            className="inline-flex items-center justify-center px-10 py-4 bg-background/10 backdrop-blur-sm text-background text-xs tracking-[0.25em] uppercase font-sans border border-background/30 hover:bg-background/20 transition-colors min-h-[44px]"
          >
            Aso-Ebi Edit
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
