import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useRef } from 'react'
import type { Group } from 'three'
import { brandColors } from '@/lib/brand-colors'
import { useReducedMotion } from '@/lib/use-reduced-motion'

function TechnologyForm({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<Group>(null)

  useFrame(({ clock }) => {
    if (!groupRef.current || reducedMotion) {
      return
    }

    const elapsed = clock.getElapsedTime()
    groupRef.current.rotation.x = elapsed * 0.06
    groupRef.current.rotation.y = elapsed * 0.1
  })

  return (
    <Float enabled={!reducedMotion} speed={0.6} rotationIntensity={0.06} floatIntensity={0.14}>
      <group ref={groupRef} rotation={[0.2, 0.35, 0.1]}>
        <mesh>
          <boxGeometry args={[2.5, 2.5, 2.5]} />
          <meshBasicMaterial color={brandColors.navy} transparent opacity={0.1} wireframe />
        </mesh>
        <mesh rotation={[0.35, 0.2, 0]} scale={0.72}>
          <boxGeometry args={[2.5, 2.5, 2.5]} />
          <meshBasicMaterial color={brandColors.gold} transparent opacity={0.16} wireframe />
        </mesh>
      </group>
    </Float>
  )
}

export function TechnologyScene() {
  const reducedMotion = useReducedMotion()

  return (
    <div
      className="pointer-events-none absolute left-[-8rem] top-1/2 z-0 hidden h-[30rem] w-[30rem] -translate-y-1/2 opacity-45 lg:block"
      aria-hidden="true"
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.25]}>
        <TechnologyForm reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  )
}
