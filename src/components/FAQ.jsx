import { useState } from 'react'
import { faqs } from '../data'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative z-10 mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="section-kicker">
            <span className="h-1.5 w-1.5 rounded-full bg-blush-400" />
            FAQ
          </p>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Before you send the brief.</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = open === index
            return (
              <article key={item.q} className="overflow-hidden rounded-[24px] border border-white/8 bg-white/[0.03]">
                <button
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span className="pr-6 font-medium">{item.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-lg">
                    {isOpen ? '–' : '+'}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-6 text-white/55">{item.a}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
