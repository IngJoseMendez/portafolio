import Reveal from './ui/Reveal'
import { projectsData } from '../data/projectsData'

const dosCifras = (n) => String(n).padStart(2, '0')
// Impacto en producción, dato de José (nov-2026): STH Suite (3 empresas, 15 usuarios, 400+ órdenes/mes)
// y Surtix (1 empresa, 5 usuarios, 300+ pedidos/mes)
const STATS = [
  { k: "04", v: "empresas operan en mis sistemas" },
  { k: "1.000+", v: "órdenes al mes en producción" },
  { k: "20", v: "usuarios a diario" },
  { k: dosCifras(projectsData.length), v: "proyectos" },
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
