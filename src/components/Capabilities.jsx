import { capabilities } from '../data/capabilitiesData'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'

export default function Capabilities() {
  return (
    <section id="capacidades" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionHeader command="$ cat capacidades.md" title="Capacidades técnicas · 2026">
          Las técnicas y herramientas que uso hoy — de agentes de IA y RAG a concurrencia, datos y automatización.
        </SectionHeader>
        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((cap, ci) => (
            <Reveal key={cap.title} delay={ci * 80}>
              <div className="h-full border border-line rounded-xl bg-surface p-6 hover:border-accent/50 transition-colors">
                <p className="font-mono text-xs text-muted mb-3"><span className="text-accent">~/</span>{cap.command}</p>
                <h3 className="text-ink-hi font-bold mb-4">{cap.title}</h3>
                <ul className="space-y-2.5">
                  {cap.items.map(it => (
                    <li key={it} className="flex items-start gap-2.5 text-sm text-ink">
                      <span className="text-accent font-mono mt-0.5 shrink-0">▸</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
