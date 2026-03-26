export default function Footer() {
  return (
    <footer className="border-t border-base-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-text-muted">
          <span className="text-cyan">©</span> {new Date().getFullYear()} Ah Maung Oo
          <span className="mx-2 text-base-border">|</span>
          Built with React + Tailwind + Vite
        </div>
        <div className="font-mono text-xs text-text-muted">
          <span className="text-green">▸</span> Deployed on Vercel
        </div>
      </div>
    </footer>
  )
}
