"use client"

import { LanguageProvider } from "@/contexts/language-context"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { Work } from "@/components/sections/work"
import { AIExperiments } from "@/components/sections/ai-experiments"
import { ProductThinking } from "@/components/sections/product-thinking"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <Work />
        <AIExperiments />
        <ProductThinking />
        <About />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
