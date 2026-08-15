import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useRef } from 'react'
import type { Group } from 'three'
import { brandColors } from '@/lib/brand-colors'
import { useReducedMotion } from '@/lib/use-reduced-motion'

function ValuePropsForm({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<Group>(null)

  useFrame(({ clock }) => {
    if (!groupRef.current || reducedMotion) {
      return
    }

    const elapsed = clock.getElapsedTime()
    groupRef.current.rotation.x = elapsed * 0.07
    groupRef.current.rotation.y = elapsed * 0.11
  })

  return (
    <Float enabled={!reducedMotion} speed={0.6} rotationIntensity={0.06} floatIntensity={0.16}>
      <group ref={groupRef} rotation={[0.2, 0.3, 0.1]}>
        <mesh>
          <octahedronGeometry args={[1.4, 0]} />
          <meshBasicMaterial color={brandColors.navy} transparent opacity={0.12} wireframe />
        </mesh>
        <mesh rotation={[0.3, 0.5, 0]} scale={0.65}>
          <octahedronGeometry args={[1.4, 0]} />
          <meshBasicMaterial color={brandColors.gold} transparent opacity={0.24} wireframe />
        </mesh>
      </group>
    </Float>
  )
}

export function ValuePropsScene() {
  const reducedMotion = useReducedMotion()

  return (
    <div
      className="pointer-events-none absolute right-[-7rem] top-[-3rem] z-0 hidden h-[26rem] w-[26rem] opacity-40 lg:block"
      aria-hidden="true"
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.25]}>
        <ValuePropsForm reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  )
}
