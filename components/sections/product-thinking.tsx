"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Target, Repeat, TrendingUp, Gauge, Users, Zap, BarChart2, Sparkles, Rocket } from "lucide-react"

const thinkingCards = [
  {
    id: "discovery",
    icon: <Search className="h-6 w-6" />,
    titleKey: "thinking.discovery.title",
    descriptionKey: "thinking.discovery.description",
  },
  {
    id: "ux",
    icon: <Sparkles className="h-6 w-6" />,
    titleKey: "thinking.ux.title",
    descriptionKey: "thinking.ux.description",
  },
  {
    id: "strategy",
    icon: <Target className="h-6 w-6" />,
    titleKey: "thinking.strategy.title",
    descriptionKey: "thinking.strategy.description",
  },
  {
    id: "gtm",
    icon: <Rocket className="h-6 w-6" />,
    titleKey: "thinking.gtm.title",
    descriptionKey: "thinking.gtm.description",
  },
  {
    id: "methodologies",
    icon: <Repeat className="h-6 w-6" />,
    titleKey: "thinking.methodologies.title",
    descriptionKey: "thinking.methodologies.description",
  },
]

const metrics = [
  { key: "metrics.activation", icon: <TrendingUp className="h-4 w-4" /> },
  { key: "metrics.adoption", icon: <Users className="h-4 w-4" /> },
  { key: "metrics.efficiency", icon: <Gauge className="h-4 w-4" /> },
  { key: "metrics.workflow", icon: <Zap className="h-4 w-4" /> },
  { key: "metrics.impact", icon: <BarChart2 className="h-4 w-4" /> },
]

export function ProductThinking() {
  const { t } = useLanguage()

  return (
    <section id="thinking" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            {t("thinking.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t("thinking.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {thinkingCards.map((card) => (
            <Card key={card.id} className="bg-card">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-foreground">
                  {card.icon}
                </div>
                <CardTitle className="text-lg">{t(card.titleKey)}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(card.descriptionKey)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Metrics Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
              {t("metrics.title")}
            </h3>
            <p className="text-muted-foreground">
              {t("metrics.subtitle")}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {metrics.map((metric) => (
              <Badge
                key={metric.key}
                variant="secondary"
                className="px-4 py-2 text-sm font-normal flex items-center gap-2"
              >
                {metric.icon}
                {t(metric.key)}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
