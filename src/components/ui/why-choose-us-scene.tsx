import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useRef } from 'react'
import type { Group } from 'three'
import { brandColors } from '@/lib/brand-colors'
import { useReducedMotion } from '@/lib/use-reduced-motion'

function NetworkForm({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<Group>(null)

  useFrame(({ clock }) => {
    if (!groupRef.current || reducedMotion) {
      return
    }

    const elapsed = clock.getElapsedTime()
    groupRef.current.rotation.x = elapsed * 0.08
    groupRef.current.rotation.y = elapsed * 0.12
  })

  return (
    <Float enabled={!reducedMotion} speed={0.7} rotationIntensity={0.08} floatIntensity={0.18}>
      <group ref={groupRef} rotation={[0.25, 0.35, 0.1]}>
        <mesh>
          <icosahedronGeometry args={[1.7, 2]} />
          <meshBasicMaterial color={brandColors.gold} transparent opacity={0.22} wireframe />
        </mesh>
        <mesh scale={1.16}>
          <icosahedronGeometry args={[1.7, 1]} />
          <meshBasicMaterial color={brandColors.muted} transparent opacity={0.12} wireframe />
        </mesh>
      </group>
    </Float>
  )
}

export function WhyChooseUsScene() {
  const reducedMotion = useReducedMotion()

  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-[-8rem] z-0 hidden w-[48%] opacity-80 lg:block"
      aria-hidden="true"
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.25]}>
        <NetworkForm reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  )
}
