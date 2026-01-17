import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, ExternalLink } from 'lucide-react'
import Modal from '../common/Modal'
import NeonButton from '../common/NeonButton'

export default function EventCard({ event, themeColor = 'cyan' }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const colorClasses = {
    cyan: 'border-neon-cyan/50 hover:border-neon-cyan neon-glow-cyan',
    yellow: 'border-neon-gold/50 hover:border-neon-gold neon-glow-gold',
    red: 'border-neon-red/50 hover:border-neon-red neon-glow-red',
    purple: 'border-neon-purple/50 hover:border-neon-purple neon-glow-purple',
  }

  const textColorClasses = {
    cyan: 'text-neon-cyan',
    yellow: 'text-neon-gold',
    red: 'text-neon-red',
    purple: 'text-neon-purple',
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`glassmorphic rounded-xl p-6 border-2 transition-all duration-300 ${colorClasses[themeColor]}`}
      >
        <div className="mb-4">
          <h3 className="text-2xl font-display font-bold text-white mb-2">
            {event.title}
          </h3>
          <span className={`text-sm font-semibold ${textColorClasses[themeColor]}`}>
            {event.type}
          </span>
        </div>

        <p className="text-white/70 mb-4 font-body">{event.shortDesc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {event.fee && (
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
              Fee: {event.fee}
            </span>
          )}
          {event.prizes && event.prizes.length > 0 && (
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
              Prize: {event.prizes[0]}
            </span>
          )}
        </div>

        <div className="flex gap-3">
          <NeonButton
            color={themeColor}
            onClick={() => setIsModalOpen(true)}
            className="flex-1 flex items-center justify-center gap-2"
          >
            <Eye className="w-4 h-4" />
            View Details
          </NeonButton>
          <NeonButton
            color={themeColor}
            onClick={() => window.open('#register', '_blank')}
            className="flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Register
          </NeonButton>
        </div>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        event={event}
      />
    </>
  )
}
