export const capabilities = [
  {
    title: "IA aplicada",
    command: "ai/",
    items: [
      "Agentes con tool-use (acciones reales, no solo chat)",
      "RAG propio: embeddings + retrieval híbrido",
      "IA multimodal (visión sobre imágenes)",
      "LLM cost-engineering: prompt caching + FinOps",
      "AI-safety: overrides deterministas de seguridad",
    ],
  },
  {
    title: "Backend & APIs",
    command: "api/",
    items: [
      "APIs REST en capas (Spring Boot · Express · Fastify)",
      "Auth con JWT, roles y multi-tenancy",
      "Webhooks con verificación de firma (HMAC)",
      "Concurrencia segura (advisory locks, transacciones)",
      "SQL parametrizado y modelado relacional a escala ERP",
    ],
  },
  {
    title: "Datos & ML",
    command: "data/",
    items: [
      "Forecasting (EWMA, IQR, estacionalidad, regresión)",
      "Lead-scoring, churn y LTV explicables",
      "PostgreSQL: diseño y evolución idempotente de esquema",
      "Observabilidad de costo y uso de LLM",
    ],
  },
  {
    title: "Automatización & DevOps",
    command: "ops/",
    items: [
      "Automatización de procesos (cron TZ-aware, n8n)",
      "Integraciones (WhatsApp, Cal.com, pagos, Cloudinary)",
      "Contenedores y despliegue cloud (Railway, Vercel)",
      "Testing unit / integración / E2E (Vitest, Jest, Playwright)",
    ],
  },
]
