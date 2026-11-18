"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Linkedin, Github, Download, Copy, Check, Mail } from "lucide-react"
import { contact, resume } from "@/content/site"

export function Contact() {
  const { language: l } = useLanguage()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${contact.email}`
    }
  }

  return (
    <section id="contact" className="dot-grid border-t border-line bg-white py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <h2 className="font-heading text-5xl font-bold tracking-[-0.03em] sm:text-7xl">{contact.title[l]}</h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite">{contact.lead[l]}</p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 rounded-full bg-blueprint px-6 py-3.5 font-semibold text-white transition-colors hover:bg-ink">
            <Mail className="h-4 w-4" aria-hidden />
            {contact.email}
          </a>
          <button onClick={copy} className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-5 py-3.5 text-sm font-semibold hover:border-ink">
            {copied ? <Check className="h-4 w-4 text-live" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
            {copied ? (l === "en" ? "Email copied" : "E-mail copiado") : (l === "en" ? "Copy email" : "Copiar e-mail")}
          </button>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          <a href="https://linkedin.com/in/sara-elisa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 hover:border-ink">
            <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
          </a>
          <a href="https://github.com/saramaciel-rgb" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 hover:border-ink">
            <Github className="h-4 w-4" aria-hidden /> GitHub
          </a>
          <a href={resume[l].href} download className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 hover:border-ink">
            <Download className="h-4 w-4" aria-hidden /> {resume[l].label}
          </a>
        </div>
      </div>
    </section>
  )
}
