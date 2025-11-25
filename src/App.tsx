import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/SkillsGrid'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Achievement from './components/Achievement/Achievement'
import Contact from './components/Contact/ContactForm'
import Footer from './components/Footer/Footer'
import Loading from './components/Loading/Loading'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { useEffect, useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Keep loading screen for at least 1.5s to allow the Loading animation to run
    const t = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(t)
  }, [])

  if (loading) return <Loading />

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Achievement />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
