const accents = {
  screens: 'from-cyan-400/25 to-lilac-500/15',
  banners: 'from-fuchsia-400/25 to-blush-400/10',
  'chibi-models': 'from-blush-500/35 to-lilac-500/15',
  emotes: 'from-amber-300/25 to-blush-400/10',
  'female-vt': 'from-pink-400/30 to-violet-400/15',
  illustration: 'from-violet-400/30 to-cyan-300/10',
  'male-vt': 'from-sky-400/25 to-indigo-500/15',
  pfp: 'from-rose-300/30 to-lilac-400/10',
  'reference-sheet': 'from-emerald-300/20 to-lilac-400/10',
}

export function PortfolioPoster({ category }) {
  return (
    <div className={`relative h-full min-h-[240px] overflow-hidden bg-gradient-to-br ${accents[category] || 'from-white/10 to-transparent'}`}>
      <div className="absolute inset-0 opacity-70">
        <span className="absolute left-[-10%] top-[20%] h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        <span className="absolute right-[-8%] bottom-[10%] h-48 w-48 rounded-full bg-blush-400/20 blur-2xl" />
      </div>
      <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 400 300" fill="none">
        <path
          className="spin-slow origin-center"
          d="M200 40 C260 80, 320 90, 340 150 C320 210, 250 250, 200 260 C140 250, 70 210, 60 150 C80 90, 140 80, 200 40Z"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.2"
        />
        <circle cx="200" cy="150" r="46" stroke="rgba(255,211,232,0.45)" strokeWidth="1.4" />
        <circle cx="200" cy="150" r="8" fill="rgba(255,255,255,0.8)" />
      </svg>
      <p className="absolute left-5 top-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
        Artwork incoming
      </p>
    </div>
  )
}

export default function PortfolioCard({ item, featured = false }) {
  const imageClass = item.wide
    ? 'aspect-[3/1] object-cover bg-[#1a0a12]'
    : item.cover
      ? 'aspect-video object-cover bg-[#1a0a12]'
      : item.category === 'reference-sheet' && featured
        ? 'aspect-[16/10] object-cover bg-[#1a0a12]'
        : item.portrait
          ? 'aspect-[3/4] object-contain bg-[#0c0a12]'
          : item.square
            ? `aspect-square bg-[#0c0a12] ${item.category === 'emotes' || item.category === 'pfp' ? 'object-cover' : 'object-contain'}`
            : `object-contain bg-[#1a0a12] ${featured ? 'h-[340px] sm:h-[420px]' : 'h-[240px] sm:h-[280px]'}`

  return (
    <article className="motion-card group h-full overflow-hidden rounded-[28px] border border-white/8 bg-ink-850">
      <div className="relative h-full overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className={`h-full w-full object-center transition duration-700 group-hover:scale-105 ${imageClass}`}
          />
        ) : (
          <PortfolioPoster category={item.category} />
        )}
      </div>
    </article>
  )
}
