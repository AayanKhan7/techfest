import { motion } from 'framer-motion'

export default function NeonButton({ children, onClick, color = 'cyan', className = '' }) {
  const colorClasses = {
    cyan: 'bg-neon-cyan/20 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/30 neon-glow-cyan',
    yellow: 'bg-neon-gold/20 border-neon-gold text-neon-gold hover:bg-neon-gold/30 neon-glow-gold',
    red: 'bg-neon-red/20 border-neon-red text-neon-red hover:bg-neon-red/30 neon-glow-red',
    purple: 'bg-neon-purple/20 border-neon-purple text-neon-purple hover:bg-neon-purple/30 neon-glow-purple',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-6 py-3 border rounded-lg font-semibold transition-all duration-300 ${colorClasses[color]} ${className}`}
    >
      {children}
    </motion.button>
  )
}
