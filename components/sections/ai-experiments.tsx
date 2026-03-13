"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Palette, BarChart3, BookOpen, TestTube, GitBranch } from "lucide-react"

const experiments = [
  { key: "ai.discovery", icon: <Lightbulb className="h-5 w-5" /> },
  { key: "ai.prototyping", icon: <Palette className="h-5 w-5" /> },
  { key: "ai.analysis", icon: <BarChart3 className="h-5 w-5" /> },
  { key: "ai.research", icon: <BookOpen className="h-5 w-5" /> },
  { key: "ai.testing", icon: <TestTube className="h-5 w-5" /> },
  { key: "ai.workflow", icon: <GitBranch className="h-5 w-5" /> },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {experiments.map((experiment) => (
            <Card 
              key={experiment.key} 
              className="group hover:bg-secondary/50 transition-colors duration-200 cursor-default"
            >
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground group-hover:bg-background transition-colors">
                  {experiment.icon}
                </div>
                <span className="font-medium">{t(experiment.key)}</span>
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
