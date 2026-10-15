import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { featuredWorks, portfolioCategories } from '../data'
import PortfolioCard from './PortfolioCard'

function featuredSpan(item) {
  if (item.wide) return 'sm:col-span-2 lg:col-span-6'
  if (item.cover && item.category === 'illustration') return 'sm:col-span-2 lg:col-span-8'
  if (item.cover) return 'sm:col-span-2 lg:col-span-6'
  if (item.category === 'reference-sheet') return 'sm:col-span-2 lg:col-span-8'
  if (item.portrait || item.square) return 'lg:col-span-4'
  return 'lg:col-span-6'
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative z-10 mx-auto max-w-6xl px-5 py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="section-kicker">
            <span className="h-1.5 w-1.5 rounded-full bg-blush-400" />
            Portfolio
          </p>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Browse by category.</h2>
        </div>
        <Link to="/portfolio" className="btn-ghost">
          View full portfolio
          <ArrowUpRight size={15} />
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.04, duration: 0.45 }}
          >
            <Link
              to={`/portfolio?cat=${category.id}`}
              className="motion-card group flex h-full flex-col justify-between rounded-[28px] border border-white/8 bg-ink-850/80 p-5 transition hover:border-blush-400/30"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/35">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-5 font-display text-2xl font-semibold">{category.label}</h3>
                <p className="mt-2 text-sm leading-6 text-white/50">{category.copy}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm text-blush-300">
                Open gallery
                <ArrowUpRight size={14} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="section-kicker">
            <span className="h-1.5 w-1.5 rounded-full bg-blush-400" />
            Selected work
          </p>
          <h3 className="font-display text-3xl font-bold sm:text-4xl">A few pieces on the home page.</h3>
        </div>
      </div>

      <div className="grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:gap-4">
        {featuredWorks.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: Math.min(index * 0.04, 0.28), duration: 0.45 }}
            className={`min-h-0 ${featuredSpan(item)}`}
          >
            <Link to={`/portfolio?cat=${item.category}`} className="block h-full">
              <PortfolioCard item={item} featured />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
