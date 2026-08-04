import type { LucideIcon } from 'lucide-react'
import { Network } from 'lucide-react'
import { PillarCard } from './PillarCard'
import { OperatingModelCard } from './OperatingModelCard'

type HeroPanelProps = {
  operatingModel: Array<{
    label: string
    icon: LucideIcon
  }>
  pillars: Array<{
    number: string
    title: string
    href: string
  }>
}

export function HeroPanel({ operatingModel, pillars }: HeroPanelProps) {
  return (
    <aside
      className="relative overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,rgba(22,41,63,0.94),rgba(11,27,51,0.76))] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur"
      aria-label="Platform focus areas"
    >
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_82%_5%,rgba(222,177,59,0.2),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-px rounded-[0.7rem] border border-white/5" />

      <div className="relative rounded-lg border border-white/10 bg-[#0f233d]/72 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-gold">
              Operating model
            </p>
            <p className="mt-2 text-2xl font-black leading-tight text-white">
              Consult. Build. Support.
            </p>
          </div>
          <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-gold text-brand-navy shadow-[0_14px_35px_rgba(222,177,59,0.28)]">
            <Network className="size-6" aria-hidden="true" />
          </span>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {operatingModel.map((item) => (
            <OperatingModelCard key={item.label} {...item} />
          ))}
        </div>
      </div>

      <div className="relative mt-5 flex items-end justify-between gap-4">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-gold">
          9 connected service pillars
        </p>
        <p className="hidden text-xs font-medium text-brand-muted sm:block">Phase 1 scope</p>
      </div>
      <div className="relative mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {pillars.map((pillar) => (
          <PillarCard key={pillar.href} {...pillar} />
        ))}
      </div>
    </aside>
  )
}
