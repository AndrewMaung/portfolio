import { downloadCV } from '../utils/downloadCV'

export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-5xl mx-auto px-6">
      <div className="reveal">
        {/* Section header */}
        <div className="mb-8">
          <h2 className="font-serif text-5xl font-bold text-text-primary mb-2">
            Get in Touch
          </h2>
          <div className="w-12 h-1 bg-accent" />
        </div>

        <p className="text-text-secondary text-lg max-w-2xl leading-relaxed mb-12">
          I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out!
        </p>

        <div className="flex flex-col gap-4">
          <a
            href="mailto:maungoo2004@gmail.com"
            className="link-accent font-mono text-sm"
          >
            Email: maungoo2004@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/ah-maung-oo"
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent font-mono text-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/AndrewMaung"
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent font-mono text-sm"
          >
            GitHub
          </a>
          <button
            onClick={downloadCV}
            className="link-accent font-mono text-sm text-left w-fit"
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  )
}
