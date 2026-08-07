import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import type { Group } from 'three'

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
          <meshBasicMaterial color="#0b1b33" transparent opacity={0.1} wireframe />
        </mesh>
        <mesh rotation={[0.35, 0.2, 0]} scale={0.72}>
          <boxGeometry args={[2.5, 2.5, 2.5]} />
          <meshBasicMaterial color="#deb13b" transparent opacity={0.16} wireframe />
        </mesh>
      </group>
    </Float>
  )
}

export function TechnologyScene() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches)

    updateMotionPreference()
    mediaQuery.addEventListener('change', updateMotionPreference)

    return () => mediaQuery.removeEventListener('change', updateMotionPreference)
  }, [])

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
