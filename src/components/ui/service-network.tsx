import { ArrowUpRight } from 'lucide-react'
import { useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'

export type ServiceNetworkPillar = {
  number: string
  title: string
  description: string
  icon: LucideIcon
  href: string
}

type NetworkPosition = {
  x: number
  y: number
}

const positions: NetworkPosition[] = [
  { x: 50, y: 6 },
  { x: 77, y: 15 },
  { x: 83, y: 38 },
  { x: 78, y: 72 },
  { x: 56, y: 89 },
  { x: 27, y: 86 },
  { x: 17, y: 64 },
  { x: 17, y: 35 },
  { x: 25, y: 14 },
]

const perimeterPath = 'M50 6 C73 8 85 19 83 38 C82 67 70 87 56 89 C33 91 17 77 17 64 C15 36 25 14 50 6 Z'

export function ServiceNetwork({ pillars }: { pillars: ServiceNetworkPillar[] }) {
  const [activeNumber, setActiveNumber] = useState(pillars[0]?.number ?? '')
  const activePillar = pillars.find((pillar) => pillar.number === activeNumber) ?? pillars[0]

  const activate = (number: string) => setActiveNumber(number)

  return (
    <div className="service-network" aria-label="JSA Rising service network">
      <div className="service-network-stage hidden lg:block">
        <svg className="service-network-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path className="service-network-orbit" d={perimeterPath} pathLength="1" />
          {positions.map((position, index) => {
            const pillar = pillars[index]
            const active = pillar?.number === activeNumber
            return (
              <path
                key={pillar?.number ?? index}
                className={active ? 'service-network-link is-active' : 'service-network-link'}
                d={`M50 49 L${position.x} ${position.y}`}
              />
            )
          })}
        </svg>

        <div className="service-network-core">
          <span className="service-network-core-kicker">Operating model</span>
          <span className="service-network-core-title">Consult. Build. Support.</span>
          <span className="service-network-core-rule" />
          <span className="service-network-core-active">{activePillar?.title}</span>
          <span className="service-network-core-copy">{activePillar?.description}</span>
        </div>

        {pillars.map((pillar, index) => {
          const Icon = pillar.icon
          const active = pillar.number === activeNumber
          const position = positions[index]
          return (
            <Link
              key={pillar.number}
              to={pillar.href}
              className={active ? 'service-network-node is-active' : 'service-network-node'}
              style={{ '--node-x': `${position.x}%`, '--node-y': `${position.y}%` } as CSSProperties}
              onMouseEnter={() => activate(pillar.number)}
              onFocus={() => activate(pillar.number)}
              aria-label={`View ${pillar.title}`}
            >
              <span className="service-network-node-topline">
                <span className="service-network-node-number">{pillar.number}</span>
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </span>
              <span className="service-network-node-main">
                <span className="service-network-node-icon"><Icon className="size-4" aria-hidden="true" /></span>
                <span className="service-network-node-title">{pillar.title}</span>
              </span>
            </Link>
          )
        })}
      </div>

      <div className="service-network-mobile lg:hidden">
        <div className="service-network-mobile-core">
          <span className="service-network-core-kicker">Operating model</span>
          <strong>Consult. Build. Support.</strong>
        </div>
        <ol className="service-network-mobile-list">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            const active = pillar.number === activeNumber
            return (
              <li key={pillar.number}>
                <Link
                  to={pillar.href}
                  className={active ? 'service-network-mobile-node is-active' : 'service-network-mobile-node'}
                  onFocus={() => activate(pillar.number)}
                  onMouseEnter={() => activate(pillar.number)}
                  aria-label={`View ${pillar.title}`}
                >
                  <span className="service-network-node-icon"><Icon className="size-4" aria-hidden="true" /></span>
                  <span className="min-w-0 flex-1">
                    <span className="service-network-node-number">{pillar.number}</span>
                    <strong>{pillar.title}</strong>
                    <span>{pillar.description}</span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0" aria-hidden="true" />
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}