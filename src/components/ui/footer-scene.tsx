import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useRef } from 'react'
import type { Mesh } from 'three'
import { brandColors } from '@/lib/brand-colors'
import { useReducedMotion } from '@/lib/use-reduced-motion'

function FooterForm({ reducedMotion }: { reducedMotion: boolean }) {
  const meshRef = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    if (!meshRef.current || reducedMotion) {
      return
    }

    const elapsed = clock.getElapsedTime()
    meshRef.current.rotation.x = elapsed * 0.14
    meshRef.current.rotation.y = elapsed * 0.2
  })

  return (
    <Float enabled={!reducedMotion} speed={0.8} rotationIntensity={0.12} floatIntensity={0.24}>
      <mesh ref={meshRef} rotation={[0.35, 0.2, 0.1]}>
        <torusKnotGeometry args={[1.25, 0.2, 128, 18, 2, 3]} />
        <meshStandardMaterial
          color={brandColors.gold}
          emissive={brandColors.goldDark}
          emissiveIntensity={0.42}
          metalness={0.7}
          roughness={0.3}
          transparent
          opacity={0.58}
          wireframe
        />
      </mesh>
    </Float>
  )
}

export function FooterScene() {
  const reducedMotion = useReducedMotion()

  return (
    <div
      className="pointer-events-none absolute right-[-5rem] top-[-7rem] z-0 hidden h-[28rem] w-[28rem] opacity-55 lg:block"
      aria-hidden="true"
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.25]}>
        <ambientLight intensity={0.55} />
        <pointLight position={[2, 2, 3]} intensity={3.2} color={brandColors.goldLight} />
        <FooterForm reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  )
}
