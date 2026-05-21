export default function Hero() {
  const areas = ['Marathalli','Kammanahalli','Hoodi','Banaswadi','Kasturinagar']
  const doubled = [...areas, ...areas]

  return (
    <section className="relative min-h-[110svh] flex flex-col items-center justify-center text-center px-6 pb-24 pt-10 overflow-hidden"
      style={{ background: 'linear-gradient(180deg,#FDF6EC 0%,#E8D4B0 55%,#1E0D08 100%)' }}>

      {/* Background ambient orbs */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#D4820A]/10 rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute top-[30%] left-[-20%] w-[60vw] h-[60vw] bg-[#8B1A1A]/5 rounded-full blur-[80px] pointer-events-none" />

      {/* decorative frame */}
      <div className="absolute inset-[14px] border border-crimson/20 rounded-sm pointer-events-none" />

      {/* corner ornaments */}
      {['tl','tr','bl','br'].map(pos => (
        <svg key={pos} viewBox="0 0 52 52" fill="none"
          className={`absolute w-12 h-12 opacity-50 ${pos==='tl'?'top-1.5 left-1.5':pos==='tr'?'top-1.5 right-1.5 -scale-x-100':pos==='bl'?'bottom-1.5 left-1.5 -scale-y-100':'bottom-1.5 right-1.5 scale-[-1,-1]'}`}>
          <path d="M4 4 Q4 26 26 26 Q4 26 4 48" stroke="#8B1A1A" strokeWidth="1.5" fill="none"/>
          <path d="M12 4 Q12 18 26 18" stroke="#D4820A" strokeWidth="1" fill="none" opacity=".6"/>
          <circle cx="4" cy="4" r="2.5" fill="#8B1A1A"/>
          <circle cx="4" cy="48" r="2.5" fill="#8B1A1A"/>
        </svg>
      ))}

      {/* eyebrow */}
      <p className="text-[10px] font-extrabold tracking-[3px] uppercase text-amber mb-4">
        Bangalore's Home Kitchen
      </p>

      {/* actual logo */}
      <img
        src={`${import.meta.env.BASE_URL}logo.jpeg`}
        alt="Maa Se"
        className="w-52 h-auto mb-4 object-contain"
        style={{ filter: 'drop-shadow(0 4px 16px rgba(139,26,26,0.12))' }}
      />

      <p className="font-playfair italic text-ink-mid mb-6"
        style={{ fontSize: 'clamp(1rem,4.5vw,1.35rem)' }}>
        Har Din Ghar Jaisa
      </p>

      <p className="text-[13.5px] text-ink-light max-w-[290px] leading-relaxed mb-8">
        Real home-cooked meals by neighbourhood Maa's — delivered fresh to your door across Bangalore.
      </p>

      <a href="#menu"
        className="inline-block bg-crimson text-cream rounded-full px-9 py-[14px] font-nunito font-bold text-[15px] no-underline transition-all duration-200 active:scale-[0.97] animate-pulse-soft flex items-center justify-center gap-2"
        style={{ boxShadow: '0 6px 24px rgba(139,26,26,0.28)' }}>
        <span>Explore Meals</span>
      </a>

      {/* scroll hint */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bob">
        <span className="text-[9px] tracking-[2.5px] text-ink-light uppercase">scroll</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4820A" strokeWidth="2.5" strokeLinecap="round">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>

      {/* areas marquee strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-crimson flex items-center gap-3 px-4 py-2.5 overflow-hidden">
        <span className="text-[10px] font-extrabold tracking-[2px] uppercase text-amber-light whitespace-nowrap shrink-0">
          Delivering to
        </span>
        <div className="flex gap-5 animate-marquee shrink-0">
          {doubled.map((area, i) => (
            <span key={i} className="text-[12px] text-cream/80 font-semibold whitespace-nowrap">
              📍 {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
