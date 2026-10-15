import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Sparkles, X } from 'lucide-react'
import { navLinks } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition ${
          scrolled || pathname !== '/' ? 'glass shadow-glow' : 'bg-transparent'
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5 pl-0.5">
          <img
            src="/allyse-logo.jpg?v=4"
            alt="Allyse"
            className="h-14 w-14 rounded-full object-cover object-center ring-1 ring-white/15"
          />
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold tracking-[0.18em]">ALLYSE</span>
            <span className="block text-[10px] uppercase tracking-[0.22em] text-white/45">
              Studio & Motion
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white/70 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `transition hover:text-white ${
                  (link.to === '/portfolio' && isActive) || (link.to === '/' && isActive)
                    ? 'text-white'
                    : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/#contact" className="btn-primary hidden lg:inline-flex">
            <Sparkles size={15} />
            Work With Me
          </Link>
          <div className="hidden items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-white/60 md:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
            Queue · Open
          </div>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-4 lg:hidden">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-white/80 hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/#contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Work With Me
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
