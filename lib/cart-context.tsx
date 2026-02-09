"use client"

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react"
import type { Product, Size } from "./products"
import { formatPrice } from "./products"

export interface CartItem {
  product: Product
  quantity: number
  size: Size
}

interface CartContextType {
  items: CartItem[]
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (product: Product, size: Size) => void
  removeItem: (productId: string, size: Size) => void
  updateQuantity: (productId: string, size: Size, quantity: number) => void
  totalItems: number
  totalPrice: number
  generateWhatsAppUrl: (location?: string) => string
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const WHATSAPP_NUMBER = "2349038662876"

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addItem = useCallback((product: Product, size: Size) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.size === size
      )
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { product, quantity: 1, size }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((productId: string, size: Size) => {
    setItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.size === size)
      )
    )
  }, [])

  const updateQuantity = useCallback(
    (productId: string, size: Size, quantity: number) => {
      if (quantity <= 0) {
        setItems((prev) =>
          prev.filter(
            (item) => !(item.product.id === productId && item.size === size)
          )
        )
        return
      }
      setItems((prev) =>
        prev.map((item) =>
          item.product.id === productId && item.size === size
            ? { ...item, quantity }
            : item
        )
      )
    },
    []
  )

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  const generateWhatsAppUrl = useCallback(
    (location?: string) => {
      if (items.length === 0) return `https://wa.me/${WHATSAPP_NUMBER}`

      const itemLines = items
        .map(
          (item, i) =>
            `${i + 1}. ${item.product.name} - Size ${item.size} (x${item.quantity}) - ${formatPrice(item.product.price * item.quantity)}`
        )
        .join("\n")

      const text = `Hello Larisha, I'd like to order:\n\n${itemLines}\n\nTotal: ${formatPrice(totalPrice)}${location ? `\nDelivery to: ${location}` : ""}\n\nPlease confirm availability. Thank you!`

      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    },
    [items, totalPrice]
  )

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateQuantity,
        totalItems,
        totalPrice,
        generateWhatsAppUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
