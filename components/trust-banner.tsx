"use client"

import { Truck, ShieldCheck, CreditCard } from "lucide-react"

export function TrustBanner() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="flex items-center justify-center gap-6 md:gap-10 px-4 py-2 text-[10px] md:text-xs tracking-[0.15em] uppercase font-sans overflow-x-auto whitespace-nowrap">
        <span className="flex items-center gap-1.5">
          <Truck className="w-3 h-3 flex-shrink-0" />
          Fast Nationwide Shipping
        </span>
        <span className="hidden md:flex items-center gap-1.5">
          <ShieldCheck className="w-3 h-3 flex-shrink-0" />
          Secure Checkout
        </span>
        <span className="flex items-center gap-1.5">
          <CreditCard className="w-3 h-3 flex-shrink-0" />
          Card & Bank Transfer
        </span>
      </div>
    </div>
  )
}
