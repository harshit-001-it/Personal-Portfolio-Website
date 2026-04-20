"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

export default function IntroScene() {
  return (
    <>
      <color attach="background" args={["#020617"]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#38bdf8" />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2.5} color="#8b5cf6" />
      
      <Particles count={3000} />
      <Grid />
    </>
  );
}

function Grid() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const scroll = typeof window !== 'undefined' ? window.scrollY : 0;
    // Shift grid back slightly on scroll
    meshRef.current.position.z = -2 - (scroll * 0.005);
    meshRef.current.rotation.x = -Math.PI / 2 + (scroll * 0.0005);
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[100, 100, 50, 50]} />
      <meshStandardMaterial 
        color="#38bdf8" 
        wireframe 
        transparent 
        opacity={0.05} 
      />
    </mesh>
  );
}

function Particles({ count }: { count: number }) {
  const mesh = useRef<THREE.Points>(null);

  // Generate a circular texture for smooth stars
  const circleTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // eslint-disable-next-line react-hooks/purity
      temp[i * 3] = (Math.random() - 0.5) * 40;
      // eslint-disable-next-line react-hooks/purity
      temp[i * 3 + 1] = (Math.random() - 0.5) * 40;
      // eslint-disable-next-line react-hooks/purity
      temp[i * 3 + 2] = (Math.random() - 0.7) * 30;
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.elapsedTime * 0.05;
    const scroll = typeof window !== 'undefined' ? window.scrollY : 0;
    
    // Orbital rotation
    mesh.current.rotation.y = time;
    
    // Vertical drift on scroll (Parallax)
    mesh.current.position.y = scroll * 0.01;
    
    // Mouse interaction
    mesh.current.position.x += (state.mouse.x * 1.5 - mesh.current.position.x) * 0.05;
    mesh.current.position.y += (-state.mouse.y * 1.5 - mesh.current.position.y) * 0.05;
  });

  return (
    <points ref={mesh} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={12} 
        color="#ffffff" 
        transparent 
        opacity={0.8} 
        sizeAttenuation={false}
        blending={THREE.AdditiveBlending}
        map={circleTexture}
        depthWrite={false}
      />
    </points>
  );
}
