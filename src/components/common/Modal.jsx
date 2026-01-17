import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function Modal({ isOpen, onClose, event }) {
  if (!event) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glassmorphic rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-display font-bold text-white">
                  {event.title}
                </h3>
                <button
                  onClick={onClose}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white/90 mb-2">Description</h4>
                  <p className="text-white/70">{event.fullDesc || event.shortDesc}</p>
                </div>

                {event.rounds && event.rounds.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white/90 mb-2">Rounds</h4>
                    <ul className="list-disc list-inside text-white/70 space-y-1">
                      {event.rounds.map((round, idx) => (
                        <li key={idx}>{round}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {event.rules && event.rules.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white/90 mb-2">Rules</h4>
                    <ul className="list-disc list-inside text-white/70 space-y-1">
                      {event.rules.map((rule, idx) => (
                        <li key={idx}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                  <div>
                    <span className="text-white/60">Registration Fee: </span>
                    <span className="text-white font-semibold">{event.fee}</span>
                  </div>
                  {event.prizes && (
                    <div>
                      <span className="text-white/60">Prizes: </span>
                      <span className="text-white font-semibold">{event.prizes.join(', ')}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
