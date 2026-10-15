import { useEffect, useRef } from 'react'

export default function Background() {
  const glowRef = useRef(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    const onMove = (event) => {
      glow.style.left = `${event.clientX}px`
      glow.style.top = `${event.clientY}px`
    }

    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div ref={glowRef} className="cursor-glow hidden md:block" />
      <div className="orb orb-pink left-[-8%] top-[-6%] h-[420px] w-[420px]" />
      <div className="orb orb-lilac right-[-6%] top-[18%] h-[380px] w-[380px]" />
      <div className="orb orb-pink bottom-[-10%] left-[30%] h-[340px] w-[340px] opacity-70" />
      <div className="absolute inset-0 grid-fade opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#07060b_92%)]" />
    </div>
  )
}
