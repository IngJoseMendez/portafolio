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
