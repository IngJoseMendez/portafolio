import { useReveal } from '../../lib/useReveal'

export default function Reveal({ as = 'div', delay = 0, className = '', children }) {
  const ref = useReveal()
  const Comp = as
  return (
    <Comp ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Comp>
  )
}
