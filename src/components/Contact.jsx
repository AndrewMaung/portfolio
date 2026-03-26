import { downloadCV } from '../utils/downloadCV'

const links = [
  {
    label: 'Email',
    value: 'ahmaungoo24@email.com',
    href: 'mailto:ahmaungoo24@email.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 7l10 7 10-7"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ahmaungoo',
    href: 'https://www.linkedin.com/in/ah-maung-oo-890bb826a',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/AndrewMaung',
    href: 'https://github.com/AndrewMaung',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
      <div className="reveal">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-cyan text-sm">05.</span>
          <h2 className="font-mono text-2xl md:text-3xl text-text-primary tracking-tight">
            contact
          </h2>
          <div className="flex-1 h-px bg-base-border ml-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: message */}
          <div>
            <p className="font-mono text-cyan text-sm tracking-widest mb-4">// let's connect</p>
            <p className="text-text-secondary text-base leading-relaxed mb-4">
              I'm currently open to internship opportunities, research collaborations,
              and interesting Data Science projects. Whether you have a question,
              a project idea, or just want to say hi — my inbox is always open.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              I'll do my best to get back to you promptly!
            </p>
          </div>

          {/* Right: contact links */}
          <div className="space-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-base-card border border-base-border rounded-lg px-5 py-4 hover:border-cyan/40 hover:bg-base-hover transition-all duration-200 group"
              >
                <span className="text-text-muted group-hover:text-cyan transition-colors duration-200">
                  {link.icon}
                </span>
                <div>
                  <div className="font-mono text-xs text-text-muted tracking-widest mb-0.5">
                    {link.label}
                  </div>
                  <div className="font-mono text-sm text-text-secondary group-hover:text-cyan transition-colors duration-200">
                    {link.value}
                  </div>
                </div>
                <svg
                  className="ml-auto text-text-muted group-hover:text-cyan transition-colors duration-200 opacity-0 group-hover:opacity-100"
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                >
                  <path d="M5 2H2v10h10V9M8 2h4v4M12 2L6 8"/>
                </svg>
              </a>
            ))}

            {/* CV Download card */}
            <button
              onClick={downloadCV}
              className="w-full flex items-center gap-4 bg-green/5 border border-green/30 rounded-lg px-5 py-4 hover:border-green hover:bg-green/10 transition-all duration-200 group mt-2"
            >
              <span className="text-green">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 1v9M5 7l3 3 3-3M1 12v1a2 2 0 002 2h10a2 2 0 002-2v-1"/>
                </svg>
              </span>
              <div className="text-left">
                <div className="font-mono text-xs text-green/60 tracking-widest mb-0.5">Resume</div>
                <div className="font-mono text-sm text-green group-hover:text-green/80 transition-colors duration-200">
                  Download CV — PDF
                </div>
              </div>
              <svg
                className="ml-auto text-green/40 group-hover:text-green transition-colors duration-200"
                width="14" height="14" viewBox="0 0 14 14" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
              >
                <path d="M7 1v8M4 6l3 3 3-3M1 11v1a1 1 0 001 1h10a1 1 0 001-1v-1"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}