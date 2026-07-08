const skills = {
  'Programming Languages': ['Python', 'JavaScript', 'SQL', 'HTML/CSS'],
  'Data Science & ML': ['Machine Learning', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Data Visualization'],
  'Web Development': ['React', 'Vite', 'Tailwind CSS', 'REST APIs'],
  'Tools & Platforms': ['Jupyter', 'Git', 'Kaggle', 'Google Colab'],
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 max-w-4xl mx-auto px-6">
      <div className="reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-black mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-base-surface text-black px-3 py-2 rounded text-sm border border-base-border hover:bg-base-hover transition-colors"
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
