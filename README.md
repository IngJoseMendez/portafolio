# Portafolio · José Méndez

Arquitecto de soluciones de software e IA y desarrollador full stack (Java / Spring Boot, TypeScript, PostgreSQL).
En vivo: https://portafolio-two-iota-97.vercel.app

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm test         # pruebas (Vitest + Testing Library)
npm run lint
npm run build    # build de producción en dist/
```

## Dónde se edita el contenido

- `src/data/siteData.js`: datos personales, perfil, habilidades, trayectoria (`timeline`) y enlace al CV.
- `src/data/projectsData.js`: proyectos y sus capturas (`public/projects/`).
- `public/cv-jose-mendez.pdf`: hoja de vida que se descarga desde el sitio.
- `index.html`: título, descripción, vista previa al compartir (Open Graph) y datos estructurados.
- `vercel.json`: redirige todas las rutas a la SPA para que `/project/:id` funcione al recargar o compartir.
