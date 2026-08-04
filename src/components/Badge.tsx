type BadgeProps = {
  children: React.ReactNode
  variant?: 'light' | 'dark'
}

export function Badge({ children, variant = 'light' }: BadgeProps) {
  const classes =
    variant === 'dark'
      ? 'border-white/15 bg-white/8 text-brand-cream'
      : 'border-brand-gold/25 bg-brand-gold-soft text-brand-navy'

  return (
    <span
      className={`inline-flex min-h-11 items-center rounded-md border px-4 py-2 text-sm font-semibold tracking-wide ${classes}`}
    >
      {children}
    </span>
  )
}
