const projects = [
  {
    number: '01',
    title: 'AI-Enhanced Academic Retention System & Predictive Intervention Model',
    description:
      'Developed an AI-based system to identify at-risk students early and suggest targeted interventions. Applied machine learning techniques for prediction and academic performance analysis. Research paper currently in preparation.',
    tech: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'Data Analysis'],
    github: 'https://github.com/AndrewMaung',
    demo: '#',
    highlight: true,
    badge: 'RESEARCH',
  },
  {
    number: '02',
    title: 'AI-Driven Commodity Price Forecasting & Volatility Analysis',
    description:
      'Built predictive models to analyze and forecast commodity prices in Gujarat, providing strategic planning insights through data-driven volatility analysis. Research paper currently in progress.',
    tech: ['Python', 'Time Series', 'Forecasting', 'Pandas', 'Matplotlib', 'NumPy'],
    github: 'https://github.com/AndrewMaung',
    demo: '#',
    highlight: false,
    badge: 'RESEARCH',
  },
  {
    number: '03',
    title: 'Wearable Safety Device for Travel & Wellness',
    description:
      'Designed a wearable system for personal safety and health monitoring during travel. Published in the Indian Patent Journal on 09/01/2026.',
    tech: ['IoT', 'Embedded Systems', 'Health Monitoring', 'Patent'],
    github: '#',
    demo: '#',
    highlight: false,
    badge: 'PATENT',
  },
  {
    number: '04',
    title: 'E-Commerce Website — Standing Desk Company',
    description:
      'Developed a full-stack e-commerce platform with complete product management, cart functionality, and a polished UI for a standing desk retail business.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Full-Stack', 'UI/UX'],
    github: 'https://github.com/AndrewMaung',
    demo: '#',
    highlight: false,
    badge: null,
  },
  {
    number: '05',
    title: 'COVID Tracker Web Application',
    description:
      'Built a real-time COVID-19 tracking web application focused on data visualization and user experience, displaying live case statistics and trends.',
    tech: ['JavaScript', 'React', 'REST API', 'Data Visualization', 'CSS'],
    github: 'https://github.com/AndrewMaung',
    demo: '#',
    highlight: false,
    badge: null,
  },
]

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M5 2H2v10h10V9M8 2h4v4M12 2L6 8" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <div className="reveal">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-cyan text-sm">03.</span>
          <h2 className="font-mono text-2xl md:text-3xl text-text-primary tracking-tight">
            projects
          </h2>
          <div className="flex-1 h-px bg-base-border ml-4" />
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.number}
              className={`group relative bg-base-card border rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 ${
                project.highlight
                  ? 'border-cyan/30 hover:border-cyan/60'
                  : 'border-base-border hover:border-base-hover'
              }`}
            >
              {project.badge && (
                <div className={`absolute top-4 right-4 font-mono text-[10px] border px-2 py-0.5 rounded tracking-widest ${
                  project.badge === 'PATENT'
                    ? 'text-purple border-purple/30'
                    : project.badge === 'RESEARCH'
                    ? 'text-cyan border-cyan/30'
                    : 'text-cyan border-cyan/30'
                }`}>
                  {project.badge}
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Number */}
                <div className="font-mono text-4xl font-bold text-base-border group-hover:text-cyan/20 transition-colors duration-300 select-none hidden md:block">
                  {project.number}
                </div>

                <div className="flex-1">
                  <h3 className="font-mono text-lg text-text-primary mb-3 group-hover:text-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] text-text-muted border border-base-border px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-cyan transition-colors duration-200"
                      >
                        <GithubIcon />
                        GitHub
                      </a>
                    )}
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-cyan transition-colors duration-200"
                      >
                        <ExternalIcon />
                        Live Demo
                      </a>
                    )}
                    {project.github === '#' && project.demo === '#' && (
                      <span className="font-mono text-xs text-text-muted italic">
                        {project.badge === 'PATENT' ? 'Patent published — Indian Patent Journal' : 'Coming soon'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more link */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/AndrewMaung"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-text-secondary hover:text-cyan border border-base-border hover:border-cyan/40 px-6 py-3 rounded inline-flex items-center gap-2 transition-all duration-200"
          >
            <GithubIcon />
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}