"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { Text, Float, MeshDistortMaterial, Center } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";

function RotatingText({ text, position, size = 1, speed = 1 }: any) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = Math.sin(t * 0.5 * speed) * 0.2;
    meshRef.current.rotation.x = Math.cos(t * 0.3 * speed) * 0.1;
    
    // Mouse interaction
    const targetX = (state.mouse.x * Math.PI) / 8;
    const targetY = (state.mouse.y * Math.PI) / 8;
    meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.1;
    meshRef.current.rotation.x += (-targetY - meshRef.current.rotation.x) * 0.1;
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
              color={hovered ? "#ffffff" : "#cccccc"}
              speed={2}
              distort={0.4}
              radius={1}
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
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      
      <RotatingText text="HARSHIT" position={[0, 0.8, 0]} size={1.2} />
      <RotatingText text="MISHRA" position={[0, -0.8, 0]} size={1.2} speed={0.8} />
      
      {/* Background Particles */}
      <Particles count={500} />
    </>
  );
}

function Particles({ count }: { count: number }) {
  const mesh = useRef<THREE.Points>(null);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      dummy.position.set(
        (xFactor + Math.cos(t / 10) * factor) + (state.mouse.x * 5),
        (yFactor + Math.sin(t / 10) * factor) + (state.mouse.y * 5),
        (zFactor + Math.cos(t / 10) * factor)
      );
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      // Using buffer geometry instead for performance
    });
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={new Float32Array(count * 3).map(() => (Math.random() - 0.5) * 20)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.2} sizeAttenuation />
    </points>
  );
}
