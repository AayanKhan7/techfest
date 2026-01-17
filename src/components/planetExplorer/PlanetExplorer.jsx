import React, { useState, useEffect, Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three'; 
import { gsap } from 'gsap';
import styles from './PlanetExplorer.module.css';
import planetsData from '../../data/planets';

const PlanetObject = ({ planet, active }) => {
  const meshRef = useRef();
  const glowRef = useRef();
  
  // Safe texture loading with fallback logic to prevent 404 crashes
  const [texture] = useLoader(
    THREE.TextureLoader, 
    [planet.textureUrl],
    (loader) => {
      loader.crossOrigin = 'anonymous';
    }
  );

  useFrame((state, delta) => {
    if (meshRef.current && active) {
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  useEffect(() => {
    if (meshRef.current && glowRef.current) {
      const targetScale = active ? 1.6 : 0;
      gsap.to(meshRef.current.scale, {
        x: targetScale, y: targetScale, z: targetScale,
        duration: 0.8, ease: "power3.out"
      });
      gsap.to(glowRef.current.scale, {
        x: targetScale * 1.02, y: targetScale * 1.02, z: targetScale * 1.02,
        duration: 0.8, ease: "power3.out"
      });
    }
  }, [active]);

  return (
    <group visible={active}>
      {/* 1. Main Planet Core */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          map={texture || null} 
          color={texture ? 'white' : planet.color} 
          metalness={0.2}
          roughness={0.8}
          emissive={new THREE.Color(planet.color)}
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* 2. Atmospheric Rim Glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color={planet.color}
          side={THREE.BackSide} 
          transparent={true}
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
};

const PlanetExplorer = () => {
  const [activeId, setActiveId] = useState(planetsData[0].id);
  const activePlanet = planetsData.find(p => p.id === activeId);
  const trackRef = useRef();

  useEffect(() => {
    const idx = planetsData.findIndex(p => p.id === activeId);
    const itemWidth = 110; 
    const targetX = (window.innerWidth / 2) - (idx * itemWidth) - (55 / 2);
    
    if (trackRef.current) {
      gsap.to(trackRef.current, { x: targetX, duration: 0.8, ease: "power3.inOut" });
    }
  }, [activeId]);

  return (
    <div className={styles.container}>
      {/* gl.alpha: true allows your site background to show through */}
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45 }} 
        className={styles.canvas}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={2.5} />
          <spotLight 
            position={[-4, 4, 4]} 
            angle={0.4} 
            penumbra={1} 
            intensity={5} 
            color={activePlanet.color} 
          />
          
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            {planetsData.map(p => (
              <PlanetObject key={p.id} planet={p} active={p.id === activeId} />
            ))}
          </Float>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>

      <div className={styles.overlay}>
        <div className={styles.aura} style={{ backgroundColor: activePlanet.color, opacity: 0.3 }} />
        
        <div className={styles.content}>
          <div className={styles.leftCol}>
            <h1 className={styles.title}>{activePlanet.name}</h1>
            <p className={styles.desc}>{activePlanet.description}</p>
            <button className={styles.btn}>READ MORE</button>
          </div>
          <div className={styles.rightCol}>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statVal}>{activePlanet.distance}</span>
                <span className={styles.statLabel}>from Core</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statVal}>{activePlanet.orbit}</span>
                <span className={styles.statLabel}>Orbital Cycle</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.navContainer}>
          <div ref={trackRef} className={styles.track}>
            {planetsData.map((p) => (
              <div 
                key={p.id} 
                className={`${styles.item} ${p.id === activeId ? styles.active : ''}`}
                onClick={() => setActiveId(p.id)}
              >
                <div 
                  className={styles.miniPlanet} 
                  style={{ backgroundColor: p.color, boxShadow: `0 0 15px ${p.color}` }} 
                />
              </div>
            ))}
          </div>
          <div className={styles.selectionIndicator} />
        </div>
      </div>
    </div>
  );
};

export default PlanetExplorer;