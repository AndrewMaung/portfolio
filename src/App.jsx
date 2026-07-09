import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Publications from './components/Publications'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar />
      <main>
        <About />
        <Experience />
        <Publications />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
