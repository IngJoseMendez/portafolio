export default function DotGrid({ className = "" }) {
  return <div aria-hidden="true" className={`dotgrid absolute inset-0 -z-10 ${className}`} />
}
