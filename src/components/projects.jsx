import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';

export default function Projects() {
    return (
        <section id="projects" className="w-full bg-gray-900 mx-auto flex flex-col items-center justify-between py-20 px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-50 mb-16 text-center">MIS PROYECTOS</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
                {projectsData.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}