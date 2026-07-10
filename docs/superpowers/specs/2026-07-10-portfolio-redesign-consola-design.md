# Rediseño de Portafolio — Dirección "Consola" · Design Spec

- **Proyecto:** Portafolio personal de Jose Méndez (`my-portfolio`)
- **Fecha:** 2026-07-10
- **Autor:** Jose Méndez (con Claude)
- **Estado:** Borrador para revisión
- **Stack actual:** React 19 · Vite 7 · Tailwind 4 · react-router-dom 7 · react-icons

---

## 1. Contexto y objetivo

Jose Méndez es **Ingeniero de Sistemas full-stack** con foco en **backend** (Java 17, Spring Boot 3, Spring Security + JWT, JPA/PostgreSQL, Docker, React), y además trabaja en **análisis de datos** y **automatización de procesos**. El portafolio actual funciona pero se ve **genérico** (fondo gris uniforme, acento ámbar/crema, tarjetas estándar) y tiene animaciones **rotas** (clases `animate-fade-in-*` referenciadas pero no definidas en el CSS).

**Objetivo del rediseño:** un portafolio **moderno, tecnológico y futurista, sin nada genérico**, que sirva a la vez para:
- **Empleo** — credibilidad técnica ante reclutadores y líderes técnicos.
- **Freelance** — confianza y CTA de contacto para clientes/PyMEs.
- **Marca personal** — factor "wow" que destaque ante otros devs.

**No-objetivos (YAGNI):** blog, i18n, toggle light/dark (el sitio se compromete a un único mundo visual oscuro a propósito), CMS, backend propio, autenticación.

---

## 2. Dirección visual: "Consola"

**Concepto:** el portafolio como la **consola/terminal de un ingeniero de sistemas**. Todo el sitio adopta el lenguaje visual de un entorno de desarrollo: prompts (`~/…`), bloques de terminal, marcos de "ventana", tipografía monoespaciada para datos/etiquetas, cursor parpadeante y micro-animaciones tipo "boot".

**Por qué esta dirección** (elegida por el usuario sobre "Aurora" y "Neón"): es la más **distintiva** y la que mejor comunica su identidad técnica. Riesgo controlado: se mantiene elegante y legible (no "gamer-RGB"), por lo que sigue siendo creíble para reclutadores y clientes, y a la vez encanta a devs.

**Regla de oro (anti-genérico):** el acento se gasta en UN lugar por vista; todo lo demás permanece silencioso. Nada de gradientes morados sobre blanco, ni Inter/Space Grotesk, ni emojis como marcadores de sección.

---

## 3. Sistema de diseño (tokens)

Estos tokens son la base fija y se implementan como CSS custom properties + `@theme` de Tailwind v4.

### 3.1 Color

| Token | Hex | Uso |
|---|---|---|
| `--bg` | `#0a0f0e` | Fondo base (negro con leve sesgo verde — elegido, no gris por defecto) |
| `--bg-elev` | `#0e1513` | Superficies elevadas (tarjetas, ventanas) |
| `--bg-bar` | `#0b1210` | Barras de título / status bars |
| `--line` | `rgba(52,211,153,.16)` | Bordes/hairlines con tinte menta |
| `--line-soft`| `rgba(255,255,255,.08)` | Bordes neutros |
| `--ink` | `#dbe6df` | Texto principal (blanco con leve sesgo frío/verde) |
| `--ink-hi` | `#f2f7f4` | Títulos / alto contraste |
| `--muted` | `#7f8f88` | Texto secundario |
| `--accent` | `#34d399` | **Acento** menta/esmeralda (prompts, links, botones, cursor) |
| `--accent-dim`| `#1f8a63` | Acento apagado (hover/bordes) |
| `--amber` | `#f5b544` | **Solo** estado "disponible" (semántico, no es el acento) |
| `--red` | `#ff5f57` | Solo cerrar/errores (semáforo, lightbox) |

**Contraste:** verificar `--accent` sobre `--bg` y `--muted` sobre `--bg` con AA (≥4.5:1 en texto normal). El acento se usa en texto de tamaño ≥14px o como color de UI, no para párrafos largos.

### 3.2 Tipografía

- **Display / UI:** **Geist Sans** (grotesca técnica, limpia, "de ingeniería"). Pesos 500/700/800.
- **Código / etiquetas / datos:** **JetBrains Mono** (la fuente de terminal por excelencia). Pesos 400/500/700.
- **Entrega:** ambas **auto-alojadas** (self-hosted vía `@fontsource` o `/public`), **sin CDN**, con `font-display: swap` y fallbacks (`system-ui` / `ui-monospace, Consolas`).
- **Escala tipográfica** (clamp, fluida): 
  - Display hero: `clamp(44px, 7.4vw, 86px)` / line-height .92 / tracking -.04em
  - H2 sección: `clamp(28px, 4vw, 44px)`
  - H3: `20–24px`
  - Body: `15–16px` / line-height 1.6 / máx ~65ch
  - Mono label: `11–13px` / tracking .04–.06em / a veces uppercase
- **Uso de mono:** prompts, nav, chips de tecnología, metadatos de proyectos, números/datos, comentarios `//`, líneas de comando. El cuerpo narrativo va en Geist Sans.

### 3.3 Espaciado, radios, sombras

- Escala de espaciado base 4px (usar utilidades Tailwind).
- Radios: ventanas `12px`, chips `8px`, botones `10px`.
- Sombras: sutiles y frías; el "glow" menta se reserva para hover de elementos accionables (`0 12px 34px -10px rgba(52,211,153,.6)`).
- Fondo global con **grid de puntos** sutil: `radial-gradient(rgba(52,211,153,.09) 1px, transparent 1px)`, `background-size: 22px 22px`.

### 3.4 Motion (con intención)

Principios: cada animación **significa** algo (un "boot", un prompt escribiéndose, un estado). Nada de movimiento decorativo por rellenar. **Siempre** respetar `prefers-reduced-motion: reduce` (desactiva animaciones y muestra estado final).

Catálogo:
1. **Typewriter** — líneas tipo `const stack = [...]` y prompts se escriben carácter a carácter (velocidad ~40ms), con **cursor** parpadeante (`blink 1.05s steps(1)`).
2. **Boot reveal** — al entrar cada sección al viewport (IntersectionObserver), sus elementos aparecen con `translateY(16–22px)` + fade, en **stagger** (delays 80/160/240ms). Fallback sin JS/reduced-motion: visibles.
3. **Scanlines** — overlay `repeating-linear-gradient` muy sutil sobre imágenes en marco de ventana.
4. **Hover states** — botones/comandos elevan `-2px` + glow menta; tarjetas de proyecto resaltan borde.
5. **Sticky nav** — al hacer scroll, la nav gana blur + borde inferior.
6. Sin librería de animación pesada por defecto (ver §5.4). Todo es CSS + hooks pequeños.

### 3.5 Componentes reutilizables

- **`<WindowFrame>`** — contenedor con barra de título (semáforo rojo/ámbar/verde + nombre de archivo/ruta) y cuerpo. Base de la foto del hero, galería del detalle, y opcionalmente tarjetas.
- **`<StatusBar>`** — barra mono superior (`~/ruta — zsh` · `main ✔ · ready`).
- **`<Prompt>`** — línea `~/inicio` / `$ comando` / `> salida`.
- **`<MonoChip>`** — etiqueta mono con borde (tecnologías, metadatos).
- **`<CommandButton>`** — botón primario (menta sólido) y "ghost" (borde), estilo `./comando` o texto + icono.
- **`<Typewriter>`** — componente que escribe texto (respeta reduced-motion).
- **`<Reveal>`** / hook `useReveal` — IntersectionObserver para boot-reveal con stagger.
- **`<SectionHeader>`** — encabezado de sección con prefijo de comando (`$ cat stack.json`, `> whoami`).
- **`<AvailBadge>`** — badge ámbar "disponible".
- **`<DotGrid>`** — fondo de puntos (decorativo, `aria-hidden`).

---

## 4. Estructura y contenido por sección

Orden en la home: **Nav → Hero → Sobre mí → Tecnologías → Proyectos → Contacto → Footer**. Ruta aparte: **Detalle de proyecto**.

### 4.1 Nav / Header
- **Layout:** logo `JM` en caja con borde; enlaces mono `~/inicio ~/stack ~/proyectos ~/contacto`; botón `./conversemos` (borde menta).
- **Comportamiento:** sticky; al hacer scroll gana fondo translúcido + blur + hairline inferior. En móvil, menú compacto (los enlaces se ocultan; se puede desplegar o dejar solo logo + botón).
- **Fix:** el logo enlaza a `/`; el botón a la sección Contacto (ancla) o abre email.

### 4.2 Hero
- **Layout:** dos columnas (copy izquierda / foto derecha), apila en móvil (foto arriba). StatusBar superior con `~/jose-mendez — zsh`.
- **Contenido:** kicker `// ingeniero de sistemas`; nombre grande **Jose Méndez**; línea typewriter `const stack = [Java, Spring, React]` + cursor; blurb (backend & full-stack, APIs REST con Spring Security + JWT, JPA/PostgreSQL, contenedores, nube); botones **Ver proyectos** / **Descargar CV**; chips (Java 17, Spring Boot 3, PostgreSQL, Docker, React).
- **Foto:** en `<WindowFrame>` `portrait.jpg` (semáforo), B&N con leve tinte menta (`soft-light`) + scanlines sutiles; `object-position` recorta la marca de agua de Gemini (esquina inferior derecha). Badge ámbar **disponible**.
- **Motion:** boot-reveal en stagger + typewriter en la línea de stack.

### 4.3 Sobre mí — `> whoami` *(nueva)*
- **Layout:** bloque de terminal (WindowFrame o StatusBar) que "imprime" el bio; a un lado, mini-datos: **rol** (Ingeniero de Sistemas) y **foco** (`backend · full-stack · análisis de datos · automatización`).
- **Contenido (BORRADOR — el usuario puede ajustar):**
  > `$ whoami`
  > Ingeniero de Sistemas **full-stack** con foco en el backend. Diseño y construyo APIs REST seguras y sistemas en capas con **Java 17** y **Spring Boot 3**, con datos consistentes en **PostgreSQL** y despliegue en la nube; en el front me muevo con **React**.
  > Trabajo también en **análisis de datos** —convierto datos crudos en métricas que sirven para decidir— y en **automatización de procesos**, eliminando el trabajo manual repetitivo con scripts e integraciones para que los sistemas hagan el trabajo pesado.
  > Me obsesiona el código limpio, probado y que aguanta en **producción**: del ERP de una PyME al sistema de una oficina médica.
  > `> estado: disponible para proyectos y oportunidades`
- **Motion:** el bloque "arranca" (boot) al entrar; opcional efecto de impresión línea por línea (respetando reduced-motion).

### 4.4 Tecnologías — `$ cat stack.json` (bento) *(rehecho)*
- **Cambio:** se reemplaza el marquee/carrusel por un **bento por categorías** (más rico y legible). Se conservan los íconos `react-icons` actuales dentro de tarjetas-consola.
- **Categorías y contenido (del stack actual):**
  - **Lenguajes:** Java · Python · PHP · C++
  - **Frameworks:** Spring Boot · Laravel · React
  - **Bases de datos:** PostgreSQL · MySQL
  - **DevOps & Observabilidad:** Docker · Docker Compose · Git (GitHub/GitLab) · Grafana · Loki
- **Layout:** grid tipo bento (tarjetas de distinto tamaño por categoría); cada ícono con su color de marca, hover con glow menta.
- **Motion:** boot-reveal en stagger por tarjeta. (Opcional: conservar una tira animada secundaria; por defecto NO.)

### 4.5 Proyectos — "repo cards"
- **Layout:** grid responsive (1/2/3 col). Cada tarjeta = **WindowFrame** con: barra (nombre tipo `erp-ligero/`), imagen de portada con scanlines, título, descripción corta, chips de tecnologías, y CTA `> ver_detalles`.
- **Contenido:** los 2 proyectos actuales (ERP ligero; Sistema de gestión para oficina médica). **Estructura y `projectsData` preparados para añadir más** sin tocar componentes.
- **Motion:** hover resalta borde menta + leve zoom de imagen; boot-reveal en stagger.

### 4.6 Detalle de proyecto (ruta `/project/:id`)
- **Layout:** estilo terminal. Breadcrumb-prompt `~/proyectos/<slug>`; título grande; **galería** en marcos de ventana con lightbox (se conserva la funcionalidad actual: click para pantalla completa, cerrar con Escape/botón); descripción tipo **README** (`## Descripción`); **sidebar** de tecnologías como `dependencies` + botón **Ver código** (GitHub). Botón "Volver" como `$ cd ..`.
- **Fix:** mantener el scroll-to-top y el manejo de Escape ya existentes.
- **Motion:** boot-reveal; hover en miniaturas.

### 4.7 Contacto — `$ ./contacto` *(nueva)*
- **Layout:** bloque de terminal con CTA claro. Puede ser un "formulario" estilizado (mailto o servicio como Formspree — a decidir en el plan; por defecto **mailto** para no añadir backend) y/o una lista de canales.
- **Contenido (datos reales):**
  - Email: **josealbertomendez13@gmail.com**
  - LinkedIn: `jose-alberto-méndez-domínguez` (URL actual del sitio)
  - GitHub: **IngJoseMendez**
  - Instagram: **jose.mendez1207**
  - CV: enlace de Google Drive actual
- **Motion:** prompt que se escribe (`$ echo "hablemos"`), boot-reveal.

### 4.8 Footer
- **Contenido (decisión tomada):**
  ```
  // © 2026 Jose Méndez · Ingeniero de Sistemas
  // built with React + Tailwind — el mejor de todos los ingenieros ;)
  ```
  (Línea profesional + su frase original conservada como comentario de terminal, coherente con la estética Consola.)
- **Fix:** año 2024 → 2026. Estilo mono, minimal, con socials.

---

## 5. Arquitectura de código

### 5.1 Estructura de archivos (propuesta)
```
src/
  main.jsx
  App.jsx                      # rutas (sin cambios de routing)
  styles/
    theme.css                  # @theme Tailwind v4 + custom properties (tokens §3)
    fonts.css                  # @font-face Geist + JetBrains Mono (self-hosted)
  lib/
    useReveal.js               # hook IntersectionObserver (boot-reveal)
  data/
    projectsData.js            # proyectos (existente, ampliable)
    techData.js                # stack por categorías (nuevo)
    siteData.js                # bio, contacto, socials, CV (nuevo)
  components/
    ui/                        # primitivos reutilizables (§3.5)
      WindowFrame.jsx
      StatusBar.jsx
      MonoChip.jsx
      CommandButton.jsx
      Typewriter.jsx
      Reveal.jsx
      SectionHeader.jsx
      AvailBadge.jsx
      DotGrid.jsx
    Header.jsx
    Hero.jsx
    About.jsx                  # nueva (whoami)
    Technologies.jsx           # rehecha (bento)
    Projects.jsx
    ProjectCard.jsx
    Contact.jsx                # nueva
    Footer.jsx
    ProjectDetail.jsx
```
Cada componente con una responsabilidad clara; los primitivos en `components/ui/` se pueden entender y probar de forma aislada.

### 5.2 Tokens y Tailwind v4
- Definir los tokens (§3.1–3.3) en `theme.css` con `@theme` para exponerlos como utilidades Tailwind (colores, fuentes) y como CSS vars para casos custom (gradientes, máscaras, grid de puntos).
- Eliminar el CSS muerto / no usado (`App.css` con estilos de logo de Vite; `index.css` con el `@keyframes marquee` si se retira el marquee).

### 5.3 Contenido / datos
- `siteData.js` centraliza bio, email, socials y CV → fácil de editar sin tocar JSX.
- `techData.js` agrupa el stack por categorías (§4.4).
- `projectsData.js` se mantiene y se documenta el formato para añadir proyectos.

### 5.4 Estrategia de animación (decisión)
- **Sin librería de animación pesada por defecto** (mantiene bundle pequeño → mejor Lighthouse, alineado con el objetivo "creíble y rápido para reclutadores").
- Se usa **CSS** (keyframes/transiciones) + **hooks pequeños**: `useReveal` (IntersectionObserver) y `<Typewriter>`.
- **Opcional / a evaluar en el plan:** `motion` (Framer) solo si se quiere física de resorte en alguna interacción puntual; `lenis` para smooth-scroll. Por defecto **no** se añaden.

### 5.5 Routing
- Sin cambios: `react-router-dom` con `/` y `/project/:id`. Las secciones nuevas son anclas dentro de `/`.

---

## 6. Accesibilidad y rendimiento

- **Motion:** `prefers-reduced-motion: reduce` desactiva animaciones y muestra el estado final (contenido siempre visible sin JS).
- **Contraste:** verificar tokens de texto contra fondo (AA). El acento menta se usa como UI/labels, no para párrafos largos.
- **Teclado:** `:focus-visible` visible en todos los enlaces/botones; lightbox operable y cerrable con Escape (ya existe).
- **Semántica:** landmarks (`header`, `main`, `section`, `footer`), headings jerárquicos, `alt` en imágenes, `aria-hidden` en decorativos (grid, scanlines).
- **Imágenes:** `loading="lazy"` en portadas/galería; las imágenes siguen en Cloudinary (con `width/height` para evitar CLS).
- **Fuentes:** self-hosted, `font-display: swap`, subconjunto si es posible; evitar FOIT.
- **Objetivo:** Lighthouse ≥ 90 en Performance/Best Practices/Accesibilidad en desktop.

---

## 7. Responsive

- **Breakpoints Tailwind** estándar. Móvil-first.
- **Hero/secciones de 2 col** apilan en < ~760px (foto arriba).
- **Bento tecnologías:** 1 col móvil → 2–4 según categoría en desktop.
- **Proyectos:** 1 → 2 → 3 columnas.
- **Nav:** enlaces se ocultan/compactan en móvil (logo + botón visibles).
- El `body` nunca hace scroll horizontal; overlays decorativos recortados con `overflow:hidden`.

---

## 8. Bugs / mejoras corregidos de paso

1. Clases `animate-fade-in-down/up`, `animate-fade-in`, `delay-*` del Hero **no existen** en el CSS → se implementan animaciones reales.
2. `mailto:contact@example.com` (placeholder) → email real + sección Contacto.
3. Footer `© 2024` → `© 2026`.
4. CSS muerto de Vite (`App.css`, logo-spin) → limpiar.
5. `import { useState }` y contador `count` sin uso en `App.jsx` → eliminar.

---

## 9. Criterios de éxito

- La dirección **Consola** se aplica de forma coherente a **todas** las secciones (no solo al hero).
- Todas las animaciones **funcionan** y respetan `prefers-reduced-motion`.
- Contenido **real** en todo el sitio (bio, contacto, proyectos) — sin placeholders.
- **Responsive** correcto en móvil/tablet/desktop, sin scroll horizontal.
- Rendimiento y accesibilidad en verde (Lighthouse ≥ 90).
- El sitio se siente **distintivo y de máximo nivel** — no genérico.

---

## 10. Preguntas abiertas / a resolver en el plan

- ¿Contacto por `mailto` (sin backend, por defecto) o formulario con servicio externo (Formspree/EmailJS)?
- Confirmar disponibilidad de **Geist** self-hosted; si no, alternativa grotesca equivalente (no Inter/Space Grotesk).
- Texto final del bio de "Sobre mí" (hay borrador en §4.3).
