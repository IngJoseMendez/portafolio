import { useEffect, useState } from 'react'
import { siteData } from '../data/siteData'
import WindowFrame from './ui/WindowFrame'
import StatusBar from './ui/StatusBar'
import MonoChip from './ui/MonoChip'
import CommandButton from './ui/CommandButton'
import AvailBadge from './ui/AvailBadge'
import Typewriter from './ui/Typewriter'
import Reveal from './ui/Reveal'
import DotGrid from './ui/DotGrid'
import { ArrowIcon, DownloadIcon, GithubIcon, LinkedinIcon, InstagramIcon } from './ui/icons'

const LINES = [
  "const stack = [Java, Spring, React]",
  "const foco = [backend, IA, datos]",
  "const enfoque_2026 = [agentes, RAG, automatización]",
]

export default function Hero() {
  const s = siteData
  const [li, setLi] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setLi((n) => (n + 1) % LINES.length), 4200)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="inicio" className="relative overflow-hidden">
      <DotGrid />
      <StatusBar left="~/jose-mendez — zsh" right="main ✔ · node v20 · ready" />
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-10 md:pt-16 pb-20">
        <div className="grid md:grid-cols-[1.08fr_.92fr] gap-10 items-center">
          <Reveal className="min-w-0">
            <p className="font-mono text-sm text-accent mb-4">{s.hero.kicker}</p>
            <div className="relative">
              <span aria-hidden="true" className="absolute -left-8 -top-10 w-72 h-44 bg-accent/15 blur-3xl rounded-full -z-10" />
              <h1 className="text-ink-hi font-extrabold leading-[.92] tracking-[-.04em] text-[clamp(44px,7.4vw,86px)]">{s.name}</h1>
            </div>
            <p className="mt-5 text-[clamp(14px,1.7vw,18px)] text-accent min-h-[1.6em]"><Typewriter key={LINES[li]} text={LINES[li]} /></p>
            <p className="mt-4 text-muted leading-relaxed max-w-[44ch]">{s.hero.blurb}</p>
            <div className="flex flex-wrap gap-3 mt-7">
              <CommandButton as="a" href="#proyectos" variant="primary" icon={ArrowIcon}>Ver proyectos</CommandButton>
              <CommandButton as="a" href={s.cvUrl} variant="ghost" icon={DownloadIcon}>Descargar CV</CommandButton>
            </div>
            <div className="flex flex-wrap gap-2 mt-7">{s.hero.chips.map(c => <MonoChip key={c}>{c}</MonoChip>)}</div>
            <div className="flex gap-4 mt-7 text-muted">
              <a href={s.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent hover:-translate-y-0.5 transition-all"><GithubIcon className="w-5 h-5" /></a>
              <a href={s.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent hover:-translate-y-0.5 transition-all"><LinkedinIcon className="w-5 h-5" /></a>
              <a href={s.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent hover:-translate-y-0.5 transition-all"><InstagramIcon className="w-5 h-5" /></a>
            </div>
          </Reveal>
          <Reveal className="flex justify-center" delay={120}>
            <WindowFrame title="portrait.jpg" className="max-w-[340px] w-full relative">
              <div className="relative aspect-[0.82] overflow-hidden">
                <img src={s.photo} alt={s.name} loading="eager" width="720" height="1279"
                  className="w-full h-full object-cover object-[50%_16%] grayscale contrast-[1.08] brightness-[1.03]" />
                <div aria-hidden="true" className="absolute inset-0 mix-blend-soft-light" style={{ background: 'linear-gradient(180deg,transparent 60%,rgba(52,211,153,.12))' }} />
                <div aria-hidden="true" className="absolute inset-0 opacity-50 mix-blend-multiply" style={{ background: 'repeating-linear-gradient(0deg,rgba(0,0,0,.16) 0 1px,transparent 1px 3px)' }} />
                <div className="absolute bottom-3 right-3"><AvailBadge /></div>
              </div>
            </WindowFrame>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
