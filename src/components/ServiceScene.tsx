import { lazy, Suspense } from 'react'

const ServiceSceneCanvas = lazy(() =>
  import('./ui/service-scene').then((module) => ({ default: module.ServiceSceneCanvas })),
)

export type ServiceSceneVariant =
  | 'digital'
  | 'cloud'
  | 'automation'
  | 'advisory'
  | 'development'
  | 'academy'
  | 'agribusiness'
  | 'manufacturing'
  | 'trade'
  | 'contact'

export function ServiceScene({ variant }: { variant: ServiceSceneVariant }) {
  return (
    <div
      className="pointer-events-none absolute right-[-9rem] top-1/2 z-0 hidden h-[30rem] w-[30rem] -translate-y-1/2 opacity-60 lg:block"
      aria-hidden="true"
    >
      <Suspense fallback={null}>
        <ServiceSceneCanvas variant={variant} />
      </Suspense>
    </div>
  )
}
