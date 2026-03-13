"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Workflow, Cpu, CheckCircle } from "lucide-react"

const experimentAreas = [
  {
    id: "workflow",
    icon: <Workflow className="h-6 w-6" />,
    titleKey: "ai.workflow.title",
    descKey: "ai.workflow.desc",
    features: [
      "ai.workflow.feature.1",
      "ai.workflow.feature.2",
      "ai.workflow.feature.3",
    ],
  },
  {
    id: "product",
    icon: <Cpu className="h-6 w-6" />,
    titleKey: "ai.product.title",
    descKey: "ai.product.desc",
    features: [
      "ai.product.feature.1",
      "ai.product.feature.2",
      "ai.product.feature.3",
    ],
  },
]

const aiTools = [
  { name: "Claude", description: "Anthropic" },
  { name: "GPT", description: "OpenAI" },
  { name: "NotebookLM", description: "Google" },
  { name: "Gemini", description: "Google" },
  { name: "Manus", description: "AI Agent" },
]

export function AIExperiments() {
  const { t } = useLanguage()

  return (
    <section id="ai" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            {t("ai.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t("ai.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {experimentAreas.map((area) => (
            <Card key={area.id} className="bg-card">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-foreground">
                  {area.icon}
                </div>
                <CardTitle className="text-lg">{t(area.titleKey)}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(area.descKey)}
                </p>
                <ul className="space-y-2">
                  {area.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-foreground shrink-0" />
                      {t(feature)}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Tools Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
              {t("tools.title")}
            </h3>
            <p className="text-muted-foreground">
              {t("tools.subtitle")}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {aiTools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">
                    {tool.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-sm">{tool.name}</p>
                  <p className="text-xs text-muted-foreground">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground pt-4 max-w-2xl">
            {t("tools.usage")}
          </p>
        </div>
      </div>
    </section>
  )
}
