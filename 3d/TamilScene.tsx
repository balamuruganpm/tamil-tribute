"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text3D, OrbitControls, Environment, Float, Stars } from "@react-three/drei"
import type * as THREE from "three"
import Particles from "./Particles"

function TamilLetters() {
  const group = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.2
    }
  })

  // Extended set of Tamil letters
  const tamilLetters = [
    "அ",
    "ஆ",
    "இ",
    "ஈ",
    "உ",
    "ஊ",
    "எ",
    "ஏ",
    "ஐ",
    "ஒ",
    "ஓ",
    "ஔ",
    "க",
    "ங",
    "ச",
    "ஞ",
    "ட",
    "ண",
    "த",
    "ந",
    "ப",
    "ம",
    "ய",
    "ர",
    "ல",
    "வ",
    "ழ",
    "ள",
    "ற",
    "ன",
  ]

  // Vibrant color palette
  const colors = [
    "#FF5733", // Orange-red
    "#C70039", // Dark red
    "#900C3F", // Burgundy
    "#581845", // Purple
    "#2E86C1", // Blue
    "#17A589", // Teal
    "#D4AC0D", // Gold
    "#28B463", // Green
  ]

  return (
    <group ref={group}>
      {tamilLetters.map((letter, i) => (
        <Float key={i} speed={1 + Math.random()} rotationIntensity={0.5} floatIntensity={0.5 + Math.random() * 0.5}>
          <Text3D
            font="/fonts/Inter_Bold.json"
            position={[(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 8]}
            rotation={[Math.random() * Math.PI * 0.2, Math.random() * Math.PI, 0]}
            size={0.8 + Math.random() * 0.7}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            {letter}
            <meshStandardMaterial
              color={colors[i % colors.length]}
              emissive={colors[i % colors.length]}
              emissiveIntensity={0.6}
              metalness={0.8}
              roughness={0.2}
            />
          </Text3D>
        </Float>
      ))}
    </group>
  )
}

function CentralSymbol() {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.y = clock.getElapsedTime() * 0.5
      mesh.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.3) * 0.2
    }
  })

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <Text3D
        font="/fonts/Inter_Bold.json"
        size={3}
        height={0.5}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.1}
        bevelSize={0.1}
        bevelOffset={0}
        bevelSegments={5}
      >
        தமிழ்
        <meshStandardMaterial
          color="#ff7b00"
          emissive="#ff7b00"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.1}
        />
      </Text3D>
    </mesh>
  )
}

function FloatingWords() {
  const words = [
    { text: "அன்பு", position: [-8, 5, -5], color: "#e74c3c", size: 1.2 },
    { text: "அறிவு", position: [8, -4, -3], color: "#3498db", size: 1.3 },
    { text: "வாழ்க", position: [-6, -6, -4], color: "#2ecc71", size: 1.1 },
    { text: "நன்றி", position: [7, 6, -6], color: "#f1c40f", size: 1.4 },
    { text: "வணக்கம்", position: [0, 8, -7], color: "#9b59b6", size: 1.5 },
  ]

  return (
    <group>
      {words.map((word, i) => (
        <Float key={i} speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
          <Text3D
            font="/fonts/Inter_Bold.json"
            position={word.position}
            size={word.size}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
          >
            {word.text}
            <meshStandardMaterial
              color={word.color}
              emissive={word.color}
              emissiveIntensity={0.7}
              metalness={0.7}
              roughness={0.3}
            />
          </Text3D>
        </Float>
      ))}
    </group>
  )
}

function AnimatedSphere() {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = clock.getElapsedTime() * 0.3
      mesh.current.rotation.y = clock.getElapsedTime() * 0.4
    }
  })

  return (
    <mesh ref={mesh} position={[0, 0, -15]} scale={5}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#8e44ad"
        emissive="#8e44ad"
        emissiveIntensity={0.2}
        metalness={0.9}
        roughness={0.1}
        wireframe={true}
      />
    </mesh>
  )
}

export default function TamilScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 60 }}
      style={{
        background: "linear-gradient(to bottom, #000000, #0a0a0a)",
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff7b00" />
        <pointLight position={[10, -5, -10]} intensity={0.5} color="#8e44ad" />

        <Particles count={3000} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0.5} fade speed={1} />

        <CentralSymbol />
        <TamilLetters />
        <FloatingWords />
        <AnimatedSphere />

        <Environment preset="night" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>
    </Canvas>
  )
}

