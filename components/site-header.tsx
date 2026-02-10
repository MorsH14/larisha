"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingBag, Search } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { openCart, totalItems } = useCart()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "top-0 border-b border-border bg-background/80 backdrop-blur-md"
          : "top-[32px] md:top-[28px] bg-transparent"
          }`}
      >
        <div className="flex items-center justify-between px-5 md:px-10 h-16 md:h-20">
          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 -ml-2 md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-foreground" />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/shop"
              className="text-xs tracking-[0.2em] uppercase text-foreground hover:text-red-600 transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/shop?fabric=Ankara"
              className="text-xs tracking-[0.2em] uppercase text-foreground hover:text-red-600 transition-colors"
            >
              Ankara
            </Link>
            <Link
              href="/shop?fabric=Lace"
              className="text-xs tracking-[0.2em] uppercase text-foreground hover:text-red-600 transition-colors"
            >
              Lace
            </Link>
            <Link
              href="/shop?occasion=Aso-Ebi"
              className="text-xs tracking-[0.2em] uppercase text-foreground hover:text-red-600 transition-colors"
            >
              Aso-Ebi
            </Link>
            <Link
              href="/#story"
              className="text-xs tracking-[0.2em] uppercase text-foreground hover:text-red-600 transition-colors"
            >
              Story
            </Link>
            <Link
              href="/contact"
              className="text-xs tracking-[0.2em] uppercase text-foreground hover:text-red-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-3xl tracking-[0.1em] text-foreground"
          >
            Larisha
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/shop"
              className="hidden md:flex p-2 min-h-[44px] min-w-[44px] items-center justify-center"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-foreground" />
            </Link>
            <button
              onClick={openCart}
              className="relative p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5 text-foreground" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1 right-0 w-4 h-4 rounded-full bg-accent text-accent-foreground text-[10px] flex items-center justify-center font-sans"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/20 z-50"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-background z-50 flex flex-col"
            >
              <div className="flex items-center justify-between px-5 h-16">
                <span className="font-serif text-xl tracking-[0.1em] text-foreground">
                  Larisha
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>
              <nav className="flex flex-col px-5 pt-8 gap-6">
                {[
                  { label: "Home", href: "/" },
                  { label: "Shop All", href: "/shop" },
                  { label: "Aso-Ebi Collection", href: "/shop?occasion=Aso-Ebi" },
                  { label: "Ready-to-Wear", href: "/shop?occasion=Ready-to-Wear" },
                  { label: "Dresses", href: "/shop?category=Dresses" },
                  { label: "Traditional", href: "/shop?category=Traditional" },
                  { label: "Our Story", href: "/#story" },
                  { label: "Bespoke Consultation", href: "/consultation" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg tracking-[0.15em] uppercase text-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
