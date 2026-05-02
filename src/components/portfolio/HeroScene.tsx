import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars, Icosahedron } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function Core() {
  const ref = useRef<Mesh>(null);
  useFrame((_, d) => { if (ref.current) { ref.current.rotation.y += d * 0.25; ref.current.rotation.x += d * 0.1; } });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Sphere ref={ref} args={[1.35, 96, 96]}>
        <MeshDistortMaterial
          color="#7c3aed"
          emissive="#3b82f6"
          emissiveIntensity={0.5}
          distort={0.45}
          speed={2}
          roughness={0.15}
          metalness={0.85}
        />
      </Sphere>
    </Float>
  );
}

function Wire() {
  const ref = useRef<Mesh>(null);
  useFrame((_, d) => { if (ref.current) { ref.current.rotation.y -= d * 0.15; ref.current.rotation.z += d * 0.08; } });
  return (
    <Icosahedron ref={ref} args={[2.1, 1]}>
      <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.25} />
    </Icosahedron>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2.4} color="#a78bfa" />
        <pointLight position={[-5, -3, -2]} intensity={1.8} color="#3b82f6" />
        <Core />
        <Wire />
        <Stars radius={30} depth={50} count={1500} factor={3} saturation={0} fade speed={0.6} />
      </Suspense>
    </Canvas>
  );
}