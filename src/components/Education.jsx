const education = [
  {
    degree: 'M.Tech — Data Science',
    institution: 'Marwadi University',
    period: '2026 – Present',
    status: 'pursuing',
    details: [
      'Advanced Machine Learning & Deep Learning',
      'Big Data Analytics & Processing',
      'Natural Language Processing',
      'Statistical Methods for Data Science',
      'Data Mining & Warehousing',
    ],
  },
  {
    degree: 'B.Tech — Information Technology',
    institution: 'Marwadi University',
    period: '2022 – 2026',
    status: 'completed',
    details: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Computer Networks',
      'Object-Oriented Programming',
      'Software Engineering',
    ],
  },
]

const certifications = [
  { name: 'Python for Data Science — IBM / Coursera', year: '2023' },
  { name: 'Machine Learning Specialization — Andrew Ng', year: '2023' },
  { name: 'SQL for Data Science — UC Davis', year: '2022' },
]

export default function Education() {
  return (
    <section id="education" className="py-24 bg-base-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-cyan text-sm">04.</span>
            <h2 className="font-mono text-2xl md:text-3xl text-text-primary tracking-tight">
              education
            </h2>
            <div className="flex-1 h-px bg-base-border ml-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="relative bg-base-card border border-base-border rounded-xl p-6 hover:border-cyan/30 transition-colors duration-300"
              >
                {/* Status badge */}
                <div className={`absolute top-4 right-4 font-mono text-[10px] px-2 py-0.5 rounded tracking-widest border ${
                  edu.status === 'pursuing'
                    ? 'text-green border-green/30 bg-green/5'
                    : 'text-text-muted border-base-border'
                }`}>
                  {edu.status === 'pursuing' ? '● ACTIVE' : '✓ DONE'}
                </div>

                <div className="font-mono text-xs text-text-muted mb-2 tracking-widest">
                  {edu.period}
                </div>
                <h3 className="font-mono text-base text-text-primary mb-1">
                  {edu.degree}
                </h3>
                <div className="text-cyan text-sm mb-5">
                  {edu.institution}
                </div>

                {/* Course list */}
                <ul className="space-y-2">
                  {edu.details.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-cyan mt-0.5 text-xs">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-base-card border border-base-border rounded-xl p-6">
            <h3 className="font-mono text-sm text-text-primary mb-5 tracking-wide">
              <span className="text-purple">◎ </span>certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center justify-between py-2 border-b border-base-border last:border-0">
                  <span className="text-text-secondary text-sm">{cert.name}</span>
                  <span className="font-mono text-xs text-text-muted">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
