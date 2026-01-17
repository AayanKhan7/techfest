import React from 'react'
import { Link } from 'react-scroll'
import { SITE_CONFIG } from '../../data'

export default function HeroSection() {
  return (
    <div className="hero-overlay">
      <div className="hero-content">
        <div style={{ marginBottom: '30px' }}>
          <img src="/assets/images/Gravity logo.PNG" alt="Gravity 2K26" style={{ height: '200px', width: 'auto', margin: '0 auto', filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.2))' }} />
        </div>
        <p className="hero-subtitle" style={{ marginTop: '20px' }}>{SITE_CONFIG.tagline}</p>

        <div className="hero-actions">
          <Link to="events" spy={true} smooth={true} offset={-100} duration={500}>
            <button className="hero-btn primary">Explore Events</button>
          </Link>
          <Link to="register-portal" spy={true} smooth={true} offset={-100} duration={500}>
            <button className="hero-btn secondary">Register Now</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
