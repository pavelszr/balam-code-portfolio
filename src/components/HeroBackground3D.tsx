import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const mouseState = { x: 0, y: 0 };

function TorusKnotScene({ isMobile }: { isMobile: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  const material = useMemo(() => {
    if (isMobile) {
      return new THREE.MeshStandardMaterial({
        color: 0x0a0a0a,
        metalness: 0.9,
        roughness: 0.2,
        envMapIntensity: 0.5,
      });
    }
    return new THREE.MeshPhysicalMaterial({
      color: 0x0a0a0a,
      metalness: 0.8,
      roughness: 0.15,
      transmission: 0.95,
      thickness: 2.5,
      ior: 1.5,
      iridescence: 1.0,
      iridescenceIOR: 1.3,
      iridescenceThicknessRange: [100, 400],
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      side: THREE.DoubleSide,
    });
  }, [isMobile]);

  const geometry = useMemo(() => {
    if (isMobile) return new THREE.TorusKnotGeometry(1.5, 0.5, 64, 16, 3, 4);
    return new THREE.TorusKnotGeometry(1.5, 0.5, 256, 64, 3, 4);
  }, [isMobile]);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = elapsed * 0.15;
      meshRef.current.rotation.z = elapsed * 0.1;
    }
    if (!isMobile) {
      const targetX = mouseState.x * 0.5;
      const targetY = mouseState.y * 0.5;
      camera.position.x += ((Math.sin(elapsed * 0.5) * 0.1 + targetX) - camera.position.x) * 0.05;
      camera.position.y += ((Math.cos(elapsed * 0.3) * 0.1 - targetY) - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);
    }
  });

  return (
    <>
      <mesh ref={meshRef} geometry={geometry} material={material} />
      <directionalLight color={0x06B6D4} intensity={4} position={[5, 5, 5]} />
      <pointLight color={0x3B82F6} intensity={6} distance={20} position={[-5, -5, 2]} />
      {!isMobile && (
        <spotLight
          color={0xe0ffff}
          intensity={5}
          position={[0, 5, -5]}
          angle={Math.PI / 4}
          penumbra={0.5}
        />
      )}
      <ambientLight color={0x111118} intensity={1} />
    </>
  );
}

export default function HeroBackground3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = window.innerWidth < 768 || /Android|iPhone|iPad/i.test(navigator.userAgent);
    setIsMobile(mobile);

    if (!mobile) {
      const handleMouseMove = (e: MouseEvent) => {
        mouseState.x = (e.clientX / window.innerWidth) - 0.5;
        mouseState.y = (e.clientY / window.innerHeight) - 0.5;
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  if (isMobile) {
    return (
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas
          camera={{ fov: 45, near: 0.01, far: 100, position: [0, 0, 7] }}
          gl={{
            antialias: false,
            alpha: true,
            powerPreference: 'low-power',
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.2,
            outputColorSpace: THREE.SRGBColorSpace,
          }}
          style={{ background: 'transparent', pointerEvents: 'none' }}
          dpr={1}
          frameloop="always"
        >
          <TorusKnotScene isMobile={true} />
        </Canvas>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ fov: 45, near: 0.01, far: 100, position: [0, 0, 7] }}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        style={{ background: 'transparent', pointerEvents: 'none' }}
        dpr={[1, 2]}
      >
        <TorusKnotScene isMobile={false} />
      </Canvas>
    </div>
  );
}
