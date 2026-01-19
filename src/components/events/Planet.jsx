import { useRef, useMemo, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// 🌟 CINEMATIC ATMOSPHERE SHADER
const vertexShader = `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`

const fragmentShader = `
  varying vec3 vNormal;
  uniform vec3 glowColor;
  void main() {
    // "Rim Light" intensity
    float intensity = pow(0.7 - dot(vNormal, vec3(0, 0, 1.0)), 5.0);
    gl_FragColor = vec4(glowColor, 1.0) * intensity;
  }
`

export default function Planet({ 
  textureMap, 
  glowColor = [0.3, 0.6, 1.0], 
  size = 1.6,
  rotationSpeed = 0.002
}) {
  const planetRef = useRef()
  const [loadedTexture, setLoadedTexture] = useState(null)
  
  // 🛡️ SAFE LOADER: Won't crash if file is missing
  useEffect(() => {
    if (!textureMap) return
    const loader = new THREE.TextureLoader()
    loader.load(
      textureMap,
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace
        setLoadedTexture(tex)
      },
      undefined,
      (err) => console.warn(`⚠️ Missing texture: ${textureMap}`)
    )
  }, [textureMap])

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += rotationSpeed
    }
  })

  // Memoize uniforms
  const uniforms = useMemo(() => ({
    glowColor: { value: new THREE.Vector3(...glowColor) }
  }), [glowColor])

  // Fallback color if texture is missing
  const fallbackColor = new THREE.Color(...glowColor)

  return (
    <group>
      {/* 1. PLANET SURFACE */}
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial 
          map={loadedTexture}
          // If texture loads, use white (so texture shows). If missing, use color.
          color={loadedTexture ? "white" : fallbackColor} 
          metalness={0.2}
          roughness={0.7}
        />
      </mesh>

      {/* 2. ATMOSPHERE GLOW */}
      <mesh scale={[1.15, 1.15, 1.15]}>
        <sphereGeometry args={[size, 64, 64]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          transparent={true}
          depthWrite={false}
        />
      </mesh>
    </group>
  )
}