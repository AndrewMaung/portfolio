export default function About() {
  return (
    <section id="about" className="pt-32 pb-section px-6 bg-dark-900/50 min-h-[80vh] flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">Ah Maung Oo</h1>
          <p className="text-xl md:text-2xl text-dark-300 font-medium">Data Science & AI/ML Enthusiast</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-dark-300 leading-relaxed">
              I am a data science enthusiast with a strong passion for building intelligent systems and machine learning models. 
              Currently pursuing my M-Tech in Data Science, I am actively researching in the AI/ML field, focusing on applying machine learning and deep 
              learning to complex datasets to extract actionable insights and solve practical problems.
            </p>

            <ul className="space-y-3 text-dark-300 pt-4">
              <li className="flex items-start gap-3">
                <span className="text-accent-blue font-bold mt-1">→</span>
                <span>Machine Learning & Deep Learning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-blue font-bold mt-1">→</span>
                <span>Natural Language Processing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-blue font-bold mt-1">→</span>
                <span>Data Visualization & Analytics</span>
              </li>
            </ul>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="card-base text-center p-8">
              <div className="text-4xl font-bold text-accent-blue mb-2">2+</div>
              <p className="text-dark-400 text-sm font-medium">Years Experience</p>
            </div>
            <div className="card-base text-center p-8">
              <div className="text-4xl font-bold text-accent-blue mb-2">10+</div>
              <p className="text-dark-400 text-sm font-medium">Projects</p>
            </div>
            <div className="card-base text-center p-8">
              <div className="text-4xl font-bold text-accent-emerald mb-2">1</div>
              <p className="text-dark-400 text-sm font-medium">Paper Published</p>
            </div>
            <div className="card-base text-center p-8">
              <div className="text-4xl font-bold text-accent-purple mb-2">1</div>
              <p className="text-dark-400 text-sm font-medium">Patent Published</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
