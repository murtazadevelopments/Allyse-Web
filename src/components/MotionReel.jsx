import { motion } from 'framer-motion'

export default function MotionReel() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-5 py-8">
      <div className="overflow-hidden rounded-[36px] border border-white/8 bg-ink-850/60 p-6 sm:p-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="section-kicker">
              <span className="h-1.5 w-1.5 rounded-full bg-blush-400" />
              Motion graphics
            </p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Graphics that keep breathing.</h2>
          </div>
          <p className="hidden max-w-xs text-sm text-white/45 sm:block">
            Loops, stingers, and overlay systems designed to feel expensive in 3 seconds of stream time.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="relative min-h-[220px] overflow-hidden rounded-[28px] bg-gradient-to-br from-blush-500/20 to-ink-950">
            <span className="pulse-ring absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blush-300/40" />
            <span className="pulse-ring absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lilac-300/30" style={{ animationDelay: '1.2s' }} />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-8 rounded-full border border-dashed border-white/15"
            />
            <p className="absolute bottom-5 left-5 text-sm font-medium">Alert rings</p>
          </article>

          <article className="relative min-h-[220px] overflow-hidden rounded-[28px] bg-gradient-to-br from-lilac-500/20 to-ink-950">
            {[0, 1, 2, 3].map((bar) => (
              <motion.span
                key={bar}
                className="absolute bottom-14 rounded-full bg-gradient-to-t from-lilac-400 to-blush-300"
                style={{ left: `${22 + bar * 18}%`, width: 18 }}
                animate={{ height: [36, 110, 52, 90, 36] }}
                transition={{ duration: 2.2 + bar * 0.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
            <p className="absolute bottom-5 left-5 text-sm font-medium">Audio-reactive bars</p>
          </article>

          <article className="relative min-h-[220px] overflow-hidden rounded-[28px] bg-gradient-to-br from-fuchsia-400/10 to-ink-950">
            <motion.div
              animate={{ x: ['-10%', '110%'] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 h-px w-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white to-transparent"
            />
            <motion.div
              animate={{ scale: [0.92, 1.05, 0.92], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3.2, repeat: Infinity }}
              className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/20"
            />
            <p className="absolute bottom-5 left-5 text-sm font-medium">Stinger wipe</p>
          </article>
        </div>
      </div>
    </section>
  )
}
