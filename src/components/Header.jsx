import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { siteData } from '../data/siteData'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-bg/80 backdrop-blur border-b border-line' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto px-4 md:px-8 py-4">
        <Link to="/" className="w-10 h-10 grid place-items-center border border-line rounded-[11px] font-bold text-accent font-mono">JM</Link>
        <nav className="hidden md:flex gap-6 font-mono text-[13px] text-muted">
          {siteData.nav.map(n => <a key={n.href} href={n.href} className="hover:text-ink transition-colors">{n.label}</a>)}
        </nav>
        <a href="#contacto" className="font-mono text-[13px] px-4 py-2 rounded-full border border-accent text-accent bg-accent/5 hover:-translate-y-0.5 transition-transform">./conversemos</a>
      </div>
    </header>
  )
}
