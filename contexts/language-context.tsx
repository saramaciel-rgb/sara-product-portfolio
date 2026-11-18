"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Language = "pt" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.work": "Trabalho",
    "nav.ai": "IA no meu trabalho",
    "nav.thinking": "Como eu trabalho",
    "nav.about": "Sobre",
    "nav.contact": "Contato",

    // Hero
    "hero.title": "Product Manager",
    "hero.subtitle": "B2B SaaS · Plataformas · Agentes de IA",
    "hero.description": "Pego um problema real de operação e transformo em produto B2B SaaS que o cliente usa todo dia. IA é uma das ferramentas que eu uso pra construir, não a única.",
    "hero.focus": "O que eu construo:",
    "hero.focus.1": "Produtos do zero (0→1), do discovery ao go-to-market",
    "hero.focus.2": "Plataformas e integrações (ERP, CRM, APIs)",
    "hero.focus.3": "Agentes de IA rodando em produção",
    "hero.focus.4": "Automação que tira trabalho manual da operação",
    "hero.cta.work": "Ver o que eu entreguei",
    "hero.cta.experiments": "Como eu uso IA",
    "hero.stat.1.value": "< 3 meses",
    "hero.stat.1.label": "do discovery à produção do Workflow",
    "hero.stat.2.value": "40+",
    "hero.stat.2.label": "integrações nativas no ecossistema que liderei",
    "hero.stat.3.value": "200+",
    "hero.stat.3.label": "clientes enterprise na plataforma",
    "hero.stat.4.value": "7",
    "hero.stat.4.label": "funcionalidades de pós-venda no release de produto 2026",

    // Work
    "work.title": "Trabalho selecionado",
    "work.subtitle": "Produtos que coloquei no ar na Morada.ai, um B2B SaaS para incorporadoras com mais de 200 clientes em 17 estados (juntos, mais de 20% do VGV brasileiro). E, antes disso, a plataforma que criei para o time de vendas da MRV.",
    "work.problem": "O problema",
    "work.did": "O que eu fiz",
    "work.outcome": "Resultado",
    "work.status.live": "No ar",
    "work.status.beta": "Em beta",
    "work.status.rolling": "Em liberação",
    "work.status.shipped": "Entregue",

    // AI
    "ai.title": "Como eu uso IA para construir",
    "ai.subtitle": "IA faz parte de como eu trabalho todo dia, não só do que eu entrego.",

    "ai.prototype.title": "Prototipar antes de comprometer a engenharia",
    "ai.prototype.desc": "Construo protótipos clicáveis com ferramentas de código com IA (Claude Code) para validar o fluxo com quem vai usar antes de o time escrever código de produção. O núcleo do Workflow nasceu assim.",
    "ai.prototype.feature.1": "Protótipo clicável em dias, não em sprints",
    "ai.prototype.feature.2": "Validação com usuário real antes da especificação",
    "ai.prototype.feature.3": "Conversa com a engenharia mais rápida e mais barata",

    "ai.measure.title": "Medir com LLMs",
    "ai.measure.desc": "Uso extratores baseados em LLM para transformar milhares de conversas em dado estruturado de produto: o que o usuário pediu, o que o agente resolveu e por que falhou.",
    "ai.measure.feature.1": "Métrica-norte de um agente de IA",
    "ai.measure.feature.2": "Motivos de falha que alimentam o roadmap",
    "ai.measure.feature.3": "Análise de coorte em SQL (Metabase)",

    "ai.agent.title": "Desenhar o comportamento do agente",
    "ai.agent.desc": "Prompts, tools, critérios de avaliação, tratamento de alucinação e passagem para o humano são decisões de produto, e eu sou dona delas.",
    "ai.agent.feature.1": "Critérios de avaliação de qualidade de resposta",
    "ai.agent.feature.2": "Regras claras de handoff IA→humano",
    "ai.agent.feature.3": "Tools ligadas aos sistemas reais do cliente (ERPs)",

    "ai.launch.title": "Lançar com código",
    "ai.launch.desc": "Vídeos de produto e materiais de enablement feitos com código a partir das telas reais do produto, para o lançamento andar no ritmo do release.",
    "ai.launch.feature.1": "Vídeos de produto a partir das telas reais",
    "ai.launch.feature.2": "Enablement para Vendas e CS",
    "ai.launch.feature.3": "Narrativa do release",

    "tools.title": "Ferramentas",
    "tools.subtitle": "O que eu uso no dia a dia",
    "tools.usage": "Para: prototipação, síntese de pesquisa, análise de dados, documentação e conteúdo de lançamento.",

    // Product Thinking
    "thinking.title": "Como eu trabalho",
    "thinking.subtitle": "Do problema ao produto que o cliente usa",

    "thinking.discovery.title": "Discovery",
    "thinking.discovery.description": "Discovery contínuo com clientes, CS, Vendas, implantação e parceiros. A dor de verdade quase nunca é a primeira que aparece.",

    "thinking.ux.title": "Experiência do usuário",
    "thinking.ux.description": "Sistemas complexos com cara de simples: linguagem de quem usa, menos atrito na operação e integrações que não exigem conhecimento técnico.",

    "thinking.strategy.title": "Estratégia de produto",
    "thinking.strategy.description": "Roadmap ligado a uma métrica-norte e prioridade definida por dado de adoção e uso, não pelo pedido mais alto.",

    "thinking.gtm.title": "Go-to-market",
    "thinking.gtm.description": "Desenvolvimento conectado ao lançamento: discovery, validação, desenvolvimento, plano de GTM, lançamento e acompanhamento de adoção, junto com CS, implantação e Vendas.",

    "thinking.methodologies.title": "Metodologias",
    "thinking.methodologies.description": "Continuous Discovery, sprints de duas semanas e entregas por projeto com escopo e data.",

    // Metrics
    "metrics.title": "Métricas",
    "metrics.subtitle": "Como eu meço impacto",
    "metrics.activation": "Resolução autônoma (IA)",
    "metrics.adoption": "Adoção e ativação",
    "metrics.efficiency": "Eficiência operacional",
    "metrics.workflow": "Uso por funcionalidade",
    "metrics.impact": "Impacto de funcionalidade",

    // About
    "about.title": "Sobre",
    "about.subtitle": "Da arquitetura ao produto",
    "about.description": "Me formei em Arquitetura e Urbanismo, comecei a carreira no mercado imobiliário e passei 4 anos na MRV, uma das maiores construtoras da América Latina, construindo plataformas internas de vendas. Desde 2025 sou Product Manager na Morada.ai: primeiro liderando o ecossistema de integrações e o construtor de automações, hoje como dona do módulo de pós-venda e do agente de IA dele. Conhecer a operação por dentro continua sendo meu melhor atalho de discovery.",
    "about.education": "Product Management · PM3 (2024) · Arquitetura e Urbanismo · UNIBH (2018–2022)",
    "about.location": "Belo Horizonte, Brasil (UTC-3)",
    "about.highlight.1": "Produto do zero (0→1)",
    "about.highlight.2": "Liderança entre times (Eng, Design, Vendas, CS)",
    "about.highlight.3": "Agentes de IA em produção",
    "about.highlight.4": "Priorização com dados",

    // Contact
    "contact.title": "Contato",
    "contact.subtitle": "Vamos conversar sobre produto, plataformas ou agentes de IA.",
    "contact.cta": "Entre em contato",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.work": "Work",
    "nav.ai": "AI in my work",
    "nav.thinking": "How I work",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Product Manager",
    "hero.subtitle": "B2B SaaS · Platforms · AI agents",
    "hero.description": "I take B2B SaaS products from a messy operational problem to something customers use every day. AI is one of the tools I build with, not the only one.",
    "hero.focus": "What I build:",
    "hero.focus.1": "0→1 products, from discovery to go-to-market",
    "hero.focus.2": "Platforms and integrations (ERP, CRM, APIs)",
    "hero.focus.3": "AI agents running in production",
    "hero.focus.4": "Automation that takes manual work out of operations",
    "hero.cta.work": "See what I've shipped",
    "hero.cta.experiments": "How I build with AI",
    "hero.stat.1.value": "< 3 months",
    "hero.stat.1.label": "from discovery to production for Workflow",
    "hero.stat.2.value": "40+",
    "hero.stat.2.label": "native integrations in the ecosystem I led",
    "hero.stat.3.value": "200+",
    "hero.stat.3.label": "enterprise customers on the platform",
    "hero.stat.4.value": "7",
    "hero.stat.4.label": "post-sales capabilities in the 2026 product release",

    // Work
    "work.title": "Selected work",
    "work.subtitle": "Products I've shipped at Morada.ai, a B2B SaaS for real estate developers in Brazil with 200+ enterprise customers across 17 states (together, over 20% of the country's new-home sales volume). And, before that, the platform I built for MRV's sales team.",
    "work.problem": "The problem",
    "work.did": "What I did",
    "work.outcome": "Outcome",
    "work.status.live": "Live",
    "work.status.beta": "In beta",
    "work.status.rolling": "Rolling out",
    "work.status.shipped": "Shipped",

    // AI
    "ai.title": "How I build with AI",
    "ai.subtitle": "AI is part of how I work every day, not only something I ship.",

    "ai.prototype.title": "Prototype before committing engineering",
    "ai.prototype.desc": "I build clickable prototypes with AI coding tools (Claude Code) to validate flows with real users before the team writes production code. Workflow's core started this way.",
    "ai.prototype.feature.1": "Clickable prototypes in days, not sprints",
    "ai.prototype.feature.2": "Validation with real users before the spec",
    "ai.prototype.feature.3": "Faster, cheaper conversations with engineering",

    "ai.measure.title": "Measure with LLMs",
    "ai.measure.desc": "I use LLM-based extractors to turn thousands of conversations into structured product data: what users asked, what the agent solved and why it failed.",
    "ai.measure.feature.1": "A north-star metric for an AI agent",
    "ai.measure.feature.2": "Failure reasons that feed the roadmap",
    "ai.measure.feature.3": "Cohort analysis in SQL (Metabase)",

    "ai.agent.title": "Design agent behavior",
    "ai.agent.desc": "Prompts, tools, evaluation criteria, hallucination handling and AI-to-human handoff are product decisions, and I own them.",
    "ai.agent.feature.1": "Response-quality evaluation criteria",
    "ai.agent.feature.2": "Clear AI-to-human handoff rules",
    "ai.agent.feature.3": "Tools wired to customers' real systems (ERPs)",

    "ai.launch.title": "Launch with code",
    "ai.launch.desc": "Product videos and enablement built with code from the real product screens, so launches keep pace with the release.",
    "ai.launch.feature.1": "Product videos from real screens",
    "ai.launch.feature.2": "Enablement for Sales and CS",
    "ai.launch.feature.3": "Release narrative",

    "tools.title": "Tools",
    "tools.subtitle": "What I use day to day",
    "tools.usage": "For: prototyping, research synthesis, data analysis, documentation and launch content.",

    // Product Thinking
    "thinking.title": "How I work",
    "thinking.subtitle": "From the problem to a product customers use",

    "thinking.discovery.title": "Discovery",
    "thinking.discovery.description": "Continuous discovery with customers, CS, Sales, implementation and partners. The real pain is rarely the first one that shows up.",

    "thinking.ux.title": "User experience",
    "thinking.ux.description": "Complex systems that feel simple: the user's own language, less friction in operations and integrations that don't require technical knowledge.",

    "thinking.strategy.title": "Product strategy",
    "thinking.strategy.description": "Roadmaps tied to a north-star metric, with priorities set by adoption and usage data, not by the loudest request.",

    "thinking.gtm.title": "Go-to-market",
    "thinking.gtm.description": "Building connected to launching: discovery, validation, development, GTM planning, launch and adoption tracking, together with CS, implementation and Sales.",

    "thinking.methodologies.title": "Methodologies",
    "thinking.methodologies.description": "Continuous Discovery, two-week sprints and project-based delivery with clear scope and dates.",

    // Metrics
    "metrics.title": "Metrics",
    "metrics.subtitle": "How I measure impact",
    "metrics.activation": "Autonomous resolution (AI)",
    "metrics.adoption": "Adoption and activation",
    "metrics.efficiency": "Operational efficiency",
    "metrics.workflow": "Usage by feature",
    "metrics.impact": "Feature impact",

    // About
    "about.title": "About",
    "about.subtitle": "From architecture to product",
    "about.description": "I studied Architecture and Urbanism, started my career in real estate and spent 4 years at MRV, one of Latin America's largest homebuilders, building internal sales platforms. Since 2025 I've been a Product Manager at Morada.ai: first leading the integrations ecosystem and the automation builder, now owning the post-sales module and its AI agent. Knowing the operation from the inside is still my favorite discovery shortcut.",
    "about.education": "Product Management · PM3 (2024) · B.Arch. in Architecture and Urbanism · UNIBH (2018–2022)",
    "about.location": "Belo Horizonte, Brazil (UTC-3)",
    "about.highlight.1": "0→1 product building",
    "about.highlight.2": "Cross-team leadership (Eng, Design, Sales, CS)",
    "about.highlight.3": "AI agents in production",
    "about.highlight.4": "Data-informed prioritization",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Let's talk about product, platforms or AI agents.",
    "contact.cta": "Get in touch",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.pt] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
