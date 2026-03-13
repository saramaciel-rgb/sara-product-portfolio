"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react"

const contactLinks = [
  {
    name: "GitHub",
    href: "https://github.com/saramaciel-rgb",
    icon: <Github className="h-5 w-5" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sara-elisa",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    name: "Email",
    href: "mailto:saraelisatm25@gmail.com",
    icon: <Mail className="h-5 w-5" />,
  },
]

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              {t("contact.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {contactLinks.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                asChild
                className="group"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  {link.icon}
                  {link.name}
                  <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </Button>
            ))}
          </div>

          <div className="pt-8">
            <Button size="lg" asChild className="group">
              <a href="mailto:saraelisatm25@gmail.com">
                {t("contact.cta")}
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
