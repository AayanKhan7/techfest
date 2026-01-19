import Planet from "./Planet"

export default function Moon() {
  return (
    <Planet
      size={1.6}
      rotationSpeed={0.001}
      textureMap="/textures/moon.jpg" // Ensure this matches your file extension (.png or .jpg)
      glowColor={[0.6, 0.6, 0.6]} // White/Grey Atmosphere
    />
  )
}