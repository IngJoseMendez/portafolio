import { Link } from 'react-router-dom'
import { siteData } from '../data/siteData'
import { projectsData } from '../data/projectsData'
import SectionHeader from './ui/SectionHeader'
import MonoChip from './ui/MonoChip'
import Reveal from './ui/Reveal'
import CommandButton from './ui/CommandButton'
import { ArrowIcon, DownloadIcon } from './ui/icons'

const idDe = (slug) => projectsData.find(p => p.slug === slug)?.id

export default function Experience() {
  const s = siteData
  return (
    <section id="trayectoria" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionHeader command="$ git log --trayectoria" title="Experiencia y formación">
          Dónde he trabajado, para quién y desde cuándo.
        </SectionHeader>
        <ol className="relative border-l border-line ml-2 space-y-8">
          {s.timeline.map((e, i) => {
            const projectId = e.projectSlug ? idDe(e.projectSlug) : undefined
            return (
              <Reveal as="li" key={e.role} delay={i * 80} className="relative pl-7 md:pl-9">
                <span aria-hidden="true" className="absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full border-2 border-accent bg-bg" />
                <div className="border border-line rounded-xl bg-surface p-6 hover:border-accent/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-6">
                    <h3 className="text-ink-hi font-bold text-lg">{e.role}</h3>
                    <p className="font-mono text-xs text-accent shrink-0">{e.dates}</p>
                  </div>
                  <p className="text-ink mt-1">{e.org}</p>
                  <p className="font-mono text-xs text-amber mt-1">{e.kind}</p>
                  <p className="text-muted leading-relaxed mt-4">{e.summary}</p>
                  {e.points.length > 0 && (
                    <ul className="space-y-2 mt-4">
                      {e.points.map(pt => (
                        <li key={pt} className="flex items-start gap-2.5 text-sm text-ink">
                          <span className="text-accent font-mono mt-0.5 shrink-0">▸</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {(e.stack.length > 0 || projectId) && (
                    <div className="flex flex-wrap items-center gap-2 mt-5">
                      {e.stack.map(t => <MonoChip key={t}>{t}</MonoChip>)}
                      {projectId && (
                        <Link to={`/project/${projectId}`} className="ml-auto font-mono text-sm text-accent hover:underline">ver el proyecto →</Link>
                      )}
                    </div>
                  )}
                </div>
              </Reveal>
            )
          })}
        </ol>
        <div className="flex flex-wrap gap-3 mt-10">
          <CommandButton as="a" href={s.cvUrl} download="CV_Jose_Mendez_2026.pdf" variant="primary" icon={DownloadIcon}>Descargar CV (PDF)</CommandButton>
          <CommandButton as="a" href="#contacto" variant="ghost" icon={ArrowIcon}>Hablemos</CommandButton>
        </div>
      </div>
    </section>
  )
}
