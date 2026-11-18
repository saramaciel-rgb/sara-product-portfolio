export type CaseStatus = "live" | "beta" | "rolling" | "shipped"

type Bilingual = { en: string; pt: string }
type BilingualList = { en: string[]; pt: string[] }

export interface ProductCase {
  id: string
  title: Bilingual
  meta: Bilingual
  status: CaseStatus
  problem: Bilingual
  did: BilingualList
  outcome: BilingualList
  tags: string[]
}

export const cases: ProductCase[] = [
  {
    id: "workflow",
    title: {
      en: "Workflow: visual automation builder",
      pt: "Workflow: construtor visual de automações",
    },
    meta: { en: "Morada.ai · 2025–2026 · 0→1", pt: "Morada.ai · 2025–2026 · 0→1" },
    status: "live",
    problem: {
      en: "Every customer-specific automation (follow-ups, CRM stage moves, payment reminders) depended on engineering. Custom work piled up and didn't scale.",
      pt: "Toda automação específica de cliente (reabordagem, mudança de etapa no CRM, lembrete de pagamento) dependia de engenharia. A customização acumulava e não escalava.",
    },
    did: {
      en: [
        "Grounded the MVP in 7 real customer cases before writing the spec",
        "Prototyped the core with AI before committing engineering time, then rebuilt it with the team",
        "Designed for non-technical users: plain-language steps like “Analyze with AI”, “Conditional” and “Receive HTTP”",
        "Rolled out behind a feature flag, with trainings and hands-on sessions for CS and implementation",
      ],
      pt: [
        "Fundamentei o MVP em 7 casos reais de clientes antes de escrever a especificação",
        "Prototipei o núcleo com IA antes de comprometer a engenharia e depois reconstruí com o time",
        "Desenhei para quem não é técnico: etapas em linguagem simples, como “Analisar com IA”, “Condicional” e “Receber HTTP”",
        "Liberei por feature flag, com treinamentos e hands-on para CS e implantação",
      ],
    },
    outcome: {
      en: [
        "From discovery to production in under 3 months (live in July 2026)",
        "15 triggers, 16 actions, conditionals, an AI analysis step and webhooks",
        "First customer flow live about 2 weeks after launch",
        "Became a paid add-on",
      ],
      pt: [
        "Do discovery à produção em menos de 3 meses (no ar desde julho de 2026)",
        "15 gatilhos, 16 ações, condicionais, etapa de análise com IA e webhooks",
        "Primeiro fluxo de cliente rodando cerca de 2 semanas depois do lançamento",
        "Virou um add-on pago",
      ],
    },
    tags: ["0→1", "Automation", "No-code", "AI"],
  },
  {
    id: "ai-agent",
    title: {
      en: "Post-sales module: from an agent's name to a real product",
      pt: "Módulo de pós-venda: de um nome de agente a um produto de verdade",
    },
    meta: { en: "Morada.ai · 2026 · Strategy + AI in production", pt: "Morada.ai · 2026 · Estratégia + IA em produção" },
    status: "live",
    problem: {
      en: "When I took over, “post-sales” was little more than the name of an AI agent: no clear strategy, no roadmap, no metric. Meanwhile homebuilders' post-sales teams answered the same requests all day (payment slips, financing, construction updates, repairs).",
      pt: "Quando assumi, o “pós-venda” era pouco mais que o nome de um agente de IA: sem estratégia clara, sem roadmap, sem métrica. Enquanto isso, o time de pós-venda das incorporadoras respondia os mesmos pedidos o dia inteiro (boleto, financiamento, andamento de obra, assistência técnica).",
    },
    did: {
      en: [
        "Rebuilt the strategy from scratch: one quarter of discovery with customers, CS and Sales to find what post-sales really needed",
        "Rebuilt the module around it: from a single agent to a product with 4 tracks, each with its own roadmap",
        "Owned agent behavior: prompts and tools, response-quality evaluation, hallucination handling and AI-to-human handoff",
        "Defined the north-star metric (autonomous resolution) and measured it using the company’s LLM extraction service over ~100k conversations, with a strict rule: it only counts as solved by AI if no human touched it",
      ],
      pt: [
        "Reconstruí a estratégia do zero: um trimestre de discovery com clientes, CS e Vendas para entender o que o pós-venda precisava de fato",
        "Refiz o módulo em cima disso: de um agente isolado para um produto com 4 frentes, cada uma com roadmap próprio",
        "Decisões de comportamento do agente: prompts e tools, avaliação de qualidade de resposta, tratamento de alucinação e handoff IA→humano",
        "Defini a métrica-norte (resolução autônoma) e medimos com o serviço de extração por LLM da empresa sobre ~100 mil conversas, com regra rígida: só conta como resolvida pela IA se nenhum humano tocou nela",
      ],
    },
    outcome: {
      en: [
        "Post-sales became a product module with strategy, roadmap and a north-star metric",
        "AI agent integrated with 8 ERPs used across the industry",
        "The metric became the basis for roadmap prioritization",
        "The new strategy led to the 2026 post-sales release (next card)",
      ],
      pt: [
        "O pós-venda virou um módulo de produto, com estratégia, roadmap e métrica-norte",
        "Agente de IA integrado a 8 ERPs do setor",
        "A métrica virou a base de priorização do roadmap",
        "A nova estratégia gerou o release de pós-venda de 2026 (próximo card)",
      ],
    },
    tags: ["Product strategy", "0→1", "LLM", "AI agents", "Evals"],
  },
  {
    id: "post-sales-suite",
    title: {
      en: "Post-sales suite: 2026 product release",
      pt: "Suíte de pós-venda: release de produto 2026",
    },
    meta: { en: "Morada.ai · Nov 2026 · Module roadmap", pt: "Morada.ai · nov 2026 · Roadmap do módulo" },
    status: "live",
    problem: {
      en: "Even with the AI agent, post-sales teams still ran on manual messages, spreadsheets and screenshots to schedule visits, track requests and reach buyers.",
      pt: "Mesmo com o agente de IA, o time de pós-venda ainda vivia de mensagem manual, planilha e print para agendar visitas, acompanhar solicitações e falar com o comprador.",
    },
    did: {
      en: [
        "Turned discovery into the module roadmap and led the launch of 7 capabilities at Morada's live product release",
        "AI scheduling: the agent books inspections, key handovers and technical visits from the team's real availability, then runs a satisfaction survey",
        "Service requests, a 360° contact page, SMS, message templates and calls",
        "Wrote the launch narrative and the enablement for Sales and CS",
      ],
      pt: [
        "Transformei o discovery no roadmap do módulo e conduzi o lançamento de 7 funcionalidades na live de release da Morada",
        "Agendamento com IA: o agente marca vistoria, entrega de chaves e visita técnica pela agenda real do time e depois faz a pesquisa de satisfação",
        "Solicitações, página de contato 360°, SMS, modelos de mensagem e ligações",
        "Escrevi a narrativa do lançamento e o enablement para Vendas e CS",
      ],
    },
    outcome: {
      en: [
        "All 7 capabilities launched and live",
        "Post-sales went from a single AI agent to a full suite for the team that serves buyers",
      ],
      pt: [
        "As 7 funcionalidades lançadas e no ar",
        "O pós-venda passou de um agente de IA isolado para uma suíte completa para o time que atende o comprador",
      ],
    },
    tags: ["0→1", "AI", "Go-to-market"],
  },
  {
    id: "integrations",
    title: {
      en: "Integrations ecosystem & hub",
      pt: "Ecossistema e hub de integrações",
    },
    meta: { en: "Morada.ai · 2025–2026 · Platform", pt: "Morada.ai · 2025–2026 · Plataforma" },
    status: "live",
    problem: {
      en: "Integrations with ERPs and CRMs are the platform's main competitive advantage, but Sales, CS and customers couldn't easily tell what each one actually did. That became wrong promises and support tickets.",
      pt: "As integrações com ERPs e CRMs são a principal vantagem competitiva da plataforma, mas Vendas, CS e clientes não conseguiam ver o que cada uma de fato fazia. Isso virava promessa errada e chamado no suporte.",
    },
    did: {
      en: [
        "Led the native integrations ecosystem with the industry's ERPs and CRMs (Sienge, UAU, CV, Mega, Salesforce, Pipedrive, HubSpot)",
        "Expanded the range of integrated systems, hands-on in each one: mapping what customers needed from the integration and building it with engineering",
        "Defined the squad's sprint model and prioritization, balancing enterprise customization and scalability",
        "Led the redesign of the integrations hub: what each integration does (and doesn't) per AI agent, credential testing, events and logs",
      ],
      pt: [
        "Liderei o ecossistema de integrações nativas com ERPs e CRMs do setor (Sienge, UAU, CV, Mega, Salesforce, Pipedrive, HubSpot)",
        "Ampliei o leque de sistemas integrados, participando ativamente de cada um: mapeando o que o cliente precisava da integração e construindo junto com a engenharia",
        "Defini o modelo de sprint e a priorização da squad, equilibrando customização enterprise e escalabilidade",
        "Liderei o redesenho do hub de integrações: o que cada integração faz (e não faz) por agente de IA, teste de credenciais, eventos e logs",
      ],
    },
    outcome: {
      en: [
        "40+ native integrations in the catalog, with a wider range of integrated systems",
        "One place for Sales and CS to check what each integration does",
        "Rolled out in stages behind feature flags",
      ],
      pt: [
        "Mais de 40 integrações nativas no catálogo, com um leque maior de sistemas integrados",
        "Um lugar só para Vendas e CS conferirem o que cada integração faz",
        "Liberação em etapas, por feature flag",
      ],
    },
    tags: ["Platform", "APIs", "ERP / CRM"],
  },
  {
    id: "dashboard",
    title: {
      en: "Adoption: dashboard and customer recovery",
      pt: "Adoção: dashboard e recuperação de clientes",
    },
    meta: { en: "Morada.ai · 2026 · Data", pt: "Morada.ai · 2026 · Dados" },
    status: "live",
    problem: {
      en: "The #1 pain from discovery was invisibility: customers and leadership couldn't see what the AI agent was doing for them. Some customers weren't using what they already paid for.",
      pt: "A dor nº 1 do discovery era a invisibilidade: cliente e liderança não enxergavam o que o agente de IA fazia por eles. E parte dos clientes não usava o que já tinha contratado.",
    },
    did: {
      en: [
        "Defined the metrics and the data dictionary with the data team, and shipped a self-service adoption dashboard",
        "Went customer by customer with the data, showing those who weren't using the product how much they were losing in money and hours",
      ],
      pt: [
        "Defini as métricas e o dicionário de dados com o time de Dados e coloquei no ar um dashboard de adoção self-service",
        "Fui cliente a cliente com os dados, mostrando a quem não usava o produto quanto estava perdendo em dinheiro e em horas",
      ],
    },
    outcome: {
      en: [
        "Customers who had stopped using it came back and restructured their operations around the product",
        "The dashboard became the basis for Product, CS and leadership to prioritize",
      ],
      pt: [
        "Clientes que tinham parado voltaram a usar e reestruturaram a operação em torno do produto",
        "O dashboard virou a base de priorização de Produto, CS e liderança",
      ],
    },
    tags: ["Analytics", "Adoption", "Customer success", "Metabase"],
  },
  {
    id: "mrv",
    title: {
      en: "A platform built for the sales team",
      pt: "Uma plataforma criada para o time de vendas",
    },
    meta: { en: "MRV · 2021–2025 · Internal product", pt: "MRV · 2021–2025 · Produto interno" },
    status: "shipped",
    problem: {
      en: "The sales team at one of Latin America's largest homebuilders needed a clear view of sales data to act on what each buyer needed, and the business areas needed that view to match how they actually worked.",
      pt: "O time comercial de uma das maiores construtoras da América Latina precisava de uma visão clara dos dados de venda para agir sobre o que cada comprador precisava, e as áreas de negócio precisavam que essa visão batesse com a forma como elas trabalhavam.",
    },
    did: {
      en: [
        "Started from the needs, not the screens: gathered what the salespeople (the users) and the business areas (the internal clients) actually needed, and turned it into requirements",
        "Developed and managed the internal sales-visualization platform, connecting the sales team to what end customers needed",
        "Prioritized each evolution by real usage, not by who asked the loudest",
        "Managed internal and external projects, from scope and requirements to delivery, with business areas and stakeholders",
      ],
      pt: [
        "Comecei pelas necessidades, não pelas telas: levantei o que os vendedores (os usuários) e as áreas de negócio (os clientes internos) precisavam de fato e transformei em requisitos",
        "Desenvolvi e geri a plataforma interna de visualização de vendas, conectando o time comercial ao que o cliente final precisava",
        "Priorizei cada evolução pelo uso real, não por quem pedia mais alto",
        "Gerenciei projetos internos e externos, do escopo e dos requisitos à entrega, com as áreas de negócio e stakeholders",
      ],
    },
    outcome: {
      en: [
        "A platform shaped by the people who used it every day",
        "Learned the real estate operation from the inside, which still shapes how I run discovery today",
      ],
      pt: [
        "Uma plataforma moldada por quem usava todo dia",
        "Conheci a operação imobiliária por dentro, e isso ainda molda como eu faço discovery hoje",
      ],
    },
    tags: ["Internal product", "User needs", "Requirements", "Sales"],
  },
]
