import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import AnimatedStarField from './AnimatedStarField'

export default function GlobalStarBackground() {
  return (
    <div className="fixed inset-0 w-full h-full" style={{ zIndex: 0, pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <color attach="background" args={['#000000']} />
        <Suspense fallback={null}>
          <AnimatedStarField />
        </Suspense>
      </Canvas>
    </div>
  )
}
