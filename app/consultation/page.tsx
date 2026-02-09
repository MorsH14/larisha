"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Send, CheckCircle2, Sparkles, Scissors, Ruler, Palette } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.15 * i },
  }),
}

const stylePreferences = [
  "Aso-Ebi / Occasion Wear",
  "Ready-to-Wear",
  "Bridal / Wedding",
  "Traditional / Cultural",
  "Corporate / Formal",
  "Casual / Everyday",
  "Children's Fashion",
  "Men's Traditional",
]

export default function ConsultationPage() {
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [eventDate, setEventDate] = useState("")
  const [stylePreference, setStylePreference] = useState("")
  const [additionalNotes, setAdditionalNotes] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSending(true)

    // Simulate sending (in production this would be an API route sending to olamidej023@gmail.com)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSending(false)
    setSubmitted(true)
  }

  const resetForm = () => {
    setFullName("")
    setPhone("")
    setEventDate("")
    setStylePreference("")
    setAdditionalNotes("")
    setSubmitted(false)
  }

  return (
    <>
      <main className="pt-28 md:pt-32 pb-20 md:pb-16">
        <div className="px-5 md:px-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 md:mb-16"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
                Bespoke Service
              </p>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground mb-4 text-balance">
                Book a Private Consultation
              </h1>
              <p className="text-sm md:text-base text-muted-foreground font-sans leading-relaxed max-w-2xl">
                Every body is unique. Our bespoke consultation connects you with a personal
                stylist who will help you design a custom piece - sewn to your exact
                measurements and personal style.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-10 md:gap-16">
              {/* Left - Form (3 cols) */}
              <div className="md:col-span-3">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="border border-border bg-card p-8 md:p-12 text-center"
                  >
                    <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-primary text-primary-foreground">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h2 className="font-serif text-2xl text-foreground mb-3">
                      Request Received
                    </h2>
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-6 max-w-sm mx-auto">
                      Your request has been sent to{" "}
                      <span className="text-foreground font-medium">olamidej023@gmail.com</span>.
                      A stylist will contact you shortly to discuss your vision.
                    </p>
                    <button
                      onClick={resetForm}
                      className="text-xs tracking-[0.2em] uppercase text-foreground font-sans underline underline-offset-4 hover:text-accent transition-colors"
                    >
                      Submit another request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {/* Full Name */}
                    <motion.div
                      variants={fadeInUp}
                      initial="initial"
                      animate="animate"
                      custom={0}
                    >
                      <label
                        htmlFor="fullName"
                        className="block text-xs tracking-[0.15em] uppercase text-foreground font-sans mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3.5 border border-border bg-card text-foreground text-sm font-sans placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </motion.div>

                    {/* Phone Number */}
                    <motion.div
                      variants={fadeInUp}
                      initial="initial"
                      animate="animate"
                      custom={1}
                    >
                      <label
                        htmlFor="phone"
                        className="block text-xs tracking-[0.15em] uppercase text-foreground font-sans mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+234 800 000 0000"
                        className="w-full px-4 py-3.5 border border-border bg-card text-foreground text-sm font-sans placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </motion.div>

                    {/* Event Date */}
                    <motion.div
                      variants={fadeInUp}
                      initial="initial"
                      animate="animate"
                      custom={2}
                    >
                      <label
                        htmlFor="eventDate"
                        className="block text-xs tracking-[0.15em] uppercase text-foreground font-sans mb-2"
                      >
                        Event Date
                      </label>
                      <input
                        id="eventDate"
                        type="date"
                        required
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full px-4 py-3.5 border border-border bg-card text-foreground text-sm font-sans placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </motion.div>

                    {/* Style Preference */}
                    <motion.div
                      variants={fadeInUp}
                      initial="initial"
                      animate="animate"
                      custom={3}
                    >
                      <label
                        htmlFor="stylePreference"
                        className="block text-xs tracking-[0.15em] uppercase text-foreground font-sans mb-2"
                      >
                        Style Preference
                      </label>
                      <select
                        id="stylePreference"
                        required
                        value={stylePreference}
                        onChange={(e) => setStylePreference(e.target.value)}
                        className="w-full px-4 py-3.5 border border-border bg-card text-foreground text-sm font-sans focus:outline-none focus:border-primary transition-colors appearance-none"
                      >
                        <option value="" disabled>
                          Select your style preference
                        </option>
                        {stylePreferences.map((pref) => (
                          <option key={pref} value={pref}>
                            {pref}
                          </option>
                        ))}
                      </select>
                    </motion.div>

                    {/* Additional Notes */}
                    <motion.div
                      variants={fadeInUp}
                      initial="initial"
                      animate="animate"
                      custom={4}
                    >
                      <label
                        htmlFor="notes"
                        className="block text-xs tracking-[0.15em] uppercase text-foreground font-sans mb-2"
                      >
                        Additional Notes{" "}
                        <span className="text-muted-foreground normal-case tracking-normal">(optional)</span>
                      </label>
                      <textarea
                        id="notes"
                        rows={4}
                        value={additionalNotes}
                        onChange={(e) => setAdditionalNotes(e.target.value)}
                        placeholder="Describe your dream outfit, share inspiration images, or mention any specific requirements..."
                        className="w-full px-4 py-3.5 border border-border bg-card text-foreground text-sm font-sans placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none leading-relaxed"
                      />
                    </motion.div>

                    {/* Submit */}
                    <motion.div
                      variants={fadeInUp}
                      initial="initial"
                      animate="animate"
                      custom={5}
                    >
                      <button
                        type="submit"
                        disabled={sending}
                        className="w-full py-4 bg-foreground text-background text-xs tracking-[0.2em] uppercase font-sans flex items-center justify-center gap-2 hover:bg-foreground/90 transition-colors min-h-[44px] disabled:opacity-60"
                      >
                        <Send className="w-4 h-4" />
                        {sending ? "Sending..." : "Send via Email"}
                      </button>
                    </motion.div>
                  </form>
                )}
              </div>

              {/* Right - Info (2 cols) */}
              <div className="md:col-span-2 flex flex-col gap-6">
                {/* Why Bespoke */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="border border-border p-6 bg-card"
                >
                  <h3 className="text-xs tracking-[0.15em] uppercase text-foreground font-sans mb-5">
                    The Bespoke Experience
                  </h3>
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-3">
                      <Scissors className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-sans text-foreground font-medium">Custom Fit</p>
                        <p className="text-xs text-muted-foreground font-sans leading-relaxed mt-0.5">
                          Every piece is sewn to your exact measurements for a perfect fit.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Palette className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-sans text-foreground font-medium">Fabric Selection</p>
                        <p className="text-xs text-muted-foreground font-sans leading-relaxed mt-0.5">
                          Choose from premium lace, ankara, aso-oke, silk, chiffon, and more.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Ruler className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-sans text-foreground font-medium">Personal Stylist</p>
                        <p className="text-xs text-muted-foreground font-sans leading-relaxed mt-0.5">
                          A dedicated stylist guides you from design concept to final fitting.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-sans text-foreground font-medium">Handcrafted</p>
                        <p className="text-xs text-muted-foreground font-sans leading-relaxed mt-0.5">
                          Sewn by our expert Lagos tailors with meticulous attention to detail.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="border border-border p-6 bg-primary text-primary-foreground"
                >
                  <h3 className="font-serif text-xl mb-2">Prefer to chat?</h3>
                  <p className="text-sm font-sans text-primary-foreground/80 leading-relaxed mb-4">
                    If you would rather discuss your ideas in real-time, our stylists are
                    available on WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/2349038662876?text=Hi%20Larisha,%20I'd%20like%20to%20book%20a%20private%20fashion%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-sans text-primary-foreground border-b border-primary-foreground/50 pb-1 hover:border-primary-foreground transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat with a Stylist
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating WhatsApp Button - specific to this page */}
      <a
        href="https://wa.me/2349038662876?text=Hi%20Larisha,%20I'd%20like%20to%20book%20a%20private%20fashion%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 md:bottom-8 left-5 z-40 flex items-center gap-2 px-5 py-3 bg-[#25D366] text-[#ffffff] text-xs tracking-[0.15em] uppercase font-sans shadow-lg hover:bg-[#20bd5a] transition-colors min-h-[44px]"
        aria-label="Chat with a stylist on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden md:inline">Chat with a Stylist Now</span>
      </a>
    </>
  )
}
