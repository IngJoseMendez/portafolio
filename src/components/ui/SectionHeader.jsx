export default function SectionHeader({ command, title, children }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-sm text-accent mb-3">{command}</p>
      <h2 className="text-ink-hi font-bold tracking-tight text-3xl md:text-4xl text-balance">{title}</h2>
      {children && <p className="text-muted mt-3 max-w-2xl leading-relaxed">{children}</p>}
    </div>
  )
}
