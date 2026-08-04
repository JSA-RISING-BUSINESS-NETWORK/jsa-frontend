type StatItemProps = {
  label: string
  value: string
}

export function StatItem({ label, value }: StatItemProps) {
  return (
    <div className="rounded-lg border border-white/8 bg-white/[0.035] px-4 py-3">
      <dt className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-brand-muted">
        {label}
      </dt>
      <dd className="mt-1 text-2xl font-black text-white">{value}</dd>
    </div>
  )
}
