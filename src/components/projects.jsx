import ProjectCard from './ProjectCard'
import { projectsData } from '../data/projectsData'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'

export default function Projects() {
  return (
    <section id="proyectos" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionHeader command="$ ls ~/proyectos" title="Proyectos destacados" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 90}><ProjectCard project={p} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
