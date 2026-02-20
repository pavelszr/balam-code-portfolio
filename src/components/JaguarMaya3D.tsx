import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Geometría del jaguar maya estilizado
function JaguarGeometry({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Mesh>(null);
  const tailRef = useRef<THREE.Mesh>(null);
  const legsRef = useRef<THREE.Group>(null);

  // Patrón de manchas del jaguar (geometría de spots)
  const spots = useMemo(() => {
    const spotPositions: { x: number; y: number; z: number; size: number }[] = [];
    // Manchas en el cuerpo
    for (let i = 0; i < 25; i++) {
      spotPositions.push({
        x: (Math.random() - 0.5) * 2.5,
        y: (Math.random() - 0.5) * 1,
        z: 0.35 + Math.random() * 0.1,
        size: 0.08 + Math.random() * 0.06,
      });
    }
    return spotPositions;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Rotación suave base
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      
      // Respuesta al mouse - deformación suave
      const targetRotationX = mousePosition.y * 0.3;
      const targetRotationY = mousePosition.x * 0.3;
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotationX,
        0.05
      );
      groupRef.current.rotation.y += THREE.MathUtils.lerp(
        0,
        targetRotationY * 0.5,
        0.05
      );
    }

    // Animación de respiración
    if (bodyRef.current) {
      bodyRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.02;
    }

    // Movimiento de cola
    if (tailRef.current) {
      tailRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 3) * 0.15;
    }

    // Cabeza sigue al mouse
    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        mousePosition.x * 0.4,
        0.08
      );
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        -mousePosition.y * 0.3,
        0.08
      );
    }
  });

  return (
    <group ref={groupRef}>
      {/* Cuerpo principal - forma estilizada de jaguar */}
      <mesh ref={bodyRef} position={[0, 0, 0]}>
        <capsuleGeometry args={[0.6, 1.8, 4, 16]} />
        <meshStandardMaterial 
          color="#D4A574" 
          roughness={0.6}
          metalness={0.1}
        />
      </mesh>

      {/* Manchas del jaguar */}
      {spots.map((spot, i) => (
        <mesh key={i} position={[spot.x, spot.y, spot.z]}>
          <circleGeometry args={[spot.size, 8]} />
          <meshStandardMaterial 
            color="#1a1a1a" 
            roughness={0.8}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {/* Cabeza */}
      <group ref={headRef} position={[0, 1.3, 0.3]}>
        {/* Cráneo */}
        <mesh>
          <boxGeometry args={[0.9, 0.7, 0.8]} />
          <meshStandardMaterial color="#D4A574" roughness={0.6} />
        </mesh>
        
        {/* Hocico */}
        <mesh position={[0, -0.15, 0.5]}>
          <boxGeometry args={[0.5, 0.35, 0.4]} />
          <meshStandardMaterial color="#C49464" roughness={0.6} />
        </mesh>

        {/* Nariz */}
        <mesh position={[0, -0.05, 0.72]}>
          <boxGeometry args={[0.15, 0.1, 0.05]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
        </mesh>

        {/* Ojos - estilo maya */}
        <mesh position={[-0.25, 0.1, 0.42]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0.25, 0.1, 0.42]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.3} />
        </mesh>
        
        {/* Pupilas */}
        <mesh position={[-0.25, 0.1, 0.52]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0.25, 0.1, 0.52]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>

        {/* Orejas */}
        <mesh position={[-0.35, 0.45, 0]}>
          <coneGeometry args={[0.15, 0.3, 4]} />
          <meshStandardMaterial color="#D4A574" roughness={0.6} />
        </mesh>
        <mesh position={[0.35, 0.45, 0]}>
          <coneGeometry args={[0.15, 0.3, 4]} />
          <meshStandardMaterial color="#D4A574" roughness={0.6} />
        </mesh>

        {/* Patrón facial maya - líneas decorativas */}
        <mesh position={[-0.15, 0.25, 0.41]}>
          <boxGeometry args={[0.02, 0.15, 0.01]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        <mesh position={[0.15, 0.25, 0.41]}>
          <boxGeometry args={[0.02, 0.15, 0.01]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
      </group>

      {/* Cola */}
      <mesh ref={tailRef} position={[0, -0.8, -0.3]} rotation={[0.3, 0, 0]}>
        <capsuleGeometry args={[0.12, 1.2, 4, 8]} />
        <meshStandardMaterial color="#D4A574" roughness={0.6} />
      </mesh>

      {/* Patas */}
      <group ref={legsRef}>
        {/* Patas delanteras */}
        <mesh position={[-0.4, -0.8, 0.6]}>
          <capsuleGeometry args={[0.15, 0.8, 4, 8]} />
          <meshStandardMaterial color="#D4A574" roughness={0.6} />
        </mesh>
        <mesh position={[0.4, -0.8, 0.6]}>
          <capsuleGeometry args={[0.15, 0.8, 4, 8]} />
          <meshStandardMaterial color="#D4A574" roughness={0.6} />
        </mesh>
        {/* Patas traseras */}
        <mesh position={[-0.4, -0.8, -0.6]}>
          <capsuleGeometry args={[0.15, 0.8, 4, 8]} />
          <meshStandardMaterial color="#D4A574" roughness={0.6} />
        </mesh>
        <mesh position={[0.4, -0.8, -0.6]}>
          <capsuleGeometry args={[0.15, 0.8, 4, 8]} />
          <meshStandardMaterial color="#D4A574" roughness={0.6} />
        </mesh>
      </group>
    </group>
  );
}

// Patrón maya decorativo de fondo
function MayaPattern({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);
  
  const glyphs = useMemo(() => {
    const positions: { x: number; y: number; z: number; rotation: number }[] = [];
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      positions.push({
        x: Math.cos(angle) * 4,
        y: Math.sin(angle) * 4,
        z: -2,
        rotation: angle,
      });
    }
    return positions;
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.002;
      groupRef.current.rotation.x = mousePosition.y * 0.1;
      groupRef.current.rotation.y = mousePosition.x * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {glyphs.map((glyph, i) => (
        <mesh 
          key={i} 
          position={[glyph.x, glyph.y, glyph.z]}
          rotation={[0, 0, glyph.rotation]}
        >
          <boxGeometry args={[0.3, 0.3, 0.05]} />
          <meshStandardMaterial 
            color="#C9A227" 
            emissive="#C9A227"
            emissiveIntensity={0.2}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
      
      {/* Círculos concéntricos decorativos */}
      {[2, 3, 4, 5].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -2.5]}>
          <ringGeometry args={[radius - 0.02, radius, 64]} />
          <meshBasicMaterial 
            color="#C9A227" 
            transparent 
            opacity={0.15 - i * 0.02}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

// Componente principal de escena
function Scene() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#FFD700" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#06b6d4" />
      <pointLight position={[0, 5, -5]} intensity={0.3} color="#C9A227" />
      
      <JaguarGeometry mousePosition={mousePosition} />
      <MayaPattern mousePosition={mousePosition} />
    </>
  );
}

// Componente exportable
export default function JaguarMaya3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
