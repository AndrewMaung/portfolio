export default function Skills() {
  const skillsCategories = [
    {
      category: 'Machine Learning',
      skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'XGBoost', 'LightGBM', 'Keras'],
    },
    {
      category: 'Data Science',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'SQL'],
    },
    {
      category: 'Programming',
      skills: ['Python', 'JavaScript', 'SQL', 'Java', 'R', 'Bash'],
    },
    {
      category: 'Web & DevOps',
      skills: ['React', 'Node.js', 'FastAPI', 'Docker', 'AWS', 'Git'],
    },
    {
      category: 'NLP & CV',
      skills: ['NLTK', 'spaCy', 'Transformers', 'OpenCV', 'YOLO', 'HuggingFace'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB', 'Firebase'],
    },
  ]

  return (
    <section id="skills" className="py-section px-6 bg-dark-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsCategories.map((category, index) => (
            <div key={index} className="card-base">
              <h3 className="text-lg font-bold mb-4 text-accent-blue">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-3 py-2 bg-dark-800 border border-dark-700 rounded-lg text-sm text-dark-300 hover:border-accent-blue transition-colors duration-300"
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
