import { useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { downloadCV } from '../utils/downloadCV'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const profileImage = 'https://avatars.githubusercontent.com/u/47524506?v=4'

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Publications', href: '#publications' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed w-full top-0 z-50 bg-dark-950/95 backdrop-blur-md border-b border-dark-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo with GitHub Profile Picture */}
        <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img
            src={profileImage}
            alt="Ah Maung Oo"
            className="w-10 h-10 rounded-full border border-dark-700 hover:border-accent-blue transition-colors duration-300"
          />
          <span className="text-lg font-bold hidden sm:inline">Ah Maung Oo</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-dark-400 hover:text-dark-50 text-sm font-medium transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/AndrewMaung"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-dark-50 text-sm font-medium transition-colors duration-300"
            >
              GitHub
            </a>
            <button
              onClick={downloadCV}
              className="btn-primary text-xs py-2 px-4 gap-2 flex items-center"
            >
              <Download size={16} /> CV
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark-50 hover:text-dark-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-900 border-b border-dark-800 px-6 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-dark-400 hover:text-dark-50 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://github.com/AndrewMaung"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-dark-50 font-medium transition-colors"
            >
              GitHub
            </a>
            <button
              onClick={downloadCV}
              className="btn-primary text-sm flex items-center justify-center gap-2 w-full mt-2"
            >
              <Download size={18} /> Download CV
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
