"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { useState } from "react"

export function MuseSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="px-5 md:px-10 py-16 md:py-24 bg-primary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/70 mb-3 font-sans">
            Behind the Collection
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-primary-foreground text-balance">
            The Larisha Muse
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video bg-foreground/10 overflow-hidden max-w-4xl mx-auto"
        >
          {/* Video placeholder - click to reveal play concept */}
          {!isPlaying ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-primary-foreground/60 text-primary-foreground/80 hover:border-primary-foreground hover:text-primary-foreground transition-colors mb-4"
                aria-label="Play video"
              >
                <Play className="w-8 h-8 ml-1" />
              </button>
              <p className="text-sm text-primary-foreground/70 font-sans tracking-wide">
                Watch the Larisha Story
              </p>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8">
                <p className="font-serif text-2xl md:text-3xl text-primary-foreground mb-4 text-balance leading-relaxed">
                  {"\"Fashion is not just what you wear. It is who you are. It is your heritage, your confidence, your story.\""}
                </p>
                <p className="text-sm text-primary-foreground/70 font-sans tracking-[0.15em] uppercase">
                  -- The Larisha Muse, 2026
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
