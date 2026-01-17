import { Element } from 'react-scroll'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Element name="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-glow-cyan">
            Empowering Youth Through Innovation
          </h2>
          <p className="text-xl md:text-2xl text-white/70 font-body leading-relaxed mb-6">
            GRAVITY 2K26 is more than just a techfest - it's a convergence of minds, 
            a celebration of innovation, and a platform for the next generation of 
            engineers, entrepreneurs, and creators.
          </p>
          <p className="text-lg text-white/60 font-body leading-relaxed">
            Join us for an unforgettable experience where technology meets creativity, 
            where ideas become reality, and where the future is built, one innovation at a time.
          </p>
        </motion.div>
      </div>
    </Element>
  )
}
