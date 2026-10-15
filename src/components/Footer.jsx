import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto max-w-6xl px-5 pb-10">
      <div className="flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-6 text-sm text-white/40 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Allyse. Handmade characters, motion, and worlds.</p>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-white">
            Top
          </Link>
          <Link to="/portfolio" className="hover:text-white">
            Work
          </Link>
          <Link to="/#contact" className="hover:text-white">
            Commission
          </Link>
        </div>
      </div>
    </footer>
  )
}
