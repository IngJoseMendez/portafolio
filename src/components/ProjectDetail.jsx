import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { useEffect, useState } from 'react';
import WindowFrame from './ui/WindowFrame';
import MonoChip from './ui/MonoChip';
import { GithubIcon, ArrowIcon } from './ui/icons';

// Las imágenes pueden venir como URL o como { src, caption }
const toImage = (img) => (typeof img === 'string' ? { src: img, caption: '' } : img);

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') setSelectedImage(null); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-bg flex flex-col items-center justify-center text-ink p-4">
        <h2 className="text-2xl font-bold mb-4">Proyecto no encontrado</h2>
        <Link to="/" className="font-mono text-accent hover:underline">$ cd ~</Link>
      </div>
    );
  }

  const images = (project.images && project.images.length > 0 ? project.images : [project.image]).map(toImage);

  return (
    <div className="min-h-screen bg-bg text-ink p-4 md:p-12 pb-20 overflow-x-hidden relative">
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-bg/95 p-4 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-ink hover:text-accent transition-colors z-[60] bg-surface/60 p-2 rounded-full" onClick={() => setSelectedImage(null)} aria-label="Cerrar">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <img src={selectedImage.src} alt={selectedImage.caption || 'Vista completa'} className="max-w-full max-h-[84vh] object-contain rounded-md shadow-2xl select-none" onClick={(e) => e.stopPropagation()} />
          {selectedImage.caption && <p className="font-mono text-sm text-muted text-center max-w-3xl">{selectedImage.caption}</p>}
        </div>
      )}

      <div className="max-w-6xl mx-auto w-full">
        <p className="font-mono text-sm text-muted mb-2">~/proyectos/<span className="text-accent">{project.slug}</span></p>
        <Link to="/" className="inline-flex items-center gap-2 font-mono text-accent mb-8 hover:gap-3 transition-all">$ cd ..</Link>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-ink-hi mb-8 break-words tracking-tight">{project.title}</h1>

        <div className="space-y-6 mb-10">
          <WindowFrame title={`${project.slug}/preview.png`} className="cursor-zoom-in">
            <div className="relative group" onClick={() => setSelectedImage(images[0])}>
              <img src={images[0].src} alt={images[0].caption || project.title} className="w-full h-auto object-cover max-h-[560px] group-hover:opacity-95 transition" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-bg/20">
                <span className="font-mono text-xs bg-bg/70 text-ink px-3 py-1.5 rounded-full backdrop-blur">ver pantalla completa</span>
              </div>
            </div>
          </WindowFrame>

          {project.video && (
            <WindowFrame title={`${project.slug}/demo.mp4`}>
              <video src={project.video} poster={project.videoPoster} controls playsInline preload="none" className="w-full h-auto block bg-black" />
            </WindowFrame>
          )}

          {images.length > 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.slice(1).map((img, index) => (
                <figure key={img.src} className="rounded-xl overflow-hidden border border-line hover:border-accent transition cursor-zoom-in bg-surface" onClick={() => setSelectedImage(img)}>
                  <img src={img.src} alt={img.caption || `${project.title} ${index + 2}`} className="w-full h-44 object-cover object-top" loading="lazy" />
                  {img.caption && <figcaption className="px-3 py-2.5 text-xs text-muted leading-snug">{img.caption}</figcaption>}
                </figure>
              ))}
            </div>
          )}
        </div>

        {project.features && project.features.length > 0 && (
          <section className="mb-10">
            <h3 className="font-mono text-accent mb-4">## Qué resuelve</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.features.map((f) => (
                <div key={f.title} className="border border-line rounded-xl bg-surface p-4">
                  <p className="text-ink-hi font-bold text-sm mb-1.5">{f.title}</p>
                  <p className="text-muted text-sm leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2">
            <h3 className="font-mono text-accent mb-4">## Descripción</h3>
            <p className="text-muted leading-relaxed whitespace-pre-line break-words">{project.fullDescription}</p>
          </section>
          <aside className="lg:col-span-1 space-y-6">
            {project.techniques && project.techniques.length > 0 && (
              <div className="border border-line rounded-xl bg-surface p-5">
                <h3 className="font-mono text-accent mb-4">// técnicas · 2026</h3>
                <ul className="space-y-2.5">
                  {project.techniques.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-sm text-ink">
                      <span className="text-accent font-mono mt-0.5 shrink-0">▸</span><span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="border border-line rounded-xl bg-surface p-5">
              <h3 className="font-mono text-accent mb-4">// dependencies</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((t) => <MonoChip key={t}>{t}</MonoChip>)}
              </div>
              {project.demoUrl && project.demoUrl !== '#' && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 mb-3 rounded-lg border border-accent text-accent font-mono hover:bg-accent/10 transition-colors">
                  Ver demo <ArrowIcon className="w-4 h-4" />
                </a>
              )}
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-line-soft text-ink font-mono hover:border-accent transition-colors">
                <GithubIcon className="w-4 h-4" /> Ver Código
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
