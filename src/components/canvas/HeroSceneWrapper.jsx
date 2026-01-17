import { useEffect, useRef } from 'react'
import HeroScene from './HeroScene'

export default function HeroSceneWrapper() {
  const wrapperRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return
      
      const heroSection = document.getElementById('hero')
      if (!heroSection) return

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
      const scrollPosition = window.scrollY + window.innerHeight

      // Hide Earth when scrolled past hero section
      if (scrollPosition > heroBottom + 100) {
        wrapperRef.current.style.opacity = '0'
        wrapperRef.current.style.pointerEvents = 'none'
      } else {
        wrapperRef.current.style.opacity = '1'
        wrapperRef.current.style.pointerEvents = 'none'
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 w-full h-full"
      style={{
        zIndex: 1,
        pointerEvents: 'none',
        transition: 'opacity 0.8s ease-out'
      }}
    >
      <HeroScene />
    </div>
  )
}
