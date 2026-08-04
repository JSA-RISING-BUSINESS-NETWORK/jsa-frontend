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
    <section className="relative flex min-h-svh snap-start items-center justify-center overflow-hidden bg-background px-4 py-28 text-center text-foreground sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(222,177,59,0.18),transparent_25%),radial-gradient(circle_at_50%_50%,rgba(22,41,63,0.8),transparent_42%),linear-gradient(180deg,#020814_0%,#0b1b33_48%,#030712_100%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:76px_76px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
      <div className="absolute left-1/2 top-1/2 h-[19rem] w-[19rem] -translate-x-1/2 -translate-y-[58%] opacity-95 sm:h-[26rem] sm:w-[26rem] lg:h-[33rem] lg:w-[33rem]">
        <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.5]}>
          <ambientLight intensity={0.65} />
          <pointLight position={[2.8, 2.4, 3]} intensity={5.8} color="#edc964" />
          <pointLight position={[-2.5, -1.2, 2.6]} intensity={2.4} color="#ffffff" />
          <SignalMesh />
        </Canvas>
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-[58%] rounded-full border border-brand-gold/12 blur-[0.2px] sm:h-[29rem] sm:w-[29rem]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[13rem] w-[46rem] -translate-x-1/2 translate-y-12 bg-[radial-gradient(ellipse_at_center,rgba(222,177,59,0.18),transparent_64%)] blur-2xl" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-14rem)] max-w-6xl flex-col items-center justify-center">
        <Badge variant="dark">{eyebrow}</Badge>
        <h1 className="mt-12 max-w-5xl text-balance text-5xl font-black uppercase leading-[0.88] text-[#ebe4e4] sm:text-7xl lg:text-8xl" style={{ marginTop: '150px'  }} >
          {title}
        </h1>
        <p className="mt-8 text-lg font-black uppercase tracking-[0.08em] text-brand-gold sm:text-2xl" style={{ marginTop: '100px' }}>
          {tagline}
        </p>
        <p className="mx-auto mt-7 max-w-2xl text-base font-medium leading-7 text-brand-muted sm:text-lg">
          {subtitle}
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
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
    </section>
  )
}
