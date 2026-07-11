import { useEffect, useRef, useState } from 'react'

export default function Typewriter({ text, speed = 42, className = '' }) {
  const reduce = typeof window !== 'undefined' && window.matchMedia
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [shown, setShown] = useState(reduce ? text : '')
  const done = useRef(reduce)

  useEffect(() => {
    if (reduce) return
    let i = 0, id
    const tick = () => { i++; setShown(text.slice(0, i)); if (i < text.length) id = setTimeout(tick, speed); else done.current = true }
    id = setTimeout(tick, speed)
    return () => clearTimeout(id)
  }, [text, speed, reduce])

  return (
    <span className={`font-mono ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{shown}</span>
      <span aria-hidden="true" className="inline-block w-2 h-[1em] align-[-2px] ml-0.5 bg-accent" style={{ animation: 'blink 1.05s steps(1) infinite' }} />
    </span>
  )
}
