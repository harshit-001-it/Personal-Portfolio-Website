"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, ReactNode, useState, useEffect } from "react";
import { Preload } from "@react-three/drei";

export default function ThreeCanvas({ children }: { children: ReactNode }) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleFocus = () => setKey(prev => prev + 1);
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1]">
      <Canvas
        key={key}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
        dpr={typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : 1}
      >
        <Suspense fallback={null}>
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
