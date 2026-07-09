export default function Publications() {
  return (
    <section id="publications" className="py-section px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Publications & Research</h2>

        <div className="card-base border-accent-blue/30 bg-dark-900/80 p-8 shadow-xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-accent-blue/15 text-accent-blue border border-accent-blue/30 rounded-full text-xs font-semibold uppercase tracking-wider">
              Published Online
            </span>
            <span className="text-sm text-dark-400">
              Manuscript ID: <code className="text-dark-200 bg-dark-800 px-1.5 py-0.5 rounded text-xs font-mono">DMOR-2511-2038 (R2)</code>
            </span>
          </div>

          <h3 className="text-2xl font-bold mb-3 leading-snug text-dark-50">
            Explainable and Scalable Ensemble Decision-Support Framework for Multi-Commodity Price Forecasting in Agricultural Markets
          </h3>

          <p className="text-dark-400 text-sm mb-4">
            <span className="font-semibold text-dark-300">Authors:</span> Rituraj Jain, Nay Oo Lwin, Rabnaz Dal, <span className="text-accent-blue font-semibold">Ah Maung Oo</span>
          </p>

          <p className="text-accent-blue text-sm font-medium mb-6">
            Journal of Decisions and Operations Research
          </p>

          <p className="text-dark-300 mb-8 leading-relaxed text-base">
            This research presents an explainable and scalable ensemble decision-support framework for forecasting multiple agricultural commodity prices. The work focuses on improving predictive performance while maintaining interpretability for real-world decision-making in agricultural markets.
          </p>

          <div>
            <a
              href="https://www.journal-dmor.ir/article_243447_en.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-accent-blue/10 text-accent-blue border border-accent-blue/30 rounded-lg text-sm font-medium hover:bg-accent-blue hover:text-white transition-all duration-300"
            >
              Read Paper
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
