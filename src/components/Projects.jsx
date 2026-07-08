const projects = [
  {
    title: 'AI-Enhanced Academic Retention System & Predictive Intervention Model',
    description:
      'Developed an AI-based system to identify at-risk students early and suggest targeted interventions. Applied machine learning techniques for prediction and academic performance analysis.',
    tech: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas'],
    github: 'https://github.com/AndrewMaung',
    badge: 'RESEARCH',
  },
  {
    title: 'AI-Driven Commodity Price Forecasting & Volatility Analysis',
    description:
      'Built predictive models to analyze and forecast commodity prices in Gujarat, providing strategic planning insights through data-driven volatility analysis.',
    tech: ['Python', 'Time Series', 'Forecasting', 'Pandas'],
    github: 'https://github.com/AndrewMaung',
    badge: 'RESEARCH',
  },
  {
    title: 'Wearable Safety Device for Travel & Wellness',
    description:
      'Designed a wearable system for personal safety and health monitoring during travel. Published in the Indian Patent Journal on 09/01/2026.',
    tech: ['IoT', 'Embedded Systems', 'Health Monitoring'],
    github: '#',
    badge: 'PATENT',
  },
  {
    title: 'E-Commerce Website — Standing Desk Company',
    description:
      'Developed a full-stack e-commerce platform with complete product management, cart functionality, and a polished UI for a standing desk retail business.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Full-Stack'],
    github: 'https://github.com/AndrewMaung',
    badge: null,
  },
  {
    title: 'COVID Tracker Web Application',
    description:
      'Built a real-time COVID-19 tracking web application focused on data visualization and user experience, displaying live case statistics and trends.',
    tech: ['JavaScript', 'React', 'REST API', 'Data Visualization'],
    github: 'https://github.com/AndrewMaung',
    badge: null,
  },
]

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.19.092-.926.35-1.557.636-1.914-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.195 22 16.418 22 12.017 22 6.484 17.523 2 12 2Z" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-4xl mx-auto px-6">
      <div className="reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
          Projects
        </h2>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-base-surface border border-base-border rounded-lg p-6 hover:border-text-secondary transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-lg font-semibold text-black flex-1">
                  {project.title}
                </h3>
                {project.badge && (
                  <span className={`text-xs px-2 py-1 rounded font-semibold whitespace-nowrap ${
                    project.badge === 'PATENT'
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {project.badge}
                  </span>
                )}
              </div>
              
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 bg-white border border-base-border rounded text-text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              {project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-blue-700 text-sm font-medium transition-colors"
                >
                  <GithubIcon />
                  GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
