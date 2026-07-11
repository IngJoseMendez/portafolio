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
