export const projectsData = [
    {
        id: 3,
        slug: "arnold-bot",
        title: "Arnold — Agente de IA para WhatsApp",
        shortDescription: "Agente conversacional que opera un negocio por WhatsApp: agenda, cobra, hace seguimiento y controla un ERP con lenguaje natural.",
        fullDescription: "Arnold es un asistente de IA que atiende pacientes y gestiona el negocio de un quiropráctico directamente por WhatsApp: responde, cotiza, agenda/reagenda/cancela citas (Cal.com), persigue no-shows y contacta leads; y una segunda persona deja al dueño operar el negocio por chat (agenda, campañas, CRM) e incluso manejar un ERP mayorista (órdenes, pagos, descuentos, inventario, nómina) con lenguaje natural.\n\nLo interesante es la ingeniería de agente: un loop de tool-use con 59 herramientas que ejecutan acciones reales de escritura sobre dos sistemas en producción (no es un chatbot de FAQ). Usa extended thinking adaptativo, prompt caching y un módulo propio de observabilidad de costo de LLM (FinOps: cache-hit rate y USD por turno, con pricing consciente de la fecha). Suma visión multimodal para leer facturas y formularios a JSON estricto, webhooks con verificación de firma HMAC, 7 tareas cron con zonas horarias, debouncing de mensajes y 91 tests. Backend en TypeScript estricto + Fastify 5 + PostgreSQL; panel admin en React.",
        image: "/projects/arnold-reportes.jpg",
        images: [
            "/projects/arnold-reportes.jpg",
            "/projects/arnold-agenda.jpg",
            "/projects/arnold-caja.jpg",
            "/projects/arnold-pacientes.jpg"
        ],
        technologies: ["TypeScript", "Node.js", "Fastify", "Claude (Anthropic)", "PostgreSQL", "WhatsApp Cloud API", "Cal.com", "n8n", "React", "Zod"],
        techniques: [
            "Agentes con tool-use (59 herramientas, acciones reales en prod)",
            "Extended thinking adaptativo + forzado de cierre",
            "Prompt caching + FinOps de LLM (costo/token, cache-hit)",
            "Visión multimodal (facturas/formularios → JSON)",
            "Webhooks con firma HMAC + arquitectura de eventos",
            "Automatización con cron TZ-aware (recordatorios, no-shows)",
            "Ruteo multi-modelo por rol y por costo"
        ],
        githubUrl: "https://github.com/IngJoseMendez/Arnold_bot",
        demoUrl: "#"
    },
    {
        id: 4,
        slug: "es-tiempo-de-sanar",
        title: "Es Tiempo de Sanar — SaaS de salud con IA",
        shortDescription: "Plataforma health-tech con asistente de IA (Savia), rutas de sanación personalizadas, cursos, gamificación y CRM para el doctor.",
        fullDescription: "SaaS de salud para un médico de medicina natural: landing + tienda, un dashboard donde el paciente hace una evaluación, recibe una \"ruta de sanación\" personalizada por IA, registra su bienestar con gamificación (XP/niveles/rachas), toma cursos con certificados verificados en servidor y chatea 24/7 con un asistente de IA (\"Savia\") con memoria persistente que analiza fotos; más un panel admin/CRM para el doctor.\n\nEl core técnico es IA de verdad, bien ingenierizada: integración con Claude (Haiku 4.5) elegido por costo, con prompt caching entre system prompt estático y contexto dinámico; un pipeline de RAG hecho a mano (ingesta de PDF/Markdown, chunking con solape, retrieval híbrido léxico + semántico con embeddings de Voyage AI, sin LangChain); IA multimodal (analiza fotos en el chat); y AI-safety con un detector determinista de síntomas de alarma que anula al LLM. Suma ML explicable (regresión por mínimos cuadrados para forecasting con bandas de confianza, lead-scoring, churn y LTV), abstracción dual de base de datos (SQLite en dev, PostgreSQL en prod con la misma superficie SQL), seguridad hecha a mano (rate limiting, headers, y aborto de arranque en prod si detecta config insegura), multi-tenancy por roles y planes, PWA con Web Push y pagos (Wompi + PayPal con webhooks firmados). React + Vite + Tailwind, Express, Vercel + Railway.",
        image: "/projects/drjose-hero.jpg",
        images: [
            "/projects/drjose-hero.jpg",
            "/projects/drjose-doctor.jpg",
            "/projects/drjose-tools.jpg"
        ],
        technologies: ["React", "Vite", "Tailwind", "Node.js", "Express", "PostgreSQL", "SQLite", "Claude (Anthropic)", "Voyage AI", "Cloudinary", "Vercel", "Railway"],
        techniques: [
            "RAG propio (embeddings + retrieval híbrido, sin LangChain)",
            "LLM cost-engineering (modelo + prompt caching)",
            "IA multimodal (visión sobre fotos)",
            "AI-safety (override determinista de red-flags)",
            "ML explicable (forecasting, churn, LTV)",
            "Multi-tenancy por roles y planes",
            "PWA + Web Push + pagos con webhooks firmados",
            "Abstracción dual SQLite/PostgreSQL"
        ],
        githubUrl: "https://github.com/IngJoseMendez/DrJose-Chat",
        demoUrl: "https://dr-jose-chat.vercel.app"
    },
    {
        id: 5,
        slug: "bodega-americana",
        title: "Bodega Americana — ERP de logística e importación",
        shortDescription: "Sistema integral para importar y vender pacas de ropa: contenedores, inventario, ventas a crédito, cartera y forecasting de demanda.",
        fullDescription: "Sistema full-stack para un negocio que importa y revende pacas de ropa americana. Cubre todo el ciclo de importación-a-caja: importación de contenedores, control de lotes/inventario, cotizaciones y ventas a crédito, despacho, cuentas por cobrar y por pagar, y gastos operativos; más un portal de autoservicio para que el cliente consulte el estado de sus pedidos.\n\nDetrás hay ingeniería de sistemas seria: modelado relacional a escala ERP (25+ tablas encadenando contenedores→lotes→inventario→cotizaciones→ventas→despacho→CxC/CxP→gastos→auditoría) con evolución de esquema idempotente (migraciones aditivas sin downtime aplicadas al arranque); reconciliación financiera concurrency-safe usando advisory locks de PostgreSQL dentro de transacciones; un motor de forecasting de demanda (EWMA ponderado, filtrado de outliers por IQR, detección de estacionalidad y score de confianza); RBAC con portal dual (admin/vendedor/cliente) con JWT, bloqueo de cuenta y rate limiting por niveles; migración incremental a arquitectura por capas (repository/service/controller); auditoría con trazabilidad; y lógica multi-moneda USD↔COP. Frontend React + Radix/shadcn + React Hook Form/Zod + Recharts; backend Express + PostgreSQL (SQL parametrizado, sin ORM); tests con Jest y Playwright cross-browser; despliegue dividido Railway (API) + Vercel (frontend).",
        image: "/projects/bodega-login.jpg",
        images: [
            "/projects/bodega-login.jpg"
        ],
        technologies: ["React", "Vite", "Tailwind", "Radix UI", "Node.js", "Express", "PostgreSQL", "JWT", "Zod", "Recharts", "Jest", "Playwright"],
        techniques: [
            "Advisory locks de PostgreSQL (reconciliación concurrency-safe)",
            "Forecasting de demanda (EWMA + IQR + estacionalidad)",
            "Migraciones idempotentes sin downtime",
            "RBAC + portal dual (JWT, lockout, rate limiting)",
            "Arquitectura por capas (repository/service/controller)",
            "Multi-moneda con tasa de cambio",
            "Auditoría y trazabilidad",
            "E2E cross-browser (Playwright) + Jest"
        ],
        githubUrl: "https://github.com/IngJoseMendez/BodeAmericanaFronted",
        demoUrl: "#"
    },
    {
        id: 1,
        slug: "erp-ligero",
        title: "ERP ligero",
        shortDescription: "Solución ligera para ventas, inventario, facturación, clientes, usuario/roles, reportes y métricas en PyMEs.",
        fullDescription: "Sistema de gestión modular diseñado para optimizar el flujo de ventas end-to-end, control de inventario y usuarios en tiempo real, análisis estratégico del negocio mediante métricas clave y seguridad basada en roles con Spring Security + JWT para control de acceso.  Desarrollo de backend con Java 17 y Spring Boot 3 siguiendo principios REST, validación de datos y separación por capas (controller/service/repository/mappers/dtos/entitys/exeptions/services/utils). Implementación de persistencia con Spring Data JPA y PostgreSQL para la gestión de datos de la empresa. Automatización de mapeo de DTOs/entidades con MapStruct + Lombok para reducir boilerplate y mantener consistencia del modelo. Despliegue y operación en entornos cloud utilizando Vercel, Railway y Cloudinary para almacenamiento y distribución de recursos. ",
        image: "https://res.cloudinary.com/dxl97cptv/image/upload/v1768147534/2e3d2346-786e-4136-a340-89cd0fe304fb.png",
        images: [
            "https://res.cloudinary.com/dxl97cptv/image/upload/v1768147534/2e3d2346-786e-4136-a340-89cd0fe304fb.png",
            "https://res.cloudinary.com/dxl97cptv/image/upload/v1768153128/08187736-3a16-41a7-a4f1-b60e196313a2.png",
            "https://res.cloudinary.com/dxl97cptv/image/upload/v1768153343/d2ab1218-bed7-4b11-9087-3c70d21e20a8.png",
            "https://res.cloudinary.com/dxl97cptv/image/upload/v1768153278/e42dde67-2cb2-47cc-95fd-97f93dc1a327.png"
        ],
        technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Git", "react", "GitHub"],
        techniques: [
            "API REST en capas (Spring Boot 3)",
            "Seguridad con Spring Security + JWT (roles)",
            "Persistencia con Spring Data JPA + PostgreSQL",
            "Mapeo DTO/entidad con MapStruct + Lombok",
            "Despliegue cloud (Railway / Vercel / Cloudinary)"
        ],
        githubUrl: "https://github.com/IngJoseMendez/Sistema-gesti-n-Vitalexa",
        demoUrl: "#"
    },
    {
        id: 2,
        slug: "oficina-medica",
        title: "Sistema de Gestión Integral para Oficina Médica",
        shortDescription: "Sistema de gestión para consultorios médicos: pacientes, citas, personal y procesos clínicos con seguridad por roles.",
        fullDescription: "Sistema de gestión para consultorios médicos desarrollado en Java con Spring Boot, orientado a administrar pacientes, citas, personal y procesos básicos de un consultorio u oficina médica moderna. Diseño de una arquitectura modular con seguridad basada en roles mediante Spring Security y JWT para el control de acceso, desarrollando el backend en Java 17 y Spring Boot 3 siguiendo principios REST, con persistencia implementada mediante Spring Data JPA y PostgreSQL para gestionar datos clínicos y administrativos de la oficina médica, automatización del mapeo entre DTOs y entidades usando MapStruct optimizada para mantener una serialización eficiente de los modelos, y una estrategia de pruebas y calidad soportada en Spring Test, testcontainers (PostgreSQL) y Mockito para validar la lógica y los componentes del sistema.",
        image: "https://res.cloudinary.com/dxl97cptv/image/upload/v1768170859/d30e0e75-b0fc-48ea-8bdd-d7b2986b8c6a.png",
        images: [
            "https://res.cloudinary.com/dxl97cptv/image/upload/v1768170859/d30e0e75-b0fc-48ea-8bdd-d7b2986b8c6a.png",
            "https://res.cloudinary.com/dxl97cptv/image/upload/v1768170927/ded448ce-8ae0-4c28-8a75-98404fde7993.png",
            "https://res.cloudinary.com/dxl97cptv/image/upload/v1768170986/cadd00de-616c-42a0-8fca-f3d6b553ae08.png",
            "https://res.cloudinary.com/dxl97cptv/image/upload/v1768171017/ffb1c05e-1d7b-4546-a176-7e3a6c5a480e.png"
        ],
        technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Git", "react", "GitHub", "Mockito"],
        techniques: [
            "Arquitectura modular + seguridad por roles (JWT)",
            "API REST con Spring Boot 3",
            "Testing con Testcontainers (PostgreSQL) + Mockito",
            "Persistencia JPA + mapeo con MapStruct"
        ],
        githubUrl: "https://github.com/IngJoseMendez/Medical_office_management",
        demoUrl: "#"
    },
];
