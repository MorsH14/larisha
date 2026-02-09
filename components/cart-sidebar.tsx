"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, Minus, Plus, MessageCircle, MapPin } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { formatPrice } from "@/lib/products"

export function CartSidebar() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    totalPrice,
    generateWhatsAppUrl,
  } = useCart()

  const [deliveryLocation, setDeliveryLocation] = useState("")

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-foreground/30 z-50"
            onClick={closeCart}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-background z-50 flex flex-col"
            aria-label="Shopping cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 h-16 border-b border-border">
              <h2 className="text-sm tracking-[0.2em] uppercase font-sans text-foreground">
                Your Bag ({items.length})
              </h2>
              <button
                onClick={closeCart}
                className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close cart"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-muted-foreground font-sans text-sm">
                    Your bag is empty
                  </p>
                  <button
                    onClick={closeCart}
                    className="mt-4 text-xs tracking-[0.2em] uppercase underline underline-offset-4 text-foreground font-sans"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-5">
                  {items.map((item) => (
                    <motion.div
                      key={`${item.product.id}-${item.size}`}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex gap-4"
                    >
                      <div className="relative w-20 h-24 flex-shrink-0 bg-secondary overflow-hidden">
                        <Image
                          src={item.product.image || "/placeholder.svg"}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-sm font-sans text-foreground leading-snug">
                            {item.product.name}
                          </h3>
                          <p className="text-xs text-muted-foreground font-sans mt-0.5">
                            Size: {item.size}
                          </p>
                          <p className="text-sm text-muted-foreground font-sans mt-0.5">
                            {formatPrice(item.product.price)}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.size,
                                  item.quantity - 1
                                )
                              }
                              className="w-7 h-7 flex items-center justify-center border border-border text-foreground min-h-[44px] min-w-[44px]"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-sans text-foreground w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.size,
                                  item.quantity + 1
                                )
                              }
                              className="w-7 h-7 flex items-center justify-center border border-border text-foreground min-h-[44px] min-w-[44px]"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.product.id, item.size)}
                            className="text-xs text-muted-foreground underline underline-offset-2 font-sans min-h-[44px] flex items-center"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border px-5 py-5 flex flex-col gap-3">
                {/* Delivery Location Input */}
                <div className="flex items-center gap-2 px-3 py-2.5 border border-border bg-secondary">
                  <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Delivery location (e.g. Lekki, Lagos)"
                    value={deliveryLocation}
                    onChange={(e) => setDeliveryLocation(e.target.value)}
                    className="flex-1 text-sm font-sans text-foreground bg-transparent placeholder:text-muted-foreground focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm tracking-[0.15em] uppercase font-sans text-foreground">
                    Subtotal
                  </span>
                  <span className="text-sm font-sans text-foreground font-medium">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                <button className="w-full py-3.5 bg-foreground text-background text-xs tracking-[0.2em] uppercase font-sans hover:bg-foreground/90 transition-colors min-h-[44px]">
                  Checkout
                </button>
                <a
                  href={generateWhatsAppUrl(deliveryLocation || undefined)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#25D366] text-[#ffffff] text-xs tracking-[0.2em] uppercase font-sans flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  Order via WhatsApp
                </a>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
