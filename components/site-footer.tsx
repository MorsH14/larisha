"use client"

import Link from "next/link"
import { Instagram, Twitter, Facebook } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="px-5 md:px-10 py-12 md:py-16 border-t border-border mb-16 md:mb-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-serif text-xl tracking-[0.1em] text-foreground">
              Larisha
            </Link>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed mt-3">
              Premium Nigerian attire. Ankara, Lace, Bubu, and contemporary office wear celebrating African excellence. Proudly Lagos-based, globally inspired.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-foreground font-sans mb-4">
              Shop
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { label: "New Arrivals", href: "/shop" },
                { label: "Aso-Ebi", href: "/shop?occasion=Aso-Ebi" },
                { label: "Ready-to-Wear", href: "/shop?occasion=Ready-to-Wear" },
                { label: "Dresses", href: "/shop?category=Dresses" },
                { label: "Traditional", href: "/shop?category=Traditional" },
                { label: "Accessories", href: "/shop?category=Accessories" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground font-sans hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-foreground font-sans mb-4">
              Company
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Our Story", href: "/#story" },
                { label: "Bespoke Consultation", href: "/consultation" },
                { label: "Contact Us", href: "/contact" },
                { label: "Sustainability", href: "#" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground font-sans hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-foreground font-sans mb-4">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:olamidej023@gmail.com"
                className="text-sm text-muted-foreground font-sans hover:text-accent transition-colors"
              >
                olamidej023@gmail.com
              </a>
              <a
                href="https://wa.me/2349038662876"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground font-sans hover:text-accent transition-colors"
              >
                +234 903 866 2876
              </a>
              <p className="text-sm text-muted-foreground font-sans">
                Victoria Island, Lagos
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-sans">
            {"2026 Larisha. All rights reserved."}
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Shipping"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-muted-foreground font-sans hover:text-accent transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
