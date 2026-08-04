import type { LucideIcon } from 'lucide-react'

type OperatingModelCardProps = {
  icon: LucideIcon
  label: string
}

export function OperatingModelCard({ icon: Icon, label }: OperatingModelCardProps) {
  return (
    <article className="group rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.075),rgba(255,255,255,0.035))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-200 hover:-translate-y-0.5 hover:border-brand-gold/45 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="flex size-11 items-center justify-center rounded-full border border-brand-gold/28 bg-brand-gold/12 text-brand-gold transition group-hover:bg-brand-gold group-hover:text-brand-navy">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <p className="mt-4 text-sm font-bold leading-snug text-white">{label}</p>
    </article>
  )
}
