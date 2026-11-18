"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Zap, Clock, MessageCircle, Sparkles, GitBranch, UserCheck, Check, EyeOff } from "lucide-react"
import { workflow as w } from "@/content/site"

const nodeStyle: Record<string, { icon: React.ElementType; tint: string; label: { en: string; pt: string } }> = {
  trigger: { icon: Zap, tint: "bg-blueprint text-white", label: { en: "Trigger", pt: "Gatilho" } },
  utility: { icon: Clock, tint: "bg-amber-soft text-amber", label: { en: "Utility", pt: "Utilitário" } },
  action: { icon: MessageCircle, tint: "bg-live-soft text-live", label: { en: "Action", pt: "Ação" } },
  ai: { icon: Sparkles, tint: "bg-[#EEE9FD] text-[#6243D8]", label: { en: "AI step", pt: "Etapa de IA" } },
}
const iconById: Record<string, React.ElementType> = { branch: GitBranch, handoff: UserCheck }

export function WorkflowFeature() {
  const { language: l } = useLanguage()
  const [mode, setMode] = useState<"before" | "after">("after")
  const [selected, setSelected] = useState(w.nodes[3].id)
  const node = w.nodes.find((n) => n.id === selected)!
  const steps = mode === "before" ? w.before[l] : w.after[l]

  return (
    <section id="workflow" className="border-y border-line bg-white py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-medium text-blueprint">{w.kicker[l]}</p>
            <h2 className="font-heading mt-3 text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-balance sm:text-5xl">{w.title[l]}</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite">{w.lead[l]}</p>
          </div>

          {/* Before / after */}
          <div className="rounded-2xl border border-line bg-paper p-4 sm:p-5">
            <div className="inline-flex rounded-full border border-line bg-white p-1" role="tablist">
              {(["before", "after"] as const).map((m) => (
                <button
                  key={m}
                  role="tab"
                  aria-selected={mode === m}
                  onClick={() => setMode(m)}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${mode === m ? (m === "after" ? "bg-live text-white" : "bg-ink text-white") : "text-graphite hover:text-ink"}`}
                >
                  {m === "before" ? w.beforeLabel[l] : w.afterLabel[l]}
                </button>
              ))}
            </div>
            <ol className="mt-4 grid gap-2 sm:grid-cols-4">
              {steps.map((s, i) => (
                <li
                  key={mode + i}
                  className={`relative rounded-xl border bg-white p-3 text-sm leading-snug ${mode === "after" ? "border-live/30" : "border-line"} ${mode === "before" && i === 3 ? "text-[#B42318]" : ""}`}
                >
                  <span className={`mb-1 block text-xs font-semibold ${mode === "after" ? "text-live" : "text-graphite"}`}>{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Interactive editor (illustrative) */}
        <div className="mt-14 overflow-hidden rounded-[22px] border border-line shadow-[0_24px_60px_-36px_rgba(20,22,27,0.4)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-white px-5 py-3">
            <div className="flex items-center gap-3">
              <span className="font-heading font-semibold">{w.editorTitle[l]}</span>
              <span className="rounded-full bg-live-soft px-2.5 py-0.5 text-xs font-semibold text-live">{l === "en" ? "Active" : "Ativa"}</span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs text-graphite">
              <EyeOff className="h-3.5 w-3.5" aria-hidden />
              {w.illustrative[l]}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
            <div className="dot-grid min-w-0 bg-paper px-4 py-8 sm:px-10">
              <p className="mb-6 text-sm text-graphite">{w.editorHint[l]}</p>
              <ol className="mx-auto flex max-w-md flex-col items-stretch">
                {w.nodes.map((n, i) => {
                  const st = nodeStyle[n.kind]
                  const Icon = iconById[n.id] ?? st.icon
                  const active = selected === n.id
                  return (
                    <li key={n.id} className="flex flex-col items-center">
                      {i > 0 && (
                        <svg width="2" height="26" className="overflow-visible" aria-hidden>
                          <line x1="1" y1="0" x2="1" y2="26" stroke="#2747E0" strokeOpacity="0.55" strokeWidth="2" className="flow-line" />
                        </svg>
                      )}
                      {n.id === "handoff" && (
                        <span className="mb-1.5 rounded-full border border-line bg-white px-2.5 py-0.5 text-[11px] text-graphite">
                          {l === "en" ? "Needs help" : "Precisa de ajuda"}
                        </span>
                      )}
                      <button
                        onClick={() => setSelected(n.id)}
                        aria-pressed={active}
                        className={`flex w-full items-center gap-3 rounded-2xl border bg-white px-4 py-3 text-left transition-all ${active ? "border-blueprint ring-4 ring-blueprint/15" : "border-line hover:border-ink/40"}`}
                      >
                        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${st.tint}`}>
                          <Icon className="h-4.5 w-4.5" aria-hidden />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold leading-tight">{n.name[l]}</span>
                          <span className="block truncate text-xs text-graphite">{n.sub[l]}</span>
                        </span>
                      </button>
                      {n.id === "branch" && (
                        <span className="mt-1.5 text-[11px] text-graphite">
                          {l === "en" ? "Paid: flow ends, nobody needs to act" : "Pagou: o fluxo termina, ninguém precisa agir"}
                        </span>
                      )}
                    </li>
                  )
                })}
              </ol>
            </div>

            <aside className="flex min-w-0 flex-col border-t border-line bg-white p-6 sm:p-8 lg:border-l lg:border-t-0" aria-live="polite">
              <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${nodeStyle[node.kind].tint}`}>
                {nodeStyle[node.kind].label[l]}
              </span>
              <h3 className="font-heading mt-4 text-2xl font-bold leading-tight">{node.name[l]}</h3>
              <p className="mt-1 text-sm text-graphite">{node.sub[l]}</p>

              {node.id === "send" && (
                <div className="mt-5 rounded-2xl rounded-tl-sm bg-[#E7F7EE] p-4 text-sm leading-relaxed">
                  {l === "en" ? "Hi " : "Olá, "}
                  <span className="rounded bg-ink/10 px-1 blur-[3px] select-none" aria-hidden>Maria Souza</span>
                  {l === "en" ? ", your installment for unit " : ", sua parcela da unidade "}
                  <span className="rounded bg-ink/10 px-1 blur-[3px] select-none" aria-hidden>1204-B</span>
                  {l === "en" ? " is due in 5 days. Here is your payment slip." : " vence em 5 dias. Segue o seu boleto."}
                </div>
              )}

              <div className="mt-6 border-t border-line pt-5">
                <p className="text-xs font-semibold text-blueprint">{w.decisionLabel[l]}</p>
                <p className="mt-2 text-[15px] leading-relaxed">{node.decision[l]}</p>
              </div>

              <div className="mt-auto flex gap-1.5 pt-8" aria-hidden>
                {w.nodes.map((n) => (
                  <span key={n.id} className={`h-1.5 flex-1 rounded-full ${n.id === selected ? "bg-blueprint" : "bg-line"}`} />
                ))}
              </div>
            </aside>
          </div>
        </div>

        {/* Results */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h3 className="font-heading text-2xl font-bold">{w.resultsTitle[l]}</h3>
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-7">
              {w.results.map((r, i) => (
                <div key={i} className="border-l-2 border-blueprint pl-4">
                  <dt className="font-heading text-3xl font-bold tracking-tight">{r.value[l]}</dt>
                  <dd className="mt-1 text-sm leading-snug text-graphite">{r.label[l]}</dd>
                </div>
              ))}
            </dl>
          </div>
          <ul className="space-y-4 self-end">
            {w.changes[l].map((c, i) => (
              <li key={i} className="flex gap-3 text-[15px] leading-relaxed">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-live-soft text-live">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
