import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 border-t border-dark-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold mb-3">Ah Maung Oo</h3>
            <p className="text-dark-400 text-sm">Data Scientist & AI Enthusiast building intelligent systems and data-driven solutions.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-dark-400">
              <li><a href="#about" className="hover:text-dark-50 transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-dark-50 transition-colors">Experience</a></li>
              <li><a href="#publications" className="hover:text-dark-50 transition-colors">Publications</a></li>
              <li><a href="#skills" className="hover:text-dark-50 transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-dark-50 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold mb-3">Connect</h3>
            <ul className="space-y-2 text-sm text-dark-400">
              <li><a href="https://www.linkedin.com/in/ah-maung-oo-890bb826a" target="_blank" rel="noopener noreferrer" className="hover:text-dark-50 transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/AndrewMaung" target="_blank" rel="noopener noreferrer" className="hover:text-dark-50 transition-colors">GitHub</a></li>
              <li><a href="mailto:ahmaungoo24@gmail.com" className="hover:text-dark-50 transition-colors">Email</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-800 pt-8">
          <p className="text-center text-dark-500 text-sm flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-accent-blue" /> by Ah Maung Oo © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}
