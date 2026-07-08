import { downloadCV } from '../utils/downloadCV'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Subtle left accent line */}
      <div className="absolute left-0 top-1/4 w-1 h-32 bg-gradient-to-b from-accent to-transparent" />

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        {/* Staggered typography */}
        <div className="space-y-2 mb-8">
          <h1
            className="font-serif text-7xl md:text-8xl font-bold text-text-primary opacity-0-start animate-fade-up"
            style={{ animationDelay: '0s', animationFillMode: 'forwards' }}
          >
            Ah Maung Oo
          </h1>
        </div>

        {/* Mono tagline */}
        <div
          className="mono-accent mb-8 opacity-0-start animate-fade-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
        >
          Data Scientist · Deep Learning · Computer Vision
        </div>

        {/* Description */}
        <p
          className="text-lg text-text-secondary max-w-2xl leading-relaxed opacity-0-start animate-fade-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          B-Tech IT graduate pursuing M-Tech in Data Science. Passionate about building intelligent systems 
          through machine learning and data-driven insights. Teaching Assistant at Marwadi University.
        </p>
      </div>
    </section>
  )
}
