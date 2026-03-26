const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    color: 'cyan',
    skills: ['Python', 'SQL', 'C++', 'JavaScript', 'Java'],
  },
  {
    category: 'ML / AI',
    icon: '⬡',
    color: 'purple',
    skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras', 'XGBoost', 'NLP'],
  },
  {
    category: 'Data Tools',
    icon: '▣',
    color: 'green',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter'],
  },
  {
    category: 'Databases',
    icon: '◈',
    color: 'cyan',
    skills: ['MySQL', 'MongoDB', 'SQLite'],
  },
  {
    category: 'Dev & Cloud',
    icon: '◎',
    color: 'purple',
    skills: ['Git', 'GitHub', 'Docker', 'AWS (basics)', 'Linux', 'VS Code'],
  },
  {
    category: 'Web',
    icon: '⌘',
    color: 'green',
    skills: ['React', 'HTML/CSS', 'Tailwind', 'Express' , 'Node.js'],
  },
]

const colorMap = {
  cyan:   'text-cyan border-cyan/20 bg-cyan/5 hover:border-cyan/50 hover:bg-cyan/10',
  purple: 'text-purple border-purple/20 bg-purple/5 hover:border-purple/50 hover:bg-purple/10',
  green:  'text-green border-green/20 bg-green/5 hover:border-green/50 hover:bg-green/10',
}

const headerColorMap = {
  cyan:   'text-cyan',
  purple: 'text-purple',
  green:  'text-green',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-base-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-cyan text-sm">02.</span>
            <h2 className="font-mono text-2xl md:text-3xl text-text-primary tracking-tight">
              tech_stack
            </h2>
            <div className="flex-1 h-px bg-base-border ml-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="bg-base-card border border-base-border rounded-xl p-6 hover:border-base-hover transition-colors duration-300"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className={`font-mono text-lg ${headerColorMap[group.color]}`}>
                    {group.icon}
                  </span>
                  <span className="font-mono text-sm text-text-primary tracking-wide">
                    {group.category}
                  </span>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`font-mono text-xs px-3 py-1.5 rounded border transition-all duration-200 cursor-default ${colorMap[group.color]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
