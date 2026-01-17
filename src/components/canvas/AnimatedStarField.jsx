import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function AnimatedStarField() {
  const starsRef = useRef()
  const groupRef = useRef()
  
  // Initialize stars data
  const { positions, originalPositions, opacities, twinkleSpeeds, sizes } = useMemo(() => {
    const count = 8000
    const pos = new Float32Array(count * 3)
    const origPos = new Float32Array(count * 3)
    const opac = new Float32Array(count)
    const twinkle = new Float32Array(count)
    const starSizes = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      // Random position in a large sphere
      const radius = 300 + Math.random() * 400
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      
      pos[i3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      pos[i3 + 2] = radius * Math.cos(phi)
      
      // Store original positions for movement
      origPos[i3] = pos[i3]
      origPos[i3 + 1] = pos[i3 + 1]
      origPos[i3 + 2] = pos[i3 + 2]
      
      // Random opacity, twinkle speed, and size
      opac[i] = 0.4 + Math.random() * 0.6
      twinkle[i] = 0.5 + Math.random() * 2
      starSizes[i] = 0.5 + Math.random() * 1.5
    }

    return {
      positions: pos,
      originalPositions: origPos,
      opacities: opac,
      twinkleSpeeds: twinkle,
      sizes: starSizes
    }
  }, [])

  useFrame(({ clock }) => {
    if (!starsRef.current) return

    const elapsedTime = clock.getElapsedTime()
    const positionAttr = starsRef.current.geometry.attributes.position
    const sizeAttr = starsRef.current.geometry.attributes.size

    // Rotate the entire starfield - more prominent rotation
    if (groupRef.current) {
      groupRef.current.rotation.y = elapsedTime * 0.08 // Faster rotation around Y axis
      groupRef.current.rotation.x = Math.sin(elapsedTime * 0.03) * 0.15 // More pronounced X axis wobble
      groupRef.current.rotation.z = Math.sin(elapsedTime * 0.02) * 0.08 // Add Z axis rotation
    }

    // Animate stars - move and twinkle
    for (let i = 0; i < positions.length / 3; i++) {
      const i3 = i * 3
      
      // Slow drift movement
      positionAttr.array[i3] = originalPositions[i3] + Math.sin(elapsedTime * 0.1 + i * 0.01) * 3
      positionAttr.array[i3 + 1] = originalPositions[i3 + 1] + Math.cos(elapsedTime * 0.15 + i * 0.01) * 3
      positionAttr.array[i3 + 2] = originalPositions[i3 + 2] + Math.sin(elapsedTime * 0.12 + i * 0.01) * 2
      
      // Twinkling effect - change size to simulate blinking
      const twinkleValue = Math.sin(elapsedTime * twinkleSpeeds[i] + i * 0.1)
      sizeAttr.array[i] = sizes[i] * (0.7 + twinkleValue * 0.3)
    }

    positionAttr.needsUpdate = true
    sizeAttr.needsUpdate = true
  })

  return (
    <group ref={groupRef}>
      <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={sizes.length}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={2}
        sizeAttenuation={true}
        color="#ffffff"
        transparent
        opacity={0.9}
        vertexColors={false}
      />
    </points>
    </group>
  )
}
