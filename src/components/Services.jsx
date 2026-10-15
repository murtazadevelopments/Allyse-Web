import { motion } from 'framer-motion'
import { services } from '../data'

export default function Services() {
  return (
    <section id="services" className="relative z-10 mx-auto max-w-6xl px-5 py-20">
      <div className="mb-10 max-w-2xl">
        <p className="section-kicker">
          <span className="h-1.5 w-1.5 rounded-full bg-blush-400" />
          Services
        </p>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          VTuber, design, and animation — in one studio.
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="motion-card group rounded-[28px] border border-white/8 bg-ink-850/70 p-6"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs font-semibold tracking-[0.2em] text-white/35">{service.tag}</span>
              <span className="h-8 w-8 rounded-full border border-white/10 transition group-hover:border-blush-400/50 group-hover:bg-blush-400/10" />
            </div>
            <h3 className="font-display text-2xl font-semibold">{service.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/55">{service.copy}</p>
            <ul className="mt-6 space-y-2">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blush-400 to-lilac-400" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
