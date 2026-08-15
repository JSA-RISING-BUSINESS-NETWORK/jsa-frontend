import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Layers3,
  Link2,
  Workflow,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { ServiceScene } from '../components/ServiceScene'

const capabilities = [
  {
    title: 'Workflow automation',
    description: 'Turn repeatable manual work into clear, dependable flows that save time and reduce avoidable errors.',
    icon: Workflow,
  },
  {
    title: 'Custom business systems',
    description: 'Purpose-built tools that fit the way your teams actually work instead of forcing another generic process.',
    icon: Layers3,
  },
  {
    title: 'Connected integrations',
    description: 'Bring the systems you already use into a more coherent operating flow with reliable handoffs and data movement.',
    icon: Link2,
  },
  {
    title: 'Dashboards & decision signals',
    description: 'Give leaders and operators a clearer view of performance, bottlenecks, priorities, and next actions.',
    icon: BarChart3,
  },
]

const deliverySteps = [
  ['01', 'Map', 'We understand the current workflow, the friction inside it, and the outcome the business needs.'],
  ['02', 'Automate', 'We design the logic, connect the systems, and build a practical workflow people can trust.'],
  ['03', 'Improve', 'We measure what changes, refine the system, and create room for the business to scale.'],
]

export function BusinessAutomationPage() {
  return (
    <main className="bg-brand-cream">
      <section className="relative isolate overflow-hidden bg-brand-navy pb-24 pt-36 text-brand-cream sm:pb-28 sm:pt-44">
        <ServiceScene variant="automation" />
        <div className="pointer-events-none absolute right-[-12rem] top-[-12rem] size-[32rem] rounded-full border border-brand-gold/15" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-[-14rem] left-[-10rem] size-[28rem] rounded-full border border-white/8" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-gold">
              Service pillar / 03
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.95] text-brand-cream sm:text-7xl">
              Make the work flow better.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              Workflow automation, custom systems, integrations, and dashboards that help teams
              spend less time chasing process and more time moving the business forward.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/contact" variant="primary">
                Automate the next step
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
                  Automation operating model
                </p>
                <p className="mt-2 text-xl font-black text-white">Trigger. Route. Resolve.</p>
              </div>
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-gold text-brand-navy">
                <Workflow className="size-5" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-5 space-y-3">
              {[
                ['01', 'Capture the signal'],
                ['02', 'Route the work'],
                ['03', 'Surface the outcome'],
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
              Less friction between intent and execution.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-slate">
              We connect process, systems, and useful information so your team can move with more
              consistency and control.
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
              Automation that earns adoption.
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
              Turn a frustrating workflow into a dependable advantage.
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
