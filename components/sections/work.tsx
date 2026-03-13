"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ArrowUpRight, MessageSquare, Plug, Activity } from "lucide-react"

interface ProductArea {
  id: string
  icon: React.ReactNode
  titleKey: string
  descriptionKey: string
  features: string[]
  tags: string[]
}

const productAreas: ProductArea[] = [
  {
    id: "platform",
    icon: <MessageSquare className="h-6 w-6" />,
    titleKey: "work.platform.title",
    descriptionKey: "work.platform.desc",
    features: [
      "work.platform.feature.1",
      "work.platform.feature.2",
      "work.platform.feature.3",
      "work.platform.feature.4",
      "work.platform.feature.5",
    ],
    tags: ["AI Agents", "Customer Support", "Dashboards", "Operations"],
  },
  {
    id: "integration",
    icon: <Plug className="h-6 w-6" />,
    titleKey: "work.integration.title",
    descriptionKey: "work.integration.desc",
    features: [
      "work.integration.feature.1",
      "work.integration.feature.2",
      "work.integration.feature.3",
      "work.integration.feature.4",
      "work.integration.feature.5",
    ],
    tags: ["CRM", "ERP", "API", "Integrations"],
  },
  {
    id: "health",
    icon: <Activity className="h-6 w-6" />,
    titleKey: "work.health.title",
    descriptionKey: "work.health.desc",
    features: [
      "work.health.feature.1",
      "work.health.feature.2",
      "work.health.feature.3",
      "work.health.feature.4",
    ],
    tags: ["Monitoring", "Logs", "AI Translation", "Visibility"],
  },
]

export function Work() {
  const { t } = useLanguage()
  const [selectedArea, setSelectedArea] = useState<ProductArea | null>(null)

  return (
    <section id="work" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            {t("work.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {t("work.subtitle")}
          </p>
        </div>

        <p className="text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          {t("work.platform.description")}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {productAreas.map((area) => (
            <Card
              key={area.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card"
              onClick={() => setSelectedArea(area)}
            >
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-foreground">
                  {area.icon}
                </div>
                <CardTitle className="flex items-center justify-between text-lg">
                  {t(area.titleKey)}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {t(area.descriptionKey)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedArea} onOpenChange={() => setSelectedArea(null)}>
          {selectedArea && (
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  {selectedArea.icon}
                </div>
                <DialogTitle className="text-xl">
                  {t(selectedArea.titleKey)}
                </DialogTitle>
                <DialogDescription className="text-base pt-2">
                  {t(selectedArea.descriptionKey)}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div>
                  <h4 className="text-sm font-medium mb-3">Work includes</h4>
                  <ul className="space-y-2">
                    {selectedArea.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 shrink-0" />
                        {t(feature)}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedArea.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  )
}
