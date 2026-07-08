import { downloadCV } from '../utils/downloadCV'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6 w-full">
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 animate-fade-up">
          Ah Maung Oo
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-text-secondary mb-6 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards', opacity: 0 }}>
          B-Tech IT Graduate | M-Tech Data Science Student & Teaching Assistant
        </p>

        {/* Description */}
        <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards', opacity: 0 }}>
          Passionate about extracting insights from data and building intelligent systems. 
          Currently bridging the gap between IT fundamentals and cutting-edge Data Science.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards', opacity: 0 }}>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-accent text-white font-medium rounded hover:bg-blue-700 transition-colors duration-200"
          >
            View My Work
          </button>
          <button
            onClick={downloadCV}
            className="px-8 py-3 bg-base-card text-black border border-base-border font-medium rounded hover:bg-base-hover transition-colors duration-200"
          >
            Download CV
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-base-card text-black border border-base-border font-medium rounded hover:bg-base-hover transition-colors duration-200"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}
