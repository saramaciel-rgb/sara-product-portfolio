"use client"

import { LanguageProvider } from "@/contexts/language-context"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { WorkflowFeature } from "@/components/sections/workflow-feature"
import { Work } from "@/components/sections/work"
import { AIExperiments } from "@/components/sections/ai-experiments"
import { Teaching } from "@/components/sections/teaching"
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
        <WorkflowFeature />
        <Work />
        <AIExperiments />
        <Teaching />
        <ProductThinking />
        <About />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
