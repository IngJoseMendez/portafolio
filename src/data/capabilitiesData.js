export const capabilities = [
  {
    title: "Sistemas de gestión a la medida",
    command: "erp/",
    items: [
      "ERPs completos: pedidos, facturación, inventario, cartera y nómina",
      "Multiempresa: con o sin IVA decide qué empresa factura",
      "Apps de campo para operarios y vendedoras (GPS, fotos, firmas)",
      "Reportes y exportación a PDF, Excel y Siigo",
      "Dinero y stock que cuadran: idempotencia, bloqueos y auditoría",
    ],
  },
  {
    title: "IA aplicada",
    command: "ai/",
    items: [
      "Agentes con tool-use que operan sistemas reales por WhatsApp",
      "Confirmación antes de mover dinero: la IA propone, la persona aprueba",
      "Evals: un cliente simulado conversa y un juez califica con rúbrica",
      "Visión: leer facturas y fotos y pasarlas a datos",
      "RAG propio y prompt caching para tener el costo bajo control",
    ],
  },
  {
    title: "Backend & APIs",
    command: "api/",
    items: [
      "APIs en capas con Spring Boot, NestJS, Fastify y Express",
      "Auth con JWT, roles y multi-tenancy",
      "Webhooks con verificación de firma (Meta, Wompi)",
      "Concurrencia segura: transacciones y advisory locks",
      "PostgreSQL: modelado a escala ERP y migraciones sin downtime",
    ],
  },
  {
    title: "Automatización, datos & DevOps",
    command: "ops/",
    items: [
      "Tareas programadas con zona horaria (recordatorios, cobros, alertas)",
      "Integraciones: WhatsApp Cloud API, pagos, push, correo y Cal.com",
      "Forecasting y métricas que sirven para decidir",
      "Docker y despliegue en Railway y Vercel",
      "Tests unitarios, de integración y E2E (Vitest, Jest, Playwright)",
    ],
  },
]
