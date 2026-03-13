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
    "nav.ai": "IA & Experimentos",
    "nav.thinking": "Product Thinking",
    "nav.about": "Sobre",
    "nav.contact": "Contato",
    
    // Hero
    "hero.title": "Product Manager",
    "hero.subtitle": "IA, Integrações & B2B SaaS",
    "hero.description": "Construo produtos baseados em IA e plataformas escaláveis que conectam tecnologia, negócios e valor para o cliente.",
    "hero.focus": "Meu trabalho foca em:",
    "hero.focus.1": "Plataformas conversacionais de IA",
    "hero.focus.2": "Integrações com CRM e ERP",
    "hero.focus.3": "Crescimento e experimentação de produto",
    "hero.focus.4": "Eficiência operacional através de automação",
    "hero.cta.work": "Ver meu trabalho",
    "hero.cta.experiments": "Explorar experimentos de IA",
    
    // Work Section
    "work.title": "Trabalho",
    "work.subtitle": "Projetos e produtos que liderei",
    
    // Project titles
    "project.integration.title": "Plataforma de Ecossistema de Integrações",
    "project.integration.description": "Expansão de capacidades de IA conectadas a múltiplos sistemas CRM e ERP.",
    "project.integration.feature.1": "Entrega automatizada de boletos",
    "project.integration.feature.2": "Autenticação de dois fatores",
    "project.integration.feature.3": "Suporte ao cliente com IA",
    "project.integration.feature.4": "Criação de chamadas na plataforma",
    "project.integration.feature.5": "Melhorias em workflows conversacionais",
    
    "project.dashboard.title": "Dashboard de Saúde do Workspace",
    "project.dashboard.description": "Dashboard de produto projetado para monitorar saúde de integrações, logs e status operacional.",
    "project.dashboard.feature.1": "Visibilidade para times de Customer Success",
    "project.dashboard.feature.2": "Indicadores de saúde do sistema",
    "project.dashboard.feature.3": "Tradução de logs técnicos com IA",
    
    "project.logs.title": "Interpretação de Logs com IA",
    "project.logs.description": "Sistema de IA projetado para traduzir logs técnicos em explicações legíveis por humanos.",
    "project.logs.goal": "Objetivo: reduzir dependência de engenharia e acelerar resolução de problemas.",
    
    "project.reservation.title": "Módulo de Reservas",
    "project.reservation.description": "Novo módulo de produto criado para gerenciar processos de reserva e coleta de documentos para projetos imobiliários.",
    "project.reservation.feature.1": "Fluxos de coleta de documentos",
    "project.reservation.feature.2": "Processos automatizados",
    
    "project.workflow.title": "Automação de Workflows",
    "project.workflow.description": "Experimentos com workflows de produto projetados para melhorar eficiência operacional para times de implementação.",
    "project.workflow.feature.1": "Fluxos de automação",
    "project.workflow.feature.2": "Onboarding assistido por IA",
    "project.workflow.feature.3": "Workflows de integração",
    
    // AI & Experiments
    "ai.title": "IA & Experimentos",
    "ai.subtitle": "Como uso IA no gerenciamento de produtos",
    "ai.discovery": "Discovery assistido por IA",
    "ai.prototyping": "Prototipagem com Claude",
    "ai.analysis": "Análise de produto com GPT",
    "ai.research": "Síntese de pesquisa com NotebookLM",
    "ai.testing": "Automação de testes de produto",
    "ai.workflow": "Experimentação de workflows com IA",
    
    // AI Tools
    "tools.title": "Ferramentas de IA",
    "tools.subtitle": "Ferramentas que uso diariamente",
    "tools.usage": "Uso para: análise de produto, prototipagem, síntese de pesquisa, documentação e automação.",
    
    // Product Thinking
    "thinking.title": "Product Thinking",
    "thinking.subtitle": "Minha abordagem de gestão de produtos",
    
    "thinking.discovery.title": "Discovery",
    "thinking.discovery.description": "Discovery conduzido com clientes, times de implementação, Customer Success e parceiros estratégicos para identificar pontos de dor operacionais reais e oportunidades de produto.",
    
    "thinking.strategy.title": "Estratégia de Produto",
    "thinking.strategy.description": "Foco em escalabilidade da plataforma, ecossistema de integrações, eficiência operacional e crescimento através de experimentação.",
    
    "thinking.methodologies.title": "Metodologias",
    "thinking.methodologies.description": "Shape Up, Scrum, Experimentação e Continuous Discovery.",
    
    // Metrics
    "metrics.title": "Métricas & Análise",
    "metrics.subtitle": "Métricas usadas para avaliar sucesso do produto",
    "metrics.activation": "Métricas de ativação",
    "metrics.efficiency": "Eficiência operacional",
    "metrics.adoption": "Adoção de clientes",
    "metrics.workflow": "Performance de workflows",
    "metrics.impact": "Análise de impacto de features",
    
    // About
    "about.title": "Sobre",
    "about.subtitle": "Background",
    "about.description": "Product Manager trabalhando com plataformas de IA, integrações e sistemas complexos. Foco em construir produtos escaláveis que melhoram operações e criam impacto de negócio mensurável.",
    "about.highlight.1": "Pensamento estratégico de produto",
    "about.highlight.2": "Colaboração entre times",
    "about.highlight.3": "Desenvolvimento de produto com IA",
    "about.highlight.4": "Otimização de workflows",
    
    // Contact
    "contact.title": "Contato",
    "contact.subtitle": "Vamos conversar",
    "contact.cta": "Entre em contato",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.work": "Work",
    "nav.ai": "AI & Experiments",
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
    "work.title": "Work",
    "work.subtitle": "Projects and products I've led",
    
    // Project titles
    "project.integration.title": "Integration Ecosystem Platform",
    "project.integration.description": "Expansion of AI capabilities connected to multiple CRM and ERP systems.",
    "project.integration.feature.1": "Automated boleto delivery",
    "project.integration.feature.2": "Two factor authentication",
    "project.integration.feature.3": "AI-powered customer support",
    "project.integration.feature.4": "Platform call creation",
    "project.integration.feature.5": "Conversational workflow improvements",
    
    "project.dashboard.title": "Workspace Health Dashboard",
    "project.dashboard.description": "Product dashboard designed to monitor integration health, logs and operational status.",
    "project.dashboard.feature.1": "Visibility for customer success teams",
    "project.dashboard.feature.2": "System health indicators",
    "project.dashboard.feature.3": "AI translation of technical logs",
    
    "project.logs.title": "AI Log Interpretation",
    "project.logs.description": "AI system designed to translate technical logs into human readable explanations.",
    "project.logs.goal": "Goal: reduce engineering dependency and accelerate troubleshooting.",
    
    "project.reservation.title": "Reservation Module",
    "project.reservation.description": "New product module created to manage reservation processes and document collection for real estate projects.",
    "project.reservation.feature.1": "Document collection flows",
    "project.reservation.feature.2": "Automated processes",
    
    "project.workflow.title": "Workflow Automation",
    "project.workflow.description": "Experiments with product workflows designed to improve operational efficiency for implementation teams.",
    "project.workflow.feature.1": "Automation flows",
    "project.workflow.feature.2": "AI assisted onboarding",
    "project.workflow.feature.3": "Integration workflows",
    
    // AI & Experiments
    "ai.title": "AI & Experiments",
    "ai.subtitle": "How I use AI in product management",
    "ai.discovery": "AI-assisted product discovery",
    "ai.prototyping": "AI prototyping with Claude",
    "ai.analysis": "Product analysis using GPT",
    "ai.research": "Research synthesis using NotebookLM",
    "ai.testing": "Automation of product testing",
    "ai.workflow": "Workflow experimentation with AI",
    
    // AI Tools
    "tools.title": "AI Tools",
    "tools.subtitle": "Tools I use daily",
    "tools.usage": "Used for: product analysis, prototyping, research synthesis, documentation and automation.",
    
    // Product Thinking
    "thinking.title": "Product Thinking",
    "thinking.subtitle": "My product management approach",
    
    "thinking.discovery.title": "Discovery",
    "thinking.discovery.description": "Discovery conducted with clients, implementation teams, customer success teams and strategic partners to identify real operational pain points and product opportunities.",
    
    "thinking.strategy.title": "Product Strategy",
    "thinking.strategy.description": "Focus on platform scalability, integration ecosystem, operational efficiency and growth through experimentation.",
    
    "thinking.methodologies.title": "Methodologies",
    "thinking.methodologies.description": "Shape Up, Scrum, Experimentation and Continuous Discovery.",
    
    // Metrics
    "metrics.title": "Metrics & Analysis",
    "metrics.subtitle": "Metrics used to evaluate product success",
    "metrics.activation": "Activation metrics",
    "metrics.efficiency": "Operational efficiency",
    "metrics.adoption": "Customer adoption",
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
