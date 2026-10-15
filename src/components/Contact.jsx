import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = data.get('name')
    const email = data.get('email')
    const project = data.get('project')
    const message = data.get('message')
    const body = encodeURIComponent(
      `Hi Allyse,%0A%0A${message}%0A%0AProject: ${project}%0AFrom: ${name} (${email})`,
    )
    window.location.href = `mailto:hello@allyse.studio?subject=${encodeURIComponent(
      `Commission inquiry — ${project}`,
    )}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl px-5 py-20">
      <div className="overflow-hidden rounded-[36px] border border-white/10 bg-ink-850/80 p-6 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="section-kicker">
              <span className="h-1.5 w-1.5 rounded-full bg-blush-400" />
              Work with me
            </p>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              Tell me the character. I’ll bring the motion.
            </h2>
            <p className="mt-4 max-w-md text-white/55">
              Share a brief for a VTuber model, design system, animation, or full stream package.
              Allyse will reply with availability, timeline, and a starting range.
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/50">
              <p>hello@allyse.studio</p>
              <p>Open for spring commissions · Priority queue available</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="grid gap-4">
            <input
              required
              name="name"
              placeholder="Your name"
              className="rounded-2xl border border-white/10 bg-ink-950/60 px-4 py-3 outline-none ring-blush-400/40 placeholder:text-white/30 focus:ring-2"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="rounded-2xl border border-white/10 bg-ink-950/60 px-4 py-3 outline-none ring-blush-400/40 placeholder:text-white/30 focus:ring-2"
            />
            <select
              name="project"
              className="rounded-2xl border border-white/10 bg-ink-950/60 px-4 py-3 outline-none ring-blush-400/40 focus:ring-2"
              defaultValue="VTuber model"
            >
              <option>VTuber model</option>
              <option>Character design</option>
              <option>Animation</option>
              <option>Motion graphics</option>
              <option>Stream branding</option>
              <option>Full package</option>
            </select>
            <textarea
              required
              name="message"
              rows="5"
              placeholder="Tell me about the vibe, references, and deadline."
              className="resize-none rounded-2xl border border-white/10 bg-ink-950/60 px-4 py-3 outline-none ring-blush-400/40 placeholder:text-white/30 focus:ring-2"
            />
            <button type="submit" className="btn-primary w-full">
              <Send size={16} />
              {sent ? 'Opening your email…' : 'Send the brief'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
