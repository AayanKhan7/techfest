import GlobalStarBackground from './components/canvas/GlobalStarBackground'
import HeroSceneWrapper from './components/canvas/HeroSceneWrapper'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import HeroSection from './components/hero/HeroSection'
import About from './components/sections/About'
import EventGrid from './components/events/EventGrid'
import Sponsors from './components/sections/Sponsors'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="relative">
      {/* Global Starry Background - Visible on entire website */}
      <GlobalStarBackground />

      {/* Hero Scene with Earth - Only visible on landing page */}
      <HeroSceneWrapper />

      {/* Content Overlay */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />
        
        <main>
          {/* Landing Page - Hero Section (Reference Design) */}
          <section id="hero" className="min-h-screen flex items-center justify-center relative" style={{ background: 'transparent' }}>
            <HeroSection />
          </section>

          {/* Rest of the website - Original design with transparent background to show stars */}
          <div className="relative" style={{ position: 'relative', zIndex: 10, background: 'rgba(0, 0, 0, 0.3)' }}>
            <About />
            <EventGrid />
            <Sponsors />
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
