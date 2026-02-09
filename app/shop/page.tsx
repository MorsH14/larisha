"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { SlidersHorizontal, X, Search } from "lucide-react"
import {
  products,
  allCategories,
  allOccasions,
  allFabrics,
  allSizes,
  allGenders,
  type Product,
  type Occasion,
  type Fabric,
  type Size,
  type Gender,
} from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { QuickViewModal } from "@/components/quick-view-modal"

function ShopContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || ""
  const initialOccasion = searchParams.get("occasion") || ""
  const initialGender = searchParams.get("gender") || ""

  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedOccasion, setSelectedOccasion] = useState<Occasion | "">(
    (initialOccasion as Occasion) || ""
  )
  const [selectedFabric, setSelectedFabric] = useState<Fabric | "">("")
  const [selectedSize, setSelectedSize] = useState<Size | "">("")
  const [selectedGender, setSelectedGender] = useState<Gender | "">(
    (initialGender as Gender) || ""
  )
  const [searchQuery, setSearchQuery] = useState("")
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (selectedCategory && p.category !== selectedCategory) return false
      if (selectedOccasion && p.occasion !== selectedOccasion) return false
      if (selectedFabric && p.fabric !== selectedFabric) return false
      if (selectedSize && !p.sizes.includes(selectedSize)) return false
      if (selectedGender && p.gender !== selectedGender) return false
      if (searchQuery) {
        const q = searchQuery.toLowerCase()
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q) ||
          p.occasion.toLowerCase().includes(q) ||
          p.gender.toLowerCase().includes(q)
        )
      }
      return true
    })
  }, [selectedCategory, selectedOccasion, selectedFabric, selectedSize, selectedGender, searchQuery])

  const activeFilterCount = [selectedCategory, selectedOccasion, selectedFabric, selectedSize, selectedGender].filter(Boolean).length

  const clearFilters = () => {
    setSelectedCategory("")
    setSelectedOccasion("")
    setSelectedFabric("")
    setSelectedSize("")
    setSelectedGender("")
    setSearchQuery("")
  }

  return (
    <>
      <main className="pt-28 md:pt-32 pb-20 md:pb-16">
        {/* Page Header */}
        <div className="px-5 md:px-10 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-3xl md:text-5xl text-foreground mb-2">
              {selectedGender || selectedOccasion || selectedCategory || "Shop All"}
            </h1>
            <p className="text-sm text-muted-foreground font-sans">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"} - All sewable & made-to-order
            </p>
          </motion.div>
        </div>

        {/* Gender Tabs */}
        <div className="px-5 md:px-10 mb-6">
          <div className="flex gap-1 overflow-x-auto">
            <button
              onClick={() => setSelectedGender("")}
              className={`px-5 py-2.5 text-xs tracking-[0.15em] uppercase font-sans border transition-colors min-h-[44px] whitespace-nowrap ${
                !selectedGender
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-foreground border-border hover:border-foreground"
              }`}
            >
              All
            </button>
            {allGenders.map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGender(selectedGender === g ? "" : g)}
                className={`px-5 py-2.5 text-xs tracking-[0.15em] uppercase font-sans border transition-colors min-h-[44px] whitespace-nowrap ${
                  selectedGender === g
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-foreground border-border hover:border-foreground"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Search + Filter Bar */}
        <div className="px-5 md:px-10 mb-8">
          <div className="flex gap-3 items-center max-w-7xl">
            <div className="flex-1 flex items-center gap-2 px-4 py-2.5 border border-border bg-card">
              <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                placeholder="Search by name, fabric, occasion..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 text-sm font-sans text-foreground bg-transparent placeholder:text-muted-foreground focus:outline-none min-h-[36px]"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} aria-label="Clear search">
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
            </div>
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 px-4 py-2.5 border border-border bg-card text-foreground text-sm font-sans tracking-wide min-h-[44px] hover:bg-secondary transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden md:inline">Filters</span>
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 flex items-center justify-center bg-accent text-accent-foreground text-[10px] font-sans">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Filter Panel */}
        <AnimatePresence>
          {filtersOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-5 md:px-10 pb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-5 border border-border bg-card">
                  {/* Category */}
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-foreground font-sans mb-3">
                      Category
                    </p>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => setSelectedCategory("")}
                        className={`text-left text-sm font-sans transition-colors ${!selectedCategory ? "text-accent font-medium" : "text-muted-foreground hover:text-foreground"}`}
                      >
                        All
                      </button>
                      {allCategories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(selectedCategory === cat ? "" : cat)}
                          className={`text-left text-sm font-sans transition-colors ${selectedCategory === cat ? "text-accent font-medium" : "text-muted-foreground hover:text-foreground"}`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Occasion */}
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-foreground font-sans mb-3">
                      Occasion
                    </p>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => setSelectedOccasion("")}
                        className={`text-left text-sm font-sans transition-colors ${!selectedOccasion ? "text-accent font-medium" : "text-muted-foreground hover:text-foreground"}`}
                      >
                        All
                      </button>
                      {allOccasions.map((occ) => (
                        <button
                          key={occ}
                          onClick={() => setSelectedOccasion(selectedOccasion === occ ? "" : occ)}
                          className={`text-left text-sm font-sans transition-colors ${selectedOccasion === occ ? "text-accent font-medium" : "text-muted-foreground hover:text-foreground"}`}
                        >
                          {occ}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Fabric */}
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-foreground font-sans mb-3">
                      Fabric
                    </p>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => setSelectedFabric("")}
                        className={`text-left text-sm font-sans transition-colors ${!selectedFabric ? "text-accent font-medium" : "text-muted-foreground hover:text-foreground"}`}
                      >
                        All
                      </button>
                      {allFabrics.map((fab) => (
                        <button
                          key={fab}
                          onClick={() => setSelectedFabric(selectedFabric === fab ? "" : fab)}
                          className={`text-left text-sm font-sans transition-colors ${selectedFabric === fab ? "text-accent font-medium" : "text-muted-foreground hover:text-foreground"}`}
                        >
                          {fab}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Size */}
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-foreground font-sans mb-3">
                      Size
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {allSizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(selectedSize === size ? "" : size)}
                          className={`px-3 py-1.5 text-xs font-sans border transition-colors min-h-[36px] ${
                            selectedSize === size
                              ? "bg-foreground text-background border-foreground"
                              : "bg-transparent text-foreground border-border hover:border-foreground"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {activeFilterCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="mt-3 text-xs tracking-[0.15em] uppercase text-muted-foreground font-sans underline underline-offset-2 hover:text-foreground transition-colors"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <div className="px-5 md:px-10">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-foreground mb-2">No pieces found</p>
              <p className="text-sm text-muted-foreground font-sans mb-6">
                Try adjusting your filters or search terms.
              </p>
              <button
                onClick={clearFilters}
                className="text-xs tracking-[0.2em] uppercase text-foreground font-sans underline underline-offset-4 hover:text-accent transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl">
              {filtered.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  onQuickView={setQuickViewProduct}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </>
  )
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-28 md:pt-32 pb-20 px-5 md:px-10">
          <div className="animate-pulse">
            <div className="h-10 w-48 bg-secondary mb-4" />
            <div className="h-5 w-24 bg-secondary mb-8" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="aspect-[3/4] bg-secondary" />
              ))}
            </div>
          </div>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  )
}
