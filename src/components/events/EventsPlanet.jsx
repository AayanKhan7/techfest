import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function EventsPlanet({ color }) {
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.y += 0.002
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.6, 64, 64]} />
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.2} />
    </mesh>
  )
}
