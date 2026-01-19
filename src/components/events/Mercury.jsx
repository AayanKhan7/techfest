import Planet from "./Planet"

export default function Mercury() {
  return (
    <Planet
      size={1.6}
      // Ensure this file exists in public/textures/mercury.jpg
      textureMap="/textures/mercury.jpg" 
      
      // The video shows Mercury with a cold, blue/white atmosphere glow
      glowColor={[0.2, 0.4, 0.8]} 
      
      rotationSpeed={0.001}
    />
  )
}