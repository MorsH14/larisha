"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="px-5 md:px-10 py-16 md:py-24 bg-gradient-to-r from-slate-900 to-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto text-center"
      >
        <h2 className="font-serif text-2xl md:text-3xl text-white mb-3 text-balance">
          Stay Updated on Nigerian Fashion
        </h2>
        <p className="text-sm text-white/70 font-sans leading-relaxed mb-8">
          Be the first to know about new Ankara collections, exclusive Lace gowns, Aso-Ebi drops, and special offers. Plus styling tips straight to your inbox.
        </p>
        {submitted ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-white font-sans tracking-wide"
          >
            Thank you for joining Larisha. Check your email!
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-white text-foreground text-sm font-sans border border-white/20 border-r-0 placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-red-500 min-h-[44px]"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors min-h-[44px] min-w-[44px]"
              aria-label="Subscribe"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </motion.div>
    </section>
  )
}
