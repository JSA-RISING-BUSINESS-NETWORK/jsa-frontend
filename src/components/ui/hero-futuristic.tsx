import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { useMemo, useRef } from 'react'
import type { Mesh } from 'three'
import * as THREE from 'three'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'

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
  const meshRef = useRef<Mesh>(null)
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.25, 36), [])

  useFrame(({ clock, pointer }) => {
    const elapsed = clock.getElapsedTime()

    if (meshRef.current) {
      meshRef.current.rotation.x = elapsed * 0.14 + pointer.y * 0.12
      meshRef.current.rotation.y = elapsed * 0.18 + pointer.x * 0.18
      meshRef.current.scale.setScalar(1 + Math.sin(elapsed * 0.8) * 0.018)
    }
  })

  return (
    <Float speed={1.1} rotationIntensity={0.14} floatIntensity={0.28}>
      <mesh ref={meshRef} geometry={geometry}>
        <MeshDistortMaterial
          color="#deb13b"
          emissive="#deb13b"
          emissiveIntensity={1.08}
          roughness={0.28}
          metalness={0.18}
          distort={0.48}
          speed={1.45}
        />
      </mesh>
    </Float>
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
      className="relative isolate flex min-h-svh snap-start items-center justify-center overflow-hidden bg-background px-4 py-24 text-center text-foreground sm:px-6 sm:py-28 lg:px-8"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(222,177,59,0.18),transparent_25%),radial-gradient(circle_at_50%_50%,rgba(22,41,63,0.8),transparent_42%),linear-gradient(180deg,#020814_0%,#0b1b33_48%,#030712_100%)]" />
      <div className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:76px_76px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[19rem] w-[19rem] -translate-x-1/2 -translate-y-[58%] opacity-50 sm:h-[26rem] sm:w-[26rem] sm:opacity-60 lg:left-[56%] lg:h-[33rem] lg:w-[33rem]">
        <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.5]}>
          <ambientLight intensity={0.65} />
          <pointLight position={[2.8, 2.4, 3]} intensity={5.8} color="#edc964" />
          <pointLight position={[-2.5, -1.2, 2.6]} intensity={2.4} color="#ffffff" />
          <SignalMesh />
        </Canvas>
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-[58%] rounded-full border border-brand-gold/12 blur-[0.2px] sm:h-[29rem] sm:w-[29rem]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[13rem] w-[46rem] -translate-x-1/2 translate-y-12 bg-[radial-gradient(ellipse_at_center,rgba(222,177,59,0.1),transparent_64%)] blur-2xl" />

      <div className="relative z-20 mx-auto flex min-h-[calc(100svh-12rem)] max-w-6xl flex-col items-center justify-center">
        <Badge variant="dark">{eyebrow}</Badge>
        <h1
          id="hero-title"
          className="mt-8 max-w-5xl text-balance text-5xl font-black uppercase leading-[0.9] text-brand-cream sm:mt-10 sm:text-7xl lg:text-8xl"
        >
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base font-black uppercase tracking-[0.08em] text-brand-gold sm:mt-7 sm:text-2xl">
          {tagline}
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-brand-muted sm:mt-6 sm:text-lg">
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
