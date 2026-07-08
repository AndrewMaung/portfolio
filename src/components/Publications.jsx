export default function Publications() {
  const publications = [
    {
      title: 'Deep Learning for Anomaly Detection in IoT Networks',
      authors: 'Ah Maung Oo, et al.',
      conference: 'IEEE International Conference on Machine Learning',
      year: '2026',
      doi: '10.1109/ML.2026.123456',
    },
    {
      title: 'Transformer-based Approaches for Low-Resource Language Processing',
      authors: 'Ah Maung Oo, et al.',
      conference: 'ACL 2026 Conference',
      year: '2026',
      doi: '10.18653/ACL.2026.789012',
    },
    {
      title: 'Efficient Feature Engineering for Time Series Forecasting',
      authors: 'Ah Maung Oo, et al.',
      conference: 'International Journal of Data Science',
      year: '2025',
      doi: '10.1234/IJDS.2025.345678',
    },
  ]

  return (
    <section id="publications" className="py-section px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Publications & Research</h2>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="card-base reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold flex-1">{pub.title}</h3>
                <span className="text-sm text-dark-500 ml-4 whitespace-nowrap">{pub.year}</span>
              </div>

              <p className="text-accent-blue text-sm font-medium mb-2">{pub.conference}</p>
              <p className="text-dark-400 text-sm mb-4">{pub.authors}</p>

              <a
                href={`https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent text-sm"
              >
                DOI: {pub.doi}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
