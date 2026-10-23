import Reveal from './ui/Reveal'
import { projectsData } from '../data/projectsData'

const dosCifras = (n) => String(n).padStart(2, '0')
// Los proyectos con un agente de IA son los que usan Claude
const conIA = projectsData.filter(p => p.technologies.some(t => /claude/i.test(t))).length

// Commits propios en 2026 y tests contados en los repos de los proyectos (actualizado al 23-oct-2026)
const STATS = [
  { k: dosCifras(projectsData.length), v: "proyectos" },
  { k: dosCifras(conIA), v: "con agentes de IA" },
  { k: "1.400+", v: "commits en 2026" },
  { k: "6.000+", v: "tests automatizados" },
]

export default function Stats() {
  return (
    <section aria-label="Métricas" className="border-y border-line bg-surface/30">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((s, i) => (
          <Reveal key={s.v} delay={i * 70} className="text-center md:text-left">
            <div className="font-mono text-2xl md:text-3xl font-bold text-accent tracking-tight">{s.k}</div>
            <div className="font-mono text-xs text-muted mt-1">{s.v}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
