"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Check, EyeOff } from "lucide-react"
import { cases } from "@/content/cases"
import { work, workflow } from "@/content/site"
import { CaseVisual } from "@/components/case-visuals"

const list = cases.filter((c) => c.id !== "workflow")

const statusDot: Record<string, string> = {
  live: "bg-live",
  beta: "bg-amber",
  rolling: "bg-blueprint",
  shipped: "bg-graphite",
}

export function Work() {
  const { language: l } = useLanguage()
  const [selected, setSelected] = useState(list[0].id)
  const item = list.find((c) => c.id === selected)!

  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.replace("#case-", "")
      if (window.location.hash.startsWith("#case-") && list.some((c) => c.id === id)) setSelected(id)
    }
    fromHash()
    window.addEventListener("hashchange", fromHash)
    return () => window.removeEventListener("hashchange", fromHash)
  }, [])

  return (
    <section id="work" className="relative py-24">
      {list.map((c) => (
        <span key={c.id} id={`case-${c.id}`} className="absolute top-0" aria-hidden />
      ))}
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <h2 className="font-heading text-4xl font-bold tracking-[-0.02em] sm:text-5xl">{work.title[l]}</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-graphite">{work.lead[l]}</p>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_2fr]">
          {/* Case list */}
          <div role="tablist" aria-orientation="vertical" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0">
            {list.map((c) => {
              const active = c.id === selected
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelected(c.id)}
                  className={`group w-64 shrink-0 rounded-2xl border p-4 text-left transition-colors lg:w-auto ${active ? "border-ink bg-ink text-white" : "border-line bg-white hover:border-ink/40"}`}
                >
                  <span className={`flex items-center gap-2 text-xs ${active ? "text-white/70" : "text-graphite"}`}>
                    <span className={`h-2 w-2 rounded-full ${statusDot[c.status]}`} aria-hidden />
                    {work.status[c.status][l]}
                    <span aria-hidden>·</span>
                    {c.meta[l].split(" · ")[1]}
                  </span>
                  <span className="mt-1.5 block font-semibold leading-snug">{c.title[l]}</span>
                </button>
              )
            })}
            <a href="#workflow" className="w-64 shrink-0 rounded-2xl border border-dashed border-line p-4 text-sm text-graphite transition-colors hover:border-blueprint hover:text-blueprint lg:w-auto">
              {l === "en" ? "Plus the featured case: " : "E o case em destaque: "}
              <span className="font-semibold">{workflow.title[l].split(":")[0]}</span>
            </a>
          </div>

          {/* Detail */}
          <article key={item.id} role="tabpanel" className="overflow-hidden rounded-[22px] border border-line bg-white">
            <div className="dot-grid relative flex min-h-[15rem] items-center justify-center bg-paper px-6 py-10">
              <CaseVisual id={item.id} l={l} />
              <span className="absolute bottom-3 right-4 inline-flex items-center gap-1.5 text-[11px] text-graphite">
                <EyeOff className="h-3 w-3" aria-hidden />
                {workflow.illustrative[l]}
              </span>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-sm text-graphite">{item.meta[l].replaceAll(" · ", ", ")}</p>
              <h3 className="font-heading mt-1 text-2xl font-bold leading-tight sm:text-3xl">{item.title[l]}</h3>

              <div className="mt-6 grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-blueprint">{work.problem[l]}</h4>
                  <p className="mt-2 leading-relaxed text-graphite">{item.problem[l]}</p>
                  <h4 className="mt-6 text-sm font-semibold text-blueprint">{work.did[l]}</h4>
                  <ul className="mt-2 space-y-2">
                    {item.did[l].map((d, i) => (
                      <li key={i} className="flex gap-2.5 leading-relaxed text-graphite">
                        <span className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-blueprint/50" aria-hidden />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="self-start rounded-2xl bg-live-soft/60 p-5">
                  <h4 className="text-sm font-semibold text-live">{work.outcome[l]}</h4>
                  <ul className="mt-3 space-y-3">
                    {item.outcome[l].map((o, i) => (
                      <li key={i} className="flex gap-2.5 leading-relaxed">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-live" aria-hidden />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <ul className="mt-8 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-graphite">{t}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
