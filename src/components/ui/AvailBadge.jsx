export default function AvailBadge({ children = "disponible" }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] text-amber bg-bar/80 border border-amber/30 rounded-lg px-2.5 py-1.5">
      <span className="w-2 h-2 rounded-full bg-amber shadow-[0_0_10px_var(--color-amber)]" />{children}
    </span>
  )
}
