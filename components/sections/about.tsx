"use client"

import { useLanguage } from "@/contexts/language-context"
import { Lightbulb, Users, Bot, Settings } from "lucide-react"

const highlights = [
  { key: "about.highlight.1", icon: <Lightbulb className="h-5 w-5" /> },
  { key: "about.highlight.2", icon: <Users className="h-5 w-5" /> },
  { key: "about.highlight.3", icon: <Bot className="h-5 w-5" /> },
  { key: "about.highlight.4", icon: <Settings className="h-5 w-5" /> },
]

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                {t("about.title")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("about.subtitle")}
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {t("about.description")}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight) => (
                <div
                  key={highlight.key}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center text-primary-foreground">
                    {highlight.icon}
                  </div>
                  <span className="text-sm font-medium">{t(highlight.key)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto rounded-2xl bg-secondary/50 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-foreground flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary-foreground" style={{ fontFamily: 'var(--font-heading)' }}>SM</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Product Manager</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border border-border rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-border rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
