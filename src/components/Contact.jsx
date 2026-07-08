import { downloadCV } from '../utils/downloadCV'

export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-4xl mx-auto px-6">
      <div className="reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Get in Touch
        </h2>
        
        <p className="text-text-secondary text-lg mb-8 max-w-2xl leading-relaxed">
          I'm always interested in hearing about new projects and opportunities. Whether you have a question 
          or just want to say hello, feel free to reach out!
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:maungoo2004@gmail.com"
            className="px-6 py-3 bg-accent text-white font-medium rounded hover:bg-blue-700 transition-colors"
          >
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/ah-maung-oo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-base-card text-black border border-base-border font-medium rounded hover:bg-base-hover transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/AndrewMaung"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-base-card text-black border border-base-border font-medium rounded hover:bg-base-hover transition-colors"
          >
            GitHub
          </a>
          <button
            onClick={downloadCV}
            className="px-6 py-3 bg-base-card text-black border border-base-border font-medium rounded hover:bg-base-hover transition-colors"
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  )
}
