export const capabilities = [
  {
    title: "Sistemas de gestión a la medida",
    command: "erp/",
    items: [
      "ERPs completos: pedidos, facturación, inventario, cartera y nómina",
      "Multiempresa: con o sin IVA decide qué empresa factura",
      "Apps de campo para operarios y vendedoras (GPS, fotos, firmas)",
      "Reportes y exportación a PDF, Excel y Siigo",
      "Consistencia de dinero e inventario: idempotencia, bloqueos y auditoría",
    ],
  },
  {
    title: "IA aplicada",
    command: "ai/",
    items: [
      "Agentes LLM con tool calling que operan sistemas reales por WhatsApp",
      "Human-in-the-loop: la IA propone y una persona aprueba antes de mover dinero",
      "Evaluación de agentes: cliente simulado + LLM-as-a-judge con rúbrica",
      "Visión multimodal: extracción de datos de facturas y fotos",
      "RAG propio con retrieval híbrido y prompt caching para optimizar costos",
    ],
  },
  {
    title: "Backend & APIs",
    command: "api/",
    items: [
      "APIs en capas con Spring Boot, NestJS, Fastify y Express",
      "Auth con JWT, roles y multi-tenancy",
      "Webhooks con verificación de firma (Meta, Wompi)",
      "Control de concurrencia: transacciones, bloqueos pesimistas y advisory locks",
      "PostgreSQL: modelado a escala ERP y migraciones sin downtime",
    ],
  },
  {
    title: "Automatización, datos & DevOps",
    command: "ops/",
    items: [
      "Tareas programadas con zona horaria (recordatorios, cobros, alertas)",
      "Integraciones: WhatsApp Cloud API, pagos, push, correo y Cal.com",
      "Forecasting y métricas para la toma de decisiones",
      "Docker y despliegue en Railway y Vercel",
      "Tests unitarios, de integración y E2E (Vitest, Jest, Playwright)",
    ],
  },
]
