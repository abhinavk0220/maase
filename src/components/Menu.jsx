import { useEffect, useRef, useState } from 'react'

const CUISINES = [
  {
    id: 'bihari',
    label: '🔴 Bihari',
    name: 'Bihari Cuisine',
    icon: '🍚',
    schedule: 'Standard Meals: Mon – Sat',
    components: [
      { name: 'Rice', desc: 'Steamed, Jira, Pulao etc.' },
      { name: 'Roti', desc: 'Home-style, soft' },
      { name: 'Dal', desc: 'Moong, Toor, Chana, Fry' },
      { name: 'Sabji', desc: 'Dry / Gravy' },
      { name: 'Salad', desc: 'Fresh seasonal greens' },
    ],
    specials: 'Litti Chokha · Dal Puri & Sabji with Kheer · Sattu Parotha · Dal Pitti + Khat Mitti · Kadhi Bodi · Karela Bharta · Katahal ka Kofta',
    specialDay: 'Tue & Thu',
  },
  {
    id: 'odia',
    label: '🟢 Odia',
    name: 'Odia Cuisine',
    icon: '🌿',
    schedule: 'Standard Meals: Mon, Wed, Fri',
    components: [
      { name: 'Rice', desc: 'Steamed, Jira, Pulao' },
      { name: 'Roti', desc: 'Home-style' },
      { name: 'Dal', desc: 'Moong, Toor, Chana' },
      { name: 'Sabji', desc: 'Dry / Gravy' },
      { name: 'Salad', desc: 'Fresh seasonal greens' },
    ],
    specials: 'Pakhala Bhat · Aloo Bharta · Authentic Besara · Dalma Veggies · Baigana Bharta · Ambula Rai · Dahi (Baigana, Bhindi)',
    specialDay: 'Tue & Thu',
  },
  {
    id: 'south',
    label: '🟡 South Indian',
    name: 'South Indian',
    icon: '🥘',
    schedule: 'Standard Meals: Mon – Sat',
    components: [
      { name: 'Rice', desc: 'Plain steamed' },
      { name: 'Pappu', desc: 'Soppu Sambar, Masala Gojju, Bele Sambar' },
      { name: 'Palya', desc: 'Ulli Kalu, Beans, Beetroot' },
      { name: 'Salad', desc: 'Fresh seasonal greens' },
    ],
    specials: 'Mudde + Saru (veg) — once a week · Rasam — twice a week',
    specialDay: 'Weekly',
  },
]

export default function Menu() {
  const [active, setActive] = useState('bihari')
  const cuisine = CUISINES.find(c => c.id === active)
  const cardRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1'
          e.target.style.transform = 'translateY(0) scale(1)'
          obs.unobserve(e.target)
        }
      }),
      { threshold: 0.1 }
    )
    if (cardRef.current) obs.observe(cardRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="menu" className="relative px-5 py-24 overflow-hidden" style={{ background: '#F5E8D0' }}>
      
      {/* Background ambient orbs */}
      <div className="absolute top-[20%] right-[-30%] w-[80vw] h-[80vw] bg-[#8B1A1A]/8 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-20%] w-[60vw] h-[60vw] bg-[#D4820A]/12 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 text-center">
        <span className="sec-label">Our Menu</span>
        <h2 className="sec-title mb-1">Maa's Kitchen, Your Roots</h2>
        <p className="text-[13px] text-ink-light text-center mb-8">
          Har Din Ghar Jaisa — every single day.
        </p>
      </div>

      <div className="relative z-10">
        {/* tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-5 scrollbar-hide">
        {CUISINES.map(c => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`shrink-0 px-5 py-2.5 rounded-full text-[13px] font-bold border transition-all duration-300 active:scale-95 ${
              active === c.id
                ? 'bg-[#1E0D08]/90 backdrop-blur-md text-[#FDF6EC] border-[#1E0D08]/20 shadow-lg shadow-[#1E0D08]/10'
                : 'bg-white/40 backdrop-blur-sm text-ink-mid border-white/50'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* card */}
      <div 
        ref={cardRef}
        key={active} 
        className="bg-white/65 backdrop-blur-xl rounded-[24px] p-5 shadow-[0_16px_40px_-12px_rgba(139,26,26,0.15),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-2px_6px_rgba(139,26,26,0.05)] border border-white/80 animate-fadeIn transition-all duration-[800ms] ease-out"
        style={{ opacity: 0, transform: 'translateY(24px) scale(0.98)' }}
      >
        {/* header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-cream-d shadow-inner flex items-center justify-center text-[1.4rem] shrink-0">
            {cuisine.icon}
          </div>
          <div>
            <p className="font-playfair text-[#8B1A1A] font-bold text-[1.25rem] leading-tight">{cuisine.name}</p>
            <p className="text-[10px] font-extrabold text-[#D4820A] tracking-[1.5px] uppercase mt-0.5">{cuisine.schedule}</p>
          </div>
        </div>

        {/* meal components */}
        <div className="grid grid-cols-2 gap-2.5 mb-5">
          {cuisine.components.map((item, i) => (
            <div key={i} className="bg-white/70 backdrop-blur-md rounded-[12px] px-3.5 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.8)] border border-white/60">
              <p className="text-[13px] font-bold text-ink mb-0.5">{item.name}</p>
              <p className="text-[11px] text-ink-light leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* weekly specials */}
        <div className="bg-gradient-to-br from-[#FFF5E8] to-[#FDF6EC] rounded-[14px] p-4 border border-[#D4820A]/20 shadow-sm relative overflow-hidden">
          {/* subtle decorative background for specials box */}
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#D4820A]/10 rounded-full blur-xl pointer-events-none"></div>
          <p className="text-[10px] font-extrabold text-[#D4820A] tracking-[1.5px] uppercase mb-1.5 relative z-10">
            ✨ Special Regional Meals — {cuisine.specialDay}
          </p>
          <p className="text-[12px] text-ink-mid leading-relaxed font-medium relative z-10">{cuisine.specials}</p>
        </div>
      </div>

        {/* promise */}
        <p className="text-center text-[12px] font-playfair italic text-ink-mid mt-7 opacity-70">
          "Maa ke haath ka khana, delivered right to you everyday"
        </p>
      </div>

      {/* Bottom smooth gradient transition to Pricing */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, #FDF6EC 100%)' }} />
    </section>
  )
}
