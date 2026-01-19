import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import GlobalStarBackground from './components/canvas/GlobalStarBackground'
import HeroSceneWrapper from './components/canvas/HeroSceneWrapper'
import Footer from './components/common/Footer'

import HeroSection from './components/hero/HeroSection'
import About from './components/sections/About'
import Gallery from './components/sections/Gallery'
import PlanetEvents from './components/events/PlanetEvents'
import Sponsors from './components/sections/Sponsors'
import Contact from './components/sections/Contact'

// ✅ New Page & Data
import EventDetailsPage from './components/events/EventDetailsPage'
import { EVENTS } from './data/events'

function App() {
  // Find data for each page
  const pitchData = EVENTS.find(e => e.id === 'pitch-perfect')
  const cineData = EVENTS.find(e => e.id === 'cineclash')
  const quadrantData = EVENTS.find(e => e.id === 'quadrant')
  const nexusData = EVENTS.find(e => e.id === 'nexus')

  return (
    <Router>
      <div className="relative overflow-x-hidden text-white">
        {/* Global Background persists across all pages */}
        <GlobalStarBackground />
        
        <Routes>
          {/* 🏠 HOME PAGE (Your Main Website) */}
          <Route path="/" element={<HomeLayout />} />

          {/* 📄 SEPARATE EVENT PAGES */}
          <Route path="/pitch-perfect" element={<EventDetailsPage eventData={pitchData} />} />
          <Route path="/cineclash" element={<EventDetailsPage eventData={cineData} />} />
          <Route path="/quadrant" element={<EventDetailsPage eventData={quadrantData} />} />
          <Route path="/nexus" element={<EventDetailsPage eventData={nexusData} />} />
        </Routes>
      </div>
    </Router>
  )
}

// 📦 Extracted Layout for the Home Page
function HomeLayout() {
  return (
    <>
      <HeroSceneWrapper />
      <div className="relative z-10">
        <main>
          <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-0" style={{ background: 'rgba(0,0,0,0.35)' }}>
            <HeroSection />
          </section>

          <div style={{ background: 'rgba(0,0,0,0.35)' }}>
            <About />
            <div className="h-24 md:h-40" />
            <section id="events" className="relative min-h-screen">
              <PlanetEvents />
            </section>
            <Gallery />
            <Sponsors />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App