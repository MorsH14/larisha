"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const queens = [
  { image: "/images/queen-1.jpg", name: "@adaeze_style", caption: "Lagos nights in Larisha" },
  { image: "/images/queen-2.jpg", name: "@chidinma_glow", caption: "Date night ready" },
  { image: "/images/queen-3.jpg", name: "@nkechi_art", caption: "Gallery opening look" },
  { image: "/images/queen-4.jpg", name: "@amara_boss", caption: "CEO energy" },
  { image: "/images/queen-5.jpg", name: "@blessing_chic", caption: "Beach wedding guest" },
]

export function QueensSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.clientWidth * 0.6
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 px-5"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
          Community
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground text-balance">
          Larisha Queens
        </h2>
        <p className="text-sm text-muted-foreground font-sans mt-3 max-w-md mx-auto leading-relaxed">
          Real women, real style. Tag @larisha to be featured.
        </p>
      </motion.div>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border text-foreground hover:bg-background transition-colors min-h-[44px] min-w-[44px]"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border text-foreground hover:bg-background transition-colors min-h-[44px] min-w-[44px]"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-5 md:px-10 no-scrollbar"
          style={{ scrollbarWidth: "none" }}
        >
          {queens.map((queen, i) => (
            <motion.div
              key={queen.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-shrink-0 w-[260px] md:w-[300px]"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                <Image
                  src={queen.image || "/placeholder.svg"}
                  alt={`${queen.name} wearing Larisha`}
                  fill
                  className="object-cover"
                  sizes="300px"
                />
                <div className="absolute inset-0 bg-foreground/0 hover:bg-foreground/10 transition-colors" />
              </div>
              <div className="pt-3">
                <p className="text-sm font-sans text-foreground font-medium">{queen.name}</p>
                <p className="text-xs text-muted-foreground font-sans mt-0.5">{queen.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
