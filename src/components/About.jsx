const stats = [
  { label: 'Degree', value: 'B-Tech IT' },
  { label: 'Pursuing', value: 'M-Tech DS' },
  { label: 'Focus', value: 'ML & AI' },
  { label: 'Status', value: 'Available' },
]

export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <div className="reveal">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-cyan text-sm">01.</span>
          <h2 className="font-mono text-2xl md:text-3xl text-text-primary tracking-tight">
            about_me
          </h2>
          <div className="flex-1 h-px bg-base-border ml-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <p className="text-text-secondary leading-relaxed mb-5 text-base">
              Hi! I'm <span className="text-cyan font-mono">Ah Maung Oo</span>, a passionate technologist
              from the intersection of Information Technology and Data Science. I completed my
              B-Tech in IT and am currently deepening my expertise through an M-Tech in Data Science.
            </p>
            <p className="text-text-secondary leading-relaxed mb-5 text-base">
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
                className="bg-base-card border border-base-border rounded-lg p-5 hover:border-cyan/40 transition-colors duration-300 group"
              >
                <div className="font-mono text-xs text-text-muted mb-2 tracking-widest uppercase">
                  {s.label}
                </div>
                <div className="font-mono text-lg text-cyan group-hover:glow-cyan transition-all">
                  {s.value}
                </div>
              </div>
            ))}

            {/* Terminal card */}
            <div className="col-span-2 bg-base-card border border-base-border rounded-lg p-4 font-mono text-xs">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green/60" />
                <span className="text-text-muted ml-2 text-[10px]">terminal</span>
              </div>
              <div className="text-text-muted">
                <span className="text-green">~</span> whoami
              </div>
              <div className="text-text-secondary mt-1">
                Ah Maung Oo — Data Science Student
              </div>
              <div className="text-text-muted mt-1">
                <span className="text-green">~</span> cat interests.txt
              </div>
              <div className="text-text-secondary mt-1">
                Machine Learning, Data Science, AI, OpenSource, Research
              </div>
              <div className="text-cyan mt-1 animate-blink">█</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
