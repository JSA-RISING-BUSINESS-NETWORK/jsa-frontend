type BadgeProps = {
  children: React.ReactNode
  variant?: 'light' | 'dark'
}

export function Badge({ children, variant = 'light' }: BadgeProps) {
  const color = variant === 'dark' ? 'text-brand-gold' : 'text-brand-gold-dark'

  return (
    <span className={`inline-flex text-xs font-black uppercase tracking-[0.2em] ${color}`}>
      {children}
    </span>
  )
}
