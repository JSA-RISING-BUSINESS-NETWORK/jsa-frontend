import type { LucideIcon } from 'lucide-react'
import DisplayCards, { type DisplayCardProps } from '@/components/ui/display-cards'

type HeroPanelProps = {
  pillars: Array<{
    number: string
    title: string
    description: string
    icon: LucideIcon
    href: string
  }>
}

export function HeroPanel({ pillars }: HeroPanelProps) {
  const cards: DisplayCardProps[] = pillars.map((pillar) => {
    const Icon = pillar.icon

    return {
      icon: <Icon className="size-4" aria-hidden="true" />,
      title: pillar.title,
      description: pillar.description,
      date: `Pillar ${pillar.number}`,
      href: pillar.href,
    }
  })

  return (
    <aside
      className="relative isolate w-full overflow-visible lg:max-w-[50rem]"
      aria-label="Service pillars"
    >
      <DisplayCards cards={cards} className="mx-auto max-w-[44rem]" />
    </aside>
  )
}
