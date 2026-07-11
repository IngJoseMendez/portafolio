import { useReveal } from '../../lib/useReveal'

export default function Reveal({ as: Comp = 'div', delay = 0, className = '', children }) {
  const ref = useReveal()
  return (
    <Comp ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Comp>
  )
}
