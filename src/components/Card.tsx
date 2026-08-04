type CardProps = {
  children: React.ReactNode
  className?: string
  tone?: 'plain' | 'elevated' | 'navy'
}

export function Card({ children, className = '', tone = 'plain' }: CardProps) {
  const tones = {
    plain:
      'border-brand-border bg-white shadow-sm shadow-brand-navy/5 hover:border-brand-gold/45 hover:shadow-lg hover:shadow-brand-navy/10',
    elevated:
      'border-brand-border bg-white shadow-xl shadow-brand-navy/8 hover:border-brand-gold/50 hover:shadow-2xl hover:shadow-brand-navy/14',
    navy:
      'border-white/12 bg-white/7 shadow-2xl shadow-black/15 hover:border-brand-gold/50 hover:bg-white/10',
  }

  return (
    <div
      className={`rounded-lg border p-6 transition duration-200 hover:-translate-y-1 ${tones[tone]} ${className}`}
    >
      {children}
    </div>
  )
}
