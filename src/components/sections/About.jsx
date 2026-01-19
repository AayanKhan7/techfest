import { Element } from 'react-scroll'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

/* EVENT START */
const EVENT_DATE = new Date('2026-02-20T09:00:00')

function useCountdown(targetDate) {
  const getTimeLeft = () => {
    const now = new Date().getTime()
    const diff = targetDate.getTime() - now

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return timeLeft
}

function TimeBlock({ label, value }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-5xl md:text-6xl font-bold tracking-wider text-white">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs uppercase tracking-[0.3em] text-white/60 mt-2">
        {label}
      </div>
    </div>
  )
}

export default function About() {
  const time = useCountdown(EVENT_DATE)

  return (
    <Element name="about" className="relative py-32 px-6 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[70rem] h-[70rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* ===== LEFT — COUNTDOWN ===== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            glassmorphic
            rounded-3xl
            px-10 py-12
            text-center
            border border-white/25
            shadow-[0_0_80px_rgba(96,165,250,0.25)]
          "
        >
          <p className="text-sm tracking-[0.45em] text-white/70 mb-4">
            EVENT COUNTDOWN
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold tracking-widest mb-10">
            FEBRUARY 20, 2026
          </h3>

          <div className="flex justify-center gap-8 md:gap-12">
            <TimeBlock label="Days" value={time.days} />
            <TimeBlock label="Hours" value={time.hours} />
            <TimeBlock label="Minutes" value={time.minutes} />
            <TimeBlock label="Seconds" value={time.seconds} />
          </div>
        </motion.div>

        {/* ===== RIGHT — ABOUT CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-glow-cyan tracking-wider">
            Empowering Youth Through Innovation
          </h2>

          <p className="text-lg text-white/70 leading-relaxed mb-6">
            <span className="text-white font-semibold">GRAVITY 2K26</span> is more
            than a techfest — it is a convergence of brilliant minds, a celebration
            of innovation, and a launchpad for the next generation of engineers,
            entrepreneurs, and creators.
          </p>

          <p className="text-base text-white/60 leading-relaxed">
            Step into a universe where technology meets creativity, competition
            fuels growth, and ideas transform into reality.
          </p>
        </motion.div>

      </div>
    </Element>
  )
}
