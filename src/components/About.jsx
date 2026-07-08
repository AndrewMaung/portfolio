const stats = [
  { label: 'Degree', value: 'B-Tech IT' },
  { label: 'Pursuing', value: 'M-Tech DS' },
  { label: 'Focus', value: 'ML & AI' },
  { label: 'Role', value: 'Teaching Assistant' },
]

export default function About() {
  return (
    <section id="about" className="py-24 max-w-5xl mx-auto px-6">
      <div className="reveal">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="font-serif text-5xl font-bold text-text-primary mb-2">
            About
          </h2>
          <div className="w-12 h-1 bg-accent" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Main text - 2 columns */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-text-secondary leading-relaxed">
              Hi! I'm Ah Maung Oo, a passionate technologist from the intersection of Information Technology and Data Science. 
              I completed my B-Tech in IT and am currently deepening my expertise through an M-Tech in Data Science.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I thrive on building data-driven solutions — from cleaning messy datasets and training machine learning models 
              to visualizing insights that drive real decisions. My background in IT gives me a strong foundation in software 
              engineering principles that I apply to every data pipeline I build.
            </p>
            <p className="text-text-secondary leading-relaxed">
              When I'm not coding, I explore research papers, contribute to open-source projects, and sharpen my skills 
              through Kaggle competitions.
            </p>
          </div>

          {/* Stats grid - 1 column */}
          <div className="space-y-4">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-accent pl-4">
                <div className="font-mono text-xs text-accent uppercase tracking-wider font-semibold mb-1">
                  {s.label}
                </div>
                <div className="text-text-primary font-medium">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
