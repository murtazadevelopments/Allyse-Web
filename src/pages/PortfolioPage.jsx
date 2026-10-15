import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getCategory, portfolioCategories, portfolioItems } from '../data'
import PortfolioCard from '../components/PortfolioCard'

const tabs = [{ id: 'all', label: 'All' }, ...portfolioCategories]

export default function PortfolioPage() {
  const [params, setParams] = useSearchParams()
  const active = params.get('cat') || 'all'
  const category = getCategory(active)

  const items = useMemo(() => {
    if (active === 'all') return portfolioItems
    return portfolioItems.filter((item) => item.category === active)
  }, [active])
  const wideGallery = items.length > 0 && items.every((item) => item.wide)

  const setTab = (id) => {
    if (id === 'all') setParams({})
    else setParams({ cat: id })
  }

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-32 sm:pt-36">
      <p className="section-kicker">
        <span className="h-1.5 w-1.5 rounded-full bg-blush-400" />
        Portfolio
      </p>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h1 className="max-w-2xl font-display text-4xl font-bold sm:text-6xl">
          {category ? category.label : 'All work'}
        </h1>
        <Link to="/#contact" className="btn-ghost">
          Request a similar piece
        </Link>
      </div>
      <p className="mt-4 max-w-xl text-white/55">
        {category
          ? category.copy
          : 'Screens, banners, models, emotes, and illustration — drop in the finished files and they will land in the right tab.'}
      </p>

      <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
        {tabs.map((tab) => {
          const isActive = tab.id === active
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setTab(tab.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? 'bg-[#ece6ff] text-ink-950'
                  : 'border border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div className={`mt-8 grid gap-4 ${wideGallery ? 'lg:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04, duration: 0.4 }}
          >
            <PortfolioCard item={item} />
          </motion.div>
        ))}
      </div>

      {items.length === 0 && (
        <div className="mt-10 rounded-[28px] border border-white/8 bg-white/[0.03] p-10 text-center text-white/50">
          Artwork for this category is ready to drop in.
        </div>
      )}
    </section>
  )
}
