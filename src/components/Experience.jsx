export default function Experience() {
  const experiences = [
    {
      role: 'Co-Founder',
      company: 'DatarrX',
      logo: '/datarrx-logo.png',
      period: '2025 - Present',
      description: 'Co-founding DatarrX, an open-source research foundation dedicated to low-resource language processing and building robust digital and AI/NLP datasets for the Burmese language.',
      skills: ['NLP', 'Open Source', 'Dataset Curation', 'AI Research', 'Python'],
    },
    {
      role: 'Teaching Assistant',
      company: 'Marwadi University',
      period: 'Apr 2026 - Present',
      description: 'Supporting students in data science and machine learning courses. Guiding research projects and assisting with course material development.',
      skills: ['Teaching', 'Python', 'Machine Learning', 'Student Mentoring'],
    },
    {
      role: 'Data Science Student',
      company: 'M-Tech Program',
      period: '2024 - Present',
      description: 'Advanced studies in machine learning, deep learning, NLP, and data analytics. Conducting research in emerging AI technologies.',
      skills: ['ML/DL', 'Python', 'TensorFlow', 'Research'],
    },
    {
      role: 'IT Graduate',
      company: 'B-Tech Program',
      period: '2020 - 2024',
      description: 'Strong foundation in computer science, software development, and data structures. Completed multiple projects and internships.',
      skills: ['Full Stack', 'Databases', 'Web Dev', 'Problem Solving'],
    },
  ]

  return (
    <section id="experience" className="py-section px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Experience & Organizations</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card-base group hover:bg-dark-800/85">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
                <div className="flex items-center gap-4">
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} Logo`}
                      className="w-12 h-12 rounded-lg object-contain border border-dark-700 bg-dark-950 p-1 flex-shrink-0"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-dark-50">{exp.role}</h3>
                    <p className="text-accent-blue font-medium">{exp.company}</p>
                  </div>
                </div>
                <p className="text-dark-500 text-sm md:text-right">{exp.period}</p>
              </div>

              <p className="text-dark-300 mb-6 leading-relaxed">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span key={skill} className="inline-block px-3 py-1 bg-dark-800 border border-dark-700 rounded-full text-sm text-dark-400">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
