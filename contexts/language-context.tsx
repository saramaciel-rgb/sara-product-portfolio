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
    "nav.home": "Inicio",
    "nav.work": "Trabalho",
    "nav.ai": "Experimentos IA",
    "nav.thinking": "Product Thinking",
    "nav.about": "Sobre",
    "nav.contact": "Contato",
    
    // Hero
    "hero.title": "Product Manager",
    "hero.subtitle": "IA, Integracoes & B2B SaaS",
    "hero.description": "Construo produtos baseados em IA e plataformas escalaveis que conectam tecnologia, negocios e valor para o cliente.",
    "hero.focus": "Meu trabalho foca em:",
    "hero.focus.1": "Plataformas conversacionais de IA",
    "hero.focus.2": "Integracoes com CRM e ERP",
    "hero.focus.3": "Crescimento e experimentacao de produto",
    "hero.focus.4": "Eficiencia operacional atraves de automacao",
    "hero.cta.work": "Ver meu trabalho",
    "hero.cta.experiments": "Explorar experimentos de IA",
    
    // Work Section
    "work.title": "Product Work",
    "work.subtitle": "Uma plataforma conversacional de IA usada por empresas para gerenciar comunicacao com clientes e operacoes.",
    "work.platform.description": "A plataforma inclui agentes de IA que interagem com clientes, agentes humanos de suporte, campanhas de mensagens, filas de atendimento, dashboards, pipelines de vendas e ferramentas operacionais. Meu trabalho foca em melhorar e expandir continuamente esta plataforma.",
    
    // Product Areas
    "work.platform.title": "Desenvolvimento da Plataforma Conversacional",
    "work.platform.desc": "Evolucao continua de uma plataforma conversacional de IA usada para comunicacao com clientes e workflows operacionais. Parte do meu trabalho foca em melhorar a usabilidade da plataforma para agentes de suporte e times operacionais.",
    "work.platform.feature.1": "Melhoria de funcionalidades da plataforma",
    "work.platform.feature.2": "Expansao de capacidades dos agentes de IA",
    "work.platform.feature.3": "Construcao de ferramentas operacionais",
    "work.platform.feature.4": "Melhoria de workflows de suporte ao cliente",
    "work.platform.feature.5": "Criacao de dashboards e ferramentas de gestao",
    
    "work.integration.title": "Ecossistema de Integracoes (CRM & ERP)",
    "work.integration.desc": "Responsavel por expandir o ecossistema de integracoes conectando a plataforma com multiplos sistemas CRM e ERP. Integracoes sao projetadas nao apenas para compatibilidade tecnica, mas tambem para uma experiencia de usuario fluida.",
    "work.integration.feature.1": "Construcao de novas integracoes do zero",
    "work.integration.feature.2": "Integracoes baseadas em API",
    "work.integration.feature.3": "Conexao de sistemas dos clientes com a plataforma",
    "work.integration.feature.4": "Expansao de funcionalidades de IA por sistema ERP",
    "work.integration.feature.5": "Recursos como entrega de boletos e autenticacao",
    
    "work.health.title": "Saude da Plataforma & Visibilidade Operacional",
    "work.health.desc": "Desenvolvimento de funcionalidades de produto que melhoram visibilidade operacional e monitoramento do sistema.",
    "work.health.feature.1": "Dashboard de Saude do Workspace",
    "work.health.feature.2": "Monitoramento de saude das integracoes",
    "work.health.feature.3": "Exposicao de logs do sistema",
    "work.health.feature.4": "Traducao de logs tecnicos com IA",
    
    // AI Experiments
    "ai.title": "Experimentos de IA",
    "ai.subtitle": "Experimentos focados em melhorar eficiencia operacional e desenvolvimento de produto",
    
    "ai.workflow.title": "Automacao de Workflows com IA",
    "ai.workflow.desc": "Experimentos focados em melhorar eficiencia operacional para times de implementacao.",
    "ai.workflow.feature.1": "Fluxos de onboarding assistidos por IA",
    "ai.workflow.feature.2": "Automacao de workflows",
    "ai.workflow.feature.3": "Otimizacao de processos operacionais",
    
    "ai.product.title": "Desenvolvimento de Produto com IA",
    "ai.product.desc": "Uso de IA para acelerar ciclos de desenvolvimento e melhorar qualidade do produto.",
    "ai.product.feature.1": "Prototipagem de features assistida por IA",
    "ai.product.feature.2": "Documentacao com IA",
    "ai.product.feature.3": "Automacao de testes de features",
    
    // AI Tools
    "tools.title": "Ferramentas de IA",
    "tools.subtitle": "Ferramentas que uso no meu trabalho diario",
    "tools.usage": "Usadas para: analise de produto, documentacao, sintese de pesquisa, experimentacao e prototipagem.",
    
    // Product Thinking
    "thinking.title": "Product Thinking",
    "thinking.subtitle": "Como trabalho como Product Manager",
    
    "thinking.discovery.title": "Discovery",
    "thinking.discovery.description": "Discovery conduzido com clientes, times de implementacao, times de Customer Success e parceiros estrategicos para identificar pontos de dor operacionais, oportunidades de produto e entender workflows reais de usuarios para melhorar usabilidade.",
    
    "thinking.ux.title": "Experiencia do Usuario & Usabilidade",
    "thinking.ux.description": "Experiencia do usuario e parte central da minha abordagem de produto. Foco em entender como usuarios interagem com a plataforma, melhorar workflows operacionais, reduzir friccao em sistemas complexos e garantir que integracoes sejam intuitivas.",
    
    "thinking.strategy.title": "Estrategia de Produto",
    "thinking.strategy.description": "Meu trabalho foca em evolucao da plataforma, expansao do ecossistema de integracoes, eficiencia operacional e inovacao de produto com IA.",
    
    "thinking.methodologies.title": "Metodologias",
    "thinking.methodologies.description": "Shape Up, Scrum e Continuous Discovery.",
    
    // Metrics
    "metrics.title": "Metricas & Analise",
    "metrics.subtitle": "Como o impacto do produto e medido",
    "metrics.activation": "Metricas de ativacao",
    "metrics.efficiency": "Melhorias de eficiencia operacional",
    "metrics.adoption": "Adocao do produto",
    "metrics.workflow": "Performance de workflows",
    "metrics.impact": "Analise de impacto de features",
    
    // About
    "about.title": "Sobre",
    "about.subtitle": "Background",
    "about.description": "Product Manager trabalhando com plataformas de IA, integracoes e sistemas complexos. Foco em construir produtos escalaveis que melhoram operacoes e criam impacto de negocios mensuravel.",
    "about.highlight.1": "Pensamento estrategico de produto",
    "about.highlight.2": "Colaboracao entre times",
    "about.highlight.3": "Desenvolvimento de produto com IA",
    "about.highlight.4": "Otimizacao de workflows",
    
    // Contact
    "contact.title": "Contato",
    "contact.subtitle": "Vamos conversar",
    "contact.cta": "Entre em contato",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.work": "Work",
    "nav.ai": "AI Experiments",
    "nav.thinking": "Product Thinking",
    "nav.about": "About",
    "nav.contact": "Contact",
    
    // Hero
    "hero.title": "Product Manager",
    "hero.subtitle": "AI, Integrations & B2B SaaS",
    "hero.description": "I build AI-driven products and scalable platforms that connect technology, business and customer value.",
    "hero.focus": "My work focuses on:",
    "hero.focus.1": "AI conversational platforms",
    "hero.focus.2": "CRM and ERP integrations",
    "hero.focus.3": "Product growth and experimentation",
    "hero.focus.4": "Operational efficiency through automation",
    "hero.cta.work": "View my work",
    "hero.cta.experiments": "Explore AI experiments",
    
    // Work Section
    "work.title": "Product Work",
    "work.subtitle": "A conversational AI platform used by companies to manage customer communication and operations.",
    "work.platform.description": "The platform includes AI agents that interact with customers, human support agents, campaign messaging, service queues, dashboards, sales pipelines and operational tools. My work focuses on continuously improving and expanding this platform.",
    
    // Product Areas
    "work.platform.title": "Conversational Platform Development",
    "work.platform.desc": "Continuous evolution of a conversational AI platform used for customer communication and operational workflows. Part of my work focuses on improving platform usability for support agents and operational teams.",
    "work.platform.feature.1": "Improving platform features",
    "work.platform.feature.2": "Expanding capabilities of AI agents",
    "work.platform.feature.3": "Building operational tools",
    "work.platform.feature.4": "Improving customer support workflows",
    "work.platform.feature.5": "Creating dashboards and platform management tools",
    
    "work.integration.title": "Integration Ecosystem (CRM & ERP)",
    "work.integration.desc": "Responsible for expanding the integration ecosystem connecting the platform with multiple CRM and ERP systems. Integrations are designed not only for technical compatibility but also for a smooth user experience.",
    "work.integration.feature.1": "Building new integrations from scratch",
    "work.integration.feature.2": "API based integrations",
    "work.integration.feature.3": "Connecting customer systems with the platform",
    "work.integration.feature.4": "Expanding AI functionality based on each ERP system",
    "work.integration.feature.5": "Enabling features like boleto delivery and authentication",
    
    "work.health.title": "Platform Health & Operational Visibility",
    "work.health.desc": "Development of product features that improve operational visibility and system monitoring.",
    "work.health.feature.1": "Workspace Health dashboard",
    "work.health.feature.2": "Monitoring integration health",
    "work.health.feature.3": "Exposing system logs",
    "work.health.feature.4": "AI translation of technical logs",
    
    // AI Experiments
    "ai.title": "AI Experiments",
    "ai.subtitle": "Experiments focused on improving operational efficiency and product development",
    
    "ai.workflow.title": "Workflow Automation with AI",
    "ai.workflow.desc": "Experiments focused on improving operational efficiency for implementation teams.",
    "ai.workflow.feature.1": "AI assisted onboarding flows",
    "ai.workflow.feature.2": "Workflow automation",
    "ai.workflow.feature.3": "Operational process optimization",
    
    "ai.product.title": "AI Assisted Product Development",
    "ai.product.desc": "Using AI to accelerate development cycles and improve product quality.",
    "ai.product.feature.1": "AI assisted feature prototyping",
    "ai.product.feature.2": "AI powered documentation",
    "ai.product.feature.3": "Automation of feature testing",
    
    // AI Tools
    "tools.title": "AI Tools",
    "tools.subtitle": "Tools I use in my daily work",
    "tools.usage": "Used for: product analysis, documentation, research synthesis, experimentation and prototyping.",
    
    // Product Thinking
    "thinking.title": "Product Thinking",
    "thinking.subtitle": "How I work as a Product Manager",
    
    "thinking.discovery.title": "Discovery",
    "thinking.discovery.description": "Discovery conducted with clients, implementation teams, customer success teams and strategic partners to identify operational pain points, product opportunities and understand real user workflows to improve usability.",
    
    "thinking.ux.title": "User Experience & Usability",
    "thinking.ux.description": "User experience is a core part of my product management approach. I focus on understanding how users interact with the platform, improving operational workflows, reducing friction in complex systems and ensuring integrations feel seamless.",
    
    "thinking.strategy.title": "Product Strategy",
    "thinking.strategy.description": "My work focuses on platform evolution, integration ecosystem expansion, operational efficiency and AI driven product innovation.",
    
    "thinking.methodologies.title": "Methodologies",
    "thinking.methodologies.description": "Shape Up, Scrum and Continuous Discovery.",
    
    // Metrics
    "metrics.title": "Metrics & Analysis",
    "metrics.subtitle": "How product impact is measured",
    "metrics.activation": "Activation metrics",
    "metrics.efficiency": "Operational efficiency improvements",
    "metrics.adoption": "Product adoption",
    "metrics.workflow": "Workflow performance",
    "metrics.impact": "Feature impact analysis",
    
    // About
    "about.title": "About",
    "about.subtitle": "Background",
    "about.description": "Product Manager working with AI platforms, integrations and complex systems. Focus on building scalable products that improve operations and create measurable business impact.",
    "about.highlight.1": "Strategic product thinking",
    "about.highlight.2": "Cross team collaboration",
    "about.highlight.3": "AI driven product development",
    "about.highlight.4": "Workflow optimization",
    
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Let's talk",
    "contact.cta": "Get in touch",
  }
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
