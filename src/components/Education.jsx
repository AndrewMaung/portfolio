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
    <section id="education" className="py-24 max-w-4xl mx-auto px-6">
      <div className="reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
          Education
        </h2>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-base-surface border border-base-border rounded-lg p-6 hover:border-text-secondary transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-lg font-semibold text-black">
                  {edu.degree}
                </h3>
                <span className="text-sm text-text-muted font-medium whitespace-nowrap">
                  {edu.year}
                </span>
              </div>
              <p className="text-accent font-medium mb-2">
                {edu.school}
              </p>
              <p className="text-text-secondary text-sm">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
