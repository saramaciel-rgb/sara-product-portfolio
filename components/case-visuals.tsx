"use client"

import { CalendarCheck, FileText, MessageSquareText, Phone, Send, Smartphone, UserRound, Bot } from "lucide-react"
import type { Lang } from "@/content/site"

// Illustrative mockups only: no real customer data. Anything that would be real is blurred.
const Blur = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded bg-ink/10 px-1 blur-[3px] select-none" aria-hidden>{children}</span>
)

function AgentChat({ l }: { l: Lang }) {
  return (
    <div className="mx-auto w-full max-w-sm space-y-2.5 text-sm">
      <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-[#DCF7E6] px-3.5 py-2.5">
        {l === "en" ? "Hi! Can you send me this month's payment slip?" : "Oi! Pode me mandar o boleto deste mês?"}
      </div>
      <div className="flex items-end gap-2">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blueprint text-white"><Bot className="h-4 w-4" aria-hidden /></span>
        <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-sm border border-line bg-white px-3.5 py-2.5">
          {l === "en" ? "Of course, " : "Claro, "}<Blur>Maria</Blur>
          {l === "en" ? ". Here is the slip for unit " : ". Aqui está o boleto da unidade "}<Blur>1204-B</Blur>
          {l === "en" ? ", due on the 10th." : ", com vencimento dia 10."}
          <div className="mt-2 flex items-center gap-2 rounded-lg bg-paper px-2.5 py-2 text-xs"><FileText className="h-4 w-4 text-blueprint" aria-hidden /> boleto_<Blur>0425</Blur>.pdf</div>
        </div>
      </div>
      <div className="flex justify-center pt-1">
        <span className="rounded-full bg-live-soft px-3 py-1 text-xs font-semibold text-live">
          {l === "en" ? "Counted as solved by AI: no human touched it" : "Conta como resolvida pela IA: nenhum humano tocou"}
        </span>
      </div>
    </div>
  )
}

function Suite({ l }: { l: Lang }) {
  const items = [
    { i: CalendarCheck, en: "AI scheduling", pt: "Agendamento com IA" },
    { i: MessageSquareText, en: "Service requests", pt: "Solicitações" },
    { i: UserRound, en: "360° contact page", pt: "Contato 360°" },
    { i: Smartphone, en: "SMS", pt: "SMS" },
    { i: Send, en: "Message templates", pt: "Modelos de mensagem" },
    { i: Phone, en: "Calls", pt: "Ligações" },
    { i: Bot, en: "Post-sales AI agent", pt: "Agente de IA" },
  ]
  return (
    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {items.map((it, k) => (
        <li key={k} className={`flex items-center gap-2.5 rounded-xl border border-line bg-white px-3 py-2.5 text-sm ${k === 6 ? "col-span-2 sm:col-span-3 border-blueprint/40" : ""}`}>
          <it.i className="h-4 w-4 shrink-0 text-blueprint" aria-hidden />
          <span className="font-medium">{it[l]}</span>
          <span className="ml-auto h-2 w-2 rounded-full bg-live" aria-label={l === "en" ? "live" : "no ar"} />
        </li>
      ))}
    </ul>
  )
}

function Hub({ l }: { l: Lang }) {
  const systems = ["Sienge", "UAU", "CV", "Mega", "Salesforce", "Pipedrive", "HubSpot"]
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[19rem]">
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden>
        {systems.map((_, k) => {
          const a = (k / systems.length) * Math.PI * 2 - Math.PI / 2
          return <line key={k} x1="100" y1="100" x2={100 + Math.cos(a) * 78} y2={100 + Math.sin(a) * 78} stroke="#2747E0" strokeOpacity="0.35" strokeWidth="1" className="flow-line" />
        })}
      </svg>
      <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl bg-ink text-center text-white">
        <span className="font-heading text-xl font-bold leading-none">40+</span>
        <span className="mt-1 text-[10px] leading-tight opacity-80">{l === "en" ? "integrations" : "integrações"}</span>
      </div>
      {systems.map((s, k) => {
        const a = (k / systems.length) * Math.PI * 2 - Math.PI / 2
        return (
          <span key={s} className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-line bg-white px-2.5 py-1 text-xs font-semibold shadow-sm" style={{ left: `${50 + Math.cos(a) * 39}%`, top: `${50 + Math.sin(a) * 39}%` }}>
            {s}
          </span>
        )
      })}
    </div>
  )
}

function Adoption({ l }: { l: Lang }) {
  const rows = [
    { b: 18, a: 64 }, { b: 9, a: 52 }, { b: 25, a: 71 }, { b: 4, a: 38 }, { b: 14, a: 47 },
  ]
  return (
    <div className="w-full">
      <div className="mb-3 flex gap-4 text-xs text-graphite">
        <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-line" />{l === "en" ? "Before the data talk" : "Antes da conversa com dados"}</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-blueprint" />{l === "en" ? "After" : "Depois"}</span>
      </div>
      <ul className="space-y-2.5">
        {rows.map((r, k) => (
          <li key={k} className="grid grid-cols-[4.5rem_1fr] items-center gap-3 text-xs">
            <span className="text-graphite">{l === "en" ? "Customer" : "Cliente"} <Blur>{"ABCDE"[k]}</Blur></span>
            <span className="relative h-5 rounded bg-paper">
              <span className="absolute inset-y-0 left-0 rounded bg-blueprint" style={{ width: `${r.a}%` }} />
              <span className="absolute inset-y-0 left-0 rounded bg-line" style={{ width: `${r.b}%` }} />
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 rounded-xl bg-paper px-3 py-2.5 text-xs text-graphite">
        {l === "en" ? "Each talk showed hours and money lost by not using the product. Illustrative shapes, not real values." : "Cada conversa mostrou horas e dinheiro perdidos por não usar o produto. Formas ilustrativas, não são valores reais."}
      </p>
    </div>
  )
}

function SalesPlatform({ l }: { l: Lang }) {
  return (
    <div className="w-full space-y-3">
      <div className="grid grid-cols-3 gap-2">
        {[l === "en" ? "Sales" : "Vendas", l === "en" ? "Visits" : "Visitas", l === "en" ? "Pipeline" : "Funil"].map((t) => (
          <div key={t} className="rounded-xl border border-line bg-white p-3">
            <div className="text-[11px] text-graphite">{t}</div>
            <div className="font-heading mt-1 text-lg font-bold"><Blur>1.284</Blur></div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-line bg-white p-3">
        {[92, 70, 48, 30].map((v, k) => (
          <div key={k} className="mb-1.5 h-3 rounded bg-blueprint" style={{ width: `${v}%`, opacity: 1 - k * 0.18 }} />
        ))}
        <div className="mt-2 text-[11px] text-graphite">{l === "en" ? "Built from what salespeople asked for" : "Montado a partir do que os vendedores pediam"}</div>
      </div>
    </div>
  )
}

export function CaseVisual({ id, l }: { id: string; l: Lang }) {
  switch (id) {
    case "ai-agent": return <AgentChat l={l} />
    case "post-sales-suite": return <Suite l={l} />
    case "integrations": return <Hub l={l} />
    case "dashboard": return <Adoption l={l} />
    case "mrv": return <SalesPlatform l={l} />
    default: return null
  }
}
