import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, Suspense } from "react";

const AnimatedSphere = () => {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#7c3aed" wireframe />
        
      </mesh>
    </Float>
  );
};

const FloatingRing = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const ref = useRef<any>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ref.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} floatIntensity={0.8}>
      <mesh ref={ref} position={position}>
        <torusGeometry args={[0.8, 0.05, 16, 48]} />
        {/* @ts-ignore */}
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
    </Float>
  );
};

const ParticleField = () => {
  const points = useRef<any>(null);
  const count = 200;

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      {/* @ts-ignore */}
      <pointsMaterial size={0.02} color="#a78bfa" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <pointLight position={[-3, 2, 4]} intensity={0.5} color="#e879a0" />
          <AnimatedSphere />
          <FloatingRing position={[3, 1.5, -2]} color="#e879a0" />
          <FloatingRing position={[-3, -1, -1]} color="#7c3aed" />
          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
