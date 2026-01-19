import React, { useRef } from "react"
import { Link } from "react-scroll"
import { motion, useScroll, useTransform } from "framer-motion"
import { SITE_CONFIG } from "../../data/index.js"
import Navbar from "../common/Navbar"

export default function HeroSection() {
  const ref = useRef(null)

  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const logoY = useTransform(scrollY, [0, 500], [0, -140])
  const logoScale = useTransform(scrollY, [0, 500], [1, 1.05])

  return (
    <section
      ref={ref}
      className="hero-overlay"
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100vh",
      }}
    >
      {/* ✅ NAVBAR — RESPONSIVE WRAPPER */}
      <div
        style={{
          position: "absolute",
          top: "3vh",
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 60,
          pointerEvents: "none", // Allows clicks to pass through empty space
        }}
      >
        {/* Re-enable clicks for the Navbar itself */}
        <div style={{ pointerEvents: "auto" }}>
          <Navbar />
        </div>
      </div>

      {/* HERO CONTENT */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 40,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop: "-6vh",
        }}
      >
        <motion.img
          src="/assets/images/Gravity logo.PNG"
          alt="Gravity 2K26"
          style={{
            height: "320px",
            maxWidth: "90vw",
            marginBottom: "40px",
            filter: "drop-shadow(0 0 40px rgba(255,255,255,0.35))",
            y: logoY,
            scale: logoScale,
          }}
        />

        <p
          className="hero-subtitle"
          style={{
            marginBottom: "36px",
            fontSize: "1.1rem",
            opacity: 0.85,
            color: "white", // Ensure text is visible
          }}
        >
          {SITE_CONFIG.tagline}
        </p>

        <Link to="events" smooth offset={-100} duration={600}>
          <button className="hero-btn primary">
            Explore Events
          </button>
        </Link>
      </div>
    </section>
  )
}