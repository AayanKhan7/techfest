import { Canvas } from "@react-three/fiber"
import { memo, Suspense } from "react"

import Mercury from "./Mercury"
import Moon from "./Moon"
import Neptune from "./Neptune"
import Uranus from "./Uranus"

function EventsPlanetScene({ planetType }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, toneMappingExposure: 1.2 }} // Slightly brighter exposure
    >
      {/* 🌑 DARKNESS: Low ambient light makes the shadows real black */}
      <ambientLight intensity={0.15} />

      {/* ☀️ SUNLIGHT: Strong light from the RIGHT side (like the video) */}
      <directionalLight
        position={[5, 2, 5]} // Right, slightly up, front
        intensity={2.5}      // High intensity for contrast
        castShadow
      />

      {/* 🔦 RIM LIGHT: Subtle blueish backlight for depth */}
      <pointLight 
        position={[-5, 0, -5]} 
        intensity={0.5} 
        color="#4a5568" 
      />

      <Suspense fallback={null}>
        {planetType === "mercury" && <Mercury />}
        {planetType === "moon" && <Moon />}
        {planetType === "neptune" && <Neptune />}
        {planetType === "uranus" && <Uranus />}
      </Suspense>
    </Canvas>
  )
}

export default memo(EventsPlanetScene)