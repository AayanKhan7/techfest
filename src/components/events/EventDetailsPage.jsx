import { Link } from "react-router-dom"

export default function EventDetailsPage({ eventData }) {
  // 1. Fallback if data is completely missing
  if (!eventData) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center z-50 relative">
        <h1 className="text-2xl">Event Data Not Found. Check events.js</h1>
      </div>
    )
  }

  // 2. Check if subEvents exist (Crucial for rendering)
  const hasSubEvents = eventData.subEvents && eventData.subEvents.length > 0;

  return (
    // Added 'relative z-10' to ensure this sits ON TOP of the background stars
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500/30 pb-20 relative z-10">
      
      {/* 🔙 NAVBAR */}
      <nav className="fixed top-0 left-0 w-full p-6 z-50 flex items-center bg-gradient-to-b from-black/80 to-transparent">
        <Link 
          to="/" 
          className="
            flex items-center gap-2 px-5 py-2 rounded-full 
            bg-white/10 backdrop-blur-md border border-white/10 
            hover:bg-white/20 transition-all text-sm font-medium
          "
        >
          &larr; Back to Events
        </Link>
      </nav>

      <div className="pt-32 px-6 md:px-20 max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-20 text-center">
          <h1 
            className="text-5xl md:text-8xl font-black tracking-tighter mb-6 uppercase"
            style={{ 
              color: "transparent", 
              WebkitTextStroke: `2px ${eventData.planetAccent}`,
              textShadow: `0 0 40px ${eventData.planetAccent}50`
            }}
          >
            {eventData.title}
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            {eventData.description}
          </p>
        </div>

        {/* CONTENT AREA */}
        <div className="space-y-24">
          
          {/* A. If subEvents exist, render them (Zig-Zag) */}
          {hasSubEvents ? (
            eventData.subEvents.map((sub, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-10 md:gap-20 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    <div 
                      className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                      style={{ boxShadow: `0 0 30px ${eventData.planetAccent}20` }} 
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"/>
                      <img 
                        src={sub.image} 
                        alt={sub.title} 
                        className="w-full h-[300px] md:h-[400px] object-cover"
                        onError={(e) => {
                          e.target.style.display='none'
                          e.target.nextSibling.style.display='flex'
                        }}
                      />
                      <div className="w-full h-[300px] bg-neutral-900 hidden items-center justify-center text-white/20">
                        IMAGE NOT FOUND: {sub.image}
                      </div>
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="w-full md:w-1/2 text-left">
                    <h2 className="text-4xl font-bold mb-4 text-white uppercase tracking-wide">
                      {sub.title}
                    </h2>
                    <p className="text-white/70 text-lg mb-8 leading-relaxed">
                      {sub.description}
                    </p>

                    <div className="grid grid-cols-1 gap-4 mb-8 text-sm md:text-base">
                      <div className="flex items-center gap-3">
                        <span className="text-white/40 uppercase tracking-widest w-32">Entry Fee:</span>
                        <span className="font-mono text-white font-bold">{sub.fee}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-white/40 uppercase tracking-widest w-32">Date:</span>
                        <span className="text-white">{sub.date}</span>
                      </div>
                      {sub.rounds && (
                        <div className="flex items-center gap-3">
                          <span className="text-white/40 uppercase tracking-widest w-32">Format:</span>
                          <span className="text-white">{sub.rounds}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-3">
                        <span className="text-white/40 uppercase tracking-widest w-32">Prize Pool:</span>
                        <span className="font-bold" style={{ color: eventData.planetAccent }}>{sub.prize}</span>
                      </div>
                    </div>

                    <button 
                      className="px-8 py-3 rounded-lg font-bold text-black uppercase tracking-wider transition-transform hover:scale-105"
                      style={{ backgroundColor: eventData.planetAccent }}
                    >
                      Register | {sub.title}
                    </button>
                  </div>
                </div>
              )
            })
          ) : (
            /* B. Fallback: If NO subEvents found (prevents empty page) */
            <div className="text-center p-10 border border-white/20 rounded-2xl bg-white/5">
              <h2 className="text-2xl font-bold mb-4">Event Details Coming Soon</h2>
              <p className="text-white/50">Please update events.js to include subEvents.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}