import {
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  Search,
  ShieldCheck,
  Target,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { ServiceScene } from '../components/ServiceScene'

const capabilities = [
  {
    title: 'Strategy & decision support',
    description: 'Turn complex choices into a clear direction with practical analysis, priorities, and a path to action.',
    icon: Target,
  },
  {
    title: 'Research & market insight',
    description: 'Build a sharper view of customers, competitors, opportunity, and the context around your next move.',
    icon: Search,
  },
  {
    title: 'Risk & compliance readiness',
    description: 'Surface exposure early and strengthen the controls, documentation, and habits that protect the business.',
    icon: ShieldCheck,
  },
  {
    title: 'Process improvement',
    description: 'Find the friction inside the operating model and create simpler ways for people and teams to deliver.',
    icon: ClipboardCheck,
  },
]

const deliverySteps = [
  ['01', 'Diagnose', 'We clarify the decision, understand the current state, and gather the evidence needed to see the business clearly.'],
  ['02', 'Prioritize', 'We translate insight into a focused set of choices, actions, owners, and measures that the team can actually use.'],
  ['03', 'Strengthen', 'We help embed the recommendation through improved processes, practical controls, and a rhythm for continued review.'],
]

export function BusinessAdvisoryPage() {
  return (
    <main className="bg-brand-cream">
      <section className="relative isolate overflow-hidden bg-brand-navy pb-24 pt-36 text-brand-cream sm:pb-28 sm:pt-44">
        <ServiceScene variant="advisory" />
        <div className="pointer-events-none absolute right-[-12rem] top-[-12rem] size-[32rem] rounded-full border border-brand-gold/15" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-[-14rem] left-[-10rem] size-[28rem] rounded-full border border-white/8" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-gold">
              Service pillar / 04
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.95] text-brand-cream sm:text-7xl">
              Make better decisions with a clearer view of the business.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              Strategy, research, risk, compliance, and process improvement for leaders who need
              clarity before committing the next move.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/contact" variant="primary">
                Start an advisory conversation
                <ArrowRight className="size-5" aria-hidden="true" />
              </Button>
              <Link
                to="#capabilities"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold text-white/72 transition hover:text-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold"
              >
                Explore the capability
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/12 bg-white/6 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-brand-gold">
                  Advisory engagement model
                </p>
                <p className="mt-2 text-xl font-black text-white">Understand. Decide. Improve.</p>
              </div>
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-gold text-brand-navy">
                <Target className="size-5" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-5 space-y-3">
              {[
                ['01', 'Build the picture'],
                ['02', 'Set the direction'],
                ['03', 'Strengthen the system'],
              ].map(([number, item]) => (
                <div
                  key={number}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/6 px-4 py-4"
                >
                  <span className="flex items-center gap-3 text-sm font-bold text-white/86">
                    <span className="text-[0.65rem] tracking-[0.18em] text-brand-gold">{number}</span>
                    {item}
                  </span>
                  <ArrowUpRight className="size-4 text-white/40" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="border-b border-brand-border bg-white py-24 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-gold-dark">
              What we deliver
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-brand-navy sm:text-5xl">
              Clarity that makes the next move easier.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-slate">
              Advisory support that connects the evidence, the decision, and the practical work
              required to improve the business.
            </p>
          </div>

          <div className="mt-14 grid gap-x-8 sm:grid-cols-2">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon

              return (
                <article
                  key={capability.title}
                  className="group border-t border-brand-border py-7 transition duration-300 hover:-translate-y-1 hover:border-brand-gold motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-black tracking-[0.18em] text-brand-gold-dark">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-gold-soft text-brand-navy transition group-hover:bg-brand-gold motion-reduce:transition-none">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-7 text-xl font-black text-brand-navy">{capability.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-brand-slate">
                    {capability.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-24 sm:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-20 lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-gold-dark">
              How we work
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-brand-navy sm:text-5xl">
              Clear thinking, made useful.
            </h2>
          </div>
          <div className="border-y border-brand-border">
            {deliverySteps.map(([number, title, description]) => (
              <div key={number} className="grid gap-4 border-b border-brand-border py-7 last:border-b-0 sm:grid-cols-[4rem_10rem_1fr] sm:items-start sm:gap-6">
                <span className="text-xs font-black tracking-[0.18em] text-brand-gold-dark">{number}</span>
                <h3 className="text-lg font-black text-brand-navy">{title}</h3>
                <p className="max-w-xl text-sm leading-6 text-brand-slate">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-20 text-brand-cream sm:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-gold">
              Ready when you are
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">
              Bring a business decision into focus.
            </h2>
          </div>
          <Button to="/contact" variant="primary">
            Get In Touch
            <ArrowRight className="size-5" aria-hidden="true" />
          </Button>
        </div>
      </section>
    </main>
  )
}
