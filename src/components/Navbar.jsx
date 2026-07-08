import { useState, useEffect } from 'react'
import { downloadCV } from '../utils/downloadCV'

const links = ['about', 'skills', 'projects', 'education', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
    setActive(id)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-base-border shadow-sm'
          : 'bg-white'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-lg font-semibold text-black hover:text-accent transition-colors"
        >
          Ah Maung Oo
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={`text-sm transition-colors duration-200 ${
                  active === link
                    ? 'text-accent font-medium'
                    : 'text-text-secondary hover:text-black'
                }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={downloadCV}
              className="text-sm px-4 py-2 bg-accent text-white rounded hover:bg-blue-700 transition-colors duration-200"
            >
              Download CV
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-secondary hover:text-black transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-base-border px-6 py-4">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block w-full text-left text-sm py-3 text-text-secondary hover:text-black transition-colors"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
          <button
            onClick={() => { downloadCV(); setMenuOpen(false) }}
            className="w-full mt-3 px-4 py-2 bg-accent text-white rounded text-sm hover:bg-blue-700 transition-colors"
          >
            Download CV
          </button>
        </div>
      )}
    </header>
  )
}
