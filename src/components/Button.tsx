import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'navy' | 'subtle'
  type?: 'button' | 'submit' | 'reset'
  to?: string
  href?: string
  className?: string
  disabled?: boolean
  'aria-label'?: string
  'aria-busy'?: boolean
  onClick?: () => void
}

// primary/outline are tuned for dark (brand-navy) backdrops; navy/subtle are
// tuned for light (white/cream) backdrops, hence the different ring-offset.
const variants = {
  primary:
    'border-brand-gold bg-brand-gold text-brand-navy shadow-[0_18px_45px_rgba(222,177,59,0.24)] hover:-translate-y-0.5 hover:bg-brand-gold-light hover:shadow-[0_22px_55px_rgba(222,177,59,0.3)] active:translate-y-0 focus-visible:ring-offset-brand-navy',
  outline:
    'border-white/18 bg-white/5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:-translate-y-0.5 hover:border-brand-gold/70 hover:bg-white/9 hover:text-brand-gold active:translate-y-0 focus-visible:ring-offset-brand-navy',
  navy: 'border-brand-navy bg-brand-navy text-white hover:-translate-y-0.5 hover:bg-brand-navy-light active:translate-y-0 focus-visible:ring-offset-brand-cream',
  subtle:
    'border-brand-border bg-transparent text-brand-navy hover:-translate-y-0.5 hover:border-brand-gold active:translate-y-0 focus-visible:ring-offset-brand-cream',
}

export function Button({
  children,
  variant = 'primary',
  type = 'button',
  to,
  href,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-7 py-3 text-base font-bold outline-none transition duration-200 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4',
    variants[variant],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  )
}
