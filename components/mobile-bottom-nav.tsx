"use client"

import Link from "next/link"
import { Home, Grid3X3, Search, ShoppingBag, MessageCircle } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { motion } from "framer-motion"

export function MobileBottomNav() {
  const { openCart, totalItems } = useCart()

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-t border-border"
      role="navigation"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-around h-16">
        <Link
          href="/"
          className="flex flex-col items-center justify-center gap-1 min-h-[44px] min-w-[44px] text-foreground"
          aria-label="Home"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] tracking-wider uppercase font-sans">Home</span>
        </Link>
        <Link
          href="/shop"
          className="flex flex-col items-center justify-center gap-1 min-h-[44px] min-w-[44px] text-foreground"
          aria-label="Shop"
        >
          <Grid3X3 className="w-5 h-5" />
          <span className="text-[10px] tracking-wider uppercase font-sans">Shop</span>
        </Link>
        <Link
          href="/shop"
          className="flex flex-col items-center justify-center gap-1 min-h-[44px] min-w-[44px] text-foreground"
          aria-label="Search"
        >
          <Search className="w-5 h-5" />
          <span className="text-[10px] tracking-wider uppercase font-sans">Search</span>
        </Link>
        <a
          href="https://wa.me/2349038662876"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 min-h-[44px] min-w-[44px] text-[#25D366]"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] tracking-wider uppercase font-sans">Chat</span>
        </a>
        <button
          onClick={openCart}
          className="relative flex flex-col items-center justify-center gap-1 min-h-[44px] min-w-[44px] text-foreground"
          aria-label="Cart"
        >
          <ShoppingBag className="w-5 h-5" />
          {totalItems > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-0 right-0 w-4 h-4 rounded-full bg-accent text-accent-foreground text-[10px] flex items-center justify-center font-sans"
            >
              {totalItems}
            </motion.span>
          )}
          <span className="text-[10px] tracking-wider uppercase font-sans">Bag</span>
        </button>
      </div>
    </nav>
  )
}
