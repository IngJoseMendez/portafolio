import { siteData } from '../data/siteData'
import SectionHeader from './ui/SectionHeader'
import WindowFrame from './ui/WindowFrame'
import Reveal from './ui/Reveal'

function SkillCard({ command, title, items }) {
  return (
    <div className="h-full border border-line rounded-xl bg-surface p-6 hover:border-accent/50 transition-colors">
      <p className="font-mono text-xs text-muted mb-3"><span className="text-accent">~/</span>{command}</p>
      <h3 className="text-ink-hi font-bold mb-5">{title}</h3>
      <dl className="space-y-3.5">
        {items.map(it => (
          <div key={it.k} className="sm:grid sm:grid-cols-[8.5rem_1fr] sm:gap-4">
            <dt className="font-mono text-xs text-accent pt-0.5 mb-1 sm:mb-0">{it.k}</dt>
            <dd className="text-sm text-ink leading-relaxed">{it.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default function About() {
  const s = siteData
  return (
    <section id="perfil" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionHeader command="$ cat perfil.md" title="Perfil profesional" />
        <div className="grid md:grid-cols-[1fr_.5fr] gap-8 mb-8">
          <Reveal>
            <WindowFrame title="perfil.md — bash">
              <div className="p-6 md:p-8 font-mono text-sm md:text-[15px] leading-relaxed space-y-4">
                <p className="text-accent">$ cat perfil.md</p>
                {s.bioLines.map((line, i) => (
                  <p key={i} className="text-ink"><span className="text-muted select-none">{'> '}</span>{line}</p>
                ))}
                <p className="text-accent">{'> '}estado: <span className="text-amber">disponible para proyectos y oportunidades</span></p>
              </div>
            </WindowFrame>
          </Reveal>
          <Reveal delay={120}>
            <div className="border border-line rounded-xl bg-surface p-6 font-mono text-sm space-y-5">
              <div>
                <p className="text-muted mb-1">// rol</p>
                <p className="text-ink-hi">{s.role}</p>
                <p className="text-accent">{s.specialty}</p>
              </div>
              <div>
                <p className="text-muted mb-1">// experiencia</p>
                <p className="text-ink-hi">{s.experience}</p>
              </div>
              <div>
                <p className="text-muted mb-1">// formación</p>
                <p className="text-ink-hi">{s.degree}</p>
              </div>
              <div>
                <p className="text-muted mb-1">// idiomas</p>
                <p className="text-ink-hi">{s.languages}</p>
              </div>
              <div>
                <p className="text-muted mb-1">// base</p>
                <p className="text-ink-hi">{s.location}</p>
              </div>
              <div>
                <p className="text-muted mb-2">// enfoque</p>
                <ul className="space-y-1">{s.focus.map(f => <li key={f} className="text-accent">· {f}</li>)}</ul>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <SkillCard command="perfil/tecnico" title="Competencias técnicas" items={s.skills.tecnicas} />
          </Reveal>
          <Reveal delay={80}>
            <SkillCard command="perfil/blandas" title="Habilidades blandas" items={s.skills.blandas} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
