import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Line } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import type { Group } from 'three'
import { brandColors } from '@/lib/brand-colors'
import { useReducedMotion } from '@/lib/use-reduced-motion'

const PILLAR_COUNT = 9

function useNodePositions() {
  return useMemo(() => {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5))

    return Array.from({ length: PILLAR_COUNT }, (_, index) => {
      const y = 1 - (index / (PILLAR_COUNT - 1)) * 2
      const radiusAtY = Math.sqrt(1 - y * y)
      const theta = goldenAngle * index

      return [
        Math.cos(theta) * radiusAtY * 1.85,
        y * 1.85,
        Math.sin(theta) * radiusAtY * 1.85,
      ] as [number, number, number]
    })
  }, [])
}

function NetworkForm({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<Group>(null)
  const nodePositions = useNodePositions()

  useFrame(({ clock }) => {
    if (!groupRef.current || reducedMotion) {
      return
    }

    const elapsed = clock.getElapsedTime()
    groupRef.current.rotation.x = Math.sin(elapsed * 0.1) * 0.1
    groupRef.current.rotation.y = elapsed * 0.1
  })

  return (
    <Float enabled={!reducedMotion} speed={0.5} rotationIntensity={0.05} floatIntensity={0.16}>
      <group ref={groupRef} rotation={[0.15, 0.4, 0]}>
        <mesh>
          <icosahedronGeometry args={[0.42, 1]} />
          <meshBasicMaterial color={brandColors.gold} transparent opacity={0.55} wireframe />
        </mesh>

        {nodePositions.map((position, index) => (
          <group key={index}>
            <Line
              points={[[0, 0, 0], position]}
              color={index % 3 === 0 ? brandColors.gold : brandColors.navy}
              transparent
              opacity={index % 3 === 0 ? 0.32 : 0.16}
              lineWidth={1}
            />
            <mesh position={position}>
              <octahedronGeometry args={[0.16, 0]} />
              <meshBasicMaterial
                color={index % 3 === 0 ? brandColors.gold : brandColors.cream}
                transparent
                opacity={0.55}
                wireframe
              />
            </mesh>
          </group>
        ))}

        <mesh rotation={[Math.PI / 2.3, 0.2, 0]}>
          <torusGeometry args={[1.85, 0.012, 8, 72]} />
          <meshBasicMaterial color={brandColors.navy} transparent opacity={0.14} wireframe />
        </mesh>
      </group>
    </Float>
  )
}

export function ServicePillarsScene() {
  const reducedMotion = useReducedMotion()

  return (
    <div
      className="pointer-events-none absolute left-[-9rem] top-1/2 z-0 hidden h-[34rem] w-[34rem] -translate-y-1/2 opacity-60 lg:block"
      aria-hidden="true"
    >
      <Canvas camera={{ position: [0, 0, 5.6], fov: 42 }} dpr={[1, 1.5]}>
        <NetworkForm reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  )
}
