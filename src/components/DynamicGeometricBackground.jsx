import React, { useEffect, useRef, useState } from 'react'

const DynamicGeometricBackground = () => {
  const canvasRef = useRef(null)
  const [isLowPerformance, setIsLowPerformance] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let time = 0
    let frameCount = 0
    let lastFPSCheck = Date.now()

    // Performance monitoring
    const checkPerformance = () => {
      frameCount++
      const now = Date.now()
      if (now - lastFPSCheck > 2000) { // Check every 2 seconds
        const fps = (frameCount / 2)
        if (fps < 30) {
          setIsLowPerformance(true)
        }
        frameCount = 0
        lastFPSCheck = now
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Enhanced color palette with indigo/purple theme
    const colors = {
      primary: ['#4f46e5', '#6366f1', '#7c3aed', '#8b5cf6', '#a855f7'],
      secondary: ['#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1', '#8b5cf6'],
      accent: ['#ec4899', '#f472b6', '#a855f7', '#8b5cf6', '#7c3aed']
    }

    // Geometric shapes classes
    class GeometricParticle {
      constructor() {
        this.reset()
        this.life = Math.random()
        this.maxLife = 1
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.z = Math.random() * 1000 + 500 // Depth for 3D effect
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.vz = (Math.random() - 0.5) * 2
        this.rotationX = Math.random() * Math.PI * 2
        this.rotationY = Math.random() * Math.PI * 2
        this.rotationZ = Math.random() * Math.PI * 2
        this.rotationSpeedX = (Math.random() - 0.5) * 0.01
        this.rotationSpeedY = (Math.random() - 0.5) * 0.01
        this.rotationSpeedZ = (Math.random() - 0.5) * 0.02
        this.size = Math.random() * 40 + 20
        this.shape = Math.floor(Math.random() * 3) // 0: triangle, 1: hexagon, 2: circle
        this.colorPalette = Math.floor(Math.random() * 3)
        this.opacity = Math.random() * 0.4 + 0.1
      }

      update() {
        // Update position with smooth movement
        this.x += this.vx + Math.sin(time * 0.001 + this.x * 0.001) * 0.1
        this.y += this.vy + Math.cos(time * 0.001 + this.y * 0.001) * 0.1
        this.z += this.vz

        // Update rotations
        this.rotationX += this.rotationSpeedX
        this.rotationY += this.rotationSpeedY
        this.rotationZ += this.rotationSpeedZ

        // Boundary wrapping with depth consideration
        if (this.x > canvas.width + this.size) this.x = -this.size
        if (this.x < -this.size) this.x = canvas.width + this.size
        if (this.y > canvas.height + this.size) this.y = -this.size
        if (this.y < -this.size) this.y = canvas.height + this.size
        if (this.z > 1500) this.z = 500
        if (this.z < 500) this.z = 1500

        // Life cycle for organic feel
        this.life += 0.003
        if (this.life > this.maxLife) {
          this.life = 0
          this.reset()
        }
      }

      draw() {
        ctx.save()
        
        // 3D perspective calculation
        const perspective = 800
        const scale = perspective / (perspective + this.z)
        const x = this.x * scale + canvas.width * (1 - scale) * 0.5
        const y = this.y * scale + canvas.height * (1 - scale) * 0.5
        const size = this.size * scale

        ctx.translate(x, y)
        ctx.scale(scale, scale)
        
        // Apply 3D rotations
        const cos = Math.cos(this.rotationZ)
        const sin = Math.sin(this.rotationZ)
        ctx.transform(cos, sin, -sin, cos, 0, 0)

        // Dynamic color based on depth and time
        const colorIndex = Math.floor((this.z + time * 0.1) / 200) % colors.primary.length
        const baseColor = this.colorPalette === 0 ? colors.primary[colorIndex] :
                         this.colorPalette === 1 ? colors.secondary[colorIndex] :
                         colors.accent[colorIndex]
        
        const dynamicOpacity = this.opacity * (1 - this.z / 1500) * (Math.sin(this.life * Math.PI) + 0.5)
        
        // Create gradient for depth effect
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size)
        gradient.addColorStop(0, `${baseColor}${Math.floor(dynamicOpacity * 255).toString(16).padStart(2, '0')}`)
        gradient.addColorStop(0.7, `${baseColor}${Math.floor(dynamicOpacity * 0.3 * 255).toString(16).padStart(2, '0')}`)
        gradient.addColorStop(1, 'transparent')

        ctx.fillStyle = gradient
        ctx.strokeStyle = `${baseColor}${Math.floor(dynamicOpacity * 0.8 * 255).toString(16).padStart(2, '0')}`
        ctx.lineWidth = 1.5 * scale

        this.drawShape(size)
        
        ctx.restore()
      }

      drawShape(size) {
        ctx.beginPath()
        
        switch(this.shape) {
          case 0: // Triangle
            this.drawTriangle(size)
            break
          case 1: // Hexagon
            this.drawPolygon(size, 6)
            break
          case 2: // Circle with inner geometry
            this.drawGeometricCircle(size)
            break
        }
        
        ctx.fill()
        ctx.stroke()
      }

      drawTriangle(size) {
        const height = size * Math.sqrt(3) / 2
        ctx.moveTo(0, -height / 2)
        ctx.lineTo(-size / 2, height / 2)
        ctx.lineTo(size / 2, height / 2)
        ctx.closePath()
      }

      drawPolygon(size, sides) {
        for (let i = 0; i < sides; i++) {
          const angle = (i * Math.PI * 2) / sides
          const x = Math.cos(angle) * size / 2
          const y = Math.sin(angle) * size / 2
          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.closePath()
      }

      drawGeometricCircle(size) {
        // Outer circle
        ctx.arc(0, 0, size / 2, 0, Math.PI * 2)
        ctx.fill()
        
        // Inner geometric pattern
        ctx.beginPath()
        ctx.strokeStyle = ctx.fillStyle
        for (let i = 0; i < 8; i++) {
          const angle = (i * Math.PI * 2) / 8
          const innerRadius = size / 4
          const outerRadius = size / 2
          ctx.moveTo(
            Math.cos(angle) * innerRadius,
            Math.sin(angle) * innerRadius
          )
          ctx.lineTo(
            Math.cos(angle) * outerRadius,
            Math.sin(angle) * outerRadius
          )
        }
        ctx.stroke()
      }
    }

    // Floating geometric lines
    class ConnectingLine {
      constructor(p1, p2) {
        this.p1 = p1
        this.p2 = p2
        this.opacity = 0
        this.maxOpacity = 0.15
      }

      update() {
        const dx = this.p1.x - this.p2.x
        const dy = this.p1.y - this.p2.y
        const dz = this.p1.z - this.p2.z
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)
        
        this.opacity = distance < 200 ? 
          this.maxOpacity * (1 - distance / 200) : 0
      }

      draw() {
        if (this.opacity <= 0) return

        const perspective = 800
        const scale1 = perspective / (perspective + this.p1.z)
        const scale2 = perspective / (perspective + this.p2.z)
        
        const x1 = this.p1.x * scale1 + canvas.width * (1 - scale1) * 0.5
        const y1 = this.p1.y * scale1 + canvas.height * (1 - scale1) * 0.5
        const x2 = this.p2.x * scale2 + canvas.width * (1 - scale2) * 0.5
        const y2 = this.p2.y * scale2 + canvas.height * (1 - scale2) * 0.5

        const gradient = ctx.createLinearGradient(x1, y1, x2, y2)
        gradient.addColorStop(0, `#6366f1${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`)
        gradient.addColorStop(0.5, `#8b5cf6${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`)
        gradient.addColorStop(1, `#a855f7${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`)

        ctx.strokeStyle = gradient
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      }
    }

    // Initialize particles and connections
    const particles = []
    let numberOfParticles = 25 // Base number
    
    // Adaptive particle count based on device capabilities
    const devicePixelRatio = window.devicePixelRatio || 1
    const screenArea = canvas.width * canvas.height
    
    if (isLowPerformance || screenArea < 500000) {
      numberOfParticles = 12
    } else if (screenArea > 2000000) {
      numberOfParticles = 35
    }
    
    // Reduce particles on mobile
    if (window.innerWidth < 768) {
      numberOfParticles = Math.floor(numberOfParticles * 0.6)
    }

    const connections = []

    for (let i = 0; i < numberOfParticles; i++) {
      particles.push(new GeometricParticle())
    }

    const animate = () => {
      checkPerformance()
      
      // Skip frames on low performance devices
      if (isLowPerformance && frameCount % 2 !== 0) {
        animationFrameId = requestAnimationFrame(animate)
        return
      }
      
      time += isLowPerformance ? 32 : 16 // Slower time progression for low perf
      
      // Clear canvas with sophisticated background
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Create dynamic gradient background
      const bgGradient = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.3, 0,
        canvas.width * 0.5, canvas.height * 0.7, Math.max(canvas.width, canvas.height)
      )
      
      // Dynamic background colors that shift over time
      const timeOffset = time * 0.0001
      const color1 = `hsl(${230 + Math.sin(timeOffset) * 10}, 15%, 8%)`
      const color2 = `hsl(${240 + Math.cos(timeOffset * 0.7) * 15}, 25%, 12%)`
      const color3 = `hsl(${220 + Math.sin(timeOffset * 1.3) * 8}, 20%, 5%)`
      
      bgGradient.addColorStop(0, color1)
      bgGradient.addColorStop(0.5, color2)
      bgGradient.addColorStop(1, color3)
      
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add subtle texture overlay
      ctx.save()
      ctx.globalAlpha = 0.02
      ctx.fillStyle = '#6366f1'
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 2
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()

      // Update particles
      particles.forEach(particle => particle.update())

      // Create connections between nearby particles
      connections.length = 0
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          connections.push(new ConnectingLine(particles[i], particles[j]))
        }
      }

      // Update and draw connections
      connections.forEach(connection => {
        connection.update()
        connection.draw()
      })

      // Draw particles (on top of connections)
      particles.forEach(particle => particle.draw())

      // Add ambient glow effect
      ctx.save()
      ctx.globalCompositeOperation = 'screen'
      ctx.globalAlpha = 0.1
      
      const glowGradient = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.5, 0,
        canvas.width * 0.5, canvas.height * 0.5, Math.max(canvas.width, canvas.height) * 0.5
      )
      glowGradient.addColorStop(0, '#8b5cf6')
      glowGradient.addColorStop(0.3, '#6366f1')
      glowGradient.addColorStop(1, 'transparent')
      
      ctx.fillStyle = glowGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.restore()

      animationFrameId = requestAnimationFrame(animate)
    }

    // Performance optimization: reduce particle count on smaller screens
    if (canvas.width < 768) {
      while (particles.length > 15) {
        particles.pop()
      }
    }

    resizeCanvas()
    animate()

    // Handle resize with debouncing
    let resizeTimeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        resizeCanvas()
        // Reinitialize particles for new canvas size
        particles.forEach(particle => particle.reset())
      }, 250)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      clearTimeout(resizeTimeout)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: -1,
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)'
      }}
    />
  )
}

export default DynamicGeometricBackground