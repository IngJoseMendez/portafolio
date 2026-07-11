import { siteData } from '../data/siteData'
import SectionHeader from './ui/SectionHeader'
import WindowFrame from './ui/WindowFrame'
import CommandButton from './ui/CommandButton'
import { GithubIcon, LinkedinIcon, InstagramIcon, ArrowIcon, DownloadIcon } from './ui/icons'

export default function Contact() {
  const s = siteData
  return (
    <section id="contacto" className="relative py-20 md:py-28 bg-surface/40">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <SectionHeader command={'$ echo "hablemos"'} title="Contacto">
          ¿Tienes un proyecto, una vacante o una idea? Escríbeme.
        </SectionHeader>
        <WindowFrame title="contacto — bash">
          <div className="p-6 md:p-10 font-mono">
            <p className="text-accent mb-1">$ cat contacto.txt</p>
            <p className="text-ink mb-6 break-all">{'>'} {s.email}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <CommandButton as="a" href={`mailto:${s.email}`} variant="primary" icon={ArrowIcon}>Escríbeme un correo</CommandButton>
              <CommandButton as="a" href={s.cvUrl} variant="ghost" icon={DownloadIcon}>Descargar CV</CommandButton>
            </div>
            <div className="flex gap-4 text-muted">
              <a href={s.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent transition-colors"><GithubIcon className="w-6 h-6" /></a>
              <a href={s.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors"><LinkedinIcon className="w-6 h-6" /></a>
              <a href={s.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors"><InstagramIcon className="w-6 h-6" /></a>
            </div>
          </div>
        </WindowFrame>
      </div>
    </section>
  )
}
