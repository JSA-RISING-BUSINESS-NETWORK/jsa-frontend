type SectionHeadingProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  variant?: 'light' | 'dark'
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  variant = 'light',
}: SectionHeadingProps) {
  const isDark = variant === 'dark'

  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-black uppercase tracking-[0.2em] ${
            isDark ? 'text-brand-gold' : 'text-brand-gold-dark'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={`text-4xl font-black leading-tight sm:text-5xl ${
          isDark ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${
            isDark ? 'text-white/76' : 'text-brand-slate'
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
