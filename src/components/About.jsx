import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl px-5 py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[32px] border border-white/10"
        >
          <img
            src="/allyse-model.jpg?v=2"
            alt="Allyse character model"
            className="h-[460px] w-full bg-[#1a0a12] object-contain object-center"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent p-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/50">Signature look</p>
            <p className="font-display text-2xl font-semibold">Soft chibi. Sharp craft.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-kicker">
            <span className="h-1.5 w-1.5 rounded-full bg-blush-400" />
            About Allyse
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            A studio for personas that need to move.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
            Allyse designs VTuber identities from the first silhouette to the last animated blink.
            The work sits between illustration, 3D, and motion graphics — built for streamers,
            agencies, and creators who want something handmade, not templated.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ['Design', 'Characters, outfits, and brand systems with a readable silhouette.'],
              ['Animate', 'Loops, physics, intros, and overlays that stay light on stream.'],
              ['Model', 'Live2D and 3D avatars prepared for tracking and long sessions.'],
              ['Launch', 'Export packs, usage notes, and a look that holds up on every platform.'],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-3xl border border-white/8 bg-white/[0.03] p-4">
                <p className="font-display text-lg font-semibold">{title}</p>
                <p className="mt-1 text-sm leading-6 text-white/50">{copy}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
