"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Menu, X, Download } from "lucide-react"
import { nav, resume } from "@/content/site"

export function Navigation() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const langSwitch = (
    <div className="flex items-center rounded-full border border-line bg-white p-0.5 text-xs font-semibold" role="group" aria-label="Language">
      {(["en", "pt"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLanguage(l)}
          aria-pressed={language === l}
          className={`rounded-full px-2.5 py-1 transition-colors ${language === l ? "bg-ink text-white" : "text-graphite hover:text-ink"}`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <a href="#home" className="font-heading text-lg font-bold tracking-tight">
          Sara Maciel
        </a>

        <div className="hidden items-center gap-7 md:flex">
          <ul className="flex items-center gap-6">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-graphite transition-colors hover:text-ink">
                  {item.label[language]}
                </a>
              </li>
            ))}
          </ul>
          {langSwitch}
          <a
            href={resume[language].href}
            download
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blueprint"
          >
            <Download className="h-4 w-4" aria-hidden />
            {resume[language].label}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          {langSwitch}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="rounded-lg p-2 hover:bg-white"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-b border-line bg-paper md:hidden">
          <ul className="space-y-1 px-5 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setIsOpen(false)} className="block py-2 text-graphite hover:text-ink">
                  {item.label[language]}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href={resume[language].href} download className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white">
                <Download className="h-4 w-4" aria-hidden />
                {resume[language].label}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
