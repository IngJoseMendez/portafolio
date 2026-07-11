# Rediseño de Portafolio "Consola" — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rediseñar el portafolio de Jose Méndez con la dirección visual "Consola" (terminal/ingeniero), aplicada a todas las secciones, con animaciones reales y contenido real.

**Architecture:** App React 19 + Vite 7 + Tailwind v4 (sin cambios de routing). Se introduce un sistema de design tokens en CSS (`@theme`), fuentes self-hosted, un set de componentes primitivos reutilizables (`src/components/ui/`), hooks de animación ligeros (IntersectionObserver + typewriter, sin librería pesada), y datos centralizados (`src/data/`). Verificación por capas: tests de render/lógica con Vitest + React Testing Library, `build`/`lint` en verde, y verificación visual con Playwright (screenshots desktop+móvil) contra el mockup aprobado.

**Tech Stack:** React 19, Vite 7, Tailwind CSS v4 (`@tailwindcss/vite`), react-router-dom 7, react-icons, Vitest + @testing-library/react + jsdom, fuentes vía `@fontsource-variable/*`.

## Global Constraints

- **Framework/versiones:** React `^19.1.1`, Vite `^7.1.7`, Tailwind `^4.1.14`, react-router-dom `^7.12.0`. No cambiar mayores.
- **Sin CDNs externos de fuentes:** quitar el `<link>` de Google Fonts (Montserrat) de `index.html`; todas las fuentes self-hosted vía `@fontsource-variable`.
- **Tema único oscuro** (compromiso deliberado): no implementar toggle light/dark.
- **Accesibilidad de motion:** toda animación respeta `prefers-reduced-motion: reduce` (muestra estado final; contenido siempre visible sin JS).
- **Paleta exacta (hex):** bg `#0a0f0e`, surface `#0e1513`, bar `#0b1210`, line `rgba(52,211,153,.16)`, line-soft `rgba(255,255,255,.08)`, ink `#dbe6df`, ink-hi `#f2f7f4`, muted `#7f8f88`, accent `#34d399`, accent-dim `#1f8a63`, amber `#f5b544`, danger `#ff5f57`.
- **Tipografía:** display/UI = Geist; mono = JetBrains Mono. Fallbacks `system-ui` / `ui-monospace, Consolas`.
- **Contacto:** `mailto:josealbertomendez13@gmail.com` (sin backend).
- **Copy del footer (exacto):**
  ```
  // © 2026 Jose Méndez · Ingeniero de Sistemas
  // built with React + Tailwind — el mejor de todos los ingenieros ;)
  ```
- **Foto del hero:** `https://res.cloudinary.com/dxl97cptv/image/upload/v1783721300/Gemini_Generated_Image__shgnnq.png` (recortar marca de agua con `object-position`).
- **Commits frecuentes:** uno por tarea. Trabajar en la rama `redesign/consola` (ya creada).
- **Referencia visual:** el mockup aprobado (dirección 02 · Consola) y el spec `docs/superpowers/specs/2026-07-10-portfolio-redesign-consola-design.md`.

---

## File Structure

```
index.html                         # MOD: quitar Montserrat CDN, title, lang=es, favicon, meta description
vite.config.js                     # MOD: añadir config de Vitest
package.json                       # MOD: deps de test + fuentes + scripts
src/
  main.jsx                         # (sin cambios — index.css importa tema/fuentes)
  index.css                        # MOD: @import tailwind + @import theme/fonts + base global
  App.jsx                          # MOD: ensamblar secciones, quitar useState/count muerto
  App.css                          # DELETE (CSS muerto de Vite)
  styles/
    theme.css                      # NEW: @theme (tokens color/fuente) + CSS vars + utilidades base
    fonts.css                      # NEW: @import de @fontsource-variable (Geist, JetBrains Mono)
  test/
    setup.js                       # NEW: jest-dom + mocks (IntersectionObserver, matchMedia)
  lib/
    useReveal.js                   # NEW: hook IntersectionObserver (boot-reveal)
  data/
    siteData.js                    # NEW: bio, contacto, socials, CV, nav
    techData.js                    # NEW: stack por categorías
    projectsData.js                # MOD: añadir slug; preparar para más proyectos
  components/
    ui/
      DotGrid.jsx                  # NEW
      WindowFrame.jsx              # NEW
      StatusBar.jsx                # NEW
      MonoChip.jsx                 # NEW
      CommandButton.jsx            # NEW
      SectionHeader.jsx            # NEW
      AvailBadge.jsx               # NEW
      Reveal.jsx                   # NEW (usa useReveal)
      Typewriter.jsx               # NEW
      icons.jsx                    # NEW: SVGs (github, linkedin, instagram, arrow, download)
    Header.jsx                     # MOD (rediseño Consola)
    Hero.jsx                       # MOD (rediseño Consola)
    About.jsx                      # NEW (whoami)
    Technologies.jsx               # MOD (marquee -> bento)
    projects.jsx                   # MOD (repo-cards) — nombre real en minúscula
    ProjectCard.jsx                # MOD
    ProjectDetail.jsx              # MOD (estilo terminal)
    Contact.jsx                    # NEW
    Footer.jsx                     # MOD
```

---

## Verificación visual (helper reutilizable)

Varias tareas terminan con "verificación visual". Procedimiento estándar (no se commitea; script vive en el scratchpad durante la ejecución):

1. Levantar el server: `npm run dev` (Vite en `http://localhost:5173`).
2. Ejecutar un script Playwright de captura (Python, ya disponible en el entorno) como este, ajustando `TARGET`:

```python
from playwright.sync_api import sync_playwright
TARGET = "http://localhost:5173/"          # o /project/1
with sync_playwright() as p:
    b = p.chromium.launch()
    for w, name in [(1280, "desktop"), (390, "mobile")]:
        pg = b.new_page(viewport={"width": w, "height": 900}, device_scale_factor=2)
        pg.goto(TARGET); pg.wait_for_load_state("networkidle"); pg.wait_for_timeout(2600)
        pg.screenshot(path=f"shot-{name}.png", full_page=True)
    b.close()
```

3. Abrir los PNG y comparar contra el mockup/spec: paleta menta, mono en etiquetas, marcos de ventana, legibilidad, sin scroll horizontal, foto sin marca de agua.

Criterio de aprobación por tarea visual: coincide con la dirección Consola, responsive correcto, sin overflow horizontal, `prefers-reduced-motion` respetado.

---

## Task 1: Tooling y arnés de tests

**Files:**
- Modify: `package.json` (scripts + devDependencies)
- Modify: `vite.config.js`
- Create: `src/test/setup.js`
- Create: `src/test/smoke.test.jsx`

- [ ] **Step 1: Instalar dependencias de test**

```bash
npm i -D vitest@^3 @testing-library/react@^16 @testing-library/jest-dom@^6 @testing-library/user-event@^14 jsdom@^25
```
(Vitest 3 es compatible con Vite 7. Si `npm` reporta conflicto de peer-deps con Vite, usar la versión de Vitest que soporte Vite 7 en ese momento.)

- [ ] **Step 2: Añadir scripts en `package.json`**

En `"scripts"` añadir:
```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 3: Configurar Vitest en `vite.config.js`**

Reemplazar el contenido por:
```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
    css: true,
  },
})
```

- [ ] **Step 4: Crear `src/test/setup.js` (jest-dom + mocks)**

```js
import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// jsdom no implementa IntersectionObserver ni matchMedia
class IO {
  constructor(cb) { this.cb = cb }
  observe(el) { this.cb([{ isIntersecting: true, target: el }]) }
  unobserve() {}
  disconnect() {}
}
vi.stubGlobal('IntersectionObserver', IO)

window.matchMedia = window.matchMedia || function () {
  return { matches: false, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} }
}
```

- [ ] **Step 5: Escribir el smoke test**

`src/test/smoke.test.jsx`:
```jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

function Hello() { return <p>hola consola</p> }

describe('arnés', () => {
  it('renderiza', () => {
    render(<Hello />)
    expect(screen.getByText('hola consola')).toBeInTheDocument()
  })
})
```

- [ ] **Step 6: Correr los tests**

Run: `npm test`
Expected: PASS (1 test).

- [ ] **Step 7: Confirmar que build y lint siguen verdes**

Run: `npm run build && npm run lint`
Expected: build OK, lint sin errores nuevos.

- [ ] **Step 8: Commit**

```bash
git add package.json package-lock.json vite.config.js src/test
git commit -m "chore: add vitest + testing-library harness"
```

---

## Task 2: Design tokens y estilos globales

**Files:**
- Create: `src/styles/theme.css`
- Modify: `src/index.css`
- Modify: `index.html`
- Delete: `src/App.css`
- Modify: `src/App.jsx` (quitar `import './App.css'`)

**Interfaces:**
- Produces: utilidades Tailwind `bg-bg`, `bg-surface`, `bg-bar`, `text-ink`, `text-ink-hi`, `text-muted`, `text-accent`, `border-line`, `border-line-soft`, `font-sans`, `font-mono`; CSS vars `--color-accent`, `--color-amber`, etc.; clase `.dotgrid` (fondo de puntos); keyframes `blink`.

- [ ] **Step 1: Crear `src/styles/theme.css` con tokens (Tailwind v4 `@theme`)**

```css
@theme {
  --color-bg: #0a0f0e;
  --color-surface: #0e1513;
  --color-bar: #0b1210;
  --color-line: rgba(52, 211, 153, 0.16);
  --color-line-soft: rgba(255, 255, 255, 0.08);
  --color-ink: #dbe6df;
  --color-ink-hi: #f2f7f4;
  --color-muted: #7f8f88;
  --color-accent: #34d399;
  --color-accent-dim: #1f8a63;
  --color-amber: #f5b544;
  --color-danger: #ff5f57;

  --font-sans: "Geist Variable", system-ui, -apple-system, "Segoe UI", sans-serif;
  --font-mono: "JetBrains Mono Variable", ui-monospace, "SF Mono", Consolas, monospace;
}

/* fondo de puntos reutilizable (decorativo) */
.dotgrid {
  background-image: radial-gradient(var(--color-line) 1px, transparent 1px);
  background-size: 22px 22px;
}

@keyframes blink { 50% { opacity: 0 } }

/* estado inicial de reveal; JS lo activa. Sin JS o reduced-motion => visible */
.reveal { opacity: 1; transform: none; }
.js-motion .reveal { opacity: 0; transform: translateY(18px); transition: opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1); }
.js-motion .reveal.is-in { opacity: 1; transform: none; }

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
  .js-motion .reveal { opacity: 1 !important; transform: none !important; }
}

:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; border-radius: 6px; }
```

- [ ] **Step 2: Reescribir `src/index.css`**

```css
@import "tailwindcss";
@import "./styles/fonts.css";
@import "./styles/theme.css";

html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-ink);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
```

(Nota: `fonts.css` se crea en Task 3; hasta entonces el `@import` puede quedar comentado. Para no romper el build, crear `src/styles/fonts.css` vacío ahora si Task 3 no se ha hecho.)

- [ ] **Step 3: Crear `src/styles/fonts.css` vacío (placeholder de import, se llena en Task 3)**

```css
/* fuentes self-hosted — ver Task 3 */
```

- [ ] **Step 4: Limpiar `index.html`**

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Jose Méndez — Ingeniero de Sistemas full-stack. Backend con Java y Spring Boot, análisis de datos y automatización de procesos." />
    <title>Jose Méndez · Ingeniero de Sistemas</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 5: Borrar `src/App.css` y su import**

```bash
git rm src/App.css
```
En `src/App.jsx` quitar la línea `import './App.css'`.

- [ ] **Step 6: Verificar build**

Run: `npm run build`
Expected: build OK (Tailwind genera utilidades de los tokens).

- [ ] **Step 7: Verificación visual rápida**

Levantar `npm run dev` y confirmar que el fondo global es el negro-verdoso `#0a0f0e` (no el gris anterior).

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: add Consola design tokens and global styles"
```

---

## Task 3: Fuentes self-hosted (Geist + JetBrains Mono)

**Files:**
- Modify: `package.json`
- Modify: `src/styles/fonts.css`

- [ ] **Step 1: Instalar fuentes**

```bash
npm i @fontsource-variable/geist @fontsource-variable/jetbrains-mono
```
Si `@fontsource-variable/geist` no existiera en el registro, usar la alternativa grotesca equivalente (NO Inter/Space Grotesk):
```bash
npm i @fontsource-variable/sora
```
…y en el paso 2 importar `sora` y cambiar `--font-sans` a `"Sora Variable", system-ui, sans-serif` en `theme.css`.

- [ ] **Step 2: Rellenar `src/styles/fonts.css`**

```css
@import "@fontsource-variable/geist";
@import "@fontsource-variable/jetbrains-mono";
```

- [ ] **Step 3: Verificar que la fuente aplica**

Levantar `npm run dev`; con Playwright evaluar la fuente computada del `body`:
```python
# dentro de un script Playwright
val = pg.eval_on_selector("body", "el => getComputedStyle(el).fontFamily")
print(val)  # debe incluir "Geist"
```
Expected: contiene `Geist` (o la alternativa elegida).

- [ ] **Step 4: Build + lint**

Run: `npm run build && npm run lint`
Expected: OK.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json src/styles/fonts.css src/styles/theme.css
git commit -m "feat: self-host Geist + JetBrains Mono fonts"
```

---

## Task 4: Datos centralizados

**Files:**
- Create: `src/data/siteData.js`
- Create: `src/data/techData.js`
- Modify: `src/data/projectsData.js`
- Create: `src/data/data.test.js`

**Interfaces:**
- Produces:
  - `siteData` = `{ name, role, focus: string[], email, cvUrl, socials: {github,linkedin,instagram}, bioLines: string[], hero: {kicker, stackLine, blurb, chips: string[]} }`
  - `techCategories` = `Array<{ title: string, items: Array<{ name, icon, color }> }>`
  - `projectsData` = `Array<{ id:number, slug:string, title, shortDescription, fullDescription, image, images:string[], technologies:string[], githubUrl, demoUrl }>`

- [ ] **Step 1: Crear `src/data/siteData.js`**

```js
export const siteData = {
  name: "Jose Méndez",
  role: "Ingeniero de Sistemas",
  focus: ["backend", "full-stack", "análisis de datos", "automatización"],
  email: "josealbertomendez13@gmail.com",
  cvUrl: "https://drive.google.com/file/d/1iwOC997UtA1Yx6h-zX3FAzR6R6O3wHEK/view?usp=sharing",
  photo: "https://res.cloudinary.com/dxl97cptv/image/upload/v1783721300/Gemini_Generated_Image__shgnnq.png",
  socials: {
    github: "https://github.com/IngJoseMendez",
    linkedin: "https://www.linkedin.com/in/jose-alberto-m%C3%A9ndez-dom%C3%ADnguez-91b473257/",
    instagram: "https://www.instagram.com/jose.mendez1207/",
  },
  hero: {
    kicker: "// ingeniero de sistemas",
    stackLine: "const stack = [Java, Spring, React]",
    blurb: "Backend & full-stack. APIs REST con Spring Security + JWT, JPA/PostgreSQL, contenedores y despliegue en la nube. Código limpio, en capas y probado.",
    chips: ["Java 17", "Spring Boot 3", "PostgreSQL", "Docker", "React"],
  },
  bioLines: [
    "Ingeniero de Sistemas full-stack con foco en el backend. Diseño y construyo APIs REST seguras y sistemas en capas con Java 17 y Spring Boot 3, con datos consistentes en PostgreSQL y despliegue en la nube; en el front me muevo con React.",
    "Trabajo también en análisis de datos —convierto datos crudos en métricas que sirven para decidir— y en automatización de procesos, eliminando el trabajo manual repetitivo con scripts e integraciones para que los sistemas hagan el trabajo pesado.",
    "Me obsesiona el código limpio, probado y que aguanta en producción: del ERP de una PyME al sistema de una oficina médica.",
  ],
  nav: [
    { label: "~/inicio", href: "#inicio" },
    { label: "~/stack", href: "#stack" },
    { label: "~/proyectos", href: "#proyectos" },
    { label: "~/contacto", href: "#contacto" },
  ],
}
```

- [ ] **Step 2: Crear `src/data/techData.js`**

```js
import {
  SiPhp, SiLaravel, SiSpringboot, SiReact, SiGithub, SiGitlab,
  SiDocker, SiGrafana, SiCplusplus, SiPython, SiMysql, SiPostgresql
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BsBoxes } from "react-icons/bs";
import { VscTerminalCmd } from "react-icons/vsc";

export const techCategories = [
  {
    title: "Lenguajes",
    items: [
      { name: "Java", icon: FaJava, color: "text-orange-500" },
      { name: "Python", icon: SiPython, color: "text-yellow-400" },
      { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
      { name: "C++", icon: SiCplusplus, color: "text-blue-500" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
      { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
      { name: "React", icon: SiReact, color: "text-cyan-400" },
    ],
  },
  {
    title: "Bases de datos",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-300" },
    ],
  },
  {
    title: "DevOps & Observabilidad",
    items: [
      { name: "Docker", icon: SiDocker, color: "text-blue-500" },
      { name: "Docker Compose", icon: BsBoxes, color: "text-blue-400" },
      { name: "GitHub", icon: SiGithub, color: "text-white" },
      { name: "GitLab", icon: SiGitlab, color: "text-orange-400" },
      { name: "Grafana", icon: SiGrafana, color: "text-orange-500" },
      { name: "Loki", icon: VscTerminalCmd, color: "text-gray-300" },
    ],
  },
]
```

- [ ] **Step 3: Modificar `src/data/projectsData.js` (añadir `slug`)**

Añadir un campo `slug` a cada proyecto (usado en breadcrumbs del detalle). Proyecto 1: `slug: "erp-ligero"`. Proyecto 2: `slug: "oficina-medica"`. Mantener el resto igual. (El resto del archivo permanece.)

- [ ] **Step 4: Escribir tests de integridad de datos**

`src/data/data.test.js`:
```js
import { describe, it, expect } from 'vitest'
import { siteData } from './siteData'
import { techCategories } from './techData'
import { projectsData } from './projectsData'

describe('siteData', () => {
  it('tiene email válido y bio en 3 líneas', () => {
    expect(siteData.email).toMatch(/@/)
    expect(siteData.bioLines).toHaveLength(3)
    expect(siteData.focus).toContain('automatización')
  })
})

describe('techCategories', () => {
  it('tiene 4 categorías con items', () => {
    expect(techCategories).toHaveLength(4)
    techCategories.forEach(c => {
      expect(c.title).toBeTruthy()
      expect(c.items.length).toBeGreaterThan(0)
      c.items.forEach(i => expect(typeof i.icon).toBe('function'))
    })
  })
})

describe('projectsData', () => {
  it('cada proyecto tiene slug único e id', () => {
    const slugs = projectsData.map(p => p.slug)
    expect(new Set(slugs).size).toBe(projectsData.length)
    projectsData.forEach(p => { expect(p.id).toBeDefined; expect(p.slug).toBeTruthy() })
  })
})
```

- [ ] **Step 5: Correr tests**

Run: `npm test`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/data
git commit -m "feat: centralize site/tech/project data"
```

---

## Task 5: Primitivos de UI estáticos + iconos

**Files:**
- Create: `src/components/ui/icons.jsx`
- Create: `src/components/ui/DotGrid.jsx`
- Create: `src/components/ui/WindowFrame.jsx`
- Create: `src/components/ui/StatusBar.jsx`
- Create: `src/components/ui/MonoChip.jsx`
- Create: `src/components/ui/CommandButton.jsx`
- Create: `src/components/ui/SectionHeader.jsx`
- Create: `src/components/ui/AvailBadge.jsx`
- Create: `src/components/ui/ui.test.jsx`

**Interfaces:**
- Produces:
  - `icons.jsx`: `GithubIcon, LinkedinIcon, InstagramIcon, ArrowIcon, DownloadIcon` (cada uno `(props) => <svg .../>`)
  - `<DotGrid className />` — div decorativo `aria-hidden`
  - `<WindowFrame title children className>` — barra semáforo + título + cuerpo
  - `<StatusBar left right className>`
  - `<MonoChip children />` — span mono con borde
  - `<CommandButton as="a"|"button" href variant="primary"|"ghost" icon children />`
  - `<SectionHeader command title children />` — encabezado con prefijo `$ command`
  - `<AvailBadge children />` — badge ámbar

- [ ] **Step 1: Crear `src/components/ui/icons.jsx`**

```jsx
const base = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", viewBox: "0 0 24 24" }
export const GithubIcon = (p) => (<svg {...base} {...p}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>)
export const LinkedinIcon = (p) => (<svg {...base} {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>)
export const InstagramIcon = (p) => (<svg {...base} {...p}><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>)
export const ArrowIcon = (p) => (<svg {...base} {...p}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>)
export const DownloadIcon = (p) => (<svg {...base} {...p}><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></svg>)
```

- [ ] **Step 2: Crear los primitivos**

`src/components/ui/DotGrid.jsx`:
```jsx
export default function DotGrid({ className = "" }) {
  return <div aria-hidden="true" className={`dotgrid absolute inset-0 -z-10 ${className}`} />
}
```

`src/components/ui/WindowFrame.jsx`:
```jsx
export default function WindowFrame({ title, children, className = "" }) {
  return (
    <div className={`rounded-xl overflow-hidden border border-line bg-surface ${className}`}>
      <div className="flex items-center gap-2 h-8 px-3 bg-bar border-b border-line">
        <span className="w-2.5 h-2.5 rounded-full bg-danger" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber" />
        <span className="w-2.5 h-2.5 rounded-full bg-accent" />
        {title && <span className="ml-2 font-mono text-[11px] text-muted truncate">{title}</span>}
      </div>
      <div>{children}</div>
    </div>
  )
}
```

`src/components/ui/StatusBar.jsx`:
```jsx
export default function StatusBar({ left, right, className = "" }) {
  return (
    <div className={`flex items-center gap-3 h-8 px-4 font-mono text-[11px] text-muted bg-bar border-b border-line ${className}`}>
      <span>{left}</span>
      {right && <span className="ml-auto">{right}</span>}
    </div>
  )
}
```

`src/components/ui/MonoChip.jsx`:
```jsx
export default function MonoChip({ children }) {
  return <span className="font-mono text-[11.5px] px-2.5 py-1.5 rounded-lg border border-line text-accent bg-accent/5">{children}</span>
}
```

`src/components/ui/CommandButton.jsx`:
```jsx
export default function CommandButton({ as = "a", href, onClick, variant = "primary", icon: Icon, children }) {
  const Comp = as
  const cls = variant === "primary"
    ? "bg-accent text-[#052015] font-semibold hover:shadow-[0_12px_34px_-10px_rgba(52,211,153,.6)]"
    : "border border-line-soft text-ink font-mono hover:border-accent"
  return (
    <Comp
      href={href} onClick={onClick}
      className={`inline-flex items-center gap-2 px-5 py-3 rounded-[10px] text-sm transition-all duration-200 hover:-translate-y-0.5 ${cls}`}
    >
      {children}{Icon && <Icon className="w-4 h-4" />}
    </Comp>
  )
}
```

`src/components/ui/SectionHeader.jsx`:
```jsx
export default function SectionHeader({ command, title, children }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-sm text-accent mb-3">{command}</p>
      <h2 className="text-ink-hi font-bold tracking-tight text-3xl md:text-4xl text-balance">{title}</h2>
      {children && <p className="text-muted mt-3 max-w-2xl leading-relaxed">{children}</p>}
    </div>
  )
}
```

`src/components/ui/AvailBadge.jsx`:
```jsx
export default function AvailBadge({ children = "disponible" }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] text-amber bg-bar/80 border border-amber/30 rounded-lg px-2.5 py-1.5">
      <span className="w-2 h-2 rounded-full bg-amber shadow-[0_0_10px_var(--color-amber)]" />{children}
    </span>
  )
}
```

- [ ] **Step 3: Tests de los primitivos con lógica de props**

`src/components/ui/ui.test.jsx`:
```jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import WindowFrame from './WindowFrame'
import CommandButton from './CommandButton'
import SectionHeader from './SectionHeader'
import { ArrowIcon } from './icons'

describe('WindowFrame', () => {
  it('muestra el título y los hijos', () => {
    render(<WindowFrame title="portrait.jpg"><p>contenido</p></WindowFrame>)
    expect(screen.getByText('portrait.jpg')).toBeInTheDocument()
    expect(screen.getByText('contenido')).toBeInTheDocument()
  })
})

describe('CommandButton', () => {
  it('renderiza como enlace con href e icono', () => {
    render(<CommandButton as="a" href="#x" icon={ArrowIcon}>Ver</CommandButton>)
    const a = screen.getByRole('link', { name: /ver/i })
    expect(a).toHaveAttribute('href', '#x')
  })
})

describe('SectionHeader', () => {
  it('muestra comando y título', () => {
    render(<SectionHeader command="$ cat stack.json" title="Tecnologías" />)
    expect(screen.getByText('$ cat stack.json')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Tecnologías' })).toBeInTheDocument()
  })
})
```

- [ ] **Step 4: Correr tests**

Run: `npm test`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/ui
git commit -m "feat: add Consola UI primitives and icons"
```

---

## Task 6: Hook `useReveal` + componente `Reveal`

**Files:**
- Create: `src/lib/useReveal.js`
- Create: `src/components/ui/Reveal.jsx`
- Create: `src/lib/useReveal.test.jsx`

**Interfaces:**
- Consumes: clases `.reveal`/`.is-in`/`.js-motion` de `theme.css` (Task 2).
- Produces: `useReveal()` → `ref` para asignar a un elemento; añade `is-in` al entrar al viewport. `<Reveal as="div" delay={0} className>` wrapper que aplica `.reveal` + ref y `transition-delay`.

- [ ] **Step 1: Escribir el test (activa `is-in` al observar)**

`src/lib/useReveal.test.jsx`:
```jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Reveal from '../components/ui/Reveal'

// El mock de IntersectionObserver (setup.js) dispara isIntersecting=true al observar
describe('Reveal', () => {
  it('marca is-in cuando entra al viewport', () => {
    render(<Reveal><span>hola</span></Reveal>)
    const el = screen.getByText('hola').parentElement
    expect(el.className).toMatch(/is-in/)
  })
})
```

- [ ] **Step 2: Verificar que falla**

Run: `npm test -- useReveal`
Expected: FAIL (no existe `Reveal`).

- [ ] **Step 3: Implementar `src/lib/useReveal.js`**

```js
import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { el.classList.add('is-in'); return }
    document.documentElement.classList.add('js-motion')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { el.classList.add('is-in'); io.unobserve(el) } })
    }, { threshold: 0.12 })
    io.observe(el)
    const t = setTimeout(() => el.classList.add('is-in'), 2500) // safety
    return () => { io.disconnect(); clearTimeout(t) }
  }, [])
  return ref
}
```

- [ ] **Step 4: Implementar `src/components/ui/Reveal.jsx`**

```jsx
import { useReveal } from '../../lib/useReveal'

export default function Reveal({ as: Comp = 'div', delay = 0, className = '', children }) {
  const ref = useReveal()
  return (
    <Comp ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Comp>
  )
}
```

- [ ] **Step 5: Verificar que pasa**

Run: `npm test -- useReveal`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/lib/useReveal.js src/lib/useReveal.test.jsx src/components/ui/Reveal.jsx
git commit -m "feat: add useReveal hook and Reveal component"
```

---

## Task 7: Componente `Typewriter`

**Files:**
- Create: `src/components/ui/Typewriter.jsx`
- Create: `src/components/ui/Typewriter.test.jsx`

**Interfaces:**
- Produces: `<Typewriter text="..." speed={42} className />` — escribe `text` carácter a carácter con cursor; con `prefers-reduced-motion` muestra el texto completo de inmediato. Renderiza el texto completo en el DOM inicial (fallback sin JS) y lo anima en efecto.

- [ ] **Step 1: Escribir el test (el texto completo está presente)**

`src/components/ui/Typewriter.test.jsx`:
```jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Typewriter from './Typewriter'

describe('Typewriter', () => {
  it('el texto completo es accesible (reduced-motion en setup)', () => {
    render(<Typewriter text="const stack = []" />)
    expect(screen.getByText('const stack = []')).toBeInTheDocument()
  })
})
```
(En jsdom, `matchMedia().matches` es `false` por el mock, así que el efecto se ejecuta; para el test lo simple es que el texto final quede en el DOM. La implementación escribe de forma síncrona hasta el final si `speed<=0` o si no hay `requestAnimationFrame`; ver impl.)

- [ ] **Step 2: Implementar `src/components/ui/Typewriter.jsx`**

```jsx
import { useEffect, useRef, useState } from 'react'

export default function Typewriter({ text, speed = 42, className = '' }) {
  const reduce = typeof window !== 'undefined' && window.matchMedia
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [shown, setShown] = useState(reduce ? text : '')
  const done = useRef(reduce)

  useEffect(() => {
    if (reduce) return
    let i = 0, id
    const tick = () => { i++; setShown(text.slice(0, i)); if (i < text.length) id = setTimeout(tick, speed); else done.current = true }
    id = setTimeout(tick, speed)
    return () => clearTimeout(id)
  }, [text, speed, reduce])

  return (
    <span className={`font-mono ${className}`}>
      {shown}
      <span aria-hidden="true" className="inline-block w-2 h-[1em] align-[-2px] ml-0.5 bg-accent" style={{ animation: 'blink 1.05s steps(1) infinite' }} />
    </span>
  )
}
```
(Para el test: como el efecto usa `setTimeout`, el DOM inicial muestra `''`. Ajustar el test para usar `findByText` con avance de timers, o simplificar renderizando el texto completo en un `<span className="sr-only">{text}</span>` para accesibilidad y fallback. Añadir ese span:)

```jsx
// dentro del return, antes del <span> visible:
<span className="sr-only">{text}</span>
```
Con eso el test `getByText(text)` pasa siempre (fallback accesible) y el efecto visual sigue.

- [ ] **Step 3: Correr test**

Run: `npm test -- Typewriter`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/Typewriter.jsx src/components/ui/Typewriter.test.jsx
git commit -m "feat: add Typewriter component"
```

---

## Task 8: Header / Nav (rediseño Consola)

**Files:**
- Modify: `src/components/Header.jsx`

**Interfaces:**
- Consumes: `siteData.nav`, `CommandButton`.

- [ ] **Step 1: Reescribir `src/components/Header.jsx`**

```jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { siteData } from '../data/siteData'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-bg/80 backdrop-blur border-b border-line' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto px-4 md:px-8 py-4">
        <Link to="/" className="w-10 h-10 grid place-items-center border border-line rounded-[11px] font-bold text-accent font-mono">JM</Link>
        <nav className="hidden md:flex gap-6 font-mono text-[13px] text-muted">
          {siteData.nav.map(n => <a key={n.href} href={n.href} className="hover:text-ink transition-colors">{n.label}</a>)}
        </nav>
        <a href={`#contacto`} className="font-mono text-[13px] px-4 py-2 rounded-full border border-accent text-accent bg-accent/5 hover:-translate-y-0.5 transition-transform">./conversemos</a>
      </div>
    </header>
  )
}
```

- [ ] **Step 2: Verificación visual**

Levantar dev; con Playwright capturar `desktop` y `mobile`. Confirmar: nav sticky, mono, botón `./conversemos`, blur al hacer scroll (capturar con `pg.evaluate("window.scrollTo(0,300)")` antes del screenshot). En móvil los enlaces se ocultan (logo + botón visibles).

- [ ] **Step 3: Build + lint + commit**

```bash
npm run build && npm run lint
git add src/components/Header.jsx
git commit -m "feat: redesign header as Consola nav"
```

---

## Task 9: Hero (rediseño Consola)

**Files:**
- Modify: `src/components/Hero.jsx`

**Interfaces:**
- Consumes: `siteData`, `WindowFrame`, `StatusBar`, `MonoChip`, `CommandButton`, `AvailBadge`, `Typewriter`, `Reveal`, `DotGrid`, iconos.

- [ ] **Step 1: Reescribir `src/components/Hero.jsx`** (estructura del mockup aprobado)

```jsx
import { siteData } from '../data/siteData'
import WindowFrame from './ui/WindowFrame'
import StatusBar from './ui/StatusBar'
import MonoChip from './ui/MonoChip'
import CommandButton from './ui/CommandButton'
import AvailBadge from './ui/AvailBadge'
import Typewriter from './ui/Typewriter'
import Reveal from './ui/Reveal'
import DotGrid from './ui/DotGrid'
import { ArrowIcon, DownloadIcon, GithubIcon, LinkedinIcon, InstagramIcon } from './ui/icons'

export default function Hero() {
  const s = siteData
  return (
    <section id="inicio" className="relative overflow-hidden">
      <DotGrid />
      <StatusBar left="~/jose-mendez — zsh" right="main ✔ · node v20 · ready" />
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-10 md:pt-16 pb-20">
        <div className="grid md:grid-cols-[1.08fr_.92fr] gap-10 items-center">
          <Reveal className="min-w-0">
            <p className="font-mono text-sm text-accent mb-4">{s.hero.kicker}</p>
            <h1 className="text-ink-hi font-extrabold leading-[.92] tracking-[-.04em] text-[clamp(44px,7.4vw,86px)]">{s.name}</h1>
            <p className="mt-5 text-[clamp(14px,1.7vw,18px)] text-accent"><Typewriter text={s.hero.stackLine} /></p>
            <p className="mt-4 text-muted leading-relaxed max-w-[44ch]">{s.hero.blurb}</p>
            <div className="flex flex-wrap gap-3 mt-7">
              <CommandButton as="a" href="#proyectos" variant="primary" icon={ArrowIcon}>Ver proyectos</CommandButton>
              <CommandButton as="a" href={s.cvUrl} variant="ghost" icon={DownloadIcon}>Descargar CV</CommandButton>
            </div>
            <div className="flex flex-wrap gap-2 mt-7">{s.hero.chips.map(c => <MonoChip key={c}>{c}</MonoChip>)}</div>
            <div className="flex gap-4 mt-7 text-muted">
              <a href={s.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent hover:-translate-y-0.5 transition-all"><GithubIcon className="w-5 h-5" /></a>
              <a href={s.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent hover:-translate-y-0.5 transition-all"><LinkedinIcon className="w-5 h-5" /></a>
              <a href={s.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent hover:-translate-y-0.5 transition-all"><InstagramIcon className="w-5 h-5" /></a>
            </div>
          </Reveal>

          <Reveal className="flex justify-center" delay={120}>
            <WindowFrame title="portrait.jpg" className="max-w-[340px] w-full relative">
              <div className="relative aspect-[0.82] overflow-hidden">
                <img src={s.photo} alt={s.name} loading="eager" width="720" height="1279"
                  className="w-full h-full object-cover object-[50%_16%] grayscale contrast-[1.08] brightness-[1.03]" />
                <div aria-hidden="true" className="absolute inset-0 mix-blend-soft-light" style={{ background: 'linear-gradient(180deg,transparent 60%,rgba(52,211,153,.12))' }} />
                <div aria-hidden="true" className="absolute inset-0 opacity-50 mix-blend-multiply" style={{ background: 'repeating-linear-gradient(0deg,rgba(0,0,0,.16) 0 1px,transparent 1px 3px)' }} />
                <div className="absolute bottom-3 right-3"><AvailBadge /></div>
              </div>
            </WindowFrame>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verificación visual (comparar con mockup)**

Capturar desktop+mobile. Debe verse como la dirección 02 del mockup: nombre grande, línea `const stack` con typewriter+cursor, foto en ventana `portrait.jpg` con scanlines, chips, badge disponible. Marca de agua de Gemini NO visible (recortada por `object-[50%_16%]`). Sin overflow horizontal.

- [ ] **Step 3: Build + lint + commit**

```bash
npm run build && npm run lint
git add src/components/Hero.jsx
git commit -m "feat: rebuild hero in Consola direction"
```

---

## Task 10: Sección "Sobre mí" (`whoami`)

**Files:**
- Create: `src/components/About.jsx`

**Interfaces:**
- Consumes: `siteData.bioLines`, `siteData.focus`, `SectionHeader`, `WindowFrame`, `Reveal`.

- [ ] **Step 1: Crear `src/components/About.jsx`**

```jsx
import { siteData } from '../data/siteData'
import SectionHeader from './ui/SectionHeader'
import WindowFrame from './ui/WindowFrame'
import Reveal from './ui/Reveal'

export default function About() {
  const s = siteData
  return (
    <section id="sobre-mi" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionHeader command="> whoami" title="Sobre mí" />
        <div className="grid md:grid-cols-[1fr_.42fr] gap-8">
          <Reveal>
            <WindowFrame title="whoami — bash">
              <div className="p-6 md:p-8 font-mono text-sm md:text-[15px] leading-relaxed space-y-4">
                <p className="text-accent">$ whoami</p>
                {s.bioLines.map((line, i) => (
                  <p key={i} className="text-ink"><span className="text-muted select-none">{'> '}</span>{line}</p>
                ))}
                <p className="text-accent">{'> '}estado: <span className="text-amber">disponible para proyectos y oportunidades</span></p>
              </div>
            </WindowFrame>
          </Reveal>
          <Reveal delay={120}>
            <div className="border border-line rounded-xl bg-surface p-6 font-mono text-sm">
              <p className="text-muted mb-2">// perfil</p>
              <p className="text-ink-hi mb-4">{s.role}</p>
              <p className="text-muted mb-2">// foco</p>
              <ul className="space-y-1">{s.focus.map(f => <li key={f} className="text-accent">· {f}</li>)}</ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verificación visual** — Capturar; confirmar bloque terminal con `$ whoami`, 3 líneas de bio, estado en ámbar, panel de perfil/foco.

- [ ] **Step 3: Build + lint + commit**

```bash
npm run build && npm run lint
git add src/components/About.jsx
git commit -m "feat: add whoami About section"
```

---

## Task 11: Tecnologías (marquee → bento)

**Files:**
- Modify: `src/components/Technologies.jsx`
- Create: `src/components/Technologies.test.jsx`

**Interfaces:**
- Consumes: `techCategories`, `SectionHeader`, `Reveal`.

- [ ] **Step 1: Escribir test (renderiza todas las categorías e items)**

`src/components/Technologies.test.jsx`:
```jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Technologies from './Technologies'
import { techCategories } from '../data/techData'

describe('Technologies', () => {
  it('muestra cada categoría y todos los items', () => {
    render(<Technologies />)
    techCategories.forEach(cat => {
      expect(screen.getByText(cat.title)).toBeInTheDocument()
      cat.items.forEach(it => expect(screen.getByText(it.name)).toBeInTheDocument())
    })
  })
})
```

- [ ] **Step 2: Verificar que falla**

Run: `npm test -- Technologies`
Expected: FAIL (el componente aún es el marquee viejo / no muestra categorías).

- [ ] **Step 3: Reescribir `src/components/Technologies.jsx`**

```jsx
import { techCategories } from '../data/techData'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'

export default function Technologies() {
  return (
    <section id="stack" className="relative py-20 md:py-28 bg-surface/40">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionHeader command="$ cat stack.json" title="Tecnologías y herramientas">
          El ecosistema con el que construyo soluciones robustas, escalables y eficientes.
        </SectionHeader>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techCategories.map((cat, ci) => (
            <Reveal key={cat.title} delay={ci * 80} className={cat.title === 'DevOps & Observabilidad' ? 'sm:col-span-2 lg:col-span-1' : ''}>
              <div className="h-full border border-line rounded-xl bg-surface p-5">
                <p className="font-mono text-xs text-muted mb-4">// {cat.title}</p>
                <ul className="flex flex-col gap-3">
                  {cat.items.map(it => {
                    const Icon = it.icon
                    return (
                      <li key={it.name} className="group flex items-center gap-3">
                        <span className="grid place-items-center w-9 h-9 rounded-lg bg-bar border border-line-soft group-hover:border-accent transition-colors">
                          <Icon className={`w-5 h-5 ${it.color}`} />
                        </span>
                        <span className="text-ink text-sm group-hover:text-ink-hi transition-colors">{it.name}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Verificar que pasa** — `npm test -- Technologies` → PASS.

- [ ] **Step 5: Retirar CSS de marquee muerto** — En `src/index.css`/estilos, eliminar `@keyframes marquee` y `.animate-marquee` si existían (ahora en `index.css` reescrito ya no están; confirmar que no quedan referencias).

- [ ] **Step 6: Verificación visual + build + lint + commit**

```bash
npm run build && npm run lint
git add src/components/Technologies.jsx src/components/Technologies.test.jsx
git commit -m "feat: rebuild Technologies as Consola bento"
```

---

## Task 12: Proyectos + ProjectCard (repo-cards)

**Files:**
- Modify: `src/components/projects.jsx` (nombre real en minúscula)
- Modify: `src/components/ProjectCard.jsx`
- Create: `src/components/Projects.test.jsx`

**Interfaces:**
- Consumes: `projectsData`, `WindowFrame`, `MonoChip`, `SectionHeader`, `Reveal`, `ArrowIcon`.

- [ ] **Step 1: Escribir test (renderiza los 2 proyectos con enlace a detalle)**

`src/components/Projects.test.jsx`:
```jsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Projects from './projects'
import { projectsData } from '../data/projectsData'

describe('Projects', () => {
  it('renderiza cada proyecto con enlace a su detalle', () => {
    render(<MemoryRouter><Projects /></MemoryRouter>)
    projectsData.forEach(p => {
      expect(screen.getByText(p.title)).toBeInTheDocument()
    })
    const links = screen.getAllByRole('link', { name: /ver_detalles/i })
    expect(links).toHaveLength(projectsData.length)
  })
})
```

- [ ] **Step 2: Verificar que falla** — `npm test -- Projects` → FAIL.

- [ ] **Step 3: Reescribir `src/components/ProjectCard.jsx`**

```jsx
import { Link } from 'react-router-dom'
import WindowFrame from './ui/WindowFrame'
import MonoChip from './ui/MonoChip'
import { ArrowIcon } from './ui/icons'

export default function ProjectCard({ project }) {
  return (
    <WindowFrame title={`${project.slug}/`} className="group hover:border-accent transition-colors">
      <div className="aspect-video overflow-hidden relative">
        <img src={project.image} alt={project.title} loading="lazy"
          className="w-full h-full object-cover grayscale contrast-[1.05] group-hover:scale-105 transition-transform duration-500" />
        <div aria-hidden="true" className="absolute inset-0 opacity-40 mix-blend-multiply" style={{ background: 'repeating-linear-gradient(0deg,rgba(0,0,0,.16) 0 1px,transparent 1px 3px)' }} />
      </div>
      <div className="p-5">
        <h3 className="text-ink-hi font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-muted text-sm mb-4 line-clamp-2">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map(t => <MonoChip key={t}>{t}</MonoChip>)}
        </div>
        <Link to={`/project/${project.id}`} className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:gap-3 transition-all">
          {'>'} ver_detalles <ArrowIcon className="w-4 h-4" />
        </Link>
      </div>
    </WindowFrame>
  )
}
```

- [ ] **Step 4: Reescribir `src/components/Projects.jsx`**

```jsx
import ProjectCard from './ProjectCard'
import { projectsData } from '../data/projectsData'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'

export default function Projects() {
  return (
    <section id="proyectos" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionHeader command="$ ls ~/proyectos" title="Proyectos destacados" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 90}><ProjectCard project={p} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Verificar que pasa** — `npm test -- Projects` → PASS.

- [ ] **Step 6: Verificación visual + build + lint + commit**

```bash
npm run build && npm run lint
git add src/components/Projects.jsx src/components/ProjectCard.jsx src/components/Projects.test.jsx
git commit -m "feat: rebuild Projects as repo-cards"
```

---

## Task 13: Detalle de proyecto (estilo terminal)

**Files:**
- Modify: `src/components/ProjectDetail.jsx`
- Create: `src/components/ProjectDetail.test.jsx`

**Interfaces:**
- Consumes: `projectsData`, `MonoChip`, `WindowFrame`, `GithubIcon`, `ArrowIcon`. Mantener: lightbox, cierre con Escape, scroll-to-top.

- [ ] **Step 1: Escribir test (proyecto existente y caso 404)**

`src/components/ProjectDetail.test.jsx`:
```jsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import ProjectDetail from './ProjectDetail'
import { projectsData } from '../data/projectsData'

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes><Route path="/project/:id" element={<ProjectDetail />} /></Routes>
    </MemoryRouter>
  )
}

describe('ProjectDetail', () => {
  it('muestra el proyecto existente', () => {
    renderAt(`/project/${projectsData[0].id}`)
    expect(screen.getByRole('heading', { name: projectsData[0].title })).toBeInTheDocument()
  })
  it('muestra 404 para id inexistente', () => {
    renderAt('/project/9999')
    expect(screen.getByText(/no encontrado/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Verificar que falla** (el título ahora será heading; si el viejo ya lo tenía como heading, el test de 404 igual valida). Run: `npm test -- ProjectDetail`.

- [ ] **Step 3: Reescribir `src/components/ProjectDetail.jsx`** (conserva lógica de lightbox/escape/scroll; reviste con estilo Consola)

Puntos clave de la reescritura (mantener la lógica existente de `useState(selectedImage)`, `useEffect` de scroll-to-top y de Escape):
- Contenedor: `min-h-screen bg-bg text-ink`.
- Breadcrumb superior: `font-mono text-accent` → `~/proyectos/{project.slug}`.
- Botón volver: `Link to="/"` con texto `$ cd ..` (mono).
- Título: `<h1>` grande `text-ink-hi`.
- Galería: imágenes dentro de `WindowFrame` (principal + grid secundarias), con `cursor-zoom-in` y lightbox igual que antes.
- Descripción: encabezado `## Descripción` (mono, accent) + `whitespace-pre-line`.
- Sidebar: panel `border border-line bg-surface`, título `dependencies` (mono), `MonoChip` por tecnología, y botón "Ver Código" (`GithubIcon`) al `project.githubUrl`.
- Lightbox: mismo comportamiento; botón cerrar con color `text-accent`, overlay `bg-bg/95 backdrop-blur`.

Código del encabezado + sidebar (el resto de la estructura de galería/lightbox se mantiene del archivo actual, sólo cambiando clases de color a tokens):
```jsx
// breadcrumb + volver
<p className="font-mono text-sm text-muted mb-2">~/proyectos/<span className="text-accent">{project.slug}</span></p>
<Link to="/" className="inline-flex items-center gap-2 font-mono text-accent mb-8 hover:gap-3 transition-all">$ cd ..</Link>

// sidebar
<div className="border border-line rounded-xl bg-surface p-5">
  <h3 className="font-mono text-accent mb-4">// dependencies</h3>
  <div className="flex flex-wrap gap-2 mb-6">
    {project.technologies.map(t => <MonoChip key={t}>{t}</MonoChip>)}
  </div>
  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
     className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-line-soft text-ink font-mono hover:border-accent transition-colors">
    <GithubIcon className="w-4 h-4" /> Ver Código
  </a>
</div>
```

- [ ] **Step 4: Verificar que pasa** — `npm test -- ProjectDetail` → PASS (ambos casos).

- [ ] **Step 5: Verificación visual** — Navegar a `/project/1`; confirmar breadcrumb mono, galería en ventanas, lightbox abre/cierra (click + Escape), sidebar `dependencies`.

- [ ] **Step 6: Build + lint + commit**

```bash
npm run build && npm run lint
git add src/components/ProjectDetail.jsx src/components/ProjectDetail.test.jsx
git commit -m "feat: restyle project detail as terminal view"
```

---

## Task 14: Sección Contacto

**Files:**
- Create: `src/components/Contact.jsx`
- Create: `src/components/Contact.test.jsx`

**Interfaces:**
- Consumes: `siteData`, `SectionHeader`, `CommandButton`, `WindowFrame`, iconos.

- [ ] **Step 1: Escribir test (email y canales presentes)**

`src/components/Contact.test.jsx`:
```jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contact from './Contact'
import { siteData } from '../data/siteData'

describe('Contact', () => {
  it('tiene enlace mailto y a redes', () => {
    render(<Contact />)
    const mail = screen.getByRole('link', { name: /escríbeme|correo|email|hablemos/i })
    expect(mail).toHaveAttribute('href', `mailto:${siteData.email}`)
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', siteData.socials.github)
  })
})
```

- [ ] **Step 2: Verificar que falla** — `npm test -- Contact` → FAIL.

- [ ] **Step 3: Crear `src/components/Contact.jsx`**

```jsx
import { siteData } from '../data/siteData'
import SectionHeader from './ui/SectionHeader'
import WindowFrame from './ui/WindowFrame'
import CommandButton from './ui/CommandButton'
import { GithubIcon, LinkedinIcon, InstagramIcon, ArrowIcon, DownloadIcon } from './ui/icons'

export default function Contact() {
  const s = siteData
  return (
    <section id="contacto" className="relative py-20 md:py-28 bg-surface/40">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <SectionHeader command={'$ echo "hablemos"'} title="Contacto">
          ¿Tienes un proyecto, una vacante o una idea? Escríbeme.
        </SectionHeader>
        <WindowFrame title="contacto — bash">
          <div className="p-6 md:p-10 font-mono">
            <p className="text-accent mb-1">$ cat contacto.txt</p>
            <p className="text-ink mb-6 break-all">{'>'} {s.email}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <CommandButton as="a" href={`mailto:${s.email}`} variant="primary" icon={ArrowIcon}>Escríbeme un correo</CommandButton>
              <CommandButton as="a" href={s.cvUrl} variant="ghost" icon={DownloadIcon}>Descargar CV</CommandButton>
            </div>
            <div className="flex gap-4 text-muted">
              <a href={s.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent transition-colors"><GithubIcon className="w-6 h-6" /></a>
              <a href={s.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors"><LinkedinIcon className="w-6 h-6" /></a>
              <a href={s.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors"><InstagramIcon className="w-6 h-6" /></a>
            </div>
          </div>
        </WindowFrame>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Verificar que pasa** — `npm test -- Contact` → PASS.

- [ ] **Step 5: Build + lint + commit**

```bash
npm run build && npm run lint
git add src/components/Contact.jsx src/components/Contact.test.jsx
git commit -m "feat: add Contact section"
```

---

## Task 15: Footer

**Files:**
- Modify: `src/components/Footer.jsx`

- [ ] **Step 1: Reescribir `src/components/Footer.jsx`**

```jsx
import { siteData } from '../data/siteData'
import { GithubIcon, LinkedinIcon, InstagramIcon } from './ui/icons'

export default function Footer() {
  const s = siteData
  return (
    <footer className="border-t border-line py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-muted">
        <div>
          <p>// © 2026 Jose Méndez · Ingeniero de Sistemas</p>
          <p>// built with React + Tailwind — el mejor de todos los ingenieros ;)</p>
        </div>
        <div className="flex gap-4">
          <a href={s.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent transition-colors"><GithubIcon className="w-5 h-5" /></a>
          <a href={s.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors"><LinkedinIcon className="w-5 h-5" /></a>
          <a href={s.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors"><InstagramIcon className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Build + lint + commit**

```bash
npm run build && npm run lint
git add src/components/Footer.jsx
git commit -m "feat: redesign footer (Consola, © 2026)"
```

---

## Task 16: Ensamblado en App + limpieza

**Files:**
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: todas las secciones. Orden en `/`: Header → Hero → About → Technologies → Projects → Contact → Footer.

- [ ] **Step 1: Reescribir `src/App.jsx`** (quitar `useState`/`count`/imports muertos)

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg overflow-x-hidden">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <main>
                <Hero />
                <About />
                <Technologies />
                <Projects />
                <Contact />
              </main>
              <Footer />
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
```
(Nota: el import de `Projects` respeta el nombre de archivo real `./components/projects` en minúscula. Si se renombra a `Projects.jsx`, actualizar el import; en Windows el sistema de archivos es case-insensitive pero Git no — mantener el nombre existente para evitar problemas.)

- [ ] **Step 2: Correr toda la suite de tests**

Run: `npm test`
Expected: PASS (todos).

- [ ] **Step 3: Build + lint**

Run: `npm run build && npm run lint`
Expected: build OK; lint sin errores (ya no hay `count`/`useState` sin usar).

- [ ] **Step 4: Verificación visual completa (home)**

Levantar `npm run dev`; capturar `desktop` y `mobile` de toda la home. Confirmar orden de secciones, coherencia Consola, sin scroll horizontal, navegación por anclas (`#stack`, `#proyectos`, `#contacto`) funciona.

- [ ] **Step 5: Commit**

```bash
git add src/App.jsx
git commit -m "feat: assemble Consola sections and remove dead code"
```

---

## Task 17: Pulido final, accesibilidad y verificación

**Files:**
- Modify: cualquiera con ajustes menores detectados.

- [ ] **Step 1: Pase de `prefers-reduced-motion`**

Con Playwright, emular reduce y verificar que el contenido es visible y sin animación:
```python
b.new_context(reduced_motion="reduce")
```
Capturar la home; confirmar que todo el texto/secciones se ven (no quedan elementos en opacity:0).

- [ ] **Step 2: Pase de accesibilidad**

- Verificar landmarks: un solo `<main>`, `<header>`, `<footer>`; headings jerárquicos (un `<h1>` en home = nombre en Hero; secciones con `<h2>`).
- `alt` en todas las imágenes (hero, portadas, galería).
- `:focus-visible` visible al tabular por nav, botones y enlaces.
- Contraste: revisar `text-muted` (#7f8f88) sobre `bg` (#0a0f0e) — si no llega a AA en textos pequeños, subir a un tono más claro (p. ej. `#95a39b`). Ajustar el token si hace falta.

- [ ] **Step 2b: Si se ajustó contraste**, actualizar `--color-muted` en `theme.css` y re-verificar.

- [ ] **Step 3: Responsive sweep**

Capturar en anchos 390, 768, 1280, 1440. Confirmar: hero apila (foto arriba), bento 1→2→4 col, proyectos 1→2→3 col, nav compacta en móvil, sin overflow horizontal en ninguna.

- [ ] **Step 4: Lighthouse (opcional pero recomendado)**

```bash
npm run build && npm run preview
# en otra terminal:
npx lighthouse http://localhost:4173 --only-categories=performance,accessibility,best-practices --chrome-flags="--headless" --output=json --output-path=./lh.json
```
Objetivo: Performance / Best Practices / Accesibilidad ≥ 90 (desktop). Anotar resultados; corregir issues evidentes (imágenes sin dimensiones, contraste).

- [ ] **Step 5: Commit final del pulido**

```bash
git add -A
git commit -m "polish: a11y, reduced-motion and responsive fixes"
```

- [ ] **Step 6: (Opcional) limpiar `lh.json`** si se generó dentro del repo:
```bash
git rm --cached lh.json 2>/dev/null; echo "lh.json" >> .gitignore; git add .gitignore
git commit -m "chore: ignore lighthouse report"
```

---

## Notas de cierre

- **DRY:** los estilos viven en tokens (`theme.css`) y primitivos (`ui/`); no repetir hex ni clases largas.
- **YAGNI:** sin librería de animación pesada, sin toggle de tema, sin backend.
- **Merge:** al terminar, ejecutar la skill `superpowers:finishing-a-development-branch` para decidir merge/PR de `redesign/consola`.
