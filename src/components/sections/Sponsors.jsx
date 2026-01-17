import { Element } from 'react-scroll'
import { motion } from 'framer-motion'

export default function Sponsors() {
  // Placeholder sponsor data - replace with actual sponsor logos
  const sponsors = [
    { name: 'Sponsor 1', logo: '/assets/images/sponsors/sponsor1.png' },
    { name: 'Sponsor 2', logo: '/assets/images/sponsors/sponsor2.png' },
    { name: 'Sponsor 3', logo: '/assets/images/sponsors/sponsor3.png' },
    { name: 'Sponsor 4', logo: '/assets/images/sponsors/sponsor4.png' },
  ]

  return (
    <Element name="sponsors" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 text-glow-cyan">
            Our Sponsors
          </h2>
          <p className="text-xl text-white/70 font-body">
            Powered by visionary partners
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glassmorphic rounded-xl p-6 flex items-center justify-center h-32 hover:scale-105 transition-transform duration-300"
            >
              <span className="text-white/60 text-sm">{sponsor.name}</span>
              {/* Replace with actual logo image:
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-w-full max-h-full object-contain"
              />
              */}
            </motion.div>
          ))}
        </div>
      </div>
    </Element>
  )
}
