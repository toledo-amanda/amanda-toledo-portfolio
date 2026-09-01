import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  offsetX: number
  offsetY: number
  radius: number
  opacity: number
  targetOpacity: number
  velocityX: number
  velocityY: number
  magnetism: number
}

const PARTICLE_COUNT = 200
const STATICITY = 50
const EASE = 50
const EDGE_FADE_DISTANCE = 20

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    if (!canvas || !context) return

    const particles: Particle[] = []
    const pointer = { x: 0, y: 0 }
    let width = 0
    let height = 0
    let pixelRatio = 1
    let animationFrame = 0
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const createParticle = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      offsetX: 0,
      offsetY: 0,
      radius: Math.floor(Math.random() * 3) + 0.5,
      opacity: 0,
      targetOpacity: Number((Math.random() * 0.6 + 0.1).toFixed(1)),
      velocityX: (Math.random() - 0.5) * 0.2,
      velocityY: (Math.random() - 0.5) * 0.2,
      magnetism: Math.random() * 4 + 0.1,
    })

    const drawParticle = (particle: Particle) => {
      context.beginPath()
      context.arc(
        particle.x + particle.offsetX,
        particle.y + particle.offsetY,
        particle.radius,
        0,
        Math.PI * 2,
      )
      context.fillStyle = `rgba(0, 0, 0, ${particle.opacity})`
      context.fill()
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)
      particles.forEach(drawParticle)
    }

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      width = bounds.width
      height = bounds.height
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      particles.length = 0

      for (let index = 0; index < PARTICLE_COUNT; index += 1) {
        const particle = createParticle()
        if (reduceMotion) particle.opacity = particle.targetOpacity
        particles.push(particle)
      }

      draw()
    }

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect()
      const x = event.clientX - bounds.left - width / 2
      const y = event.clientY - bounds.top - height / 2
      const inside = Math.abs(x) <= width / 2 && Math.abs(y) <= height / 2

      if (inside) {
        pointer.x = x
        pointer.y = y
      }
    }

    const animate = () => {
      context.clearRect(0, 0, width, height)

      particles.forEach((particle, index) => {
        const nearestEdge = Math.min(
          particle.x + particle.offsetX - particle.radius,
          width - particle.x - particle.offsetX - particle.radius,
          particle.y + particle.offsetY - particle.radius,
          height - particle.y - particle.offsetY - particle.radius,
        )
        const edgeOpacity = Math.min(Math.max(nearestEdge / EDGE_FADE_DISTANCE, 0), 1)

        if (nearestEdge > EDGE_FADE_DISTANCE) {
          particle.opacity = Math.min(particle.opacity + 0.02, particle.targetOpacity)
        } else {
          particle.opacity = particle.targetOpacity * edgeOpacity
        }
        particle.x += particle.velocityX
        particle.y += particle.velocityY
        particle.offsetX +=
          (pointer.x / (STATICITY / particle.magnetism) - particle.offsetX) / EASE
        particle.offsetY +=
          (pointer.y / (STATICITY / particle.magnetism) - particle.offsetY) / EASE

        if (
          particle.x < -particle.radius ||
          particle.x > width + particle.radius ||
          particle.y < -particle.radius ||
          particle.y > height + particle.radius
        ) {
          particles[index] = createParticle()
        } else {
          drawParticle(particle)
        }
      })

      animationFrame = window.requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener('resize', resize)

    if (reduceMotion) {
      draw()
    } else {
      window.addEventListener('pointermove', handlePointerMove, { passive: true })
      animationFrame = window.requestAnimationFrame(animate)
    }

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  return (
    <div className="siteBackground" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}
