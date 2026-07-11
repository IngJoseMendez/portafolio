export default function StatusBar({ left, right, className = "" }) {
  return (
    <div className={`flex items-center gap-3 h-8 px-4 font-mono text-[11px] text-muted bg-bar border-b border-line ${className}`}>
      <span>{left}</span>
      {right && <span className="ml-auto">{right}</span>}
    </div>
  )
}
