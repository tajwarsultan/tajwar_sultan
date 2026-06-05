'use client'

import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function ThreeBackground() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      canvas: mountRef.current, 
      alpha: true, 
      antialias: true 
    })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Interactive Mouse Tracking
    const mouse = new THREE.Vector2(0, 0)
    const targetMouse = new THREE.Vector2(0, 0)

    const handleMouseMove = (event) => {
      targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1
      targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Particles System - Elite Subtle Glow
    const particlesCount = window.innerWidth > 768 ? 1000 : 400
    const positions = new Float32Array(particlesCount * 3)
    const colors = new Float32Array(particlesCount * 3)
    
    const colorA = new THREE.Color('#66D2CE') // Primary Teal
    const colorB = new THREE.Color('#2DAA9E') // Secondary Teal
    
    for (let i = 0; i < particlesCount; i++) {
        // Position
        positions[i * 3] = (Math.random() - 0.5) * 30
        positions[i * 3 + 1] = (Math.random() - 0.5) * 30
        positions[i * 3 + 2] = (Math.random() - 0.5) * 30
        
        // Color randomization
        const mixedColor = colorA.clone().lerp(colorB, Math.random())
        colors[i * 3] = mixedColor.r
        colors[i * 3 + 1] = mixedColor.g
        colors[i * 3 + 2] = mixedColor.b
    }
    
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    
    const material = new THREE.PointsMaterial({
        size: 0.02,
        vertexColors: true,
        transparent: true,
        opacity: 0.25,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
    })
    
    const points = new THREE.Points(geometry, material)
    scene.add(points)
    
    camera.position.z = 12

    let animationFrameId
    let startTime = performance.now()

    const animate = () => {
        const elapsedTime = (performance.now() - startTime) / 1000
        animationFrameId = requestAnimationFrame(animate)

        // Smooth mouse movement
        mouse.x += (targetMouse.x - mouse.x) * 0.03
        mouse.y += (targetMouse.y - mouse.y) * 0.03

        // Floating Motion
        points.rotation.y = elapsedTime * 0.015
        points.rotation.x = elapsedTime * 0.008
        
        // Parallax depth
        points.position.x = mouse.x * 0.8
        points.position.y = mouse.y * 0.8
        
        renderer.render(scene, camera)
    }
    
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
    }
    
    window.addEventListener('resize', handleResize)
    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [])

  return <canvas ref={mountRef} className="fixed inset-0 -z-20 bg-[#050708]" />
}
