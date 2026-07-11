export default function WindowFrame({ title, children, className = "" }) {
  return (
    <div className={`rounded-xl overflow-hidden border border-line bg-surface ${className}`}>
      <div className="flex items-center gap-2 h-8 px-3 bg-bar border-b border-line">
        <span className="w-2.5 h-2.5 rounded-full bg-danger" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber" />
        <span className="w-2.5 h-2.5 rounded-full bg-accent" />
        {title && <span className="ml-2 font-mono text-[11px] text-muted truncate">{title}</span>}
      </div>
      <div>{children}</div>
    </div>
  )
}
