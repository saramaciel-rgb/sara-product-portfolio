"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Wrench, Headset, Handshake, Users, LineChart, Megaphone } from "lucide-react"
import { teaching } from "@/content/site"

const icons: Record<string, React.ElementType> = {
  eng: Wrench, cs: Headset, sales: Handshake, customers: Users, leadership: LineChart, market: Megaphone,
}

export function Teaching() {
  const { language: l } = useLanguage()
  const [aud, setAud] = useState(teaching.audiences[0].id)
  const current = teaching.audiences.find((a) => a.id === aud)!
  const Icon = icons[current.id]

  return (
    <section id="teaching" className="py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="font-heading text-4xl font-bold tracking-[-0.02em] sm:text-5xl">{teaching.title[l]}</h2>
            <p className="mt-4 text-lg leading-relaxed text-graphite">{teaching.lead[l]}</p>
            <p className="mt-10 text-sm font-medium text-graphite">{teaching.pick[l]}</p>
            <div role="tablist" className="mt-3 flex flex-wrap gap-2">
              {teaching.audiences.map((a) => {
                const I = icons[a.id]
                const active = a.id === aud
                return (
                  <button
                    key={a.id}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setAud(a.id)}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${active ? "border-blueprint bg-blueprint text-white" : "border-line bg-white hover:border-ink/40"}`}
                  >
                    <I className="h-4 w-4" aria-hidden />
                    {a.name[l]}
                  </button>
                )
              })}
            </div>
          </div>

          <div role="tabpanel" key={aud} className="rounded-[22px] border border-line bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blueprint-soft text-blueprint">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="font-heading text-2xl font-bold">{current.name[l]}</h3>
            </div>
            <ul className="mt-6 divide-y divide-line">
              {current.items[l].map((it, i) => (
                <li key={i} className="py-4 text-[15px] leading-relaxed first:pt-0 last:pb-0">{it}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
