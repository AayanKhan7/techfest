import { motion } from "framer-motion"
import { Link } from "react-router-dom" 
import EventsPlanetScene from "./EventsPlanetScene"

export default function EventPlanetCard({ event, isActive }) {
  return (
    // UPDATED WRAPPER:
    // - Removed 'min-w-[100vw]' to prevent forcing full-screen blocking.
    // - Added 'w-[100vw] md:w-[85vw]' to allow a slight peek at the next card on desktop.
    // - Added 'flex-shrink-0' to ensure it doesn't squash.
    <div className="w-[100vw] md:w-[85vw] max-w-7xl h-full flex items-center justify-center px-4 md:px-16 flex-shrink-0">
      <motion.div
        animate={{ scale: isActive ? 1 : 0.98 }}
        transition={{ duration: 0.4 }}
        style={{
          border: "1px solid rgba(255,255,255,0.85)",
          boxShadow: `0 0 25px ${event.planetAccent}55`,
        }}
        className="
          w-full rounded-3xl bg-white/10 backdrop-blur-xl
          flex flex-col md:flex-row gap-8 md:gap-0 p-6 md:p-10
          relative z-10
        "
      >
        {/* LEFT */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h1
            className="text-3xl md:text-5xl tracking-widest mb-4"
            style={{ color: event.planetAccent }}
          >
            {event.title}
          </h1>

          <p className="text-white/70 mb-6">
            {event.description}
          </p>

          {/* LINK BUTTON */}
          <Link to={event.path}>
            <button
              className="px-6 py-2 rounded-full border transition-all hover:scale-105"
              style={{
                borderColor: event.planetAccent,
                color: event.planetAccent,
              }}
            >
              Explore Events
            </button>
          </Link>
        </div>

        {/* CENTER */}
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <div className="w-[280px] h-[280px] md:w-[420px] md:h-[420px]">
            <EventsPlanetScene planetType={event.planetType} />
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex w-1/3 justify-center items-center text-white/40">
          Character
        </div>
      </motion.div>
    </div>
  )
}