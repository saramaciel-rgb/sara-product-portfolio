"use client"

import { useLanguage } from "@/contexts/language-context"
import { ArrowDownRight, Download } from "lucide-react"
import { hero, resume } from "@/content/site"

export function Hero() {
  const { language: l } = useLanguage()

  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-6 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="text-sm font-medium text-blueprint">{hero.role[l]}</p>
            <h1 className="font-heading mt-4 text-[2.6rem] font-bold leading-[1.02] tracking-[-0.03em] text-balance sm:text-6xl lg:text-[4.1rem]">
              {hero.title[l]}
            </h1>
            <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-graphite">{hero.lead[l]}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#workflow" className="inline-flex items-center gap-2 rounded-full bg-blueprint px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink">
                {hero.ctaWork[l]}
                <ArrowDownRight className="h-4 w-4" aria-hidden />
              </a>
              <a href={resume[l].href} download className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold transition-colors hover:border-ink">
                <Download className="h-4 w-4" aria-hidden />
                {resume[l].label}
              </a>
            </div>
          </div>

          <figure className="relative mx-auto w-full max-w-[22rem] lg:max-w-none">
            <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_30px_60px_-30px_rgba(20,22,27,0.45)]">
              <img src="/sara.jpg" alt="Sara Maciel" width={960} height={1200} className="aspect-[4/5] w-full object-cover" />
            </div>
            <figcaption className="absolute -bottom-5 left-4 right-4 flex items-center gap-3 rounded-2xl border border-line bg-white/95 px-4 py-3 backdrop-blur sm:left-6 sm:right-auto">
              <span className="relative flex h-2.5 w-2.5" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-live" />
              </span>
              <span className="text-sm">
                <span className="font-semibold">{hero.status[l]}</span>
                <span className="block text-xs text-graphite">{hero.place[l]}</span>
              </span>
            </figcaption>
          </figure>
        </div>

        <ul className="mt-20 grid grid-cols-1 overflow-hidden rounded-2xl border border-line bg-white sm:grid-cols-2 lg:grid-cols-4">
          {hero.proof.map((p, i) => (
            <li key={i} className="border-line [&:not(:first-child)]:border-t sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(even)]:border-l lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:border-t-0">
              <a href={p.href} className="group flex h-full flex-col gap-1 p-5 transition-colors hover:bg-blueprint-soft">
                <span className="font-heading text-3xl font-bold tracking-tight">{p.value[l]}</span>
                <span className="text-sm leading-snug text-graphite">{p.label[l]}</span>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-blueprint opacity-70 transition-opacity group-hover:opacity-100">
                  {hero.proofHint[l]}
                  <ArrowDownRight className="h-3.5 w-3.5" aria-hidden />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
