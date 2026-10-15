import { marquee } from '../data'

export default function Marquee() {
  const items = [...marquee, ...marquee]

  return (
    <section className="relative z-10 mb-10 overflow-hidden border-y border-white/5 py-4">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10 text-sm uppercase tracking-[0.28em] text-white/35">
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-blush-400/80" />
          </span>
        ))}
      </div>
    </section>
  )
}
