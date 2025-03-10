"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface ParticlesProps {
  count: number
}

export default function Particles({ count = 1000 }: ParticlesProps) {
  const mesh = useRef<THREE.Points>(null)

  const particleColors = useMemo(() => {
    const colors = new Float32Array(count * 3)
    const color = new THREE.Color()

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      // Create a more vibrant color palette
      const colorIndex = i % 6

      switch (colorIndex) {
        case 0:
          color.set("#ff7b00") // Orange
          break
        case 1:
          color.set("#8e44ad") // Purple
          break
        case 2:
          color.set("#e74c3c") // Red
          break
        case 3:
          color.set("#3498db") // Blue
          break
        case 4:
          color.set("#2ecc71") // Green
          break
        case 5:
          color.set("#f1c40f") // Yellow
          break
      }

      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
    }

    return colors
  }, [count])

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = Math.random() * 25 + 5
      const theta = THREE.MathUtils.randFloatSpread(360)
      const phi = THREE.MathUtils.randFloatSpread(360)

      temp[i3] = radius * Math.sin(theta) * Math.cos(phi)
      temp[i3 + 1] = radius * Math.sin(theta) * Math.sin(phi)
      temp[i3 + 2] = radius * Math.cos(theta)
    }

    return temp
  }, [count])

  const sizes = useMemo(() => {
    const temp = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      temp[i] = Math.random() * 0.2 + 0.1
    }

    return temp
  }, [count])

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = clock.getElapsedTime() * 0.05
      mesh.current.rotation.y = clock.getElapsedTime() * 0.075

      // Add pulsating effect
      const positions = mesh.current.geometry.attributes.position.array as Float32Array
      const time = clock.getElapsedTime()

      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        const x = positions[i3]
        const y = positions[i3 + 1]
        const z = positions[i3 + 2]

        const distance = Math.sqrt(x * x + y * y + z * z)
        const factor = Math.sin(distance + time * 0.5) * 0.2 + 1

        positions[i3] = particles[i3] * factor
        positions[i3 + 1] = particles[i3 + 1] * factor
        positions[i3 + 2] = particles[i3 + 2] * factor
      }

      mesh.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
        <bufferAttribute
          attach="attributes-color"
          count={particleColors.length / 3}
          array={particleColors}
          itemSize={3}
        />
        <bufferAttribute attach="attributes-size" count={sizes.length} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        size={0.2}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

