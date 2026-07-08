const education = [
  {
    degree: 'Master of Technology (M-Tech) in Data Science',
    school: 'Marwadi University',
    year: '2024 - Present',
    details: 'Teaching Assistant - Computer Engineering AI ML DS Dept',
  },
  {
    degree: 'Bachelor of Technology (B-Tech) in Information Technology',
    school: 'Marwadi University',
    year: '2020 - 2024',
    details: 'Graduated with honors, CGPA: 8.2/10',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 max-w-5xl mx-auto px-6">
      <div className="reveal">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="font-serif text-5xl font-bold text-text-primary mb-2">
            Education
          </h2>
          <div className="w-12 h-1 bg-accent" />
        </div>

        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div key={idx} className="flex gap-6">
              {/* Year marker - monospace */}
              <div className="mono-accent pt-1 text-sm font-semibold whitespace-nowrap text-accent flex-shrink-0">
                {edu.year}
              </div>

              {/* Content with left border */}
              <div className="pb-6 border-l-2 border-accent pl-6 flex-1 last:pb-0">
                <h3 className="font-serif text-lg font-bold text-text-primary mb-1">
                  {edu.degree}
                </h3>
                <p className="text-accent font-medium text-sm mb-2">
                  {edu.school}
                </p>
                <p className="text-text-secondary text-sm">
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
