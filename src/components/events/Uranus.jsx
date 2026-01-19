import Planet from "./Planet"

export default function Uranus() {
  return (
    <Planet
      size={1.7}
      rotationSpeed={0.004}
      textureMap="/textures/uranus.jpg"
      glowColor={[0.2, 0.8, 0.9]} // Cyan Atmosphere
    />
  )
}