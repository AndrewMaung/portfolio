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
          ? 'bg-base-bg/90 backdrop-blur-md border-b border-base-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-cyan text-sm tracking-widest hover:opacity-80 transition-opacity"
        >
          <span className="text-text-secondary">&gt; </span>
          AMO
          <span className="inline-block w-2 h-4 bg-cyan ml-1 animate-blink align-middle" />
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={`font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${
                  active === link
                    ? 'text-cyan'
                    : 'text-text-secondary hover:text-cyan'
                }`}
              >
                <span className="text-green-dim mr-1">./</span>
                {link}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={downloadCV}
              className="font-mono text-xs tracking-widest uppercase text-green border border-green/30 px-3 py-1.5 rounded hover:border-green hover:bg-green/5 transition-all duration-200 flex items-center gap-1.5"
            >
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5.5 1v6M3 5l2.5 2.5L8 5M1 8.5v.5a1 1 0 001 1h7a1 1 0 001-1v-.5"/>
              </svg>
              CV
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-secondary hover:text-cyan transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {menuOpen ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            ) : (
              <>
                <rect y="4" width="20" height="1.5" rx="1"/>
                <rect y="9.25" width="20" height="1.5" rx="1"/>
                <rect y="14.5" width="20" height="1.5" rx="1"/>
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-base-surface border-b border-base-border px-6 py-4">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block w-full text-left font-mono text-xs tracking-widest uppercase text-text-secondary hover:text-cyan py-3 border-b border-base-border transition-colors"
            >
              <span className="text-green-dim mr-2">./</span>{link}
            </button>
          ))}
          <button
            onClick={() => { downloadCV(); setMenuOpen(false) }}
            className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-green py-3 transition-colors hover:text-green/80"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 1v7M3.5 5.5L6 8l2.5-2.5M1 9.5v.5a1 1 0 001 1h8a1 1 0 001-1v-.5"/>
            </svg>
            Download CV
          </button>
        </div>
      )}
    </header>
  )
}