import { motion } from 'framer-motion'
import { reviews } from '../data'

export default function Reviews() {
  return (
    <section id="reviews" className="relative z-10 mx-auto max-w-6xl px-5 py-20">
      <p className="section-kicker">
        <span className="h-1.5 w-1.5 rounded-full bg-blush-400" />
        Reviews
      </p>
      <h2 className="max-w-2xl font-display text-4xl font-bold sm:text-5xl">
        Creators who launched with a finished feeling.
      </h2>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <motion.blockquote
            key={review.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="rounded-[28px] border border-white/8 bg-ink-850/80 p-6"
          >
            <p className="text-base leading-7 text-white/75">“{review.quote}”</p>
            <footer className="mt-8">
              <p className="font-display text-lg font-semibold">{review.name}</p>
              <p className="text-sm text-white/40">{review.role}</p>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  )
}
