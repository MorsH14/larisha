"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { useState } from "react"

export function MuseSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="px-5 md:px-10 py-16 md:py-24 bg-gradient-to-br from-red-700 via-red-600 to-red-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/80 mb-3 font-sans">
            The Larisha Vision
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white text-balance">
            Nigerian Pride, Global Grace
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video bg-white/10 overflow-hidden max-w-4xl mx-auto rounded-lg"
        >
          {/* Video placeholder - click to reveal play concept */}
          {!isPlaying ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white/20 transition-colors mb-4"
                aria-label="Play video"
              >
                <Play className="w-8 h-8 ml-1" />
              </button>
              <p className="text-sm text-white/90 font-sans tracking-wide">
                Watch the Larisha Story
              </p>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8">
                <p className="font-serif text-2xl md:text-3xl text-white mb-4 text-balance leading-relaxed">
                  {"\"Every thread carries our pride. Every stitch celebrates tradition. We are Nigerian fashion, reimagined.\""}
                </p>
                <p className="text-sm text-white/75 font-sans tracking-[0.15em] uppercase">
                  -- Larisha Collective, 2026
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
