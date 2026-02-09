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
    <section className="px-5 md:px-10 py-16 md:py-24 bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto text-center"
      >
        <h2 className="font-serif text-2xl md:text-3xl text-secondary-foreground mb-3 text-balance">
          Stay in the Know
        </h2>
        <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-8">
          Subscribe for early access to new collections, exclusive offers, and the latest
          from Larisha.
        </p>
        {submitted ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-secondary-foreground font-sans tracking-wide"
          >
            Thank you for subscribing.
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-background text-foreground text-sm font-sans border border-border border-r-0 placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring min-h-[44px]"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-foreground text-background flex items-center justify-center hover:bg-foreground/90 transition-colors min-h-[44px] min-w-[44px]"
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
