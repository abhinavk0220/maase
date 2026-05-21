import { useEffect, useState } from 'react'
import ComicStrip from './components/ComicStrip'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Menu from './components/Menu'
import Pricing from './components/Pricing'
import Promise from './components/Promise'

export default function App() {
  const [showSticky, setShowSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show sticky CTA when scrolled past 1.5vh (Hero starts to leave)
      setShowSticky(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="relative mb-[80px]"> {/* Bottom padding for sticky nav */}
      <Hero />
      <ComicStrip />
      <HowItWorks />
      <Menu />
      <Pricing />
      <Promise />
      <FAQ />
      <Footer />

      {/* Glassmorphism Sticky Bottom CTA */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-all duration-500 ease-in-out ${
          showSticky ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="bg-[#1E0D08]/85 backdrop-blur-xl border border-white/10 rounded-[20px] p-3 shadow-2xl flex items-center justify-between">
          <div className="pl-2">
            <p className="text-[11px] font-bold text-[#D4820A] tracking-wider uppercase mb-0.5">Craving Ghar ka Khana?</p>
            <p className="text-[14px] text-white font-playfair leading-none">Subscribe today</p>
          </div>
          <a
            href="#subscribe"
            className="bg-[#D4820A] text-[#1E0D08] px-5 py-2.5 rounded-full font-bold text-[14px] font-nunito transition-transform active:scale-[0.94] shadow-[0_0_15px_rgba(212,130,10,0.3)]"
          >
            Start Trial
          </a>
        </div>
      </div>
    </main>
  )
}
