"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { ai } from "@/content/site"

export function AIExperiments() {
  const { language: l } = useLanguage()
  const [stage, setStage] = useState(ai.stages[0].id)
  const current = ai.stages.find((s) => s.id === stage)!
  const index = ai.stages.findIndex((s) => s.id === stage)

  return (
    <section id="ai" className="bg-ink py-24 text-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="font-heading text-4xl font-bold tracking-[-0.02em] sm:text-5xl">{ai.title[l]}</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">{ai.lead[l]}</p>
        </div>

        {/* Stages: a real sequence, so they are numbered */}
        <div role="tablist" className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
          {ai.stages.map((s, i) => {
            const active = s.id === stage
            return (
              <button
                key={s.id}
                role="tab"
                aria-selected={active}
                onClick={() => setStage(s.id)}
                className={`relative px-4 py-4 text-left transition-colors ${active ? "bg-blueprint" : "bg-ink hover:bg-white/5"}`}
              >
                <span className={`block text-xs ${active ? "text-white/80" : "text-white/45"}`}>{i + 1}</span>
                <span className="mt-1 block text-sm font-semibold leading-tight">{s.name[l]}</span>
              </button>
            )
          })}
        </div>

        <div role="tabpanel" key={stage} className="mt-6 grid gap-4 md:grid-cols-3">
          {current.items.map((it, i) => (
            <article key={i} className="rounded-2xl border border-white/12 bg-white/[0.04] p-6">
              <h3 className="font-heading text-lg font-semibold leading-snug">{it.t[l]}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">{it.d[l]}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between text-sm text-white/50">
          <button
            onClick={() => setStage(ai.stages[(index - 1 + ai.stages.length) % ai.stages.length].id)}
            className="rounded-full px-3 py-1.5 hover:bg-white/10 hover:text-white"
          >
            {l === "en" ? "Previous stage" : "Etapa anterior"}
          </button>
          <span aria-hidden>{index + 1} / {ai.stages.length}</span>
          <button
            onClick={() => setStage(ai.stages[(index + 1) % ai.stages.length].id)}
            className="rounded-full px-3 py-1.5 hover:bg-white/10 hover:text-white"
          >
            {l === "en" ? "Next stage" : "Próxima etapa"}
          </button>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-sm text-white/50">{ai.tools[l]}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {ai.toolList.map((t) => (
              <li key={t} className="rounded-full border border-white/15 px-3 py-1.5 text-sm text-white/85">{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
