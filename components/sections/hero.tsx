"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{t("hero.subtitle")}</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance" style={{ fontFamily: 'var(--font-heading)' }}>
                Sara Maciel
              </h1>
              
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                {t("hero.title")}
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {t("hero.description")}
            </p>

            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">{t("hero.focus")}</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                  {t("hero.focus.1")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                  {t("hero.focus.2")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                  {t("hero.focus.3")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                  {t("hero.focus.4")}
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="group">
                <a href="#work">
                  {t("hero.cta.work")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#ai">
                  {t("hero.cta.experiments")}
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Photo Placeholder */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-secondary overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <svg
                    className="w-32 h-32 text-muted-foreground/50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-foreground rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground text-3xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
