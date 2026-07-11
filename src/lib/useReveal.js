import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { el.classList.add('is-in'); return }
    document.documentElement.classList.add('js-motion')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { el.classList.add('is-in'); io.unobserve(el) } })
    }, { threshold: 0.12 })
    io.observe(el)
    const t = setTimeout(() => el.classList.add('is-in'), 2500) // safety
    return () => { io.disconnect(); clearTimeout(t) }
  }, [])
  return ref
}
