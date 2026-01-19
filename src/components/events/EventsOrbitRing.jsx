import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function EventsOrbitRing({ color }) {
  const ref = useRef()

  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.getElapsedTime() * 0.4
  })

  return (
    <mesh ref={ref}>
      <ringGeometry args={[1.9, 2.05, 128]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.6}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
