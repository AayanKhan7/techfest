import { useEffect, useRef, useState } from "react"
import { EVENTS } from "../../data/events"
import EventPlanetCard from "./EventPlanetCard"
import EventDetailsModal from "./EventDetailsModal"

export default function PlanetEvents() {
  const containerRef = useRef(null)

  const [activeIndex, setActiveIndex] = useState(0)
  const [activeEvent, setActiveEvent] = useState(null)

  // Auto-rotate cards (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(i => (i + 1) % EVENTS.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-screen w-full"> 
      {/* EVENTS CONTAINER */}
      <div
        ref={containerRef}
        className="
          flex 
          overflow-x-auto       /* Enables horizontal scroll */
          snap-x snap-mandatory /* Snaps to each card */
          h-full w-full
          items-center          /* Vertically centers the cards */
        "
        style={{
          scrollbarWidth: 'none',  // Firefox: Hide scrollbar
          msOverflowStyle: 'none', // IE/Edge: Hide scrollbar
        }}
      >
        {/* Hide Scrollbar for Chrome/Safari */}
        <style>{`
          .events-scroll::-webkit-scrollbar { display: none; }
          div::-webkit-scrollbar { display: none; }
        `}</style>

        {EVENTS.map((event, index) => (
          <div key={event.id} className="snap-center h-full flex items-center">
            <EventPlanetCard
              event={event}
              isActive={index === activeIndex}
              onViewDetails={(event) => setActiveEvent(event)}
            />
          </div>
        ))}
      </div>

      {/* MODAL */}
      <EventDetailsModal
        event={activeEvent}
        onClose={() => setActiveEvent(null)}
      />
    </div>
  )
}