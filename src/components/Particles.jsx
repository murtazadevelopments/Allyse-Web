import { useEffect, useRef } from 'react'

export default function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let frame = 0
    let raf = 0

    const dots = Array.from({ length: 48 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.6 + 0.4,
      s: Math.random() * 0.25 + 0.05,
      a: Math.random() * 0.45 + 0.15,
      hue: Math.random() > 0.5 ? '255, 179, 212' : '196, 181, 253',
    }))

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio
      canvas.height = window.innerHeight * window.devicePixelRatio
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0)
    }

    const draw = () => {
      frame += 1
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      dots.forEach((dot, index) => {
        const y = ((dot.y + frame * 0.00018 * dot.s) % 1) * window.innerHeight
        const x = dot.x * window.innerWidth + Math.sin(frame * 0.008 + index) * 10
        ctx.beginPath()
        ctx.fillStyle = `rgba(${dot.hue}, ${dot.a})`
        ctx.arc(x, y, dot.r, 0, Math.PI * 2)
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[1] opacity-70" />
}
