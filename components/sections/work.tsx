"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ArrowUpRight, Layers, Activity, Brain, Building2, Workflow } from "lucide-react"

interface Project {
  id: string
  icon: React.ReactNode
  titleKey: string
  descriptionKey: string
  features: string[]
  tags: string[]
}

const projects: Project[] = [
  {
    id: "integration",
    icon: <Layers className="h-6 w-6" />,
    titleKey: "project.integration.title",
    descriptionKey: "project.integration.description",
    features: [
      "project.integration.feature.1",
      "project.integration.feature.2",
      "project.integration.feature.3",
      "project.integration.feature.4",
      "project.integration.feature.5",
    ],
    tags: ["AI", "CRM", "ERP", "Automation"],
  },
  {
    id: "dashboard",
    icon: <Activity className="h-6 w-6" />,
    titleKey: "project.dashboard.title",
    descriptionKey: "project.dashboard.description",
    features: [
      "project.dashboard.feature.1",
      "project.dashboard.feature.2",
      "project.dashboard.feature.3",
    ],
    tags: ["Dashboard", "Monitoring", "Customer Success"],
  },
  {
    id: "logs",
    icon: <Brain className="h-6 w-6" />,
    titleKey: "project.logs.title",
    descriptionKey: "project.logs.description",
    features: ["project.logs.goal"],
    tags: ["AI", "NLP", "Developer Tools"],
  },
  {
    id: "reservation",
    icon: <Building2 className="h-6 w-6" />,
    titleKey: "project.reservation.title",
    descriptionKey: "project.reservation.description",
    features: [
      "project.reservation.feature.1",
      "project.reservation.feature.2",
    ],
    tags: ["Real Estate", "Document Management", "Automation"],
  },
  {
    id: "workflow",
    icon: <Workflow className="h-6 w-6" />,
    titleKey: "project.workflow.title",
    descriptionKey: "project.workflow.description",
    features: [
      "project.workflow.feature.1",
      "project.workflow.feature.2",
      "project.workflow.feature.3",
    ],
    tags: ["Workflows", "AI", "Onboarding"],
  },
]

export function Work() {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="work" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            {t("work.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t("work.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card"
              onClick={() => setSelectedProject(project)}
            >
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-foreground">
                  {project.icon}
                </div>
                <CardTitle className="flex items-center justify-between text-lg">
                  {t(project.titleKey)}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {t(project.descriptionKey)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  {selectedProject.icon}
                </div>
                <DialogTitle className="text-xl">
                  {t(selectedProject.titleKey)}
                </DialogTitle>
                <DialogDescription className="text-base pt-2">
                  {t(selectedProject.descriptionKey)}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div>
                  <h4 className="text-sm font-medium mb-3">Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 shrink-0" />
                        {t(feature)}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedProject.tags.map((tag) => (
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
