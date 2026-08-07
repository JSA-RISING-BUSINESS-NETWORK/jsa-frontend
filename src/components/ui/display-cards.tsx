import type { ReactNode } from 'react'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export type DisplayCardProps = {
  className?: string
  icon?: ReactNode
  title?: string
  description?: string
  date?: string
  href?: string
  iconClassName?: string
  titleClassName?: string
  stackIndex?: number
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4" />,
  title = 'Featured',
  description = 'Discover focused business support',
  date = 'Just now',
  href,
  iconClassName = 'bg-brand-gold-soft text-brand-gold-dark',
  titleClassName = 'text-brand-navy',
  stackIndex = 0,
}: DisplayCardProps) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className={cn('inline-flex shrink-0 rounded-full p-2', iconClassName)}>
            {icon}
          </span>
          <div className="min-w-0">
            <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-brand-gold-dark">
              {date}
            </p>
            <p className={cn('mt-1 text-base font-black leading-tight sm:text-lg', titleClassName)}>
              {title}
            </p>
          </div>
        </div>
        <ArrowUpRight
          className="mt-1 size-5 shrink-0 text-brand-slate transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </div>
      <p className="line-clamp-2 max-w-[34rem] text-sm font-medium leading-6 text-brand-slate">
        {description}
      </p>
    </>
  )
  const classes = cn(
    "group absolute left-1/2 top-0 flex h-32 w-[min(42rem,86vw)] -translate-x-1/2 -skew-y-[6deg] flex-col justify-between overflow-hidden rounded-xl border border-brand-border bg-white px-5 py-4 text-brand-navy shadow-[0_18px_50px_rgba(11,27,51,0.12)] transition-all duration-500 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[34%] after:bg-gradient-to-l after:from-brand-cream/90 after:to-transparent after:content-[''] hover:z-50 hover:-translate-y-4 hover:scale-[1.04] hover:border-brand-gold/70 hover:shadow-[0_30px_80px_rgba(11,27,51,0.2)] focus-visible:z-50 focus-visible:-translate-y-4 focus-visible:scale-[1.04] focus-visible:border-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-white motion-reduce:transition-none motion-reduce:hover:-translate-y-0 motion-reduce:hover:scale-100 [&>*]:relative [&>*]:z-10",
    className,
  )
  const style = {
    top: `${stackIndex * 4.25}rem`,
    zIndex: stackIndex + 1,
  }

  if (href) {
    return (
      <Link to={href} className={classes} style={style} aria-label={`View ${title}`}>
        {content}
      </Link>
    )
  }

  return (
    <div className={classes} style={style}>
      {content}
    </div>
  )
}

export type DisplayCardsProps = {
  cards: DisplayCardProps[]
  className?: string
}

export default function DisplayCards({ cards, className }: DisplayCardsProps) {
  return (
    <div
      className={cn(
        'relative min-h-[42rem] w-full motion-reduce:animate-none [animation:service-stack-float_7s_ease-in-out_infinite]',
        className,
      )}
    >
      {cards.map((cardProps, index) => (
        <DisplayCard key={`${cardProps.title}-${index}`} {...cardProps} stackIndex={index} />
      ))}
    </div>
  )
}
