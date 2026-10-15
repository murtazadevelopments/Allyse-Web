import { motion } from 'framer-motion'
import { Clapperboard, Palette, Sparkles, Users } from 'lucide-react'
import { stats } from '../data'

const icons = [Sparkles, Users, Palette, Clapperboard]

export default function Stats() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-5 pb-20">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => {
          const Icon = icons[index]
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="motion-card rounded-[28px] border border-white/8 bg-ink-850/80 p-5"
            >
              <div className="mb-6 grid h-10 w-10 place-items-center rounded-2xl bg-white/5 text-blush-300">
                <Icon size={18} />
              </div>
              <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/50">{item.copy}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
