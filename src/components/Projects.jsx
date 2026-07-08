import { Github, ExternalLink } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'AI-Powered Data Analytics Dashboard',
      description: 'Built a comprehensive dashboard for real-time data visualization and predictive analytics using machine learning models.',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      achievements: [
        '40% improvement in data processing speed',
        'Real-time ML predictions',
        '10K+ daily active users',
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'NLP Document Classification System',
      description: 'Developed a state-of-the-art NLP model for automatic document categorization using transformer-based architectures.',
      technologies: ['Python', 'PyTorch', 'Transformers', 'FastAPI'],
      achievements: [
        '95% accuracy on test set',
        'Multi-language support',
        'Sub-100ms inference time',
      ],
      image: 'https://images.unsplash.com/photo-1554050173-934d72ac4c81?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'Time Series Forecasting Pipeline',
      description: 'Created an end-to-end ML pipeline for stock market and economic indicator forecasting with automated feature engineering.',
      technologies: ['Python', 'scikit-learn', 'XGBoost', 'Apache Airflow'],
      achievements: [
        'MAPE < 5% on validation data',
        'Automated retraining pipeline',
        'Production deployment ready',
      ],
      image: 'https://images.unsplash.com/photo-1611974786141-690a1638faa4?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
    },
  ]

  return (
    <section id="projects" className="py-section px-6 bg-dark-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-base flex flex-col reveal overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Project Image */}
              <div className="w-full h-48 bg-dark-800 rounded-lg mb-6 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-dark-300 mb-4 flex-1">{project.description}</p>

                {/* Achievements */}
                <div className="mb-4 space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <p key={i} className="text-sm text-accent-blue flex items-start gap-2">
                      <span className="text-accent-emerald mt-1">✓</span>
                      {achievement}
                    </p>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-dark-800 border border-dark-700 rounded text-dark-400">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  <a href={project.github} className="btn-secondary text-xs flex-1 text-center gap-2">
                    <Github size={16} className="inline" /> Code
                  </a>
                  <a href={project.demo} className="btn-primary text-xs flex-1 text-center gap-2">
                    <ExternalLink size={16} className="inline" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
