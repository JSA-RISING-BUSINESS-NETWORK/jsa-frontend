import { ArrowRight } from 'lucide-react'
import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Badge } from '../components/Badge'
import { Card } from '../components/Card'
import { SectionHeading } from '../components/SectionHeading'
import { ValueProp } from '../components/ValueProp'
import { HeroPanel } from '../components/hero/HeroPanel'
import {
  heroStats,
  operatingModel,
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
        className="flex min-h-svh snap-start items-center bg-brand-cream py-28 sm:py-32 lg:py-36"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
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
        className="flex min-h-svh snap-start items-center overflow-hidden bg-white py-28 sm:py-32 lg:py-36"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Services"
              title="Explore the service pillars."
              description="Nine connected service lines, framed as one coherent growth platform."
            />
            <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-3 min-[430px]:grid-cols-3 lg:grid-cols-1">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-brand-border bg-brand-cream px-4 py-3"
                >
                  <dt className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-brand-slate">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-2xl font-black text-brand-navy">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <HeroPanel
            operatingModel={operatingModel}
            pillars={servicePillars.map((service) => ({
              number: service.number,
              title: service.title,
              href: `/services/${service.slug}`,
            }))}
          />
        </div>
      </section>

      <section className="flex min-h-svh snap-start items-center bg-brand-navy py-28 text-white sm:py-32 lg:py-36">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow="Why choose us"
              title="A dependable partner for serious business growth."
              description="JSA Rising combines strategic advisory, delivery capability, and cloud-era operational thinking."
              variant="dark"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="rounded-lg border border-white/10 bg-white/7 p-5">
                  <ValueProp {...item} variant="dark" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex min-h-svh snap-start items-center border-y border-brand-border bg-brand-cream py-28 sm:py-32 lg:py-36"
        aria-label="Technology expertise"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-gold-dark">
              Technology expertise
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-brand-navy sm:text-6xl">
              Credibility across modern cloud delivery.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-brand-slate">
              The site should look like the standard JSA sells: structured, fast, secure, and
              technically serious.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {techBadges.map((badge) => (
              <div
                key={badge}
                className="rounded-lg border border-brand-border bg-white p-6 text-2xl font-black text-brand-navy shadow-sm"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
