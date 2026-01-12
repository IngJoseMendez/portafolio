import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { useEffect, useState } from 'react';

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === parseInt(id));
    const [selectedImage, setSelectedImage] = useState(null);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Close lightbox on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white p-4">
                <h2 className="text-2xl font-bold mb-4">Proyecto no encontrado</h2>
                <Link to="/" className="text-amber-100 hover:underline">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4 md:p-12 pb-20 overflow-x-hidden relative">
            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 transition-opacity duration-300 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors z-[60] bg-gray-900/50 p-2 rounded-full"
                        onClick={() => setSelectedImage(null)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <img
                        src={selectedImage}
                        alt="Vista completa"
                        className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl animate-fade-in select-none"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            <div className="max-w-7xl mx-auto w-full">
                <Link to="/" className="inline-flex items-center text-amber-100 hover:text-amber-200 mb-8 font-bold transition-colors text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Volver
                </Link>

                <div className="w-full max-w-6xl mx-auto">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-amber-50 mb-6 md:mb-8 break-words">{project.title}</h1>

                    {/* Galería de Imágenes */}
                    <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
                        {/* Imagen Principal */}
                        <div
                            className="rounded-xl overflow-hidden shadow-2xl border border-gray-700 w-full cursor-zoom-in hover:opacity-95 transition-all duration-300 group"
                            onClick={() => setSelectedImage(project.images && project.images.length > 0 ? project.images[0] : project.image)}
                        >
                            <div className="relative">
                                <img
                                    src={project.images && project.images.length > 0 ? project.images[0] : project.image}
                                    alt={project.title}
                                    className="w-full h-auto object-cover max-h-[600px] group-hover:scale-[1.01] transition-transform duration-500"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                                    <span className="bg-black/50 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-md">Ver pantalla completa</span>
                                </div>
                            </div>
                        </div>

                        {/* Imágenes Secundarias (Grid) */}
                        {project.images && project.images.length > 1 && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                                {project.images.slice(1).map((img, index) => (
                                    <div key={index}
                                        className="rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:scale-[1.02] transition-transform duration-200 cursor-zoom-in relative group"
                                        onClick={() => setSelectedImage(img)}
                                    >
                                        <img
                                            src={img}
                                            alt={`${project.title} screenshot ${index + 2}`}
                                            className="w-full h-48 md:h-56 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                        <div className="lg:col-span-2 space-y-4 md:space-y-6">
                            <section>
                                <h3 className="text-xl md:text-2xl font-bold text-amber-100 mb-3 md:mb-4 border-b border-gray-700 pb-2">Descripción</h3>
                                <p className="text-gray-300 leading-relaxed text-sm md:text-base whitespace-pre-line break-words">
                                    {project.fullDescription}
                                </p>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-gray-800 p-4 md:p-6 rounded-xl border border-gray-700">
                                <h3 className="text-lg md:text-xl font-bold text-amber-100 mb-4">Tecnologías</h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="px-3 py-1 bg-gray-700 text-amber-50 rounded-full text-xs md:text-sm font-medium border border-gray-600">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-3">
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2 md:py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all font-bold border border-gray-600 hover:border-gray-500 text-sm md:text-base">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        Ver Código
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
