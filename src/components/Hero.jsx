import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-16 px-6 flex flex-col justify-center items-center">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Main Heading */}
        <div className="space-y-4 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight leading-tight">
            Building AI & Data Solutions
          </h1>
          <p className="text-xl md:text-2xl text-dark-400 font-light">
            Data Scientist & AI Enthusiast crafting intelligent systems and data-driven insights.
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-dark-500 text-lg max-w-2xl mx-auto animate-slide-up stagger-2">
          M-Tech in Data Science | B-Tech IT Graduate | Passionate about machine learning, research, and solving complex problems through data.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-slide-up stagger-3">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 animate-bounce">
          <a href="#about" className="inline-block text-dark-500 hover:text-dark-50 transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
