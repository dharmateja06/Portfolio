import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * Minimal, professional background:
 * a slow-rotating wireframe lattice + subtle drifting particles.
 * No glow, no color noise — pure monochrome line work.
 */

function Lattice() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, d) => {
    if (!group.current) return;
    group.current.rotation.y += d * 0.05;
    group.current.rotation.x += d * 0.02;
  });

  const lines = useMemo(() => {
    const geos: THREE.BufferGeometry[] = [];
    const size = 6;
    const step = 1;
    for (let i = -size; i <= size; i += step) {
      const a = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-size, 0, i),
        new THREE.Vector3(size, 0, i),
      ]);
      const b = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(i, 0, -size),
        new THREE.Vector3(i, 0, size),
      ]);
      geos.push(a, b);
    }
    return geos;
  }, []);

  return (
    <group ref={group} rotation={[-Math.PI / 3.2, 0, 0]} position={[0, -0.4, 0]}>
      {lines.map((g, i) => (
        <line key={i}>
          <primitive object={g} attach="geometry" />
          <lineBasicMaterial color="#ffffff" transparent opacity={0.08} />
        </line>
      ))}
    </group>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const n = 400;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);
  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.y += d * 0.02;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#ffffff" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 1.5, 5], fov: 50 }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <Lattice />
        <Particles />
      </Suspense>
    </Canvas>
  );
}