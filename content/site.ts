// All copy for the redesigned sections, in both languages.
// Facts come from Sara's own records (LinkedIn, internal studies, release notes).
// Numbers marked "internal" were cleared by Sara before publishing.

export type Lang = "en" | "pt"
export type B = { en: string; pt: string }
export type BL = { en: string[]; pt: string[] }

export const nav = [
  { href: "#work", label: { en: "Work", pt: "Trabalho" } },
  { href: "#workflow", label: { en: "Workflow", pt: "Workflow" } },
  { href: "#ai", label: { en: "AI", pt: "IA" } },
  { href: "#teaching", label: { en: "Teaching", pt: "Comunicação" } },
  { href: "#about", label: { en: "About", pt: "Sobre" } },
]

export const resume = {
  en: { href: "/Sara-Maciel-Resume-EN.pdf", label: "Download resume" },
  pt: { href: "/Sara-Maciel-Curriculo-PT.pdf", label: "Baixar currículo" },
}

export const hero = {
  role: { en: "Product Manager, B2B SaaS", pt: "Product Manager, B2B SaaS" },
  title: {
    en: "I build products that make operations simpler and more efficient.",
    pt: "Construo produtos que deixam a operação mais simples e eficiente.",
  },
  lead: {
    en: "PM at Morada.ai, a B2B SaaS used by 200+ real estate developers in Brazil. I build automation, integrations and AI agents, and I take them all the way from discovery to the sales pitch.",
    pt: "PM na Morada.ai, um B2B SaaS usado por mais de 200 incorporadoras no Brasil. Construo automação, integrações e agentes de IA, e levo cada um do discovery até o discurso de venda.",
  },
  ctaWork: { en: "See the work", pt: "Ver o trabalho" },
  status: { en: "Open to remote roles", pt: "Aberta a vagas remotas" },
  place: { en: "Belo Horizonte, Brazil (UTC-3)", pt: "Belo Horizonte, MG (UTC-3)" },
  proofHint: { en: "Open case", pt: "Abrir case" },
  proof: [
    { value: { en: "< 3 months", pt: "< 3 meses" }, label: { en: "from discovery to production for Workflow, an automation builder", pt: "do discovery à produção do Workflow, construtor de automações" }, href: "#workflow" },
    { value: { en: "40+", pt: "40+" }, label: { en: "native ERP and CRM integrations in the ecosystem I led", pt: "integrações nativas com ERPs e CRMs no ecossistema que liderei" }, href: "#case-integrations" },
    { value: { en: "~100k", pt: "~100 mil" }, label: { en: "AI conversations measured with an LLM extraction service to track the north-star metric", pt: "conversas de IA medidas com um serviço de extração por LLM para acompanhar a métrica-norte" }, href: "#case-ai-agent" },
    { value: { en: "7", pt: "7" }, label: { en: "post-sales capabilities launched and live in the 2026 release", pt: "funcionalidades de pós-venda lançadas e no ar no release 2026" }, href: "#case-post-sales-suite" },
  ],
}

/* ---------------- Workflow (featured) ---------------- */

export const workflow = {
  kicker: { en: "Featured case", pt: "Case em destaque" },
  title: { en: "Workflow: automation without an engineering ticket", pt: "Workflow: automação sem ticket para a engenharia" },
  lead: {
    en: "Every customer-specific rule used to become custom code. I took a visual automation builder from discovery to production in under 3 months, and turned that custom work into a product the company sells.",
    pt: "Toda regra específica de cliente virava código sob medida. Levei um construtor visual de automações do discovery à produção em menos de 3 meses e transformei esse trabalho sob medida em um produto que a empresa vende.",
  },
  beforeLabel: { en: "Before", pt: "Antes" },
  afterLabel: { en: "After", pt: "Depois" },
  before: {
    en: ["Customer asks for a rule", "Ticket goes to engineering", "Custom code for one customer", "Weeks later, repeat for the next one"],
    pt: ["Cliente pede uma regra", "Ticket vai para a engenharia", "Código sob medida para um cliente", "Semanas depois, repete para o próximo"],
  },
  after: {
    en: ["Customer asks for a rule", "The team builds it in the visual editor", "Live the same week", "Reused as a template for other customers"],
    pt: ["Cliente pede uma regra", "O time monta no editor visual", "No ar na mesma semana", "Vira modelo para outros clientes"],
  },
  editorTitle: { en: "Try it: a billing reminder, step by step", pt: "Experimente: uma régua de cobrança, passo a passo" },
  editorHint: { en: "Click a step to see the product decision behind it.", pt: "Clique numa etapa para ver a decisão de produto por trás." },
  illustrative: { en: "Illustrative. Real data hidden.", pt: "Ilustrativo. Dados reais ocultos." },
  decisionLabel: { en: "Product decision", pt: "Decisão de produto" },
  nodes: [
    {
      id: "trigger", kind: "trigger",
      name: { en: "Payment slip registered", pt: "Boleto registrado" },
      sub: { en: "Trigger from the customer's ERP", pt: "Gatilho vindo do ERP do cliente" },
      decision: {
        en: "Start from events the customer's ERP already sends, so a new automation needs no new integration work.",
        pt: "Partir de eventos que o ERP do cliente já envia, para que uma automação nova não exija trabalho novo de integração.",
      },
    },
    {
      id: "wait", kind: "utility",
      name: { en: "Wait until 5 days before due date", pt: "Aguardar até 5 dias antes do vencimento" },
      sub: { en: "Time-based step", pt: "Etapa de tempo" },
      decision: {
        en: "Waits can read dates from the data itself, so one flow serves every installment instead of one flow per date.",
        pt: "A espera lê a data do próprio dado, então um fluxo atende todas as parcelas em vez de um fluxo por data.",
      },
    },
    {
      id: "send", kind: "action",
      name: { en: "Send WhatsApp message", pt: "Enviar mensagem no WhatsApp" },
      sub: { en: "Approved template, from the AI agent's number", pt: "Modelo aprovado, no número do agente de IA" },
      decision: {
        en: "Messages go out from the same number as the AI agent, so the buyer’s reply lands in the same conversation instead of a new channel.",
        pt: "A mensagem sai do mesmo número do agente de IA, então a resposta do comprador cai na mesma conversa, e não num canal novo.",
      },
    },
    {
      id: "ai", kind: "ai",
      name: { en: "Analyze with AI", pt: "Analisar com IA" },
      sub: { en: "Did the buyer say they already paid?", pt: "O comprador disse que já pagou?" },
      decision: {
        en: "One plain-language prompt instead of a technical setup. Steps are named for what they do, so CS and implementation can build flows without engineering.",
        pt: "Um único prompt em linguagem simples em vez de configuração técnica. As etapas têm nome do que fazem, para CS e implantação montarem fluxos sem engenharia.",
      },
    },
    {
      id: "branch", kind: "utility",
      name: { en: "Conditional", pt: "Condicional" },
      sub: { en: "Paid or needs help?", pt: "Pagou ou precisa de ajuda?" },
      decision: {
        en: "Branches read like a sentence. In a UX simplification round before launch, I renamed technical steps into plain language.",
        pt: "Os desvios se leem como uma frase. Numa rodada de simplificação de UX antes do lançamento, troquei nomes técnicos por linguagem simples.",
      },
    },
    {
      id: "handoff", kind: "action",
      name: { en: "Assign to finance team", pt: "Atribuir ao time financeiro" },
      sub: { en: "Only the cases that need a person", pt: "Só os casos que precisam de uma pessoa" },
      decision: {
        en: "Automation handles the routine and hands people only the exceptions.",
        pt: "A automação cuida da rotina e entrega às pessoas só as exceções.",
      },
    },
  ],
  resultsTitle: { en: "What changed", pt: "O que mudou" },
  results: [
    { value: { en: "< 3 months", pt: "< 3 meses" }, label: { en: "from discovery to production, grounded in 7 real customer cases", pt: "do discovery à produção, a partir de 7 casos reais de clientes" } },
    { value: { en: "~2 weeks", pt: "~2 semanas" }, label: { en: "from launch to the first customer flow running", pt: "do lançamento ao primeiro fluxo de cliente rodando" } },
    { value: { en: "65", pt: "65" }, label: { en: "automations created in the first 78 days", pt: "automações criadas nos primeiros 78 dias" } },
    { value: { en: "14 + 19", pt: "14 + 19" }, label: { en: "triggers and actions, including AI, SMS, calls and webhooks", pt: "gatilhos e ações, incluindo IA, SMS, ligação e webhooks" } },
  ],
  changes: {
    en: [
      "Customer-specific rules stopped being engineering tickets: flows are built in the editor and reused as templates.",
      "It became a paid add-on and a sales argument: sold with the post-sales AI agent, including a 24-month contract with a plan upgrade closed on an automated billing reminder.",
      "Customers now run it in production for billing reminders, lost-deal recovery and CRM updates.",
      "I trained Sales, CS, Implementation and Engineering, with one learning track per team in the company academy.",
    ],
    pt: [
      "Regra específica de cliente deixou de ser ticket de engenharia: os fluxos são montados no editor e reaproveitados como modelo.",
      "Virou add-on pago e argumento de venda: vendido junto com o agente de IA de pós-venda, incluindo um contrato de 24 meses com upgrade de plano fechado em cima de uma régua de cobrança automática.",
      "Clientes rodam em produção régua de cobrança, recuperação de negócio perdido e atualização de CRM.",
      "Treinei Vendas, CS, Implantação e Engenharia, com uma trilha por time na academia da empresa.",
    ],
  },
}

/* ---------------- Work section ---------------- */

export const work = {
  title: { en: "Selected work", pt: "Trabalho selecionado" },
  lead: {
    en: "Products I shipped at Morada.ai, and before that the platform I built for MRV's sales team. Pick one to see the problem, what I did and what changed.",
    pt: "Produtos que coloquei no ar na Morada.ai e, antes disso, a plataforma que criei para o time de vendas da MRV. Escolha um para ver o problema, o que eu fiz e o que mudou.",
  },
  problem: { en: "The problem", pt: "O problema" },
  did: { en: "What I did", pt: "O que eu fiz" },
  outcome: { en: "What changed", pt: "O que mudou" },
  status: {
    live: { en: "Live", pt: "No ar" },
    beta: { en: "In beta", pt: "Em beta" },
    rolling: { en: "Rolling out", pt: "Em liberação" },
    shipped: { en: "Shipped", pt: "Entregue" },
  },
}

/* ---------------- AI in my work ---------------- */

export const ai = {
  title: { en: "AI across the whole product cycle", pt: "IA em todo o ciclo de produto" },
  lead: {
    en: "AI isn't a side experiment for me. I use it to understand customers, validate before engineering commits, build, test, launch and teach. Here is what that looks like in practice.",
    pt: "IA não é experimento paralelo para mim. Uso para entender o cliente, validar antes de a engenharia se comprometer, construir, testar, lançar e ensinar. Na prática, é assim:",
  },
  tools: { en: "Tools I use daily", pt: "Ferramentas do dia a dia" },
  toolList: ["Claude Code", "Claude", "ChatGPT", "Gemini", "NotebookLM", "MCP servers", "Metabase", "PostHog", "Linear"],
  stages: [
    {
      id: "discover",
      name: { en: "Discover", pt: "Descobrir" },
      items: [
        { t: { en: "A north-star metric measured by an LLM", pt: "Métrica-norte medida por um LLM" }, d: { en: "Used the company’s LLM extraction service over ~100k agent conversations to measure, with a strict rule, which ones the AI really solved.", pt: "Usamos o serviço de extração por LLM da empresa sobre ~100 mil conversas do agente para medir, com regra rígida, quais a IA resolveu de fato." } },
        { t: { en: "What the best customers do differently", pt: "O que os melhores clientes fazem diferente" }, d: { en: "Analyzed ~3k conversations to find the setup behind top performers, and turned it into the onboarding standard.", pt: "Analisei ~3 mil conversas para achar a configuração por trás dos melhores resultados e transformei em padrão de onboarding." } },
        { t: { en: "Adoption studies at scale", pt: "Estudos de adoção em escala" }, d: { en: "Ran parallel AI agents over ~290 workspaces and ~200 contracts to see who pays, who uses and where people get stuck.", pt: "Rodei agentes de IA em paralelo sobre ~290 workspaces e ~200 contratos para ver quem paga, quem usa e onde as pessoas travam." } },
      ],
    },
    {
      id: "validate",
      name: { en: "Prototype and validate", pt: "Prototipar e validar" },
      items: [
        { t: { en: "Prototypes before engineering commits", pt: "Protótipo antes de comprometer a engenharia" }, d: { en: "Prototyped the Workflow core with AI, and used clickable prototypes of new features to align design and engineering before building.", pt: "Prototipei o núcleo do Workflow com IA e usei protótipos clicáveis das novas funcionalidades para alinhar design e engenharia antes de construir." } },
        { t: { en: "MVPs validated in production, not just on screen", pt: "MVP validado em produção, não só na tela" }, d: { en: "Took MVPs to real customers early: the first automation flow ran with a customer about 2 weeks after launch.", pt: "Levei MVPs a clientes reais cedo: o primeiro fluxo de automação rodou com cliente cerca de 2 semanas após o lançamento." } },
        { t: { en: "Pilots with a clear hypothesis", pt: "Pilotos com hipótese clara" }, d: { en: "Ran pilots like the automated billing reminder with one customer before scaling it to the base.", pt: "Rodei pilotos como a régua de cobrança automática com um cliente antes de escalar para a base." } },
      ],
    },
    {
      id: "build",
      name: { en: "Build", pt: "Construir" },
      items: [
        { t: { en: "Hands-on ERP integration", pt: "Integração com ERP na mão" }, d: { en: "Took part hands-on in building ERP integrations with AI coding tools: reading the APIs, designing the flow and testing.", pt: "Participei hands-on da construção de integrações com ERP com ferramentas de código com IA: lendo as APIs, desenhando o fluxo e testando." } },
        { t: { en: "Automations in the product", pt: "Automações no produto" }, d: { en: "One of the two people who built the most automations in Workflow's first months, using my own product the way customers would.", pt: "Uma das duas pessoas que mais montaram automações nos primeiros meses do Workflow, usando o produto como o cliente usaria." } },
        { t: { en: "Product setup through MCP", pt: "Configuração do produto via MCP" }, d: { en: "Configured in-app product tours through MCP servers instead of clicking through them by hand.", pt: "Configurei tours dentro do produto via servidores MCP, em vez de montar clicando à mão." } },
      ],
    },
    {
      id: "test",
      name: { en: "Test", pt: "Testar" },
      items: [
        { t: { en: "Agent behavior on real conversations", pt: "Comportamento do agente em conversas reais" }, d: { en: "Tested the agent before and after each change: right answers, hallucinations, when it hands off to a person.", pt: "Testei o agente antes e depois de cada mudança: resposta certa, alucinação, quando passa para uma pessoa." } },
        { t: { en: "End-to-end validation before release", pt: "Validação de ponta a ponta antes do release" }, d: { en: "Validated features in staging and production with real flows, not just the happy path.", pt: "Validei funcionalidades em staging e produção com fluxos reais, não só o caminho feliz." } },
        { t: { en: "Independent AI reviews", pt: "Revisão independente com IA" }, d: { en: "Used separate AI reviewers to check materials and videos for wrong facts before anything reached customers.", pt: "Usei revisores de IA separados para conferir materiais e vídeos atrás de fato errado antes de chegar ao cliente." } },
      ],
    },
    {
      id: "launch",
      name: { en: "Launch", pt: "Lançar" },
      items: [
        { t: { en: "Product videos made with code", pt: "Vídeos de produto feitos com código" }, d: { en: "Produced 7 product videos for the 2026 release with a code-based video pipeline, from script to final cut.", pt: "Produzi 7 vídeos de produto para o release 2026 com um pipeline de vídeo em código, do roteiro ao corte final." } },
        { t: { en: "Materials for every audience", pt: "Material para cada público" }, d: { en: "Interactive guides, PDFs and decks for Sales, CS and customers, one per feature.", pt: "Guias interativos, PDFs e decks para Vendas, CS e clientes, um por funcionalidade." } },
        { t: { en: "One source of truth for product facts", pt: "Uma fonte da verdade para os fatos do produto" }, d: { en: "Created a single fact base that every material derives from, after finding decks that contradicted each other.", pt: "Criei uma base única de fatos de onde todo material deriva, depois de achar decks que se contradiziam." } },
      ],
    },
    {
      id: "scale",
      name: { en: "Scale the team", pt: "Escalar o time" },
      items: [
        { t: { en: "Skills for the company's AI assistant", pt: "Skills para o assistente de IA da empresa" }, d: { en: "Wrote the Automations skill and an onboarding-mapping skill that CS uses with customers.", pt: "Escrevi a skill de Automações e uma skill de mapeamento de onboarding que o CS usa com clientes." } },
        { t: { en: "Skills for product and developers", pt: "Skills para produto e para devs" }, d: { en: "Built reusable skills for product work and for developers, so the team gets the same quality without starting from zero.", pt: "Criei skills reutilizáveis para o trabalho de produto e para desenvolvedores, para o time ter a mesma qualidade sem começar do zero." } },
        { t: { en: "Implementation that scales", pt: "Implantação que escala" }, d: { en: "Turned what worked in the best implementations into a guided standard that implementation and CS follow.", pt: "Transformei o que funcionou nas melhores implantações em um padrão guiado que Implantação e CS seguem." } },
      ],
    },
  ],
}

/* ---------------- Teaching & communication ---------------- */

export const teaching = {
  title: { en: "I teach what I build", pt: "Eu ensino o que eu construo" },
  lead: {
    en: "A product only works when people know how to sell it, set it up and use it. I train every team that touches what I ship, and I explain it outside the company too.",
    pt: "Produto só funciona quando as pessoas sabem vender, configurar e usar. Treino todo time que encosta no que eu entrego, e explico também fora da empresa.",
  },
  pick: { en: "Pick an audience", pt: "Escolha um público" },
  audiences: [
    {
      id: "eng", name: { en: "Engineering", pt: "Engenharia" },
      items: {
        en: ["Discovery and body-language workshop for the tech team: how to interview users when you're shy", "Engineering track for Workflow in the company academy, with a final technical assessment", "Specs and docs that start from the user's problem, not from the screen"],
        pt: ["Workshop de discovery e linguagem corporal para o time de tech: como entrevistar usuário sendo tímido", "Trilha de Engenharia do Workflow na academia da empresa, com avaliação técnica final", "Specs e docs que começam pelo problema do usuário, não pela tela"],
      },
    },
    {
      id: "cs", name: { en: "CS and Implementation", pt: "CS e Implantação" },
      items: {
        en: ["Workflow training, hands-on sessions and office hours before release", "Onboarding training for the post-sales AI agent, with practice on real scenarios", "A guided implementation standard and a cheat sheet for customer meetings"],
        pt: ["Treinamento, hands-on e plantões do Workflow antes do release", "Treinamento de onboarding do agente de IA de pós-venda, com prática em cenários reais", "Padrão guiado de implantação e cola para reunião com cliente"],
      },
    },
    {
      id: "sales", name: { en: "Sales", pt: "Vendas" },
      items: {
        en: ["Sales training for each new product, focused on how to sell, not on buttons", "One enablement PDF and one learning track per feature", "Joined sales calls as the product voice: closing improved when product was in the room"],
        pt: ["Treinamento de Vendas a cada produto novo, focado em como vender, não em botão", "Um PDF de enablement e uma trilha por funcionalidade", "Entrei em reuniões de venda como voz de produto: o fechamento melhorava quando produto estava na sala"],
      },
    },
    {
      id: "customers", name: { en: "Customers", pt: "Clientes" },
      items: {
        en: ["Open webinar for the customer base on WhatsApp's username change and what it meant for their CRMs", "Tutorial videos and interactive how-to guides", "Data-driven conversations that brought inactive customers back"],
        pt: ["Webinar aberto para a base sobre a mudança de username do WhatsApp e o impacto nos CRMs", "Vídeos tutoriais e guias interativos de como usar", "Conversas com dados que trouxeram clientes inativos de volta"],
      },
    },
    {
      id: "leadership", name: { en: "Leadership", pt: "Liderança" },
      items: {
        en: ["Quarterly retrospective built on data: what shipped, what slipped and why", "Product review decks and short weekly updates: fact, decision, date", "Structured decision briefs that unblocked a partner conflict stopping sales"],
        pt: ["Retrospectiva trimestral com dados: o que saiu, o que atrasou e por quê", "Decks de product review e update semanal curto: fato, decisão, data", "Briefings estruturados com pedido de decisão que destravaram um conflito com parceiro que barrava vendas"],
      },
    },
    {
      id: "market", name: { en: "Market", pt: "Mercado" },
      items: {
        en: ["Presented the post-sales module live at the company's 2026 product release", "Launch videos and a teaser for the release", "Product content on LinkedIn, in Portuguese and English"],
        pt: ["Apresentei o módulo de pós-venda ao vivo no release de produto 2026 da empresa", "Vídeos de lançamento e um teaser para o release", "Conteúdo de produto no LinkedIn, em português e inglês"],
      },
    },
  ],
}

/* ---------------- How I work ---------------- */

export const principles = {
  title: { en: "How I work", pt: "Como eu trabalho" },
  items: [
    { t: { en: "The real pain is rarely the first one", pt: "A dor real quase nunca é a primeira" }, d: { en: "Continuous discovery with customers, CS and Sales before anything gets a spec.", pt: "Discovery contínuo com clientes, CS e Vendas antes de qualquer coisa virar especificação." } },
    { t: { en: "Validate before engineering commits", pt: "Validar antes de comprometer a engenharia" }, d: { en: "Prototype with AI, test with the people who will use it, then build.", pt: "Prototipar com IA, testar com quem vai usar, depois construir." } },
    { t: { en: "Shipped isn't done", pt: "Entregue não é pronto" }, d: { en: "I own adoption too: training, materials and the data that shows who is getting value.", pt: "Adoção também é minha: treinamento, material e o dado que mostra quem está tendo valor." } },
    { t: { en: "Data with context", pt: "Dado com contexto" }, d: { en: "I decide with data, read in the context of the operation: numbers without context lead to the wrong roadmap.", pt: "Decido com dados, lidos no contexto da operação: número sem contexto leva ao roadmap errado." } },
  ],
}

/* ---------------- About ---------------- */

export const about = {
  title: { en: "From architecture to product", pt: "Da arquitetura ao produto" },
  body: {
    en: "I trained as an architect, where every project starts with what the client wants and what the people who'll use the space need. I brought that habit to real estate tech: 4 years at MRV, one of Latin America's largest homebuilders, building the platform its sales team used, and then Morada.ai, where I've led integrations, automation and the post-sales AI agent.",
    pt: "Me formei em arquitetura, onde todo projeto começa pelo que o cliente quer e pelo que precisam as pessoas que vão usar o espaço. Levei esse hábito para a tecnologia do mercado imobiliário: 4 anos na MRV, uma das maiores construtoras da América Latina, criando a plataforma do time de vendas, e depois a Morada.ai, onde liderei integrações, automação e o agente de IA de pós-venda.",
  },
  steps: [
    { years: "2018–2021", t: { en: "Architecture", pt: "Arquitetura" }, d: { en: "Projects from client brief to delivery", pt: "Projetos do briefing à entrega" } },
    { years: "2021–2025", t: { en: "MRV", pt: "MRV" }, d: { en: "Platform for the sales team", pt: "Plataforma do time de vendas" } },
    { years: "2025–now", t: { en: "Morada.ai", pt: "Morada.ai" }, d: { en: "Integrations, Workflow, post-sales AI", pt: "Integrações, Workflow, IA de pós-venda" } },
  ],
  education: {
    en: ["Product Management, PM3 (2024)", "B.Arch., Architecture and Urbanism, UniBH (2018–2022)"],
    pt: ["Product Management, PM3 (2024)", "Arquitetura e Urbanismo (bacharelado), UniBH (2018–2022)"],
  },
  languages: { en: "Portuguese (native), English (B1, intermediate)", pt: "Português (nativo), inglês (B1, intermediário)" },
}

export const contact = {
  title: { en: "Let's talk.", pt: "Vamos conversar." },
  lead: {
    en: "I'm looking for product roles where I can build 0→1, platforms or AI products. Remote, or hybrid in Belo Horizonte.",
    pt: "Busco vagas de produto para construir 0→1, plataformas ou produtos de IA. Remoto, ou híbrido em Belo Horizonte.",
  },
  email: "saraelisatm25@gmail.com",
}
