import { siteData } from '../data/siteData'
import { GithubIcon, LinkedinIcon, InstagramIcon } from './ui/icons'

export default function Footer() {
  const s = siteData
  return (
    <footer className="border-t border-line py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-muted">
        <div>
          <p>// © 2026 Jose Méndez · Ingeniero de Sistemas</p>
          <p>// built with React + Tailwind — el mejor de todos los ingenieros ;)</p>
        </div>
        <div className="flex gap-4">
          <a href={s.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent transition-colors"><GithubIcon className="w-5 h-5" /></a>
          <a href={s.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors"><LinkedinIcon className="w-5 h-5" /></a>
          <a href={s.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors"><InstagramIcon className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  )
}
