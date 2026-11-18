"use client"

import { useLanguage } from "@/contexts/language-context"
import { principles } from "@/content/site"

export function ProductThinking() {
  const { language: l } = useLanguage()

  return (
    <section id="thinking" className="border-y border-line bg-white py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <h2 className="font-heading text-3xl font-bold tracking-[-0.02em] sm:text-4xl">{principles.title[l]}</h2>
        <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {principles.items.map((p, i) => (
            <div key={i} className="border-t border-ink pt-4">
              <dt className="font-heading text-xl font-semibold">{p.t[l]}</dt>
              <dd className="mt-2 leading-relaxed text-graphite">{p.d[l]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
