"use client";

import { useFrame } from "@react-three/fiber";
import { Text, Float, MeshDistortMaterial, Center } from "@react-three/drei";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";

function RotatingText({ text, position, size = 1, speed = 1 }: any) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    
    // Base animation
    meshRef.current.rotation.y = Math.sin(t * 0.5 * speed) * 0.2;
    meshRef.current.rotation.x = Math.cos(t * 0.3 * speed) * 0.1;
    
    // Mouse reaction
    const targetX = (state.mouse.x * Math.PI) / 8;
    const targetY = (state.mouse.y * Math.PI) / 8;
    meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.1;
    meshRef.current.rotation.x += (-targetY - meshRef.current.rotation.x) * 0.1;

    // Scroll fade logic (text disappears as we scroll down)
    const scroll = typeof window !== 'undefined' ? window.scrollY : 0;
    const opacity = 1 - Math.min(scroll / 500, 1);
    if (meshRef.current.children[0] && (meshRef.current.children[0] as any).material) {
      (meshRef.current.children[0] as any).material.opacity = opacity;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Center position={position}>
        <group ref={meshRef}>
          <Text
            fontSize={size}
            letterSpacing={-0.05}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
          >
            {text}
            <MeshDistortMaterial
              color={hovered ? "#38bdf8" : "#ffffff"}
              speed={2}
              distort={0.4}
              radius={1}
              transparent
              opacity={1}
            />
          </Text>
        </group>
      </Center>
    </Float>
  );
}

export default function IntroScene() {
  return (
    <>
      <color attach="background" args={["#020617"]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#38bdf8" />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2.5} color="#8b5cf6" />
      
      <RotatingText text="HARSHIT" position={[0, 0.8, 0]} size={1.2} />
      <RotatingText text="MISHRA" position={[0, -0.8, 0]} size={1.2} speed={0.8} />
      
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
      temp[i * 3] = (Math.random() - 0.5) * 40;
      temp[i * 3 + 1] = (Math.random() - 0.5) * 40;
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
