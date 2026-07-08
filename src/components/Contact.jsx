import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react'

export default function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ahmaunggoo',
      href: 'https://linkedin.com/in/ahmaunggoo',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/AndrewMaung',
      href: 'https://github.com/AndrewMaung',
    },
  ]

  return (
    <section id="contact" className="py-section px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="section-title">Let's Connect</h2>
        <p className="text-dark-300 text-lg mb-12">
          I'm always open to collaborating on exciting projects, research opportunities, or just having a conversation about AI and data science.
        </p>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-base group hover:bg-dark-800 flex flex-col items-center"
              >
                <Icon className="w-8 h-8 text-accent-blue mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-1">{link.label}</h3>
                <p className="text-dark-400 text-sm group-hover:text-dark-50 transition-colors">{link.value}</p>
              </a>
            )
          })}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:hello@example.com" className="btn-primary">
            Send me an Email
          </a>
          <a href="https://github.com/AndrewMaung" target="_blank" rel="noopener noreferrer" className="btn-secondary gap-2">
            <Github size={18} /> Visit GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
