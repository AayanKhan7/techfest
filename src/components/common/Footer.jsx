import { SITE_CONFIG } from '../../data'

export default function Footer() {
  return (
    <footer className="glassmorphic border-t border-white/10 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <img src="/assets/images/Gravity logo.PNG" alt="Gravity 2K26" style={{ height: '80px', width: 'auto', margin: '0 auto 20px', opacity: 0.9 }} />
        <p className="text-white/60 mb-4 text-sm">{SITE_CONFIG.tagline}</p>
        <p className="text-white/40 text-sm">
          © 2026 KJEI Techfest. All rights reserved.
        </p>
        <div className="mt-6 flex justify-center space-x-6">
          <a href="#" className="text-white/60 hover:text-neon-cyan transition-colors">
            Instagram
          </a>
          <a href="#" className="text-white/60 hover:text-neon-cyan transition-colors">
            Twitter
          </a>
          <a href="#" className="text-white/60 hover:text-neon-cyan transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
