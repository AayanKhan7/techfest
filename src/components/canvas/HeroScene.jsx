import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, Environment } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import EarthModel from './EarthModel'
import StarField from './StarField'

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: false }}
      dpr={[1, 2]}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <color attach="background" args={['#020202']} />
      
      {/* Cinematic Lighting: Warm Sun + Cool Fill */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 2, 5]} intensity={4} color="#ffecd1" />
      <Environment preset="city" />

      <Suspense fallback={null}>
        <StarField />
        <EarthModel />

        {/* Post Processing: Sci-Fi Glow */}
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} radius={0.6} />
        </EffectComposer>
        
        {/* Lock camera to preserve the "Poster" composition */}
        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
      </Suspense>
    </Canvas>
  )
}
