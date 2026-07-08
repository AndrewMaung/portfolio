const stats = [
  { label: 'Degree', value: 'B-Tech IT' },
  { label: 'Pursuing', value: 'M-Tech DS' },
  { label: 'Focus', value: 'ML & AI' },
  { label: 'Position', value: 'Teaching Assistant - CADSE Dept' },
]

export default function About() {
  return (
    <section id="about" className="py-24 max-w-4xl mx-auto px-6">
      <div className="reveal">
        {/* Section header */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text content */}
          <div>
            <p className="text-text-secondary leading-relaxed mb-6 text-base">
              Hi! I'm <span className="text-black font-semibold">Ah Maung Oo</span>, a passionate technologist
              from the intersection of Information Technology and Data Science. I completed my
              B-Tech in IT and am currently deepening my expertise through an M-Tech in Data Science.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6 text-base">
              I thrive on building data-driven solutions — from cleaning messy datasets and training
              machine learning models to visualizing insights that drive real decisions. My background
              in IT gives me a strong foundation in software engineering principles that I apply to
              every data pipeline I build.
            </p>
            <p className="text-text-secondary leading-relaxed text-base">
              When I'm not coding, I explore research papers, contribute to open-source projects,
              and sharpen my skills through Kaggle competitions.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-base-surface border border-base-border rounded-lg p-4 hover:border-text-secondary transition-colors duration-300"
              >
                <div className="text-xs text-text-muted mb-2 uppercase tracking-wide font-semibold">
                  {s.label}
                </div>
                <div className="text-base font-semibold text-black">
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
