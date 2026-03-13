"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { key: "nav.home", href: "#home" },
  { key: "nav.work", href: "#work" },
  { key: "nav.ai", href: "#ai" },
  { key: "nav.thinking", href: "#thinking" },
  { key: "nav.about", href: "#about" },
  { key: "nav.contact", href: "#contact" },
]

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold text-lg tracking-tight">
          Sara Maciel
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm"
          >
            <Globe className="h-4 w-4" />
            <span>{language === "pt" ? "EN" : "PT"}</span>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm"
          >
            <Globe className="h-4 w-4" />
            <span>{language === "pt" ? "EN" : "PT"}</span>
          </Button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <ul className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
