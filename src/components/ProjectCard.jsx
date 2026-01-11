import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
    return (
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border-2 border-transparent hover:border-amber-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
            <div className="overflow-hidden aspect-video">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-100 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.shortDescription}</p>
                <Link
                    to={`/project/${project.id}`}
                    className="inline-block px-4 py-2 bg-transparent border border-amber-100 text-amber-100 font-bold rounded-lg hover:bg-amber-100 hover:text-gray-900 transition-colors duration-200"
                >
                    Ver detalles
                </Link>
            </div>
        </div>
    );
}
