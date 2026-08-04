import { Link, useParams } from 'react-router-dom'

type StubPageProps = {
  type: 'service' | 'contact'
}

export function StubPage({ type }: StubPageProps) {
  const { slug } = useParams()
  const title =
    type === 'contact'
      ? 'Contact'
      : `${slug
          ?.split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ') ?? 'Service'}`

  return (
    <main className="bg-brand-cream">
      <section className="mx-auto min-h-[56vh] max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-gold-dark">
          Route stub
        </p>
        <h1 className="mt-4 text-4xl font-black leading-tight text-brand-navy sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-slate">
          This route is set up for navigation and will be built in a later phase.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-brand-navy px-6 py-3 text-base font-bold text-white transition hover:bg-brand-navy-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold"
        >
          Back to Home
        </Link>
      </section>
    </main>
  )
}
