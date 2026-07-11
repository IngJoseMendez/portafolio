import Reveal from './ui/Reveal'

const STATS = [
  { k: "05", v: "proyectos" },
  { k: "15+", v: "tecnologías" },
  { k: "03", v: "con IA / ML" },
  { k: "2026", v: "disponible" },
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
