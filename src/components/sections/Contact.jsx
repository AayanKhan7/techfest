import { Element } from 'react-scroll'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <Element name="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 text-glow-cyan">
            Get In Touch
          </h2>
          <p className="text-xl text-white/70 font-body">
            Have questions? We're here to help!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glassmorphic rounded-xl p-6">
              <MapPin className="w-8 h-8 text-neon-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
              <p className="text-white/70 font-body">
                KJEI Campus<br />
                Address line here<br />
                City, State - PIN
              </p>
            </div>

            <div className="glassmorphic rounded-xl p-6">
              <Mail className="w-8 h-8 text-neon-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <a href="mailto:contact@gravity2k26.com" className="text-white/70 hover:text-neon-cyan transition-colors font-body">
                contact@gravity2k26.com
              </a>
            </div>

            <div className="glassmorphic rounded-xl p-6">
              <Phone className="w-8 h-8 text-neon-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+911234567890" className="text-white/70 hover:text-neon-cyan transition-colors font-body">
                +91 123 456 7890
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glassmorphic rounded-xl p-6 h-96 flex items-center justify-center"
          >
            <div className="text-center text-white/60">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-white/40" />
              <p className="font-body">Interactive Map Coming Soon</p>
              {/* Replace with actual map component or iframe */}
            </div>
          </motion.div>
        </div>
      </div>
    </Element>
  )
}
