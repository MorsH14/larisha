"use client"

import type { ReactNode } from "react"
import { CartProvider } from "@/lib/cart-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartSidebar } from "@/components/cart-sidebar"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { TrustBanner } from "@/components/trust-banner"
import { BackToTop } from "@/components/back-to-top"

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <TrustBanner />
      <SiteHeader />
      {children}
      <SiteFooter />
      <CartSidebar />
      <BackToTop />
      <MobileBottomNav />
    </CartProvider>
  )
}
