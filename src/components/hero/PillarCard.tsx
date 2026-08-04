import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type PillarCardProps = {
  number: string
  title: string
  href: string
}

export function PillarCard({ number, title, href }: PillarCardProps) {
  return (
    <Link
      to={href}
      className="group rounded-lg border border-white/9 bg-[#16293f]/88 p-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] outline-none transition duration-200 hover:-translate-y-0.5 hover:border-brand-gold/55 hover:bg-[#1a314d] motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
      aria-label={`View ${title}`}
    >
      <span className="flex items-center justify-between gap-3">
        <span className="text-xs font-black tracking-[0.18em] text-brand-gold">{number}</span>
        <ArrowRight
          className="size-4 text-white/35 transition group-hover:translate-x-0.5 group-hover:text-brand-gold motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
          aria-hidden="true"
        />
      </span>
      <span className="mt-3 block text-sm font-bold leading-tight text-white group-hover:text-brand-gold">
        {title}
      </span>
    </Link>
  )
}
