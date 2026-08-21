import { ArrowUpRight } from 'lucide-react'
import { lazy, Suspense } from 'react'
import { Badge } from '../components/Badge'
import { Card } from '../components/Card'
import { SectionHeading } from '../components/SectionHeading'
import { ValueProp } from '../components/ValueProp'
import { ServiceNetwork } from '../components/ui/service-network'
import {
  heroStats,
  servicePillars,
  techBadges,
  valueProps,
  whyChooseUs,
} from '../content/home'

const HeroFuturistic = lazy(() =>
  import('../components/ui/hero-futuristic').then((module) => ({
    default: module.HeroFuturistic,
  })),
)

const WhyChooseUsScene = lazy(() =>
  import('../components/ui/why-choose-us-scene').then((module) => ({
    default: module.WhyChooseUsScene,
  })),
)

const TechnologyScene = lazy(() =>
  import('../components/ui/technology-scene').then((module) => ({
    default: module.TechnologyScene,
  })),
)

const ValuePropsScene = lazy(() =>
  import('../components/ui/value-props-scene').then((module) => ({
    default: module.ValuePropsScene,
  })),
)


export function Home() {
  return (
    <main id="main-content">
      <Suspense
        fallback={
          <section className="flex min-h-svh snap-start items-center justify-center bg-background px-4 py-28 text-center text-white">
            <div>
              <Badge variant="dark">JSA Rising Business Network</Badge>
              <h1 className="mt-10 text-5xl font-black uppercase leading-[0.88] sm:text-7xl">
                Build. Automate. Scale.
              </h1>
              <p className="mt-8 text-lg font-black uppercase tracking-[0.08em] text-brand-gold" >
                Your Success, Our Commitment.
              </p>
            </div>
          </section>
        }
      >
        <HeroFuturistic
          eyebrow="JSA Rising Business Network"
          title="Build. Automate. Scale."
          tagline="Your Success, Our Commitment."
          subtitle="Cloud technology, digital products, automation, advisory, academy, and sector growth services for businesses ready to move with discipline."
          primaryCta={{ label: 'Get In Touch Today', href: '/contact' }}
          scrollTarget="#value-props"
        />
      </Suspense>

      <section
        id="value-props"
        className="relative isolate flex min-h-svh snap-start items-center overflow-hidden bg-brand-cream py-28 sm:py-32 lg:py-36"
      >
        <Suspense fallback={null}>
          <ValuePropsScene />
        </Suspense>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <SectionHeading
              eyebrow="What clients can expect"
              title="Practical support for businesses that need systems, strategy, and scale."
              description="JSA Rising presents technology and business execution as one operating capability, not disconnected services."
            />
            <div className="rounded-lg border border-brand-border bg-white p-5 text-sm leading-7 text-brand-slate shadow-sm">
              <p className="font-bold text-brand-navy">Designed for decision-makers.</p>
              <p className="mt-2">
                Clear service paths, strong credibility markers, and fast contact routes help
                prospects understand where JSA Rising can create value.
              </p>
            </div>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((item) => (
              <Card key={item.title} className="h-full">
                <ValueProp {...item} />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="service-pillars"
        className="relative isolate overflow-hidden border-y border-brand-navy bg-brand-navy py-24 text-white sm:py-28 lg:py-32"
      >
        <div className="absolute inset-0 opacity-30" aria-hidden="true">
          <div className="service-network-grid h-full w-full" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col gap-6 border-b border-white/15 pb-7 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-gold">
              Service system / 09 pathways
            </p>
            <p className="max-w-md text-sm leading-6 text-white/65 sm:text-right">
              A connected operating model for the decisions, systems, delivery, and growth work behind a stronger business.
            </p>
          </div>

          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-20">
            <div className="max-w-lg">
              <SectionHeading
                eyebrow="Services"
                title="The right capability, connected at the right moment."
                description="Nine focused service lines working as one network, so your next move has the strategy, systems, and support to hold it up."
                variant="dark"
              />
              <dl className="mt-10 max-w-md divide-y divide-white/15 border-y border-white/15">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="flex items-end justify-between gap-6 py-5">
                    <dt className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/55">
                      {stat.label}
                    </dt>
                    <dd className="text-3xl font-black leading-none text-brand-gold">{stat.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 max-w-md text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                Explore the network. Follow the link that fits your next move.
              </p>
            </div>

            <ServiceNetwork
              pillars={servicePillars.map((service) => ({
                number: service.number,
                title: service.title,
                description: service.description,
                icon: service.icon,
                href: `/services/${service.slug}`,
              }))}
            />
          </div>
        </div>
      </section>

      <section
        className="relative isolate flex min-h-svh snap-start items-center overflow-hidden border-y border-white/10 bg-brand-navy py-28 text-white sm:py-32 lg:py-36"
        aria-labelledby="why-choose-us-title"
      >
        <Suspense fallback={null}>
          <WhyChooseUsScene />
        </Suspense>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-20">
            <SectionHeading
              id="why-choose-us-title"
              eyebrow="Why choose us"
              title="A dependable partner for serious business growth."
              description="JSA Rising combines strategic advisory, delivery capability, and cloud-era operational thinking."
              variant="dark"
            />
            <div className="grid gap-x-8 sm:grid-cols-2">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon

                return (
                  <article
                    key={item.title}
                    className="group border-t border-white/14 py-7 transition duration-300 hover:-translate-y-1 hover:border-brand-gold/70 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-gold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex size-10 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold transition duration-300 group-hover:bg-brand-gold group-hover:text-brand-navy motion-reduce:transition-none">
                          <Icon className="size-5" strokeWidth={2} aria-hidden="true" />
                        </span>
                        <ArrowUpRight
                          className="size-5 text-white/45 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-gold motion-reduce:transition-none"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 text-xl font-bold leading-tight text-brand-cream">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
                      {item.description}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative isolate flex min-h-svh snap-start items-center overflow-hidden border-y border-brand-border bg-brand-cream py-28 sm:py-32 lg:py-36"
        aria-labelledby="technology-expertise-title"
      >
        <Suspense fallback={null}>
          <TechnologyScene />
        </Suspense>
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-20 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-gold-dark">
              Technology expertise
            </p>
            <h2
              id="technology-expertise-title"
              className="mt-3 max-w-2xl text-4xl font-black leading-[1.05] text-brand-navy sm:text-6xl"
            >
              Credibility across modern cloud delivery.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-brand-slate">
              The site should look like the standard JSA sells: structured, fast, secure, and
              technically serious.
            </p>
            <div className="mt-10 flex max-w-md items-center gap-4 border-t border-brand-border pt-5">
              <span className="h-px w-10 bg-brand-gold" aria-hidden="true" />
              <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-slate">
                Built for dependable delivery
              </p>
            </div>
          </div>
          <div>
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-gold-dark">
                Core technology stack
              </p>
              <p className="text-xs font-semibold text-brand-slate">04 capabilities</p>
            </div>
            <div className="border-y border-brand-border">
              {techBadges.map((badge, index) => (
                <div
                  key={badge}
                  className="group flex min-h-24 items-center justify-between gap-6 border-b border-brand-border py-5 transition duration-300 last:border-b-0 hover:bg-white/60 motion-reduce:transition-none"
                >
                  <div className="flex min-w-0 items-center gap-5">
                    <span className="text-xs font-black tracking-[0.18em] text-brand-gold-dark">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="truncate text-2xl font-black text-brand-navy sm:text-3xl">
                      {badge}
                    </span>
                  </div>
                  <ArrowUpRight
                    className="size-5 shrink-0 text-brand-slate transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-gold motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
