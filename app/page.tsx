import { HeroSection } from "@/components/hero-section"
import { CollectionsSection } from "@/components/collections-section"
import { FeaturedProducts } from "@/components/featured-products"
import { MuseSection } from "@/components/muse-section"
import { StorySection } from "@/components/story-section"
import { QueensSection } from "@/components/queens-section"
import { NewsletterSection } from "@/components/newsletter-section"

export default function Page() {
  return (
    <main>
      <HeroSection />
      <CollectionsSection />
      <FeaturedProducts />
      <MuseSection />
      <StorySection />
      <QueensSection />
      <NewsletterSection />
    </main>
  )
}
