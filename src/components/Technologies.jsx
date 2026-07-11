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
                <p className="font-mono text-xs text-muted mb-4"><span className="select-none">// </span>{cat.title}</p>
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
