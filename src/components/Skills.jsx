const skills = {
  'Programming': ['Python', 'JavaScript', 'SQL', 'HTML/CSS'],
  'Data Science & ML': ['Machine Learning', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Data Visualization'],
  'Web Dev': ['React', 'Vite', 'Tailwind CSS', 'REST APIs'],
  'Tools': ['Jupyter', 'Git', 'Kaggle', 'Google Colab'],
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 max-w-5xl mx-auto px-6">
      <div className="reveal">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="font-serif text-5xl font-bold text-text-primary mb-2">
            Skills
          </h2>
          <div className="w-12 h-1 bg-accent" />
        </div>

        <div className="space-y-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="pb-6 border-b border-base-border last:border-b-0">
              <h3 className="mono-accent mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block text-sm text-text-secondary border border-base-border px-3 py-1 hover:border-accent hover:text-accent transition-colors"
                  >
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
