import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

const ticker = [
  'VTuber Models',
  'Live2D',
  '3D Characters',
  'Animation',
  'Motion Graphics',
  'Stream Overlays',
  'Character Design',
  'Illustration',
]

function ScrollTape({ reverse = false }) {
  const items = [...ticker, ...ticker, ...ticker]

  return (
    <div className="overflow-hidden border-y border-white/5 py-2.5">
      <div className={`${reverse ? 'hero-scroll-track-reverse' : 'hero-scroll-track'} flex w-max gap-8 whitespace-nowrap`}>
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/30"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-blush-400/70" />
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const copyY = useTransform(scrollYProgress, [0, 1], [0, -90])
  const copyOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const modelY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const modelScale = useTransform(scrollYProgress, [0, 1], [1, 0.88])
  const modelRotate = useTransform(scrollYProgress, [0, 1], [0, -6])
  const tapeY = useTransform(scrollYProgress, [0, 1], [0, -40])
  const cueOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])

  return (
    <section id="home" ref={sectionRef} className="relative z-10 pb-6 pt-32 sm:pt-36">
      <motion.div style={{ y: tapeY }} className="mb-8 hidden sm:block">
        <ScrollTape />
      </motion.div>

      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div style={{ y: copyY, opacity: copyOpacity }}>
            <motion.p
              custom={0}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70"
            >
              <span className="h-2 w-2 rounded-full bg-blush-400" />
              Slots open · VTuber · Design · Motion
            </motion.p>

            <motion.h1
              custom={1}
              variants={fade}
              initial="hidden"
              animate="show"
              className="font-display text-[14vw] font-extrabold leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Bringing Your
              <span className="gradient-text"> VTuber Ideas </span>
              to Life.
            </motion.h1>

            <motion.p
              custom={2}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg"
            >
              Allyse is a VTuber artist, designer, and animator crafting custom characters,
              Live2D and 3D models, stream graphics, and motion that makes a persona feel real.
            </motion.p>

            <motion.div
              custom={3}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link to="/#contact" className="btn-primary">
                <Sparkles size={16} />
                Work With Me
              </Link>
              <Link to="/portfolio" className="btn-ghost">
                View Showcase
                <ArrowDown size={15} />
              </Link>
            </motion.div>

            <motion.p
              custom={4}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-8 flex items-center gap-3 text-sm text-white/40"
            >
              <span className="inline-flex -space-x-2">
                {['#ffb3d4', '#c4b5fd', '#fff'].map((color) => (
                  <span
                    key={color}
                    className="h-7 w-7 rounded-full border border-ink-950"
                    style={{ background: color }}
                  />
                ))}
              </span>
              Trusted by independent creators, partners, and virtual talent worldwide.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: modelY, scale: modelScale, rotate: modelRotate }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-blush-500/20 via-transparent to-lilac-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-ink-850 shadow-glow-lg">
              <div className="absolute left-4 top-4 z-10 rounded-full glass px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">
                Celestial 3D Model
              </div>
              <div className="absolute right-4 top-4 z-10 rounded-full glass px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">
                Rig Ready
              </div>

              <div className="relative aspect-[4/5] overflow-hidden bg-[#1a0a12]">
                <div className="pointer-events-none absolute inset-0 z-[1]">
                  <span className="pulse-ring absolute left-1/2 top-[42%] h-48 w-48 -translate-x-1/2 rounded-full border border-blush-400/30" />
                  <span className="spark absolute left-[18%] top-[22%] h-1.5 w-1.5 rounded-full bg-white" />
                  <span
                    className="spark absolute right-[20%] top-[30%] h-1 w-1 rounded-full bg-blush-300"
                    style={{ animationDelay: '0.6s' }}
                  />
                  <span
                    className="spark absolute left-[24%] bottom-[28%] h-1 w-1 rounded-full bg-lilac-300"
                    style={{ animationDelay: '1.1s' }}
                  />
                </div>
                <img
                  src="/allyse-model.jpg?v=2"
                  alt="Allyse 3D VTuber model in a pink cat hoodie"
                  className="float-slow h-full w-full object-contain object-center"
                />
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-white/5 px-5 py-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                    Signature commission
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold">Allyse · Catbloom</p>
                  <p className="text-sm text-white/45">High-res 3D · Physics · Stream ready</p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10">
                  <span className="h-2 w-2 rounded-full bg-blush-400" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#services"
          style={{ opacity: cueOpacity }}
          className="mx-auto mt-12 flex w-fit flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40"
        >
          <span>Scroll</span>
          <span className="relative flex h-11 w-6 items-start justify-center rounded-full border border-white/15 pt-2">
            <span className="scroll-cue-line h-2.5 w-1 rounded-full bg-blush-300" />
          </span>
        </motion.a>
      </div>

      <motion.div style={{ y: tapeY }} className="mt-10 hidden sm:block">
        <ScrollTape reverse />
      </motion.div>
    </section>
  )
}
