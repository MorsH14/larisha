"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
} from "lucide-react"

export default function ContactPage() {
  return (
    <main className="pt-28 md:pt-32 pb-20 md:pb-16">
      {/* Header */}
      <div className="px-5 md:px-10 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
            Get in Touch
          </p>
          <h1 className="font-serif text-3xl md:text-5xl text-foreground mb-4 text-balance">
            Visit Us or Chat with a Personal Stylist
          </h1>
          <p className="text-sm md:text-base text-muted-foreground font-sans leading-relaxed">
            Whether you need help finding the perfect aso-ebi outfit, want to book a
            private styling session, or have a question about your order, our team is here
            for you.
          </p>
        </motion.div>
      </div>

      <div className="px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-6xl">
          {/* Left - Showroom Image + Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary mb-8">
              <Image
                src="/images/showroom.jpg"
                alt="Larisha Showroom, Victoria Island, Lagos"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <h2 className="font-serif text-2xl text-foreground mb-6">
              The Larisha Showroom
            </h2>

            <div className="flex flex-col gap-5">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-sans text-foreground font-medium">Address</p>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    15 Akin Adesola Street,
                    <br />
                    Victoria Island, Lagos
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-sans text-foreground font-medium">
                    Opening Hours
                  </p>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    Monday - Friday: 10am - 7pm
                    <br />
                    Saturday: 11am - 6pm
                    <br />
                    Sunday: By appointment only
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-sans text-foreground font-medium">Phone</p>
                  <a
                    href="tel:+2349038662876"
                    className="text-sm text-muted-foreground font-sans hover:text-accent transition-colors"
                  >
                    +234 903 866 2876
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-sans text-foreground font-medium">Email</p>
                  <a
                    href="mailto:olamidej023@gmail.com"
                    className="text-sm text-muted-foreground font-sans hover:text-accent transition-colors"
                  >
                    olamidej023@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Instagram className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-sans text-foreground font-medium">Social</p>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground font-sans hover:text-accent transition-colors"
                  >
                    @larisha
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - WhatsApp Hub */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {/* Chat with Personal Stylist */}
            <div className="border border-border p-6 md:p-8 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#25D366] text-[#ffffff]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-sans text-foreground font-medium">
                    Chat with a Personal Stylist
                  </h3>
                  <p className="text-xs text-muted-foreground font-sans">
                    Available Mon-Sat, 9am - 9pm
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-6">
                Get personalized recommendations, size advice, fabric guidance, and help
                coordinating your aso-ebi order. Our stylists are experts in Nigerian
                fashion and will help you find the perfect look.
              </p>
              <a
                href="https://wa.me/2349038662876?text=Hello%20Larisha%2C%20I%27d%20like%20to%20chat%20with%20a%20personal%20stylist.%20Can%20you%20help%20me%20find%20the%20perfect%20outfit%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#25D366] text-[#ffffff] text-xs tracking-[0.2em] uppercase font-sans flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4" />
                Chat with a Stylist
              </a>
            </div>

            {/* Services */}
            <div className="border border-border p-6 md:p-8 bg-card">
              <h3 className="text-xs tracking-[0.15em] uppercase text-foreground font-sans mb-5">
                Our Services
              </h3>
              <div className="flex flex-col gap-5">
                {[
                  {
                    title: "Aso-Ebi Coordination",
                    desc: "Let us help coordinate matching outfits for your entire party. Bulk pricing available.",
                    waText:
                      "Hello Larisha, I need help coordinating aso-ebi outfits for an upcoming event. How many people can you accommodate?",
                  },
                  {
                    title: "Private Styling Session",
                    desc: "Book a one-on-one appointment at our showroom with a dedicated stylist.",
                    waText:
                      "Hello Larisha, I'd like to book a private styling session at your showroom. What dates are available?",
                  },
                  {
                    title: "Custom Tailoring",
                    desc: "Need a unique fit? Our in-house tailors can adjust any piece to your exact measurements.",
                    waText:
                      "Hello Larisha, I'm interested in custom tailoring for a specific piece. Can you tell me more about the process?",
                  },
                  {
                    title: "Bridal Consultation",
                    desc: "Explore our bridal and occasion wear with guided expert advice for your special day.",
                    waText:
                      "Hello Larisha, I'd love to schedule a bridal consultation. My wedding date is coming up and I need help with outfits.",
                  },
                ].map((service) => (
                  <div key={service.title} className="pb-5 border-b border-border last:border-0 last:pb-0">
                    <h4 className="text-sm font-sans text-foreground font-medium mb-1">
                      {service.title}
                    </h4>
                    <p className="text-xs text-muted-foreground font-sans leading-relaxed mb-3">
                      {service.desc}
                    </p>
                    <a
                      href={`https://wa.me/2349038662876?text=${encodeURIComponent(service.waText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-sans text-[#25D366] hover:text-[#20bd5a] transition-colors"
                    >
                      <MessageCircle className="w-3 h-3" />
                      Inquire via WhatsApp
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact */}
            <div className="border border-border p-6 md:p-8 bg-primary text-primary-foreground">
              <h3 className="font-serif text-xl mb-3">Need immediate assistance?</h3>
              <p className="text-sm font-sans text-primary-foreground/80 leading-relaxed mb-4">
                Call us directly for urgent orders, delivery tracking, or any immediate
                concerns.
              </p>
              <a
                href="tel:+2349038662876"
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-sans text-primary-foreground border-b border-primary-foreground/50 pb-1 hover:border-primary-foreground transition-colors"
              >
                <Phone className="w-3 h-3" />
                +234 903 866 2876
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
