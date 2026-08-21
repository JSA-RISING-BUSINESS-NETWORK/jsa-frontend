import { Canvas } from '@react-three/fiber'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'
import { brandColors } from '@/lib/brand-colors'

type HeroFuturisticProps = {
  eyebrow: string
  title: string
  tagline: string
  subtitle: string
  primaryCta: {
    label: string
    href: string
  }
  scrollTarget: string
}

function SignalMesh() {
  return (
    <group rotation={[0.24, -0.34, 0.12]}>
      <mesh>
        <icosahedronGeometry args={[1.4, 2]} />
        <meshBasicMaterial color={brandColors.gold} transparent opacity={0.52} wireframe />
      </mesh>
      <mesh scale={0.62}>
        <icosahedronGeometry args={[1.4, 2]} />
        <meshBasicMaterial color={brandColors.cream} transparent opacity={0.42} wireframe />
      </mesh>
      <mesh rotation={[Math.PI / 2.3, 0.22, 0.1]}>
        <torusGeometry args={[2.02, 0.018, 10, 80]} />
        <meshBasicMaterial color={brandColors.goldLight} transparent opacity={0.72} />
      </mesh>
      <mesh rotation={[0.18, Math.PI / 2.1, 0.5]}>
        <torusGeometry args={[2.3, 0.012, 10, 80]} />
        <meshBasicMaterial color={brandColors.cream} transparent opacity={0.3} />
      </mesh>
      <mesh position={[1.74, 0.9, 0.15]}>
        <sphereGeometry args={[0.08, 12, 8]} />
        <meshBasicMaterial color={brandColors.goldLight} />
      </mesh>
      <mesh position={[-1.32, -1.3, 0.2]}>
        <sphereGeometry args={[0.055, 12, 8]} />
        <meshBasicMaterial color={brandColors.cream} />
      </mesh>
    </group>
  )
}

export function HeroFuturistic({
  eyebrow,
  title,
  tagline,
  subtitle,
  primaryCta,
  scrollTarget,
}: HeroFuturisticProps) {
  return (
    <section
      className="relative isolate flex min-h-svh snap-start items-center overflow-hidden bg-background px-4 py-24 text-foreground sm:px-6 sm:py-28 lg:px-8"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-brand-navy" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:76px_76px] [mask-image:linear-gradient(90deg,transparent,black_35%,black_70%,transparent)]" />
      <div className="pointer-events-none absolute right-[-8rem] top-1/2 z-0 hidden h-[34rem] w-[34rem] -translate-y-1/2 lg:block">
        <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.25]}>
          <SignalMesh />
        </Canvas>
      </div>
      <div className="pointer-events-none absolute right-[-7rem] top-1/2 z-0 hidden h-[28rem] w-[28rem] -translate-y-1/2 rounded-full border border-brand-gold/12 lg:block" />

      <div className="relative z-20 mx-auto grid min-h-[calc(100svh-12rem)] w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-20">
        <div className="max-w-3xl text-left">
          <Badge variant="dark">{eyebrow}</Badge>
          <h1
            id="hero-title"
            className="mt-7 max-w-4xl text-balance text-5xl font-black uppercase leading-[0.92] text-brand-cream sm:mt-9 sm:text-7xl lg:text-8xl"
          >
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base font-black uppercase tracking-[0.08em] text-brand-gold sm:mt-7 sm:text-2xl">
            {tagline}
          </p>
          <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-brand-muted sm:mt-6 sm:text-lg">
            {subtitle}
          </p>
          <div className="mt-9 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
            <Button to={primaryCta.href} variant="primary">
              {primaryCta.label}
              <ArrowRight className="size-5" aria-hidden="true" />
            </Button>
            <Button href={scrollTarget} variant="outline">
              Scroll to explore
              <ArrowDown className="size-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
        <div className="hidden min-h-80 lg:block" aria-hidden="true" />
      </div>
      <div className="pointer-events-none absolute inset-x-4 bottom-6 z-20 mx-auto hidden max-w-6xl items-center justify-between text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/45 sm:flex">
        <span>01 / JSA Rising</span>
        <span className="flex items-center gap-3">
          <span className="h-px w-8 bg-white/25" aria-hidden="true" />
          Scroll to explore
        </span>
      </div>
    </section>
  )
}
