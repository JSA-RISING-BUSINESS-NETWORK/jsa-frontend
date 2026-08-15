import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Factory,
  Globe2,
  GraduationCap,
  Leaf,
  PackageCheck,
  UsersRound,
  type LucideIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { ServiceScene, type ServiceSceneVariant } from '../components/ServiceScene'

type SectorServiceConfig = {
  number: string
  eyebrow: string
  title: string
  description: string
  modelLabel: string
  modelTitle: string
  modelIcon: LucideIcon
  modelItems: string[]
  sectionTitle: string
  sectionDescription: string
  capabilities: { title: string; description: string; icon: LucideIcon }[]
  processTitle: string
  process: [string, string, string][]
  cta: string
}

const configs: Record<string, SectorServiceConfig> = {
  academy: {
    number: '06',
    eyebrow: 'Learning & capability building',
    title: 'Build the skills that move people and businesses forward.',
    description: 'Practical technical and business training for emerging professionals, teams, and organisations building their next capability.',
    modelLabel: 'Academy delivery model',
    modelTitle: 'Learn. Apply. Advance.',
    modelIcon: GraduationCap,
    modelItems: ['Build the foundation', 'Practice the real work', 'Carry the skill forward'],
    sectionTitle: 'Training designed to create useful confidence.',
    sectionDescription: 'We connect relevant knowledge with practical exercises, context, and support so learning can show up in the work.',
    capabilities: [
      { title: 'Technical foundations', description: 'Accessible learning paths for digital tools, cloud concepts, automation, and modern delivery practices.', icon: GraduationCap },
      { title: 'Business capability', description: 'Training that strengthens communication, commercial thinking, project execution, and everyday management.', icon: BriefcaseBusiness },
      { title: 'Team programmes', description: 'Focused workshops and learning experiences shaped around the priorities of a team or organisation.', icon: UsersRound },
      { title: 'Applied mentorship', description: 'Guidance that helps learners turn concepts into decisions, artefacts, and outcomes they can demonstrate.', icon: CheckCircle2 },
    ],
    processTitle: 'Learning that meets people where the work is.',
    process: [
      ['01', 'Assess', 'We understand the audience, the capability gap, and the outcomes the learning needs to unlock.'],
      ['02', 'Practise', 'We combine clear instruction with relevant exercises, feedback, and real-world application.'],
      ['03', 'Advance', 'We leave learners with practical next steps, stronger confidence, and a path for continued growth.'],
    ],
    cta: 'Give your team a stronger next step.',
  },
  agribusiness: {
    number: '07',
    eyebrow: 'Agricultural value chains',
    title: 'Turn agricultural opportunity into stronger value chains.',
    description: 'Sector-focused support for agricultural businesses and partners working to improve coordination, market access, and sustainable growth.',
    modelLabel: 'Agribusiness growth model',
    modelTitle: 'Source. Strengthen. Scale.',
    modelIcon: Leaf,
    modelItems: ['Understand the value chain', 'Strengthen the operation', 'Reach better markets'],
    sectionTitle: 'Practical support from production to market.',
    sectionDescription: 'We help agribusinesses make the connections, operating choices, and commercial moves that build a more resilient enterprise.',
    capabilities: [
      { title: 'Value-chain mapping', description: 'Make the flow from inputs to customers clearer and identify where value, risk, and opportunity sit.', icon: Leaf },
      { title: 'Market access support', description: 'Clarify buyer needs, routes to market, partnerships, and the commercial story behind the product.', icon: Globe2 },
      { title: 'Operations improvement', description: 'Strengthen planning, coordination, documentation, and the systems that support dependable delivery.', icon: BarChart3 },
      { title: 'Growth readiness', description: 'Build the structure, visibility, and decision-making needed to expand with greater control.', icon: CheckCircle2 },
    ],
    processTitle: 'Growth that respects the whole chain.',
    process: [
      ['01', 'Map', 'We understand the actors, movement, constraints, and opportunities across the value chain.'],
      ['02', 'Strengthen', 'We focus on the operating and commercial improvements that create the clearest return.'],
      ['03', 'Connect', 'We help turn stronger capability into more useful relationships, market access, and growth.'],
    ],
    cta: 'Make the next move in your value chain.',
  },
  manufacturing: {
    number: '08',
    eyebrow: 'Production & operations',
    title: 'Make production more visible, coordinated, and ready to scale.',
    description: 'Operational support for production businesses building better systems, clearer workflows, and the discipline to grow with control.',
    modelLabel: 'Manufacturing operating model',
    modelTitle: 'Plan. Produce. Improve.',
    modelIcon: Factory,
    modelItems: ['Plan the operating flow', 'Control the production work', 'Improve the system'],
    sectionTitle: 'Better operations create room for growth.',
    sectionDescription: 'We connect process, information, people, and priorities so production teams can see what is happening and act earlier.',
    capabilities: [
      { title: 'Production workflow', description: 'Clarify handoffs, bottlenecks, responsibilities, and the daily rhythm behind consistent production.', icon: Factory },
      { title: 'Operational systems', description: 'Improve the tools, records, and information flows that help leaders manage the floor and the business.', icon: BriefcaseBusiness },
      { title: 'Quality & control', description: 'Build practical checks and visibility around the moments that matter for consistency, waste, and customer trust.', icon: CheckCircle2 },
      { title: 'Scale readiness', description: 'Prepare the operating model for more volume, new demands, and better commercial performance.', icon: BarChart3 },
    ],
    processTitle: 'Operational improvement you can see.',
    process: [
      ['01', 'Observe', 'We map the production flow, the constraints, and the signals that show where performance is being lost.'],
      ['02', 'Improve', 'We prioritise practical changes to workflow, systems, controls, and accountability.'],
      ['03', 'Standardise', 'We help turn successful improvements into repeatable operating habits the team can sustain.'],
    ],
    cta: 'Build a production system that can keep up.',
  },
  'import-export': {
    number: '09',
    eyebrow: 'Trade & commercial flow',
    title: 'Move products and opportunities across markets with more confidence.',
    description: 'Trade-focused guidance for sourcing, market entry, partnerships, and the commercial flow that connects businesses across borders.',
    modelLabel: 'Trade operating model',
    modelTitle: 'Source. Move. Deliver.',
    modelIcon: PackageCheck,
    modelItems: ['Find the right opportunity', 'Coordinate the movement', 'Deliver with confidence'],
    sectionTitle: 'Commercial flow needs clarity at every handoff.',
    sectionDescription: 'We help businesses think through the relationships, requirements, logistics, and decisions that make trade more dependable.',
    capabilities: [
      { title: 'Sourcing & supplier support', description: 'Clarify requirements, assess opportunities, and create a more disciplined path from need to supplier.', icon: PackageCheck },
      { title: 'Market-entry planning', description: 'Explore viable markets, routes, partners, and the practical conditions behind a confident entry.', icon: Globe2 },
      { title: 'Trade coordination', description: 'Bring commercial, operational, and documentation priorities into a clearer flow across the transaction.', icon: BriefcaseBusiness },
      { title: 'Commercial visibility', description: 'Create better signals around timing, risk, relationships, and the next decision in the trade cycle.', icon: BarChart3 },
    ],
    processTitle: 'A clearer route from opportunity to delivery.',
    process: [
      ['01', 'Source', 'We clarify the product, market, partner, and commercial conditions that shape the opportunity.'],
      ['02', 'Coordinate', 'We align the moving parts, responsibilities, and information needed to keep the trade flow visible.'],
      ['03', 'Deliver', 'We help strengthen the handoffs and operating rhythm behind a dependable commercial outcome.'],
    ],
    cta: 'Put your next trade opportunity in motion.',
  },
}

const sceneVariants: Record<keyof typeof configs, ServiceSceneVariant> = {
  academy: 'academy',
  agribusiness: 'agribusiness',
  manufacturing: 'manufacturing',
  'import-export': 'trade',
}

export function SectorServicePage({ slug }: { slug: keyof typeof configs }) {
  const config = configs[slug]
  const ModelIcon = config.modelIcon

  return (
    <main className="bg-brand-cream">
      <section className="relative isolate overflow-hidden bg-brand-navy pb-24 pt-36 text-brand-cream sm:pb-28 sm:pt-44">
        <ServiceScene variant={sceneVariants[slug]} />
        <div className="pointer-events-none absolute right-[-12rem] top-[-12rem] size-[32rem] rounded-full border border-brand-gold/15" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-[-14rem] left-[-10rem] size-[28rem] rounded-full border border-white/8" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-gold">
              Service pillar / {config.number} · {config.eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.95] text-brand-cream sm:text-7xl">
              {config.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              {config.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/contact" variant="primary">
                Start a conversation
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
                  {config.modelLabel}
                </p>
                <p className="mt-2 text-xl font-black text-white">{config.modelTitle}</p>
              </div>
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-gold text-brand-navy">
                <ModelIcon className="size-5" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-5 space-y-3">
              {config.modelItems.map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/6 px-4 py-4">
                  <span className="flex items-center gap-3 text-sm font-bold text-white/86">
                    <span className="text-[0.65rem] tracking-[0.18em] text-brand-gold">0{index + 1}</span>
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
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-gold-dark">What we deliver</p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-brand-navy sm:text-5xl">{config.sectionTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-slate">{config.sectionDescription}</p>
          </div>
          <div className="mt-14 grid gap-x-8 sm:grid-cols-2">
            {config.capabilities.map((capability, index) => {
              const Icon = capability.icon

              return (
                <article key={capability.title} className="group border-t border-brand-border py-7 transition duration-300 hover:-translate-y-1 hover:border-brand-gold motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-black tracking-[0.18em] text-brand-gold-dark">{String(index + 1).padStart(2, '0')}</span>
                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-gold-soft text-brand-navy transition group-hover:bg-brand-gold motion-reduce:transition-none">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-7 text-xl font-black text-brand-navy">{capability.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-brand-slate">{capability.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-24 sm:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-20 lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-gold-dark">How we work</p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-brand-navy sm:text-5xl">{config.processTitle}</h2>
          </div>
          <div className="border-y border-brand-border">
            {config.process.map(([number, title, description]) => (
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
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-gold">Ready when you are</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">{config.cta}</h2>
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
