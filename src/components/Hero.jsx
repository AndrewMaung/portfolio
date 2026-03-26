import { useState, useEffect } from 'react'
import { downloadCV } from '../utils/downloadCV'

const roles = [
  'Data Science Student',
  'ML Enthusiast',
  'Python Developer',
  'Problem Solver',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-cyan/5 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-purple/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        {/* Top label */}
        <div
          className="font-mono text-green text-xs tracking-[4px] uppercase mb-6 opacity-0-start animate-fade-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
        >
          // initializing portfolio.exe
        </div>

        {/* Name */}
        <h1
          className="font-mono text-5xl md:text-7xl font-bold text-text-primary mb-4 opacity-0-start animate-fade-up glow-cyan"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          Ah Maung Oo
        </h1>

        {/* Tagline */}
        <div
          className="font-mono text-base md:text-xl text-text-secondary mb-3 opacity-0-start animate-fade-up"
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          <span className="text-cyan">B-Tech IT Graduate</span>
          <span className="mx-2 text-text-muted">|</span>
          <span className="text-purple">M-Tech Data Science Student</span>
        </div>

        {/* Typewriter */}
        <div
          className="font-mono text-lg md:text-2xl text-cyan mb-10 h-8 opacity-0-start animate-fade-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <span className="text-text-muted">&gt; </span>
          {displayed}
          <span className="inline-block w-[2px] h-6 bg-cyan ml-[2px] align-middle animate-blink" />
        </div>

        {/* Bio blurb */}
        <p
          className="font-sans text-text-secondary text-base md:text-lg max-w-xl leading-relaxed mb-10 opacity-0-start animate-fade-up"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          Passionate about extracting insights from data and building intelligent systems.
          Currently bridging the gap between IT fundamentals and cutting-edge Data Science.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap gap-4 opacity-0-start animate-fade-up"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-mono text-sm px-6 py-3 bg-cyan text-base-bg font-semibold rounded hover:bg-cyan/90 transition-all duration-200 tracking-wider"
          >
            ./view_projects
          </button>
          <button
            onClick={downloadCV}
            className="font-mono text-sm px-6 py-3 border border-green/50 text-green hover:border-green hover:bg-green/5 transition-all duration-200 rounded tracking-wider flex items-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 1v8M4 6l3 3 3-3M1 10v1a2 2 0 002 2h8a2 2 0 002-2v-1"/>
            </svg>
            ./download_cv
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-mono text-sm px-6 py-3 border border-base-border text-text-secondary hover:border-cyan hover:text-cyan transition-all duration-200 rounded tracking-wider"
          >
            ./contact_me
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted animate-pulse-slow">
          <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <rect x="1" y="1" width="10" height="18" rx="5" stroke="currentColor" strokeWidth="1"/>
            <rect x="5" y="4" width="2" height="4" rx="1" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </section>
  )
}