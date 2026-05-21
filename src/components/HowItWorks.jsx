import { useEffect, useRef } from 'react'

const STEPS = [
  {
    n: '1',
    title: 'We Find Your Maa',
    desc: 'We partner with real families in your neighbourhood whose cuisine matches your roots — Bihari, Odia, South Indian, and more.',
    icon: '🏡',
  },
  {
    n: '2',
    title: 'She Cooks for Her Family',
    desc: 'Whatever Maa makes for her own family that day — she prepares one extra serving with the same love, same ingredients, same taste.',
    icon: '🍳',
  },
  {
    n: '3',
    title: 'It Reaches You Fresh',
    desc: 'Hot, fresh, and packed with ghar ka pyaar — delivered straight to your door. No restaurants. No cloud kitchens. Just Maa.',
    icon: '🛵',
  },
]

export default function HowItWorks() {
  const refs = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1'
          e.target.style.transform = 'translateX(0) scale(1)'
          obs.unobserve(e.target)
        }
      }),
      { threshold: 0.3 }
    )
    refs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="relative px-5 py-24 overflow-hidden" style={{ background: '#FDF6EC' }}>
      
      {/* Background ambient orbs */}
      <div className="absolute top-[10%] left-[-20%] w-[70vw] h-[70vw] bg-[#D4820A]/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#8B1A1A]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 text-center">
        <span className="sec-label">The Magic Behind It</span>
        <h2 className="sec-title mb-10">How Maa Se Works</h2>
      </div>

      <div className="relative z-10 flex flex-col gap-5">
        {STEPS.map((s, i) => (
          <div
            key={i}
            ref={el => refs.current[i] = el}
            className="flex gap-4 items-start bg-white/70 backdrop-blur-xl rounded-[24px] p-6 shadow-[0_8px_32px_-12px_rgba(139,26,26,0.08),inset_0_1px_2px_rgba(255,255,255,0.9)] border border-white/60 transition-all duration-[700ms] ease-out"
            style={{ opacity: 0, transform: 'translateX(-26px) scale(0.96)', transitionDelay: `${i * 150}ms` }}
          >
            <div className="w-11 h-11 rounded-full bg-crimson shadow-[inset_0_-2px_6px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0">
              <span className="font-playfair text-[1.1rem] font-bold text-cream drop-shadow-sm">{s.n}</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[1.1rem] drop-shadow-sm">{s.icon}</span>
                <h3 className="text-[15px] font-bold text-ink">{s.title}</h3>
              </div>
              <p className="text-[13px] text-ink-light leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
        {/* Bottom smooth gradient transition to Menu */}
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent 0%, #F5E8D0 100%)' }} />
    </section>
  )
}
