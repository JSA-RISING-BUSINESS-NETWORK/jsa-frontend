import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useRef } from 'react'
import type { Group } from 'three'
import { brandColors } from '@/lib/brand-colors'
import { useReducedMotion } from '@/lib/use-reduced-motion'
import type { ServiceSceneVariant } from '../ServiceScene'

function SceneForm({ variant, reducedMotion }: { variant: ServiceSceneVariant; reducedMotion: boolean }) {
  const groupRef = useRef<Group>(null)

  useFrame(({ clock }) => {
    if (!groupRef.current || reducedMotion) return

    const elapsed = clock.getElapsedTime()
    groupRef.current.rotation.x = Math.sin(elapsed * 0.22) * 0.08
    groupRef.current.rotation.y = elapsed * 0.12
  })

  const { gold, cream } = brandColors

  return (
    <Float enabled={!reducedMotion} speed={0.6} rotationIntensity={0.05} floatIntensity={0.16}>
      <group ref={groupRef} rotation={[0.2, 0.3, 0.1]}>
        {variant === 'digital' ? (
          <>
            <mesh>
              <torusKnotGeometry args={[1.25, 0.25, 96, 16]} />
              <meshBasicMaterial color={gold} transparent opacity={0.42} wireframe />
            </mesh>
            <mesh scale={1.25}>
              <torusGeometry args={[1.5, 0.018, 12, 64]} />
              <meshBasicMaterial color={cream} transparent opacity={0.2} wireframe />
            </mesh>
          </>
        ) : null}

        {variant === 'cloud' ? (
          <>
            <mesh>
              <icosahedronGeometry args={[1.45, 2]} />
              <meshBasicMaterial color={cream} transparent opacity={0.2} wireframe />
            </mesh>
            {[0, Math.PI / 2].map((rotation) => (
              <mesh key={rotation} rotation={[rotation, 0, 0]}>
                <torusGeometry args={[1.85, 0.018, 10, 64]} />
                <meshBasicMaterial color={gold} transparent opacity={0.42} wireframe />
              </mesh>
            ))}
          </>
        ) : null}

        {variant === 'automation' ? (
          <>
            {[-1.35, 0, 1.35].map((x, index) => (
              <mesh key={x} position={[x, index === 1 ? 0.2 : -0.2, 0]} rotation={[0.2, 0.4, index === 1 ? 0.2 : -0.2]}>
                <boxGeometry args={[0.75, 0.75, 0.75]} />
                <meshBasicMaterial color={index === 1 ? gold : cream} transparent opacity={0.32} wireframe />
              </mesh>
            ))}
            <mesh position={[0, -0.2, 0]}>
              <torusGeometry args={[1.3, 0.018, 8, 64]} />
              <meshBasicMaterial color={gold} transparent opacity={0.3} wireframe />
            </mesh>
          </>
        ) : null}

        {variant === 'advisory' ? (
          <>
            <mesh rotation={[0, 0, Math.PI / 4]}>
              <octahedronGeometry args={[1.45, 0]} />
              <meshBasicMaterial color={gold} transparent opacity={0.4} wireframe />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[1.85, 0.018, 10, 64]} />
              <meshBasicMaterial color={cream} transparent opacity={0.22} wireframe />
            </mesh>
          </>
        ) : null}

        {variant === 'development' ? (
          <>
            {[0, 1, 2].map((index) => (
              <mesh key={index} position={[index * 0.65 - 0.65, index * 0.5 - 0.5, 0]} rotation={[0.1, index * 0.18, -0.18]}>
                <torusGeometry args={[0.8, 0.12, 12, 32]} />
                <meshBasicMaterial color={index === 1 ? gold : cream} transparent opacity={0.38} wireframe />
              </mesh>
            ))}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[2.05, 0.018, 10, 64]} />
              <meshBasicMaterial color={gold} transparent opacity={0.25} wireframe />
            </mesh>
          </>
        ) : null}

        {variant === 'academy' ? (
          <>
            {[0, 1, 2].map((index) => (
              <mesh key={index} position={[0, index * 0.58 - 0.58, 0]} rotation={[0.08, index * 0.18, index % 2 ? 0.12 : -0.12]}>
                <boxGeometry args={[2.1 - index * 0.18, 0.34, 1.35]} />
                <meshBasicMaterial color={index === 1 ? gold : cream} transparent opacity={0.34} wireframe />
              </mesh>
            ))}
            <mesh position={[0, 0.95, 0]}>
              <icosahedronGeometry args={[0.45, 1]} />
              <meshBasicMaterial color={gold} transparent opacity={0.42} wireframe />
            </mesh>
          </>
        ) : null}

        {variant === 'agribusiness' ? (
          <>
            <mesh position={[0, -0.35, 0]}>
              <sphereGeometry args={[1.05, 20, 12]} />
              <meshBasicMaterial color={gold} transparent opacity={0.34} wireframe />
            </mesh>
            <mesh position={[0.22, 0.9, 0]} rotation={[0, 0, -0.35]}>
              <coneGeometry args={[0.2, 1.5, 8]} />
              <meshBasicMaterial color={cream} transparent opacity={0.3} wireframe />
            </mesh>
            <mesh position={[-0.55, 0.65, 0]} rotation={[0.2, 0, 0.7]}>
              <icosahedronGeometry args={[0.45, 1]} />
              <meshBasicMaterial color={cream} transparent opacity={0.3} wireframe />
            </mesh>
          </>
        ) : null}

        {variant === 'manufacturing' ? (
          <>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[1.35, 1.35, 0.45, 12]} />
              <meshBasicMaterial color={gold} transparent opacity={0.34} wireframe />
            </mesh>
            {Array.from({ length: 8 }, (_, index) => {
              const angle = (index / 8) * Math.PI * 2
              return (
                <mesh key={index} position={[Math.cos(angle) * 1.7, Math.sin(angle) * 1.7, 0]}>
                  <boxGeometry args={[0.34, 0.55, 0.35]} />
                  <meshBasicMaterial color={cream} transparent opacity={0.3} wireframe />
                </mesh>
              )
            })}
          </>
        ) : null}

        {variant === 'trade' ? (
          <>
            <mesh>
              <sphereGeometry args={[1.35, 24, 16]} />
              <meshBasicMaterial color={cream} transparent opacity={0.28} wireframe />
            </mesh>
            <mesh rotation={[Math.PI / 2.6, 0.2, 0.2]}>
              <torusGeometry args={[1.8, 0.018, 10, 64]} />
              <meshBasicMaterial color={gold} transparent opacity={0.45} wireframe />
            </mesh>
            <mesh rotation={[0.4, Math.PI / 2, 0]}>
              <torusGeometry args={[1.95, 0.018, 10, 64]} />
              <meshBasicMaterial color={gold} transparent opacity={0.26} wireframe />
            </mesh>
          </>
        ) : null}

        {variant === 'contact' ? (
          <>
            <mesh>
              <icosahedronGeometry args={[0.55, 1]} />
              <meshBasicMaterial color={gold} transparent opacity={0.46} wireframe />
            </mesh>
            {[1.15, 1.55, 1.95].map((radius, index) => (
              <mesh key={radius} rotation={[Math.PI / 2.4, index * 0.3, 0]}>
                <torusGeometry args={[radius, 0.012, 8, 64]} />
                <meshBasicMaterial color={cream} transparent opacity={0.32 - index * 0.08} wireframe />
              </mesh>
            ))}
            {[-1, 1].map((side) => (
              <mesh key={side} position={[side * 1.6, side * -0.35, 0]}>
                <octahedronGeometry args={[0.28, 0]} />
                <meshBasicMaterial color={gold} transparent opacity={0.36} wireframe />
              </mesh>
            ))}
          </>
        ) : null}
      </group>
    </Float>
  )
}

export function ServiceSceneCanvas({ variant }: { variant: ServiceSceneVariant }) {
  const reducedMotion = useReducedMotion()

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.25]}>
      <SceneForm variant={variant} reducedMotion={reducedMotion} />
    </Canvas>
  )
}
