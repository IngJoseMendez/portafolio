export default function CommandButton({ as = "a", href, onClick, variant = "primary", icon: Icon, children }) {
  const Comp = as
  const cls = variant === "primary"
    ? "bg-accent text-[#052015] font-semibold hover:shadow-[0_12px_34px_-10px_rgba(52,211,153,.6)]"
    : "border border-line-soft text-ink font-mono hover:border-accent"
  return (
    <Comp
      href={href}
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-5 py-3 rounded-[10px] text-sm transition-all duration-200 hover:-translate-y-0.5 ${cls}`}
    >
      {children}{Icon && <Icon className="w-4 h-4" />}
    </Comp>
  )
}
