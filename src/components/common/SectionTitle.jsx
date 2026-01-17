import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

export default function SectionTitle({ title, subtitle, icon, color = 'cyan' }) {
  const Icon = Icons[icon] || Icons.Star
  const colorClasses = {
    cyan: 'text-neon-cyan text-glow-cyan',
    yellow: 'text-neon-gold text-glow-gold',
    red: 'text-neon-red text-glow-red',
    purple: 'text-neon-purple text-glow-purple',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <Icon className="w-12 h-12 mx-auto mb-4 text-white/60" />
      <h2 className={`text-5xl md:text-6xl font-display font-bold mb-4 ${colorClasses[color] || colorClasses.cyan}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-white/70 font-body">{subtitle}</p>
      )}
    </motion.div>
  )
}
