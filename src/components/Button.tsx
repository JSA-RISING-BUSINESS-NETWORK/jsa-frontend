import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'outline'
  to?: string
  href?: string
  className?: string
  'aria-label'?: string
}

const variants = {
  primary:
    'border-brand-gold bg-brand-gold text-brand-navy shadow-[0_18px_45px_rgba(222,177,59,0.24)] hover:-translate-y-0.5 hover:bg-brand-gold-light hover:shadow-[0_22px_55px_rgba(222,177,59,0.3)] active:translate-y-0',
  outline:
    'border-white/18 bg-white/5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:-translate-y-0.5 hover:border-brand-gold/70 hover:bg-white/9 hover:text-brand-gold active:translate-y-0',
}

export function Button({
  children,
  variant = 'primary',
  to,
  href,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-7 py-3 text-base font-bold outline-none transition duration-200 motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-navy',
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
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  )
}
