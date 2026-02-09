"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export function StorySection() {
  return (
    <section id="story" className="px-5 md:px-10 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <Image
            src="/images/story.jpg"
            alt="Inside the Larisha atelier"
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
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans">
            Our Story
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance leading-snug">
            Rooted in Lagos, <br />Designed for the World
          </h2>
          <p className="text-sm md:text-base text-muted-foreground font-sans leading-relaxed mb-4">
            Larisha was born in the heart of Lagos with a singular vision: to celebrate the
            richness of Nigerian craftsmanship through modern design. Every piece is a
            conversation between tradition and innovation -- from hand-woven aso-oke to
            precision-tailored contemporary silhouettes.
          </p>
          <p className="text-sm md:text-base text-muted-foreground font-sans leading-relaxed mb-8">
            We work with local artisans and weavers across Nigeria, ensuring each garment
            carries the soul of its origin. True luxury, we believe, lies not in logos but
            in the quiet confidence of impeccable craft and cultural pride.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-foreground font-sans border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            Visit Our Showroom
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
