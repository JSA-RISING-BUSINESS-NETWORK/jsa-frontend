import type { LucideIcon } from 'lucide-react'

type ValuePropProps = {
  title: string
  description: string
  icon: LucideIcon
  variant?: 'light' | 'dark'
}

export function ValueProp({ title, description, icon: Icon, variant = 'light' }: ValuePropProps) {
  const isDark = variant === 'dark'

  return (
    <article className={isDark ? 'text-brand-cream' : 'text-brand-navy'}>
      <div
        className={`mb-5 inline-flex size-12 items-center justify-center rounded-md ${
          isDark ? 'bg-brand-gold text-brand-navy' : 'bg-brand-gold-soft text-brand-navy'
        }`}
        aria-hidden="true"
      >
        <Icon className="size-6" strokeWidth={2} />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className={`mt-2 text-sm leading-6 ${isDark ? 'text-white/78' : 'text-brand-slate'}`}>
        {description}
      </p>
    </article>
  )
}
