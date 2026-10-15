import { motion } from 'framer-motion'
import { steps } from '../data'

export default function Process() {
  return (
    <section id="process" className="relative z-10 mx-auto max-w-6xl px-5 py-20">
      <p className="section-kicker">
        <span className="h-1.5 w-1.5 rounded-full bg-blush-400" />
        Process
      </p>
      <h2 className="max-w-2xl font-display text-4xl font-bold sm:text-5xl">
        From sketch to stream, with no mystery in between.
      </h2>

      <div className="mt-10 grid gap-3 md:grid-cols-5">
        {steps.map((step, index) => (
          <motion.article
            key={step.n}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
            className="relative rounded-[28px] border border-white/8 bg-white/[0.03] p-5"
          >
            <p className="font-display text-3xl font-bold text-blush-300/80">{step.n}</p>
            <h3 className="mt-6 font-display text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/50">{step.copy}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
