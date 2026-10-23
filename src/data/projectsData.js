export const projectsData = [
    {
        id: 1,
        slug: "surtix",
        title: "Surtix — ERP para distribuidoras + asistente IA",
        shortDescription: "ERP para distribuidoras mayoristas, en uso en Distribuciones Vitalexa: pedidos, facturación, inventario, cartera, pagos, metas, nómina y reportes; operable también por WhatsApp con IA.",
        fullDescription: "Surtix es un sistema de gestión para distribuidoras y mayoristas. Lo construí desde diciembre de 2025 para su primer cliente, Distribuciones Vitalexa, una distribuidora de productos naturales y cosméticos que vende al por mayor a droguerías y tiendas de la Costa, y que lo usa a diario. Cubre el ciclo completo: la vendedora toma el pedido desde el celular, el administrador lo confirma y despacha, el sistema factura (PDF con numeración consecutiva), descuenta el inventario y lleva la cartera de cada cliente con sus abonos, días de mora y saldo a favor. Encima hay metas de venta por vendedora, nómina con comisiones por ventas y por recaudo, promociones y surtidos, devoluciones de bodega y reportes exportables a PDF, Excel y CSV.\n\nLo más diferencial es Arvi, el asistente de IA conectado al backend: el dueño le escribe por WhatsApp \"¿quién me debe?\", \"detalla la factura 1009\" o manda la foto de una factura y Arvi consulta Vitalexa, propone el abono y solo lo registra cuando él confirma.\n\nPor dentro: backend en Java 17 + Spring Boot 3 por capas (controller/service/repository, DTOs con MapStruct), PostgreSQL con 45 migraciones Flyway, seguridad con Spring Security + JWT para 5 roles (dueño, admin, vendedor, bodega, cliente) y notificaciones en tiempo real por WebSocket (STOMP). Para que la plata y el stock cuadren con varias personas trabajando a la vez: claves de idempotencia al crear pedidos (un doble clic no duplica la venta), bloqueos de stock y timeouts de bloqueo por conexión, anulaciones con historial auditable en vez de borrados, y reportes sin consultas N+1 (batch fetching) para que el Excel de varios meses no se corte. Facturas y reportes con iText y Apache POI. Frontend React 19 pensado para conexiones lentas (caché del catálogo, actualización silenciosa, vista móvil para vendedoras). 263 tests en backend y 63 suites en frontend; desplegado en Railway + Vercel.",
        image: "/projects/vitalexa-portada.jpg",
        video: "/projects/surtix-promo.mp4",
        videoPoster: "/projects/vitalexa-portada.jpg",
        images: [
            { src: "/projects/vitalexa-portada.jpg", caption: "Reportes del negocio y el asistente Arvi respondiendo la cartera de un cliente por WhatsApp (versión de Distribuciones Vitalexa, con datos de demostración)" },
            { src: "/projects/vitalexa-ordenes.jpg", caption: "Gestión de órdenes: pendientes, confirmadas, factura, descuentos y despacho" },
            { src: "/projects/vitalexa-nueva-venta.jpg", caption: "Nueva venta: catálogo con stock en vivo, cliente, vendedora y total al instante" },
            { src: "/projects/vitalexa-factura.jpg", caption: "Factura PDF con numeración consecutiva, generada al despachar" },
            { src: "/projects/vitalexa-cartera-cliente.jpg", caption: "Cartera por cliente: facturas pendientes, abonos, días de mora y cupo" },
            { src: "/projects/vitalexa-registrar-pago.jpg", caption: "Registro de abonos con método, fecha real del pago y saldo a favor" },
            { src: "/projects/vitalexa-productos.jpg", caption: "Inventario de productos con fotos, precios y alertas de stock bajo" },
            { src: "/projects/vitalexa-stock-real.jpg", caption: "Stock real: en bodega, comprometido en pedidos y conteo físico" },
            { src: "/projects/vitalexa-historial-inventario.jpg", caption: "Historial de inventario: cada entrada y salida con su pedido y responsable" },
            { src: "/projects/vitalexa-historial-ventas.jpg", caption: "Historial de ventas facturadas con búsqueda por factura, cliente o fecha" },
            { src: "/projects/vitalexa-reportes-productos.jpg", caption: "Reportes: productos más vendidos, valor del inventario y exportación a Excel" },
            { src: "/projects/vitalexa-metas.jpg", caption: "Metas de venta mensuales por vendedora con su avance" },
            { src: "/projects/vitalexa-nomina.jpg", caption: "Nómina con salario base y comisiones por ventas y recaudo" },
            { src: "/projects/vitalexa-movil.jpg", caption: "La vendedora toma pedidos desde el celular; Arvi registra pagos con confirmación" },
            { src: "/projects/vitalexa-arvi.jpg", caption: "Arvi por WhatsApp: cartera general, deuda por cliente, abonos y lectura de facturas por foto" }
        ],
        features: [
            { title: "Pedidos y despacho", text: "Las vendedoras venden desde el celular; el admin confirma, despacha y el sistema factura y descuenta el stock." },
            { title: "Facturación", text: "Factura PDF consecutiva por pedido, facturas históricas y anulaciones con motivo y trazabilidad." },
            { title: "Inventario", text: "Stock en bodega vs. comprometido, llegadas de mercancía, conteos físicos y alertas de reorden." },
            { title: "Cartera y pagos", text: "Saldo por cliente, abonos parciales, días de mora, cupo de crédito, saldo a favor y pagos masivos." },
            { title: "Metas y nómina", text: "Meta mensual por vendedora y nómina con comisiones por venta y por recaudo, exportable." },
            { title: "Reportes", text: "Ventas, productos, vendedores y clientes por rango de fechas, en PDF, Excel y CSV." },
            { title: "Asistente IA (Arvi)", text: "El dueño consulta y opera el ERP por WhatsApp; todo lo que mueve plata se confirma antes." }
        ],
        technologies: ["Java 17", "Spring Boot 3", "PostgreSQL", "Flyway", "Spring Security + JWT", "WebSocket", "React", "Claude (Anthropic)", "Docker", "Railway"],
        techniques: [
            "Idempotencia en creación de pedidos (sin ventas duplicadas)",
            "Consistencia de stock con bloqueos y lock timeouts",
            "Cartera: abonos, mora, saldo a favor y pagos masivos",
            "Notificaciones en tiempo real (WebSocket/STOMP)",
            "Anulaciones auditables en vez de borrados",
            "Reportes sin N+1 (batch fetching) + PDF/Excel",
            "Agente IA con tool-use sobre la API del ERP",
            "45 migraciones Flyway · 263 tests backend"
        ],
        githubUrl: "https://github.com/IngJoseMendez/Sistema-gesti-n-Vitalexa",
        demoUrl: "#"
    },
    {
        id: 9,
        slug: "sth-suite",
        title: "STH Suite — Operación de Servitanques de la Costa",
        shortDescription: "Sistema operativo de tres empresas de agua en Santa Marta: órdenes, agenda, operarios en campo con GPS, carrotanques, facturación con y sin IVA, cartera, nómina y panel del dueño.",
        fullDescription: "STH Suite maneja la operación de Servitanques de la Costa (lavado de tanques y carrotanques de agua, factura con IVA y exporta a Siigo), su empresa hermana THS (sin IVA) y H2O Vital (recargas de agua). Reemplaza el Excel y el WhatsApp con los que se coordinaban pedidos, despachos y cobros. La regla central es simple de decir y difícil de cumplir: marcar una orden con o sin IVA decide qué empresa la factura, así que todo el sistema es multiempresa desde el día uno.\n\nLa oficina trabaja en un panel web: tablero del día por estados, agenda visual, órdenes y cotizaciones, rutas de carrotanque, \"dónde están\" (los operarios en el mapa en vivo), clientes, facturación de contado y a crédito con relaciones mensuales, cartera con semáforo de mora, caja, recompras (a quién llamar para volver a vender), nómina por servicio, documentación, vehículos, una vista para la TV de la oficina y el panel del dueño. Los operarios usan una app Android propia: su día, las paradas en orden, llegada, fotos, firmas y su recorrido por GPS. Una segunda app registra número, hora y duración de las llamadas del celular de la empresa (sin grabarlas). En otra rama hay un asistente de IA por WhatsApp para ventas y recompras, y firmware para los surtidores de agua de H2O Vital.\n\nPor dentro: monorepo TypeScript con NestJS 10 y Prisma 6 (43 módulos en la API), Next.js 14 con TanStack Query para el panel, y un paquete de dominio compartido con los esquemas Zod, la máquina de estados de la orden y la regla del IVA. PostgreSQL 16, el dinero como enteros en pesos, facturas y certificados en PDF, notificaciones push con Firebase, correo, WhatsApp Cloud API, exportación a Siigo, respaldos y scripts de datos de demostración que solo corren contra una base local. 968 commits desde julio de 2026, unos 4.250 tests en 241 archivos y 30 documentos de diseño.",
        image: "/projects/sth-portada.jpg",
        images: [
            { src: "/projects/sth-portada.jpg", caption: "Tablero del día en la oficina y la app del operario en campo (datos de demostración)" },
            { src: "/projects/sth-donde-estan.jpg", caption: "Dónde están: los operarios en el mapa, con su estado y hace cuánto se movieron" },
            { src: "/projects/sth-agenda.jpg", caption: "Agenda visual de la semana con cada servicio en su franja" },
            { src: "/projects/sth-ordenes.jpg", caption: "Órdenes de servicio con empresa, facturación, estado y operarios" },
            { src: "/projects/sth-rutas-carrotanque.jpg", caption: "Rutas de carrotanque: paradas del día por carro, en orden" },
            { src: "/projects/sth-facturacion.jpg", caption: "Facturación de contado y a crédito, pendientes de emitir en Siigo" },
            { src: "/projects/sth-relaciones.jpg", caption: "Relación mensual de un cliente a crédito, lista para facturar" },
            { src: "/projects/sth-cartera.jpg", caption: "Cartera por cliente con semáforo de mora y gestiones de cobro" },
            { src: "/projects/sth-recompras.jpg", caption: "Recompras: a quién llamar hoy para volver a venderle" },
            { src: "/projects/sth-nomina.jpg", caption: "Nómina por servicio de cada operario" },
            { src: "/projects/sth-reportes.jpg", caption: "Reportes: cuánto entró y cuánto salió en el periodo" },
            { src: "/projects/sth-tv.jpg", caption: "Vista para la TV de la oficina: el mes, el día y lo atrasado" },
            { src: "/projects/sth-movil.jpg", caption: "La app del operario y el panel del dueño en el celular" }
        ],
        features: [
            { title: "Multiempresa", text: "Con o sin IVA decide qué empresa factura; tres empresas en un mismo sistema." },
            { title: "Operación en campo", text: "App Android del operario con paradas, llegada, fotos, firmas y GPS." },
            { title: "Despacho", text: "Tablero del día, agenda, rutas de carrotanque y mapa en vivo." },
            { title: "Plata", text: "Facturación, relaciones a crédito, cartera, caja, nómina y exportación a Siigo." }
        ],
        technologies: ["TypeScript", "NestJS", "Prisma", "PostgreSQL", "Next.js", "TanStack Query", "Zod", "Capacitor (Android)", "Firebase", "Railway"],
        techniques: [
            "Dominio compartido: Zod + máquina de estados de la orden",
            "Regla multiempresa del IVA en un solo lugar",
            "App Android propia con GPS y push",
            "Dinero como enteros en pesos",
            "Exportación contable a Siigo",
            "Datos demo que solo corren contra la base local",
            "~4.250 tests · 968 commits · 30 documentos de diseño"
        ],
        githubUrl: "https://github.com/servitanquesdelacosta/STH-Suite",
        demoUrl: "#"
    },
    {
        id: 7,
        slug: "rochi-bot",
        title: "Rochi — Recepcionista IA para una clínica estética",
        shortDescription: "Secretaria virtual de WhatsApp 24/7 para una clínica de medicina estética: atiende, valora fotos, agenda en dos sedes y hace seguimiento; con un panel PWA para la doctora.",
        fullDescription: "Rochi es la recepcionista virtual de una clínica de medicina estética con sedes en Santa Marta y Fundación. Atiende por WhatsApp a cualquier hora: entiende qué quiere la paciente, le pide fotos, arma un caso con lo que dijo en sus propias palabras y una primera lectura de las fotos, y se lo entrega a la doctora para que decida. La doctora resuelve desde el celular (tratamiento sugerido, precio, sesiones y horarios ofrecidos), ve cómo le va a llegar el mensaje a la paciente y lo envía. Después Rochi agenda la cita en su agenda propia, recuerda 24 h y 2 h antes, persigue las inasistencias, recoge la ficha de salud por chat o por nota de voz y manda seguimientos automáticos (por ejemplo, \"Botox cada 4 meses\").\n\nEl panel es una PWA móvil pensada para el iPhone de la doctora: casos por atender con tiempos de respuesta, chats, agenda por sede (día y semana), clientas con su historia, fotos con collages de antes y después listos para compartir, seguimientos, caja, campañas y reportes.\n\nPor dentro: backend en TypeScript estricto con Fastify 5 y PostgreSQL; agente con Claude que usa 68 herramientas, prompt caching y visión para valorar fotos, más un clasificador con un modelo pequeño para el control de la conversación. WhatsApp Cloud API directo, con webhooks verificados por firma HMAC. Tiene su propio motor de cupos de agenda, tareas programadas con zona horaria y un banco de evaluaciones: el agente real conversa con una paciente simulada por otro modelo y un juez lo califica con una rúbrica, sobre una base en memoria (PGlite) y con las llamadas externas interceptadas. 597 tests más un recorrido e2e en iPhone (Playwright) que revisa desbordes, toques de menos de 44 px y modo oscuro.",
        image: "/projects/rochi-portada.jpg",
        images: [
            { src: "/projects/rochi-portada.jpg", caption: "Casos por atender, el expediente de una paciente, el chat de WhatsApp y la agenda del día (datos de prueba)" },
            { src: "/projects/rochi-casos.jpg", caption: "Bandeja de casos con tiempos de respuesta y el expediente: lo que quiere, sus palabras y sus fotos" },
            { src: "/projects/rochi-resolver.jpg", caption: "La doctora resuelve el caso y ve cómo le llega el mensaje a la paciente" },
            { src: "/projects/rochi-agenda.jpg", caption: "Agenda propia por sede: día, detalle de la cita y semana" },
            { src: "/projects/rochi-clientas.jpg", caption: "Clientas, ficha de salud llenada por WhatsApp y collages de antes y después" },
            { src: "/projects/rochi-seguimientos.jpg", caption: "Seguimientos automáticos con su mensaje y la lista de a quién le toca hoy" },
            { src: "/projects/rochi-oscuro.jpg", caption: "Todo el panel funciona en modo oscuro" }
        ],
        features: [
            { title: "Atiende 24/7", text: "Responde por WhatsApp, entiende qué busca la paciente y pide las fotos necesarias." },
            { title: "Casos para la doctora", text: "Cada consulta llega resumida, con sus palabras, sus fotos y una primera lectura." },
            { title: "Agenda propia", text: "Citas en dos sedes, recordatorios 24 h y 2 h antes y manejo de inasistencias." },
            { title: "Seguimiento", text: "Ficha de salud por chat o nota de voz y mensajes de retoque programados." }
        ],
        technologies: ["TypeScript", "Fastify", "PostgreSQL", "Claude (Anthropic)", "WhatsApp Cloud API", "React", "Vite", "PWA", "Playwright"],
        techniques: [
            "Agente con 68 herramientas + prompt caching",
            "Visión para valorar fotos de pacientes",
            "Evals: paciente simulada + juez con rúbrica",
            "Motor de cupos de agenda propio",
            "Webhooks de Meta con firma HMAC",
            "PWA móvil con e2e en iPhone (Playwright)",
            "597 tests"
        ],
        githubUrl: "https://github.com/IngJoseMendez/rochiBOT",
        demoUrl: "#"
    },
    {
        id: 8,
        slug: "drogueria-los-nogales",
        title: "Los Nogales — Tienda online + asistente IA para una droguería",
        shortDescription: "E-commerce para una farmacia naturista: tienda, pagos con Wompi, panel de administración completo y Grace, una asistente de IA que vende y atiende por WhatsApp.",
        fullDescription: "Plataforma para Droguería Los Nogales, una farmacia y tienda naturista colombiana. Tiene tres partes que comparten la misma base de datos. La tienda online muestra el catálogo por categorías, el detalle de cada producto, el carrito, el pago con Wompi (Nequi, PSE, tarjeta, Bancolombia o contra entrega) y el seguimiento del pedido. El panel de administración cubre el tablero del día, pedidos y su estado, envíos con transportadora y guía, devoluciones, conversaciones de WhatsApp, carritos abandonados para recuperar, reportes, facturación, clientes, productos, inventario, vencimientos por lote, reseñas, promociones y auditoría. La tercera parte es Grace, una asistente de IA por WhatsApp que recomienda productos, arma el pedido, manda el enlace de pago y responde por el estado del envío; el equipo puede pausarla en cualquier conversación y escribir directamente.\n\nPor dentro es un monorepo con pnpm y Turborepo. La tienda y el panel van en Next.js 15. La API, en NestJS con Prisma y PostgreSQL, es la única dueña de la lógica de negocio: precios, promociones, stock reservado y movimientos, pagos con webhooks de Wompi, eventos en vivo para el tablero y la app del domiciliario. Grace corre en un servicio aparte con Fastify y Claude, con 10 herramientas sobre la API interna (buscar productos, crear pedidos, enviar el enlace de pago, consultar estados), memoria por cliente y una base de conocimiento; n8n solo transporta los mensajes de WhatsApp. Un paquete compartido tiene el motor de promociones (pack, porcentaje, N×M y precio fijo) y el manejo de dinero en pesos, ambos probados con tests.",
        image: "/projects/nogales-portada.jpg",
        images: [
            { src: "/projects/nogales-portada.jpg", caption: "La tienda en escritorio y la ficha de producto en el celular" },
            { src: "/projects/nogales-admin-chat.jpg", caption: "Grace, la asistente de IA, atendiendo y vendiendo por WhatsApp (datos de prueba)" },
            { src: "/projects/nogales-admin-dashboard.jpg", caption: "Tablero del día: ventas, pedidos por estado, productos más vendidos y eventos en vivo" },
            { src: "/projects/nogales-admin-pedidos.jpg", caption: "Pedidos de la tienda, de WhatsApp y del panel, con su estado y su pago" },
            { src: "/projects/nogales-admin-pedido.jpg", caption: "Detalle del pedido: productos, entrega, pago y cambio de estado" },
            { src: "/projects/nogales-admin-envios.jpg", caption: "Envíos: por despachar, en tránsito y entregados, con transportadora y guía" },
            { src: "/projects/nogales-admin-reportes.jpg", caption: "Reportes por periodo, comparados con el periodo anterior" },
            { src: "/projects/nogales-admin-facturacion.jpg", caption: "Facturación del periodo con método y estado de cada pago" },
            { src: "/projects/nogales-admin-vencimientos.jpg", caption: "Vencimientos por lote, con alertas de los críticos" },
            { src: "/projects/nogales-admin-carritos.jpg", caption: "Carritos abandonados para recuperar la venta por WhatsApp" },
            { src: "/projects/nogales-tienda-catalogo.jpg", caption: "Catálogo con categorías, filtros y promociones" },
            { src: "/projects/nogales-tienda-seguimiento.jpg", caption: "El cliente sigue su pedido con el número que recibió" },
            { src: "/projects/nogales-movil.jpg", caption: "La tienda pensada para el celular" }
        ],
        features: [
            { title: "Tienda online", text: "Catálogo, carrito, pago con Wompi y seguimiento del pedido." },
            { title: "Vende por WhatsApp", text: "Grace recomienda, arma el pedido y manda el enlace de pago." },
            { title: "Operación diaria", text: "Pedidos, envíos con guía, devoluciones y carritos abandonados." },
            { title: "Control de la droguería", text: "Inventario, vencimientos por lote, facturación y reportes." }
        ],
        technologies: ["Next.js 15", "NestJS", "Prisma", "PostgreSQL", "Fastify", "Claude (Anthropic)", "Wompi", "n8n", "Turborepo"],
        techniques: [
            "Monorepo pnpm + Turborepo con paquete compartido",
            "API como única dueña de la lógica de negocio",
            "Agente IA con 10 herramientas sobre la API interna",
            "Memoria por cliente + base de conocimiento",
            "Pagos Wompi con webhooks",
            "Motor de promociones probado (pack, %, N×M, fijo)",
            "Stock reservado y movimientos auditables"
        ],
        githubUrl: "https://github.com/IngJoseMendez/nogales",
        demoUrl: "#"
    },
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
